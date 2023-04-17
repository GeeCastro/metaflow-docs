"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},i="Scheduling Metaflow Flows",l={unversionedId:"production/scheduling-metaflow-flows/introduction",id:"production/scheduling-metaflow-flows/introduction",title:"Scheduling Metaflow Flows",description:"While the run command is convenient during development, you can't keep executing it",source:"@site/docs/production/scheduling-metaflow-flows/introduction.md",sourceDirName:"production/scheduling-metaflow-flows",slug:"/production/scheduling-metaflow-flows/introduction",permalink:"/production/scheduling-metaflow-flows/introduction",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/production/scheduling-metaflow-flows/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Production Deployments",permalink:"/production/introduction"},next:{title:"Scheduling Metaflow Flows with Argo Workflows",permalink:"/production/scheduling-metaflow-flows/scheduling-with-argo-workflows"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scheduling-metaflow-flows"},"Scheduling Metaflow Flows"),(0,r.kt)("p",null,"While the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command is convenient during development, you can't keep executing it\nmanually in production. An old-school solution would be to use a time-based scheduler\nlike ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cron"},"Cron")," to execute the command automatically at\na set schedule, but this approach has a number of serious downsides:"),(0,r.kt)("p",null,"What if the server running cron fails? If the scheduled command fails, how do you know\nit has failed? How do you see its error logs? Does the Cron server have enough capacity\nto handle another command? And most importantly, how should you orchestrate schedules of\nmultiple commands so that their mutual dependencies are handled correctly?"),(0,r.kt)("p",null,"Metaflow currently integrates with ",(0,r.kt)("a",{parentName:"p",href:"/production/scheduling-metaflow-flows/scheduling-with-argo-workflows"},"Argo\nWorkflows")," (",(0,r.kt)("a",{parentName:"p",href:"https://argoproj.github.io/workflows"},"a modern,\nKubernetes-native workflow orchestrator"),"), ",(0,r.kt)("a",{parentName:"p",href:"/production/scheduling-metaflow-flows/scheduling-with-aws-step-functions"},"AWS\nStep Functions")," (",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/step-functions/"},"a\nmanaged general-purpose orchestrator"),"), and\n",(0,r.kt)("a",{parentName:"p",href:"/production/scheduling-metaflow-flows/scheduling-with-airflow"},"Apache Airflow")," (",(0,r.kt)("a",{parentName:"p",href:"https://airflow.apache.org/"},"a\nwidely-known open-source orchestrator"),") which can answer\nthese questions."),(0,r.kt)("p",null,"Learn more about how to deploy your Metaflow flows to these orchestrators in the\nfollowing subsections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../scheduling-metaflow-flows/scheduling-with-argo-workflows"},"Scheduling with Argo\nWorkflows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../scheduling-metaflow-flows/scheduling-with-aws-step-functions"},"Scheduling with AWS Step\nFunctions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../scheduling-metaflow-flows/scheduling-with-airflow"},"Scheduling with Airflow"))))}p.isMDXComponent=!0}}]);