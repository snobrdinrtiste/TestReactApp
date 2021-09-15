(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[67],{1655:function(e,t,r){"use strict";r.r(t);var n=r(654),c=r(1),o=r(832),a=r.n(o),s=r(678),i=r(937),l=r(698),u=r(18),d=function(){var e=Object(c.useState)("rgb(255, 255, 255)"),t=Object(n.a)(e,2),r=t[0],o=t[1],a=Object(c.createRef)();return Object(c.useEffect)((function(){var e=a.current.parentNode.firstChild,t=window.getComputedStyle(e).getPropertyValue("background-color");o(t)}),[a]),Object(u.jsx)("table",{className:"table w-100",ref:a,children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-muted",children:"HEX:"}),Object(u.jsx)("td",{className:"font-weight-bold",children:Object(i.rgbToHex)(r)})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-muted",children:"RGB:"}),Object(u.jsx)("td",{className:"font-weight-bold",children:r})]})]})})},b=function(e){var t=e.className,r=e.children,n=a()(t,"theme-color w-75 rounded mb-3");return Object(u.jsxs)(s.u,{xl:"2",md:"4",sm:"6",xs:"12",className:"mb-4",children:[Object(u.jsx)("div",{className:n,style:{paddingTop:"75%"}}),r,Object(u.jsx)(d,{})]})};t.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(s.j,{children:[Object(u.jsxs)(s.n,{children:["Theme colors",Object(u.jsx)(l.a,{href:"https://coreui.io/docs/utilities/colors/"})]}),Object(u.jsx)(s.k,{children:Object(u.jsxs)(s.ub,{children:[Object(u.jsx)(b,{className:"bg-primary",children:Object(u.jsx)("h6",{children:"Brand Primary Color"})}),Object(u.jsx)(b,{className:"bg-secondary",children:Object(u.jsx)("h6",{children:"Brand Secondary Color"})}),Object(u.jsx)(b,{className:"bg-success",children:Object(u.jsx)("h6",{children:"Brand Success Color"})}),Object(u.jsx)(b,{className:"bg-danger",children:Object(u.jsx)("h6",{children:"Brand Danger Color"})}),Object(u.jsx)(b,{className:"bg-warning",children:Object(u.jsx)("h6",{children:"Brand Warning Color"})}),Object(u.jsx)(b,{className:"bg-info",children:Object(u.jsx)("h6",{children:"Brand Info Color"})}),Object(u.jsx)(b,{className:"bg-light",children:Object(u.jsx)("h6",{children:"Brand Light Color"})}),Object(u.jsx)(b,{className:"bg-dark",children:Object(u.jsx)("h6",{children:"Brand Dark Color"})})]})})]}),Object(u.jsxs)(s.j,{children:[Object(u.jsx)(s.n,{children:"Grays"}),Object(u.jsx)(s.k,{children:Object(u.jsxs)(s.ub,{className:"mb-3",children:[Object(u.jsx)(b,{className:"bg-gray-100",children:Object(u.jsx)("h6",{children:"Gray 100 Color"})}),Object(u.jsx)(b,{className:"bg-gray-200",children:Object(u.jsx)("h6",{children:"Gray 200 Color"})}),Object(u.jsx)(b,{className:"bg-gray-300",children:Object(u.jsx)("h6",{children:"Gray 300 Color"})}),Object(u.jsx)(b,{className:"bg-gray-400",children:Object(u.jsx)("h6",{children:"Gray 400 Color"})}),Object(u.jsx)(b,{className:"bg-gray-500",children:Object(u.jsx)("h6",{children:"Gray 500 Color"})}),Object(u.jsx)(b,{className:"bg-gray-600",children:Object(u.jsx)("h6",{children:"Gray 600 Color"})}),Object(u.jsx)(b,{className:"bg-gray-700",children:Object(u.jsx)("h6",{children:"Gray 700 Color"})}),Object(u.jsx)(b,{className:"bg-gray-800",children:Object(u.jsx)("h6",{children:"Gray 800 Color"})}),Object(u.jsx)(b,{className:"bg-gray-900",children:Object(u.jsx)("h6",{children:"Gray 900 Color"})})]})})]})]})}},654:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(723);var c=r(715),o=r(724);function a(e,t){return Object(n.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(i){c=!0,o=i}finally{try{n||null==s.return||s.return()}finally{if(c)throw o}}return r}}(e,t)||Object(c.a)(e,t)||Object(o.a)()}},698:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(43),c=r(169),o=r(1),a=r.n(o),s=r(678),i=r(18),l=["name","text"],u=function(e){var t=e.name,r=e.text,o=Object(c.a)(e,l),a=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(i.jsx)("div",{className:"card-header-actions",children:Object(i.jsx)(s.bb,Object(n.a)(Object(n.a)({},o),{},{href:a,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(i.jsx)("small",{className:"text-muted",children:r||"docs"})}))})},d=a.a.memo(u)},715:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(720);function c(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},720:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},723:function(e,t,r){"use strict";function n(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return n}))},724:function(e,t,r){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,"a",(function(){return n}))},937:function(e,t){!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,r),c.l=!0,c.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"deepObjectsMerge",(function(){return n})),r.d(t,"getColor",(function(){return i})),r.d(t,"getStyle",(function(){return s})),r.d(t,"hexToRgb",(function(){return l})),r.d(t,"hexToRgba",(function(){return u})),r.d(t,"makeUid",(function(){return d})),r.d(t,"omitByKeys",(function(){return b})),r.d(t,"pickByKeys",(function(){return j})),r.d(t,"rgbToHex",(function(){return f}));var n=function e(t,r){for(var n=0,c=Object.keys(r);n<c.length;n++){var o=c[n];r[o]instanceof Object&&Object.assign(r[o],e(t[o],r[o]))}return Object.assign(t||{},r),t},c=function(){for(var e={},t=document.styleSheets,r="",n=t.length-1;n>-1;n--){for(var c=t[n].cssRules,o=c.length-1;o>-1;o--)if(".ie-custom-properties"===c[o].selectorText){r=c[o].cssText;break}if(r)break}return(r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var r=t.split(": ")[0],n=t.split(": ")[1];r&&n&&(e["--".concat(r.trim())]=n.trim())}})),e},o=function(){return Boolean(document.documentMode)&&document.documentMode>=10},a=function(e){return e.match(/^--.*/i)},s=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(a(e)&&o()){var n=c();t=n[e]}else t=window.getComputedStyle(r,null).getPropertyValue(e).replace(/^\s/,"");return t},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r="--".concat(e),n=s(r,t);return n||e},l=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,r,n;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(r,", ").concat(n,")")},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var r,n,c,o=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!o)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),c=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),c=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(n,", ").concat(c,", ").concat(t/100,")")},d=function(){return"uid-"+Math.random().toString(36).substr(2)},b=function(e,t){for(var r={},n=Object.keys(e),c=0;c<n.length;c++)!t.includes(n[c])&&(r[n[c]]=e[n[c]]);return r},j=function(e,t){for(var r={},n=0;n<t.length;n++)r[t[n]]=e[t[n]];return r},f=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var r="0".concat(parseInt(t[1],10).toString(16)),n="0".concat(parseInt(t[2],10).toString(16)),c="0".concat(parseInt(t[3],10).toString(16));return"#".concat(r.slice(-2)).concat(n.slice(-2)).concat(c.slice(-2))},h={deepObjectsMerge:n,getColor:i,getStyle:s,hexToRgb:l,hexToRgba:u,makeUid:d,omitByKeys:b,pickByKeys:j,rgbToHex:f};t.default=h}]))}}]);
//# sourceMappingURL=67.876315cb.chunk.js.map