"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["90139"],{96827:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>i,default:()=>p,assets:()=>s,toc:()=>l,frontMatter:()=>a});var o=JSON.parse('{"id":"ProductDoc/MainBoard/fly-c/fly-c8/fan","title":"\u677F\u8F7D5V\u98CE\u6247\u53E3","description":"C8\u677F\u8F7D\u4E86\u4E00\u4E2A5V\u7684\u53EF\u63A7\u63A5\u53E3\uFF0C\u7528\u4E8E\u4E3B\u63A7\u6563\u70ED\uFF0C\u63A5\u7EBF\u65B9\u6CD5\u5982\u4E0B\u56FE","source":"@site/docs/ProductDoc/MainBoard/fly-c/fly-c8/fan.mdx","sourceDirName":"ProductDoc/MainBoard/fly-c/fly-c8","slug":"/ProductDoc/MainBoard/fly-c/fly-c8/fan","permalink":"/fly-docs-next/docs/ProductDoc/MainBoard/fly-c/fly-c8/fan","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-c/fly-c8/fan.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":11,"frontMatter":{"sidebar_position":11,"sidebar_label":"\u4E3B\u63A7\u98CE\u6247"},"sidebar":"tutorialSidebar","previous":{"title":"\u5C4F\u5E55\u63A5\u7EBF\u4E0E\u914D\u7F6E","permalink":"/fly-docs-next/docs/ProductDoc/MainBoard/fly-c/fly-c8/screen"},"next":{"title":"\u677F\u8F7D40PIN\u811A\u56FE","permalink":"/fly-docs-next/docs/ProductDoc/MainBoard/fly-c/fly-c8/pins"}}'),r=n("52676"),c=n("79938");let a={sidebar_position:11,sidebar_label:"\u4E3B\u63A7\u98CE\u6247"},i="\u677F\u8F7D5V\u98CE\u6247\u53E3",s={},l=[{value:"C8\u677F\u8F7D\u4E86\u4E00\u4E2A5V\u7684\u53EF\u63A7\u63A5\u53E3\uFF0C\u7528\u4E8E\u4E3B\u63A7\u6563\u70ED\uFF0C\u63A5\u7EBF\u65B9\u6CD5\u5982\u4E0B\u56FE",id:"c8\u677F\u8F7D\u4E86\u4E00\u4E2A5v\u7684\u53EF\u63A7\u63A5\u53E3\u7528\u4E8E\u4E3B\u63A7\u6563\u70ED\u63A5\u7EBF\u65B9\u6CD5\u5982\u4E0B\u56FE",level:2},{value:"\u53C2\u8003\u914D\u7F6E",id:"\u53C2\u8003\u914D\u7F6E",level:2}];function d(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,c.a)(),...e.components},{ImageView:o}=t;return!o&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u677F\u8F7D5v\u98CE\u6247\u53E3",children:"\u677F\u8F7D5V\u98CE\u6247\u53E3"})}),"\n",(0,r.jsx)(t.h2,{id:"c8\u677F\u8F7D\u4E86\u4E00\u4E2A5v\u7684\u53EF\u63A7\u63A5\u53E3\u7528\u4E8E\u4E3B\u63A7\u6563\u70ED\u63A5\u7EBF\u65B9\u6CD5\u5982\u4E0B\u56FE",children:"C8\u677F\u8F7D\u4E86\u4E00\u4E2A5V\u7684\u53EF\u63A7\u63A5\u53E3\uFF0C\u7528\u4E8E\u4E3B\u63A7\u6563\u70ED\uFF0C\u63A5\u7EBF\u65B9\u6CD5\u5982\u4E0B\u56FE"}),"\n",(0,r.jsx)(o,{image:n(19762).Z,size:"80%",align:"center"}),"\n",(0,r.jsx)(t.h2,{id:"\u53C2\u8003\u914D\u7F6E",children:"\u53C2\u8003\u914D\u7F6E"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cfg",children:"[mcu host]                      # FlyOS\u5DF2\u9ED8\u8BA4\u4E3A\u60A8\u751F\u6210linux MCU\uFF0C\u5B9A\u4E49\u5373\u53EF\u4F7F\u7528           \nserial: /tmp/klipper_host_mcu \n\n[temperature_sensor FLY-\u03C0]      # \u4E0A\u4F4D\u673A\u6E29\u5EA6\nsensor_type: temperature_host\n\n\n[temperature_fan core_fan]      # \u4E0A\u4F4D\u673A\u6563\u70ED\u98CE\u6247\npin: host:gpiochip1/gpio103     # \u4E0A\u4F4D\u673A\u98CE\u6247pin\u811A\nmax_power: 1.0\nsensor_type: temperature_host   # \u8BBE\u7F6E\u4E3A\u4E0A\u4F4D\u673A\u4E3B\u63A7\u6E29\u5EA6\ncontrol:watermark               # \u63A7\u5236\u65B9\u5F0F\ntarget_temp: 48                 # \u4E0A\u4F4D\u673A\u6563\u70ED\u98CE\u6247\u542F\u52A8\u6E29\u5EA6\nmin_temp: 0                     # \u6700\u4F4E\u6E29\u5EA6\uFF0C\u4F4E\u4E8E\u6B64\u6E29\u5EA6\u5C06\u4F1A\u62A5\u9519\nmax_temp: 90                    # \u6700\u9AD8\u6E29\u5EA6\uFF0C\u9AD8\u4E8E\u6B64\u6E29\u5EA6\u5C06\u4F1A\u62A5\u9519\noff_below: 0.10\nkick_start_time: 0.50\nmax_speed: 0.8                  # \u6700\u5927\u8F6C\u901F\uFF0C\u4E3A\u6EE1\u529F\u7387\u8FD0\u8F6C\u65F6\u768480%\nmin_speed: 0.3                  # \u6700\u5C0F\u8F6C\u901F\uFF0C\u4E3A\u6EE1\u529F\u7387\u8FD0\u8F6C\u65F6\u768430%\n"})})]})}function p(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19762:function(e,t,n){n.d(t,{Z:function(){return o}});let o=n.p+"assets/images/corefan-2292074fc1eb47624b75514442e33221.webp"},79938:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return a}});var o=n(75271);let r={},c=o.createContext(r);function a(e){let t=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);