title: 关于ionic在ios9中出现的问题
date: 2015-10-13 20:02:36
tags:
---
```
Error: [$rootScope:infdig] 10 $digest() iterations reached. Aborting!
Watchers fired in the last 5 iterations: []
```
需下载补丁：

https://gist.githubusercontent.com/IgorMinar/863acd413e3925bf282c/raw/58efa6bad10af41761e866084cb34bca28c7aa9d/angular-ios9-uiwebview.patch.js

在app.js（启动js）中应用模块：

```
'ngIOS9UIWebViewPatch'
```