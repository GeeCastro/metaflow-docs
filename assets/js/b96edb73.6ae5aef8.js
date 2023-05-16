"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6967],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,g=f["".concat(c,".").concat(m)]||f[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>w,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="@trigger",p={unversionedId:"api/flow-decorators/trigger",id:"api/flow-decorators/trigger",title:"@trigger",description:"Use the @trigger decorator to trigger a flow deployed on Argo Workflows based on an external event.",source:"@site/docs/api/flow-decorators/trigger.md",sourceDirName:"api/flow-decorators",slug:"/api/flow-decorators/trigger",permalink:"/api/flow-decorators/trigger",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/api/flow-decorators/trigger.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"@schedule",permalink:"/api/flow-decorators/schedule"},next:{title:"@trigger_on_finish",permalink:"/api/flow-decorators/trigger_on_finish"}},c={},l=[],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=s("DocSection"),f=s("SigArgSection"),m=s("SigArg"),g=s("Description"),u=s("ParamSection"),y=s("Parameter"),v={toc:l};function w(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"trigger"},"@trigger"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@trigger")," decorator to trigger a flow ",(0,o.kt)("a",{parentName:"p",href:"/production/scheduling-metaflow-flows/scheduling-with-argo-workflows"},"deployed on Argo Workflows")," based on an external event."),(0,o.kt)("p",null,"Read more in ",(0,o.kt)("a",{parentName:"p",href:"/production/event-triggering/external-events"},"Triggering Flows Based on External Events"),"."),(0,o.kt)(d,{type:"decorator",name:"trigger",module:"metaflow",show_import:"True",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/plugins/events_decorator.py#L14",mdxType:"DocSection"},(0,o.kt)(f,{mdxType:"SigArgSection"},(0,o.kt)(m,{name:"...",mdxType:"SigArg"})),(0,o.kt)(g,{summary:"Specifies the event(s) that this flow depends on.",extended_summary:"```\\n@trigger(event='foo')\\n```\\nor\\n```\\n@trigger(events=['foo', 'bar'])\\n```\\n\\nAdditionally, you can specify the parameter mappings\\nto map event payload to Metaflow parameters for the flow.\\n```\\n@trigger(event={'name':'foo', 'parameters':{'my_param': 'event_field'})\\n```\\nor\\n```\\n@trigger(events=[{'name':'foo', 'parameters':{'my_param_1': 'event_field_1'},\\n                 {'name':'bar', 'parameters':{'my_param_2': 'event_field_2'}])\\n```",mdxType:"Description"}),(0,o.kt)(u,{name:"Parameters",mdxType:"ParamSection"},(0,o.kt)(y,{name:"event",type:"Union[str, dict], optional",desc:"Event dependency for this flow.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"events",type:"List[Union[str, dict]], optional",desc:"Events dependency for this flow.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"options",type:"dict, optional",desc:"Backend-specific configuration for tuning eventing behavior.",mdxType:"Parameter"}))))}w.isMDXComponent=!0}}]);