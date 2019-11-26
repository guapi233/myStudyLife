 ## OOP 四大特性

* 封装 	Encapsulation

  ​	重新组合相关的变量和函数，减少复杂性，便于重用

* 抽象        Abstraction

    	​	隐藏细节和复杂性，只显示必要的部分，降低复杂性，隔离代码更改导致的影响

* 继承         Inheritance

  ​       	消除多余的代码

* 多态         Polymorphism

  ​	消除丑陋的选择判断语句



## new到底做了什么?

 1 . 创建了一个空的对象

 2 . 将构造函数中的`this`指向了这个空对象

 3 . 从构造函数中`return`出了这个对象



## 工厂函数和构造函数

那个舒服用哪个。。。



## 再遇闭包

闭包规定了一个函数内部的函数可以访问该函数内的变量，及时这个函数以及结束，但是其身上的变量依旧可以在内部函数中进行调用并保持状态。

换句话说，作用域只是暂时的，而闭包规定的变量会一直长存，直至它所在的函数死亡。



## Object身上的成员定制方法 

* Object.defineProperty
* Object.defineProperties 

```
 function A(){
        Object.defineProperty(this,属性名,{
            get(){
                alert('aaa')
            },
            set(value){
                alert(value)
            }
        })
    }
```

感觉和Proxy好像，都是可以在访问/修改前拦截到信息，都具有getter和setter，还可以在内部设置属性的特性：

​	 writable 是否可更改

​	 enumerable 是否可被枚举 （注意是枚举（keys获取），不是简单得访问）

​	 configurable 是否可删除



## 简简单单认识原型

原型其实就是对象的父母，其实也就是个普通的对象，除了根对象(元对象)之外，每个对象都有原型，它们的原型也有原型，直至元对象，JS引擎向上检索的过程就是原型链

PS： 空数组继承数组原型，数组原型又继承根原型

​	  Object()就是元对象



## \_\_proto\_\_和prototype

* 对象本身的\_\_proto\_\_和其原型本身的prototype指向一个对象，前者指的是自身的原型，后者指向的是自身。

* 由于JS只是引了引用类型的引用，所以即使你在实例之后向原型上添加属性/方法，依旧有效（动态）

* Object.keys只能枚举实例中的属性/方法，for in 还可以枚举出原型中的属性/方法

* 通过 A.prototype = Object.create(B.prototype)可以修改从A构造函数中创建出的对象的原型为B，

  PS：这时的A只会继承B的原型上的东西，构造器中的属性和方法是不会被继承到的

  ```
  // 需要继承B中的构造器属性/方法，我们可以这样
  function A(){
      B.call(this,...)  // 这里如果不修改B的this指向，其会指向window
  }
  ```

  

* 修改一个构造函数的prototype的同时会丢失其的constructor构造器，你可以使用XX.prototype.constructor = xx ；来将它修改回来

* JS引擎在沿着原型链向上寻找时，会调用第一个遇到的实现，如果你想同时调用当前原型和更上级原型的方法，你可以这样：

  ```
  son.prototype.say = function(){
      father.prototype.say();  // 如果father say中使用到了this，你就需要修改它
      ....
  }
  ```

* A() == A.prototype.constructor()

* 实现原型继承也可以这样： Son.prototype = new Father()



## Mixin  混合

继承虽然可以帮助我们高效率的解决，但会使我们的代码变得复杂和脆弱，试想我们定义了一个animal对象，我们给它定义eat()和walk()两种方法，然后衍生出dog and cat两种衍生对象，这是一个很标准的继承用法，but如何我们的animal大家庭中加入了一位新伙伴——goldfish，这时一切都开始不合理了，what？ because the goldfish can't walk，only swim，of course ，我们可以先在animal下面衍生出陆生animal and 水生animal，再继续向下衍生，but 正是如此，使得我们的代码开始脱离 concise 

这时候我们就需要Mixin来帮助我们实现功能，so what is the mixin？ 你可以试想：我们将上面的animal代码重构，我们不再考虑继承和衍生，而是单独将eat(), walk() and swim()设为组件，然后我们用它们拼凑出一个对象实例，such as the one cat，我们只需要使用eat() and walk() 组装起来就可以了，反之 goldfish ，eat() and swim() 就可以完成我们的要求，这时如果再加入一种 fly animal ，我们只需要添加一种fly()组件即可。 （PS： 组件 = object）

