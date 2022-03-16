"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2687],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4750:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="Scheduling Metaflow Flows",u={unversionedId:"going-to-production-with-metaflow/scheduling-metaflow-flows",id:"going-to-production-with-metaflow/scheduling-metaflow-flows",title:"Scheduling Metaflow Flows",description:"A key feature of Metaflow is to make it easy to take machine learning pipelines from prototyping to production. This sentence and a number of other Metaflow documents use the word production casually. What do we actually mean by it?",source:"@site/docs/going-to-production-with-metaflow/scheduling-metaflow-flows.md",sourceDirName:"going-to-production-with-metaflow",slug:"/going-to-production-with-metaflow/scheduling-metaflow-flows",permalink:"/going-to-production-with-metaflow/scheduling-metaflow-flows",editUrl:"https://github.dev/obgibson/metaflow-docs/blob/master/docs/going-to-production-with-metaflow/scheduling-metaflow-flows.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Organizing Results",permalink:"/metaflow/tagging"},next:{title:"Coordinating Larger Metaflow Projects",permalink:"/going-to-production-with-metaflow/coordinating-larger-metaflow-projects"}},c=[{value:"Why AWS Step Functions?",id:"why-aws-step-functions",children:[],level:2},{value:"Pushing a flow to production",id:"pushing-a-flow-to-production",children:[{value:"Limiting the number of concurrent tasks",id:"limiting-the-number-of-concurrent-tasks",children:[],level:3},{value:"Deploy-time parameters",id:"deploy-time-parameters",children:[],level:3}],level:2},{value:"Scheduling a flow",id:"scheduling-a-flow",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scheduling-metaflow-flows"},"Scheduling Metaflow Flows"),(0,r.kt)("p",null,"A key feature of Metaflow is to make it easy to take machine learning pipelines from prototyping to production. This sentence and a number of other Metaflow documents use the word production casually. What do we actually mean by it?"),(0,r.kt)("p",null,"For Machine Learning Infrastructure, production has a simple and unexciting meaning: In production, the flow should run without any human intervention. If your flow produced valid results during development, we want it to produce equally valid results in production - just without anyone managing it manually."),(0,r.kt)("p",null,"Eventually, something will fail in production, and human intervention is needed. In these cases, we want to minimize the amount of human intervention and the time spent on debugging."),(0,r.kt)("p",null,"If your flow is built with Metaflow best practices, making it run automatically in production should not be a big deal."),(0,r.kt)("p",null,"By this definition, you can not run your flow with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python helloworld.py run\n")),(0,r.kt)("p",null,"in production as it requires someone to type the command manually. A classic solution is to have cron or another similar time-based scheduler to run the command automatically at a set schedule."),(0,r.kt)("p",null,"It is not easy to use cron as a production scheduler. What if the instance running cron fails? If the scheduled command fails, how do I know it has failed? How do you see its error logs? Does my cron instance have enough capacity to handle another command? And most importantly, how do I orchestrate schedules of multiple commands so that their mutual dependencies are handled correctly?"),(0,r.kt)("h2",{id:"why-aws-step-functions"},"Why AWS Step Functions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/step-functions/"},"AWS Step Functions")," is a general-purpose workflow orchestrator that can answer these questions. If you are curious, you can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html"},"read AWS Step Functions documentation to learn all about it"),". If you just want to get your flow in production, this document contains everything you need to know."),(0,r.kt)("p",null,"In Metaflow's point of view, the main benefits of AWS Step Functions are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWS Step Functions orchestrates workflows expressed as state machines, which are a superset of directed graphs. This means that we can map Metaflow flows to corresponding AWS Step Functions state machines fully automatically. This gives you much more detail about what gets executed and how, in contrast to treating Metaflow scripts as black boxes."),(0,r.kt)("li",{parentName:"ul"},"AWS Step Functions comes with tooling that is required for running workflows in production. You can benefit from battle-hardened solutions provided by AWS for alerting, monitoring, and scheduling. By using AWS Step Functions your Metaflow flows can integrate seamlessly with the wider AWS offerings.")),(0,r.kt)("p",null,"When running on AWS Step Functions, Metaflow code works exactly as it does locally: No changes are required in the code. All data artifacts produced by steps run on AWS Step Functions are available using the ",(0,r.kt)("a",{parentName:"p",href:"../metaflow/client"},"Client API"),". All tasks are run on AWS Batch respecting the resources decorator, as explained in ",(0,r.kt)("a",{parentName:"p",href:"../metaflow/scaling"},"Scaling Up and Out"),"."),(0,r.kt)("p",null,"This document describes the basics of AWS Step Functions scheduling. If your project involves multiple people, multiple workflows, or it is becoming business-critical, we will soon introduce a new feature around coordinating larger Metaflow projects."),(0,r.kt)("h2",{id:"pushing-a-flow-to-production"},"Pushing a flow to production"),(0,r.kt)("p",null,"Let's use ",(0,r.kt)("a",{parentName:"p",href:"../metaflow/basics#how-to-define-parameters-for-flows"},"the flow from the section about parameters")," as an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, Parameter, step\n\nclass ParameterFlow(FlowSpec):\n    alpha = Parameter('alpha',\n                      help='Learning rate',\n                      default=0.01)\n\n    @step\n    def start(self):\n        print('alpha is %f' % self.alpha)\n        self.next(self.end)\n\n    @step\n    def end(self):\n        print('alpha is still %f' % self.alpha)\n\nif __name__ == '__main__':\n    ParameterFlow()\n")),(0,r.kt)("p",null,"Save this script to a file ",(0,r.kt)("inlineCode",{parentName:"p"},"parameter_flow.py"),". To deploy a version to AWS Step Functions, simply run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python parameter_flow.py --with retry step-functions create\n")),(0,r.kt)("p",null,"This command takes a snapshot of your code in the working directory, as well as the version of Metaflow used and exports the whole package to AWS Step Functions for scheduling."),(0,r.kt)("p",null,"It is highly recommended that you ",(0,r.kt)("a",{parentName:"p",href:"../metaflow/failures#retrying-tasks-with-the-retry-decorator"},"enable retries")," when deploying to AWS Step Functions, which you can do easily with --with retry as shown above. However, make sure that all your steps are safe to retry before you do this. If some of your steps interact with external services in ways that can't tolerate automatic retries, decorate them with retry with times set to zero ","(","times=0",")"," as described in ",(0,r.kt)("a",{parentName:"p",href:"../metaflow/failures#how-to-prevent-retries"},"How to Prevent Retries"),"."),(0,r.kt)("p",null,"The command will export your workflow to AWS Step Functions. You can also search for the flow by name within the AWS Step Functions UI. You should see a visualization of the exported flow, like here:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1365).Z,width:"1999",height:"1090"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4709).Z,width:"1999",height:"172"})),(0,r.kt)("p",null,"You can click the orange Start Execution button to execute the flow on AWS Step Functions. It pops up a dialog asking for an input. You can specify your parameters as an escaped JSON string with ",(0,r.kt)("inlineCode",{parentName:"p"},"Parameters")," as the key - ","*","*","*","*"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "Parameters" : "{\\"alpha\\": 0.5}"\n}\n')),(0,r.kt)("p",null,"Metaflow automatically maps Parameters of your flow to corresponding parameters on AWS Step Functions."),(0,r.kt)("p",null,"After you click Start Execution on the Input dialog, AWS Step Functions starts running the flow:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1768).Z,width:"1999",height:"931"})),(0,r.kt)("p",null,"In this case, the run should succeed without problems. If there were errors, you could reproduce them locally as explained in ",(0,r.kt)("a",{parentName:"p",href:"../metaflow/debugging#reproducing-production-issues-locally"},"Debugging with Metaflow"),"."),(0,r.kt)("p",null,"You can trigger the workflow through command line as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python parameter_flow.py step-functions trigger --alpha 0.5\n")),(0,r.kt)("p",null,"If you run ",(0,r.kt)("inlineCode",{parentName:"p"},"step-functions create")," again, it will create a new version of your flow on AWS Step Functions. The newest version becomes the production version automatically ","(","due to the consistency guarantees provided by AWS Step Functions, it might be a couple of seconds before this happens",")",". If you want to test on AWS Step Functions without interfering with a production flow, you can change the name of your class, e.g. from ParameterFlow to ParameterFlowStaging, and ",(0,r.kt)("inlineCode",{parentName:"p"},"step-functions create")," the flow under a new name."),(0,r.kt)("p",null,"Note that step-functions create creates a new isolated ",(0,r.kt)("a",{parentName:"p",href:"../metaflow/tagging#production-namespaces"},"production namespace")," for your production flow. Please read ",(0,r.kt)("a",{parentName:"p",href:"../metaflow/tagging"},"Organizing Results")," to learn all about namespace behavior."),(0,r.kt)("p",null,"In case your flow doesn't accept any parameters, and you would like to execute it from within the AWS Step Functions UI, you would need to pass in the following in the input dialog box:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "Parameters" : "{}"\n}\n')),(0,r.kt)("h3",{id:"limiting-the-number-of-concurrent-tasks"},"Limiting the number of concurrent tasks"),(0,r.kt)("p",null,"By default, Metaflow configures AWS Step Functions to execute at most 100 tasks concurrently within a foreach step. This should ensure that most workflows finish quickly without overwhelming your AWS Batch queue, the execution backend."),(0,r.kt)("p",null,"If your workflow includes a large foreach and you need results faster, you can increase the default with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-workers")," option. For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"step-functions create --max-workers 500")," allows 500 tasks to be executed concurrently for every foreach step."),(0,r.kt)("p",null,"This option is similar to ",(0,r.kt)("a",{parentName:"p",href:"../metaflow/scaling#safeguard-flags"},(0,r.kt)("inlineCode",{parentName:"a"},"run --max-workers"))," that is used to limit concurrency outside AWS Step Functions."),(0,r.kt)("h3",{id:"deploy-time-parameters"},"Deploy-time parameters"),(0,r.kt)("p",null,"You can customize AWS Step Functions deployments through Parameters that are evaluated at the deploy time, i.e. when step-functions create is executed."),(0,r.kt)("p",null,"For instance, you can change the default value of a Parameter based on who deployed the workflow or what Git branch the deployment was executed in. Crucially, the function in Parameter is evaluated only once during step-functions create and not during the execution of the flow."),(0,r.kt)("p",null,"You can run the flow locally as usual. The function inside Parameter is called only once when the execution starts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, Parameter, step, JSONType\nfrom datetime import datetime\nimport json\n\ndef deployment_info(context):\n    return json.dumps({'who': context.user_name,\n                       'when': datetime.now().isoformat()})\n\nclass DeploymentInfoFlow(FlowSpec):\n    info = Parameter('deployment_info',\n                     type=JSONType,\n                     default=deployment_info)\n\n    @step\n    def start(self):\n        print('This flow was deployed at %s by %s'\\\n              % (self.info['when'], self.info['who']))\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == '__main__':\n    DeploymentInfoFlow()\n")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"step-functions create")," is called, ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment_info")," is evaluated which captures your user name and the time of deployment. This information remains constant on AWS Step Functions, although the user may override the default value."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," object is passed to any function defined in Parameter. It contains various fields related to the flow being deployed. By relying on the values passed in context, you can create generic deploy-time functions that can be reused by multiple flows."),(0,r.kt)("h2",{id:"scheduling-a-flow"},"Scheduling a flow"),(0,r.kt)("p",null,"By default, a flow on AWS Step Functions does not run automatically. You need to set up a trigger to launch the flow when an event occurs."),(0,r.kt)("p",null,"Metaflow provides built-in support for triggering Metaflow flows through time-based ","(","cron",")"," triggers. Use a time-based trigger if you want to trigger the workflow at a certain time."),(0,r.kt)("p",null,"Time-based triggers are implemented at the FlowSpec-level using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@schedule")," decorator. This flow is triggered hourly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, schedule, step\nfrom datetime import datetime\n\n@schedule(hourly=True)\nclass HourlyFlow(FlowSpec):\n\n    @step\n    def start(self):\n        now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')\n        print('time is %s' % now)\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == '__main__':\n    HourlyFlow()\n")),(0,r.kt)("p",null,"You can define the schedule with ",(0,r.kt)("inlineCode",{parentName:"p"},"@schedule")," in one of the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@schedule(weekly=True)")," runs the workflow on Sundays at midnight."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@schedule(daily=True)")," runs the workflow every day at midnight."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@schedule(hourly=True)")," runs the workflow every hour."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@schedule(cron='0 10 * * ? *')")," runs the workflow at the given ",(0,r.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/cron"},"Cron")," schedule, in this case at 10am UTC every day. You can use the rules defined ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eventbridge/latest/userguide/scheduled-events.html"},"here")," to define the schedule for the cron option.")))}d.isMDXComponent=!0},1365:function(e,t,n){t.Z=n.p+"assets/images/image2-bfe069afec6d8baa6f2df66eca8b1e33.png"},4709:function(e,t,n){t.Z=n.p+"assets/images/image5-c0529acd1bc60a0e294d98d68e0dd33b.png"},1768:function(e,t,n){t.Z=n.p+"assets/images/image6-6752bb3387ee674b969de12be8053326.png"}}]);