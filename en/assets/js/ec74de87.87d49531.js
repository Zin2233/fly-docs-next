"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["94921"],{969:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/index","title":"Introduction","description":"This document is being migrated. Please visit the old version of the document before it is completed.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/index.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3","slug":"/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Introduction"},"sidebar":"tutorialSidebar","previous":{"title":"FLY-SB2040-PRO-V3","permalink":"/fly-docs-next/en/docs/category/fly-sb2040-pro-v3"},"next":{"title":"Onboard DIP Switch Introduction","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/dip_switch"}}'),i=n("74132"),l=n("94551");let s={sidebar_position:1,sidebar_label:"Introduction"},d="Introduction",c={},o=[{value:"1.1 Product Features",id:"11-product-features",level:2},{value:"1.2 New Features",id:"12-new-features",level:2},{value:"1.3 Product Parameters",id:"13-product-parameters",level:2}];function a(e){let t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{ImageView:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["This document is being migrated. Please visit the ",(0,i.jsx)(t.a,{href:"https://mellow.klipper.cn/#/",children:"old version of the document"})," before it is completed."]})}),"\n",(0,i.jsx)(t.h1,{id:"1-product-overview",children:"1. Product Overview"}),"\n",(0,i.jsx)(t.p,{children:"FLY SB2040 PRO V3 is a tool board launched by Guangzhou Meilun Electronic Technology Co., Ltd. for the VORON Stealthburner print head. Using this tool board, the original complicated wiring between the mainboard and the print head can be replaced with four wires to optimize the layout. SB2040 is suitable for stealthburner and afterburner, integrating functions such as CAN transceiver, RS232 transceiver, USB port, TMC2240 driver, LIS2DW accelerometer, and three controllable fans. This tool board is compatible with Klipper and RRF firmware."}),"\n",(0,i.jsx)(r,{image:n(83097).Z,size:"100%",align:"center"}),"\n",(0,i.jsx)(t.h2,{id:"11-product-features",children:"1.1 Product Features"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Reserved Boot button, users can enter Boot mode to update firmware via TypeC"}),"\n",(0,i.jsx)(t.li,{children:"Supports Klipper firmware, RRF firmware"}),"\n",(0,i.jsx)(t.li,{children:"Supports CAN mode, RS232 mode, RRF CAN mode"}),"\n",(0,i.jsx)(t.li,{children:"In RS232 mode, it has a higher transmission rate and stronger stability. In CAN mode, it supports CAN expansion and reserves CAN expansion interface"}),"\n",(0,i.jsx)(t.li,{children:"Temperature sensor support: On-board MAX31865 chip, compatible with PT100 and PT1000 temperature sensors."}),"\n",(0,i.jsx)(t.li,{children:"On-board LIS2DW accelerometer and LDC1612 sensor"}),"\n",(0,i.jsx)(t.li,{children:"Reserved RGB interface, on-board 2240 driver, supports various leveling sensors, such as klicky, Voron Tap, PL08n, etc."}),"\n",(0,i.jsx)(t.li,{children:"Supports 12-24V voltage, 15A current input, enlarged heating rod port, rated current 10A"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"12-new-features",children:"1.2 New Features"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Supports mutual switching between Klipper CAN mode, RS232 mode, and RRF CAN mode"}),"\n",(0,i.jsx)(t.li,{children:"Added RS232 mode, which has a higher transmission rate, stronger stability, and simpler debugging use"}),"\n",(0,i.jsx)(t.li,{children:"Added RRF CAN mode, can be switched to RRF tool board to enhance applicability"}),"\n",(0,i.jsx)(t.li,{children:"Added CAN expansion interface for easy expansion of CAN devices"}),"\n",(0,i.jsx)(t.li,{children:"Added terminal resistor DIP switch, its terminal resistor 120R can be selected by DIP switch, no need for jumpers"}),"\n",(0,i.jsx)(t.li,{children:"Added 1-meter power/signal cable, the cable uses twisted pair design for stronger anti-interference performance"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"13-product-parameters",children:"1.3 Product Parameters"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"MCU: Raspberry Pi rp2040, Dual core ARM Cortex-M0+@133MHz"}),"\n",(0,i.jsx)(t.li,{children:"Connection interface uses XT30(2+2) connector supporting 15A current, peak 30A"}),"\n",(0,i.jsx)(t.li,{children:"Firmware: Reprap/Klipper"}),"\n",(0,i.jsx)(t.li,{children:"Input voltage: DC12V-24V"}),"\n",(0,i.jsx)(t.li,{children:"Logic voltage: DC3.3V"}),"\n",(0,i.jsx)(t.li,{children:"On-board sensors: LIS2DW and optional ldc1612 and max31865"}),"\n",(0,i.jsx)(t.li,{children:"Heating rod interface: Heating rod (HEAT0)"}),"\n",(0,i.jsx)(t.li,{children:"Expansion interface: RGB, EndStop, PT100/PT1000, XH2.54-2P CAN port"}),"\n",(0,i.jsx)(t.li,{children:"Fan interface: One DC fan, two DC fans or PWM fan"}),"\n",(0,i.jsx)(t.li,{children:"Motor driver: On-board TMC2240"}),"\n",(0,i.jsx)(t.li,{children:"Temperature sensor: One 100K NTC or PT1000 (TH0), one PT100/PT1000 optional"}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"4-product-classification",children:"4. Product Classification"}),"\n",(0,i.jsxs)(t.p,{children:["RRF tutorial link ",(0,i.jsx)(t.a,{href:"https://teamgloomy.github.io/fly_sb2040_pro_max_v3_general.html",children:"RRF"})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"SB2040"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"V3"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Plus V3"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Max V3"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Pro V3"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Pro Plus V3"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Pro Max V3"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Drive"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/-TMC2209-green",alt:"alt text",title:"TMC2209"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/-TMC2209-green",alt:"alt text",title:"TMC2209"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/-TMC2209-green",alt:"alt text",title:"TMC2209"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/-TMC2240-blue",alt:"alt text",title:"TMC2240"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/-TMC2240-blue",alt:"alt text",title:"TMC2240"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/-TMC2240-blue",alt:"alt text",title:"TMC2240"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Klipper CANBus"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Klipper RS232"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"RRF CANBus"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274C"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274C"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274C"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274C"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LIS2DW"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"MAX31865"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274C"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274C"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LDC1612"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274C"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274C"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274C"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274C"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},83097:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/sb2040-1de7dceb68f688370d5ed5709ac63b81.webp"},94551:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var r=n(39546);let i={},l=r.createContext(i);function s(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);