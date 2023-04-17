"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Episode 5: Statistics Redux",s={unversionedId:"v/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05",id:"v/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05",title:"Episode 5: Statistics Redux",description:"This example revisits [Episode 02-statistics: Is this Data",source:"@site/docs/v/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05.md",sourceDirName:"v/r/getting-started/tutorials/season-2-scaling-out-and-up",slug:"/v/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05",permalink:"/v/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/v/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05.md",tags:[],version:"current",frontMatter:{},sidebar:"r",previous:{title:"Episode 4: Hello AWS",permalink:"/v/r/getting-started/tutorials/season-2-scaling-out-and-up/episode04"},next:{title:"Episode 6: Worldview",permalink:"/v/r/getting-started/tutorials/season-2-scaling-out-and-up/episode06"}},l={},p=[{value:"Showcasing:",id:"showcasing",level:2},{value:"Before playing this episode:",id:"before-playing-this-episode",level:2},{value:"To play this episode:",id:"to-play-this-episode",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"episode-5-statistics-redux"},"Episode 5: Statistics Redux"),(0,r.kt)("p",null,"This example revisits ",(0,r.kt)("a",{parentName:"p",href:"/v/r/getting-started/tutorials/season-1-the-local-experience/episode02"},(0,r.kt)("strong",{parentName:"a"},"Episode 02-statistics: Is this Data\nScience?")),"."),(0,r.kt)("p",null,"With Metaflow, you don't need to make any code changes to scale up your flow by running\non remote compute. In this example we re-run the ",(0,r.kt)("inlineCode",{parentName:"p"},"stats.R")," workflow adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--with\nbatch")," command line argument. This instructs Metaflow to run all your steps on AWS batch\nwithout changing any code. You can control the behavior with additional arguments, like\n",(0,r.kt)("inlineCode",{parentName:"p"},"--max-workers"),". For this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-workers")," is used to limit the number of\nparallel genre-specific statistics computations. You can then access the data artifacts\n","(","even the local CSV file",")"," from anywhere because the data is being stored in AWS S3."),(0,r.kt)("h2",{id:"showcasing"},"Showcasing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--with batch")," command line option"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--max-workers")," command line option"),(0,r.kt)("li",{parentName:"ul"},"Accessing data artifact stored in AWS S3 from a local Markdown Notebook.")),(0,r.kt)("h2",{id:"before-playing-this-episode"},"Before playing this episode:"),(0,r.kt)("p",null,"Configure your ",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow-on-aws/metaflow-sandbox"},"sandbox"),"."),(0,r.kt)("h2",{id:"to-play-this-episode"},"To play this episode:"),(0,r.kt)("p",null,"If you haven't yet pulled the tutorials to your current working directory, you can\nfollow the instructions ",(0,r.kt)("a",{parentName:"p",href:"../#pull-tutorials"},"here"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cd tutorials/02-statistics/")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Rscript stats.R --package-suffixes=.R,.csv run --with batch --max-workers 4")),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"02-statistics/stats.Rmd")," in your RStudio and re-run the cells. You can access\nthe artifacts stored in AWS S3 from your local RStudio session.")))}u.isMDXComponent=!0}}]);