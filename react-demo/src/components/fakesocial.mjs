import{c as t,a as e,n as o,b as n,S as i,t as s}from"./Shell-BkFPWQSo.js";var r=s("<div><button>Sign-in with Google</button><button>Sign-in with Facebook</button><button>Sign-in with Twitter</button><button>Sign-in with Github");const l=async()=>{t("st-social",{},((t,{element:s})=>{const l=new CSSStyleSheet;return l.replaceSync(e),()=>(o(),s.shadowRoot.adoptedStyleSheets=[l],n(i,{get children(){var t=r();return t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","column"),t.style.setProperty("align-items","center"),t.style.setProperty("justify-content","center"),t}}))}))},a=t=>{console.log("stub for router"),console.log(t)};window.ST=window.ST||{},window.ST={...window.ST,Social:{load:l,generateRoutes:a}};export{a as generateRoutes,l as load};