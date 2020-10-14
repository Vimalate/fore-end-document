(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{490:function(t,s,a){"use strict";a.r(s);var n=a(23),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端模块化：commonjs-amd-cmd-es6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端模块化：commonjs-amd-cmd-es6"}},[t._v("#")]),t._v(" 前端模块化：CommonJS,AMD,CMD,ES6")]),t._v(" "),a("h2",{attrs:{id:"commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[t._v("#")]),t._v(" CommonJS:")]),t._v(" "),a("p",[t._v("CommonJS规范为CommonJS小组所提出，目的是弥补JavaScript在服务器端缺少模块化机制，NodeJS、webpack都是基于该规范来实现的。\n日常使用时，多用module.exports定义当前模块对外输出的接口，用require加载模块。")]),t._v(" "),a("p",[a("strong",[t._v("module 变量代表当前模块，这个变量是一个对象.")])]),t._v(" "),a("p",[a("strong",[t._v("module.exports(即module的exports属性) 是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。"),a("code",[t._v("exports=module.exports={Obj}")])])]),t._v(" "),a("p",[a("strong",[t._v("CommonJS 用法")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//a.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CommonJS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//main.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"CommonJS"')]),t._v("\n")])])]),a("p",[a("strong",[t._v("CommonJS 特点：")])]),t._v(" "),a("ul",[a("li",[t._v("所有代码都运行在模块作用域，不会污染全局作用域。")]),t._v(" "),a("li",[t._v("模块首次加载，运行结果就被 "),a("strong",[t._v("缓存")]),t._v(" 了，以后再加载，就直接读取缓存结果。如想模块再次运行，必须清除缓存。")]),t._v(" "),a("li",[t._v("模块是同步加载的，即只有加载完成，才能执行后面的操作。")])]),t._v(" "),a("h2",{attrs:{id:"amd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[t._v("#")]),t._v(" AMD")]),t._v(" "),a("p",[t._v("AMD 采用"),a("strong",[t._v("异步方式")]),t._v("加载模块，模块的加载不影响它后面语句的运行。允许指定回调函数，所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。")]),t._v(" "),a("p",[a("code",[t._v("require([module], callback);")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("[module]，是一个数组，里面的成员就是要加载的模块；")])]),t._v(" "),a("li",[a("p",[t._v("callback，加载成功之后的回调函数。")])])]),t._v(" "),a("p",[t._v("RequireJS实现了AMD规范，所以一般说AMD也是指RequireJS。")]),t._v(" "),a("p",[a("strong",[t._v("RequireJS的基本用法")])]),t._v(" "),a("p",[t._v("这里我们通过  "),a("code",[t._v("define")]),t._v("  来定义一个模块，使用  "),a("code",[t._v("require")]),t._v("  导入定义的模块")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// model.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以传入三个参数，分别是字符串-模块名、数组-依赖模块、函数-回调函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数组中声明需要加载的模块，可以是模块名、js文件路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'model'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("AMD 推崇依赖前置、提前执行")]),t._v(" "),a("h2",{attrs:{id:"cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[t._v("#")]),t._v(" CMD")]),t._v(" "),a("p",[t._v("CMD是SeaJS在推广过程中生产的对模块定义的规范")]),t._v(" "),a("p",[t._v("CMD 规范整合了CommonJS和AMD规范的特点。CMD 专门"),a("strong",[t._v("用于浏览器端，模块的加载是异步的")]),t._v("，模块使用时才会加载执行")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** sea.js **/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义模块 model.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载模块")]),t._v("\nseajs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'model.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("CMD推崇依赖就近、延迟执行,即到require时依赖模块才会执行。")]),t._v(" "),a("h2",{attrs:{id:"es6-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-module"}},[t._v("#")]),t._v(" ES6 Module")]),t._v(" "),a("p",[t._v("ES6 中提供了简单的模块系统，完全可以取代现有的CommonJS和AMD规范，旨在成为浏览器和服务器通用的模块解决方案。")]),t._v(" "),a("p",[t._v("其模块功能呢主要由两个命令构成：\n"),a("code",[t._v("export")]),t._v("  :用于规定模块的对外接口")]),t._v(" "),a("p",[a("code",[t._v("import")]),t._v("  :用于输入其他模块提供的功能。")]),t._v(" "),a("p",[a("strong",[t._v("ES6 Module的基本用法")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 定义模块 **/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// model.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'biubiu'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" agr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 引用模块 **/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./model.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("ES6还提供了 "),a("code",[t._v("export default")]),t._v("  命令，为模块指定默认输出，对应的"),a("code",[t._v("import")]),t._v("  语句不需要使用大括号。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 定义模块 **/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// model2.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ES6 Module '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//b2.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" customName "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./model2.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("customName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'ES6 Module'")]),t._v("\n")])])]),a("p",[t._v("需要注意的是ES6的模块不是对象，import命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载。也正因为这个，使得静态分析成为可能。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[a("strong",[t._v("各自特点")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("CommonJS")]),t._v("规范主要用于"),a("strong",[t._v("服务端编程")]),t._v("，加载模块是同步的，这并不适合在浏览器环境，因为同步意味着阻塞加载，浏览器资源是异步加载的，因此有了AMD CMD解决方案。")]),t._v(" "),a("li",[t._v("AMD规范在"),a("strong",[t._v("浏览器环境中异步加载")]),t._v("模块，而且可以并行加载多个模块。不过，AMD规范开发成本高，代码的阅读和书写比较困难，模块定义方式的语义不顺畅。")]),t._v(" "),a("li",[t._v("CMD规范与AMD规范很相似，都用于浏览器编程，依赖就近，延迟执行。")]),t._v(" "),a("li",[t._v("ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。")])]),t._v(" "),a("p",[a("strong",[t._v("区别")])]),t._v(" "),a("p",[a("strong",[t._v("ES6 模块与 CommonJS 模块的差异")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。")]),t._v(" "),a("li",[t._v("CommonJS 模块是运行时加载，ES6 模块是编译时输出接口")]),t._v(" "),a("li",[t._v("CommonJS加载的是整个模块，将所有的接口全部加载进来，ES6 Module可以单独加载其中的某个接口；")]),t._v(" "),a("li",[t._v("CommonJS this指向当前模块，ES6 Module this指向undefined;")])]),t._v(" "),a("p",[a("strong",[t._v("AMD和CMD区别")])]),t._v(" "),a("ol",[a("li",[t._v("对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。（RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.）")]),t._v(" "),a("li",[t._v("CMD 推崇依赖就近，AMD 推崇依赖前置。")])]),t._v(" "),a("blockquote",[a("p",[t._v("参考："),a("a",{attrs:{href:"https://juejin.im/post/5c17ad756fb9a049ff4e0a62",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端模块化详解"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://juejin.im/post/5aaa37c8f265da23945f365c",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端模块化"),a("OutboundLink")],1)])]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);s.default=e.exports}}]);