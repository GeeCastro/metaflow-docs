"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),i=n(6010),r=n(2389),l=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:n,block:r,defaultValue:c,values:m,groupId:h,className:f}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,s.U)(),[N,T]=(0,o.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&b.some((t=>t.value===e))&&T(e)}const R=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==N&&(C(t),T(a),null!=h&&v(h,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},f)},b.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:S,onFocus:R,onClick:R},r,{className:(0,i.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,r.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},4749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),i=n(5488),r=n(5162);const l={},s="Debugging with Metaflow",u={unversionedId:"v/r/metaflow/debugging",id:"v/r/metaflow/debugging",title:"Debugging with Metaflow",description:"Metaflow wants to make debugging failed flows as painless as possible.",source:"@site/docs/v/r/metaflow/debugging.md",sourceDirName:"v/r/metaflow",slug:"/v/r/metaflow/debugging",permalink:"/v/r/metaflow/debugging",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/v/r/metaflow/debugging.md",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"How to debug failed flows",id:"how-to-debug-failed-flows",level:2},{value:"How to use the <code>resume</code> command",id:"how-to-use-the-resume-command",level:3},{value:"Resuming from an arbitrary step",id:"resuming-from-an-arbitrary-step",level:4},{value:"Resume and parameters",id:"resume-and-parameters",level:4},{value:"Reproducing Production Issues Locally",id:"reproducing-production-issues-locally",level:2},{value:"Staging flows for production",id:"staging-flows-for-production",level:3},{value:"Inspecting data with RStudio IDE or Jupyter Notebook",id:"inspecting-data-with-rstudio-ide-or-jupyter-notebook",level:2}],c={toc:d};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debugging-with-metaflow"},"Debugging with Metaflow"),(0,o.kt)("p",null,"Metaflow wants to make debugging failed flows as painless as possible."),(0,o.kt)("p",null,"Debugging issues during development is a normal part of the development process. You\nshould be able to develop and debug your Metaflow scripts similar to how you develop any\nR scripts locally."),(0,o.kt)("p",null,"Debugging a failure can either happen ",(0,o.kt)("strong",{parentName:"p"},"after")," a failed execution or ",(0,o.kt)("strong",{parentName:"p"},"during"),"\nexecution. In the first case, Metaflow provides two mechanisms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("a",{parentName:"li",href:"/v/r/metaflow/debugging#how-to-use-the-resume-command"},"ability to resume a flow"),",\nre-executing all successful steps and only re-executing from the failed step. This\nallows you to fix the problem in the failed step, resume the flow and make progress."),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("a",{parentName:"li",href:"/v/r/metaflow/client"},"ability to inspect the data")," produced by each step in a flow to be\nable to determine what went wrong.")),(0,o.kt)("h2",{id:"how-to-debug-failed-flows"},"How to debug failed flows"),(0,o.kt)("p",null,"The process of debugging failed flows is similar both for development-time and\nproduction-time issues:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Identify the step that failed. The failed step is reported as the last line of the\nerror report where it is easy to spot."),(0,o.kt)("li",{parentName:"ol"},"Identify the run id of the failed run. On the console output, each line is prefixed\nwith an identifier like ",(0,o.kt)("inlineCode",{parentName:"li"},"2/start/21426"),". Here, ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," is the run id, ",(0,o.kt)("inlineCode",{parentName:"li"},"start")," is the step\nname, and ",(0,o.kt)("inlineCode",{parentName:"li"},"21426")," is the task id."),(0,o.kt)("li",{parentName:"ol"},"Reproduce the failed run with ",(0,o.kt)("inlineCode",{parentName:"li"},"resume")," as ",(0,o.kt)("a",{parentName:"li",href:"/v/r/metaflow/debugging#how-to-use-the-resume-command"},"described\nbelow"),". Confirm that the error message\nyou get locally matches to the original error message."),(0,o.kt)("li",{parentName:"ol"},"Identify the failed logic inside the failed step. You can do this by adding ",(0,o.kt)("inlineCode",{parentName:"li"},"print"),"\nstatements in the step until ",(0,o.kt)("inlineCode",{parentName:"li"},"resume")," reveals enough information. Alternatively, you\ncan reproduce the faulty logic in R studio or jupyter notebook using input data\nartifacts for the step, as described below in the section about ",(0,o.kt)("a",{parentName:"li",href:"#inspecting-data-with-rstudio-ide-or-jupyter-notebook"},"RStudio and Jupyter\nNotebook"),"."),(0,o.kt)("li",{parentName:"ol"},"Confirm that the fix works with ",(0,o.kt)("inlineCode",{parentName:"li"},"resume"),". Return to 4 if the error has not been\nfixed."),(0,o.kt)("li",{parentName:"ol"},"When the step works locally, rerun the whole flow from ",(0,o.kt)("inlineCode",{parentName:"li"},"start")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"end")," and confirm\nthat the fix works as intended.")),(0,o.kt)("h3",{id:"how-to-use-the-resume-command"},"How to use the ",(0,o.kt)("inlineCode",{parentName:"h3"},"resume")," command"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," command allows you to resume execution of a past run at a failed step.\nResuming makes it easy to quickly reproduce the failure and iterate on the step code\nuntil a fix has been found."),(0,o.kt)("p",null,"Here is how it works. First, save the snippet below :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r",metastring:'title="debugflow.R"',title:'"debugflow.R"'},'library(metaflow)\n\na <- function(self){\n    self$var <- 1\n}\n\nb <- function(self){\n    self$var <- tofail("cannot find function tofail")\n}\n\njoin <- function(self, inputs){\n    print(paste("var in step a is", inputs$a$var))\n    print(paste("var in step b is", inputs$b$var))\n}\n\nmetaflow("DebugFlow") %>%\n    step(step = "start",\n         next_step = c("a", "b")) %>%\n    step(step = "a",\n         r_function=a,\n         next_step="join") %>%\n    step(step="b",\n         r_function=b,\n         next_step="join") %>%\n    step(step="join",\n         r_function=join,\n         next_step="end",\n         join=TRUE) %>%\n    step(step="end") %>%\n    run()\n')),(0,o.kt)("p",null,"Run the script with:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debugflow.R run\n"))),(0,o.kt)(r.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Execute in RStudio as is\n")))),(0,o.kt)("p",null,"The run should fail. The output should look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'...\n2020-06-19 13:23:22.264 [153/a/1002 (pid 44264)] Task is starting.\n2020-06-19 13:23:22.980 [153/b/1003 (pid 44272)] Task is starting.\n2020-06-19 13:23:30.488 [153/a/1002 (pid 44264)] Task finished successfully.\n2020-06-19 13:23:31.813 [153/b/1003 (pid 44272)] Evaluation error: could not find function "tofail".\n2020-06-19 13:23:33.211 [153/b/1003 (pid 44272)] Task failed.\n2020-06-19 13:23:33.211 Workflow failed.\n')),(0,o.kt)("p",null,"This shows that the step ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," of the run ",(0,o.kt)("inlineCode",{parentName:"p"},"153")," failed. In your case, the run id could be\ndifferent."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," command runs the flow similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"run"),". However, in contrast to ",(0,o.kt)("inlineCode",{parentName:"p"},"run"),"\nresuming reuses results of every successful step instead of actually running them."),(0,o.kt)("p",null,"Try it with"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debugflow.R resume\n"))),(0,o.kt)(r.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Replace run() in debugflow.R with\n# run(resume = TRUE)\n# and execute in RStudio\n")))),(0,o.kt)("p",null,"Metaflow remembers the run number of the last local run, which in this case is ",(0,o.kt)("inlineCode",{parentName:"p"},"153"),", so\nyou should see ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," reusing results of the run above. Since we have not changed\nanything yet, you should see the above error again but with an incremented run number."),(0,o.kt)("p",null,"You can also resume a specific run using the CLI option ",(0,o.kt)("inlineCode",{parentName:"p"},"--origin-run-id")," if you don't\nlike the default value selected by Metaflow. To get the same behavior as above, you can\nalso do:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debugflow.R resume --origin-run-id 153\n"))),(0,o.kt)(r.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Replace run() in debugflow.R with\n# run(resume = TRUE, origin_run_id = "153")\n# and execute in RStudio\n')))),(0,o.kt)("p",null,"If you'd like programmatic access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"origin-run-id")," selected for the ",(0,o.kt)("inlineCode",{parentName:"p"},"resume"),"\n","(","either implicitly selected by Metaflow as last ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," invocation, or explicitly\ndeclared by the user via the CLI",")",", you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," object. Read more\n",(0,o.kt)("a",{parentName:"p",href:"/v/r/metaflow/tagging#accessing-current-ids-in-a-flow"},"here"),"."),(0,o.kt)("p",null,"Next, fix the error by replacing ",(0,o.kt)("inlineCode",{parentName:"p"},'tofail("cannot find function tofail")')," in\n",(0,o.kt)("inlineCode",{parentName:"p"},"debugflow.R")," with ",(0,o.kt)("inlineCode",{parentName:"p"},'"any message"'),". Try again after the fix. This time, you should see\nthe flow completing successfully."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'2020-06-19 14:09:06.015 Gathering required information to resume run (this may take a bit of time)...\n2020-06-19 14:09:22.177 Workflow starting (run-id 154):\n2020-06-19 14:09:22.865 [154/start/1045] Cloning results of a previously run task 153/start/1001\n2020-06-19 14:09:27.797 [154/a/1046] Cloning results of a previously run task 153/a/1002\n2020-06-19 14:09:28.789 [154/b/1047 (pid 48073)] Task is starting.\n2020-06-19 14:09:37.263 [154/b/1047 (pid 48073)] Task finished successfully.\n2020-06-19 14:09:38.784 [154/join/1048 (pid 48130)] Task is starting.\n2020-06-19 14:09:44.621 [154/join/1048 (pid 48130)] [1] "var in step a is 1"\n2020-06-19 14:09:44.811 [154/join/1048 (pid 48130)] [1] "var in step b is any message"\n2020-06-19 14:09:49.704 [154/join/1048 (pid 48130)] Task finished successfully.\n2020-06-19 14:09:50.798 [154/end/1049 (pid 48156)] Task is starting.\n2020-06-19 14:10:00.518 [154/end/1049 (pid 48156)] Task finished successfully.\n2020-06-19 14:10:00.893 Done!\n')),(0,o.kt)("p",null,"Resuming uses the flow and step names to decide what results can be reused. This means\nthat the results of previously successful steps will get reused even if you change their\nstep code. You can add new steps and alter code of failed steps safely with ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")),(0,o.kt)("h4",{id:"resuming-from-an-arbitrary-step"},"Resuming from an arbitrary step"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," resumes from the step that failed, like ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," above. Sometimes fixing\nthe failed step requires re-execution of some steps that precede it."),(0,o.kt)("p",null,"You can choose the step to resume from by specifying the step name on the command line:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debugflow.R resume start\n"))),(0,o.kt)(r.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Replace run() in debugflow.R with\n# run(resume = "start")\n# and execute in RStudio\n')))),(0,o.kt)("p",null,"This would resume execution from the step ",(0,o.kt)("inlineCode",{parentName:"p"},"start"),". If you specify a step that comes\nafter the step that failed, execution resumes from the failed step - you can't skip over\nsteps."),(0,o.kt)("h4",{id:"resume-and-parameters"},"Resume and parameters"),(0,o.kt)("p",null,"If your flow has ",(0,o.kt)("a",{parentName:"p",href:"/v/r/metaflow/basics#how-to-define-parameters-for-flows"},(0,o.kt)("inlineCode",{parentName:"a"},"Parameters")),", you can't\nchange their values when resuming. Changing parameter values could change the results of\nany steps, including those that ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," skips over, which could result to unexpected\nbehavior in subsequent steps."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," command reuses the parameter values that you set with ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," originally."),(0,o.kt)("h2",{id:"reproducing-production-issues-locally"},"Reproducing Production Issues Locally"),(0,o.kt)("p",null,"This section shows you how to reproduce a failed Metaflow run on AWS Step Functions\nlocally. This is how a failed run on AWS Step Functions UI looks like -"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9777).Z,width:"1999",height:"180"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6400).Z,width:"1999",height:"1009"})),(0,o.kt)("p",null,"Notice the execution ID of ",(0,o.kt)("inlineCode",{parentName:"p"},"5ca85f96-8508-409d-a5f5-b567db1040c5"),". When running on AWS\nStep Functions, Metaflow uses the AWS Step Functions execution ID ","(","prefixed with\n",(0,o.kt)("inlineCode",{parentName:"p"},"sfn-"),")"," as the run id."),(0,o.kt)("p",null,"The graph visualization shows that step ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," failed, as expected. First, you should\ninspect the logs of the failed step to get an idea of why it failed. You can access AWS\nBatch step logs in the AWS Step Functions UI by looking for the ",(0,o.kt)("inlineCode",{parentName:"p"},"JobId")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Error"),"\nblob that can be accessed by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception")," pane on the right side of the\nUI. You can use this ",(0,o.kt)("inlineCode",{parentName:"p"},"JobId")," in the AWS Batch console to check the job logs. This\n",(0,o.kt)("inlineCode",{parentName:"p"},"JobId")," is also the metaflow task ID for the step."),(0,o.kt)("p",null,"Next, we want to reproduce the above error locally. We do this by resuming the specific\nAWS Step Functions run that failed:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{label:"Bash",value:"Bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debug.R resume --origin-run-id sfn-5ca85f96-8508-409d-a5f5-b567db1040c5\n"))),(0,o.kt)(r.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'   ...\n   step(step="end",\n        ...)\n   run(resume=TRUE,\n       origin_run_id="sfn-5ca85f96-8508-409d-a5f5-b567db1040c5")\n')))),(0,o.kt)("p",null,"This will reuse the results of the ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," step from the AWS Step Functions run.\nIt will try to rerun the step ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," locally, which fails with the same error as it does in\nproduction."),(0,o.kt)("p",null,"You can fix the error locally as above. In the case of this simple flow, you can run the\nwhole flow locally to confirm that the fix works. After validating the results, you\nwould deploy a new version to production with ",(0,o.kt)("inlineCode",{parentName:"p"},"step-functions create"),"."),(0,o.kt)("p",null,"However, this might not be a feasible approach for complex production flow. For\ninstance, the flow might process large amounts of data that can not be handled in your\nlocal instance. We have better approaches for staging flows for production:"),(0,o.kt)("h3",{id:"staging-flows-for-production"},"Staging flows for production"),(0,o.kt)("p",null,"The easiest approach to test a demanding flow is to run it with AWS Batch. This works\neven with resume:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debug.R resume --origin-run-id sfn-5ca85f96-8508-409d-a5f5-b567db1040c5 --with batch\n")),(0,o.kt)("p",null,"This will resume your flow and run every step on AWS Batch. When you are ready to test a\nfixed flow end-to-end, just run it as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debug.R run --with batch\n")),(0,o.kt)("p",null,"Alternatively, you can change the name of the flow temporarily, e.g. from DebugFlow to\nDebugFlowStaging. Then you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"step-functions create")," with the new name, which will\ncreate a separate staging flow on AWS Step Functions."),(0,o.kt)("p",null,"You can test the staging flow freely without interfering with the production flow. Once\nthe staging flow runs successfully, you can confidently deploy a new version to\nproduction."),(0,o.kt)("h2",{id:"inspecting-data-with-rstudio-ide-or-jupyter-notebook"},"Inspecting data with RStudio IDE or Jupyter Notebook"),(0,o.kt)("p",null,"The above example demonstrates a trivial error. In the real life, errors can be much\ntrickier to debug. In the case of machine learning, a flow may fail because of an\nunexpected distribution of input data, although nothing is wrong with the code per se."),(0,o.kt)("p",null,"Being able to inspect data produced by every step is a powerful feature of Metaflow\nwhich can help in situations like this."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"/v/r/metaflow/client"},"Metaflow client")," in an RStudio IDE or a Jupyter Notebook to\nfetch artifacts produced each step, and run sanity checks or further debug the issue."))}m.isMDXComponent=!0},9777:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image1-accbb36a62286f898ffc47fe5c0ea1f3.png"},6400:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image3_(1)-0fa449301236d6773f122388d74743a0.png"}}]);