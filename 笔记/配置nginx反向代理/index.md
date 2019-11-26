#### 下载nginx

* 使用指令`yum install -y nginx` 在服务器下载nginx



#### 同步nginx配置文件到本机上

* 使用指令`cp /etc/nginx/nginx.conf 项目结构目录` 将nginx的配置文件copy到项目文件夹中
* 然后使用vscode的sftp插件将项目结构同步到本机

* 在本地将nginx.conf文件进行修改  （主要修改以下部分，具体配置可以查阅相关文档）

  ![](/img/1.png)



#### 最后处理

* 使用vscode的sftp将配置好的nginx.conf同步到服务器上
* 之后使用指令` cp /home/Bpoint/nginx.conf /etc/nginx/nginx.conf`再将nginx的配置文件覆盖掉
* 最后使用指令`systemctl restart nginx` 重启nginx之后即可