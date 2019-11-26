#### Git 本地结构

1. 工作区： 写代码  （`git add` 到暂存区）
2. 暂存区： 打算要提交的东西    （`git commit` 到本地库）
3. 本地库： 存的历史版本



#### Git和代码托管中心

1. 局域网环境下
   * GitLab服务器
2. 外网
   * GitHub
   * 码云

托管中心的作用： 远程库用于存储代码



#### 本地库操作

1. 初始化本地库： `git init`

2. 设置签名

   * 用户名： xxx    `user.name`

   * Email： xxx@.com      `user.email`

     作用： 区分不同开发人员的身份

     PS： 这里设置的签名和远程库的账号密码没有任何关系

   * 项目级别： 尽在当前项目的范围内生效  `git config`     

     ​					通过`cat .git/config`查看用户信息

   * 系统用户级别： 登录当前操作系统的用户范围  `git config --global`

     ​					通过`cat ~/.gitconfig`查看用户信息

3. 查看状态    `git status`   

   * `git add  xxx`    想缓冲区添加文件   (`.`    可以添加工作区的所有文件)
   * `git rm --cached  xxx`     从缓冲区移除文件

4. 查看历史记录    

   * `git log`    完整版
   * `git log --oneline / git log --pretty=oneline`     内容显示于一行
   * `git reflog`    内容显示于一行，并且显示跳转历史记录所需步数

5. 选择当前状态

   * `git reset --hard [索引值]`    【推荐】通过索引任意切换
   * `git reset --hard HEAD^`      通过^来向前回退一次，多个回退多次
   * `git reset --hard HEAD~[次数]`  通过(~次数)来向前一次回退多个版本

6. `reset`指令三个参数的对比

   * `--soft`    仅仅在本地库移动HEAD指针
   * `--mixed`  在本地库移动HEAD指针，并且重置暂存区
   * `--hard`    在本地库移动HEAD指针，并且重置暂存区和工作区

7. Git文件改动对比

   * `git diff [文件名]`    默认与缓存区进行比较
   * `git diff [版本] [文件名]`   与本地库进行比较
   * PS： 如果不加文件名，默认对比工作区中所有的文件
   
8. 忽略检查某些文件的状态    （比如node的node_modules文件夹）

   * `touch .gitignore`    创建忽略文件

   * 在内部添加需要忽略的文件

     ```
     例：
     	node_modules/
         .idea
         .vscode
         *.suo
         *.ntvs*
         *.njsproj
         *.sln
     ```

     



#### 分支操作

1. `git branch -v`    查看所有分支 

2. `git branch [分支名]`    创建新分支

3. `git checkout [分支名]`    切换分支

4. `git merge [有新内容的分支]`    合并分支

    PS: 合并分支时，需切换至主要分支上，然后调用`merge`合并新内容分支



#### 解决分支冲突

​	原因：同一文件收到了多个分支的修改，Git无法自行判断舍弃保留

1. 编辑文件，删除特殊符号

2. 把文件修改到满意的程度

3. 调用`git add [文件名]`  

4. 调用`git commit "日志信息"`

   PS：此时的`commit` 不可以带有具体文件名



#### 远程库

1. `git remote -v`    查看保存的默认远程库地址

2. `git remote add [远程库名][https地址] `    添加默认的远程库地址

3. `git remote rm [远程库名]`    删除远程库地址

4. `git push [远程库名] [远程库分支]`    推送

5. `git clone [远程库地址]`    克隆

   * 下载远程库
   * 创建origin远程地址别名
   * 初始化本地库

6. `git fetch [远程库地址] [分支]`    将远程库的内容拉取到本地，但不进行合并

   ​      可以使用`git checkout origin/master`切换到远程库分支查看，

   ​      或者使用`merge`将二者合并

   PS：不相关历史记录问题可以添加`--allow-unrelated-histories`来解决

7. `git pull [远程库地址] [分支]`     相当于直接执行`fetch + merge` 操作

   



#### 远程库协同开发冲突

​	原因：不是最新的版本是不能向远程库推送的，必须将最新版拉取到本地，在通过上述的解决冲突的版本修改好后，再次推送。



#### SSH免密登录

1. `ssh-keygen -t rsa -C [用户名]`    在~目录下创建SSH
2. 复制id_rsa.pub文件，将公钥粘贴到远程库上