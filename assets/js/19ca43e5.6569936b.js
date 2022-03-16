"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7375],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return f}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(o),f=n,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5859:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],l={},s="Roadmap",u={unversionedId:"introduction/roadmap",id:"introduction/roadmap",title:"Roadmap",description:"Metaflow has been used in production at Netflix since early 2018. The core Metaflow was open-sourced in December 2019. Some features of Metaflow are not available in open-source yet but we may open-source them later if there is sufficient external interest. These features are listed below.",source:"@site/docs/introduction/roadmap.md",sourceDirName:"introduction",slug:"/introduction/roadmap",permalink:"/introduction/roadmap",editUrl:"https://github.dev/obgibson/metaflow-docs/blob/master/docs/introduction/roadmap.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Release Notes",permalink:"/introduction/release-notes"},next:{title:"Contributing to Metaflow",permalink:"/introduction/contributing-to-metaflow"}},p=[{value:"Support for Kubernetes",id:"support-for-kubernetes",children:[],level:2},{value:"Metaflow UI(s)",id:"metaflow-uis",children:[],level:2},{value:"Faster and more flexible dependency management solutions",id:"faster-and-more-flexible-dependency-management-solutions",children:[],level:2},{value:"Flow Composition",id:"flow-composition",children:[],level:2},{value:"<del>MetaflowBot</del>",id:"metaflowbot",children:[],level:2},{value:"Metaflow DataFrame",id:"metaflow-dataframe",children:[],level:2},{value:"More tutorials and recipes",id:"more-tutorials-and-recipes",children:[],level:2},{value:"Support for hosting models as a micro-service",id:"support-for-hosting-models-as-a-micro-service",children:[],level:2},{value:"<del>Support for R Lang</del>",id:"support-for-r-lang",children:[],level:2},{value:"<del>Support deployments to a production DAG scheduler</del>",id:"support-deployments-to-a-production-dag-scheduler",children:[],level:2}],c={toc:p};function d(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"roadmap"},"Roadmap"),(0,a.kt)("p",null,"Metaflow has been used in production at Netflix since early 2018. The core Metaflow was open-sourced in December 2019. Some features of Metaflow are not available in open-source yet but we may open-source them later if there is sufficient external interest. These features are listed below."),(0,a.kt)("p",null,"Please click the link and comment / thumbs-up the corresponding GitHub issue if you want to see the feature open-sourced."),(0,a.kt)("h2",{id:"support-for-kubernetes"},"Support for Kubernetes"),(0,a.kt)("p",null,"Bring all of Metaflow's capabilities to the Kubernetes universe ","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/issues/50"},"Github issue"),")"),(0,a.kt)("h2",{id:"metaflow-uis"},"Metaflow UI","(","s",")"),(0,a.kt)("p",null,"A variety of UI","(","s",")"," for Metaflow - tracking flows, model monitoring, etc"),(0,a.kt)("h2",{id:"faster-and-more-flexible-dependency-management-solutions"},"Faster and more flexible dependency management solutions"),(0,a.kt)("p",null,"Support for dependency management tools beyond conda and docker and address existing pain points ","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/issues/497"},"Github issue"),")"),(0,a.kt)("h2",{id:"flow-composition"},"Flow Composition"),(0,a.kt)("p",null,"Support composing Metaflow flow from other flows ","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/issues/245"},"Github issue"),")"),(0,a.kt)("h2",{id:"metaflowbot"},(0,a.kt)("del",{parentName:"h2"},"MetaflowBot")),(0,a.kt)("p",null,"A Slack bot for Metaflow. Use it to ask questions about past runs ","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/issues/5"},"Github issue"),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Update -")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/outerbounds/metaflowbot"},"Metaflowbot")," is now available in Open Source!"),(0,a.kt)("h2",{id:"metaflow-dataframe"},"Metaflow DataFrame"),(0,a.kt)("p",null,"Support in-memory processing of large data sets ","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/issues/4"},"Github issue",")")),(0,a.kt)("h2",{id:"more-tutorials-and-recipes"},"More tutorials and recipes"),(0,a.kt)("p",null,"Provide advanced tutorials and documentation highlighting non-trivial use-cases ","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/issues/49"},"Github issue",")")),(0,a.kt)("h2",{id:"support-for-hosting-models-as-a-micro-service"},"Support for hosting models as a micro-service"),(0,a.kt)("p",null,"An easy-to-use Function-as-a-Service -style ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=sBM5cSBGZS4"},"microservice hosting platform")," for artifacts ","(","e.g. models",")"," produced by Metaflow runs ","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/issues/3"},"Github issue"),")"),(0,a.kt)("h2",{id:"support-for-r-lang"},(0,a.kt)("del",{parentName:"h2"},"Support for R Lang")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=lakPlz8GJcA"},"Metaflow in the R language"),". Provide an idiomatic R API which uses the Python library as the backend ","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/issues/1"},"Github issue"),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Update")," - ",(0,a.kt)("a",{parentName:"p",href:"../../v/r"},"Metaflow-R")," is now available!"),(0,a.kt)("h2",{id:"support-deployments-to-a-production-dag-scheduler"},(0,a.kt)("del",{parentName:"h2"},"Support deployments to a production DAG scheduler")),(0,a.kt)("p",null,"Netflix uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=0R58_tx7azY"},"an internal DAG scheduler")," to orchestrate most modeling and ETL pipelines in production. Metaflow flows can be deployed to the production scheduler with a single command. A similar integration could be provided e.g. for ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/step-functions/"},"AWS Step Functions")," ","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/issues/2"},"Github issue"),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Update")," - Metaflow 2.1.0 introduced ",(0,a.kt)("a",{parentName:"p",href:"/going-to-production-with-metaflow/scheduling-metaflow-flows"},"integration with AWS Step Functions.")))}d.isMDXComponent=!0}}]);