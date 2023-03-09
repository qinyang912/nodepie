title: 写vue的一些建议
date: 2023-03-06 16:08:07
tags:
- vue
- 开发建议
---
{% raw %}
<p style="text-align: center; font-size: 150px;">优美的代码和好用的功能都很重要</p>
{% endraw %}

# 复杂列表, 列表和item的逻辑要分开，不要混到一起
> 1. 避免使用过多ref
> 2. 避免代码臃肿逻辑混乱
> 3. 降低单个组件的复杂度（列表的逻辑和item的逻辑写到一起，会把组件复杂度提升一个量级）
> 4. 让你的代码天然拥有一道隔离墙
> 5. item的状态值可以挂载到item组件上，而不是侵入性的挂载到item对应的数据上

示例:
```vue
<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <span :ref="`name-${item.id}`" @click="onClick(item)">{{ item.name }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => ([]),
    },
  },
  methods: {
    onClick(item) {
      this.$refs[`name-${item.id}`]
    },
  },
}
</script>
```

示例改进:
```vue
<!-- 子组件 -->
<template>
  <li>
    <span ref="name" @click="onClick">{{item.name}}</span>
  </li>
</template>
<script>
export default {
  props: {
    type: Object,
    default: () => ({}),
  },
  methods: {
    onClick() {
      this.$refs.name
    }
  }
}
</script>

<!-- 父组件 -->
<!-- 略 -->
```

# 聚合代码
> 1. 合理拆分的同时要合理内聚, 相关的逻辑尽量写到一起
> 2. 使用 this.$once('hook:xxx') 帮助你聚合必要的逻辑

示例1 hover到任务上出现预览弹窗:

代码1 使用k-task-preview组件的地方:
```vue
<template>
  <div>
    <!-- 省略很多 -->
    <k-task-preview
      v-if="getPopoverStatus(task.id).showPreview"
      v-model="getPopoverStatus(task.id).showPreview"

      :task="task"
      :isLoading="getPopoverStatus(task.id).isLoading"
    >
    </k-task-preview>
  </div>
</template>
```

代码2 控制showPreview的地方, 在一个mixin里:
```js
export default {
  methods: {
    async handleMouseenterTask(task, status) {
      // 任务预览
      this.timer = setTimeout(() => {
        status.showPreview = true
      }, 2000)
    },
  },
}
```

代码3 调用handleMouseenterTask的地方:
```vue
<template>
  <draggable>
    <!-- 省略很多代码 -->
    <li
      @mouseenter="handleMouseenterTask(task, getPopoverStatus(task.id), true)"
      @mouseleave="handleMouseleaveTask($event, getPopoverStatus(task.id))"
    ></li>
  </draggable>
</template>
```

为了实现任务的hover预览，把基础的代码分在了3个地方, 如果再结合3个视图，外加一个项目集，可见代码会有多分散

示例1 改进:
```vue
<template>
  <k-task-preview
    v-if="isShowPreview"
    v-model="isShowPreview"
  >
  </k-task-preview>
</template>
<script>
import sdk from '@rishiqing/kite-design/sdk'

import {
  getParentTreeNodeContentElement,
} from './utils'

export default {
  data() {
    return {
      isShowPreview: false,
    }
  },
  methods: {
    onMouseEnter() {
      // 任务预览
      this.timer = setTimeout(async () => {
        this.isShowPreview = true
      }, 2000)
    },
    onMouseLeave(event) {
      this.isShowPreview = false
      clearTimeout(this.timer)
    },
  },
  mounted() {
    const parentEl = getParentTreeNodeContentElement(this) || this.$el.parentElement

    parentEl.addEventListener('mouseenter', this.onMouseEnter)
    parentEl.addEventListener('mouseleave', this.onMouseLeave)
  },
}
</script>
```

改进之后, 想要任务预览的地方，直接引入这个组件即可.

还可以参考任务完成数量/任务总数组件的重构.

# 合理利用 函数组件/JSX 的优势
> 1. 函数组件可以脱离`.vue`文件, 可以在js文件里灵活的完成组件的开发
> 2. 当你有一批组件有很多共通点, 但又有那么点不一样, 这种时候使用函数组件来开发准没错. 比如筛选组件, 列表视图的字段

# 用好provide和inject
> 1. 局部状态管理`new Vue()`
> 2. 局部共享某些对象
> 3. 不要没了vuex就感觉寸步难行, vuex就是一个被封装的`new Vue()`

# 别过分相信mixin的魔力
> 1. 避免中了mixin的毒, mixin太多，你的代码看似拆分了，共享了，实则可能变得更乱
> 2. 通过mixin引入代码, 隔离性太差, 无法实现命名空间, 容易导致引用混乱
> 3. 尽量做组件拆分

# 原生DOM的能力
> 1. 别忘了原生的能力, 原生dom在某些时候是可以辅助我们办事的.

比如上面提到的任务预览组件, 我猜测之前没有把逻辑写到一起的原因，很大程度就是为了能在template里写@mouseenter监听事件, 而没有想到要通过原生的方式监听

# 函数传参, 及时止损
> 1. 超过3个参数，请考虑用对象传参
> 2. 在加参数的过程中，不要想着如果改成对象，其他地方也要调整麻烦，干脆直接往后加，要及时止损

下面是一个函数的传参, 9个参数
```js
export function sdkTaskEventBind(
  oldInsertSubscription,
  oldRemoveSubscription,
  oldUpdateSubscription,
  oneRxdbListIns,
  theSdk,
  oneGanttLibIns,
  loadGanttDependsDebounceFun,
  vm,
  isGroupByResponsibility,
) {}
```

# 杜绝复杂组件, 开发过程中, 能拆就拆
> 1. 不要一个`.vue`文件到底
> 2. 不要以为把template, script, style分三个文件写就是拆分了
> 3. 复杂的组件是要在逻辑，代码，数据这三大块上做拆分
> 4. 合理利用这些技巧, 合理组织和拆分代码

# 杜绝面条代码
> 1. 面条代码都是没有经过太多思考就写出来的代码
> 2. 面条代码没有灵魂

有一个文件: @apps/rishiqing-plan/src/views/module-task/share/mixin-header.js, 为了实现列表宽度可调
# 其他提示
> 1. 有if的地方，提前return, 不要一个if包裹一大坨代码
> 2. 尽量避免使用stopPropagation, 可以在event上加一个标记用于过滤.
> 3. v-on="$listeners" 帮助你更好的区分组件的功能