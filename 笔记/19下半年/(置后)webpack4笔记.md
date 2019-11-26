#### webpack可以做什么

* 代码转化
* 文件优化
* 代码分割
* 模块合并
* 自动刷新
* 代码校验
* 自动发布





#### webpack操作指令

1. `npx webpack`    默认的打包方式





#### webpack配置方法

1. 创建 `webpack.config.js`      webpack的配置文件

   也可以`npx webpack --config [配置文件路径]`

2. webpack基于node，所以使用`module.exports`来导出配置对象





#### webpack的配置参数

* `mode`    默认两种模式  production  和  development  (是否压缩代码)

* `entry`   文件的入口路径

* `output`    打包

  * `filename`    打包后的文件名
  * `path`    打包的目标路径（必须为绝对路径，可以使用`path`模块的`.resolve(__dirname, [文件夹]）`,dirname表示当前路径

* `devServer`    开发服务器配置

  * `port`    端口
  * `progress`    执行时是否显示进度（没啥卵用）
  * `contentBase`    根目录路径（默认为'./'）
  * `open`    加载完毕后是否直接打开页面
  * `compress`    是否启用文件压缩    （错误）

* `plugins`    插件数组

  * (例)  `html-webpack-plugin`可以将打包好的文件插入HTML模板当中

    * ```
      plugins: [
      	new HtmlWebpackPlugin({    // 使用前需require进来
      		template: "./index.html",  // 模板
      		filename: "index.html",  // 生成的文件名
      		minify: {} // 压缩生成的html文件，参数详见文档
      	})
      ]
      ```

* `module`    各种loader

  * ```
    rules: [ // 规则：loader的顺序 默认从右(下)向左(上)执行.
    	{
    		test: /\.less$/, // 正则，用于表示满足什么规则的文件启用loader
    		user: [{  // 可以直接写loader名称，也可以写成对象
    			loader: "style-loader",  // 用户将编译好的css插入页面
    			options: {  // 用于loader配置
    				insertAt: "top" // 将编译好的css插入style最顶部
    			},
    			"css-loader",  // 用于解析@import语法
    			"less-loader"  // 将less解析为css （需同时安装less）
    		}]  
    	}
    
    ]
    ```

  * 





#### webpack-dev-server

* 通过`npx webpack-dev-server`来启动服务





#### webpack loader

* 功能：webpack默认只支持JS模块化，CSS，img等其它静态资源则需要loader