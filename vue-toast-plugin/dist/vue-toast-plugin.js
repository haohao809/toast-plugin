!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VueToastPlugin",[],e):"object"==typeof exports?exports.VueToastPlugin=e():t.VueToastPlugin=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";e.a={data:function(){return{visible:!0,toastType:!1,alertType:!1,confirmType:!1}},props:{message:{type:String,default:""},alertBtnMsg:{type:String,default:"确定"},confirmBtnMsgOK:{type:String,default:"确定"},confirmBtnMsgCancel:{type:String,default:"取消"},toast:{type:Boolean,default:!1},alert:{type:Boolean,default:!1},alertFunc:{type:Function,default:function(){return{}}},confirm:{type:Boolean,default:!1},confirmOkFunc:{type:Function,default:function(){return{}}},confirmCancelFunc:{type:Function,default:function(){return{}}}},methods:{trigger:function(){var t=this;this.toast?(this.toastType=!0,setTimeout(function(){t.visible=!1,setTimeout(function(){t.toastType=!1,t.visible=!0},1e3)},800)):this.alert?this.alertType=!0:this.confirm&&(this.confirmType=!0)},alertBtn:function(){this.visible=!1;var t=this;this.alertFunc(),setTimeout(function(){t.alertType=!1,t.visible=!0},1e3)},confirmOk:function(){this.visible=!1;var t=this;this.confirmOkFunc(),setTimeout(function(){t.confirmType=!1,t.visible=!0},1e3)},confirmCancel:function(){this.visible=!1,this.confirmCancelFunc();var t=this;setTimeout(function(){t.confirmType=!1,t.visible=!0},1e3)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o={install:function(t){t.component("VueToastPlugin",i.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,n){"use strict";function i(t){n(3)}var o=n(0),r=n(9),s=n(8),a=i,c=s(o.a,r.a,!1,a,null,null);e.a=c.exports},function(t,e,n){var i=n(4);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(6)("463dfbb0",i,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,'@keyframes fade-in{0%{opacity:0;transform:scale(.7)}to{opacity:1;transform:scale(1)}}@keyframes fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.7)}}.toast-container{position:absolute;left:0;top:0;bottom:0;right:0;z-index:2000;display:flex;justify-content:center;align-items:center}.toast-container .fade-in{animation-name:fade-in;animation-duration:.5s;animation-fill-mode:both}.toast-container .fade-out{animation-name:fade-out;animation-duration:.5s;animation-fill-mode:both}.toast-container .toast{min-width:180px;min-height:60px;text-align:center;background-color:#000;color:#fff;border-radius:13px}.toast-container .btn{display:flex;justify-content:space-evenly;margin:0}.toast-container .btn:hover{cursor:pointer}.toast-container .btn:before{content:"";position:absolute;z-index:1;background-color:#e5e5e5;height:1px;left:0;right:0}.toast-container i{border-right:1px solid #e5e5e5}.toast-container .btnMsg{display:inline-block;margin:15px 0}',""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=i(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=f[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(r(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(r(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function r(t){var e,n,i=document.querySelector("style["+g+'~="'+t.id+'"]');if(i){if(v)return m;i.parentNode.removeChild(i)}if(y){var r=p++;i=d||(d=o()),e=s.bind(null,i,r,!1),n=s.bind(null,i,r,!0)}else i=o(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function s(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function a(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),h.ssrId&&t.setAttribute(g,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(7),f={},l=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,m=function(){},h=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){v=n,h=o||{};var r=u(t,e);return i(r),function(e){for(var n=[],o=0;o<r.length;o++){var s=r[o],a=f[s.id];a.refs--,n.push(a)}e?(r=u(t,e),i(r)):r=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete f[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=r[0],a=r[1],c=r[2],u=r[3],f={id:t+":"+o,css:a,media:c,sourceMap:u};i[s]?i[s].parts.push(f):n.push(i[s]={id:s,parts:[f]})}return n}},function(t,e){t.exports=function(t,e,n,i,o,r){var s,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o);var f;if(r?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=f):i&&(f=i),f){var l=u.functional,d=l?u.render:u.beforeCreate;l?(u._injectStyles=f,u.render=function(t,e){return f.call(e),d(t,e)}):u.beforeCreate=d?[].concat(d,f):[f]}return{esModule:s,exports:a,options:u}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"toast-simple",on:{click:t.trigger}},[t._t("default")],2),t._v(" "),t.toastType?n("section",{staticClass:"toast-container"},[n("div",{staticClass:"toast",class:[t.visible?"fade-in":"fade-out"]},[n("p",[t._v(t._s(t.message))])])]):t._e(),t._v(" "),t.alertType?n("section",{staticClass:"toast-container"},[n("div",{staticClass:"toast",class:[t.visible?"fade-in":"fade-out"]},[n("p",[t._v(t._s(t.message))]),t._v(" "),n("p",{staticClass:"btn",on:{click:t.alertBtn}},[n("span",{staticClass:"btnMsg"},[t._v(t._s(t.alertBtnMsg))])])])]):t._e(),t._v(" "),t.confirmType?n("section",{staticClass:"toast-container"},[n("div",{staticClass:"toast",class:[t.visible?"fade-in":"fade-out"]},[n("p",[t._v(t._s(t.message))]),t._v(" "),n("p",{staticClass:"btn"},[n("span",{staticClass:"btnMsg",on:{click:t.confirmOk}},[t._v(t._s(t.confirmBtnMsgOK))]),t._v(" "),n("i"),t._v(" "),n("span",{staticClass:"btnMsg",on:{click:t.confirmCancel}},[t._v(t._s(t.confirmBtnMsgCancel))])])])]):t._e()])},o=[],r={render:i,staticRenderFns:o};e.a=r}])});
//# sourceMappingURL=vue-toast-plugin.js.map