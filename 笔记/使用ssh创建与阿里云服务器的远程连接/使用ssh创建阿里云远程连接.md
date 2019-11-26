#### 使用ssh来建立与阿里云服务器的远程连接

1. 在本机根目录~下找到.ssh文件夹，cd进入

   ![1573176297759](/img/1.png)

2. 使用指定指令`ssh-keygen -t rsa -f 文件名`创建相关文件（文件名自定义，后面要统一）

   ​	![](/img/2.png)

3. 使用`scp 上面指定的文件名.pub root@服务器IP:.`将文件上传到服务器的根路径下

4. 使用`ssh root@服务器IP` 连接上服务器检查是否上传成功

   ![](/img/3.png)

5. 使用指令`cat ~/aliyun.pub  >> ~/.ssh/authorized_keys` 将上传的ssh文件追加到服务器的指定文件中 （指令中的aliyun.pub要更改为你在创建时候的文件名）

   ​	![](/img/5.png)

6. 然后使用指令`systemctl restart sshd` 重启服务器的ssh （执行后没有任何反应即为成功）

7. 重启成功服务器的ssh后，使用指令`exit`退出服务器

8. 再次进入本机的.ssh文件下，使用指令`code config`创建一个config文件（code不能用可能是没有vscode，正常情况会使用vscode打开新建的config文件，不过这步可以直接鼠标右击创建也可以）

9. 正常情况下，此时的aliyun.pub文件以及没啥用了，可以删了（嫌麻烦不删也行）

10. 在被vscode打开的config文件中输入如下信息，并保存退出

    ```
    Host aliyun （这个是你以后连接服务器的一个名字，自定义即可）
      HostName 服务器IP
      port 22
      User root
      IdentityFile ~/.ssh/aliyun (aliyun替换为上面自定义的文件名)
    ```

11. 将本机的.ssh文件夹下的know_hosts中的信息删除

12. 将上面的工作都顺利完成之后，就可以使用指令`ssh aliyun`来访问服务器了(aliyun替换为config中你自定义的名字)，如果访问过程中有询问提示，回复yes即可

    ![](/img/6.png)