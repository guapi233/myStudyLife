## Init

`pygame.display.set_mode((W,H),view_type)`      视口调节

​													view_type    `pygame.(SIZABLE | NOFRAME | FULLSCREEN)`

`pygame.display.info()` 							获取视口信息

`pygame.display.set_icon()`   				 设置游戏图标

`pygame.display.set_caption()`    		  设置游戏标题

`pygame.image.load(path)`    					加载图片 (需要绝对路径)

`imgfile.get_rect()`								   获取图片矩形

`pygame.time.Clock()` 								创建帧控制器





## Event

`pygame.event.get()` 								获取事件队列

`imgRect.move(X,Y)` 								  移动图像矩形

`pygame.QUIT`												关闭视口感知

`pygame.KEYDOWN`										  键盘按键感知  (对应按键参考Tips第一条链接)

`pygame.VIDEORESIZE`								  视口大小更新事件(返回更新后的视口大小 （w,h）)

`pygame.MOUSEMOTION`					  鼠标移动事件

​			`event.pos`				鼠标当前相对于视口左上角的坐标

​			`event.rel`				鼠标当前相对于上一次运动的距离

​			`event.buttons`		鼠标三个按键的状态

`pygame.MOUSEBUTTONUP`					鼠标抬起事件

​			`event.pos`				鼠标当前相对于视口左上角的坐标

​			`event.buttons`		鼠标按键的状态(左键1，右键3)

`pygame.MOUSEBUTTONDOWN`				鼠标按下事件



## View update

`view.fill(RGB)`		 								填充背景颜色

`view.blit(img,imgRect)`						结合图像和图像矩形

`pygame.display.update()`	 				更新视口

`clock.tick()` 											设置动画演示帧率  (放在事件循环中)





## Tips

`https://blog.csdn.net/shuipengpeng/article/details/81254063`         键盘按键对应属性