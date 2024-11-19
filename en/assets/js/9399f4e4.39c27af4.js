"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[68436],{37495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"ProductDoc/SBC/fly-mini-pad/uart","title":"Configuration Method","description":"Please note that after using this method, you will not be able to use the accelerometer interface of mini pad to connect an external accelerometer.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-mini-pad/uart.mdx","sourceDirName":"ProductDoc/SBC/fly-mini-pad","slug":"/ProductDoc/SBC/fly-mini-pad/uart","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-mini-pad/uart","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-mini-pad/uart.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730539595000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"sidebar_label":"Connecting the Mainboard via UART"},"sidebar":"tutorialSidebar","previous":{"title":"Onboard UTOC Usage","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-mini-pad/utoc"},"next":{"title":"3D Models and Schematics","permalink":"/fly-docs-next/en/docs/ProductDoc/SBC/fly-mini-pad/schematic"}}');var o=t(86070),r=t(15658),a=t(63436);const d={sidebar_position:9,sidebar_label:"Connecting the Mainboard via UART"},s="Configuration Method",c={},l=[{value:"Wiring Method",id:"wiring-method",level:2},{value:"Klipper Reference Configuration",id:"klipper-reference-configuration",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"configuration-method",children:"Configuration Method"})}),"\n",(0,o.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,o.jsx)(n.p,{children:"Please note that after using this method, you will not be able to use the accelerometer interface of mini pad to connect an external accelerometer."})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Open the BOOT disk and find ",(0,o.jsx)(n.code,{children:"armbianEnv.txt"})," and open it"]}),"\n",(0,o.jsxs)(n.li,{children:["Modify ",(0,o.jsx)(n.strong,{children:"uart2"})," in ",(0,o.jsx)(n.code,{children:"overlays=usbhost2 usbhost3 uart2"})," to ",(0,o.jsx)(n.strong,{children:"uart3"})," and save it"]}),"\n"]}),"\n",(0,o.jsx)(a.A,{image:t(19407).A,size:"80%",align:"center"}),"\n",(0,o.jsx)(n.h2,{id:"wiring-method",children:"Wiring Method"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Please note that the TX of mini-pad should be connected to the RX of the mainboard with serial port firmware flashed"}),"\n",(0,o.jsx)(n.li,{children:"Please note that the RX of mini-pad should be connected to the TX of the mainboard with serial port firmware flashed"}),"\n",(0,o.jsx)(n.li,{children:"Please note that a common ground is required"}),"\n",(0,o.jsx)(n.li,{children:"Otherwise, you cannot connect to the mainboard with serial port firmware flashed"}),"\n"]}),"\n",(0,o.jsx)(a.A,{image:t(17974).A,size:"80%",align:"center"}),"\n",(0,o.jsx)(n.h2,{id:"klipper-reference-configuration",children:"Klipper Reference Configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"[mcu]\nserial: /dev/ttyS3\nbaud\uff1a250000\n#   The baud rate used. Default is 250000\nrestart_method:command\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19407:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/uart-14517f5dfe792cf8b7638cb457d152b3.png"},17974:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/uart1-42459f6e45a3e3943d98aaed92f9e47f.png"}}]);