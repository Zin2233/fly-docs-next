"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["29491"],{76667:function(n,e,i){i.r(e),i.d(e,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"ProductDoc/ExtensionBoard/BDsensor-m/marlinpz","title":"Marlin\u7684\u7684\u78B0\u649E\u611F\u5E94","description":"\u6B64\u529F\u80FD\u8981\u6C42BD\u4F20\u611F\u5668\u56FA\u4EF6\u7248\u672C(\u60A8\u53EF\u4EE5\u901A\u8FC7\u53D1\u9001M102 S-1\u6765\u83B7\u53D6\u8BE5\u7248\u672C,\u800C\u975E\u4F20\u611F\u5668\u4E0A\u7684\u786C\u4EF6\u7248\u672C)","source":"@site/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlinpz.mdx","sourceDirName":"ProductDoc/ExtensionBoard/BDsensor-m","slug":"/ProductDoc/ExtensionBoard/BDsensor-m/marlinpz","permalink":"/fly-docs-next/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlinpz","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlinpz.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"Marlin\u81EA\u52A8Z-OFFSET"},"sidebar":"tutorialSidebar","previous":{"title":"klipper\u81EA\u52A8Z-OFFSET","permalink":"/fly-docs-next/docs/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz"},"next":{"title":"BDsensor","permalink":"/fly-docs-next/docs/category/bdsensor"}}'),s=i("85893"),o=i("50065");let t={sidebar_position:4,sidebar_label:"Marlin\u81EA\u52A8Z-OFFSET"},l="Marlin\u7684\u7684\u78B0\u649E\u611F\u5E94",d={},c=[];function a(n){let e={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components},{Button:i}=e;return i||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"marlin\u7684\u7684\u78B0\u649E\u611F\u5E94",children:"Marlin\u7684\u7684\u78B0\u649E\u611F\u5E94"})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"\u6B64\u529F\u80FD\u8981\u6C42BD\u4F20\u611F\u5668\u56FA\u4EF6\u7248\u672C(\u60A8\u53EF\u4EE5\u901A\u8FC7\u53D1\u9001M102 S-1\u6765\u83B7\u53D6\u8BE5\u7248\u672C,\u800C\u975E\u4F20\u611F\u5668\u4E0A\u7684\u786C\u4EF6\u7248\u672C)\n\u4E3AV1.1b\u3001\u5927\u4E8EV1.2b\u6216\u8005\u57282024\u5E743\u6708\u4E4B\u540E\u8D2D\u4E70\u7684,\u5426\u5219\u60A8\u9700\u8981\u4F7F\u7528\u5916\u90E8\u786C\u4EF6\u5DE5\u5177(\u5982STlink)\u5C06\u56FA\u4EF6\u5237\u5165BD\u4F20\u611F\u5668\u3002"})}),"\n",(0,s.jsx)(e.h1,{id:"\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684",children:"\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5728\u6267\u884CG28\u65F6\u81EA\u52A8\u8FDB\u884Cz\u8F74\u504F\u79FB\u6821\u51C6:\u53EF\u4EE5\u5728\u5F52\u4F4D(\u55B7\u5934\u63A5\u89E6\u5E73\u53F0\u540E)\u89E6\u53D1\u2014\u2014\u7136\u540E\u7F13\u6162\u5411\u4E0A\u79FB\u52A8,\u76F4\u81F3\u55B7\u5934\u521A\u597D\u79BB\u5F00\u5E73\u53F0\u2014\u2014\u5C06\u6B64\u4F4D\u7F6E\u8BBE\u5B9A\u4E3Az\u8F74\u76840\u70B9\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"\u597D\u5904",children:"\u597D\u5904"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u81EA\u52A8 z \u8F74\u504F\u79FB\u6821\u51C6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u540C\u65F6\u60A8\u4ECD\u7136\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u7684\u706F\u4E1D\u624B\u52A8\u8C03\u6574 z \u8F74\u504F\u79FB\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u514B\u670D\u6E29\u5EA6\u6F02\u79FB\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6E29\u5EA6\u6F02\u79FB\u4F1A\u6539\u53D8 z \u8F74\u504F\u79FB\uFF0C\u4F46\u4E0D\u4F1A\u6539\u53D8\u5E26\u6709 BD \u4F20\u611F\u5668\u7684\u5E8A\u9762\u7F51\u683C\u9AD8\u5EA6\u56FE\u7684\u8303\u56F4\u3002\u8FD9\u610F\u5473\u7740\u5373\u4F7F\u6E29\u5EA6\u4E0D\u540C\uFF0C\u5E8A\u9762\u7F51\u683C\u4E5F\u662F\u76F8\u540C\u7684\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{title:"\u63D0\u793A",type:"info",children:(0,s.jsxs)(e.p,{children:["\u6B64\u529F\u80FD\u7684\u4EE3\u7801\u5728\u5B98\u65B9Marlin GitHub\u7684\u62C9\u53D6\u8BF7\u6C42\u5217\u8868\u4E2D:",(0,s.jsx)(e.a,{href:"https://github.com/MarlinFirmware/Marlin/pull/27243",children:"https://github.com/MarlinFirmware/Marlin/pull/27243"}),"\n\u6240\u4EE5\u8BF7\u4F7F\u7528\u4EE5\u4E0BMarlin\u4EE3\u7801:",(0,s.jsx)(e.a,{href:"https://github.com/markniu/MarlinPULL/tree/bugfix-2.1.x",children:"https://github.com/markniu/MarlinPULL/tree/bugfix-2.1.x"})]})}),"\n",(0,s.jsx)(e.h1,{id:"\u5982\u4F55\u4F7F\u7528",children:"\u5982\u4F55\u4F7F\u7528"}),"\n",(0,s.jsxs)(e.p,{children:["\u542F\u7528",(0,s.jsx)(e.code,{children:"BD_SENSOR"}),",\u5E76\u5728",(0,s.jsx)(e.code,{children:"configuration.h"}),"\u4E2D\u6DFB\u52A0",(0,s.jsx)(e.code,{children:"#define BD_SENSOR_CONTACT_PROBE"}),"\n\u5B83\u5E94\u8BE5\u5982\u4E0B\u6240\u793A\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"#define BD_SENSOR\n#if ENABLED(BD_SENSOR)\n  #define BD_SENSOR_PROBE_NO_STOP // Probe bed without stopping at each probe point`\n  #define BD_SENSOR_CONTACT_PROBE // it uses nozzle collision sensing to probe while homing`\n#endif\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728configuration.h\u4E2D\u63D0\u9AD8\u63A2\u9488\u7684\u901F\u5EA6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u7075\u654F\u5EA6\u53D6\u51B3\u4E8E\u901F\u5EA6,\u56E0\u6B64\u60A8\u9700\u8981\u8C03\u6574Z\u8F74\u7684\u901F\u5EA6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"homing_speed(\u5F52\u4F4D\u901F\u5EA6)\u548Csecond_homing_speed(\u4E8C\u6B21\u5F52\u4F4D\u901F\u5EA6)\u5E94\u57283\u523010\u7684\u8303\u56F4\u5185,\u8FD9\u91CC\u662FZ\u8F74\u63A2\u9488\u8FDB\u7ED9\u901F\u5EA6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4F8B\u5982\uFF1A"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:" #define Z_PROBE_FEEDRATE_FAST  (5*60)\n #define Z_PROBE_FEEDRATE_SLOW  (5*60)\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5728Configuration_adv.h\u4E2D\u5C06Z\u8F74\u7684\u5F52\u4F4D\u62AC\u5347\u589E\u52A0\u5230\u5927\u4E8E4\u6BEB\u7C73\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"#define HOMING_BUMP_MM      { 5, 5, 5 } \n"})}),"\n",(0,s.jsx)(e.h1,{id:"\u6D4B\u8BD5\u5F52\u4F4D",children:"\u6D4B\u8BD5\u5F52\u4F4D"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u8BF7\u53D1\u9001\u5927\u7EA610\u6B21",(0,s.jsx)(e.code,{children:"G28 Z"}),"\u6307\u4EE4\uFF0C\u6216\u8005\u4F7F\u7528",(0,s.jsx)(e.code,{children:"M48"}),"\u6307\u4EE4\uFF0C\u4EE5\u67E5\u770B\u5176\u662F\u5426\u7A33\u5B9A\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://www.youtube.com/watch?v=DzmGyJNS9bY",children:"\u6F14\u793A\u89C6\u9891"})]})}function h(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},50065:function(n,e,i){i.d(e,{Z:function(){return l},a:function(){return t}});var r=i(67294);let s={},o=r.createContext(s);function t(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);