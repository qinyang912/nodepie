title: .gitlab-ci.yml使用
date: 2015-07-09 10:48:50
tags: gitlab,gitlab-ci
thumbnailImage: avator.jpg
---
## 前言
`gitlab-ci`确实有点坑，为了使用它的runner自动执行`shell`，然后编译，折腾了一两天，最后发现，呵呵，问题就这样稀里糊涂被解决了.
## 问题
在工程的根目录添加了`.gitlab-ci.yml`文件之后,gitlab-ci build的状态每次都是pending，各种搜google，各种stackoverflow，都找不到解决办法。
### .gitlab-ci.yml文件内容
 
## 解决办法
最后实在没办法，把之前的runner删了，重新建了一个runner，在提示需要哪个通道的时候，选择shell。
### 新建runner的脚本
```bash
cd ~gitlab_ci_multi_runner
gitlab-ci-multi-runner register

Please enter the gitlab-ci coordinator URL (e.g. http://gitlab-ci.org:3000/ )
https://ci.gitlab.org/
Please enter the gitlab-ci token for this runner
xxx
Please enter the gitlab-ci description for this runner
my-runner
INFO[0034] fcf5c619 Registering runner... succeeded
Please enter the executor: shell, docker, docker-ssh, ssh?
docker
Please enter the Docker image (eg. ruby:2.1):
ruby:2.1
INFO[0037] Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!
```
## result
![Resize icon][gitlab-ci]

[gitlab-ci]: gitlab-ci.png
