## 一些简单的数学定律

```
// 结合律（assosiative）
add(add(x, y), z) == add(x, add(y, z));

// 交换律（commutative）
add(x, y) == add(y, x);

// 同一律（identity）
add(x, 0) == x;

// 分配律（distributive） 1*2+3 = 1*2+1*3
multiply(x, add(y,z)) == add(multiply(x, y), multiply(x, z));
```



## 函数式编程

#### 什么是纯函数？

> 纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。 



#### 函数中的副作用

> 副作用是在计算结果的过程中，系统状态的一种变化，或者与外部世界进行的*可观察的交互*。 

副作用可能包括，但不仅仅限于：

* 更改文件系统
* 往数据库插入记录
* 发送一个 http 请求
* 可变数据
* 打印/log
* 获取用户输入
* DOM 查询
* 访问系统状态



#### curry

> curry 的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。 

```
  function add() {
    var arg = [].slice.call(arguments);
	
	// 返回一个新的函数，并借助闭包向后操作
    return function a() {
      if (arguments.length == 0) {

        return arg.reduce((a, b) => a + b)
      } else {
        [].push.apply(arg, arguments);
        console.log(arg)

        return a
      }
    }

  }

  console.log(add(1)(1)(3)())
```



#### compose 组合

组合像一系列管道那样把不同的函数联系在一起，数据就可以也必须在其中流动——毕竟纯函数就是输入对输出，所以打破这个链条就是不尊重输出，就会让我们的应用一无是处。 (???)

