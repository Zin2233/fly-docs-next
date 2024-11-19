"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[83008],{27355:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-mmu/mmu/cfg","title":"\u53c2\u8003\u914d\u7f6e","description":"","source":"@site/docs/ProductDoc/ToolBoard/fly-mmu/mmu/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-mmu/mmu","slug":"/ProductDoc/ToolBoard/fly-mmu/mmu/cfg","permalink":"/fly-docs-next/ko/docs/ProductDoc/ToolBoard/fly-mmu/mmu/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-mmu/mmu/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1726217368000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u53c2\u8003\u914d\u7f6e"},"sidebar":"tutorialSidebar","previous":{"title":"\u4e3b\u677f\u63a5\u7ebf","permalink":"/fly-docs-next/ko/docs/ProductDoc/ToolBoard/fly-mmu/mmu/wiring"},"next":{"title":"\u4e09\u7ef4\u6a21\u578b\u4e0e\u539f\u7406\u56fe","permalink":"/fly-docs-next/ko/docs/ProductDoc/ToolBoard/fly-mmu/mmu/schematic"}}');var a=o(86070),r=o(15658);const s={sidebar_position:5,sidebar_label:"\u53c2\u8003\u914d\u7f6e"},i="\u53c2\u8003\u914d\u7f6e",c={},d=[];function u(n){const e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,r.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"\u53c2\u8003\u914d\u7f6e",children:"\u53c2\u8003\u914d\u7f6e"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cfg",children:"###########################################################################\n# Happy Hare MMU hardware pin config\n#\n# EDIT THIS FILE BASED ON YOUR SETUP\n#\n# This contains aliases for pins for MCU type unknown\n#\n[mcu mmu]\nserial: /dev/ttyACM1 # Config guess. Run ls -l /dev/serial/by-id and set manually\t# Change to `canbus_uuid: 1234567890` for CANbus setups\n\n# Section to create alias for pins used by MMU for easier integration into Klippain and RatOS.\n# The names match those referenced in the mmu_hardware.cfg file. If you get into difficulty\n# you can also comment out this aliases definition and configure the pin names directly\n# into mmu_hardware.cfg.\n#\n[board_pins mmu]\nmcu: mmu # Assuming using an external / extra mcu dedicated to MMU\naliases:\n    MMU_GEAR_UART=PE7,\n    MMU_GEAR_STEP=PC5,\n    MMU_GEAR_DIR=PB1,\n    MMU_GEAR_ENABLE=PB0,\n    MMU_GEAR_DIAG=PE8,\n    MMU_SEL_UART=PE11,\n    MMU_SEL_STEP=PE14,\n    MMU_SEL_DIR=PE13,\n    MMU_SEL_ENABLE=PE12,\n    MMU_SEL_DIAG=PE9,\n    MMU_SEL_ENDSTOP=PE2,\n    MMU_SERVO=PA3,\n    MMU_CUT_SERVO=PA2,\n    MMU_ENCODER=PE3,\n    MMU_GATE_SENSOR=PC3,\n    MMU_NEOPIXEL=PE10,\n    MMU_PRE_GATE_0=PC6,\n    MMU_PRE_GATE_1=PD15,\n    MMU_PRE_GATE_2=PD14,\n    MMU_PRE_GATE_3=PD13,\n    MMU_PRE_GATE_4=PD12,\n    MMU_PRE_GATE_5=PD11,\n    MMU_PRE_GATE_6=PD10,\n    MMU_PRE_GATE_7=PD9,\n"})})]})}function l(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}}}]);