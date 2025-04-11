"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["63776"],{49237:function(e,n,t){t.d(n,{ZP:function(){return o},d$:function(){return l}});var i=t(85893),r=t(50065);let l=[];function a(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult was originally named CanBoot, and later renamed to katapult."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After burning the firmware using methods like DFU, you can use commands to update the firmware with one click."}),"\n",(0,i.jsx)(n.li,{children:"Advantage: Quickly double-clicking the reset button or quickly cutting power twice will enter the Katapult firmware, at which point there will be an LED flashing on the mainboard."}),"\n",(0,i.jsx)(n.li,{children:"Katapult firmware can only be used to burn firmware and cannot connect to Klipper!!!"}),"\n",(0,i.jsxs)(n.li,{children:["Katapult firmware supports three connection methods for connecting to the host computer, and the firmwares for these three methods are independent of each other.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CAN connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command, and it has strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RS232 connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can update the firmware using a command, and it has very strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You cannot use a command to update the firmware with one click; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["USB connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: A long data cable is prone to interference, which may lead to disconnection."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},14268:function(e,n,t){t.d(n,{ZP:function(){return o},d$:function(){return l}});var i=t(85893),r=t(50065);let l=[];function a(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install the burning tool"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enter the following command in SSH"}),"\n",(0,i.jsx)(n.li,{children:"Only execute this the first time you burn, no need to execute it afterwards"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/lib/rp2040_flash/ && make\n"})}),"\n",(0,i.jsx)(l,{image:t(27412).Z,size:"100%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Execute the following command to check if the connection is successful."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter ",(0,i.jsx)(n.code,{children:"lsusb"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If there is no ",(0,i.jsx)(n.code,{children:"2e8a:0003"})," device, please try to re-enter ",(0,i.jsx)(n.strong,{children:"burning mode"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Due to system version issues, it may show other names. If there is ",(0,i.jsx)(n.code,{children:"2e8a:0003"}),", it indicates that the burning mode has been entered."]}),"\n",(0,i.jsx)(l,{image:t(24027).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Notice",type:"warning",children:(0,i.jsxs)(n.p,{children:["Proceed to the next step only if there is a ",(0,i.jsx)(n.code,{children:"2e8a:0003"})]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Pull the pre-compiled firmware"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"These are all pre-compiled firmwares"}),"\n",(0,i.jsx)(n.li,{children:"Please note that the host machine needs to be able to access the internet to install"}),"\n",(0,i.jsx)(n.li,{children:"The host machine needs to execute the following command to download the firmware package"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the firmware package has already been downloaded, it is recommended to update the firmware package before proceeding with the remaining operations"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})}),"\n"]}),"\n"]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},46448:function(e,n,t){t.d(n,{ZP:function(){return o},d$:function(){return l}});var i=t(85893),r=t(50065);let l=[];function a(e){let n={code:"code",img:"img",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prepare a data cable with data transfer capabilities."}),"\n",(0,i.jsx)(n.li,{children:"Download the firmware to the computer."}),"\n",(0,i.jsxs)(n.li,{children:["Connect the BOOT jumper or hold it and connect it to the computer, at this point the ",(0,i.jsx)(n.code,{children:"RPI-RP2"})," disk will appear.\n",(0,i.jsx)(n.img,{src:"https://example.com/@site/docs/General/dfu-flash/img/uf2.webp",alt:""})]}),"\n",(0,i.jsx)(n.li,{children:"Remove the BOOT jumper or release the button!!!"}),"\n",(0,i.jsxs)(n.li,{children:["Copy the firmware that needs to be burned into it, please note that only ",(0,i.jsx)(n.code,{children:"UF2"})," suffix firmware can be used!!! (Do not modify the suffix name, it is useless.)"]}),"\n",(0,i.jsxs)(n.li,{children:["Refer to\n",(0,i.jsx)(n.img,{src:"https://example.com/@site/docs/General/dfu-flash/img/uf21.webp",alt:""})]}),"\n",(0,i.jsxs)(n.li,{children:["After copying the firmware into the ",(0,i.jsx)(n.code,{children:"RPI-RP2"})," disk, it will automatically disappear, indicating that the firmware burning is complete!"]}),"\n"]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},81376:function(e,n,t){t.r(n),t.d(n,{default:()=>f,frontMatter:()=>c,metadata:()=>i,assets:()=>h,toc:()=>u,contentTitle:()=>d});var i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash/bl","title":"Katapult Firmware","description":"Katapult Firmware Description","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash/bl.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash/bl","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"BL firmware, please ignore!"},"sidebar":"tutorialSidebar","previous":{"title":"ID Search Tutorial","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash/id"},"next":{"title":"Wiring Reference","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v3/wiring"}}'),r=t("85893"),l=t("50065"),a=t("46448"),o=t("14268"),s=t("49237");let c={sidebar_position:6,sidebar_label:"BL firmware, please ignore!"},d="Katapult Firmware",h={},u=[{value:"Katapult Firmware Description",id:"katapult-firmware-description",level:2},...s.d$,{value:"Enter Boot Mode",id:"enter-boot-mode",level:2},{value:"Flash Firmware",id:"flash-firmware",level:2},...a.d$,...o.d$,{value:"Confirm if Firmware is Started",id:"confirm-if-firmware-is-started",level:2}];function p(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Button:i,ImageView:c,TabItem:d,Tabs:h}=n;return i||m("Button",!0),c||m("ImageView",!0),d||m("TabItem",!0),h||m("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"katapult-firmware",children:"Katapult Firmware"})}),"\n",(0,r.jsx)(n.h2,{id:"katapult-firmware-description",children:"Katapult Firmware Description"}),"\n",(0,r.jsx)(s.ZP,{}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SHT36_V3 supports CAN and RS232"}),"\n",(0,r.jsx)(n.li,{children:"Only CAN firmware is provided here for 500K and 1M rates"}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"enter-boot-mode",children:"Enter Boot Mode"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The arrow points to the ",(0,r.jsx)(n.code,{children:"BOOT button"})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["With the motherboard completely powered off, press and hold the BOOT button, then connect one end of the data cable with data transfer to the motherboard and the other end to your device","\n",(0,r.jsx)(c,{image:t(35917).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"flash-firmware",children:"Flash Firmware"}),"\n",(0,r.jsxs)(h,{children:[(0,r.jsxs)(d,{value:"win",label:"Windows flashing tutorial",default:!0,children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["SHT36 V3 firmware download link   ",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/SHT36_V3.zip",children:"Click to download firmware automatically"})]}),"\n"]}),(0,r.jsx)(a.ZP,{})]}),(0,r.jsxs)(d,{value:"linux",label:"Host computer flashing tutorial",children:[(0,r.jsx)(o.ZP,{}),(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Flash Firmware"}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Only one of the firmwares needs to be flashed"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Below is the firmware flashing command for 500K CAN rate"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/SHT36/FLY_SHT36V3_katapult_CAN_500K.uf2\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Below is the firmware flashing command for 1M CAN rate"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/SHT36/FLY_SHT36V3_katapult_CAN_1M.uf2\n"})}),(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"If the following prompt appears, the flashing is successful"}),"\n"]}),(0,r.jsx)(c,{image:t(9246).Z,size:"100%",align:"center"}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"After flashing, the motherboard needs to be completely powered off once."})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"confirm-if-firmware-is-started",children:"Confirm if Firmware is Started"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the firmware starts normally, the LED will start blinking"}),"\n"]}),"\n",(0,r.jsx)(c,{image:t(81688).Z,size:"100%",align:"center"})]})}function f(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},27412:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/2040-cc7587e65304922141ed75654c56e8e0.webp"},9246:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/flash3-ca07b1c5da933a137dbf5155a965a150.webp"},24027:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/2e8a-387d46703c1d67dcf7b6fd514e28df22.webp"},35917:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/boot-29a3f7097e28773a43d55d60c02c907e.webp"},81688:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/led-3a2c68f7e71d47c356e7a66e87fbb610.webp"},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var i=t(67294);let r={},l=i.createContext(r);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);