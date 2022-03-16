"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2189],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3374:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={},s="Installing Metaflow",u={unversionedId:"v/r/getting-started/install",id:"v/r/getting-started/install",title:"Installing Metaflow",description:"MacOS/Linux",source:"@site/docs/v/r/getting-started/install.md",sourceDirName:"v/r/getting-started",slug:"/v/r/getting-started/install",permalink:"/v/r/getting-started/install",editUrl:"https://github.dev/obgibson/metaflow-docs/blob/master/docs/v/r/getting-started/install.md",tags:[],version:"current",frontMatter:{},sidebar:"r",previous:{title:"Get in Touch",permalink:"/v/r/introduction/getting-in-touch"},next:{title:"Development Environment",permalink:"/v/r/getting-started/development-environment"}},p=[{value:"MacOS/Linux",id:"macoslinux",children:[],level:2},{value:"Windows Support",id:"windows-support",children:[],level:2}],c={toc:p};function d(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-metaflow"},"Installing Metaflow"),(0,r.kt)("h2",{id:"macoslinux"},"MacOS/Linux"),(0,r.kt)("p",null,"Metaflow is available as an R package for MacOS and Linux. You can get it from our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow"},"GitHub repository")," ","(","or very soon from CRAN",")",":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'devtools::install_github("Netflix/metaflow", subdir="R")\n')),(0,r.kt)("p",null,"You can finish the installation by running ",(0,r.kt)("inlineCode",{parentName:"p"},"install_metaflow()")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"metaflow::install_metaflow()\n")),(0,r.kt)("p",null,"Behind the scenes, Metaflow relies on the Python Metaflow package, which gets installed in a dedicated conda environment when you execute ",(0,r.kt)("inlineCode",{parentName:"p"},"install_metaflow()"),". You can instead use a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python-guide.org/dev/virtualenvs/"},"Python virtualenv")," as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"install_metaflow(method='virtualenv')\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Metaflow requires ",(0,r.kt)("strong",{parentName:"p"},"Python 3")," since Python 3 has fewer bugs and is better supported than ",(0,r.kt)("a",{parentName:"p",href:"http://pythonclock.org"},"the deprecated Python 2.7"),"."))),(0,r.kt)("p",null,"You can test your installation by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"metaflow::test()\n")),(0,r.kt)("p",null,"If you see the message ",(0,r.kt)("inlineCode",{parentName:"p"},"Your Metaflow installation looks good!")," congratulations! Now you can get started with Metaflow by following the ",(0,r.kt)("a",{parentName:"p",href:"tutorials/"},"tutorial")," or you can ",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow/basics"},"jump straight into the docs"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5588).Z,width:"1406",height:"380"})),(0,r.kt)("h2",{id:"windows-support"},"Windows Support"),(0,r.kt)("p",null,"Metaflow currently doesn't offer native support for Windows. However, if you are using Windows 10, then you can use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/about"},"WSL")," ","(","Windows Subsystem for Linux",")"," to install Metaflow. WSL lets you run a Linux environment inside Windows 10."),(0,r.kt)("p",null,"Follow these instructions to get set up with WSL 2 -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update your Windows 10 distribution to version 2004 or higher."),(0,r.kt)("li",{parentName:"ol"},"Follow ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"these steps")," to install WSL 2. When prompted, choose Ubuntu 18.04 as the Linux distribution."),(0,r.kt)("li",{parentName:"ol"},"Open Ubuntu 18.04 on your workstation, and run the following commands in the terminal to install R and Python -")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9\nsudo echo "deb http://cran.wustl.edu/bin/linux/ubuntu bionic-cran35/" | sudo tee -a /etc/apt/sources.list\nsudo apt update\nsudo apt install r-base r-base-dev\nsudo apt install libcurl4-openssl-dev libxml2-dev libssl-dev\n\nsudo apt-get install python3 python3-pip\necho "alias python=python3; alias pip=pip3" > ~/.bash_aliases\nsource ~/.bash_aliases\n')),(0,r.kt)("p",null,"[","Optional","]"," Set up RStudio IDE. Inside Ubuntu 18.04 on Windows, run the following commands -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"sudo apt install -y r-base r-base-core r-recommended r-base-dev gdebi-core build-essential libcurl4-gnutls-dev libxml2-dev libssl-dev\nwget https://rstudio.org/download/latest/stable/server/bionic/rstudio-server-latest-amd64.deb\nsudo gdebi rstudio-server-latest-amd64.deb\nsudo rstudio-server start\n")),(0,r.kt)("p",null,"You can access RStudio at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8787"},"http://localhost:8787")," in your browser in Windows."),(0,r.kt)("p",null,"To install Metaflow - Inside Ubuntu 18.04 on Windows, open the R console ","(","or your RStudio IDE installed in the previous step",")"," and run the following commands -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"install.packages('devtools', INSTALL_opts = c('--no-lock'))\ndevtools::install_github(\"netflix/metaflow\", subdir = \"R\")\n\nmetaflow::install_metaflow()\nmetaflow::test()\n")))}d.isMDXComponent=!0},5588:function(e,t,n){t.Z=n.p+"assets/images/screenshot-2020-08-04-at-3.16.18-pm-c07670cbae97b1d13eb50a7ae7a16fcb.png"}}]);