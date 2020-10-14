(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{475:function(t,v,_){"use strict";_.r(v);var e=_(23),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"http-特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-特点"}},[t._v("#")]),t._v(" HTTP 特点")]),t._v(" "),_("p",[t._v("超文本传输协议的缩写，是用于从服务器端传输超文本到本地浏览器的传输协议。")]),t._v(" "),_("ol",[_("li",[t._v("无状态，每次请求都是独立，无关的，默认不需要保留状态信息")]),t._v(" "),_("li",[t._v("基于请求/响应模型的协议")]),t._v(" "),_("li",[t._v("简单快速")]),t._v(" "),_("li",[t._v("可靠传输")])]),t._v(" "),_("h3",{attrs:{id:"http-缺点："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-缺点："}},[t._v("#")]),t._v(" HTTP 缺点：")]),t._v(" "),_("p",[_("strong",[t._v("无状态")]),t._v("\n当请求仅仅为了获取一些数据，不需要保持连接上下文信息时，无状态可以减少开销。")]),t._v(" "),_("p",[t._v("但是在长连接场景中，需要保存大量的上下文信息，以免传输大量重复的信息，那么这时候无状态就是 http 的缺点了。")]),t._v(" "),_("p",[_("strong",[t._v("明文传输")])]),t._v(" "),_("p",[t._v("协议里的报文不使用二进制，而是文本形式，报文信息暴露给外界，容易被攻击。")]),t._v(" "),_("p",[t._v("其中 "),_("code",[t._v("wifi陷阱")]),t._v(" 就是利用此特点，诱导用户连接热点，通过抓取你的流量，从而窃取用户敏感信息。")]),t._v(" "),_("p",[_("strong",[t._v("队头阻塞问题")]),t._v("\n当 http 开启长连接时，共用一个 TCP ，同一时刻只能处理一个请求。当请求耗时过长，会导致其他请求处于阻塞状态。")]),t._v(" "),_("div",{staticClass:"language-！ extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("并发连接解决，目前浏览器对于一个域名允许分配多个长连接，如Chrome 中是 6 个\n")])])]),_("h2",{attrs:{id:"http1-0-1-1-2-0的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1-0-1-1-2-0的区别"}},[t._v("#")]),t._v(" http1.0 1.1 2.0的区别")]),t._v(" "),_("ul",[_("li",[t._v("长链接：HTTP1.0需要使用keep-alive来建立长连接，HTTP1.1默认支持长连接")]),t._v(" "),_("li",[t._v("缓存处理：HTTP1.1多了Entity tag，If-Unmodified-Since, If-Match, If-None-Match等缓存信息（HTTTP1.0 If-Modified-Since,Expires）")]),t._v(" "),_("li",[t._v("节约宽带：（设置虚拟站点，也就是说，web server上的多个虚拟站点可以共享同一个ip端口）：HTTP1.0没有host域")])]),t._v(" "),_("p",[t._v("HTTP2的优化")]),t._v(" "),_("ul",[_("li",[t._v("HTTP2支持二进制传送（实现方便且健壮），HTTP1.x是字符串传送")]),t._v(" "),_("li",[t._v("HTTP2支持多路复用：一个连接可以并发处理多个请求")]),t._v(" "),_("li",[t._v("HTTP2采用HPACK压缩算法压缩头部，减小了传输体积")]),t._v(" "),_("li",[t._v("HTTP2支持服务端推送")])]),t._v(" "),_("h2",{attrs:{id:"http和https有何区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http和https有何区别"}},[t._v("#")]),t._v(" HTTP和HTTPS有何区别")]),t._v(" "),_("ul",[_("li",[t._v("HTTPS使用443端口，而HTTP使用80")]),t._v(" "),_("li",[t._v("HTTPS需要申请证书")]),t._v(" "),_("li",[t._v("HTTP是超文本传输协议，是明文传输；HTTPS是经过SSL加密的协议，传输更安全")]),t._v(" "),_("li",[t._v("HTTPS比HTTP慢，因为HTTPS除了TCP握手的三个包，还要加上SSL握手的九个包")])]),t._v(" "),_("h2",{attrs:{id:"http-的请求方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-的请求方法"}},[t._v("#")]),t._v(" HTTP 的请求方法")]),t._v(" "),_("p",[t._v("在 http/1.1 规定了以下请求方法")]),t._v(" "),_("ul",[_("li",[t._v("GET:获取资源")]),t._v(" "),_("li",[t._v("HEAD：获取资源元信息")]),t._v(" "),_("li",[t._v("POST：提交数据")]),t._v(" "),_("li",[t._v("PUT：修改数据")]),t._v(" "),_("li",[t._v("DELETE：删除资源")]),t._v(" "),_("li",[t._v("CONNECT：建立连接隧道，用于代理服务器")]),t._v(" "),_("li",[t._v("OPTIONS：列出可对资源实行的请求方法，用来跨域请求")]),t._v(" "),_("li",[t._v("TRACE：追踪请求-响应的传输路径")])]),t._v(" "),_("h2",{attrs:{id:"get-和-post-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-区别"}},[t._v("#")]),t._v(" GET 和 POST 区别")]),t._v(" "),_("ul",[_("li",[t._v("GET ：有缓存，请求长度受限，参数放在 URL 中，不安全，幂等(幂等表示执行相同的操作，结果也是相同的)")]),t._v(" "),_("li",[t._v("POST：更多的编码类型，安全")])]),t._v(" "),_("div",{staticClass:"language-! extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("- 从 TCP 角度，GET 会把请求报文一次性发出，而 POST 会分为两个 TCP 数据包，先发 header 部分，服务器响应100，再发 body 部分。(火狐浏览器除外，它的 POST 请求只发一个 TCP 包)\n\n- 其实HTTP协议并没有要求GET/POST请求参数必须放在URL上或请求体里，也没有规定GET请求的长度，目前对URL的长度限制，是各家浏览器设置的限制。GET和POST的根本区别在于：GET请求是幂等性的，而POST请求不是\n\n    1.  幂等性，指的是对某一资源进行一次或多次请求都具有相同的副作用。例如搜索就是一个幂等的操作，而删除、新增则不是一个幂等操作。\n\n    2. 由于GET请求是幂等的，在网络不好的环境中，GET请求可能会重复尝试，造成重复操作数据的风险，因此，GET请求用于无副作用的操作(如搜索)，新增/删除等操作适合用POST\n")])])]),_("h2",{attrs:{id:"http-常见状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-常见状态码"}},[t._v("#")]),t._v(" HTTP 常见状态码")]),t._v(" "),_("p",[t._v("大致区分 ：")]),t._v(" "),_("ol",[_("li",[t._v("1**-信息提示")]),t._v(" "),_("li",[t._v("2**-请求成功")]),t._v(" "),_("li",[t._v("3**请求重定向")]),t._v(" "),_("li",[t._v("4**请求错误")]),t._v(" "),_("li",[t._v("5**服务器错误")])]),t._v(" "),_("p",[t._v("几个常见的状态码，我们需要牢记")]),t._v(" "),_("ol",[_("li",[t._v("200-请求成功，服务器已成功处理了请求")]),t._v(" "),_("li",[t._v("301-永久重定向；")]),t._v(" "),_("li",[t._v("302-临时转移")]),t._v(" "),_("li",[t._v("304-读取缓存（协商缓存时，表示浏览器端有缓存，并且服务端未更新，不再向服务端请求资源]）")]),t._v(" "),_("li",[t._v("400-请求错误，服务器不理解请求的语法")]),t._v(" "),_("li",[t._v("403-服务器拒绝请求")]),t._v(" "),_("li",[t._v("404-找不到")]),t._v(" "),_("li",[t._v("500-服务器内部错误，甩锅后端")])]),t._v(" "),_("h2",{attrs:{id:"http-缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存"}},[t._v("#")]),t._v(" HTTP 缓存")]),t._v(" "),_("p",[_("strong",[t._v("强缓存")]),t._v("和"),_("strong",[t._v("协商缓存")])]),t._v(" "),_("p",[t._v("浏览器是根据响应头的相关字段来决定缓存的方案的。所以，后端的关键就在于，根据不同的请求返回对应的缓存字段。")]),t._v(" "),_("p",[t._v("web 资源的缓存策略一般由服务器来指定，可以分为两种，分别是"),_("strong",[t._v("强缓存策略")]),t._v("和"),_("strong",[t._v("协商缓存策略")]),t._v("。")]),t._v(" "),_("p",[_("strong",[t._v("协商缓存")]),t._v("：当使用协商缓存策略时，会先向服务器发送一个请求，如果资源没有发生修改，则返回一个 304 状态，让浏览器使用本地的缓存副本。\n如果资源发生了修改，则返回修改后的资源。协商缓存也可以通过两种方式来设置，分别是 http 头信息中的 Etag 和 Last-Modified 属性。")]),t._v(" "),_("p",[_("strong",[t._v("强缓存策略")]),t._v("：使用强缓存策略时，如果缓存资源有效，则直接使用缓存资源，不必向服务器发送请求。强缓存策略可以通过两种方式来设置，分别为 http 头部信息中的 "),_("strong",[t._v("Expires 和 Cache-Control")]),t._v("。")]),t._v(" "),_("p",[t._v("Expires 即过期时间，存在于服务端返回的响应头中，它是 http1.0 中的方式。")]),t._v(" "),_("p",[t._v("因为它的一些缺点(服务器的时间和浏览器的时间可能并不一致)，在 http 1.1 中提出了一个新的头部属性就是 Cache-Control 属性。它提供了对资源的缓存的更精确的控制。它有很多不同的值，常用的比如我们可以通过设置 max-age 来指定资源能够被缓存的时间的大小，这是一个相对的时间，它会根据这个时间的大小和资源第一次请求时的时间来计算出资源过期的时间，因此相对于 Expires来说，这种方式更加有效一些。常用的还有比如 private ，用来规定资源只能被客户端缓存，不能够代理服务器所缓存。还有如 no-store ，用来指定资源不能够被缓存，no-cache 代表该资源能够被缓存，但是立即失效，每次都需要向服务器发起请求。")]),t._v(" "),_("p",[t._v("通常来说设置一种就行了，两种方式一起使用时，Cache-Control 的优先级要高于 Expires 。")]),t._v(" "),_("p",[_("strong",[t._v("区别")]),t._v("：强缓存策略和协商缓存策略在缓存命中时都会直接使用本地的缓存副本，区别只在于协商缓存会向服务器发送一次请求。它们缓存不命中时，都会向服务器发送请求来获取资源。在实际的缓存机制中，强缓存策略和协商缓存策略是一起合作使用的。浏览器首先会根据请求的信息判断，强缓存是否命中，如果命中则直接使用资源。如果不命中则根据头信息向服务器发起请求，使用协商缓存，如果协商缓存命中的话，则服务器不返回资源，浏览器直接使用本地资源的副本，如果协商缓存不命中，则浏览器返回最新的资源给浏览器。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("先通过"),_("code",[t._v("Cache-Control")]),t._v(" 验证强缓存是否可用")])]),t._v(" "),_("li",[_("p",[t._v("如果强缓存可用，那么直接用")])]),t._v(" "),_("li",[_("p",[t._v("否则进入协商缓存，即发送 HTTP 请求，服务器通过请求头中的"),_("code",[t._v("If-Modified-Since")]),t._v(" 或者"),_("code",[t._v("If-None-Match")]),t._v(" 这些条件请求字段检查资源是否更新,如果缓存有效会返回 304,如果有更新则返回200")]),t._v(" "),_("p",[t._v("具体过程：")])])]),t._v(" "),_("div",{staticClass:"language-! extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("强缓存：\n    cache-control : max-age: 10000 //缓存时间\n        from memory cache // 内存\n        from disk cache // 硬盘\n协商缓存\n        Last-modified // 当前服务器时间\n        ETag // 当前服务器的哈希\n\n判断过程：先判断当前强缓存时间是否过期，没有过去就去请求本地的内存和硬盘，过期就去协商缓存，\n返回if-Modified-Since(Last-modified) 和 if-no-Match(ETag)来判断当前文件是否有更新，\n如果没有更新返回304，更新则返回200和当前更新文件\n")])])]),_("blockquote",[_("p",[t._v("有了Last-Modified，为什么还要用ETag？\n1、因为如果在一秒钟之内对一个文件进行两次更改，Last-Modified就会不正确（Last—Modified不能识别秒单位的修改）\n2、某些服务器不能精确的得到文件的最后修改时间\n3、一些文件也行会周期新的更改，但是他的内容并不改变（仅仅改变修改的事件），这个时候我们并不希望客户端认为文件被修改，而重新Get")])]),t._v(" "),_("p",[_("strong",[t._v("from memory cache 与 from disk cache")]),t._v("\n从浏览器控制台Network中size一栏通常会有三种状态")]),t._v(" "),_("ol",[_("li",[t._v("memory cache")]),t._v(" "),_("li",[t._v("disk cache")]),t._v(" "),_("li",[t._v("资源自身大小（如：2k）")])]),t._v(" "),_("p",[_("strong",[t._v("区别")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Service Worker")]),t._v("：是运行在浏览器背后的独立线程，一般可以用来实现缓存功能，传输协议必须为 HTTPS，他的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。")]),t._v(" "),_("li",[_("strong",[t._v("memory cache")]),t._v("(短期缓存)：从内存中，资源直接从内存中拿到，不会请求服务器，一般已经加载过该资源且缓存在内存中了。当关闭页面时，此资源就被内存释放掉，再次从新打开页面时不会出现 memory cache 的情况")]),t._v(" "),_("li",[_("strong",[t._v("disk cache")]),t._v("：资源从磁盘中获取，也是在已经在之前的某个时间加载过该资源，不会请求服务器但是此资源不会随着该页面的关闭而释放掉，因为是存在硬盘当中的，下次打开仍会from disk cache")]),t._v(" "),_("li",[_("strong",[t._v("资源自身大小")]),t._v("：当http 状态码是200时，表示从服务器获取的资源，当状态码为304时，表示该数字是与服务端通信报文的大小，并不是该资源本身的大小，该资源是从本地获取的")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("状态码")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("200")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("memory cache")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("不请求网络资源，资源存在内存中，一般为脚本，图片字体")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("200")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("disk cache")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("不请求网络资源，资源存在磁盘中，一般非脚本会存在内存当中，如css等。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("200")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("资源自身大小")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("资源大小数值 从服务器下载最新资源。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("304")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("报文大小")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("请求服务端发现资源没有更新，使用本地资源，即命中协商缓存")])])])]),t._v(" "),_("p",[_("strong",[t._v("三级缓存原理")])]),t._v(" "),_("ol",[_("li",[t._v("先查找内存，存在则从内存中加载")]),t._v(" "),_("li",[t._v("内存中未找到，选择磁盘里获取，如磁盘有从磁盘加载")]),t._v(" "),_("li",[t._v("磁盘未找到，就发送网络请求")]),t._v(" "),_("li",[t._v("加载到的资源缓存到磁盘或内存中")])]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.pianshen.com/article/36851053044/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考这里"),_("OutboundLink")],1)]),t._v(" "),_("div",{staticClass:"language-! extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("hrome会根据本地内存的使用率来决定缓存存放在哪，如果内存使用率很高，放在磁盘里面，内存的使用率很高会暂时放在内存里面。这就可以比较合理的解释了为什么同一个资源有时是from memory cache有时是from disk cache的问题了\n")])])]),_("h2",{attrs:{id:"session-与-cookie"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#session-与-cookie"}},[t._v("#")]),t._v(" session 与 cookie")]),t._v(" "),_("p",[t._v("1，session 在服务器端，cookie 在客户端（浏览器）\n2，session 默认被存在在服务器的一个文件里（不是内存）\n3，session 的运行依赖 session id，而 session id 是存在 cookie 中的，也就是说，如果浏览器禁用了 cookie ，同时 session 也会失效（但是可以通过其它方式实现，比如在 url 中传递 session_id）\n4，session 可以放在 文件、数据库、或内存中都可以。\n5，用户验证这种场合一般会用 session 因此，维持一个会话的核心就是客户端的唯一标识，即 session id")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.zhihu.com/question/19786827/answer/21643186",target:"_blank",rel:"noopener noreferrer"}},[t._v("session 与 cookie"),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"http协议详解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http协议详解"}},[t._v("#")]),t._v(" http协议详解")]),t._v(" "),_("p",[t._v("当我们在浏览器地址栏输入我们要访问的 URL 后，浏览器会分析出URL上面的域名，然后通过DNS服务器解析出域名映射的IP地址，浏览器根据查询到的IP地址与Web服务器进行通信.")]),t._v(" "),_("p",[t._v("而用于客户端与服务器之间的通信协议就是我们今天要研究的 HTTP 协议。如果想了解从输入 URL 到页面呈现背后发生的故事，可以戳"),_("RouterLink",{attrs:{to:"/blog/Other-Library/HTTP.html"}},[t._v("这里")])],1),t._v(" "),_("p",[t._v("http是TCP/IP协议族的一部分")]),t._v(" "),_("h2",{attrs:{id:"http-是无状态协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-是无状态协议"}},[t._v("#")]),t._v(" HTTP 是无状态协议")]),t._v(" "),_("p",[_("strong",[t._v("为了更快地处理大量事务，确保协议的可伸缩性， HTTP 协议被设计成无状态协议。")])]),t._v(" "),_("p",[t._v("HTTP 协议自身不会对请求和响应之间的通信状态进行保存。任何两次请求之间都没有依赖关系。直观地说，就是每个请求都是独立的，与前面的请求和后面的请求都是没有直接联系的。协议本身并不保留之前一切的请求或 响应报文的信息，换言之协议对于发送过的请求或者响应都不做持久化处理。")]),t._v(" "),_("h2",{attrs:{id:"udp-和-tcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#udp-和-tcp"}},[t._v("#")]),t._v(" UDP 和 TCP")]),t._v(" "),_("p",[_("strong",[t._v("UDP")]),t._v("：协议面向无连接，不需要在传输数据前先连接对方，缺点：因此他具有不可靠性，不保证数据有序且不丢失的传递到对端，优点：相比TCP更轻便高效")]),t._v(" "),_("p",[_("strong",[t._v("TCP")]),t._v("：面向无连接，断开和连接都需要先握手，并在数据传输过程中，通过算法来保证数据的可靠性，基于字节流（将大块数据分割为以报文段为单位的数据包进行管理）")]),t._v(" "),_("h2",{attrs:{id:"http和tcp的不同"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http和tcp的不同"}},[t._v("#")]),t._v(" HTTP和TCP的不同")]),t._v(" "),_("p",[t._v("HTTP 作用是去定义数据，它规定在两台计算机之间相互传递信息时，每段数据以什么形式表达才能够被另一台计算机接收")]),t._v(" "),_("p",[t._v("TCP 作用是数据怎样才能稳定高效的在计算机之间传递")]),t._v(" "),_("h2",{attrs:{id:"tcp的三次握手和四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp的三次握手和四次挥手"}},[t._v("#")]),t._v(" TCP的三次握手和四次挥手")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("握手过程：\n    发送端 => 接收端 你能听到吗，下班去吃火锅？\n    接收端 => 发送端 能的，你能听到我吗，去哪吃？\n    发送端 => 接收端 可以的，记得带上钱。\n\n具体过程：\n    发送端发送当前seq（发送端序号）x 发送给当前接收端（发送SYN表识数据包）\n    接收端返回ack（确认序号）x+1,seq(接收端序号) y 给发送端（发送SYN表识数据包）\n    发送单发送ack（确认序号）y+1给接收端（发送ACK表识数据包）\n\n挥手过程：\n    客户端 => 服务端 请求关闭连接\n    服务端 => 客户端 好的，收到关闭消息\n    服务端 => 客户端 我要关闭了，你确认下\n    客户端 => 服务端 我关闭了，你也关闭吧，不用回复了 \n\n具体过程\n    客户端发送seq x+2（序号）ACK y+1 （确认序号）给服务端（FIN包）\n    服务器发送ACK（确认序号）x+1（ACK包）\n    服务器发送seq y+1 （序号）（FIN包）\n    客户端发送ACK（确认序号）y+2\n")])])]),_("p",[_("strong",[t._v("TCP三次握手和四次挥手的存在意义")]),t._v("\n为什么三次握手")]),t._v(" "),_("p",[t._v("三次握手是为了"),_("code",[t._v("确保客户端和服务端双方的接收与发送能力是否正常")]),t._v("，至于为什么不是不是两次，四次，是因为为了避免不必要的性能的开销,而3次，是完成双方考察发送和接收能力的最少次数。两次的话无法确认客户端的接收能力")]),t._v(" "),_("p",[t._v("为什么四次挥手")]),t._v(" "),_("p",[t._v("由于 tcp 是双向的，当我们客户端发送给服务端说可以断开连接了，但这个时候我们"),_("strong",[t._v("服务端数据可能还没发送完")]),t._v("，所以需要进行一次确认。我们服务端发送一个"),_("strong",[t._v("我收到了的消息（ACK确认包）"),_("strong",[t._v("给客户端，然后服务端再发送一个")]),t._v("我已经传输完毕了的消息（FIN包），可以断开链接了")]),t._v("，然后客户端确认到关闭端请求，给服务端发送收到端消息，双方就关闭了")]),t._v(" "),_("p",[t._v("参考："),_("a",{attrs:{href:"https://juejin.im/post/5ed0d289e51d45783d0ea4b7",target:"_blank",rel:"noopener noreferrer"}},[t._v("http 专场"),_("OutboundLink")],1)]),t._v(" "),_("Vssue")],1)}),[],!1,null,null,null);v.default=a.exports}}]);