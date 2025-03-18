"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["38402"],{39069:function(n,e,c){c.r(e),c.d(e,{metadata:()=>i,contentTitle:()=>r,default:()=>p,assets:()=>o,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"ProductDoc/SBC/fly-pi-v2/i2c","title":"I2C\u306E\u4F7F\u7528","description":"* \u4E0A\u4F4D\u6A5F\u306E40PIN\u306EI2C\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u4F7F\u7528\u3059\u308B","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-pi-v2/i2c.mdx","sourceDirName":"ProductDoc/SBC/fly-pi-v2","slug":"/ProductDoc/SBC/fly-pi-v2/i2c","permalink":"/fly-docs-next/ja/docs/ProductDoc/SBC/fly-pi-v2/i2c","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-pi-v2/i2c.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":11,"frontMatter":{"sidebar_position":11,"sidebar_label":"I2C\u306E\u4F7F\u7528"},"sidebar":"tutorialSidebar","previous":{"title":"\u30DC\u30FC\u30C9\u642D\u8F0940PIN\u30D4\u30F3\u56F3","permalink":"/fly-docs-next/ja/docs/ProductDoc/SBC/fly-pi-v2/pins"},"next":{"title":"\u4E09\u6B21\u5143\u30E2\u30C7\u30EB\u3068\u56DE\u8DEF\u56F3","permalink":"/fly-docs-next/ja/docs/ProductDoc/SBC/fly-pi-v2/schematic"}}'),t=c("52676"),s=c("79938");let l={sidebar_position:11,sidebar_label:"I2C\u306E\u4F7F\u7528"},r="I2C\u306E\u4F7F\u7528",o={},d=[{value:"FLY Tools\u3067I2C\u3092\u958B\u304F",id:"fly-tools\u3067i2c\u3092\u958B\u304F",level:2},{value:"\u30B1\u30FC\u30D6\u30EB\u63A5\u7D9A\u3068\u691C\u7D22",id:"\u30B1\u30FC\u30D6\u30EB\u63A5\u7D9A\u3068\u691C\u7D22",level:2},{value:"\u8A2D\u5B9A",id:"\u8A2D\u5B9A",level:2}];function A(n){let e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...n.components},{ImageView:i}=e;return!i&&function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"i2c\u306E\u4F7F\u7528",children:"I2C\u306E\u4F7F\u7528"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4E0A\u4F4D\u6A5F\u306E40PIN\u306EI2C\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u4F7F\u7528\u3059\u308B"}),"\n",(0,t.jsx)(e.li,{children:"\u4ECA\u56DE\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u306F\u3001FLY-PI V2LM75\u306EI2C\u30BB\u30F3\u30B5\u30FC\u3068I2C2\u3092\u4F7F\u7528\u3059\u308B"}),"\n",(0,t.jsx)(e.li,{children:"\u6CE8\u610F\uFF1AI2C1\u306F\u4ED6\u306E\u30C7\u30D0\u30A4\u30B9\u306B\u3088\u3063\u3066\u3059\u3067\u306B\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093"}),"\n",(0,t.jsx)(e.li,{children:"\u30B1\u30FC\u30D6\u30EB\u3092\u3057\u3063\u304B\u308A\u3068\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"fly-tools\u3067i2c\u3092\u958B\u304F",children:"FLY Tools\u3067I2C\u3092\u958B\u304F"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Overlays\u3092\u898B\u3064\u3051\u3066\u3001\u305D\u306E\u5F8C\u306Bi2c2\u3068i2c0\u3092\u9078\u629E\u3059\u308B"}),"\n",(0,t.jsx)(e.li,{children:"\u6CE8\u610F\uFF1AI2C1\u306F\u4ED6\u306E\u30C7\u30D0\u30A4\u30B9\u306B\u3088\u3063\u3066\u3059\u3067\u306B\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093"}),"\n",(0,t.jsx)(e.li,{children:"\u4FDD\u5B58\u3057\u3066\u518D\u8D77\u52D5\u3059\u308B"}),"\n"]}),"\n",(0,t.jsx)(i,{image:c(62129).Z,size:"80%",align:"center"}),"\n",(0,t.jsx)(e.h2,{id:"\u30B1\u30FC\u30D6\u30EB\u63A5\u7D9A\u3068\u691C\u7D22",children:"\u30B1\u30FC\u30D6\u30EB\u63A5\u7D9A\u3068\u691C\u7D22"}),"\n",(0,t.jsx)(i,{image:c(60416).Z,size:"80%",align:"center"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"SSH\u3067FLY\u4E0A\u4F4D\u6A5F\u306B\u63A5\u7D9A\u3057\u3001\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5165\u529B\u3059\u308B\u3068\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u51FA\u529B\u304C\u8868\u793A\u3055\u308C\u307E\u3059"}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"I2C0"}),"\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u306E",(0,t.jsx)(e.code,{children:"2"}),"\u3092",(0,t.jsx)(e.code,{children:"0"}),"\u306B\u7F6E\u304D\u63DB\u3048\u308B"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cfg",children:"sudo i2cdetect -y -r 2\n"})}),"\n",(0,t.jsx)(i,{image:c(85400).Z,size:"80%",align:"center"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6CE8\u610F\uFF1A\u6B63\u5E38\u306A\u72B6\u614B\u3067\u3042\u308C\u3070\u3001\u30A8\u30F3\u30BF\u30FC\u30AD\u30FC\u3092\u62BC\u3059\u3068\u3059\u3050\u306B\u3001\u4E0A\u8A18\u306E\u5185\u5BB9\u3068\u30A2\u30C9\u30EC\u30B9\u304C\u8868\u793A\u3055\u308C\u307E\u3059"}),"\n",(0,t.jsx)(e.li,{children:"\u6CE8\u610F\uFF1A\u30A2\u30C9\u30EC\u30B9\u306F\u30E9\u30F3\u30C0\u30E0\u3067\u3059"}),"\n",(0,t.jsx)(e.li,{children:"\u6CE8\u610F\uFF1A\u30B1\u30FC\u30D6\u30EB\u304C\u6B63\u3057\u304F\u63A5\u7D9A\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u9006\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u8A2D\u5B9A\u304C\u958B\u304B\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u307E\u305F\u306F\u30E2\u30B8\u30E5\u30FC\u30EB\u304C\u58CA\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u51FA\u529B\u306F\u7570\u5E38\u306B\u306A\u308A\u307E\u3059"}),"\n",(0,t.jsxs)(e.li,{children:["\u30A2\u30C9\u30EC\u30B9\u306F16\u9032\u6570\u304B\u308910\u9032\u6570\u306B\u5909\u63DB\u3057\u3001",(0,t.jsx)(e.code,{children:"i2c_address:"}),"\u306E\u5F8C\u306B\u8A2D\u5B9A\u3057\u307E\u3059"]}),"\n",(0,t.jsx)(e.li,{children:"\u30D6\u30E9\u30A6\u30B6\u3067\u30AA\u30F3\u30E9\u30A4\u30F3\u306E\u57FA\u6570\u5909\u63DB\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u3066\u5909\u63DB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8A2D\u5B9A",children:"\u8A2D\u5B9A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cfg",children:"[mcu host]\nserial: /tmp/klipper_host_mcu\n\n[temperature_sensor my_sensor]\nsensor_type: LM75\ni2c_address:72\n# #   Default is 72 (0x48). Normal range is 72-79 (0x48-0x4F) and the 3\n# #   low bits of the address are configured via pins on the chip\n# #   (usually with jumpers or hard wired).\ni2c_mcu:host\ni2c_bus:i2c.2\n# i2c_software_scl\n\n"})})]})}function p(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(A,{...n})}):A(n)}},62129:function(n,e,c){c.d(e,{Z:function(){return i}});let i=c.p+"assets/images/i2c-d6ee1021f88b1234f79d6c67811764d9.webp"},85400:function(n,e,c){c.d(e,{Z:function(){return i}});let i="data:image/webp;base64,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"},60416:function(n,e,c){c.d(e,{Z:function(){return i}});let i=c.p+"assets/images/i2c2-4027b0651f3bf35f1c4c17165420063b.webp"},79938:function(n,e,c){c.d(e,{Z:function(){return r},a:function(){return l}});var i=c(75271);let t={},s=i.createContext(t);function l(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);