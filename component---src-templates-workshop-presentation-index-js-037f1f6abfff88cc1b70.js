"use strict";(self.webpackChunkalanfoster_github_io=self.webpackChunkalanfoster_github_io||[]).push([[656],{26625:function(t,e,n){n.r(e);var r,o=n(90680),i=n(67294);e.default=function(t){var e=t.data,c=(0,i.useState)(!1),a=c[0],l=c[1];return(0,i.useEffect)((function(){l(!0),r||(r=n(68856).Z)}),[a]),a?i.createElement(o.Z,null,i.createElement(r,{data:e})):i.createElement(o.Z,null)}},68856:function(t,e,n){n.d(e,{Z:function(){return T}});var r=n(55750),o=n(17535),i=n(6617),c=n(67294),a=n(8238),l=n(66508),u=n(45697),s=n.n(u),f=n(47640),p=n(973);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(){return m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},m.apply(this,arguments)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function E(t,e){return E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},E(t,e)}var g=(0,p.default)("a",{target:"e1wojnuz0"})((function(t){return t.styles})),w=function(t){function e(){return b(this,e),v(this,d(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){var t=this.context.typeface||{};return c.createElement(g,m({className:this.props.className,href:this.props.href,target:this.props.target},"_blank"===this.props.target?{rel:"noopener noreferrer"}:{},{styles:[this.context.styles.components.link,f.Wi.call(this),t,this.props.style]}),this.props.children)}}])&&h(n.prototype,r),o&&h(n,o),e}(c.Component);w.defaultProps={target:"_self"},w.contextTypes={styles:s().object,store:s().object,typeface:s().object};var k=n(10412),O=n(81922);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Z(t){return Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Z(t)}function P(t,e){return P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},P(t,e)}var x=(0,p.default)("li",{target:"ezfhvuh0"})((function(t){return t.styles})),z=function(t){function e(){return _(this,e),C(this,Z(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){var t=this.context.typeface||{};return c.createElement(x,{className:this.props.className,styles:[this.context.styles.components.listItem,f.Wi.call(this),t,this.props.style,(0,O.wJ)(this.props.bulletStyle,!0)]},this.props.children)}}])&&S(n.prototype,r),o&&S(n,o),e}(c.Component);z.contextTypes={styles:s().object,store:s().object,typeface:s().object};var A=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this.props,e=t.onEnterActiveSection,n=t.onExitActiveSection,r=this.props.data,i=r.overview,u=r.content,s=r.sidebar;if(!i)return null;var f=s.fields.yml.items,p=u.edges.reduce((function(t,e){return t[e.node.fields.slug]=(0,o.sk)(e.node.htmlAst),t}),{}),y=f.map((function(t){return{title:t.title,link:t.link,id:t.link,page:p[t.link]}})).filter((function(t){return"Presentation"!==t.title}));return c.createElement(k.Z,{transition:["zoom","slide"],progress:"bar",theme:o.rS,transitionDuration:500},c.createElement(a.Z,{transition:["zoom"],bgColor:"primary",onActive:n},c.createElement(l.Z,{size:1,fit:!0,caps:!0,lineHeight:1,textColor:"black"},i.frontmatter.title),c.createElement(l.Z,{size:4,caps:!0,textColor:"tertiary"},"The workshop")),c.createElement(a.Z,{transition:["zoom"],bgColor:"primary",onActive:n},c.createElement(O.ZP,{ordered:!0},y.map((function(t){return c.createElement(z,{key:t.title},c.createElement(w,{href:t.link},t.title))})))),y.map((function(t,n){return function(t,e,n){if("Presentation"===t.title)return null;var r=c.createElement(a.Z,{transition:["zoom"],bgColor:"primary",id:encodeURIComponent(t.link),onActive:function(){return n(t)}},c.createElement(l.Z,{size:1,fit:!0,caps:!0,lineHeight:1,textColor:"black"},t.title),c.createElement(l.Z,{size:4,caps:!0},c.createElement(w,{href:t.link,textColor:"tertiary"},"Part ",e+1)));if(!t.page)throw new Error("Could not find section "+JSON.stringify(t,null,4));var i=t.page.map((function(e,r){return c.createElement(a.Z,{key:t.link+"__"+r,transition:["zoom"],onActive:function(){return n(t)},bgColor:"primary"},(0,o.$1)(e))}));return[r].concat(i)}(t,n,e)})),c.createElement(a.Z,{transition:["zoom"],bgColor:"primary",onActive:this.onExitActiveSection},c.createElement(l.Z,{size:4,caps:!0,textColor:"tertiary"},"le fin")))},e}(c.PureComponent),T=function(t){var e=(0,c.useState)(null),n=e[0],r=e[1];return c.createElement("div",null,n&&c.createElement("a",{href:n.link},c.createElement(i.Z,{className:"styles-module--viewSection--b9b97"})),c.createElement(A,Object.assign({},t,{onEnterActiveSection:function(t){r(t)},onExitActiveSection:function(){r(null)}})))}}}]);
//# sourceMappingURL=component---src-templates-workshop-presentation-index-js-037f1f6abfff88cc1b70.js.map