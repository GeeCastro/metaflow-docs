"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),f=r,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1857:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},i="Scalable Compute and Data",l={unversionedId:"scaling/introduction",id:"scaling/introduction",title:"Scalable Compute and Data",description:"After you have prototyped a flow locally and iterated with it",source:"@site/docs/scaling/introduction.md",sourceDirName:"scaling",slug:"/scaling/introduction",permalink:"/scaling/introduction",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/scaling/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Advanced, Shareable Cards with Card Templates",permalink:"/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates"},next:{title:"Executing Tasks Remotely",permalink:"/scaling/remote-tasks/introduction"}},s={},c=[{value:"Supersizing Flows",id:"supersizing-flows",level:2},{value:"Toolbox of Scalability",id:"toolbox-of-scalability",level:3},{value:"What You Will Learn",id:"what-you-will-learn",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scalable-compute-and-data"},"Scalable Compute and Data"),(0,r.kt)("p",null,"After you have ",(0,r.kt)("a",{parentName:"p",href:"/metaflow/introduction"},"prototyped a flow locally")," and iterated with it\nfor a while, you may face questions like these: How can I test the flow with more data\nwithout running out of memory? Or, how can I make the model train faster? You could try\nto optimize the code to work better on your laptop, but such ",(0,r.kt)("a",{parentName:"p",href:"https://xkcd.com/1691/"},"premature\noptimization")," is probably not the best use of your time."),(0,r.kt)("p",null,"Instead, you can leverage the cloud to get a bigger laptop or more laptops (virtually,\nnot literally). This is the Stage II in Metaflow development: Scaling flows with the\ncloud. Luckily Metaflow makes this trivially easy - no changes in the code required -\nafter you have done the initial legwork to ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/infrastructure"},"configure infrastructure for\nMetaflow"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1864).Z,width:"702",height:"540"})),(0,r.kt)("h2",{id:"supersizing-flows"},"Supersizing Flows"),(0,r.kt)("p",null,"Here's how Metaflow can help make your project more scalable:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can make your existing flows more scalable just by adding a line of code,\n",(0,r.kt)("inlineCode",{parentName:"p"},"@resources"),". This way you can request more CPUs, memory, or GPUs in your flows. Or, you\ncan parallelize processing over multiple instances, even thousands of them.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once your project starts showing promise with realistic-size workloads, it may start\nattracting interest from colleagues too. Metaflow contains a number of features, such as\n",(0,r.kt)("a",{parentName:"p",href:"/scaling/tagging"},"namespaces"),", which make collaboration smoother by allowing many\npeople contribute without interfering with each other's work accidentally."))),(0,r.kt)("h3",{id:"toolbox-of-scalability"},"Toolbox of Scalability"),(0,r.kt)("p",null,"There is no single magic formula for scalability. Instead of proposing a novel paradigm\nto make your Python code faster, Metaflow provides a set of pragmatic tools, leveraging\nthe best off-the-shelf components and services, which help you make code more scalable\nand performant depending on your specific needs. "),(0,r.kt)("p",null,"The scalability tools fall into three categories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Performance Optimization"),": You can improve performance of your code by utilizing\noff-the-shelf, high-performance libraries such as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dmlc/xgboost"},"XGboost")," or ",(0,r.kt)("a",{parentName:"p",href:"https://tensorflow.org"},"Tensorflow"),".\nOr, if you need something more custom, you can leverage the vast landscape of data\ntools for Python, including compilers like ",(0,r.kt)("a",{parentName:"p",href:"https://numba.pydata.org"},"Numba")," to speed\nup your code.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scaling Up"),": One should not underestimate the horsepower of a modern large server,\nespecially one equipped with GPUs. Before considering anything else, you can simply run\na step on a beefier cloud instance. Metaflow integrates with ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/infrastructure"},"Kubernetes that works on\nall major clouds")," and AWS Batch, both of which take\ncare of provisioning such machines on demand.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scaling Out"),": Besides executing code on a single instance, Metaflow makes it easy\nto parallelize steps over an arbitrarily large number of instances, leveraging\nKubernetes and AWS Batch, giving you access to virtually unlimited amount of computing\npower."))),(0,r.kt)("p",null,"Often an effective recipe for scalability is a combination of these three techniques:\nStart with high-performance Python libraries, run them on large instances, and if\nnecessary, parallelize processing as widely as needed. Also, besides compute concerns,\n",(0,r.kt)("a",{parentName:"p",href:"/scaling/data"},"loading data efficiently")," is something Metaflow can help with."),(0,r.kt)("p",null,"No matter whether you use Metaflow or any other system, executing at scale comes with a\nfew extra concerns: The larger the scale, the more likely it is that you hit ",(0,r.kt)("a",{parentName:"p",href:"/scaling/failures"},"spurious\nfailures"),". And, you need to make sure your execution environments,\nincluding any libraries you depend on, are ",(0,r.kt)("a",{parentName:"p",href:"/scaling/dependencies"},"available consistently wherever the code\ngets executed"),". Since these issues are a common headache in all\nlarge-scale projects, Metaflow helps manage them too."),(0,r.kt)("h2",{id:"what-you-will-learn"},"What You Will Learn"),(0,r.kt)("p",null,"In this section, you will learn how to make your flows capable of handling more data and\nexecute faster. You will also learn how to scale projects over multiple people by\norganizing results better. We cover five topics:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/scaling/remote-tasks/introduction"},"Executing tasks remotely with Kubernetes or AWS\nBatch")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/scaling/failures"},"Dealing with failures")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/scaling/dependencies"},"Managing execution environments")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/scaling/data"},"Loading and storing data efficiently")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/scaling/tagging"},"Organizing results for smoother collaboration"))),(0,r.kt)("p",null,"Before you proceed, make sure to ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/infrastructure"},"configure infrastructure for\nMetaflow")," or sign up for a ",(0,r.kt)("a",{parentName:"p",href:"https://outerbounds.com/sandbox/"},"Metaflow\nSandbox"),"."))}p.isMDXComponent=!0},1864:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/intro-cartoon-2-fa412dd97d3daf1ef9364e96b7adf35c.svg"}}]);