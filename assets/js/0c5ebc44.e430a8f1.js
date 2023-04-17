"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={},i="Scheduling Metaflow Flows with AWS Step Functions",l={unversionedId:"production/scheduling-metaflow-flows/scheduling-with-aws-step-functions",id:"production/scheduling-metaflow-flows/scheduling-with-aws-step-functions",title:"Scheduling Metaflow Flows with AWS Step Functions",description:"AWS Step Functions is a general-purpose",source:"@site/docs/production/scheduling-metaflow-flows/scheduling-with-aws-step-functions.md",sourceDirName:"production/scheduling-metaflow-flows",slug:"/production/scheduling-metaflow-flows/scheduling-with-aws-step-functions",permalink:"/production/scheduling-metaflow-flows/scheduling-with-aws-step-functions",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/production/scheduling-metaflow-flows/scheduling-with-aws-step-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Scheduling Metaflow Flows with Argo Workflows",permalink:"/production/scheduling-metaflow-flows/scheduling-with-argo-workflows"},next:{title:"Scheduling Metaflow Flows with Apache Airflow",permalink:"/production/scheduling-metaflow-flows/scheduling-with-airflow"}},s={},u=[{value:"Pushing a flow to production",id:"pushing-a-flow-to-production",level:2},{value:"Limiting the number of concurrent tasks",id:"limiting-the-number-of-concurrent-tasks",level:3},{value:"Deploy-time parameters",id:"deploy-time-parameters",level:3},{value:"Scheduling a flow",id:"scheduling-a-flow",level:2},{value:"Reproducing failed production runs",id:"reproducing-failed-production-runs",level:2},{value:"Staging flows for production",id:"staging-flows-for-production",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scheduling-metaflow-flows-with-aws-step-functions"},"Scheduling Metaflow Flows with AWS Step Functions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/step-functions/"},"AWS Step Functions")," is a general-purpose\nworkflow orchestrator - you can ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html"},"read AWS Step Functions documentation to learn all\nabout it"),". If you\njust want to get your flow in production, this document contains everything you need to\nknow."),(0,a.kt)("p",null,"In Metaflow's point of view, the main benefits of AWS Step Functions are the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AWS Step Functions orchestrates workflows expressed as state machines, which are a\nsuperset of directed graphs. This means that we can map Metaflow flows to\ncorresponding AWS Step Functions state machines fully automatically. This gives you\nmuch more detail about what gets executed and how, in contrast to treating Metaflow\nscripts as black boxes."),(0,a.kt)("li",{parentName:"ul"},"AWS Step Functions comes with tooling that is required for running workflows in\nproduction. You can benefit from battle-hardened solutions provided by AWS for\nalerting, monitoring, and scheduling. By using AWS Step Functions your Metaflow flows\ncan integrate seamlessly with the wider AWS offerings.")),(0,a.kt)("p",null,"When running on AWS Step Functions, Metaflow code works exactly as it does locally: No\nchanges are required in the code. All data artifacts produced by steps run on AWS Step\nFunctions are available using the ",(0,a.kt)("a",{parentName:"p",href:"../../metaflow/client"},"Client API"),". All tasks are run\non AWS Batch respecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"@resources")," decorator, as if the ",(0,a.kt)("inlineCode",{parentName:"p"},"@batch")," decorator was\nadded to all steps, as explained in ",(0,a.kt)("a",{parentName:"p",href:"/scaling/remote-tasks/introduction"},"Executing Remote\nTasks"),"."),(0,a.kt)("p",null,"This document describes the basics of AWS Step Functions scheduling. If your project\ninvolves multiple people, multiple workflows, or it is becoming business-critical, check\nout the section around ",(0,a.kt)("a",{parentName:"p",href:"/production/coordinating-larger-metaflow-projects"},"coordinating larger Metaflow\nprojects"),"."),(0,a.kt)("h2",{id:"pushing-a-flow-to-production"},"Pushing a flow to production"),(0,a.kt)("p",null,"Let's use ",(0,a.kt)("a",{parentName:"p",href:"../../metaflow/basics#how-to-define-parameters-for-flows"},"the flow from the section about\nparameters")," as an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, Parameter, step\n\nclass ParameterFlow(FlowSpec):\n    alpha = Parameter('alpha',\n                      help='Learning rate',\n                      default=0.01)\n\n    @step\n    def start(self):\n        print('alpha is %f' % self.alpha)\n        self.next(self.end)\n\n    @step\n    def end(self):\n        print('alpha is still %f' % self.alpha)\n\nif __name__ == '__main__':\n    ParameterFlow()\n")),(0,a.kt)("p",null,"Save this script to a file ",(0,a.kt)("inlineCode",{parentName:"p"},"parameter_flow.py"),". To deploy a version to AWS Step\nFunctions, simply run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python parameter_flow.py --with retry step-functions create\n")),(0,a.kt)("p",null,"This command takes a snapshot of your code in the working directory, as well as the\nversion of Metaflow used and exports the whole package to AWS Step Functions for\nscheduling."),(0,a.kt)("p",null,"It is highly recommended that you ",(0,a.kt)("a",{parentName:"p",href:"../../scaling/failures#retrying-tasks-with-the-retry-decorator"},"enable\nretries")," when deploying\nto AWS Step Functions, which you can do easily with --with retry as shown above.\nHowever, make sure that all your steps are safe to retry before you do this. If some of\nyour steps interact with external services in ways that can't tolerate automatic\nretries, decorate them with retry with times set to zero ","(","times=0",")"," as described in\n",(0,a.kt)("a",{parentName:"p",href:"../../scaling/failures#how-to-prevent-retries"},"How to Prevent Retries"),"."),(0,a.kt)("p",null,"The command will export your workflow to AWS Step Functions. You can also search for the\nflow by name within the AWS Step Functions UI. You should see a visualization of the\nexported flow, like here:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2148).Z,width:"1999",height:"1090"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3781).Z,width:"1999",height:"172"})),(0,a.kt)("p",null,"You can click the orange Start Execution button to execute the flow on AWS Step\nFunctions. It pops up a dialog asking for an input. You can specify your parameters as\nan escaped JSON string with ",(0,a.kt)("inlineCode",{parentName:"p"},"Parameters")," as the key - ","*","*","*","*"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "Parameters" : "{\\"alpha\\": 0.5}"\n}\n')),(0,a.kt)("p",null,"Metaflow automatically maps Parameters of your flow to corresponding parameters on AWS\nStep Functions."),(0,a.kt)("p",null,"After you click Start Execution on the Input dialog, AWS Step Functions starts running\nthe flow:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8343).Z,width:"1999",height:"931"})),(0,a.kt)("p",null,"In this case, the run should succeed without problems. If there were errors, you could\nreproduce them locally as explained in ",(0,a.kt)("a",{parentName:"p",href:"../../metaflow/debugging#reproducing-production-issues-locally"},"Debugging with\nMetaflow"),"."),(0,a.kt)("p",null,"You can trigger the workflow through command line as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python parameter_flow.py step-functions trigger --alpha 0.5\n")),(0,a.kt)("p",null,"If you run ",(0,a.kt)("inlineCode",{parentName:"p"},"step-functions create")," again, it will create a new version of your flow on\nAWS Step Functions. The newest version becomes the production version automatically\n","(","due to the consistency guarantees provided by AWS Step Functions, it might be a couple\nof seconds before this happens",")",". If you want to test on AWS Step Functions without\ninterfering with a production flow, you can change the name of your class, e.g. from\nParameterFlow to ParameterFlowStaging, and ",(0,a.kt)("inlineCode",{parentName:"p"},"step-functions create")," the flow under a new\nname or use the\n",(0,a.kt)("a",{parentName:"p",href:"/production/coordinating-larger-metaflow-projects/#projects-on-aws-step-functions--argo-workflows"},"@project"),"\ndecorator."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"step-functions create")," creates a new isolated ",(0,a.kt)("a",{parentName:"p",href:"../../scaling/tagging#production-namespaces"},"production\nnamespace")," for your production flow. Please\nread ",(0,a.kt)("a",{parentName:"p",href:"../../scaling/tagging"},"Organizing Results")," to learn all about namespace behavior."),(0,a.kt)("p",null,"In case your flow doesn't accept any parameters, and you would like to execute it from\nwithin the AWS Step Functions UI, you would need to pass in the following in the input\ndialog box:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "Parameters" : "{}"\n}\n')),(0,a.kt)("h3",{id:"limiting-the-number-of-concurrent-tasks"},"Limiting the number of concurrent tasks"),(0,a.kt)("p",null,"By default, Metaflow configures AWS Step Functions to execute at most 100 tasks\nconcurrently within a foreach step. This should ensure that most workflows finish\nquickly without overwhelming your AWS Batch queue, the execution backend."),(0,a.kt)("p",null,"If your workflow includes a large foreach and you need results faster, you can increase\nthe default with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--max-workers")," option. For instance, ",(0,a.kt)("inlineCode",{parentName:"p"},"step-functions create\n--max-workers 500")," allows 500 tasks to be executed concurrently for every foreach step."),(0,a.kt)("p",null,"This option is similar to ",(0,a.kt)("a",{parentName:"p",href:"/scaling/remote-tasks/introduction#safeguard-flags"},(0,a.kt)("inlineCode",{parentName:"a"},"run\n--max-workers"))," that is used to\nlimit concurrency outside AWS Step Functions."),(0,a.kt)("h3",{id:"deploy-time-parameters"},"Deploy-time parameters"),(0,a.kt)("p",null,"You can customize AWS Step Functions deployments through Parameters that are evaluated\nat the deployment time, i.e. when ",(0,a.kt)("inlineCode",{parentName:"p"},"step-functions create")," is executed."),(0,a.kt)("p",null,"For instance, you can change the default value of a Parameter based on who deployed the\nworkflow or what Git branch the deployment was executed in. Crucially, the function in\nParameter is evaluated only once during ",(0,a.kt)("inlineCode",{parentName:"p"},"step-functions create")," and not during the\nexecution of the flow."),(0,a.kt)("p",null,"You can run the flow locally as usual. The function inside Parameter is called only once\nwhen the execution starts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, Parameter, step, JSONType\nfrom datetime import datetime\nimport json\n\ndef deployment_info(context):\n    return json.dumps({'who': context.user_name,\n                       'when': datetime.now().isoformat()})\n\nclass DeploymentInfoFlow(FlowSpec):\n    info = Parameter('deployment_info',\n                     type=JSONType,\n                     default=deployment_info)\n\n    @step\n    def start(self):\n        print('This flow was deployed at %s by %s'\\\n              % (self.info['when'], self.info['who']))\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == '__main__':\n    DeploymentInfoFlow()\n")),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"step-functions create")," is called, ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment_info")," is evaluated which captures\nyour username and the time of deployment. This information remains constant on AWS Step\nFunctions, although the user may override the default value."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," object is passed to any function defined in Parameter. It contains various\nfields related to the flow being deployed. By relying on the values passed in context,\nyou can create generic deploy-time functions that can be reused by multiple flows."),(0,a.kt)("h2",{id:"scheduling-a-flow"},"Scheduling a flow"),(0,a.kt)("p",null,"By default, a flow on AWS Step Functions does not run automatically. You need to set up\na trigger to launch the flow when an event occurs."),(0,a.kt)("p",null,"Metaflow provides built-in support for triggering Metaflow flows through time-based\n","(","cron",")"," triggers. Use a time-based trigger if you want to trigger the workflow at a\ncertain time."),(0,a.kt)("p",null,"Time-based triggers are implemented at the FlowSpec-level using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@schedule"),"\ndecorator. This flow is triggered hourly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, schedule, step\nfrom datetime import datetime\n\n@schedule(hourly=True)\nclass HourlyFlow(FlowSpec):\n\n    @step\n    def start(self):\n        now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')\n        print('time is %s' % now)\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == '__main__':\n    HourlyFlow()\n")),(0,a.kt)("p",null,"You can define the schedule with ",(0,a.kt)("inlineCode",{parentName:"p"},"@schedule")," in one of the following ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@schedule(weekly=True)")," runs the workflow on Sundays at midnight."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@schedule(daily=True)")," runs the workflow every day at midnight."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@schedule(hourly=True)")," runs the workflow every hour."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@schedule(cron='0 10 * * ? *')")," runs the workflow at the given\n",(0,a.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/cron"},"Cron")," schedule, in this case at 10am UTC every\nday. You can use the rules defined\n",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eventbridge/latest/userguide/scheduled-events.html"},"here"),"\nto define the schedule for the cron option.")),(0,a.kt)("h2",{id:"reproducing-failed-production-runs"},"Reproducing failed production runs"),(0,a.kt)("p",null,"Let's use ",(0,a.kt)("a",{parentName:"p",href:"/metaflow/debugging#how-to-use-the-resume-command"},(0,a.kt)("inlineCode",{parentName:"a"},"DebugFlow")," from the debugging\nsection")," as an example. The flow\ncontains a bug in the step ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),". When you run it, the failed run will look like this on\nthe AWS Step Functions UI:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9777).Z,width:"1999",height:"180"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6400).Z,width:"1999",height:"1009"})),(0,a.kt)("p",null,"Notice the execution ID of ",(0,a.kt)("inlineCode",{parentName:"p"},"5ca85f96-8508-409d-a5f5-b567db1040c5"),". When running on AWS\nStep Functions, Metaflow uses the AWS Step Functions execution ID (prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"sfn-"),")\nas the run id."),(0,a.kt)("p",null,"The graph visualization shows that step ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," failed, as expected. First, you should\ninspect the logs of the failed step to get an idea of why it failed. You can access AWS\nBatch step logs in the AWS Step Functions UI by looking for the ",(0,a.kt)("inlineCode",{parentName:"p"},"JobId")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),"\nblob that can be accessed by clicking on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Exception")," pane on the right side of the\nUI. You can use this ",(0,a.kt)("inlineCode",{parentName:"p"},"JobId")," in the AWS Batch console to check the job logs. This\n",(0,a.kt)("inlineCode",{parentName:"p"},"JobId")," is also the metaflow task ID for the step."),(0,a.kt)("p",null,"Next, we want to reproduce the above error locally. We do this by resuming the specific\nAWS Step Functions run that failed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python debug.py resume --origin-run-id sfn-5ca85f96-8508-409d-a5f5-b567db1040c5\n")),(0,a.kt)("p",null,"This will reuse the results of the ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," step from the AWS Step Functions run.\nIt will try to rerun the step ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," locally, which fails with the same error as it does in\nproduction."),(0,a.kt)("p",null,"You can fix the error locally as above. In the case of this simple flow, you can run the\nwhole flow locally to confirm that the fix works. After validating the results, you\nwould deploy a new version to production with ",(0,a.kt)("inlineCode",{parentName:"p"},"step-functions create"),"."),(0,a.kt)("p",null,"However, this might not be a feasible approach for complex production flow. For\ninstance, the flow might process large amounts of data that can not be handled in your\nlocal instance. We have better approaches for staging flows for production:"),(0,a.kt)("h3",{id:"staging-flows-for-production"},"Staging flows for production"),(0,a.kt)("p",null,"The easiest approach to test a demanding flow is to run it with AWS Batch. This works\neven with resume:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python debug.py resume --origin-run-id sfn-5ca85f96-8508-409d-a5f5-b567db1040c5 --with batch\n")),(0,a.kt)("p",null,"This will resume your flow and run every step on AWS Batch. When you are ready to test a\nfixed flow end-to-end, just run it as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python debug.py run --with batch\n")),(0,a.kt)("p",null,"Alternatively, you can change the name of the flow temporarily, e.g. from DebugFlow to\nDebugFlowStaging. Then you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"step-functions create")," with the new name, which will\ncreate a separate staging flow on AWS Step Functions. You can also use the\n",(0,a.kt)("a",{parentName:"p",href:"/production/coordinating-larger-metaflow-projects#the-project-decorator"},(0,a.kt)("inlineCode",{parentName:"a"},"@project")),"\ndecorator."),(0,a.kt)("p",null,"You can test the staging flow freely without interfering with the production flow. Once\nthe staging flow runs successfully, you can confidently deploy a new version to\nproduction."))}p.isMDXComponent=!0},9777:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image1-accbb36a62286f898ffc47fe5c0ea1f3.png"},2148:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image2-bfe069afec6d8baa6f2df66eca8b1e33.png"},6400:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image3_(1)-0fa449301236d6773f122388d74743a0.png"},3781:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image5-c0529acd1bc60a0e294d98d68e0dd33b.png"},8343:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image6-6752bb3387ee674b969de12be8053326.png"}}]);