<!--
 * @Author: your name
 * @Date: 2020-05-26 18:57:57
 * @LastEditTime: 2020-07-10 23:58:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-blog\docs\blog\VUE-Library\self.md
-->
## 自我介绍

面试官你好，很高兴能够得到这次的面试机会，我叫刘坚，18年毕业于南昌航空大学。从毕业以来从事前端开发，到现在已经有近两年的工作经验 ，我在上家公司接触比较多的是pc端和移动端的项目，目前所用的技术栈以vue为主，所以大所数项目也是基于vue全家桶以及搭配合适的UI框架来完成的，在工作中时不时会遇到一些问题，拿我前不久项目中遇到的一个例子来说，在用elementUI开发项目时，用到了UI框架自带的el-image组件，遇到一个问题，在图片加载的时候，加载过程中闪现白色背景，我想去定位究竟是哪个css造成的问题，但是由于这个问题是发生在加载的那瞬间，比较难定位。虽然这并不影响，所以只好去源码里看。然后我在element-UI下找到el-image的包，el-image源码的包分为两个部分，一个是有关图片预览的源码，另一个是图片加载时的，之后就发现是 el-image__placeholder 这个class在作妖。这时在自己的组件里就重写了这个样式，解决了这个问题。
element-UI>packages>image>src>mian.vue
## 商家后台管理功能划分
- 用户管理
  - 用户列表
- 权限管理
  - 角色列表
  - 权限列表
- 商品管理
  - 商品列表
  - 分类参数
  - 商品分类
- 订单管理
  - 订单列表
- 数据统计
  - 数据报表

详情页，订单页
- 瀑布流布局

后端定义接口，前端评估接口是否合适，确定没有问题各自开发，中间有变更就和对接的人说明情况，最后联调，产品确认，提交测试。

## 管理接口工具
(swagger)

## 前后端联调
1.  前后端分离项目，后端提供接口，前端负责页面
2.  接口完成后/或者之前，后端给接口文档，包括接口地址，请求类型，请求参数，可能的返回参数
3.  


我（最近的一个时间）在做（怎样的一个产品／程序），这个产品／程序的目的是（帮助用户完成什么事），其中有一个（什么模块），为了实现（什么功能），用到了（什么技术），但是（遇到了什么挑战／难点／bug），我通过（怎样的手段）定位问题所在，问题出现的原因是（简要的点到技术点的描述），我在（至少两个资料来源）上找到了参考，最后基于（怎样的决策标准）决定采用（何种解决方法），运用了（哪种技术），最后成功解决了问题／实现了功能，结果是这个产品／程序（对用户，系统，性能，可用性，资源等产生了何种正面的影响）。下一步，我认为我应该研究（何种更先进的方式），进一步（怎样让产品／程序做得更好）。



公司目前所主要使用的技术栈是哪些？ 
我入职后接下来要做的项目是什么？
公司对于我们团队的规划是什么?以后会扩充还是现在只是尝试性的团队？


跟大牛学习，继续提高自己的技术能力。
逐步熟悉公司的产品，理解公司的规划。
在这些基础上尽力做的更好，给自己争取更多向上的机会。


vant swipe踩坑：click和手指滑动冲突 [](http://www.5imoban.net/jiaocheng/vue/2019/0419/3543.html)