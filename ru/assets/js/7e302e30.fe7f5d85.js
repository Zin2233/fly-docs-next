"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["68508"],{17810:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>s});var t=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-7040/wiring","title":"7040\u63A5\u7EBF","description":"\u9A71\u52A8\u677F","source":"@site/docs/ProductDoc/ExtensionBoard/fly-7040/wiring.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-7040","slug":"/ProductDoc/ExtensionBoard/fly-7040/wiring","permalink":"/fly-docs-next/ru/docs/ProductDoc/ExtensionBoard/fly-7040/wiring","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-7040/wiring.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"\u63A5\u7EBF"},"sidebar":"tutorialSidebar","previous":{"title":"\u7B80\u4ECB","permalink":"/fly-docs-next/ru/docs/ProductDoc/ExtensionBoard/fly-7040/"},"next":{"title":"FLY-FilGuard-\u65AD\u5835\u6599\u4F20\u611F\u5668","permalink":"/fly-docs-next/ru/docs/category/fly-filguard-\u65AD\u5835\u6599\u4F20\u611F\u5668"}}'),r=i("52676"),o=i("79938");let s={sidebar_position:2,sidebar_label:"\u63A5\u7EBF"},d="7040\u63A5\u7EBF",l={},c=[{value:"\u9A71\u52A8\u677F",id:"\u9A71\u52A8\u677F",level:2},{value:"\u63A5\u7EBF",id:"\u63A5\u7EBF",level:2},{value:"\u53C2\u8003\u914D\u7F6E",id:"\u53C2\u8003\u914D\u7F6E",level:2},{value:"\u5F00\u673A\u81EA\u52A8\u8F6C\u89E3\u51B3\u65B9\u6CD5",id:"\u5F00\u673A\u81EA\u52A8\u8F6C\u89E3\u51B3\u65B9\u6CD5",level:2},{value:"\u53EF\u9009\u914D\u4EF6\uFF1A\u8FDB\u6C14\u8FC7\u6EE4\u5668",id:"\u53EF\u9009\u914D\u4EF6\u8FDB\u6C14\u8FC7\u6EE4\u5668",level:2}];function a(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{ImageView:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"7040\u63A5\u7EBF",children:"7040\u63A5\u7EBF"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9A71\u52A8\u677F",children:"\u9A71\u52A8\u677F"}),"\n",(0,r.jsx)(t,{image:i(37359).Z,size:"20%",align:"Center"}),"\n",(0,r.jsx)(n.h2,{id:"\u63A5\u7EBF",children:"\u63A5\u7EBF"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u63A5\u5230\u4E3B\u677FPWM\u53E3\uFF0C\u5176\u4ED6\u4E3B\u677F\u9700\u8981\u81EA\u884C\u770B\u5BF9\u5E94\u6587\u6863"}),"\n"]}),"\n",(0,r.jsx)(t,{image:i(37404).Z,size:"80%",align:"Center"}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u8003\u914D\u7F6E",children:"\u53C2\u8003\u914D\u7F6E"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[fan]\n##    Print Cooling Fan \npin: PF8\nmax_power: 0.9\ncycle_time: 0.002\nhardware_pwm: false\nshutdown_speed: 0\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5F00\u673A\u81EA\u52A8\u8F6C\u89E3\u51B3\u65B9\u6CD5",children:"\u5F00\u673A\u81EA\u52A8\u8F6C\u89E3\u51B3\u65B9\u6CD5"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8FD9\u8FB9\u53EA\u7B80\u5355\u8BF4\u660E"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u56FA\u4EF6\u7F16\u8BD1\u65F6\u5019\u6DFB\u52A0\u4E0APWM\u7684\u4FE1\u53F7\u5F15\u811A\uFF0C\u5E76\u4E14\u53CD\u8F6C\u4ED6\u72B6\u6001"}),"\n",(0,r.jsxs)(n.li,{children:["\u6D4B\u8BD5\u4F7F\u7528SUPER8PRO\uFF0C\u5F15\u811A\u4F7F\u7528PF8,\u5728\u56FA\u4EF6\u7F16\u8BD1\u65F6\u5019\u9009\u62E9",(0,r.jsx)(n.code,{children:"GPIO pins to set at micro-controller startup"}),"\u6DFB\u5165",(0,r.jsx)(n.code,{children:"!PF8"}),"\u5373\u53EF"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8BF7\u6CE8\u610F\u586B\u5165\u7684",(0,r.jsx)(n.code,{children:"!"}),"\u662F\u82F1\u6587\u7684\u611F\u53F9\u53F7"]}),"\n",(0,r.jsx)(n.li,{children:"\u5176\u4ED6\u4E3B\u677F\u540C\u7406"}),"\n"]})}),"\n",(0,r.jsx)(t,{image:i(24926).Z,size:"80%",align:"Center"}),"\n",(0,r.jsx)(n.h2,{id:"\u53EF\u9009\u914D\u4EF6\u8FDB\u6C14\u8FC7\u6EE4\u5668",children:"\u53EF\u9009\u914D\u4EF6\uFF1A\u8FDB\u6C14\u8FC7\u6EE4\u5668"}),"\n",(0,r.jsx)(t,{image:i(92501).Z,size:"80%",align:"Center"})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},37359:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/controller_board-73b62dbaef3d30b98079f3478216c2fe.webp"},92501:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/fan-098697201efcd6dba03fd76898c9ddef.webp"},24926:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/klipper-68e17a27fa33b7e423774e756e6e48d9.webp"},37404:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/wiring-597d59b07bf0690ceaa8d90b961514d1.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return s}});var t=i(75271);let r={},o=t.createContext(r);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);