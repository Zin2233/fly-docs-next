"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["41485"],{49237:function(e,n,t){t.d(n,{ZP:function(){return l},d$:function(){return a}});var i=t(85893),r=t(50065);let a=[];function o(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult was originally named CanBoot, and later renamed to katapult."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After burning the firmware using methods like DFU, you can use commands to update the firmware with one click."}),"\n",(0,i.jsx)(n.li,{children:"Advantage: Quickly double-clicking the reset button or quickly cutting power twice will enter the Katapult firmware, at which point there will be an LED flashing on the mainboard."}),"\n",(0,i.jsx)(n.li,{children:"Katapult firmware can only be used to burn firmware and cannot connect to Klipper!!!"}),"\n",(0,i.jsxs)(n.li,{children:["Katapult firmware supports three connection methods for connecting to the host computer, and the firmwares for these three methods are independent of each other.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CAN connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command, and it has strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RS232 connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can update the firmware using a command, and it has very strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You cannot use a command to update the firmware with one click; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["USB connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: A long data cable is prone to interference, which may lead to disconnection."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},41287:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>s,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-d5/flash/index","title":"index","description":"Before flashing the firmware, please read this section!!!","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-d5/flash/index.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-d5/flash","slug":"/ProductDoc/MainBoard/fly-d/fly-d5/flash/","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Firmware Flash Guide (Must Read)"},"sidebar":"tutorialSidebar","previous":{"title":"D5\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/en/docs/category/d5\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"USB Firmware Burning","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/usb"}}'),r=t("85893"),a=t("50065");t("49237");let o={sidebar_position:1,sidebar_label:"Firmware Flash Guide (Must Read)"},l=void 0,s={},d=[{value:"Determine the Firmware You Need",id:"determine-the-firmware-you-need",level:2}];function c(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components},{Button:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Before flashing the firmware, please read this section!!!"}),"\n",(0,r.jsx)(n.admonition,{title:"Notes",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"D5 has been pre-flashed with Katapult firmware since September 1, 2024."}),"\n",(0,r.jsx)(n.li,{children:"After flashing BL once, there is no need to flash BL again (D5's BL is Katapult firmware)."}),"\n",(0,r.jsx)(n.li,{children:"BL is just a bootloader used to boot Katapult firmware, you still need to flash Klipper firmware."}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"determine-the-firmware-you-need",children:"Determine the Firmware You Need"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Please note that you only need to flash one of the firmwares."}),"\n"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"D5 can be connected to the host computer using the following two methods"}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"./usb",children:"USB Firmware (Most Commonly Used)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: Reliable and stable communication"}),"\n",(0,r.jsx)(n.li,{children:"Disadvantages: Data transmission may be affected if multiple USB devices are present"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"./can",children:"USB Bridge Firmware (Commonly Used When Using CAN Tool Board)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: Can connect multiple devices without occupying USB ports"}),"\n",(0,r.jsxs)(n.li,{children:["Disadvantages: May cause issues like homing timeout when used with ",(0,r.jsx)(n.code,{children:"KlipperScreen"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(67294);let r={},a=i.createContext(r);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);