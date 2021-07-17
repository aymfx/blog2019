(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{576:function(a,e,n){"use strict";n.r(e);var t=n(6),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"array-from"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#array-from"}},[a._v("#")]),a._v(" Array.from()")]),a._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[a._v("Array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("from方法用于将两类对象转为真正的数组：类似数组的对象（array"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("like object）和可遍历（iterable）的对象（包括"),n("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ES6")]),a._v("新增的数据结构Set和Map）。\n\t必须具有length属性\n")])])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\tlet arrayLike = {\n    '0': 'a',\n    '1': 'b',\n    '2': 'c',\n    length: 3\n};\n\n// ES5的写法\nvar arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']\n\n// ES6的写法\nlet arr2 = Array.from(arrayLike); // ['a', 'b', 'c']\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// NodeList对象\nlet ps = document.querySelectorAll('p');\nArray.from(ps).forEach(function (p) {\n  console.log(p);\n});\n\n// arguments对象\nfunction foo() {\n  var args = Array.from(arguments);\n  // ...\n}\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Array.from('hello')\n\t// ['h', 'e', 'l', 'l', 'o']\n\n\tlet namesSet = new Set(['a', 'b'])\n\tArray.from(namesSet) // ['a', 'b']\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("扩展运算符（...）也可以将某些数据结构转为数组。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// arguments对象\nfunction foo() {\n  var args = [...arguments];\n}\n\n// NodeList对象\n[...document.querySelectorAll('div')]\n\nArray.from({ length: 3 });\n// [ undefined, undefined, undefined ]\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Array.from(arrayLike, x => x * x);\n// 等同于\nArray.from(arrayLike).map(x => x * x);\n\nArray.from([1, 2, 3], (x) => x * x)\n// [1, 4, 9]\n")])])]),n("p",[a._v("#Array.of()\nArray.of 方法用于将一组值，转换为数组。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Array.of(3, 11, 8) // [3,11,8]\nArray.of(3) // [3]\nArray.of(3).length // 1\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Array.of() // []\nArray.of(undefined) // [undefined]\nArray.of(1) // [1]\nArray.of(1, 2) // [1, 2]\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("Array.of方法可以用下面的代码模拟实现。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("function ArrayOf(){\n  return [].slice.call(arguments);\n}\n")])])]),n("h1",{attrs:{id:"数组实例的-copywithin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组实例的-copywithin"}},[a._v("#")]),a._v(" 数组实例的 copyWithin()")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\tArray.prototype.copyWithin(target, start = 0, end = this.length)\n\t它接受三个参数。\n\t\t\t\ttarget（必需）：从该位置开始替换数据。\n\t\t\t\tstart（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。\n\t\t\t\tend（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("[1, 2, 3, 4, 5].copyWithin(0, 3)\n// [4, 5, 3, 4, 5]\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// 将3号位复制到0号位\n[1, 2, 3, 4, 5].copyWithin(0, 3, 4)\n// [4, 2, 3, 4, 5]\n\n// -2相当于3号位，-1相当于4号位\n[1, 2, 3, 4, 5].copyWithin(0, -2, -1)\n// [4, 2, 3, 4, 5]\n\n// 将3号位复制到0号位\n[].copyWithin.call({length: 5, 3: 1}, 0, 3)\n// {0: 1, 3: 1, length: 5}\n\n// 将2号位到数组结束，复制到0号位\nvar i32a = new Int32Array([1, 2, 3, 4, 5]);\ni32a.copyWithin(0, 2);\n// Int32Array [3, 4, 5, 4, 5]\n\n// 对于没有部署TypedArray的copyWithin方法的平台\n// 需要采用下面的写法\n[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);\n// Int32Array [4, 2, 3, 4, 5]\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// 将3号位复制到0号位\n[1, 2, 3, 4, 5].copyWithin(0, 3, 4)\n// [4, 2, 3, 4, 5]\n\n// -2相当于3号位，-1相当于4号位\n[1, 2, 3, 4, 5].copyWithin(0, -2, -1)\n// [4, 2, 3, 4, 5]\n\n// 将3号位复制到0号位\n[].copyWithin.call({length: 5, 3: 1}, 0, 3)\n// {0: 1, 3: 1, length: 5}\n\n// 将2号位到数组结束，复制到0号位\nvar i32a = new Int32Array([1, 2, 3, 4, 5]);\ni32a.copyWithin(0, 2);\n// Int32Array [3, 4, 5, 4, 5]\n\n// 对于没有部署TypedArray的copyWithin方法的平台\n// 需要采用下面的写法\n[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);\n// Int32Array [4, 2, 3, 4, 5]\n")])])]),n("h1",{attrs:{id:"数组实例的-find-和-findindex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组实例的-find-和-findindex"}},[a._v("#")]),a._v(" 数组实例的 find()和 findIndex()")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("[1, 4, -5, 10].find((n) => n < 0)//-5\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。\nfindIndex方法的用法与find方法非常类似返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("[1, 5, 10, 15].findIndex(function(value, index, arr) {\n  return value > 9;\n}) // 2\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("[NaN].indexOf(NaN)\n// -1\n\n[NaN].findIndex(y => Object.is(NaN, y))\n// 0\n")])])]),n("h1",{attrs:{id:"数组实例的-fill"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组实例的-fill"}},[a._v("#")]),a._v(" 数组实例的 fill()")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("fill方法使用给定值，填充一个数组。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("['a', 'b', 'c'].fill(7)\n\t// [7, 7, 7]\n\n\tnew Array(3).fill(7)\n\t// [7, 7, 7]\n")])])]),n("h1",{attrs:{id:"数组实例的-entries-keys-和-values"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组实例的-entries-keys-和-values"}},[a._v("#")]),a._v(" 数组实例的 entries()，keys()和 values()")]),a._v(" "),n("p",[a._v("ES6 提供三个新的方法——entries()，keys()和 values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用 for...of 循环进行遍历，唯一的区别是 keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("for (let index of ['a', 'b'].keys()) {\n  console.log(index);\n}\n// 0\n// 1\n\nfor (let elem of ['a', 'b'].values()) {\n  console.log(elem);\n}\n// 'a'\n// 'b'\n\nfor (let [index, elem] of ['a', 'b'].entries()) {\n  console.log(index, elem);\n}\n// 0 \"a\"\n// 1 \"b\"\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("let letter = ['a', 'b', 'c'];\nlet entries = letter.entries();\nconsole.log(entries.next().value); // [0, 'a']\nconsole.log(entries.next().value); // [1, 'b']\nconsole.log(entries.next().value); // [2, 'c']\n")])])]),n("h1",{attrs:{id:"数组实例的-includes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组实例的-includes"}},[a._v("#")]),a._v(" 数组实例的 includes()")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。该方法属于ES7，但Babel转码器已经支持。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\t[1, 2, 3].includes(2);     // true\n\t[1, 2, 3].includes(4);     // false\n\t[1, 2, NaN].includes(NaN); // true\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("indexOf方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。二是，它内部使用严格相当运算符（===）进行判断，这会导致对NaN的误判。\n")])])]),n("h1",{attrs:{id:"数组的空位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组的空位"}},[a._v("#")]),a._v(" 数组的空位")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("数组的空位指，数组的某一个位置没有任何值。比如，Array构造函数返回的数组都是空位\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// forEach方法\n[,'a'].forEach((x,i) => console.log(i)); // 1\n\n// filter方法\n['a',,'b'].filter(x => true) // ['a','b']\n\n// every方法\n[,'a'].every(x => x==='a') // true\n\n// some方法\n[,'a'].some(x => x !== 'a') // false\n\n// map方法\n[,'a'].map(x => 1) // [,1]\n\n// join方法\n[,'a',undefined,null].join('#') // \"#a##\"\n\n// toString方法\n[,'a',undefined,null].toString() // \",a,,\"\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("forEach(), filter(), every() 和some()都会跳过空位。\nmap()会跳过空位，但会保留这个值\njoin()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("Array.from方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Array.from(['a',,'b'])\n// [ \"a\", undefined, \"b\" ]\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("扩展运算符（...）也会将空位转为undefined。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("[...['a',,'b']]\n// [ \"a\", undefined, \"b\" ]\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("copyWithin()会连空位一起拷贝。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("[,'a','b',,].copyWithin(2,0) // [,\"a\",,\"a\"]\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("fill()会将空位视为正常的数组位置。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('new Array(3).fill(\'a\') // ["a","a","a"]\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("for...of循环也会遍历空位。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("let arr = [, ,];\nfor (let i of arr) {\n  console.log(1);\n}\n// 1\n// 1\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("entries()、keys()、values()、find()和findIndex()会将空位处理成undefined。\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// entries()\n[...[,'a'].entries()] // [[0,undefined], [1,\"a\"]]\n\n// keys()\n[...[,'a'].keys()] // [0,1]\n\n// values()\n[...[,'a'].values()] // [undefined,\"a\"]\n\n// find()\n[,'a'].find(x => true) // undefined\n\n// findIndex()\n[,'a'].findIndex(x => true) // 0\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);