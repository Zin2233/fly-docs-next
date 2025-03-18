"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["19556"],{8786:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>i,default:()=>l,assets:()=>c,toc:()=>u,frontMatter:()=>s});var o=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-mmu/mmu/cfg","title":"\u53C2\u8003\u914D\u7F6E","description":"","source":"@site/docs/ProductDoc/ToolBoard/fly-mmu/mmu/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-mmu/mmu","slug":"/ProductDoc/ToolBoard/fly-mmu/mmu/cfg","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-mmu/mmu/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-mmu/mmu/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1726217368000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u53C2\u8003\u914D\u7F6E"},"sidebar":"tutorialSidebar","previous":{"title":"Connexion de la carte m\xe8re","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-mmu/mmu/wiring"},"next":{"title":"Mod\xe8les 3D et sch\xe9mas \xe9lectriques","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-mmu/mmu/schematic"}}'),r=t("52676"),a=t("79938");let s={sidebar_position:5,sidebar_label:"\u53C2\u8003\u914D\u7F6E"},i="\u53C2\u8003\u914D\u7F6E",c={},u=[];function d(e){let n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u53C2\u8003\u914D\u7F6E",children:"\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"###########################################################################\n# Happy Hare MMU hardware pin config\n#\n# EDIT THIS FILE BASED ON YOUR SETUP\n#\n# This contains aliases for pins for MCU type unknown\n#\n[mcu mmu]\nserial: /dev/ttyACM1 # Config guess. Run ls -l /dev/serial/by-id and set manually	# Change to `canbus_uuid: 1234567890` for CANbus setups\n\n# Section to create alias for pins used by MMU for easier integration into Klippain and RatOS.\n# The names match those referenced in the mmu_hardware.cfg file. If you get into difficulty\n# you can also comment out this aliases definition and configure the pin names directly\n# into mmu_hardware.cfg.\n#\n[board_pins mmu]\nmcu: mmu # Assuming using an external / extra mcu dedicated to MMU\naliases:\n    MMU_GEAR_UART=PE7,\n    MMU_GEAR_STEP=PC5,\n    MMU_GEAR_DIR=PB1,\n    MMU_GEAR_ENABLE=PB0,\n    MMU_GEAR_DIAG=PE8,\n    MMU_SEL_UART=PE11,\n    MMU_SEL_STEP=PE14,\n    MMU_SEL_DIR=PE13,\n    MMU_SEL_ENABLE=PE12,\n    MMU_SEL_DIAG=PE9,\n    MMU_SEL_ENDSTOP=PE2,\n    MMU_SERVO=PA3,\n    MMU_CUT_SERVO=PA2,\n    MMU_ENCODER=PE3,\n    MMU_GATE_SENSOR=PC3,\n    MMU_NEOPIXEL=PE10,\n    MMU_PRE_GATE_0=PC6,\n    MMU_PRE_GATE_1=PD15,\n    MMU_PRE_GATE_2=PD14,\n    MMU_PRE_GATE_3=PD13,\n    MMU_PRE_GATE_4=PD12,\n    MMU_PRE_GATE_5=PD11,\n    MMU_PRE_GATE_6=PD10,\n    MMU_PRE_GATE_7=PD9,\n"})})]})}function l(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},79938:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var o=t(75271);let r={},a=o.createContext(r);function s(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);