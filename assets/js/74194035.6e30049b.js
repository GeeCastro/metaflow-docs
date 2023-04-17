"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="Organizing Results",s={unversionedId:"scaling/tagging",id:"scaling/tagging",title:"Organizing Results",description:"A boring, under-appreciated part of high-quality science (or any project work in",source:"@site/docs/scaling/tagging.md",sourceDirName:"scaling",slug:"/scaling/tagging",permalink:"/scaling/tagging",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/scaling/tagging.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Managing External Libraries",permalink:"/scaling/dependencies"},next:{title:"Production Deployments",permalink:"/production/introduction"}},l={},p=[{value:"Namespaces",id:"namespaces",level:2},{value:"Switching Namespaces",id:"switching-namespaces",level:3},{value:"Global Namespace",id:"global-namespace",level:3},{value:"Production Namespaces",id:"production-namespaces",level:2},{value:"Production tokens",id:"production-tokens",level:3},{value:"Resetting a production namespace",id:"resetting-a-production-namespace",level:3},{value:"Resuming across namespaces",id:"resuming-across-namespaces",level:2},{value:"Tagging",id:"tagging",level:2},{value:"Filtering by tags",id:"filtering-by-tags",level:3},{value:"Tags as Namespaces",id:"tags-as-namespaces",level:3},{value:"Accessing Current IDs in a Flow",id:"accessing-current-ids-in-a-flow",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"organizing-results"},"Organizing Results"),(0,o.kt)("p",null,"A boring, under-appreciated part of high-quality science (or any project work in\ngeneral), is keeping results organized. This is the key to effective collaboration,\nversioning of parallel lines of work, and reproducibility."),(0,o.kt)("p",null,"The good news is that Metaflow does 80% of this work for you without you having to do\nanything. This document explains how Metaflow keeps things organized with a concept\ncalled ",(0,o.kt)("strong",{parentName:"p"},"namespaces")," and how you can optionally make results even neater with ",(0,o.kt)("strong",{parentName:"p"},"tags"),"."),(0,o.kt)("h2",{id:"namespaces"},"Namespaces"),(0,o.kt)("p",null,"As explained in ",(0,o.kt)("a",{parentName:"p",href:"/metaflow/basics"},"Creating Flows"),", Metaflow persists all runs and all\nthe data artifacts they produce. Every run gets a unique run ID, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloFlow/546"),",\nwhich can be used to refer to a specific set of results. You can access these results\nwith the ",(0,o.kt)("a",{parentName:"p",href:"/metaflow/client"},"Client API"),"."),(0,o.kt)("p",null,"Many users can use Metaflow concurrently. Imagine that Anne and Will are collaborating\non a project that consists of two flows, ",(0,o.kt)("inlineCode",{parentName:"p"},"PredictionFlow")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlow"),". As they,\namongst other people, run their versions independently they end up with the following\nruns:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8847).Z,width:"596",height:"418"})),(0,o.kt)("p",null,"Anne could analyze her latest ",(0,o.kt)("inlineCode",{parentName:"p"},"PredictionFlow")," results in a notebook by remembering that\nher latest run is ",(0,o.kt)("inlineCode",{parentName:"p"},"PredictionFlow/8"),". Fortunately, Metaflow makes this even easier\nthanks to ",(0,o.kt)("strong",{parentName:"p"},"namespaces"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5904).Z,width:"686",height:"494"})),(0,o.kt)("p",null,"When Anne runs ",(0,o.kt)("inlineCode",{parentName:"p"},"PredictionFlow"),", her runs are automatically ",(0,o.kt)("strong",{parentName:"p"},"tagged")," with her\nusername, prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"user:"),". By default, when Anne uses the ",(0,o.kt)("a",{parentName:"p",href:"/metaflow/client"},"Client\nAPI")," in a notebook or in a Python script, the API only returns results\nthat are tagged with ",(0,o.kt)("inlineCode",{parentName:"p"},"user:anne"),". Instead of having to remember the exact ID of her\nlatest run, she can simply say:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow\n\nrun = Flow('PredictionFlow').latest_run\n")),(0,o.kt)("p",null,"For Anne, this will return ",(0,o.kt)("inlineCode",{parentName:"p"},"'PredictionFlow/8'"),". For Will, this will return\n",(0,o.kt)("inlineCode",{parentName:"p"},"'PredictionFlow/5'"),"."),(0,o.kt)("h3",{id:"switching-namespaces"},"Switching Namespaces"),(0,o.kt)("p",null,"Namespaces are not about security or access control. They help you to keep results\norganized. During development, organizing results by the user who produced them is a\nsensible default."),(0,o.kt)("p",null,"You can freely explore results produced by other people. In a notebook (for example),\nAnne can write"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow, namespace\n\nnamespace('user:will')\nrun = Flow('PredictionFlow').latest_run\n")),(0,o.kt)("p",null,"to see Will's latest results, in this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"'PredictionFlow/5'"),"."),(0,o.kt)("p",null,"You can also access a specific run given its ID directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow, namespace\n\nrun = Run('PredictionFlow/5')\n")),(0,o.kt)("p",null,"However, this will fail for Anne, since ",(0,o.kt)("inlineCode",{parentName:"p"},"PredictionFlow/5")," is in Will's namespace. An\nimportant feature of namespaces is to make sure that you can't accidentally use someone\nelse's results, which could lead to hard-to-debug, incorrect analyses."),(0,o.kt)("p",null,"If Anne wants to access Will's results, she must do so explicitly by switching to Will's\nnamespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow, namespace\n\nnamespace('user:will')\nrun = Run('PredictionFlow/5')\n")),(0,o.kt)("p",null,"In other words, you can use the Client API freely without having to worry about using\nincorrect results by accident."),(0,o.kt)("p",null,"If you use the Client API in your flows to access results of other flows, you can use\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"--namespace")," flag on the command line to switch between namespaces. This is a\nbetter approach than hardcoding a ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace()")," function call in the code that defines\nyour Metaflow workflow."),(0,o.kt)("h3",{id:"global-namespace"},"Global Namespace"),(0,o.kt)("p",null,"What if you know a run ID, but you don't know whose namespace it belongs to? No worries,\nyou can access all results in the Metaflow universe in the ",(0,o.kt)("strong",{parentName:"p"},"global namespace"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow, namespace\n\nnamespace(None)\nrun = Run('PredictionFlow/5')\n")),(0,o.kt)("p",null,"Setting ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace(None)")," allows you to access all results without limitations. Be\ncareful though: relative references like ",(0,o.kt)("inlineCode",{parentName:"p"},"latest_run")," make little sense in the global\nnamespace since anyone can produce a new run at any time."),(0,o.kt)("h2",{id:"production-namespaces"},"Production Namespaces"),(0,o.kt)("p",null,"During development, namespacing by the username feels natural. However, when you\n",(0,o.kt)("a",{parentName:"p",href:"../production/scheduling-metaflow-flows/introduction/"},"schedule your flow to run\nautomatically"),', runs are not\nrelated to a specific user anymore. It is typical for multiple people to collaborate on\na project that has a canonical production version. It is not obvious which user "owns"\nthe production version.'),(0,o.kt)("p",null,"Moreover, it is critical that you, and all other people, can keep experimenting on the\nproject without having to worry about breaking the production version. If the production\nflow ran in the namespace of any individual, relative references like ",(0,o.kt)("inlineCode",{parentName:"p"},"latest_run")," could\nbreak the production easily as the user keeps executing experimental runs."),(0,o.kt)("p",null,"As a solution, by default the production namespace is made separate from the\nusernamespace:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2256).Z,width:"881",height:"498"})),(0,o.kt)("p",null,"Isolated production namespaces have three main benefits:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Production tokens allow all users of Metaflow to ",(0,o.kt)("strong",{parentName:"li"},"experiment freely")," with any\nproject without having to worry about accidentally breaking a production deployment.\nEven if they ran step-functions create, they could not overwrite a production version\nwithout explicit consent, via a shared production token, by the person who did the\nprevious authorized deployment."),(0,o.kt)("li",{parentName:"ol"},"An isolated production namespace makes it easy to ",(0,o.kt)("strong",{parentName:"li"},"keep production results separate\nfrom any experimental runs")," of the same project running concurrently. You can rest\nassured that when you switch to a production namespace, you will see only results\nrelated to production - nothing more, nothing less."),(0,o.kt)("li",{parentName:"ol"},"By having control over the production namespace, you can ",(0,o.kt)("strong",{parentName:"li"},"alter data that is seen by\nproduction flows"),". For instance, if you have separate training and prediction flows\nin production, the prediction flow can access the previously built model as long as\none exists in the same namespace. By changing the production namespace, you can make\nsure that a new deployment isn't tainted by old results.")),(0,o.kt)("p",null,"If you are a single developer working on a new project, you don't have to do anything\nspecial to deal with production namespaces. You can rely on the default behavior of\n",(0,o.kt)("inlineCode",{parentName:"p"},"step-functions create"),"."),(0,o.kt)("h3",{id:"production-tokens"},"Production tokens"),(0,o.kt)("p",null,"When you deploy a Flow to production for the first time, Metaflow creates a new,\nisolated production namespace for your production flow. This namespace is identified by\na ",(0,o.kt)("strong",{parentName:"p"},"production token"),", which is a random identifier that identifies a production\ndeployment, e.g. production:PredictionFlow3 above. You can examine production results in\na notebook by switching to the production namespace."),(0,o.kt)("p",null,"If another person wants to deploy a new version of the flow to production, they must use\nthe same production token. You, or whoever has the token, are responsible for sharing it\nwith users who are authorized to deploy new versions to production. This manual step\nshould prevent random users from deploying versions to production inadvertently."),(0,o.kt)("p",null,"After you have shared the production token with another person, they can deploy a new\nversion on AWS Step Functions with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python production_flow.py step-functions create --authorize TOKEN_YOU_SHARED_WITH_THEM\n")),(0,o.kt)("p",null,"or on Argo Workflows with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python production_flow.py argo-workflows create --authorize TOKEN_YOU_SHARED_WITH_THEM\n")),(0,o.kt)("p",null,"or on Airflow with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python production_flow.py airflow create --authorize TOKEN_YOU_SHARED_WITH_THEM\n")),(0,o.kt)("p",null,"They need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--authorize")," option only once. Metaflow stores the token for them\nafter the first deployment, so they need to do this only once."),(0,o.kt)("h3",{id:"resetting-a-production-namespace"},"Resetting a production namespace"),(0,o.kt)("p",null,"If you call ",(0,o.kt)("inlineCode",{parentName:"p"},"step-functions create")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"argo-workflow create"),") again, it will deploy an\nupdated version of your code in the existing production namespace of the flow."),(0,o.kt)("p",null,"Sometimes the code has changed so drastically that you want to recreate a fresh\nnamespace for its results. You can do this as follows for AWS Step Functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python production_flow.py step-functions create --generate-new-token\n")),(0,o.kt)("p",null,"and equivalently for Argo Workflows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python production_flow.py argo-workflows create --generate-new-token\n")),(0,o.kt)("p",null,"or Airflow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python production_flow.py airflow create --generate-new-token\n")),(0,o.kt)("p",null,"This will deploy a new version in production using a fresh, empty namespace."),(0,o.kt)("h2",{id:"resuming-across-namespaces"},"Resuming across namespaces"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/metaflow/debugging#how-to-use-the-resume-command"},"The ",(0,o.kt)("inlineCode",{parentName:"a"},"resume")," command")," is smart\nenough to work across production and personal namespaces. You can ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," a production\nworkflow without having to do anything special with namespaces."),(0,o.kt)("p",null,"You can resume runs of other users, and you can resume any production runs. The results\nof your resumed runs are always created in your personal namespace."),(0,o.kt)("h2",{id:"tagging"},"Tagging"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"user:")," tag is assigned by Metaflow automatically. In addition to automatically\nassigned tags, you can add and remove arbitrary tags in objects. Tags are an excellent\nway to add extra annotations to runs, tasks etc., which makes it easier for you and\nother people to find and retrieve results of interest."),(0,o.kt)("p",null,"If you know a tag to be attached before a run starts, you can add it using the ",(0,o.kt)("inlineCode",{parentName:"p"},"run\n--tag")," command line option. You can add multiple tags with multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"--tag")," options. For\ninstance, this will annotate a ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloFlow")," run with a tag ",(0,o.kt)("inlineCode",{parentName:"p"},"crazy_test"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python helloworld.py run --tag crazy_test\n")),(0,o.kt)("p",null,"Often, you may want to add or change tags after a run has completed. In contrast to\nartifacts, tags can be mutated any time: Consider them as mutating interpretations of\nimmutable (arti)facts. You can mutate tags either ",(0,o.kt)("a",{parentName:"p",href:"/metaflow/client#adding-removing-and-replacing-tags"},"using the Client\nAPI")," or the command line."),(0,o.kt)("p",null,"Add a tag on the command line like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python helloworld.py tag add --run-id 2 crazy_test\n")),(0,o.kt)("p",null,"Remove works symmetrically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python helloworld.py tag remove --run-id 2 crazy_test\n")),(0,o.kt)("p",null,"You can see the current set of tags with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python helloworld.py tag list\n")),(0,o.kt)("p",null,"Note that the above command lists also ",(0,o.kt)("a",{parentName:"p",href:"/metaflow/client#system-tags"},"system tags")," that\ncan not be mutated, but they can be used for filtering."),(0,o.kt)("h3",{id:"filtering-by-tags"},"Filtering by tags"),(0,o.kt)("p",null,"You can access runs (or steps or tasks) with a certain tag easily using the Client API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow\nrun = list(Flow('HelloFlow').runs('crazy_test'))[0]\n")),(0,o.kt)("p",null,"This will return the latest run of ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloFlow")," with a tag ",(0,o.kt)("inlineCode",{parentName:"p"},"crazy_test")," in your\nnamespace. Filtering is performed both based on the current ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace()")," and the tag\nfilter."),(0,o.kt)("p",null,"You can also filter by multiple tags:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow\nrun = list(Flow('HelloFlow').runs('crazy_test', 'date:20180301'))[0]\n")),(0,o.kt)("p",null,"This requires that all the tags listed, and the current namespace, are present in the\nobject."),(0,o.kt)("p",null,"You can see the set of tags assigned to an object with the ",(0,o.kt)("inlineCode",{parentName:"p"},".tags")," property. In the\nabove case, ",(0,o.kt)("inlineCode",{parentName:"p"},"run.tags")," would return a set with a string ",(0,o.kt)("inlineCode",{parentName:"p"},"crazy_test")," amongst other\nautomatically assigned tags."),(0,o.kt)("h3",{id:"tags-as-namespaces"},"Tags as Namespaces"),(0,o.kt)("p",null,"Let's consider again the earlier example with Anne and Will. They are working on their\nown versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"PredictionFlow")," but they want to collaborate on ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlow"),". They\ncould add a descriptive tag, say ",(0,o.kt)("inlineCode",{parentName:"p"},"xyz_features"),", to ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlow")," runs."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2179).Z,width:"638",height:"448"})),(0,o.kt)("p",null,"Now, they can easily get the latest results of ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlow")," regardless of the user who\nran the flow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow\nnamespace('xyz_features')\nrun = Flow('FeatureFlow').latest_run\n")),(0,o.kt)("p",null,"This will return ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlow/34")," which happened to be run by Anne. If Will runs the\nflow again, his results will be the latest results in this namespace."),(0,o.kt)("p",null,"We encourage you to use a combination of namespaces, domain-specific tags, and filtering\nby tags to design a workflow that works well for your project."),(0,o.kt)("h2",{id:"accessing-current-ids-in-a-flow"},"Accessing Current IDs in a Flow"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This section contains an overview of ",(0,o.kt)("inlineCode",{parentName:"em"},"current"),". For a complete API, see ",(0,o.kt)("a",{parentName:"em",href:"/api/current"},"the API\nreference for ",(0,o.kt)("inlineCode",{parentName:"a"},"current")),".")),(0,o.kt)("p",null,"Tagging and namespaces, together with the ",(0,o.kt)("a",{parentName:"p",href:"/metaflow/client"},"Client API"),", are the main\nways for accessing results of past runs. Metaflow uses these mechanisms to organize and\nisolate results automatically, so in most cases you don't have to do anything."),(0,o.kt)("p",null,"However, in some cases you may need to deal with IDs explicitly. For instance, if your\nflow interacts with external systems, it is a good idea to inform the external system\nabout the identity of the run, so you can trace back any issues to a specific run. Also\nIDs can come in handy if you need to version externally stored data."),(0,o.kt)("p",null,"For this purpose, Metaflow provides a singleton object ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," that represents the\nidentity of the currently running task. Use it in your ",(0,o.kt)("inlineCode",{parentName:"p"},"FlowSpec")," to retrieve current\nIDs of interest:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from metaflow import FlowSpec, step, current\n\nclass CurrentFlow(FlowSpec):\n\n    @step\n    def start(self):\n        print("flow name: %s" % current.flow_name)\n        print("run id: %s" % current.run_id)\n        print("origin run id: %s" % current.origin_run_id)\n        print("step name: %s" % current.step_name)\n        print("task id: %s" % current.task_id)\n        print("pathspec: %s" % current.pathspec)\n        print("namespace: %s" % current.namespace)\n        print("username: %s" % current.username)\n        print("flow parameters: %s" % str(current.parameter_names))\n        self.next(self.end)\n\n    @step\n    def end(self):\n        print("end has a different step name: %s" % current.step_name)\n        print("end has a different task id: %s" % current.task_id)\n        print("end has a different pathspec: %s" % current.pathspec)\n\nif __name__ == \'__main__\':\n    CurrentFlow()\n')),(0,o.kt)("p",null,"In particular, the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"current.pathspec")," is convenient as an unambiguous\nidentifier of a task. For instance, the above script printed out"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pathspec: CurrentFlow/1/start/550539\n")),(0,o.kt)("p",null,"Now you can inspect this particular task using",(0,o.kt)("a",{parentName:"p",href:"/metaflow/client"}," the Client API")," by\ninstantiating a ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," object as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Task\ntask = Task('CurrentFlow/1/start/550539')\nprint task.stdout\n")),(0,o.kt)("p",null,"This prints out the output of the task identified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"pathspec"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," singleton also provides programmatic access to the CLI option\n",(0,o.kt)("inlineCode",{parentName:"p"},"--origin-run-id")," used by the\n",(0,o.kt)("a",{parentName:"p",href:"/metaflow/debugging#how-to-use-the-resume-command"},"resume")," within your flow code."),(0,o.kt)("p",null,"If a user explicitly overrides the CLI option ",(0,o.kt)("inlineCode",{parentName:"p"},"--origin-run-id"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," singleton\nwould reflect that value."),(0,o.kt)("p",null,"If not, it would be the id of the last invocation of ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," (successful or not)."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This value would remain the same even after multiple successful ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," invocations. If\nyou don't want this behavior, you can always override the CLI option ",(0,o.kt)("inlineCode",{parentName:"p"},"origin-run-id")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," a specific run.")),(0,o.kt)("p",null,"For regular ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," invocations, the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"current.origin_run_id")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,o.kt)("p",null,"Suppose we invoked ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," for the above script to re-run everything from ",(0,o.kt)("inlineCode",{parentName:"p"},"start"),"\nwithout explicitly overriding the CLI option ",(0,o.kt)("inlineCode",{parentName:"p"},"origin-run-id"),", we can see the value\nchosen by Metaflow using the ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," singleton:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python current_flow.py resume start\n")),(0,o.kt)("p",null,"You should see the ",(0,o.kt)("inlineCode",{parentName:"p"},"origin_run_id")," used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," in the output (the exact value\nfor you might be different):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"origin run id: 4\n")))}c.isMDXComponent=!0},8847:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/assets_metaflow_-lpjn0yp7r49jrnxca_5_-lpjryuuy7v5kovmxtsv_namespace1-0868414851a2703b7058dda77294743a.png"},5904:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/assets_metaflow_-lpjn0yp7r49jrnxca_5_-lpjryuvqmspdu9w5imb_namespace2-e6724671478c141360319922e3eb45b5.png"},2179:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/namespace3-9d8e91c0ba47d26b3688658d74447e13.png"},2256:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/namespace4_(3)-9e825aaf633bd9c3557c35b34291c647.png"}}]);