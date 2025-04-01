"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["54392"],{19538:function(n,e,i){i.r(e),i.d(e,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"ProductDoc/ExtensionBoard/bd-sensor/marlinpz","title":"Marlin\u306E\u306E\u885D\u7A81\u691C\u77E5","description":"\u3053\u306E\u6A5F\u80FD\u306FBD\u30BB\u30F3\u30B5\u30FC\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u30D0\u30FC\u30B8\u30E7\u30F3\uFF08\u3053\u308C\u306FM102 S-1\u3092\u9001\u4FE1\u3059\u308B\u3053\u3068\u3067\u53D6\u5F97\u3067\u304D\u307E\u3059\u3001\u30BB\u30F3\u30B5\u30FC\u4E0A\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u306F\u3042\u308A\u307E\u305B\u3093\uFF09\u304CV1.1b\u4EE5\u4E0A\u3001\u307E\u305F\u306F2024\u5E743\u6708\u4EE5\u964D\u306B\u8CFC\u5165\u3055\u308C\u305F\u5834\u5408\u306B\u5FC5\u8981\u3067\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u3001\u5916\u90E8\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30C4\u30FC\u30EB\uFF08\u4F8B\u3048\u3070STlink\uFF09\u3092\u4F7F\u7528\u3057\u3066\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u3092BD\u30BB\u30F3\u30B5\u30FC\u306B\u713C\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/bd-sensor/marlinpz.mdx","sourceDirName":"ProductDoc/ExtensionBoard/bd-sensor","slug":"/ProductDoc/ExtensionBoard/bd-sensor/marlinpz","permalink":"/fly-docs-next/ja/docs/ProductDoc/ExtensionBoard/bd-sensor/marlinpz","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/bd-sensor/marlinpz.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"Marlin\u81EA\u52D5Z-OFFSET"},"sidebar":"tutorialSidebar","previous":{"title":"klipper\u81EA\u52D5Z-OFFSET","permalink":"/fly-docs-next/ja/docs/ProductDoc/ExtensionBoard/bd-sensor/klipperpz"},"next":{"title":"AirClick \uD83D\uDD25","permalink":"/fly-docs-next/ja/docs/category/airclick-"}}'),s=i("74132"),t=i("94551");let o={sidebar_position:4,sidebar_label:"Marlin\u81EA\u52D5Z-OFFSET"},d="Marlin\u306E\u306E\u885D\u7A81\u691C\u77E5",l={},c=[];function a(n){let e={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components},{Button:i}=e;return i||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"marlin\u306E\u306E\u885D\u7A81\u691C\u77E5",children:"Marlin\u306E\u306E\u885D\u7A81\u691C\u77E5"})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"\u3053\u306E\u6A5F\u80FD\u306FBD\u30BB\u30F3\u30B5\u30FC\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u30D0\u30FC\u30B8\u30E7\u30F3\uFF08\u3053\u308C\u306FM102 S-1\u3092\u9001\u4FE1\u3059\u308B\u3053\u3068\u3067\u53D6\u5F97\u3067\u304D\u307E\u3059\u3001\u30BB\u30F3\u30B5\u30FC\u4E0A\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u306F\u3042\u308A\u307E\u305B\u3093\uFF09\u304CV1.1b\u4EE5\u4E0A\u3001\u307E\u305F\u306F2024\u5E743\u6708\u4EE5\u964D\u306B\u8CFC\u5165\u3055\u308C\u305F\u5834\u5408\u306B\u5FC5\u8981\u3067\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u3001\u5916\u90E8\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30C4\u30FC\u30EB\uFF08\u4F8B\u3048\u3070STlink\uFF09\u3092\u4F7F\u7528\u3057\u3066\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u3092BD\u30BB\u30F3\u30B5\u30FC\u306B\u713C\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"})}),"\n",(0,s.jsx)(e.h1,{id:"\u305D\u306E\u4ED5\u7D44\u307F",children:"\u305D\u306E\u4ED5\u7D44\u307F"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"G28\u5B9F\u884C\u6642\u306B\u81EA\u52D5\u7684\u306Bz\u8EF8\u30AA\u30D5\u30BB\u30C3\u30C8\u306E\u8ABF\u6574\u3092\u884C\u3046: \u30DB\u30FC\u30E0\u4F4D\u7F6E\uFF08\u30CE\u30BA\u30EB\u304C\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306B\u63A5\u89E6\u3057\u305F\u5F8C\uFF09\u3067\u30C8\u30EA\u30AC\u30FC\u3057\u2014\u2014\u305D\u306E\u5F8C\u3086\u3063\u304F\u308A\u3068\u4E0A\u6607\u3057\u3001\u30CE\u30BA\u30EB\u304C\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u304B\u3089\u308F\u305A\u304B\u306B\u96E2\u308C\u308B\u4F4D\u7F6E\u2014\u2014\u3053\u308C\u3092z\u8EF8\u306E0\u70B9\u3068\u3057\u3066\u8A2D\u5B9A\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"\u5229\u70B9",children:"\u5229\u70B9"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u81EA\u52D5z\u8EF8\u30AA\u30D5\u30BB\u30C3\u30C8\u306E\u8ABF\u6574\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u305D\u308C\u3067\u3082\u7570\u306A\u308B\u30D5\u30A3\u30E9\u30E1\u30F3\u30C8\u306B\u5BFE\u3057\u3066\u624B\u52D5\u3067z\u8EF8\u30AA\u30D5\u30BB\u30C3\u30C8\u3092\u8ABF\u6574\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6E29\u5EA6\u5909\u52D5\u306B\u5BFE\u5FDC\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6E29\u5EA6\u5909\u52D5\u306Fz\u8EF8\u30AA\u30D5\u30BB\u30C3\u30C8\u3092\u5909\u3048\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u304C\u3001BD\u30BB\u30F3\u30B5\u30FC\u3092\u4F7F\u7528\u3057\u305F\u30D9\u30C3\u30C9\u30DE\u30C3\u30D4\u30F3\u30B0\u306E\u7BC4\u56F2\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002\u3064\u307E\u308A\u3001\u6E29\u5EA6\u304C\u7570\u306A\u3063\u3066\u3082\u30D9\u30C3\u30C9\u30DE\u30C3\u30D4\u30F3\u30B0\u306F\u540C\u3058\u3067\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{title:"\u30D2\u30F3\u30C8",type:"info",children:(0,s.jsxs)(e.p,{children:["\u3053\u306E\u6A5F\u80FD\u306E\u30B3\u30FC\u30C9\u306F\u516C\u5F0FMarlin GitHub\u306E\u30D7\u30EB\u30EA\u30AF\u30A8\u30B9\u30C8\u30EA\u30B9\u30C8\u306B\u3042\u308A\u307E\u3059: ",(0,s.jsx)(e.a,{href:"https://github.com/MarlinFirmware/Marlin/pull/27243",children:"https://github.com/MarlinFirmware/Marlin/pull/27243"}),"\n\u3067\u3059\u306E\u3067\u4EE5\u4E0B\u306EMarlin\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044: ",(0,s.jsx)(e.a,{href:"https://github.com/markniu/MarlinPULL/tree/bugfix-2.1.x",children:"https://github.com/markniu/MarlinPULL/tree/bugfix-2.1.x"})]})}),"\n",(0,s.jsx)(e.h1,{id:"\u4F7F\u7528\u65B9\u6CD5",children:"\u4F7F\u7528\u65B9\u6CD5"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"BD_SENSOR"}),"\u3092\u6709\u52B9\u306B\u3057\u3001",(0,s.jsx)(e.code,{children:"configuration.h"}),"\u306B",(0,s.jsx)(e.code,{children:"#define BD_SENSOR_CONTACT_PROBE"}),"\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002\n\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8868\u793A\u3055\u308C\u308B\u306F\u305A\u3067\u3059\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"#define BD_SENSOR\n#if ENABLED(BD_SENSOR)\n  #define BD_SENSOR_PROBE_NO_STOP // \u63A2\u91DD\u3092\u505C\u6B62\u305B\u305A\u306B\u30D9\u30C3\u30C9\u3092\u30D7\u30ED\u30FC\u30D6\u3059\u308B\n  #define BD_SENSOR_CONTACT_PROBE // \u30DB\u30FC\u30E0\u4E2D\u306B\u30CE\u30BA\u30EB\u306E\u885D\u7A81\u691C\u77E5\u3092\u4F7F\u7528\u3057\u3066\u30D7\u30ED\u30FC\u30D6\u3059\u308B\n#endif\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"configuration.h"}),"\u3067\u30D7\u30ED\u30FC\u30D6\u306E\u901F\u5EA6\u3092\u4E0A\u3052\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u30BB\u30F3\u30B7\u30D3\u30EA\u30C6\u30A3\u306F\u901F\u5EA6\u306B\u3088\u308A\u307E\u3059\u306E\u3067\u3001Z\u8EF8\u306E\u901F\u5EA6\u3092\u8ABF\u6574\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"home_speed\uFF08\u30DB\u30FC\u30E0\u901F\u5EA6\uFF09\u3068second_home_speed\uFF08\u30BB\u30AB\u30F3\u30C9\u30DB\u30FC\u30E0\u901F\u5EA6\uFF09\u306F3\u301C10\u306E\u7BC4\u56F2\u5185\u306B\u3042\u308A\u3001\u3053\u3053\u304CZ\u8EF8\u30D7\u30ED\u30FC\u30D6\u30D5\u30A3\u30FC\u30C9\u901F\u5EA6\u3067\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4F8B\uFF1A"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:" #define Z_PROBE_FEEDRATE_FAST  (5*60)\n #define Z_PROBE_FEEDRATE_SLOW  (5*60)\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Configuration_adv.h"}),"\u3067Z\u8EF8\u306E\u30DB\u30FC\u30E0\u30EA\u30D5\u30C8\u30924\u30DF\u30EA\u30E1\u30FC\u30C8\u30EB\u3088\u308A\u5927\u304D\u304F\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"#define HOMING_BUMP_MM      { 5, 5, 5 } \n"})}),"\n",(0,s.jsx)(e.h1,{id:"\u30DB\u30FC\u30E0\u30C6\u30B9\u30C8",children:"\u30DB\u30FC\u30E0\u30C6\u30B9\u30C8"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5927\u7D0410\u56DE\u306E",(0,s.jsx)(e.code,{children:"G28 Z"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u9001\u4FE1\u3059\u308B\u304B\u3001",(0,s.jsx)(e.code,{children:"M48"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u305D\u308C\u304C\u5B89\u5B9A\u3057\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://www.youtube.com/watch?v=DzmGyJNS9bY",children:"\u30C7\u30E2\u30F3\u30B9\u30C8\u30EC\u30FC\u30B7\u30E7\u30F3\u30D3\u30C7\u30AA"})]})}function h(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},94551:function(n,e,i){i.d(e,{Z:function(){return d},a:function(){return o}});var r=i(39546);let s={},t=r.createContext(s);function o(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);