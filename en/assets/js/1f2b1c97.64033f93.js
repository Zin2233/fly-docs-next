"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["82139"],{48326:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"DebugDoc/addon/led","title":"Extending Control to Drive LEDs via Plugin","description":"Original Document","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/addon/led.mdx","sourceDirName":"DebugDoc/addon","slug":"/DebugDoc/addon/led","permalink":"/fly-docs-next/en/docs/DebugDoc/addon/led","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/addon/led.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"debugdocSidebar","previous":{"title":"\u5404\u7C7B\u63D2\u4EF6","permalink":"/fly-docs-next/en/docs/category/\u5404\u7C7B\u63D2\u4EF6"},"next":{"title":"\u5982\u4F55\u63D0\u95EE","permalink":"/fly-docs-next/en/docs/category/\u5982\u4F55\u63D0\u95EE"}}'),o=t("52676"),l=t("79938");let r={sidebar_position:1},s="Extending Control to Drive LEDs via Plugin",a={},c=[{value:"Installation",id:"installation",level:2},{value:"Reference Configuration",id:"reference-configuration",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"extending-control-to-drive-leds-via-plugin",children:"Extending Control to Drive LEDs via Plugin"})}),"\n",(0,o.jsx)(n.p,{children:"Original Document"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"https://github.com/julianschill/klipper-led_effect\n"})}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["Please connect to your host machine via ",(0,o.jsx)(n.strong,{children:"WIFI"})," using ",(0,o.jsx)(n.strong,{children:"SSH tools"})," such as ",(0,o.jsx)(n.strong,{children:"MobaXterm_Personal"}),", and ensure the following points:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Ensure that the Klipper firmware is installed on the host machine."})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Ensure that the logged-in user is the one who has installed Klipper."})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Ensure that your input method is in English."})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Ensure that your host machine can normally search for the device."})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Ensure all the above precautions are followed; otherwise, you cannot proceed to the next step."})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This module can be installed into an existing Klipper installation using the installation script."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"cd ~\ngit clone https://github.com/julianschill/klipper-led_effect.git\ncd klipper-led_effect\n./install-led_effect.sh\n"})}),"\n",(0,o.jsx)(n.h2,{id:"reference-configuration",children:"Reference Configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"[neopixel TP_led]\npin: PB7\nchain_count: 25\n# Number of LEDs\n# Number of LEDs\ncolor_order: GRB\ninitial_RED: 0.4    \ninitial_GREEN: 0.8\ninitial_BLUE: 1\ninitial_WHITE: 0.0\n#66CCFF \n\n[led_effect sb_nozzle_cooling]\nautostart:              false\nframe_rate:             24\nleds:\n    neopixel:TP_led (9,10)\nlayers:\n        breathing  3 1 top (0.0, 0.0, 1.0, 0.1)\n\n[led_effect rainbow]\nleds:\n    neopixel:TP_led\nautostart:                          true\nframe_rate:                         24\nlayers:\n    gradient  0.3  1 add (0.3, 0.0, 0.0),(0.0, 0.3, 0.0),(0.0, 0.0, 0.3)\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},79938:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var i=t(75271);let o={},l=i.createContext(o);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);