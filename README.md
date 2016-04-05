# H5资源整理

## 框架
* [fullPage.js](https://github.com/powy1993/fullpage.git) 兼容桌面端(ie5.5+) 和 手机端
* [H5FullscreenPage.js](https://github.com/lvming6816077/H5FullscreenPage.git) 基于zepto全屏滚动
* [slip.js](https://github.com/binnng/slip.js.git) 移动端跟随手指滑动组件，零依赖
* [iSlider.js](https://github.com/kele527/iSlider.git) H5全屏滑动组件
* [zepto.fullpage.js](https://github.com/yanhaijing/zepto.fullpage.git) 可实现移动端的单页滚动效果，可自定义参数，提供回调接口，和公开接口。
* [touch.js](https://github.com/Clouda-team/touch.code.baidu.com.git) 百度移动设备上的手势识别与事件库
* [hammer.js](https://github.com/hammerjs/hammer.js.git) 一个多点触控手势的JavaScript库
* [quo.js](https://github.com/soyjavi/QuoJS.git) JavaScript手势库

## CSS重置
* [normalize.css](https://github.com/necolas/normalize.css.git)
* [HTML5 Reset](https://github.com/murtaugh/HTML5-Reset.git) 
* [sanitize.css](https://github.com/10up/sanitize.css.git)
* [typo.css](https://github.com/sofish/typo.css.git) 一致化浏览器排版效果，构建最适合中文阅读的网页排版

## 动画库
* [animate.css](https://github.com/daneden/animate.css.git) 常用的css3动画库
* [magic.css](https://github.com/miniMAC/magic.git)
* [Effeckt.css](https://github.com/h5bp/Effeckt.css.git) 挺齐全的
* [动画工具](http://isux.tencent.com/css3/index.html) 腾讯ISUX 在线css3动画工具

## 加载动画
* [loaders.css](https://github.com/ConnorAtherton/loaders.css.git) 纯CSS加载动画
* [http://loading.io/](http://loading.io/) 在线 SVG / CSS / GIF

## 响应式工具
* [pageResponse.js](https://github.com/peunzhang/pageResponse.git) 使用transform:scale缩放页面
* [adaptive.js](https://github.com/finance-sh/adaptive.git) javascript H5自适应框架
* [hotcss.js](https://github.com/imochen/hotcss.git) 移动端布局开发解决方案

## 其他工具
* [prefixfree.js](https://github.com/LeaVerou/prefixfree.git) CSS3前缀补齐
[附带前辈介绍](http://www.zhangxinxu.com/wordpress/?p=2035) 
* [jquery.css3finalize.js](https://github.com/codler/jQuery-Css3-Finalize.git) CSS3前缀补齐

## study
* [移动web资源整理](http://www.cnblogs.com/PeunZhang/category/455417.html) 白色橡树
* [滑屏 H5 开发实践九问](https://isux.tencent.com/nine-question-of-swipe-html5-page.html) 腾讯ISUX
* [HTML5终极备忘大全](http://www.zhangxinxu.com/wordpress/?p=1544) 

## meta

* 页面窗口自动调整到设备宽度，并禁止用户缩放页面

		<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi">
	
* 当网站添加到主屏幕快速启动方式，可隐藏地址栏，仅针对ios的safari（ios7.0版本以后，safari上已看不到效果）

		<meta content="yes" name="apple-mobile-web-app-capable">

* 将网站添加到主屏幕快速启动方式，仅针对ios的safari顶端状态条的样式(可选default、black、black-translucent)
	
		<meta content="black" name="apple-mobile-web-app-status-bar-style">
	
* 忽略将页面中的数字识别为电话号码

		<meta content="telephone=no" name="format-detection">
	
* 忽略Android平台中对邮箱地址的识别

		<meta content="email=no" name="format-detection">

## click延迟问题

* [fastclick](https://github.com/ftlabs/fastclick.git)
* [zepto](https://github.com/madrobby/zepto.git) 需要包含touch模块

## CSS相关

* 禁止ios 长按时不触发系统的菜单，禁止ios&android长按时下载图片

		-webkit-touch-callout: none;
		
* 禁止ios和android用户选中文字

		-webkit-user-select:none;

* 去掉被触摸时产生的半透明灰色遮罩

		-webkit-tap-highlight-color: transparent;
		
* 字体清晰

		-webkit-font-smoothing: antialiased; 
		
* 设置placeholder颜色

		input::-webkit-input-placeholder{color:#RED;}
		input:focus::-webkit-input-placeholder{color:#RED;}
		
* 善用active属性： 点击时效果 

* 打电话

		<a href="tel:10086">10086</a>
		
* 发短信

		<a href="sms:10086">短信：10086</a>
		
* 发邮件

		<a href="mailto:378588579@qq.com">电子邮箱：xxx@qq.com</a>
		
* 关注微信
	
		<a href="weixin://addfriend/kuaipao8-com">微信号：xxx</a>


		
		
		
		

