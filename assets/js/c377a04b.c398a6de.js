"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6971],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),f=r,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||l;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={description:"Build and manage real-life data science projects with ease.",displayed_sidebar:"python",pagination_next:"introduction/why-metaflow",pagination_prev:null,slug:"/"},i="Welcome to Metaflow",o={unversionedId:"index",id:"index",title:"Welcome to Metaflow",description:"Build and manage real-life data science projects with ease.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/index.md",tags:[],version:"current",frontMatter:{description:"Build and manage real-life data science projects with ease.",displayed_sidebar:"python",pagination_next:"introduction/why-metaflow",pagination_prev:null,slug:"/"},sidebar:"python",next:{title:"Why Metaflow",permalink:"/introduction/why-metaflow"}},u={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"I. Local Development",id:"i-local-development",level:2},{value:"II. Scalable Flows",id:"ii-scalable-flows",level:2},{value:"III. Production Deployments",id:"iii-production-deployments",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Internals of Metaflow",id:"internals-of-metaflow",level:2}],s={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"welcome-to-metaflow"},"Welcome to Metaflow"),(0,r.kt)("p",null,"Metaflow makes it easy to build and manage real-life data science and machine learning\nprojects."),(0,r.kt)("div",{className:"tocList"},(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"introduction/why-metaflow"},"Why Metaflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"introduction/what-is-metaflow"},"What is Metaflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"introduction/metaflow-resources"},"Metaflow Resources"))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"getting-started/install"},"Installing Metaflow locally")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"getting-started/infrastructure"},"Deploying Infrastructure for Metaflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"getting-started/tutorials/"},"Quickstart Tutorial"))),(0,r.kt)("h2",{id:"i-local-development"},"I. Local Development"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"metaflow/introduction"},"Introduction to Developing with Metaflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"metaflow/basics"},"Creating Flows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"metaflow/client"},"Inspecting Flows and Results")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"metaflow/debugging"},"Debugging Flows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"metaflow/visualizing-results/"},"Visualizing Results"))),(0,r.kt)("h2",{id:"ii-scalable-flows"},"II. Scalable Flows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"scaling/introduction"},"Introduction to Scalable Compute and Data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"scaling/remote-tasks/introduction"},"Executing tasks remotely")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"scaling/failures"},"Dealing with Failures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"scaling/dependencies"},"Managing External Libraries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"scaling/data"},"Loading and Storing Data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"scaling/tagging"},"Organizing Results"))),(0,r.kt)("h2",{id:"iii-production-deployments"},"III. Production Deployments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"production/introduction"},"Introduction to Production Deployments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"production/scheduling-metaflow-flows/introduction"},"Scheduling Metaflow Flows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"production/coordinating-larger-metaflow-projects"},"Coordinating Larger Metaflow\nProjects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"production/event-triggering/"},"Connecting Flows via Events")," \u2728",(0,r.kt)("em",{parentName:"li"},"New"),"\u2728")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"api/"},"Directory of all Metaflow APIs"))),(0,r.kt)("h2",{id:"internals-of-metaflow"},"Internals of Metaflow"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"internals/release-notes"},"Release Notes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"internals/technical-overview"},"Technical Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"internals/testing-philosophy"},"Testing Philosophy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"internals/contributing"},"Contributing to Metaflow")))))}p.isMDXComponent=!0}}]);