Object.assign()可以帮助我们实现Mixin，它的所有参数都必须是对象，第一个参数是一个容器，可以是一个已有的对象，或者一个空对象，后面的参数是要传入的组件对象，例子如下：

```
    let animal = function(){
        this.live = true;
    }
    let canEat = {
        eat(){
            console.log('eating')
        }
    }
    let canWalk = {
        walk(){
            console.log('walking')
        }
    }
    Object.assign(①animal.prototype,canEat,canWalk); 

    let cat = new animal(); // has eat() and walk()
```

①// 注意：这里如果误传了animal本身，后面的方法会传入animal原型中的constructor构造函数中，也就是，eat() and walk()会被当私有函数寄存在animal函数中，不会成为cat实例身上的方法

我们可以做一个简单得封装：

```
    function mixin(container, ...components){ // ...components会以数组的方式收集余下的参数
        Object.assign(container, ...components); // 此时的...components作为分解数组
    }
```



## ES6 class

> PS：JS中的 ‘类’ 不同于C#和Java中的类，它只是上述原型的一种外包装(语法糖)，如果你尝试使用`typeof` 检测一个class，你会发现，其实它只是一个function。



* 不同于函数声明，类声明和类表达式都不会被置顶，所以你无法在定义一个类之前使用它
* 在经典的OOP中，有两种类型方法，一种是实例方法，它会可以被每一个实例访问到，并被它们使用，另一种是静态方法，他不属于一个特定的实例，并且也不可以被它们访问到，他属于class类本身，这种方法我们在JS中依靠在方法前添加 ’ static ‘ 来实现。
* JS引擎默认会以严格模式('use strict')来检查class中的this，这说明当你使用函数调用来调用一个class中的方法时，其内部的this不会指向window / global，只会变为undefined，这有效避免了我们失误修改全局属性，这真的很作死。



#### 实现类成员私有化的三种方法

 1 .  很多程序员习惯在属性 / 方法前添加下划线’__‘以示该属性 / 方法为一个私有成员，虽然这样有利于我们识别，但是在程序方面没有任何的帮助，我们依旧可以在外部调用或修改它们。  (这种方法真的很糟糕)

 2 . 我们可以使用ES6提供的新类型——`Symbol`，每一个被创建出来的`Symbol`类型都是唯一的，所以我们可以使用Symbol来做属性或方法的名称，虽然这样无法做到完全对外隐藏，但是知道我们无法轻而易举的调用或者修改它们( Object.`getOwnPropertySymbols` 可以找到)，具体操作如下：

```
 ①const _say = Symbol();
    class A {
        constructor() {
            this.name = 'cyj'

        }

        ②[_say]() {
            alert('aa')
        }
    }

    let a = new A();
```

①这里我们创建一个`Symbol`类型，注意，它不是构造函数，所以我们不要使用`new`来创建；②这里的[]是JS中的动态命名，简单地说就是，JS会将_say当做一个变量来计算，然后将结果作为这个函数的名称。

3 . 我们可以使用ES6提供的`WeakMap`(弱映射)，它类似于一个键值对，键必须为一个对象，值可以为任何类型，并且值将作为键的属性 / 方法存在，其中的键极其脆弱，一旦没有的引入，很容易就被垃圾回收机制处理掉，这也是它为什么被称为 ’ 弱映射 ‘ , 他可以帮助我们有效的隐藏掉一些私有成员，具体操作如下：

```
  ① const _say = new WeakMap();
    const _msg = new WeakMap();
    class A {
        constructor() {
            this.name = 'cyj'

           ② _say.set(this, ()=>{
                return 'haha'
            });

           ③ _msg.set(this, '嘻嘻')
        }

        say(){
          ④ console.log(_say.get(this)());
            console.log(_msg.get(this))
        }
    }
    let a = new A();
```

①这里我们需要使用`new` 来创建一个WeakMap对象；②WeakMap对象需要使用set来设置对应的键值对，这里我们将键设为class A的实例； ④我们通过get来获取存储的值。



