"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[557],{13495:function(e,t,n){n.d(t,{u:function(){return r}});var r,o=n(4637),i=(n(59496),n(73687)),a=n(49037),u=n(34249),s=n(49729),l=n(51957);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(s){u=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(e){e.ORIGINAL="Original",e.RESIZE="Resize",e.CROP="Crop"}(r||(r={})),t.Z=function(){var e=p((0,i.useRecoilState)(a.pg),2),t=e[0],n=e[1],c=function(e){n((function(t){return d({},t,{hdStrategy:e})}))},f=function(e){var t=0===e.length?0:parseInt(e,10);n((function(e){return d({},e,{hdStrategyResizeLimit:t})}))},h=function(e){var t=0===e.length?0:parseInt(e,10);n((function(e){return d({},e,{hdStrategyCropTrigerSize:t})}))},g=function(e){var t=0===e.length?0:parseInt(e,10);n((function(e){return d({},e,{hdStrategyCropMargin:t})}))},m=function(){return(0,o.jsxs)("div",{children:["Use the original resolution of the picture, suitable for picture size below 2K. Try"," ",(0,o.jsx)("div",{tabIndex:0,role:"button",className:"inline-tip",onClick:function(){return c(r.RESIZE)},children:"Resize Strategy"})," ","if you do not get good results on high resolution images."]})};return(0,o.jsx)(l.Z,{className:"hd-setting-block",title:"High Resolution Strategy",input:(0,o.jsx)(u.Z,{width:80,value:t.hdStrategy,options:Object.values(r),onChange:function(e){return c(e)}}),optionDesc:function(){switch(t.hdStrategy){case r.ORIGINAL:return m();case r.CROP:return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:"Crop masking area from the original image to do inpainting, and paste the result back. Mainly for performance and memory reasons on high resolution image."}),(0,o.jsx)(s.Z,{title:"Trigger size",value:"".concat(t.hdStrategyCropTrigerSize),suffix:"pixel",onValue:h}),(0,o.jsx)(s.Z,{title:"Crop margin",value:"".concat(t.hdStrategyCropMargin),suffix:"pixel",onValue:g})]});case r.RESIZE:return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:"Resize the longer side of the image to a specific size(keep ratio), then do inpainting on the resized image."}),(0,o.jsx)(s.Z,{title:"Size limit",value:"".concat(t.hdStrategyResizeLimit),suffix:"pixel",onValue:f})]});default:return m()}}()})}},81430:function(e,t,n){n.d(t,{x:function(){return r}});var r,o=n(4637),i=(n(59496),n(73687)),a=n(49037),u=n(34249),s=n(49729),l=n(51957);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(s){u=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(e){e.LAMA="lama",e.LDM="ldm"}(r||(r={})),t.Z=function(){var e=p((0,i.useRecoilState)(a.pg),2),t=e[0],n=e[1],c=function(e,t,n){return(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[(0,o.jsx)("a",{className:"model-desc-link",href:t,target:"_blank",rel:"noreferrer noopener",children:e}),(0,o.jsx)("a",{className:"model-desc-link",href:n,target:"_blank",rel:"noreferrer noopener",children:n})]})};return(0,o.jsx)(l.Z,{className:"model-setting-block",title:"Inpainting Model",input:(0,o.jsx)(u.Z,{width:80,value:t.model,options:Object.values(r),onChange:function(e){return t=e,void n((function(e){return d({},e,{model:t})}));var t}}),optionDesc:function(){switch(t.model){case r.LAMA:return c("Resolution-robust Large Mask Inpainting with Fourier Convolutions","https://arxiv.org/abs/2109.07161","https://github.com/saic-mdal/lama");case r.LDM:return(0,o.jsxs)("div",{children:[c("High-Resolution Image Synthesis with Latent Diffusion Models","https://arxiv.org/abs/2112.10752","https://github.com/CompVis/latent-diffusion"),(0,o.jsx)(s.Z,{title:"Steps",value:"".concat(t.ldmSteps),onValue:function(e){var t=0===e.length?0:parseInt(e,10);n((function(e){return d({},e,{ldmSteps:t})}))}})]});default:return(0,o.jsx)(o.Fragment,{})}}()})}},49729:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(4637);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=n(59496).forwardRef((function(e,t){var n=e.value,a=e.onValue,u=i(e,["value","onValue"]);return(0,r.jsx)("input",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({value:n,onInput:function(e){var t=e.target.value.replace(/\D/g,"");null===a||void 0===a||a(t)},className:"number-input"},u,{ref:t,type:"text"}))})),u=a,s=n(51957);var l=function(e){var t=e.title,n=e.value,o=e.suffix,i=e.onValue;return(0,r.jsx)(s.Z,{className:"sub-setting-block",title:t,input:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"8px"},children:[(0,r.jsx)(u,{style:{width:"80px"},value:"".concat(n),onValue:i}),o&&(0,r.jsx)("span",{children:o})]})})}},51957:function(e,t,n){var r=n(4637);n(59496);t.Z=function(e){var t=e.title,n=e.desc,o=e.input,i=e.optionDesc,a=e.className;return(0,r.jsxs)("div",{className:"setting-block ".concat(a),children:[(0,r.jsxs)("div",{className:"setting-block-content",children:[(0,r.jsxs)("div",{className:"setting-block-content-title",children:[(0,r.jsx)("span",{children:t}),n&&(0,r.jsx)("span",{className:"setting-block-desc",children:n})]}),o]}),i&&(0,r.jsx)("div",{className:"option-desc",children:i})]})}},34249:function(e,t,n){var r=n(4637),o=n(59496),i=n(81996),a=n(4339),u=n(82790),s=n(77296),l=function(e){var t=e.width,n=e.value,l=e.chevronDirection,c=e.options,f=e.autoFocusAfterClose,d=e.onChange,p=(0,o.useRef)(null);return(0,r.jsxs)(s.fC,{value:n,onValueChange:d,onOpenChange:function(e){e||f||window.setTimeout((function(){var e;null===p||void 0===p||null===(e=p.current)||void 0===e||e.blur()}),100)},children:[(0,r.jsxs)(s.xz,{className:"select-trigger",style:{width:t},ref:p,children:[(0,r.jsx)(s.B4,{}),(0,r.jsx)(s.JO,{children:"up"===l?(0,r.jsx)(i.Z,{}):(0,r.jsx)(a.Z,{})})]}),(0,r.jsx)(s.VY,{className:"select-content",children:(0,r.jsx)(s.l_,{className:"select-viewport",children:c.map((function(e){return(0,r.jsxs)(s.ck,{value:e,className:"select-item",children:[(0,r.jsx)(s.eT,{children:e}),(0,r.jsx)(s.wU,{className:"select-item-indicator",children:(0,r.jsx)(u.Z,{})})]},e)}))})})]})};l.defaultProps={chevronDirection:"down",autoFocusAfterClose:!0},t.Z=l},61150:function(e,t,n){n.d(t,{Wr:function(){return o},jq:function(){return a},kc:function(){return i},m7:function(){return r}});var r=200,o=204,i=401,a=403},49037:function(e,t,n){n.d(t,{Jk:function(){return u},K8:function(){return s},KL:function(){return p},fD:function(){return d},pg:function(){return f},xu:function(){return a}});var r=n(73687),o=n(13495),i=n(81430),a=(0,r.atom)({key:"fileState",default:void 0}),u=(0,r.atom)({key:"toastState",default:{open:!1,desc:"",state:"default",duration:3e3}}),s=(0,r.atom)({key:"shortcutsState",default:!1}),l={show:!1,runInpaintingManually:!1,model:i.x.LAMA,ldmSteps:50,hdStrategy:o.u.RESIZE,hdStrategyResizeLimit:2048,hdStrategyCropTrigerSize:2048,hdStrategyCropMargin:128},c=function(e){return function(t){var n=t.setSelf,r=t.onSet,o=localStorage.getItem(e);if(null!=o){var i=JSON.parse(o);i.show=!1,n(i)}r((function(t,n,r){return r?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))}))}},f=(0,r.atom)({key:"settingsState",default:l,effects:[c("settingsState")]}),d=(0,r.atom)({key:"authState",default:{userUid:"",token:"",userLevel:0,expiration:0,createTime:0},effects:[c("authState")]}),p=(0,r.atom)({key:"userState",default:{userEmail:"",userName:"",userPhone:"",userUid:"",isShowApiMenu:0,accountType:"",groupName:"",isNeed2Confirm:0,groupUid:"",inTrial:!1,onBoarding:!1,needPopup:!1,level:0},effects:[c("userState")]})},48557:function(e,t,n){var r=n(88814),o=n.n(r),i=n(61150),a=n(30365),u=n.n(a),s=n(49037),l=n(91321);function c(e,t,n,r,o,i,a){try{var u=e[i](a),s=u.value}catch(l){return void n(l)}u.done?t(s):Promise.resolve(s).then(r,o)}console.log("process.env.NEXT_PUBLIC_BASE_API ===> ","https://web-backend-prod.zmo.ai/api/v1.0");var f=u().create({baseURL:"https://web-backend-prod.zmo.ai/api/v1.0",timeout:6e4});f.interceptors.request.use(function(){var e,t=(e=o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,l.$l)(s.fD).token,t.headers||(t.headers={}),n&&(t.headers.Authorization="Bearer ".concat(n)),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){c(i,r,o,a,u,"next",e)}function u(e){c(i,r,o,a,u,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}()),f.interceptors.response.use((function(e){var t=[i.Wr];return e.status&&t.includes(e.status)?Promise.reject({status:e.status,data:e.data}):e}),(function(e){var t;return e.response?(null===(t=e.response)||void 0===t||t.status,i.kc,Promise.reject({status:e.response.status,data:e.response.data,err:e})):Promise.reject(e)})),t.Z=f}}]);