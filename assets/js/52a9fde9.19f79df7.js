"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9788],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(f,i(i({ref:e},p),{},{components:n})):o.createElement(f,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1960:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="Episode 8: Autopilot",u={unversionedId:"getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot",id:"getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot",title:"Episode 8: Autopilot",description:"Scheduling Compute in the Cloud.",source:"@site/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot.md",sourceDirName:"getting-started/tutorials/season-2-scaling-out-and-up",slug:"/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot",permalink:"/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot",editUrl:"https://github.dev/obgibson/metaflow-docs/blob/master/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Episode 7: Worldview",permalink:"/getting-started/tutorials/season-2-scaling-out-and-up/episode07"},next:{title:"Metaflow on AWS",permalink:"/metaflow-on-aws/"}},p=[{value:"Scheduling Compute in the Cloud.",id:"scheduling-compute-in-the-cloud",children:[],level:2}],c={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"episode-8-autopilot"},"Episode 8: Autopilot"),(0,r.kt)("h2",{id:"scheduling-compute-in-the-cloud"},"Scheduling Compute in the Cloud."),(0,r.kt)("p",null,"This example revisits '",(0,r.kt)("a",{parentName:"p",href:"/getting-started/tutorials/season-2-scaling-out-and-up/episode06"},"Episode 06-statistics-redux: Computing in the Cloud"),"'. With Metaflow, you don't need to make any code changes to schedule your flow in the cloud. In this example, we will schedule the ",(0,r.kt)("inlineCode",{parentName:"p"},"stats.py")," workflow using the ",(0,r.kt)("inlineCode",{parentName:"p"},"step-functions create")," command-line argument. This instructs Metaflow to schedule your flow on AWS Step Functions without changing any code. You can execute your flow on AWS Step Functions by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"step-functions trigger")," command-line argument. You can use a notebook to set up a simple dashboard to monitor all of your Metaflow flows."),(0,r.kt)("p",null,"You can find the tutorial code on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/tree/master/metaflow/tutorials/08-autopilot"},"GitHub"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Showcasing:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"step-functions create")," command-line option"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"step-functions trigger")," command-line option"),(0,r.kt)("li",{parentName:"ul"},"Accessing data locally or remotely through the Metaflow ",(0,r.kt)("a",{parentName:"li",href:"/metaflow/client"},"Client API"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before playing this episode:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"python -m pip install notebook")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"python -m pip install plotly")),(0,r.kt)("li",{parentName:"ol"},"This tutorial requires access to compute and storage resources on AWS, which can be configured by",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Following the instructions ",(0,r.kt)("a",{parentName:"li",href:"https://admin-docs.metaflow.org/metaflow-on-aws/deployment-guide"},"here")," or"),(0,r.kt)("li",{parentName:"ol"},"Requesting a ",(0,r.kt)("a",{parentName:"li",href:"../../../metaflow-on-aws/metaflow-sandbox"},"sandbox"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To play this episode:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cd metaflow-tutorials")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},'python 02-statistics/stats.py --environment=conda --with conda:python=3.7,libraries="{pandas:0.24.2}" step-functions create --max-workers 4')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"python 02-statistics/stats.py step-functions trigger")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"jupyter-notebook 08-autopilot/autopilot.ipynb")),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"autopilot.ipynb"))," in your remote Sagemaker notebook.")))}d.isMDXComponent=!0}}]);