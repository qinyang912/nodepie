title: AST
date: 2021-04-06 12:10:30
tags:
  - AST
  - 抽象语法树
  - babel
background: ast-flow.png
---
{% raw %}
<p style="text-align: center;">理解了AST, 就理解了整个前端工具链路</p>
{% endraw %}

## 简介
AST(Abstract Syntax Tree), 抽象语法树, 是源代码的抽象语法结构的树状表现形式.

抽象语法树是语言无关的, 任何语言都有抽象语法树.

AST在前端无处不在, 我们熟悉的开发工具几乎全依赖于AST进行开发, webpack, babel, eslint, prettier, istanbul无一不在深度使用AST, 所以学会AST, 你就可以撬动整个工具圈.

## 编译器的工作流程
编译器是AST典型的应用场景, 其最基础的部分就是对AST的处理, 从广义上讲, babel, eslint都属于编译器, 所以让我们从分析一个编译器的工作流程开始, 来建立对AST的基本认识.

![img](ast-flow.png)

编译器的工作主要分3个步骤:
1. 词法分析
2. 语法分析
3. 代码生成

源代码:
```js
const age = 18;
```

### 词法分析
词法分析也叫令牌化(Tokenization), 是在源代码的基础上进行分词断句, 然后生成一连串令牌, 所谓令牌(Token), 其实就是分词断句之后, 对每个单词进行分类, 是属于关键字还是标识符还是标点符号等等. 你可以想象成词法分析就是把你的代码从string类型转换成了数组, 数组的元素就是代码里的单词, 然后对每个单词标记了类型.

大部分编辑器的语法高亮，就是用的词法分析结果.

但是词法分析结果缺少一些比较关键的信息:
1. 没有任何语法信息
2. 体现不了代码的执行先顺序

所以需要进一步进行语法分析.

{% codeblock 词法分析结果 lang:json  %}
[
  { "type": "Keyword", "value": "const" },
  { "type": "Identifier", "value": "age" },
  { "type": "Punctuator", "value": "=" },
  { "type": "Numeric", "value": "18" },
  { "type": "Punctuator", "value": ";" },
]
{% endcodeblock %}

### 语法分析
语法分析也叫解析(Parsing), 是在词法分析的基础上, 把令牌列表转换成抽象语法树.

