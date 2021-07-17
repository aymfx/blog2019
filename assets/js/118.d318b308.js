(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{631:function(t,n,e){"use strict";e.r(n);var s=e(6),r=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("react 做了很多处理，最大限度的减少了 dom 的操作，使我们能快速的开发，而不需要做很多操作，但是有些地方需要我们手动去操作 react 应用，提高性能")])]),t._v(" "),e("h1",{attrs:{id:"性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),e("blockquote",[e("p",[t._v("react 做了很多处理，最大限度的减少了 dom 的操作，使我们能快速的开发，而不需要做很多操作，但是有些地方需要我们手动去操作 react 应用，提高性能")])]),t._v(" "),e("ul",[e("li",[t._v("使用生产环境下的 react.js,这样可以减少体积以及在生产环境下不需要的提示")]),t._v(" "),e("li",[t._v("创建 reactAPP ---\x3e npm run build 进行打包压缩")]),t._v(" "),e("li",[t._v("利用 branch 创建更高效的生产版本\n"),e("ul",[e("li",[t._v("npm install --save-dev uglify-js-brunch 或者 yarn add --dev uglify-js-brunch")]),t._v(" "),e("li",[t._v("brunch build -p")])])]),t._v(" "),e("li",[t._v("利用 webpack 创建，如果是用 create-react 创建的可以不考虑重新建")])]),t._v(" "),e("h1",{attrs:{id:"虚拟节点-避免重复渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟节点-避免重复渲染"}},[t._v("#")]),t._v(" 虚拟节点，避免重复渲染")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("shouldComponentUpdate(nextProps, nextState) {\n  return true;\n}\n")])])]),e("blockquote",[e("p",[t._v("第一种方式")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class CounterButton extends Component {\n    constructor(props){\n        super(props);\n        this.state = {count:1}\n    }\n\n    shouldComponentUpdate(nextProps,nextState) {\n        if(this.props.color !== nextProps.color){\n            return true;\n        }\n        if(this.state.count !==nextState.count){\n            return true;\n        }\n\n        return false;\n    }\n\n    render(){\n        return (\n\n            <button\n                color={this.props.color}\n                onClick={()=>this.setState(state => ({count:state.count+1}))}>\n            Count:{this.state.count}\n            </button>\n\n        )\n    }\n}\n")])])]),e("blockquote",[e("p",[t._v("第二种方式")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class CounterButton extends React.PureComponent {\n    constructor(props){\n        super(props);\n        this.state = {count:1}\n    }\n    render(){\n        return (\n\n            <button\n                color={this.props.color}\n                onClick={()=>this.setState(state => ({count:state.count+1}))}>\n                Count:{this.state.count}\n            </button>\n\n        )\n    }\n}\n")])])]),e("blockquote",[e("p",[t._v("第二种适合复杂的情况下的浅比较，但是在某些情况下浅比较也会错失，如数据的突变情况")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class ListOfWords extends React.PureComponent{\n    render(){\n        return (<div>{this.props.words.join(',')}</div>)\n    }\n}\n\nclass WordAdder extends Component {\n    constructor(props){\n        super(props);\n        this.state = {words:['maodan']};\n        this.handleClick = this.handleClick.bind(this);\n    }\n\n     handleClick(){\n         //这是造成不跟新的原因\n        const words  =this.state.words;\n        words.push('iloveyou');\n        this.setState({words:words})\n\n    }\n\n\n\n    render(){\n        return(<div>\n            <button onClick={this.handleClick}>确定</button>\n            <ListOfWords words={this.state.words}/>\n        </div>)\n    }\n\n}\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//可以使用concat链接解决、\n\n\nhandleClick() {\n        this.setState(prevState =>({words:[...prevState.words,'iloveyou']}))\n    }\n")])])]),e("blockquote",[e("p",[t._v("不可变的数据结构为您提供了一种跟踪对象变化的廉价方法，这就是我们需要实现的组件。这通常会给你带来一个很好的性能提升")])]),t._v(" "),e("blockquote",[e("p",[t._v("没怎么看懂 https://facebook.github.io/react/docs/optimizing-performance.html")])])])}),[],!1,null,null,null);n.default=r.exports}}]);