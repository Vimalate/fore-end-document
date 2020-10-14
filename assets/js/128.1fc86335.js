(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{510:function(e,t,r){"use strict";r.r(t);var a=r(23),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vue-响应原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-响应原理"}},[e._v("#")]),e._v(" vue 响应原理")]),e._v(" "),r("p",[e._v("Vue.js的响应式原理依赖于"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty",target:"_blank",rel:"noopener noreferrer"}},[e._v("Object.defineProperty"),r("OutboundLink")],1),e._v("，Vue通过设定对象属性的 setter/getter 方法来监听数据的变化，通过getter进行依赖收集，而每个setter方法就是一个观察者，在数据变更的时候通知订阅者更新视图。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2019/07/24/5d37c17fe0a6b32226.jpg",alt:"流程图"}})]),e._v(" "),r("h3",{attrs:{id:"initdata-方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#initdata-方法"}},[e._v("#")]),e._v(" initData 方法")]),e._v(" "),r("p",[e._v("在 Vue 的初始化的时候，其 "),r("code",[e._v("_init()")]),e._v(" 方法会调用执行 "),r("code",[e._v("initState(vm)")]),e._v(" 方法。"),r("code",[e._v("initState")]),e._v(" 方法主要是对 "),r("code",[e._v("props")]),e._v("、"),r("code",[e._v("methods")]),e._v("、"),r("code",[e._v("data")]),e._v("、"),r("code",[e._v("computed")]),e._v(" 和 "),r("code",[e._v("wathcer")]),e._v(" 等属性做了初始化操作。")]),e._v(" "),r("p",[e._v("Vue 通过【观察者模式】实现了一套响应式系统。观察者模式（也叫发布/订阅模式）会将观察者和被观察的对象严格分离开，当被观察对象的状态发生变化时，所有依赖于它的观察者都将得到通知并自动刷新。举个栗子，用户界面可以作为一个观察者，业务数据是被观察者，用户界面观察业务数据的变化，当数据发生变化时，用户界面就会自动更新。")]),e._v(" "),r("h3",{attrs:{id:"数据劫持-observe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据劫持-observe"}},[e._v("#")]),e._v(" 数据劫持 — "),r("code",[e._v("Observe")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("// 给对象的属性添加 getter 和 setter，用于依赖收集和发布更新\nexport class Observer {\n  value: any;\n  dep: Dep;  \n  vmCount: number; \n  constructor (value: any) {\n    this.value = value\n    // 实例化 Dep 对象\n    this.dep = new Dep()\n    this.vmCount = 0\n    // 把自身实例添加到数据对象 value 的 __ob__ 属性上\n    def(value, '__ob__', this)\n    // value 是否为数组的不同调用\n    if (Array.isArray(value)) {\n      const augment = hasProto ? protoAugment : copyAugment\n      augment(value, arrayMethods, arrayKeys)\n      this.observeArray(value)\n    } else {\n      this.walk(value)\n    }\n  }\n\n  // 取出所有属性遍历\n  walk (obj: Object) {\n    const keys = Object.keys(obj)\n    for (let i = 0; i < keys.length; i++) {\n      defineReactive(obj, keys[i])\n    }\n  }\n\n  observeArray (items: Array<any>) {\n    for (let i = 0, l = items.length; i < l; i++) {\n      observe(items[i])\n    }\n  }\n}\n\n")])])]),r("ol",[r("li",[r("code",[e._v("getter")]),e._v(" 方法完成的工作就是依赖收集 —— "),r("code",[e._v("dep.depend()")])]),e._v(" "),r("li",[r("code",[e._v("setter")]),e._v(" 方法完成的工作就是发布更新 —— "),r("code",[e._v("dep.notify()")])])]),e._v(" "),r("p",[r("strong",[e._v("将数据data变成可观察的")])]),e._v(" "),r("p",[e._v("我们可以大概总结一些整个响应式系统的流程，也是我们常说的 "),r("strong",[e._v("观察者模式")]),e._v("：第一步当然是通过 observer 进行数据劫持，然后在需要订阅的地方（如：模版编译），添加观察者（watcher），并立刻通过取值操作触发指定属性的 getter 方法，从而将观察者添加进 Dep （利用了闭包的特性，进行依赖收集），然后在 Setter 触发的时候，进行 notify，通知给所有观察者并进行相应的 update。")]),e._v(" "),r("p",[e._v("我们可以这么理解 "),r("strong",[e._v("观察者模式")]),e._v("：Dep 就好比是掘金，掘金有很多作者（相当于 data 的很多属性）。我们自然都是充当订阅者（watcher）角色，在掘金（Dep）这里关注了我们感兴趣的作者，比如：xxx，告诉它xxx更新了就提醒我去看。那么每当江三疯有新内容时，我们都会收到类似这样的提醒："),r("code",[e._v("xxx发布了【2019 前端进阶之路 ***】")]),e._v("，然后我们就可以去看了。")]),e._v(" "),r("p",[e._v("但是，每个 watcher 可以订阅很多作者，每个作者也都会更新文章。那么没有关注xxx的用户会收到提醒吗 ？不会，只给已经订阅了的用户发送提醒，而且只有江三疯更新了才提醒，你订阅的是xxx，可是站长更新了需要提醒你吗？当然不需要。这，也就是闭包需要做的事情。")]),e._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),r("p",[e._v("总结起来，Vue 的响应原理主要包括以下几个步骤\n具体步骤：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter 这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化")])]),e._v(" "),r("li",[r("p",[e._v("第二步：compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图")])]),e._v(" "),r("li",[r("p",[e._v("第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:在自身实例化时往属性订阅器(dep)里面添加自己自身必须有一个 update()方法待属性变动 dep.notice()通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。")])]),e._v(" "),r("li",[r("p",[e._v("第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。")])])]),e._v(" "),r("p",[e._v("参考文档")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5a4b3cbb6fb9a045211f131d",target:"_blank",rel:"noopener noreferrer"}},[e._v("大白话Vue源码"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5cf66d586fb9a07ed2245b28",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Vue 响应式原理"),r("OutboundLink")],1)]),e._v(" "),r("Vssue")],1)}),[],!1,null,null,null);t.default=n.exports}}]);