"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:h,groupId:m,className:f}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=h??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,l.l)(k,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:g}=(0,s.U)(),[N,x]=(0,r.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=v[m];null!=e&&e!==N&&k.some((t=>t.value===e))&&x(e)}const _=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==N&&(T(t),x(a),null!=m&&g(m,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},f)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:E,onFocus:_,onClick:_},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},5021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),o=n(5162);const l={},s="Dealing with Failures",u={unversionedId:"v/r/metaflow/failures",id:"v/r/metaflow/failures",title:"Dealing with Failures",description:"Failures are a natural, expected part of data science workflows. Here are some typical",source:"@site/docs/v/r/metaflow/failures.md",sourceDirName:"v/r/metaflow",slug:"/v/r/metaflow/failures",permalink:"/v/r/metaflow/failures",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/v/r/metaflow/failures.md",tags:[],version:"current",frontMatter:{}},p={},c=[{value:"Retrying Tasks with the <code>retry</code> Decorator",id:"retrying-tasks-with-the-retry-decorator",level:2},{value:"How to Prevent Retries",id:"how-to-prevent-retries",level:3},{value:"Maximizing Safety",id:"maximizing-safety",level:3},{value:"Results of Retries",id:"results-of-retries",level:3},{value:"Catching Exceptions with the <code>catch</code> Decorator",id:"catching-exceptions-with-the-catch-decorator",level:2},{value:"Exceptions Raised by Your Code",id:"exceptions-raised-by-your-code",level:3},{value:"Platform Exceptions",id:"platform-exceptions",level:3},{value:"Summary",id:"summary",level:2}],d={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dealing-with-failures"},"Dealing with Failures"),(0,r.kt)("p",null,"Failures are a natural, expected part of data science workflows. Here are some typical\nreasons why you can expect your workflow to fail:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Misbehaving code:")," no code is perfect. Your code may fail to handle edge cases or\nlibraries behave differently than what you expected."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Unanticipated issues with data:")," data is harder than science. Data is how Metaflow\nworkflows interact with the chaotic, high entropy, outside world. It is practically\nimpossible to anticipate all possible ways the input data can be broken."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Platform issues:")," the best infrastructure is invisible. Unfortunately, every now\nand then platforms that Metaflow relies on, or Metaflow itself, make their existence\npainfully obvious by failing in creative ways.")),(0,r.kt)("p",null,"Metaflow provides straightforward tools for you to handle all these scenarios. If you\nare in a hurry, see ",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow/failures#summary"},"a quick summary of the tools"),"."),(0,r.kt)("h2",{id:"retrying-tasks-with-the-retry-decorator"},"Retrying Tasks with the ",(0,r.kt)("inlineCode",{parentName:"h2"},"retry")," Decorator"),(0,r.kt)("p",null,"Retrying a failed task is the simplest way to try to handle errors. It is a particularly\neffective strategy with platform issues which are typically transient in nature."),(0,r.kt)("p",null,"You can enable retries for a step simply by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"retry")," decorator in the step, like\nhere:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r",metastring:'title="retryflow.R"',title:'"retryflow.R"'},'library(metaflow)\n\nstart <- function(self){\n    n <- rbinom(n=1, size=1, prob=0.5)\n    if (n==0){\n        stop("Bad Luck!")\n    } else{\n        print("Lucky you!")\n    }\n}\n\nend <- function(self){\n    print("Phew!")\n}\n\nmetaflow("RetryFlow") %>%\n    step(step="start",\n         decorator("retry"),\n         r_function=start,\n         next_step="end") %>%\n    step(step="end",\n         r_function=end) %>%\n    run()\n')),(0,r.kt)("p",null,"When you run this flow, you will see that sometimes it succeeds without a hitch but\nsometimes the ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," step raises an exception and needs to be retried. By default,\n",(0,r.kt)("inlineCode",{parentName:"p"},"retry")," retries the step three times. Thanks to ",(0,r.kt)("inlineCode",{parentName:"p"},"retry"),", this workflow will almost\nalways succeed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'2020-06-19 15:48:16.653 [181/start/1076 (pid 54076)] Task is starting.\n2020-06-19 15:48:22.441 [181/start/1076 (pid 54076)] Evaluation error: Bad Luck!.\n2020-06-19 15:48:23.408 [181/start/1076 (pid 54076)] Task failed.\n2020-06-19 15:48:23.602 [181/start/1076 (pid 54106)] Task is starting (retry).\n2020-06-19 15:48:29.434 [181/start/1076 (pid 54106)] Evaluation error: Bad Luck!.\n2020-06-19 15:48:30.665 [181/start/1076 (pid 54106)] Task failed.\n2020-06-19 15:48:30.902 [181/start/1076 (pid 54139)] Task is starting (retry).\n2020-06-19 15:48:34.704 [181/start/1076 (pid 54139)] [1] "Lucky you!"\n2020-06-19 15:48:38.545 [181/start/1076 (pid 54139)] Task finished successfully.\n')),(0,r.kt)("p",null,"It is highly recommended that you use ",(0,r.kt)("inlineCode",{parentName:"p"},"retry")," every time you run your flow on the\n",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow-on-aws/"},"cloud"),". Instead of annotating every step with a\nretry decorator, you can also automatically add a retry decorator to all steps that do\nnot have one as follows:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"Rscript retryflow.R run --with retry\n"))),(0,r.kt)(o.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Replace run() in retryflow.R with\n# run(with = c("retry"))\n# and execute in RStudio\n')))),(0,r.kt)("h3",{id:"how-to-prevent-retries"},"How to Prevent Retries"),(0,r.kt)("p",null,"If retries are such a good idea, why not enable them by default for all steps? First,\nretries only help with transient errors, like sporadic platform issues. If the input\ndata or your code is broken, retrying will not help anything. Secondly, not all steps\ncan be retried safely."),(0,r.kt)("p",null,"Imagine a hypothetical step like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r",metastring:'title="moneyflow.R"',title:'"moneyflow.R"'},"withdraw_money_from_account <- function(self){\n    library(httr)\n    r <- POST('bank.com/account/123/withdraw',\n                body=list(amount = 1000))\n}\n")),(0,r.kt)("p",null,"If you run this code with:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"Rscript moneyflow.R run --with retry\n"))),(0,r.kt)(o.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Replace run() in moneyflow.R with\n# run(with = c("retry"))\n# and execute in RStudio\n')))),(0,r.kt)("p",null,"you may end up withdrawing up to $4000 instead of the intended $1000. To make sure no\none will accidentally retry a step with ",(0,r.kt)("em",{parentName:"p"},"destructive side effects")," like this, you should\nadd ",(0,r.kt)("inlineCode",{parentName:"p"},"times=0")," in the step code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r",metastring:'title="moneyflow.R"',title:'"moneyflow.R"'},'metaflow("MoneyFlow") %>%\n    ...\n    step(step="withdraw",\n         decorator("retry", times=0),\n         r_function=withdraw_money_from_account,\n         next_step="end") %>%\n    ...\n')),(0,r.kt)("p",null,"Now the code can be safely rerun, even using ",(0,r.kt)("inlineCode",{parentName:"p"},"--with retry"),". All other steps will be\nretried as usual."),(0,r.kt)("p",null,"Most data science workflows do not have to worry about this. As long as your step only\nreads and writes Metaflow artifacts and/or performs only read-only operations with\nexternal systems ","(","e.g. performs only ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," queries, no ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"s etc.",")",", your step\nis ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Idempotence#Computer_science_meaning"},"idempotent")," and\ncan be retried without concern."),(0,r.kt)("h3",{id:"maximizing-safety"},"Maximizing Safety"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"retry")," will retry the step for three times before giving up. It waits for 2\nminutes between retries on the ",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow-on-aws/"},"cloud"),". This\nmeans that if your code fails fast, any transient platform issues need to get resolved\nin less than 10 minutes or the whole run will fail. 10 minutes is typically more than\nenough, but sometimes you want both a belt and suspenders."),(0,r.kt)("p",null,"If you have a sensitive production workflow which should not fail easily, there are four\nthings you can do:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can increase the number of retries to ",(0,r.kt)("inlineCode",{parentName:"li"},"times=4"),", which is the maximum number of\nretries currently."),(0,r.kt)("li",{parentName:"ol"},"You can make the time between retries arbitrarily long, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"times=4,\nminutes_between_retries=20.")," This will give the task over an hour to succeed."),(0,r.kt)("li",{parentName:"ol"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"catch"),", described below, as a way to continue even after all retries\nhave failed.")),(0,r.kt)("p",null,"You can use any combination of these four techniques, or all of them together, to build\nrock-solid workflows."),(0,r.kt)("h3",{id:"results-of-retries"},"Results of Retries"),(0,r.kt)("p",null,"If the same code is executed multiple times by ",(0,r.kt)("inlineCode",{parentName:"p"},"retry"),", are there going to be duplicate\nartifacts? No, Metaflow manages retries so that only artifacts from the last retry are\nvisible. If you use ",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow/client"},"the Client API "),"to inspect results, you don't have to do\nanything special to deal with retries that may have happened. Each task will have only\none set of results. Correspondingly, the logs returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"task")," show the output of the\nlast attempt only."),(0,r.kt)("p",null,"If you want to know if a task was retried, you can retrieve retry timestamps from ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),"\nmetadata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'task <- task_client$new("RetryFlow/181/start/1076")\nprint(task$metadata_dict$attempt)\n')),(0,r.kt)("h2",{id:"catching-exceptions-with-the-catch-decorator"},"Catching Exceptions with the ",(0,r.kt)("inlineCode",{parentName:"h2"},"catch")," Decorator"),(0,r.kt)("p",null,"As mentioned above, ",(0,r.kt)("inlineCode",{parentName:"p"},"retry")," is an appropriate tool for dealing with transient issues.\nWhat about issues that are not transient? Metaflow has another decorator, ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," that\ncatches any exceptions that occur during the step and then continues execution of\nsubsequent steps."),(0,r.kt)("p",null,"The main upside of ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," is that it can make your workflows extremely robust: it will\nhandle all error scenarios from faulty code and faulty data to platform issues. The main\ndownside is that your code needs to be modified so that it can tolerate faulty steps."),(0,r.kt)("p",null,"Let's consider issues caused by your code versus everything surrounding it separately."),(0,r.kt)("h3",{id:"exceptions-raised-by-your-code"},"Exceptions Raised by Your Code"),(0,r.kt)("p",null,"By default, Metaflow stops execution of the flow when a step fails. It can't know what\nto do with failed steps automatically."),(0,r.kt)("p",null,"You may know that some steps are error-prone. For instance, this can happen with a step\ninside a foreach loop that iterates over unknown data, such as the results of a query or\na parameter matrix. In this case, it may be desirable to let some tasks fail without\ncrashing the whole flow."),(0,r.kt)("p",null,"Consider this example that is structured like a hyperparameter search:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'library(metaflow)\n\nstart <- function(self){\n    self$params <- c(-1, 2, 3)\n}\n\nsanity_check <- function(self){\n    print(self$input)\n    if (self$input < 0) {\n        stop("input cannot be negative")\n    }\n}\n\njoin <- function(self, inputs){\n    for (input in inputs){\n        if (!is.null(input$compute_failed)){\n           print(paste0("Exception happened for param: ", input$input))\n           print("Exception message:")\n           print(input$compute_failed)\n        }\n    }\n}\n\nmetaflow("CatchFlow") %>%\n    step(step = "start",\n         r_function = start,\n         next_step = "sanity_check",\n         foreach = "params") %>%\n    step(step = "sanity_check",\n         decorator("catch", var="compute_failed", print_exception=FALSE),\n         r_function = sanity_check,\n         next_step = "join") %>%\n    step(step = "join",\n         r_function = join,\n         next_step = "end",\n         join = TRUE) %>%\n    step(step = "end") %>%\n    run()\n')),(0,r.kt)("p",null,"As you can guess, the above flow raises an error. Normally, this would crash the whole\nflow. However, in this example the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," decorator catches the exception and stores it\nin an instance variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"compute_failed"),", and lets the execution continue. The\nnext step, ",(0,r.kt)("inlineCode",{parentName:"p"},"join"),", contains logic to handle the exception."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," argument is optional. The exception is not stored unless you specify it. You\ncan also specify ",(0,r.kt)("inlineCode",{parentName:"p"},"print_exception=FALSE")," to prevent the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," decorator from printing\nout the caught exception on stdout."),(0,r.kt)("h3",{id:"platform-exceptions"},"Platform Exceptions"),(0,r.kt)("p",null,"You could have dealt with the above error by wrapping the whole step in a ",(0,r.kt)("inlineCode",{parentName:"p"},"tryCatch"),"\nblock. In effect, this is how ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," deals with errors raised in the user code."),(0,r.kt)("p",null,"In contrast, platform issues happen outside of your code, so you can't handle them with\na ",(0,r.kt)("inlineCode",{parentName:"p"},"tryCatch")," block. For instance, an AWS Batch container may fail to start, a server the\nstep runs on may fail abruptly, or your code may get killed if it uses too much memory."),(0,r.kt)("p",null,"Let's simulate a platform issue like these with the following flow that kills itself\nwithout giving R a chance to recover:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'library(metaflow)\n\nstart <- function(self) {\n  library(tools)\n  pskill(Sys.getpid())\n}\n\nend <- function(self) {\n  message(\n    "Error is : ", self$start_failed\n  )\n}\n\nmetaflow("SuicidalFlowR") %>%\n  step(\n    decorator("catch", var = "start_failed"),\n    decorator("retry"),\n    step = "start",\n    r_function = start,\n    next_step = "end"\n  ) %>%\n  step(\n    step = "end",\n    r_function = end\n  ) %>%\n  run()\n')),(0,r.kt)("p",null,"Note that we use both ",(0,r.kt)("inlineCode",{parentName:"p"},"retry")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," above. ",(0,r.kt)("inlineCode",{parentName:"p"},"retry")," attempts to run the step three\ntimes, hoping that the issue is transient. The hope is futile. The task kills itself\nevery time."),(0,r.kt)("p",null,"After all retries are exhausted, ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," takes over and records an exception in\n",(0,r.kt)("inlineCode",{parentName:"p"},"start_failed"),", notifying that all attempts to run ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," failed. Now it is up to the\nsubsequent steps, ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," in this case, to deal with the scenario that ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," produced no\nresults whatsoever. They can choose an alternative code path using the variable assigned\nby ",(0,r.kt)("inlineCode",{parentName:"p"},"catch"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"start_failed")," in this example."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Here is a quick summary of failure handling in Metaflow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"retry")," to deal with transient platform issues. You can do this easily on the\ncommand line with the ",(0,r.kt)("inlineCode",{parentName:"li"},"--with retry")," option."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"retry")," ",(0,r.kt)("strong",{parentName:"li"},"with")," ",(0,r.kt)("inlineCode",{parentName:"li"},"catch")," for extra robustness if you have modified your code to\ndeal with faulty steps which are handled by ",(0,r.kt)("inlineCode",{parentName:"li"},"catch"),"."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"catch")," ",(0,r.kt)("strong",{parentName:"li"},"without")," ",(0,r.kt)("inlineCode",{parentName:"li"},"retry")," to handle steps ",(0,r.kt)("a",{parentName:"li",href:"/v/r/metaflow/failures#how-to-prevent-retries"},"that can't be retried\nsafely"),". It is a good idea to use ",(0,r.kt)("inlineCode",{parentName:"li"},"times=0")," for\n",(0,r.kt)("inlineCode",{parentName:"li"},"retry")," in this case.")))}h.isMDXComponent=!0}}]);