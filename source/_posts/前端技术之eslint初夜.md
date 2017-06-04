title: 前端技术之eslint初夜
date: 2015-11-03 15:49:26
tags:
---
### 配置ESLint:
1. **Configuration Comments** - use JavaScript comments to embed configuration information directly into a file
2. **Configuration Files**

### 几个可配置的参数
* **Environments** - 代码运行的环境,不同环境都有不同的默认配置。
* **Globals** - 在执行的时候需要的一些全局变量。
* **Rules** - 启用哪些规则，错误级别是什么。


### 定义js语言特性(ES5/ES6)
> 在`ecmaFeatures`属性里，定义相应的js特性

* arrowFunctions - 箭头函数
* binaryLiterals - enable binary literals
* blockBindings - enable let and const (aka block bindings)
* classes - enable classes
* defaultParams - enable default function parameters
* destructuring - enable destructuring
* forOf - enable for-of loops
* generators - enable generators
* modules - enable modules and global strict mode
* objectLiteralComputedProperties - enable computed object literal property names
* objectLiteralDuplicateProperties - enable duplicate object literal properties in strict mode
* objectLiteralShorthandMethods - enable object literal shorthand methods
* objectLiteralShorthandProperties - enable object literal shorthand properties
* octalLiterals - enable octal literals
* regexUFlag - enable the regular expression u flag
* regexYFlag - enable the regular expression y flag
* restParams - enable the rest parameters
* spread - enable the spread operator for arrays
* superInFunctions - enable super references inside of functions
* templateStrings - enable template strings
* unicodeCodePointEscapes - enable code point escapes
* globalReturn - allow return statements in the global scope
* jsx - JSX
* experimentalObjectRestSpread - enable support for the experimental object rest/spread properties (IMPORTANT: This is an experimental feature that may change significantly in the future. It's recommended that you do not write rules relying on this functionality unless you are willing to incur maintenance cost when it changes.)


示例代码：

```
{
    "ecmaFeatures": {
        "blockBindings": true,
        "forOf": true,
        "jsx": true
    },
    "rules": {
        "semi": 2
    }
}
```
### Specifying Parser




