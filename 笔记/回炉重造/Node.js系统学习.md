## Node.js

* 许多人会拿node和一些传统语言(java,c#)来做比较，这种对比其实打一开始就是错误的，因为`Node.js not is a programming language`，它只是可以将JS脱离浏览器的一种执行环境，同理，他也不能和一些框架作对比(Django,ASP.NET)
* JS的非堵塞以及异步特性决定它很擅长处理网络请求和文件请求，但相应的，node很不擅长密集数据处理，例如：视频渲染、图片操作，因为这类应用需要大量的计算操作(这里留个坑，搞懂为什么)





### Node Module System

* 在Browser环境下，当我们定义一个全局变量时，这个变量会被添加到全局对象`window`身上，但在Node环境下，我们定义的全局变量不会被定义在全局对象`global`身上

* module对象中的exports用于保存公开的元素

* node是如何做到模块化的（CommonJS）

  其实写在node环境中的代码并不会被直接执行，首先，node会使用一层立即执行函数将代码包裹住，你操作的属性(`__dirname`、`module`...)其实只是其中的参数：

  ```
  // 大概是这样,当然这些都是node自动帮你做得
  (function(module...){
      // 你的代码
  })(....)
  ```




#### 语义化版本控制

> 例如： 4.13.6

* 第一个4，主要版本号，如果你要进行的更新会破坏现有的程序，你需要更新为5.0.0
* 第二个13，次要版本号，如果你只是要添加一个新特性，你需要更新为4.14.0
* 第三个6，补丁号，如果你在现有的版本中修复了一些bug，你需要更新为4.13.7