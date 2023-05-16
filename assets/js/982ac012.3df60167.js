"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},l="Metaflow API reference",i={unversionedId:"api/README",id:"api/README",title:"Metaflow API reference",description:"These pages document the public API of Metaflow.",source:"@site/docs/api/README.md",sourceDirName:"api",slug:"/api/",permalink:"/api/",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/api/README.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Deploying Variants of Event-Triggered Flows",permalink:"/production/event-triggering/project-events"},next:{title:"Client API - Accessing past results",permalink:"/api/client"}},s={},c=[{value:"Decorators",id:"decorators",level:2},{value:"Other APIs",id:"other-apis",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metaflow-api-reference"},"Metaflow API reference"),(0,a.kt)("p",null,"These pages document the public API of Metaflow."),(0,a.kt)("p",null,"Notably, all APIs documented here are subject to Metaflow's ",(0,a.kt)("strong",{parentName:"p"},"backward\ncompatibility promise"),": You may use these APIs knowing that they are\nvery stable and highly unlikely to change across Metaflow versions. Rest\nassured that all APIs featured anywhere in Metaflow docs are covered\nhere."),(0,a.kt)("h2",{id:"decorators"},"Decorators"),(0,a.kt)("p",null,"Use these to construct flows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/flow-decorators"},"Flow decorators")," - define top-level behavior."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/step-decorators"},"Step decorators")," - define step-level behavior.")),(0,a.kt)("h2",{id:"other-apis"},"Other APIs"),(0,a.kt)("p",null,"Use these to construct flows, access data, and manipulate results."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/client"},"Client API")," - accessing past results."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/flowspec"},"FlowSpec")," - constructing flows."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/current"},"Current")," - operating a run."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/s3"},"S3")," - accessing data in S3 quickly."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cards"},"Cards")," - visualizing results.")))}u.isMDXComponent=!0}}]);