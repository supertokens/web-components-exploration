const e={context:void 0,registry:void 0};function t(t){e.context=t}const n={equals:(e,t)=>e===t};let r=$;const o=1,s=2,i={owned:null,cleanups:null,context:null,owner:null},l={};var a=null;let u,c=null,f=null,d=null,h=null,p=0;function g(e,t){const r={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},n,t):n).equals||void 0};return[C.bind(r),e=>("function"==typeof e&&(e=e(r.value)),k(r,e))]}function v(e,t,n){A(S(e,t,!0,o))}function b(e,t,n){A(S(e,t,!1,o))}function y(e,t,n){r=E;const s=S(e,t,!1,o);s.user=!0,h?h.push(s):A(s)}function m(e,t,r){r=r?Object.assign({},n,r):n;const o=S(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=r.equals||void 0,A(o),C.bind(o)}function w(t,n,r){let o,s,i;2===arguments.length&&"object"==typeof n||1===arguments.length?(o=!0,s=t,i={}):(o=t,s=n,i={});let a=null,c=l,d=null,h=!1,p="initialValue"in i,b="function"==typeof o&&m(o);const y=new Set,[w,x]=(i.storage||g)(i.initialValue),[C,k]=g(void 0),[A,S]=g(void 0,{equals:!1}),[j,$]=g(p?"ready":"unresolved");if(e.context){let t;d=`${e.context.id}${e.context.count++}`,"initial"===i.ssrLoadFrom?c=i.initialValue:e.load&&(t=e.load(d))&&(c=t)}function E(e,t,n,r){return a===e&&(a=null,void 0!==r&&(p=!0),e!==c&&t!==c||!i.onHydrated||queueMicrotask((()=>i.onHydrated(r,{value:t}))),c=l,function(e,t){O((()=>{void 0===t&&x((()=>e)),$(void 0!==t?"errored":p?"ready":"unresolved"),k(t);for(const e of y.keys())e.decrement();y.clear()}),!1)}(t,n)),t}function N(){const e=u,t=w(),n=C();if(void 0!==n&&!a)throw n;return f&&!f.user&&e&&v((()=>{A(),a&&(e.resolved||y.has(e)||(e.increment(),y.add(e)))})),t}function P(e=!0){if(!1!==e&&h)return;h=!1;const t=b?b():o;if(null==t||!1===t)return void E(a,_(w));const n=c!==l?c:_((()=>s(t,{value:w(),refetching:e})));return(r=n)&&"object"==typeof r&&"then"in r?(a=n,"value"in n?("success"===n.status?E(a,n.value,void 0,t):E(a,void 0,void 0,t),n):(h=!0,queueMicrotask((()=>h=!1)),O((()=>{$(p?"refreshing":"pending"),S()}),!1),n.then((e=>E(n,e,void 0,t)),(e=>E(n,void 0,z(e),t))))):(E(a,n,void 0,t),n);var r}return Object.defineProperties(N,{state:{get:()=>j()},error:{get:()=>C()},loading:{get(){const e=j();return"pending"===e||"refreshing"===e}},latest:{get(){if(!p)return N();const e=C();if(e&&!a)throw e;return w()}}}),b?v((()=>P(!1))):P(!1),[N,{refetch:P,mutate:x}]}function _(e){if(null===f)return e();const t=f;f=null;try{return e()}finally{f=t}}function x(){return a}function C(){if(this.sources&&this.state)if(this.state===o)A(this);else{const e=d;d=null,O((()=>N(this)),!1),d=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function k(e,t,n){let r=e.value;return e.comparator&&e.comparator(r,t)||(e.value=t,e.observers&&e.observers.length&&O((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t],r=c&&c.running;r&&c.disposed.has(n),(r?n.tState:n.state)||(n.pure?d.push(n):h.push(n),n.observers&&P(n)),r||(n.state=o)}if(d.length>1e6)throw d=[],new Error}),!1)),t}function A(e){if(!e.fn)return;T(e);const t=p;!function(e,t,n){let r;const s=a,i=f;f=a=e;try{r=e.fn(t)}catch(t){return e.pure&&(e.state=o,e.owned&&e.owned.forEach(T),e.owned=null),e.updatedAt=n+1,B(t)}finally{f=i,a=s}(!e.updatedAt||e.updatedAt<=n)&&(null!=e.updatedAt&&"observers"in e?k(e,r):e.value=r,e.updatedAt=n)}(e,e.value,t)}function S(e,t,n,r=o,s){const l={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:a?a.context:null,pure:n};return null===a||a!==i&&(a.owned?a.owned.push(l):a.owned=[l]),l}function j(e){if(0===e.state)return;if(e.state===s)return N(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<p);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if((e=t[n]).state===o)A(e);else if(e.state===s){const n=d;d=null,O((()=>N(e,t[0])),!1),d=n}}function O(e,t){if(d)return e();let n=!1;t||(d=[]),h?n=!0:h=[],p++;try{const t=e();return function(e){d&&($(d),d=null);if(e)return;const t=h;h=null,t.length&&O((()=>r(t)),!1)}(n),t}catch(e){n||(h=null),d=null,B(e)}}function $(e){for(let t=0;t<e.length;t++)j(e[t])}function E(n){let r,o=0;for(r=0;r<n.length;r++){const e=n[r];e.user?n[o++]=e:j(e)}if(e.context){if(e.count)return e.effects||(e.effects=[]),void e.effects.push(...n.slice(0,o));e.effects&&(n=[...e.effects,...n],o+=e.effects.length,delete e.effects),t()}for(r=0;r<o;r++)j(n[r])}function N(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const e=r.state;e===o?r!==t&&(!r.updatedAt||r.updatedAt<p)&&j(r):e===s&&N(r,t)}}}function P(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=s,n.pure?d.push(n):h.push(n),n.observers&&P(n))}}function T(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)T(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function z(e){return e instanceof Error?e:new Error("string"==typeof e?e:"Unknown error",{cause:e})}function B(e,t=a){throw z(e)}function H(e,t){return _((()=>e(t||{})))}function q(n){let r,o;const s=s=>{const i=e.context;if(i){const[s,l]=g();e.count||(e.count=0),e.count++,(o||(o=n())).then((n=>{t(i),e.count--,l((()=>n.default)),t()})),r=s}else if(!r){const[e]=w((()=>(o||(o=n())).then((e=>e.default))));r=e}let l;return m((()=>(l=r())&&_((()=>{if(!i)return l(s);const n=e.context;t(i);const r=l(s);return t(n),r}))))};return s.preload=()=>o||((o=n()).then((e=>r=()=>e.default)),o),s}function L(e){const t=e.keyed,n=m((()=>e.when),void 0,{equals:(e,n)=>t?e===n:!e==!n});return m((()=>{const r=n();if(r){const o=e.children;return"function"==typeof o&&o.length>0?_((()=>o(t?r:()=>{if(!_(n))throw`Stale read from <${"Show"}>.`;return e.when}))):o}return e.fallback}),void 0,void 0)}const R="_$DX_DELEGATE";function M(e,t,n){let r;const o=()=>(r||(r=(()=>{const t=document.createElement("template");return t.innerHTML=e,t.content.firstChild})())).cloneNode(!0);return o.cloneNode=o,o}function I(e,t=window.document){const n=t[R]||(t[R]=new Set);for(let r=0,o=e.length;r<o;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,F))}}function D(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return V(e,t,r,n);b((r=>V(e,t(),r,n)),r)}function F(t){const n=`$$${t.type}`;let r=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==r&&Object.defineProperty(t,"target",{configurable:!0,value:r}),Object.defineProperty(t,"currentTarget",{configurable:!0,get:()=>r||document}),e.registry&&!e.done&&(e.done=_$HY.done=!0);r;){const e=r[n];if(e&&!r.disabled){const o=r[`${n}Data`];if(void 0!==o?e.call(r,o,t):e.call(r,t),t.cancelBubble)return}r=r._$host||r.parentNode||r.host}}function V(t,n,r,o,s){const i=!!e.context&&t.isConnected;if(i){!r&&(r=[...t.childNodes]);let e=[];for(let t=0;t<r.length;t++){const n=r[t];8===n.nodeType&&"!$"===n.data.slice(0,2)?n.remove():e.push(n)}r=e}for(;"function"==typeof r;)r=r();if(n===r)return r;const l=typeof n,a=void 0!==o;if(t=a&&r[0]&&r[0].parentNode||t,"string"===l||"number"===l){if(i)return r;if("number"===l&&(n=n.toString()),a){let e=r[0];e&&3===e.nodeType?e.data!==n&&(e.data=n):e=document.createTextNode(n),r=U(t,r,o,e)}else r=""!==r&&"string"==typeof r?t.firstChild.data=n:t.textContent=n}else if(null==n||"boolean"===l){if(i)return r;r=U(t,r,o)}else{if("function"===l)return b((()=>{let e=n();for(;"function"==typeof e;)e=e();r=V(t,e,r,o)})),()=>r;if(Array.isArray(n)){const e=[],l=r&&Array.isArray(r);if(J(e,n,r,s))return b((()=>r=V(t,e,r,o,!0))),()=>r;if(i){if(!e.length)return r;if(void 0===o)return[...t.childNodes];let n=e[0],s=[n];for(;(n=n.nextSibling)!==o;)s.push(n);return r=s}if(0===e.length){if(r=U(t,r,o),a)return r}else l?0===r.length?G(t,e,o):function(e,t,n){let r=n.length,o=t.length,s=r,i=0,l=0,a=t[o-1].nextSibling,u=null;for(;i<o||l<s;)if(t[i]!==n[l]){for(;t[o-1]===n[s-1];)o--,s--;if(o===i){const t=s<r?l?n[l-1].nextSibling:n[s-l]:a;for(;l<s;)e.insertBefore(n[l++],t)}else if(s===l)for(;i<o;)u&&u.has(t[i])||t[i].remove(),i++;else if(t[i]===n[s-1]&&n[l]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--s],r),t[o]=n[s]}else{if(!u){u=new Map;let e=l;for(;e<s;)u.set(n[e],e++)}const r=u.get(t[i]);if(null!=r)if(l<r&&r<s){let a,c=i,f=1;for(;++c<o&&c<s&&null!=(a=u.get(t[c]))&&a===r+f;)f++;if(f>r-l){const o=t[i];for(;l<r;)e.insertBefore(n[l++],o)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}else i++,l++}(t,r,e):(r&&U(t),G(t,e));r=e}else if(n.nodeType){if(i&&n.parentNode)return r=a?[n]:n;if(Array.isArray(r)){if(a)return r=U(t,r,o,n);U(t,r,null,n)}else null!=r&&""!==r&&t.firstChild?t.replaceChild(n,t.firstChild):t.appendChild(n);r=n}}return r}function J(e,t,n,r){let o=!1;for(let s=0,i=t.length;s<i;s++){let i,l=t[s],a=n&&n[e.length];if(null==l||!0===l||!1===l);else if("object"==(i=typeof l)&&l.nodeType)e.push(l);else if(Array.isArray(l))o=J(e,l,a)||o;else if("function"===i)if(r){for(;"function"==typeof l;)l=l();o=J(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||o}else e.push(l),o=!0;else{const t=String(l);a&&3===a.nodeType&&a.data===t?e.push(a):e.push(document.createTextNode(t))}}return o}function G(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function U(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let s=t.length-1;s>=0;s--){const i=t[s];if(o!==i){const t=i.parentNode===e;r||s?t&&i.remove():t?e.replaceChild(o,i):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function X(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];var o;return t[n]=Object.assign({},r),K(r.value)&&(o=r.value,"[object Function]"!==Object.prototype.toString.call(o))&&!Array.isArray(r.value)&&(t[n].value=Object.assign({},r.value)),Array.isArray(r.value)&&(t[n].value=r.value.slice(0)),t}),{})}function Y(e){if(e)try{return JSON.parse(e)}catch(t){return e}}function Z(e,t,n){if(null==n||!1===n)return e.removeAttribute(t);let r=JSON.stringify(n);e.__updating[t]=!0,"true"===r&&(r=""),e.setAttribute(t,r),Promise.resolve().then((()=>delete e.__updating[t]))}function K(e){return null!=e&&("object"==typeof e||"function"==typeof e)}let Q;function W(){Object.defineProperty(Q,"renderRoot",{value:Q})}function ee(e,t){const n=Object.keys(t);return class extends e{static get observedAttributes(){return n.map((e=>t[e].attribute))}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={}}connectedCallback(){if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=function(e,t){const n=X(t);return Object.keys(t).forEach((t=>{const r=n[t],o=e.getAttribute(r.attribute),s=e[t];o&&(r.value=r.parse?Y(o):o),null!=s&&(r.value=Array.isArray(s)?s.slice(0):s),r.reflect&&Z(e,r.attribute,r.value),Object.defineProperty(e,t,{get:()=>r.value,set(e){const n=r.value;r.value=e,r.reflect&&Z(this,r.attribute,r.value);for(let r=0,o=this.__propertyChangedCallbacks.length;r<o;r++)this.__propertyChangedCallbacks[r](t,e,n)},enumerable:!0,configurable:!0})})),n}(this,t);const e=function(e){return Object.keys(e).reduce(((t,n)=>(t[n]=e[n].value,t)),{})}(this.props),n=this.Component,r=Q;try{Q=this,this.__initialized=!0,"function"==typeof(o=n)&&0===o.toString().indexOf("class")?new n(e,{element:this}):n(e,{element:this})}finally{Q=r}var o}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let e=null;for(;e=this.__releaseCallbacks.pop();)e(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(e,n,r){if(this.__initialized&&!this.__updating[e]&&(e=this.lookupProp(e))in t){if(null==r&&!this[e])return;this[e]=t[e].parse?Y(r):r}}lookupProp(e){if(t)return n.find((n=>e===n||e===t[n].attribute))}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:"open"})}addReleaseCallback(e){this.__releaseCallbacks.push(e)}addPropertyChangedCallback(e){this.__propertyChangedCallbacks.push(e)}}}function te(e,t={},n={}){const{BaseElement:r=HTMLElement,extension:o}=n;return n=>{if(!e)throw new Error("tag is required to register a Component");let s=customElements.get(e);return s?(s.prototype.Component=n,s):(s=ee(r,function(e){return e?Object.keys(e).reduce(((t,n)=>{const r=e[n];return t[n]=K(r)&&"value"in r?r:{value:r},t[n].attribute||(t[n].attribute=n.replace(/\.?([A-Z]+)/g,((e,t)=>"-"+t.toLowerCase())).replace("_","-").replace(/^-/,"")),t[n].parse="parse"in t[n]?t[n].parse:"string"!=typeof t[n].value,t}),{}):{}}(t)),s.prototype.Component=n,s.prototype.registeredTag=e,customElements.define(e,s,o),s)}}function ne(e){return(t,n)=>{const{element:r}=n;return function(e,t){const n=f,r=a,o=0===e.length,s=void 0===t?r:t,l=o?i:{owned:null,cleanups:null,context:s?s.context:null,owner:s},u=o?e:()=>e((()=>_((()=>T(l)))));a=l,f=null;try{return O(u,!0)}finally{f=n,a=r}}((o=>{const s=function(e){const t=Object.keys(e),n={};for(let r=0;r<t.length;r++){const[o,s]=g(e[t[r]]);Object.defineProperty(n,t[r],{get:o,set(e){s((()=>e))}})}return n}(t);r.addPropertyChangedCallback(((e,t)=>s[e]=t)),r.addReleaseCallback((()=>{r.renderRoot.textContent="",o()}));const i=e(s,n);return D(r.renderRoot,i)}),function(e){if(e.assignedSlot&&e.assignedSlot._$owner)return e.assignedSlot._$owner;let t=e.parentNode;for(;t&&!t._$owner&&(!t.assignedSlot||!t.assignedSlot._$owner);)t=t.parentNode;return t&&t.assignedSlot?t.assignedSlot._$owner:e._$owner}(r))}}function re(e,t,n){return 2===arguments.length&&(n=t,t={}),te(e,t)(ne(n))}var oe=":root{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#242424;color:hsla(0,0%,100%,.87);color-scheme:light dark;font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;font-synthesis:none;font-weight:400;line-height:1.5;text-rendering:optimizeLegibility}a{color:#646cff;font-weight:500;text-decoration:inherit}a:hover{color:#535bf2}body{display:flex;margin:0;min-height:100vh;min-width:320px;place-items:center}h1{font-size:3.2em;line-height:1.1}button{background-color:#1a1a1a;border:1px solid transparent;border-radius:8px;color:hsla(0,0%,100%,.87);cursor:pointer;font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;font-family:inherit;font-size:1em;font-weight:500;padding:.6em 1.2em;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme:light){:root{background-color:#fff;color:#213547}a:hover{color:#747bff}button{background-color:#f9f9f9}}.form-wrap{display:flex;flex-direction:column;gap:1em}.form-wrap input{border:1px solid #646cff;border-radius:8px;font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;font-family:inherit;font-size:1em;padding:.6em 1em}div.wrapper{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#242424;color:hsla(0,0%,100%,.87);color-scheme:light dark;display:flex;flex-direction:column;font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;font-synthesis:none;font-weight:400;gap:1em;height:100vh;line-height:1.5;text-rendering:optimizeLegibility;width:100vw}div.wrapper header{background:#f93;height:80px}div.wrapper header,div.wrapper main{align-items:center;display:flex;justify-content:center}div.wrapper main{flex-grow:1;min-width:60%}div.wrapper footer{align-items:center;background:#1f1f1f;display:flex;height:60px;justify-content:center}",se=M("<div class=wrapper><header></header><main></main><footer>Built by SuperTokens"),ie=M("<slot name=header>"),le=M("<slot>"),ae=M("<slot name=footer>");function ue(e){const t=e.useSlots;return n=se(),r=n.firstChild,o=r.nextSibling,(s=o.nextSibling).firstChild,D(r,(()=>{return t?((n=ie())._$owner=x(),n):e.header;var n})),D(o,(()=>{return t?((n=le())._$owner=x(),n):e.children;var n})),D(s,(()=>{return t?((n=ae())._$owner=x(),n):e.footer;var n}),null),n;var n,r,o,s}export{ue as S,oe as a,H as b,re as c,I as d,g as e,y as f,x as g,L as h,D as i,q as l,W as n,M as t};