#### ES6中的getter和setter

在上面我提到了Object提供的`defineProperty`方法，它可以设置一条属性在访问/设置时产生的效果，在ES6中，我们可以更简单得实现和上面一样的效果，具体操作如下：

```
   const _msg = new WeakMap();
    class A {
        constructor() {
            this.name = 'cyj'
            
            _msg.set(this, '嘻嘻')
        }

      ① get _msg(){
            return _msg.get(this)
        }

      ② set _msg(value){
            if(value <= 0){
                throw new Error('设置失败')
            }else{
                _msg.set(this,value)
            }
        }
    }
    let a = new A();
    alert(a._msg);  // '嘻嘻'
```

①我们通过在一个方法前添加`get`关键字来说明后面的名称为一个属性，尽管它看上去很像一个方法，但是我们可以使用调用属性的方式来调用它；②同理，在方法名称前添加`set`关键字就可以监控对该属性的修改操作，它里面的参数就是外部修改时传入的值。



#### Es6中的 ‘ 类 ’ 继承

在ES5中，如果我们需要实现继承，往往需要大量的操作，比如我们需要创建子对象的原型，复制父对象的构造器中的元素到子对象中，并且还要修改回子对象自身的constructor，但在ES6中，继承变得非常简单啦，首先我们在声明一个对象时需要使用`extends`关键字来指明这个对象继承于谁，这时候我们就完成了原型上的继承，接下来我们还需要继承父对象的构造器，这也很简单，我们只需要在子对象的构造器中执行`super()`函数，并将父对象需要的参数传入进去就可以了，只需这样两步，我们就完成了对一个对象的完全继承，具体操作如下：

```
class B ①extends A{
        constructor(){
            ②super()
        }
    }

let b = new B();
```

> 在ES6中，直接使用super.xx / xx() 就可以获取到原型上的属性 / 方法





## JavaScript 模块化

#### ES5中的模块化的发展史

* AMD                针对于Browser的异步模块化
* CommonJS     针对于Node.js的模块化
* UMD                通用模块化
* ES6 Modules  ES6原生模块化



#### 模块化思想

* Cohesion  内凝

  高强度耦合的代码放在一起，这是模块化的最基本思想，这很符合常识，试想一下，我们在现实生活中也是如此，厨具相关的放在厨房，洗浴相关的放在浴室，这种便于管理思想同样适用于程序



#### CommonJS

CommonJS主要针对于Node.js，当然你可以在浏览器中使用(需要编译)，不过在现在看来是没有意义的，你完全可以使用ES6原生支持的模块化语法。

CommonJS最主要定义的两个模块化工具：module.exports 和 require()，前者为一个对象属性，后者为一个函数，它们分别扮演模块化中的公开和导入。

> PS：上面描述了依靠Symbol和WeakMap(弱映射)来实现私有成员，这里有一个细节，因为只要你没有公开私有成员本身，外部文件是无法获取 / 修改它们的 。即当你将一个对象作为公共接口公开时，其内部的私有成员对于其它文件就会完全隐藏起来，因为它们是作为一个单独的对象被声明在class外部的，这样一来在其他文件当中就找不到这个对象，也就无法调用这个私有对象身上的方法，比如无法调用WeakMap的`get`和`set`。



#### ES6 Module

ES6原生支持的模块化中，使用`export`关键字作为公开手段，在对象前添加export即可将这个对象公开出去，而对应的引入，我们使用`import XX from XX`这一句代码来导入模块，前面的XX是这个模块导入进来后的名称，后面的XX是模块所在的路径，具体操作如下：

```
// 导出
export class A{
    constructor(){
        _say.set(this,'haha')
    }
    say(){
        alert('hhaa')
    }
}

// 导入
import {A} from './two.js'
let a = new A()

a.say()
```

然而，我们还是不能直接在开发环境中使用ES6原生模块化(原因我也没搞懂)，所以必须要借助各种编译工具来将我们的ES6代码编译为现代浏览器可以看懂的代码(ES5)。



#### babel

* babel-cli	    babel的命令工具
* babel-core  babel的逻辑文件
* babel-present-env      ES6转义工具

执行编译：babel --presets env babel_test.js -o build/babel_test.js 





 