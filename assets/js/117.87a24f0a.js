(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{498:function(t,s,a){"use strict";a.r(s);var n=a(23),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"网络安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络安全"}},[t._v("#")]),t._v(" 网络安全")]),t._v(" "),a("h2",{attrs:{id:"xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),a("p",[a("code",[t._v("Cross-site scripting")]),t._v("，通常简称为：XSS ,是一种代码注入方式。")]),t._v(" "),a("p",[t._v("XSS 可分为三种："),a("strong",[t._v("存储型，反射型及DOM型")])]),t._v(" "),a("p",[t._v("DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。")]),t._v(" "),a("p",[t._v("XSS 两大攻击要素：")]),t._v(" "),a("ul",[a("li",[t._v("攻击者提交恶意代码")]),t._v(" "),a("li",[t._v("浏览器执行恶意代码")])]),t._v(" "),a("h2",{attrs:{id:"预防存储型和反射型-xss-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防存储型和反射型-xss-攻击"}},[t._v("#")]),t._v(" 预防存储型和反射型 XSS 攻击")]),t._v(" "),a("p",[t._v("存储型和反射型 XSS 都是在服务端取出恶意代码后，插入到响应 HTML 中，被浏览器所执行。\n常见预防方法：")]),t._v(" "),a("ul",[a("li",[t._v("改为纯前端渲染")]),t._v(" "),a("li",[t._v("对HTML转义")])]),t._v(" "),a("h3",{attrs:{id:"纯前端渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纯前端渲染"}},[t._v("#")]),t._v(" 纯前端渲染")]),t._v(" "),a("p",[t._v("通过先加载一个纯静态 HTML ，此HTML 中不包含任何业务相关数据，浏览器执行 HTML 中的 JS ，然后 js 通过 ajax 异步加载业务数据，然后渲染在页面上。")]),t._v(" "),a("h3",{attrs:{id:"html转义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html转义"}},[t._v("#")]),t._v(" HTML转义")]),t._v(" "),a("p",[t._v("对输入的内容进行转义，如引号，尖括号，斜杠等。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("escape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/&/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&amp;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/</g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&lt;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/>/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&gt;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v('/"/g')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&quto;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/'/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&##39;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/`/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&##96;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\//g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&##x2F;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("通过转义可以将攻击代码"),a("code",[t._v("<script>alert(1)<\/script>")]),t._v(" 变为")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("escape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<script>alert(1)<\/script>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> &lt;script&gt;alert(1)&lt;&##x2F;script&gt;")]),t._v("\n")])])]),a("p",[t._v("但是不能通过上面的办法来转义所有字符，通常使用转义库。")]),t._v(" "),a("h2",{attrs:{id:"预防-dom-型-xss-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防-dom-型-xss-攻击"}},[t._v("#")]),t._v(" 预防 DOM 型 XSS 攻击")]),t._v(" "),a("p",[t._v("DOM 型 XSS 攻击，实际上就是网站前端 JavaScript 代码本身不够严谨，把不可信的数据当作代码执行了。")]),t._v(" "),a("p",[t._v("在使用 .innerHTML、.outerHTML、document.write() 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 .textContent、.setAttribute() 等。")]),t._v(" "),a("p",[t._v("如果用 Vue/React 技术栈，并且不使用 v-html/dangerouslySetInnerHTML 功能，就在前端 render 阶段避免 innerHTML、outerHTML 的 XSS 隐患。")]),t._v(" "),a("p",[t._v("DOM 中的内联事件监听器，如 "),a("code",[t._v("location、onclick、onerror、onload、onmouseover")]),t._v("等，"),a("code",[t._v("<a>")]),t._v(" 标签的 href 属性，JavaScript 的 eval()、setTimeout()、setInterval() 等，都能把字符串作为代码运行。如果不可信的数据拼接到字符串中传递给这些 API，很容易产生安全隐患，请务必避免。")]),t._v(" "),a("h2",{attrs:{id:"csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),a("p",[t._v("跨站请求伪造，是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法")]),t._v(" "),a("div",{staticClass:"language-! extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("简单来说， CSRF 就是利用用户的登录发起恶意请求\n")])])]),a("h3",{attrs:{id:"如何防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何防御"}},[t._v("#")]),t._v(" 如何防御")]),t._v(" "),a("ul",[a("li",[t._v("GET 请求不对数据进行修改")]),t._v(" "),a("li",[t._v("提交时要求附加本域才能获取的信息（CSRF Token，双重 Token 验证）")]),t._v(" "),a("li",[t._v("阻止不明外域的访问（同源检测，\nSamesite Cookie）")])]),t._v(" "),a("p",[a("strong",[t._v("XSS和CSRF的区别")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("XSS是获取信息，不需要提前知道其他用户页面的代码和数据包")]),t._v(" "),a("li",[t._v("CSRF代替用户完成指定的动作，需要知道其他页面的代码和数据包")]),t._v(" "),a("li",[t._v("原理不同，CSRF是利用网站A本身的漏洞，去请求网站A的api；XSS是向目标网站注入JS代码，然后执行JS里的代码。")]),t._v(" "),a("li",[t._v("CSRF的目标是用户，而XSS的目标是服务器")])]),t._v(" "),a("h2",{attrs:{id:"网络劫持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络劫持"}},[t._v("#")]),t._v(" 网络劫持")]),t._v(" "),a("p",[t._v("网络劫持分为以下两种")]),t._v(" "),a("ul",[a("li",[t._v("DNS 劫持 （如输入淘宝跳转京东）")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("DNS强制解析: 通过修改运营商的本地DNS记录，来引导用户流量到缓存服务器")]),t._v(" "),a("li",[t._v("302跳转的方式: 通过监控网络出口的流量，分析判断哪些内容是可以进行劫持处理的,再对劫持的内存发起302跳转的回复，引导用户获取内容")])])]),t._v(" "),a("ul",[a("li",[t._v("HTTP劫持: (访问谷歌但是一直有贪玩蓝月的广告),由于http明文传输,运营商会修改你的http响应内容(即加广告)")])]),t._v(" "),a("h3",{attrs:{id:"如何预防"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何预防"}},[t._v("#")]),t._v(" 如何预防")]),t._v(" "),a("p",[t._v("DNS劫持由于涉嫌违法,已经被监管起来,现在很少会有DNS劫持,而http劫持依然非常盛行.")]),t._v(" "),a("p",[t._v("最有效的办法就是全站HTTPS,将HTTP加密,这使得运营商无法获取明文,就无法劫持你的响应内容.")]),t._v(" "),a("p",[a("strong",[t._v("参考：")]),t._v(" "),a("a",{attrs:{href:"https://www.cxymsg.com/guide/security.html#xss%E5%88%86%E4%B8%BA%E5%93%AA%E5%87%A0%E7%B1%BB",target:"_blank",rel:"noopener noreferrer"}},[t._v("网络安全"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);