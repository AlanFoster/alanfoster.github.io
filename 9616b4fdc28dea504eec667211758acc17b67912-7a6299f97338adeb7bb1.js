(self.webpackChunkalanfoster_github_io=self.webpackChunkalanfoster_github_io||[]).push([[230],{55109:function(e,t,n){"use strict";n.d(t,{C8:function(){return o},dK:function(){return a},mq:function(){return i}});var r=n(67294),o=r.createContext(),i=r.createContext();function a(e){var t=e.children,n=r.useState(null),a=n[0],s=n[1],u=r.useRef(!1);r.useEffect((function(){return function(){u.current=!0}}),[]);var c=r.useCallback((function(e){u.current||s(e)}),[]);return r.createElement(o.Provider,{value:a},r.createElement(i.Provider,{value:c},t))}},99006:function(e,t,n){"use strict";n.d(t,{r:function(){return je}});var r=n(67294),o=n(55109),i=n(45132),a=n(73935);function s(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function u(e){return e instanceof s(e).Element||e instanceof Element}function c(e){return e instanceof s(e).HTMLElement||e instanceof HTMLElement}function f(e){return"undefined"!=typeof ShadowRoot&&(e instanceof s(e).ShadowRoot||e instanceof ShadowRoot)}var l=Math.max,p=Math.min,d=Math.round;function m(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function h(){return!/^((?!chrome|android).)*safari/i.test(m())}function v(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&c(e)&&(o=e.offsetWidth>0&&d(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&d(r.height)/e.offsetHeight||1);var a=(u(e)?s(e):window).visualViewport,f=!h()&&n,l=(r.left+(f&&a?a.offsetLeft:0))/o,p=(r.top+(f&&a?a.offsetTop:0))/i,m=r.width/o,v=r.height/i;return{width:m,height:v,top:p,right:l+m,bottom:p+v,left:l,x:l,y:p}}function y(e){var t=s(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function b(e){return e?(e.nodeName||"").toLowerCase():null}function g(e){return((u(e)?e.ownerDocument:e.document)||window.document).documentElement}function x(e){return v(g(e)).left+y(e).scrollLeft}function w(e){return s(e).getComputedStyle(e)}function E(e){var t=w(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function O(e,t,n){void 0===n&&(n=!1);var r,o,i=c(t),a=c(t)&&function(e){var t=e.getBoundingClientRect(),n=d(t.width)/e.offsetWidth||1,r=d(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),u=g(t),f=v(e,a,n),l={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(i||!i&&!n)&&(("body"!==b(t)||E(u))&&(l=(r=t)!==s(r)&&c(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:y(r)),c(t)?((p=v(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):u&&(p.x=x(u))),{x:f.left+l.scrollLeft-p.x,y:f.top+l.scrollTop-p.y,width:f.width,height:f.height}}function S(e){var t=v(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function j(e){return"html"===b(e)?e:e.assignedSlot||e.parentNode||(f(e)?e.host:null)||g(e)}function k(e){return["html","body","#document"].indexOf(b(e))>=0?e.ownerDocument.body:c(e)&&E(e)?e:k(j(e))}function C(e,t){var n;void 0===t&&(t=[]);var r=k(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=s(r),a=o?[i].concat(i.visualViewport||[],E(r)?r:[]):r,u=t.concat(a);return o?u:u.concat(C(j(a)))}function A(e){return["table","td","th"].indexOf(b(e))>=0}function D(e){return c(e)&&"fixed"!==w(e).position?e.offsetParent:null}function P(e){for(var t=s(e),n=D(e);n&&A(n)&&"static"===w(n).position;)n=D(n);return n&&("html"===b(n)||"body"===b(n)&&"static"===w(n).position)?t:n||function(e){var t=/firefox/i.test(m());if(/Trident/i.test(m())&&c(e)&&"fixed"===w(e).position)return null;var n=j(e);for(f(n)&&(n=n.host);c(n)&&["html","body"].indexOf(b(n))<0;){var r=w(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var T="top",L="bottom",R="right",M="left",N="auto",B=[T,L,R,M],U="start",W="end",I="viewport",q="popper",Z=B.reduce((function(e,t){return e.concat([t+"-"+U,t+"-"+W])}),[]),H=[].concat(B,[N]).reduce((function(e,t){return e.concat([t,t+"-"+U,t+"-"+W])}),[]),_=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function F(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var V={placement:"bottom",modifiers:[],strategy:"absolute"};function $(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function z(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?V:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},V,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],f=!1,l={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;p(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:u(e)?C(e):e.contextElement?C(e.contextElement):[],popper:C(t)};var a=function(e){var t=F(e);return _.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,s.options.modifiers)));return s.orderedModifiers=a.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:l,options:r}),a=function(){};c.push(i||a)}})),l.update()},forceUpdate:function(){if(!f){var e=s.elements,t=e.reference,n=e.popper;if($(t,n)){s.rects={reference:O(t,P(n),"fixed"===s.options.strategy),popper:S(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,u=void 0===a?{}:a,c=o.name;"function"==typeof i&&(s=i({state:s,options:u,name:c,instance:l})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){l.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){p(),f=!0}};if(!$(e,t))return l;function p(){c.forEach((function(e){return e()})),c=[]}return l.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var X={passive:!0};function Y(e){return e.split("-")[0]}function G(e){return e.split("-")[1]}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function K(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?Y(o):null,a=o?G(o):null,s=n.x+n.width/2-r.width/2,u=n.y+n.height/2-r.height/2;switch(i){case T:t={x:s,y:n.y-r.height};break;case L:t={x:s,y:n.y+n.height};break;case R:t={x:n.x+n.width,y:u};break;case M:t={x:n.x-r.width,y:u};break;default:t={x:n.x,y:n.y}}var c=i?J(i):null;if(null!=c){var f="y"===c?"height":"width";switch(a){case U:t[c]=t[c]-(n[f]/2-r[f]/2);break;case W:t[c]=t[c]+(n[f]/2-r[f]/2)}}return t}var Q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ee(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,u=e.position,c=e.gpuAcceleration,f=e.adaptive,l=e.roundOffsets,p=e.isFixed,m=a.x,h=void 0===m?0:m,v=a.y,y=void 0===v?0:v,b="function"==typeof l?l({x:h,y:y}):{x:h,y:y};h=b.x,y=b.y;var x=a.hasOwnProperty("x"),E=a.hasOwnProperty("y"),O=M,S=T,j=window;if(f){var k=P(n),C="clientHeight",A="clientWidth";if(k===s(n)&&"static"!==w(k=g(n)).position&&"absolute"===u&&(C="scrollHeight",A="scrollWidth"),o===T||(o===M||o===R)&&i===W)S=L,y-=(p&&k===j&&j.visualViewport?j.visualViewport.height:k[C])-r.height,y*=c?1:-1;if(o===M||(o===T||o===L)&&i===W)O=R,h-=(p&&k===j&&j.visualViewport?j.visualViewport.width:k[A])-r.width,h*=c?1:-1}var D,N=Object.assign({position:u},f&&Q),B=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:d(t*r)/r||0,y:d(n*r)/r||0}}({x:h,y:y}):{x:h,y:y};return h=B.x,y=B.y,c?Object.assign({},N,((D={})[S]=E?"0":"",D[O]=x?"0":"",D.transform=(j.devicePixelRatio||1)<=1?"translate("+h+"px, "+y+"px)":"translate3d("+h+"px, "+y+"px, 0)",D)):Object.assign({},N,((t={})[S]=E?y+"px":"",t[O]=x?h+"px":"",t.transform="",t))}var te={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=H.reduce((function(e,n){return e[n]=function(e,t,n){var r=Y(e),o=[M,T].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[M,R].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],u=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},ne={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return ne[e]}))}var oe={start:"end",end:"start"};function ie(e){return e.replace(/start|end/g,(function(e){return oe[e]}))}function ae(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&f(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ue(e,t,n){return t===I?se(function(e,t){var n=s(e),r=g(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,u=0,c=0;if(o){i=o.width,a=o.height;var f=h();(f||!f&&"fixed"===t)&&(u=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:u+x(e),y:c}}(e,n)):u(t)?function(e,t){var n=v(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):se(function(e){var t,n=g(e),r=y(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=l(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=l(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+x(e),u=-r.scrollTop;return"rtl"===w(o||n).direction&&(s+=l(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:u}}(g(e)))}function ce(e,t,n,r){var o="clippingParents"===t?function(e){var t=C(j(e)),n=["absolute","fixed"].indexOf(w(e).position)>=0&&c(e)?P(e):e;return u(n)?t.filter((function(e){return u(e)&&ae(e,n)&&"body"!==b(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=ue(e,n,r);return t.top=l(o.top,t.top),t.right=p(o.right,t.right),t.bottom=p(o.bottom,t.bottom),t.left=l(o.left,t.left),t}),ue(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function fe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function le(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,c=void 0===s?"clippingParents":s,f=n.rootBoundary,l=void 0===f?I:f,p=n.elementContext,d=void 0===p?q:p,m=n.altBoundary,h=void 0!==m&&m,y=n.padding,b=void 0===y?0:y,x=fe("number"!=typeof b?b:le(b,B)),w=d===q?"reference":q,E=e.rects.popper,O=e.elements[h?w:d],S=ce(u(O)?O:O.contextElement||g(e.elements.popper),c,l,a),j=v(e.elements.reference),k=K({reference:j,element:E,strategy:"absolute",placement:o}),C=se(Object.assign({},E,k)),A=d===q?C:j,D={top:S.top-A.top+x.top,bottom:A.bottom-S.bottom+x.bottom,left:S.left-A.left+x.left,right:A.right-S.right+x.right},P=e.modifiersData.offset;if(d===q&&P){var M=P[o];Object.keys(D).forEach((function(e){var t=[R,L].indexOf(e)>=0?1:-1,n=[T,L].indexOf(e)>=0?"y":"x";D[e]+=M[n]*t}))}return D}function de(e,t,n){return l(e,p(t,n))}var me={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,u=n.boundary,c=n.rootBoundary,f=n.altBoundary,d=n.padding,m=n.tether,h=void 0===m||m,v=n.tetherOffset,y=void 0===v?0:v,b=pe(t,{boundary:u,rootBoundary:c,padding:d,altBoundary:f}),g=Y(t.placement),x=G(t.placement),w=!x,E=J(g),O="x"===E?"y":"x",j=t.modifiersData.popperOffsets,k=t.rects.reference,C=t.rects.popper,A="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,D="number"==typeof A?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),N=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(j){if(i){var W,I="y"===E?T:M,q="y"===E?L:R,Z="y"===E?"height":"width",H=j[E],_=H+b[I],F=H-b[q],V=h?-C[Z]/2:0,$=x===U?k[Z]:C[Z],z=x===U?-C[Z]:-k[Z],X=t.elements.arrow,K=h&&X?S(X):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[I],te=Q[q],ne=de(0,k[Z],K[Z]),re=w?k[Z]/2-V-ne-ee-D.mainAxis:$-ne-ee-D.mainAxis,oe=w?-k[Z]/2+V+ne+te+D.mainAxis:z+ne+te+D.mainAxis,ie=t.elements.arrow&&P(t.elements.arrow),ae=ie?"y"===E?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(W=null==N?void 0:N[E])?W:0,ue=H+oe-se,ce=de(h?p(_,H+re-se-ae):_,H,h?l(F,ue):F);j[E]=ce,B[E]=ce-H}if(s){var fe,le="x"===E?T:M,me="x"===E?L:R,he=j[O],ve="y"===O?"height":"width",ye=he+b[le],be=he-b[me],ge=-1!==[T,M].indexOf(g),xe=null!=(fe=null==N?void 0:N[O])?fe:0,we=ge?ye:he-k[ve]-C[ve]-xe+D.altAxis,Ee=ge?he+k[ve]+C[ve]-xe-D.altAxis:be,Oe=h&&ge?function(e,t,n){var r=de(e,t,n);return r>n?n:r}(we,he,Ee):de(h?we:ye,he,h?Ee:be);j[O]=Oe,B[O]=Oe-he}t.modifiersData[r]=B}},requiresIfExists:["offset"]};var he={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Y(n.placement),u=J(s),c=[M,R].indexOf(s)>=0?"height":"width";if(i&&a){var f=function(e,t){return fe("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:le(e,B))}(o.padding,n),l=S(i),p="y"===u?T:M,d="y"===u?L:R,m=n.rects.reference[c]+n.rects.reference[u]-a[u]-n.rects.popper[c],h=a[u]-n.rects.reference[u],v=P(i),y=v?"y"===u?v.clientHeight||0:v.clientWidth||0:0,b=m/2-h/2,g=f[p],x=y-l[c]-f[d],w=y/2-l[c]/2+b,E=de(g,w,x),O=u;n.modifiersData[r]=((t={})[O]=E,t.centerOffset=E-w,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&ae(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[T,R,L,M].some((function(t){return e[t]>=0}))}var be=z({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,u=void 0===a||a,c=s(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",n.update,X)})),u&&c.addEventListener("resize",n.update,X),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",n.update,X)})),u&&c.removeEventListener("resize",n.update,X)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=K({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,u=void 0===s||s,c={placement:Y(t.placement),variation:G(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ee(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ee(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];c(o)&&b(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});c(r)&&b(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},te,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,u=n.fallbackPlacements,c=n.padding,f=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=Y(v),b=u||(y===v||!m?[re(v)]:function(e){if(Y(e)===N)return[];var t=re(e);return[ie(e),t,ie(t)]}(v)),g=[v].concat(b).reduce((function(e,n){return e.concat(Y(n)===N?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,c=void 0===u?H:u,f=G(r),l=f?s?Z:Z.filter((function(e){return G(e)===f})):B,p=l.filter((function(e){return c.indexOf(e)>=0}));0===p.length&&(p=l);var d=p.reduce((function(t,n){return t[n]=pe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[Y(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:f,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,w=t.rects.popper,E=new Map,O=!0,S=g[0],j=0;j<g.length;j++){var k=g[j],C=Y(k),A=G(k)===U,D=[T,L].indexOf(C)>=0,P=D?"width":"height",W=pe(t,{placement:k,boundary:f,rootBoundary:l,altBoundary:p,padding:c}),I=D?A?R:M:A?L:T;x[P]>w[P]&&(I=re(I));var q=re(I),_=[];if(i&&_.push(W[C]<=0),s&&_.push(W[I]<=0,W[q]<=0),_.every((function(e){return e}))){S=k,O=!1;break}E.set(k,_)}if(O)for(var F=function(e){var t=g.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return S=t,"break"},V=m?3:1;V>0;V--){if("break"===F(V))break}t.placement!==S&&(t.modifiersData[r]._skip=!0,t.placement=S,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},me,he,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=pe(t,{elementContext:"reference"}),s=pe(t,{altBoundary:!0}),u=ve(a,r),c=ve(s,o,i),f=ye(u),l=ye(c);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}}]}),ge=n(56397),xe=n.n(ge),we=[],Ee=function(){},Oe=function(){return Promise.resolve(null)},Se=[];function je(e){var t=e.placement,n=void 0===t?"bottom":t,s=e.strategy,u=void 0===s?"absolute":s,c=e.modifiers,f=void 0===c?Se:c,l=e.referenceElement,p=e.onFirstUpdate,d=e.innerRef,m=e.children,h=r.useContext(o.C8),v=r.useState(null),y=v[0],b=v[1],g=r.useState(null),x=g[0],w=g[1];r.useEffect((function(){(0,i.k$)(d,y)}),[d,y]);var E=r.useMemo((function(){return{placement:n,strategy:u,onFirstUpdate:p,modifiers:[].concat(f,[{name:"arrow",enabled:null!=x,options:{element:x}}])}}),[n,u,p,f,x]),O=function(e,t,n){void 0===n&&(n={});var o=r.useRef(null),s={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||we},u=r.useState({styles:{popper:{position:s.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),c=u[0],f=u[1],l=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);a.flushSync((function(){f({styles:(0,i.sq)(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:(0,i.sq)(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),p=r.useMemo((function(){var e={onFirstUpdate:s.onFirstUpdate,placement:s.placement,strategy:s.strategy,modifiers:[].concat(s.modifiers,[l,{name:"applyStyles",enabled:!1}])};return xe()(o.current,e)?o.current||e:(o.current=e,e)}),[s.onFirstUpdate,s.placement,s.strategy,s.modifiers,l]),d=r.useRef();return(0,i.LI)((function(){d.current&&d.current.setOptions(p)}),[p]),(0,i.LI)((function(){if(null!=e&&null!=t){var r=(n.createPopper||be)(e,t,p);return d.current=r,function(){r.destroy(),d.current=null}}}),[e,t,n.createPopper]),{state:d.current?d.current.state:null,styles:c.styles,attributes:c.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}}(l||h,y,E),S=O.state,j=O.styles,k=O.forceUpdate,C=O.update,A=r.useMemo((function(){return{ref:b,style:j.popper,placement:S?S.placement:n,hasPopperEscaped:S&&S.modifiersData.hide?S.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:S&&S.modifiersData.hide?S.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:j.arrow,ref:w},forceUpdate:k||Ee,update:C||Oe}}),[b,w,n,S,j,C,k]);return(0,i.$p)(m)(A)}},44963:function(e,t,n){"use strict";n.d(t,{s:function(){return u}});var r=n(67294),o=n(33180),i=n.n(o),a=n(55109),s=n(45132);function u(e){var t=e.children,n=e.innerRef,o=r.useContext(a.mq),u=r.useCallback((function(e){(0,s.k$)(n,e),(0,s.DL)(o,e)}),[n,o]);return r.useEffect((function(){return function(){return(0,s.k$)(n,null)}}),[]),r.useEffect((function(){i()(Boolean(o),"`Reference` should not be used outside of a `Manager` component.")}),[o]),(0,s.$p)(t)({ref:u})}},45132:function(e,t,n){"use strict";n.d(t,{$p:function(){return o},DL:function(){return i},LI:function(){return u},k$:function(){return a},sq:function(){return s}});var r=n(67294),o=function(e){return Array.isArray(e)?e[0]:e},i=function(e){if("function"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}},a=function(e,t){if("function"==typeof e)return i(e,t);null!=e&&(e.current=t)},s=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},u="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect},56397:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,u,c,f;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(u=s;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;for(f=e.entries();!(u=f.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(u=s;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=s;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,c[u]))return!1;if(t&&e instanceof Element)return!1;for(u=s;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!e.$$typeof)&&!i(e[c[u]],a[c[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},8455:function(e,t,n){"use strict";n.d(t,{ZP:function(){return v}});var r=n(63366),o=n(94578),i=n(67294),a=n(73935),s=!1,u=i.createContext(null),c="unmounted",f="exited",l="entering",p="entered",d="exiting",m=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=f,r.appearStatus=l):o=p:o=t.unmountOnExit||t.mountOnEnter?c:f,r.state={status:o},r.nextCallback=null,r}(0,o.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===c?{status:f}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==l&&n!==p&&(t=l):n!==l&&n!==p||(t=d)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===l){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:c})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[a.findDOMNode(this),r],i=o[0],u=o[1],c=this.getTimeouts(),f=r?c.appear:c.enter;!e&&!n||s?this.safeSetState({status:p},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,u),this.safeSetState({status:l},(function(){t.props.onEntering(i,u),t.onTransitionEnd(f,(function(){t.safeSetState({status:p},(function(){t.props.onEntered(i,u)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:a.findDOMNode(this);t&&!s?(this.props.onExit(r),this.safeSetState({status:d},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:f},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:f},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],s=o[1];this.props.addEndListener(i,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===c)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,r.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(u.Provider,{value:null},"function"==typeof n?n(e,o):i.cloneElement(i.Children.only(n),o))},t}(i.Component);function h(){}m.contextType=u,m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},m.UNMOUNTED=c,m.EXITED=f,m.ENTERING=l,m.ENTERED=p,m.EXITING=d;var v=m},88397:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r="index-module--socialIcon--1288a",o=n(67294),i=n(38054),a=function(){return o.createElement(i.W2,null,o.createElement("footer",{className:"index-module--footer--48bcc"},o.createElement(i.X2,null,o.createElement(i.JX,null,o.createElement("div",null,"Alan Foster"),o.createElement("div",null,o.createElement("a",{href:"mailto:alan@alanfoster.me"},"alan@alanfoster.me"))),o.createElement(i.JX,{className:"index-module--socialIcons--a3042"},o.createElement("div",null,o.createElement("a",{href:"https://github.com/alanfoster"},o.createElement("span",{className:"username"},"alanfoster"),o.createElement("span",{className:r},o.createElement("svg",{viewBox:"0 0 16 16",width:"16",height:"16"},o.createElement("path",{fill:"#828282",d:"M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"}))))),o.createElement("div",null,o.createElement("a",{href:"https://twitter.com/alanfosterdev"},o.createElement("span",{className:"username"},"alanfosterdev"),o.createElement("span",{className:r},o.createElement("svg",{viewBox:"0 0 16 16",width:"16",height:"16"},o.createElement("path",{fill:"#828282",d:"M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809 c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"})))))))))}},46743:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(71082),o=n(45697),i=n.n(o),a=n(67294),s=n(38054);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var c=function(e){return e.isCurrent?{className:"nav-link active"}:null},f=function(e){return e.isPartiallyCurrent?{className:"nav-link active"}:null},l=function(e){return a.createElement(r.rU,u({},e,{to:e.href,activeClassName:"active"}))};l.propTypes={href:i().string.isRequired};var p=function(e){var t=e.brand,n=e.onToggle,r=e.isOpen;return a.createElement(s.wp,{color:"faded",light:!0,className:"".concat("index-module--navbar--bf5f1"," navbar-expand-sm sticky-top")},a.createElement(s.UG,{href:"/"},t),a.createElement(s.WR,{onClick:n}),a.createElement(s.UO,{isOpen:r,navbar:!0},a.createElement(s.JL,{className:"ml-auto",navbar:!0},a.createElement(s.LY,null,a.createElement(s.OL,{getProps:c,tag:l,href:"/"},"About")),a.createElement(s.LY,null,a.createElement(s.OL,{getProps:f,tag:l,href:"/posts"},"Posts")),a.createElement(s.LY,null,a.createElement(s.OL,{getProps:f,tag:l,href:"/talks"},"Talks")),a.createElement(s.LY,null,a.createElement(s.OL,{getProps:f,tag:l,href:"/workshops"},"Workshops")))))};p.propTypes={brand:i().string.isRequired,onToggle:i().func.isRequired,isOpen:i().bool.isRequired};var d=p;function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){s=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v="Alan Foster",y=function(e){var t=e.children,n=m((0,a.useState)(!1),2),r=n[0],o=n[1];return a.createElement("div",null,a.createElement(d,{brand:v,onToggle:function(){return o(!r)},isOpen:r}),t)};y.propTypes={children:i().node.isRequired};var b=y},81678:function(e,t,n){"use strict";n.d(t,{YS:function(){return i},kQ:function(){return r},t$:function(){return o}});var r="index-module--content--9ee75",o="index-module--left--16cbe",i="index-module--wrapper--d8d09"},33180:function(e){"use strict";var t=function(){};e.exports=t},30907:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},15671:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},43144:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return o}})},61120:function(e,t,n){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return r}})},60136:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(89611);function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},6215:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return i}});var o=n(97326);function i(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}},70885:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(40181);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){s=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},42982:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(30907);var o=n(40181);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40181:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(30907);function o(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=9616b4fdc28dea504eec667211758acc17b67912-7a6299f97338adeb7bb1.js.map