import{c as e,a as t,n as o,b as n,S as s,l as r,t as a}from"./Shell-BkFPWQSo.js";var i=a("<div><button>Sign-in with Google</button><button>Sign-in with Facebook</button><button>Sign-in with Twitter</button><button>Sign-in with Github"),l=a("<div>I'm a dummy component");const c={"email-password":"/auth",fakesocial:"/social",dummy:"/dummy",dashboard:"/dashboard"};function d({navigate:a,preBuiltUI:c}){console.log("registering",c),"email-password"===c&&e("st-email-password",{},((e,{element:i})=>{console.log("registering email-password component");const l=r((()=>import("./EmailPassword-BIm8Xm6o.js"))),c=new CSSStyleSheet;return c.replaceSync(t),()=>(o(),i.shadowRoot.adoptedStyleSheets=[c],n(s,{get children(){return n(l,{navigate:a})}}))})),"fakesocial"===c&&e("st-social",{},((e,{element:r})=>{console.log("registering social component");const a=new CSSStyleSheet;return a.replaceSync(t),()=>(o(),r.shadowRoot.adoptedStyleSheets=[a],n(s,{get children(){var e=i();return e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("align-items","center"),e.style.setProperty("justify-content","center"),e}}))})),"dashboard"===c&&e("st-dashboard",{},((e,{element:i})=>{console.log("registering dashboard component");const l=r((()=>import("./Dashboard-CvC9z2j5.js"))),c=new CSSStyleSheet;return c.replaceSync(t),()=>(o(),i.shadowRoot.adoptedStyleSheets=[c],n(s,{get children(){return n(l,{navigate:a})}}))})),"dummy"===c&&e("st-dummy",{},((e,{element:r})=>{console.log("registering dummy component");const a=new CSSStyleSheet;return a.replaceSync(t),()=>(o(),r.shadowRoot.adoptedStyleSheets=[a],n(s,{get children(){return l()}}))}))}const u=({targetElement:e,navigate:t,preBuiltUI:o})=>{console.log("mounting",o,"at",e),console.log("navigate",t),d({navigate:t,preBuiltUI:o}),console.log("registerComponent done");const n=`<st-${o} class="${o}"></st-${o}>`;document.querySelector(e)?.insertAdjacentHTML("beforeend",n)},S=(e,t,o)=>(t.forEach((e=>{d({navigate:o,preBuiltUI:e.preBuiltUI})})),t.map((t=>({element:()=>{const o=`<st-${t.preBuiltUI} class="${t.preBuiltUI}"></st-${t.preBuiltUI}>`;document.querySelector(e)?.insertAdjacentHTML("beforeend",o)},path:t.path||c[t.preBuiltUI]}))));window.ST=window.ST||{},window.ST.registerComponent=d,window.ST.staticMount=u,window.ST.universalClientSideMount=S;export{d as registerComponent,u as staticMount,S as universalClientSideMount};