从下面 [AST Explorer](https://astexplorer.net/) ([在新窗口打开](https://astexplorer.net/#/gist/3fad609ffc39889a0af69602bc57c0b7/da825e63460326ff79bbb605085a76901239a012))的数据可以看到, 抽象语法树携带了更多的语法信息, 在词法分析的结果里, 我们只能看到代码里有哪些关键字, 有哪些标识符, 但是在抽象语法树里, 我们却能看出这句代码是在做变量声明.


{% iframe https://astexplorer.net/#/gist/3fad609ffc39889a0af69602bc57c0b7/da825e63460326ff79bbb605085a76901239a012 100% 400px %}

抽象语法树会略去一些无关紧要的信息, 比如代码末尾的`;`在抽象语法树里没有任何记录, 这也是抽象语法树名字里抽象两个字的由来, 是因为这里的语法并不会表示出真实语法中出现的每个细节.

联系前面一个步骤, 你可以把这两个步骤想象成DOM树的解析过程, 词法分析就相当于是把HTML代码转换成body, div等各种标签的组合, 而语法分析就相当于是在把各种标签转换成DOM树.

### 代码生成
有了抽象语法树, 我们可以把代码转换成任何我们想转换成的格式. 就比如我们常用的Babel, 就是把我们写的ES6, ES7语法转换成低版本浏览器可以识别的ES5. 

比如下面这个[AST Explorer](https://astexplorer.net/)例子([在新窗口打开](https://astexplorer.net/#/gist/3fad609ffc39889a0af69602bc57c0b7/f3d8a86ef373dc666a77e702de1ce252ad4296fa)), 就是利用babel插件, 把`const`转换成`var`
{% iframe https://astexplorer.net/#/gist/3fad609ffc39889a0af69602bc57c0b7/f3d8a86ef373dc666a77e702de1ce252ad4296fa 100% 600px %}

为什么非要基于抽象语法树做代码转换, 而不能直接用词法分析结果的令牌列表或者干脆直接读取源代码做字符串替换呢? 原因非常简单, 字符串或者令牌列表没有任何语法信息, 我们很难做到正确转换. 比如, 我们要重命名一个变量, 在令牌列表或者字符串里, 我们很难判断出这个变量的作用域, 以及它还在哪些地方有使用, 以及重命名之后是否会和其他变量名产生冲突, 但如果基于AST做这些, 将会变得异常容易.

## 如何阅读AST的数据结构
JS的AST工具可谓是争奇斗艳, 各家都有各自的实现, 从AST Explorer上可以看到, 有关JS的AST转换工具都有十几个, 但有个好消息是, JS的AST有一个行业标准: [ESTree](https://github.com/estree/estree), ESTree定义了每个语法信息在AST里的数据结构, 各家也不是完全按照ESTree定义的结构来实现的AST, 都有增删数据, 但大体上是相同的.

ESTree里按照每个JS版本的语法规范分别定义了数据结构, 以`es5`为基础, 后续的`es2015`, `es2016`等等都是基于`es5`进行扩展

以`VariableDeclaration`(变量声明)为例, 在es5里的数据结构是:
{% codeblock lang:js https://github.com/estree/estree/blob/master/es5.md#variabledeclaration %}
interface VariableDeclaration <: Declaration {
  type: "VariableDeclaration";
  declarations: [ VariableDeclarator ];
  kind: "var";
}
{% endcodeblock %}
在es6里的数据结构是:
{% codeblock lang:js https://github.com/estree/estree/blob/master/es2015.md#variabledeclaration %}
extend interface VariableDeclaration {
  kind: "var" | "let" | "const";
}
{% endcodeblock %}

可见, 在es5的基础上, es6新增了let和const

以下是一个较为复杂的例子([在新窗口打开](https://astexplorer.net/#/gist/3fad609ffc39889a0af69602bc57c0b7/f91d69bf54dea7e39a1fb05341f6c261293e05a4)):
{% iframe https://astexplorer.net/#/gist/3fad609ffc39889a0af69602bc57c0b7/f91d69bf54dea7e39a1fb05341f6c261293e05a4 100% 400px %}

## babel插件开发入门
### 开发手册
社区里有人写了一份babel的插件手册, 同时也有[中文翻译](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md), 非常详尽, 通篇读下来之后, 你会对AST和Babel插件的开发有一个非常全面的认识. 这个手册的最近更新时间是在2017年12月份, 阅读的时候有几个注意点:
1. [babylon](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#toc-babylon): babylon已经非废弃, babel现在用的是[@babel/parser](https://github.com/babel/babel/tree/master/packages/babel-parser)
2. [babel-traverse](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#babel-traverse): 已经被更新为[@babel/traverse](https://github.com/babel/babel/tree/master/packages/babel-traverse)
3. [babel-types](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#babel-types): 已经被更新为[@babel/types](https://github.com/babel/babel/tree/master/packages/babel-types)
4. [babel-generator](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#babel-generator): 已经被更新为[@babel/generator](https://github.com/babel/babel/tree/master/packages/babel-generator)
5. [babel-template](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#babel-template): 已经被更新为[@babel/template](https://github.com/babel/babel/tree/master/packages/babel-template)

我们前面讲到编译器有三大环节, 这个开发手册主要就是聚焦在第三个环节: 代码生成, 告诉你在babel插件里如何遍历AST, 如何修改AST, 有哪些注意事项. 下面我也按这三个部分, 给大家分析一下.

#### 如何遍历AST
##### 深递归遍历

想要转换AST, 需要对AST树形结构做深递归遍历, 也就是从入口开始, 挨个往下遍历, 遇到一个节点有子节点, 会继续遍历这个节点的子节点，直到把所有的子节点遍历完, 再一步一步返回, 遍历其他节点.

举例说明:
{% iframe https://astexplorer.net/#/gist/3fad609ffc39889a0af69602bc57c0b7/04a064de6bde132234c5ee8a83820b83a7e0dd93 100% 400px %}

##### Visitors(访问者)
访问者模式提供了方法用于在遍历AST的过程中, 获取到具体的节点, 在遍历AST过程中, 会涉及到进入一个节点, 和退出一个节点, 对应的访问者也有这两个模式.

```js
export default function plugin(babel) {
  return {
    visitor: {
      Identifier: {
        enter(path) {},
        exit(path) {}
      }
    }
  }
}
```

```js
export default function plugin(babel) {
  return {
    visitor: {
      Identifier(path) {

      }
    }
  }
}
// 等效于
export default function plugin(babel) {
  return {
    visitor: {
      Identifier: {
        enter(path) {},
      }
    }
  }
}
```

#### 如何修改AST
##### Paths(路径)
在babel的插件中, 不会让你直接修改对应的节点, babel在AST节点的基础上做了一层封装, 这一层封装叫路径, 一个路径包含有具体的节点, 以及这个节点的父级节点和父级路径, 等其他关联信息. 在访问者函数里的第一个参数就是路径.

你可以想象成路径是babel暴露给我们的最外层的接口, 我们所有的操作都需要基于路径提供的接口来实现

##### Scopes(作用域)
每个路径上都有一个`scope`属性, 用于标明这个路径所属的作用域是哪个.

##### Bindings(绑定)
每个`scope`上都有一个`bindings`属性, 用于标明这个作用域下绑定了多少引用.

##### 举例说明
[新窗口打开](https://astexplorer.net/#/gist/3fad609ffc39889a0af69602bc57c0b7/f7086c21a276863db5363075a2d53c61e8d67fc2), 需要打开控制台查看路径信息

{% iframe https://astexplorer.net/#/gist/3fad609ffc39889a0af69602bc57c0b7/f7086c21a276863db5363075a2d53c61e8d67fc2 100% 600px %}

##### @babel/parser
是babel把源代码转换成AST的核心部件, 但一般开发插件用不到, 因为我们可以通过访问者模式, 直接拿到路径信息

##### @babel/traverse
是babel提供的用于递归遍历AST的部件

##### @babel/types
是babel提供的一个转换AST的工具集，你可以想象成babel的lodash, 里面有很多现成的api可用.

我们在写插件的时候, 暴露出去的方法会获得一个babel对象, 里面有个属性值`types`, 就是这个`@babel/types`

```js
export default function plugin(babel) {
  console.log(babel.types)
}
```

##### @babel/generator
是babel提供的一个代码生成器, 把转换之后的AST生成对应的代码, 插件里一般用不到

##### @babel/template
是babel提供的部件, 可以基于字符串模板生成AST

### 注意事项
babel的插件系统非常庞大, 但是他的开发文档, 确实不怎么友好, 很多接口都需要翻阅源码才能找到. 下面就注明一些接口文档的地址.
* @babel/types: https://babeljs.io/docs/en/babel-types.html
* babel的AST规范: https://github.com/babel/babel/blob/master/packages/babel-parser/ast/spec.md
* 路径相关接口:
  * https://github.com/babel/babel/tree/1ef78ca55b39773cbb5974960b7b34e2fca6e043/packages/babel-traverse/src/path
* 作用域相关接口:
  * https://github.com/babel/babel/tree/1ef78ca55b39773cbb5974960b7b34e2fca6e043/packages/babel-traverse/src/scope
* AST节点类型的定义: https://github.com/babel/babel/tree/5b99b8f2217eb253edc66728eedb2ec260d8065d/packages/babel-types/src/definitions

### babel插件: 移除vue的公共接口调用
这个babel插件是日事清的vue-cli-plugin-rishiqing里的一个功能. 日事清的web端是基于微应用进行开发的, 由于各个微应用在线上的时候是共用同一个vue, 为了防止微应用里不小心调用vue的公共接口导致全局的vue的状态被污染, 然后开发了这么一个babel插件, 在构建生产环境的微应用代码的时候自动把这些调用公共接口的代码给移除了.

公共接口包括:
```js
Vue.directive
Vue.filter
Vue.component
Vue.use
Vue.mixin
Vue.config
Vue.prototype
```

[在新窗口打开](https://astexplorer.net/#/gist/3fad609ffc39889a0af69602bc57c0b7/69c709b0c2f727c34d855233bb7fbd9c111d2313)
{% iframe https://astexplorer.net/#/gist/3fad609ffc39889a0af69602bc57c0b7/69c709b0c2f727c34d855233bb7fbd9c111d2313 100% 600px %}

## AST的其他应用场景

### 有人知道istanbul是如何检测代码的测试覆盖率的吗?

### 有人知道为什么eslint要留一个parser参数, 供用户配置吗?

### 有人想过, 如何一键把vue2.0的代码自动重构成vue3.0的代码吗?

## 参考链接
* https://www.twilio.com/blog/abstract-syntax-trees
* https://www.semantics3.com/blog/understanding-code-coverage-1074e8fccce0/
* https://eslint.org/docs/developer-guide/working-with-custom-parsers
* https://github.com/jamiebuilds/babel-handbook