"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["14659"],{49237:function(e,n,t){t.d(n,{ZP:function(){return s},d$:function(){return a}});var i=t(85893),r=t(50065);let a=[];function o(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult was originally named CanBoot, and later renamed to katapult."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After burning the firmware using methods like DFU, you can use commands to update the firmware with one click."}),"\n",(0,i.jsx)(n.li,{children:"Advantage: Quickly double-clicking the reset button or quickly cutting power twice will enter the Katapult firmware, at which point there will be an LED flashing on the mainboard."}),"\n",(0,i.jsx)(n.li,{children:"Katapult firmware can only be used to burn firmware and cannot connect to Klipper!!!"}),"\n",(0,i.jsxs)(n.li,{children:["Katapult firmware supports three connection methods for connecting to the host computer, and the firmwares for these three methods are independent of each other.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CAN connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command, and it has strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RS232 connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can update the firmware using a command, and it has very strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You cannot use a command to update the firmware with one click; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["USB connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: A long data cable is prone to interference, which may lead to disconnection."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function s(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28883:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sb2040/sb2040/flash/index","title":"index","description":"* SB2040 comes pre-flashed with Katapult firmware for CAN connection at a rate of 1M","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sb2040/sb2040/flash/index.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sb2040/sb2040/flash","slug":"/ProductDoc/ToolBoard/fly-sb2040/sb2040/flash/","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Firmware Burning Instructions"},"sidebar":"tutorialSidebar","previous":{"title":"SB2040\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/en/docs/category/sb2040\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"CAN Firmware Flashing","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040/flash/can"}}'),r=t("85893"),a=t("50065"),o=t("49237");let s={sidebar_position:1,sidebar_label:"Firmware Burning Instructions"},l="Firmware Burning Instructions",c={},d=[{value:"How to Determine Which Firmware You Need",id:"how-to-determine-which-firmware-you-need",level:2},{value:"Katapult Firmware Instructions",id:"katapult-firmware-instructions",level:2},...o.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,a.a)(),...e.components},{Button:i,ImageView:s}=n;return i||m("Button",!0),s||m("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SB2040 comes pre-flashed with Katapult firmware for CAN connection at a rate of 1M"}),"\n",(0,r.jsx)(n.li,{children:"SB2040 CAN-connected Katapult firmware is available in 500K and 1M rates, which can be burned if needed"}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"./bl",children:"Katapult Firmware Burning"}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"firmware-burning-instructions",children:"Firmware Burning Instructions"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SB2040 can be connected to the host computer via CAN connection"}),"\n",(0,r.jsxs)(n.li,{children:["CAN needs to be connected using ",(0,r.jsx)(n.code,{children:"XT30(2+2)-F"})]}),"\n",(0,r.jsxs)(n.li,{children:["Below is the style of ",(0,r.jsx)(n.code,{children:"XT30(2+2)-F"})," data cable","\n",(0,r.jsx)(s,{image:t(61668).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Mainboard firmware burning needs to be done through Katapult to burn Klipper"}),"\n",(0,r.jsx)(n.li,{children:"If it is confirmed that the mainboard has been burned with Katapult, there is no need to burn the Katapult firmware at the end, which is just a precaution in case the mainboard's Katapult firmware was not burned successfully"}),"\n",(0,r.jsx)(n.li,{children:"You can quickly press the reset button twice to see if there is an LED flashing on the mainboard, if so, it means the mainboard has entered the Katapult firmware"}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-determine-which-firmware-you-need",children:"How to Determine Which Firmware You Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SB2040 can only use CAN to connect to the host computer"}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"./can",children:"CAN Firmware Burning"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Advantage: If ",(0,r.jsx)(n.code,{children:"Katapult"})," firmware is burned, it can update the firmware without touching the mainboard and supports bus connection"]}),"\n",(0,r.jsxs)(n.li,{children:["Disadvantage: Using ",(0,r.jsx)(n.code,{children:"KlipperScreen"})," together may cause positioning timeout and other errors."]}),"\n",(0,r.jsx)(n.li,{children:"Tip: If you need to use CAN, please make sure the host computer supports CAN and needs to be used together with UTOC or a mainboard burned with bridge firmware"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"katapult-firmware-instructions",children:"Katapult Firmware Instructions"}),"\n",(0,r.jsx)(o.ZP,{})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},61668:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/xt30-742629a50a3b92c13e2f62b56ee806a9.webp"},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var i=t(67294);let r={},a=i.createContext(r);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);