(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{399:function(t,n,s){"use strict";s.r(n);var a=s(23),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("原题 ：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("颠倒给定的 32 位无符号整数的二进制位。\n\n \n\n示例 1：\n\n输入: 00000010100101000001111010011100\n输出: 00111001011110000010100101000000\n解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，\n      因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。\n示例 2：\n\n输入：11111111111111111111111111111101\n输出：10111111111111111111111111111111\n解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，\n      因此返回 3221225471 其二进制表示形式为 10101111110010110010011101101001。\n \n\n提示：\n\n请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。\n在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。\n \n\n进阶:\n如果多次调用这个函数，你将如何优化你的算法？\n")])])]),s("p",[s("strong",[t._v("解 ：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("reverseBits")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("padStart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("parseInt(string,radix) : string为字符串，radix为介于2-36之间的数。使用者告诉这个函数string（比如11）是radix（比如2）进制的，函数将固定返回string以十进制时显示的数（3）。")]),t._v(" "),s("p",[t._v("padStart() : 用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。填充从当前字符串的开始(左侧)应用的。")]),t._v(" "),s("p",[t._v("split() : 切割字符串为数组")]),t._v(" "),s("p",[t._v("join() :将数组（或类数组）所有元素连接成字符串并返回。")]),t._v(" "),s("p",[s("code",[t._v("return parseInt(n.toString(2).padStart(32, '0').split('').reverse().join(''), 2)")])]),t._v(" "),s("p",[t._v("接下来我们来讲讲思路，先拆分化解，"),s("code",[t._v("n.toString(2)")]),t._v(" 将 n 转换为2进制，然后 "),s("code",[t._v("padStart(32, '0')")]),t._v(" 将他填充至32位，不够的首位开始补0。")]),t._v(" "),s("p",[t._v("而后就容易理解了，先转数组，然后翻转，再转回字符串，最后利用 "),s("code",[t._v("parseInt(str,2)")]),t._v(" 转回为 2 进制。")])])}),[],!1,null,null,null);n.default=r.exports}}]);