"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["71932"],{14755:function(e,n,t){t.d(n,{ZP:function(){return s},d$:function(){return a}});var i=t(52676),r=t(79938);let a=[];function o(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult was originally named CanBoot, and later renamed to katapult."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After burning the firmware using methods like DFU, you can use commands to update the firmware with one click."}),"\n",(0,i.jsx)(n.li,{children:"Advantage: Quickly double-clicking the reset button or quickly cutting power twice will enter the Katapult firmware, at which point there will be an LED flashing on the mainboard."}),"\n",(0,i.jsx)(n.li,{children:"Katapult firmware can only be used to burn firmware and cannot connect to Klipper!!!"}),"\n",(0,i.jsxs)(n.li,{children:["Katapult firmware supports three connection methods for connecting to the host computer, and the firmwares for these three methods are independent of each other.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CAN connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command, and it has strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RS232 connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can update the firmware using a command, and it has very strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You cannot use a command to update the firmware with one click; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["USB connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: A long data cable is prone to interference, which may lead to disconnection."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function s(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},31417:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>s});var i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/index","title":"index","description":"* SHT36 V2 provides USB and CAN connected Katapult firmware, which can be burned if needed","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/index.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Firmware Burning Instructions"},"sidebar":"tutorialSidebar","previous":{"title":"SHT36 V2\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/en/docs/category/sht36-v2\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"072 Version CAN Firmware Compilation and Burning","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/can072"}}'),r=t("52676"),a=t("79938"),o=t("14755");let s={sidebar_position:1,sidebar_label:"Firmware Burning Instructions"},l="Firmware Burning Instructions",c={},d=[{value:"CAN Firmware Compilation",id:"can-firmware-compilation",level:2},{value:"Katapult Firmware Description",id:"katapult-firmware-description",level:2},...o.d$];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,a.a)(),...e.components},{Button:i,ImageView:s}=n;return!i&&m("Button",!0),!s&&m("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SHT36 V2 provides USB and CAN connected Katapult firmware, which can be burned if needed"}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"./bl",children:"Katapult Firmware Burning"}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"SHT36 V2 is factory pre-flashed with CAN connected Katapult firmware, with a rate of 1M"}),"\n"]})}),"\n",(0,r.jsx)(n.admonition,{title:"Notes",type:"warning",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SHT36 V2 uses three types of main controllers, please do not burn incorrectly otherwise it will not start"}),"\n",(0,r.jsxs)(n.li,{children:["APM 072 and STM 072 please see ",(0,r.jsx)(n.a,{href:"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/can072",title:"Click to jump",children:"072CAN Firmware Burning"})]}),"\n",(0,r.jsxs)(n.li,{children:["STM 103 please see ",(0,r.jsx)(n.a,{href:"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/flash/can103",title:"Click to jump",children:"103CAN Firmware Burning"})]}),"\n"]})}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"firmware-burning-instructions",children:"Firmware Burning Instructions"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Firmware compilation and firmware burning both require the use of a host computer"}),"\n",(0,r.jsx)(n.li,{children:"SHT36 V2 can be connected to the host computer using CAN connection"}),"\n",(0,r.jsxs)(n.li,{children:["CAN needs to be connected using ",(0,r.jsx)(n.code,{children:"XT30(2+2)-F"})]}),"\n",(0,r.jsxs)(n.li,{children:["Below is the ",(0,r.jsx)(n.code,{children:"XT30(2+2)-F"})," data cable style","\n",(0,r.jsx)(s,{image:t(68827).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Motherboard firmware burning needs to be done through Katapult burning Klipper"}),"\n",(0,r.jsx)(n.li,{children:"If it is confirmed that the motherboard has been burned with Katapult, then there is no need for the last burning of Katapult firmware, that is just to prevent the motherboard's Katapult firmware from not being burned successfully"}),"\n",(0,r.jsx)(n.li,{children:"You can quickly press the reset button twice to see if there is an LED flashing on the motherboard, if so, it means the motherboard has entered the Katapult firmware"}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"can-firmware-compilation",children:"CAN Firmware Compilation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SHT36 V2 can only be connected to the host computer using CAN method"}),"\n",(0,r.jsxs)(n.li,{children:["STM 103 please see ",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"./can103",children:"103CAN Firmware Burning"})]}),"\n",(0,r.jsxs)(n.li,{children:["APM 072 and STM 072 please see ",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"./can072",children:"072CAN Firmware Burning"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"katapult-firmware-description",children:"Katapult Firmware Description"}),"\n",(0,r.jsx)(o.ZP,{})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},68827:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/xt30-742629a50a3b92c13e2f62b56ee806a9.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var i=t(75271);let r={},a=i.createContext(r);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);