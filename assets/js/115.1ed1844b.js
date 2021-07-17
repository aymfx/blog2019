(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{629:function(t,e,n){"use strict";n.r(e);var o=n(6),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("react-JSX In Depth")])]),t._v(" "),n("h1",{attrs:{id:"jsx-的语法糖是以下格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jsx-的语法糖是以下格式"}},[t._v("#")]),t._v(" JSX 的语法糖是以下格式")]),t._v(" "),n("blockquote",[n("p",[t._v("React.createElement(component,props,..childeren)")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("compiles before:\n<MyButton color=\"blue\" shadowSize={2}>\n  Click Me\n</MyButton>\n\ncompiles into:\n\nReact.createElement(\n  MyButton,\n  {color: 'blue', shadowSize: 2},\n  'Click Me'\n)\n")])])]),n("h1",{attrs:{id:"使用点作为-jsx-的类型-using-dot-notation-for-jsx-type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用点作为-jsx-的类型-using-dot-notation-for-jsx-type"}},[t._v("#")]),t._v(" 使用点作为 jsx 的类型 Using Dot Notation for JSX Type")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('const MyComponents = {\n  DatePicker: function DatePicker(props) {\n    return <div>Imagine a {props.color} datepicker here.</div>;\n  }\n}\n\nfunction BlueDatePicker() {\n  return <MyComponents.DatePicker color="blue" />;\n}\n')])])]),n("h1",{attrs:{id:"自定义的组件必须大写-否则-jsx-认为元素是-html-标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义的组件必须大写-否则-jsx-认为元素是-html-标签"}},[t._v("#")]),t._v(" 自定义的组件必须大写，否则 jsx 认为元素是 html 标签")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import React from 'react';\n\n// Wrong! This is a component and should have been capitalized:\nfunction hello(props) {\n  // Correct! This use of <div> is legitimate because div is a valid HTML tag:\n  return <div>Hello {props.toWhat}</div>;\n}\n\nfunction HelloWorld() {\n  // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:\n  return <hello toWhat=\"World\" />;\n}\n\n\nimport React from 'react';\n\n// Correct! This is a component and should be capitalized:\nfunction Hello(props) {\n  // Correct! This use of <div> is legitimate because div is a valid HTML tag:\n  return <div>Hello {props.toWhat}</div>;\n}\n\nfunction HelloWorld() {\n  // Correct! React knows <Hello /> is a component because it's capitalized.\n  return <Hello toWhat=\"World\" />;\n}\n")])])]),n("h1",{attrs:{id:"jsx-的类型不能是一个不能是一个表达式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jsx-的类型不能是一个不能是一个表达式"}},[t._v("#")]),t._v(" JSX 的类型不能是一个不能是一个表达式")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import React from 'react';\nimport { PhotoStory, VideoStory } from './stories';\n\nconst components = {\n  photo: PhotoStory,\n  video: VideoStory\n};\n\nfunction Story(props) {\n  // Wrong! JSX type can't be an expression.\n  return <components[props.storyType] story={props.story} />;\n}\n\nimport React from 'react';\nimport { PhotoStory, VideoStory } from './stories';\n\nconst components = {\n  photo: PhotoStory,\n  video: VideoStory\n};\n\nfunction Story(props) {\n  // Correct! JSX type can be a capitalized variable.\n  const SpecificStory = components[props.storyType];\n  return <SpecificStory story={props.story} />;\n}\n\n")])])]),n("h1",{attrs:{id:"props-in-jsx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#props-in-jsx"}},[t._v("#")]),t._v(" Props in JSX")]),t._v(" "),n("blockquote",[n("p",[t._v("在 jsx 中只能存在表达式，if 和 for 都不属于表达式，所以在里面不能用他们，但是有替代方法")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function NumberDescriber(props) {\n  let description;\n  if (props.number % 2 == 0) {\n    description = <strong>even</strong>;\n  } else {\n    description = <i>odd</i>;\n  }\n  return <div>{props.number} is an {description} number</div>;\n}\n")])])]),n("blockquote",[n("p",[t._v("使用字面量以及符号转义")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<MyComponent message=\"hello world\" />\n\n<MyComponent message={'hello world'} />\n\n<MyComponent message=\"&lt;3\" />\n\n<MyComponent message={'<3'} />\n")])])]),n("h1",{attrs:{id:"属性默认为-true-一般不推荐使用-与-es6-的-foo-foo-foo-省略很相近"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#属性默认为-true-一般不推荐使用-与-es6-的-foo-foo-foo-省略很相近"}},[t._v("#")]),t._v(" 属性默认为 true，一般不推荐使用，与 es6 的{foo}({foo:foo})省略很相近")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<MyTextBox autocomplete />\n\n<MyTextBox autocomplete={true} />\n")])])]),n("h1",{attrs:{id:"利用-es6-的-传播属性-props"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#利用-es6-的-传播属性-props"}},[t._v("#")]),t._v(" 利用 es6 的...传播属性（props）")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function App1() {\n  return <Greeting firstName=\"Ben\" lastName=\"Hector\" />;\n}\n\nfunction App2() {\n  const props = {firstName: 'Ben', lastName: 'Hector'};\n  return <Greeting {...props} />;\n}\n")])])]),n("h1",{attrs:{id:"false-null-undefind-true-这些不会被渲染出来但是他们将可以作为-boolean-值判断"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#false-null-undefind-true-这些不会被渲染出来但是他们将可以作为-boolean-值判断"}},[t._v("#")]),t._v(" false null undefind true 这些不会被渲染出来但是他们将可以作为 boolean 值判断")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<div>\n  {showHeader && <Header />}\n  <Content />\n</div>\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);