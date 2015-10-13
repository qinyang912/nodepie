title: 前端技术之怎么在chrome里批量下载base64图片
date: 2015-10-13 20:10:41
tags:
---
新任务，在chrome里批量下载base64编码的图片。

```javascript
var bytes=window.atob(base64Str.split(",")[1]);//base64Str是base64编码的字符串
var ab = new ArrayBuffer(bytes.length);
var ia = new Uint8Array(ab);
for (var i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
}
var image = new Blob( [ab] , {type : 'image/png'});
var url = url = URL.createObjectURL(image);
var a = document.createElement('a');//这里建一个a标签，用于下面下载图片
a.href = url;
a.download = fileName;//fileName是下载的图片名称
var e = document.createEvent('MouseEvents');
e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
a.dispatchEvent(e);//触发点击事件，开始下载

```
