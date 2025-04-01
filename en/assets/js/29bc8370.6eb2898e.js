"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["83636"],{31688:function(e,n,t){t.d(n,{ZP:function(){return s},d$:function(){return l}});var r=t(74132),i=t(94551);let l=[];function a(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Katapult was originally named CanBoot, and later renamed to katapult."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After burning the firmware using methods like DFU, you can use commands to update the firmware with one click."}),"\n",(0,r.jsx)(n.li,{children:"Advantage: Quickly double-clicking the reset button or quickly cutting power twice will enter the Katapult firmware, at which point there will be an LED flashing on the mainboard."}),"\n",(0,r.jsx)(n.li,{children:"Katapult firmware can only be used to burn firmware and cannot connect to Klipper!!!"}),"\n",(0,r.jsxs)(n.li,{children:["Katapult firmware supports three connection methods for connecting to the host computer, and the firmwares for these three methods are independent of each other.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["CAN connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command, and it has strong interference resistance."}),"\n",(0,r.jsx)(n.li,{children:"Disadvantage: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["RS232 connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can update the firmware using a command, and it has very strong interference resistance."}),"\n",(0,r.jsx)(n.li,{children:"Disadvantage: You cannot use a command to update the firmware with one click; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["USB connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command."}),"\n",(0,r.jsx)(n.li,{children:"Disadvantage: A long data cable is prone to interference, which may lead to disconnection."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function s(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},58099:function(e,n,t){t.d(n,{ZP:function(){return s},d$:function(){return l}});var r=t(74132),i=t(94551);let l=[];function a(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{ImageView:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install the burning tool"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enter the following command in SSH"}),"\n",(0,r.jsx)(n.li,{children:"Only execute this the first time you burn, no need to execute it afterwards"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/lib/rp2040_flash/ && make\n"})}),"\n",(0,r.jsx)(l,{image:t(46366).Z,size:"100%",align:"left"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Execute the following command to check if the connection is successful."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter ",(0,r.jsx)(n.code,{children:"lsusb"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If there is no ",(0,r.jsx)(n.code,{children:"2e8a:0003"})," device, please try to re-enter ",(0,r.jsx)(n.strong,{children:"burning mode"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Due to system version issues, it may show other names. If there is ",(0,r.jsx)(n.code,{children:"2e8a:0003"}),", it indicates that the burning mode has been entered."]}),"\n",(0,r.jsx)(l,{image:t(47368).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Notice",type:"warning",children:(0,r.jsxs)(n.p,{children:["Proceed to the next step only if there is a ",(0,r.jsx)(n.code,{children:"2e8a:0003"})]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pull the pre-compiled firmware"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"These are all pre-compiled firmwares"}),"\n",(0,r.jsx)(n.li,{children:"Please note that the host machine needs to be able to access the internet to install"}),"\n",(0,r.jsx)(n.li,{children:"The host machine needs to execute the following command to download the firmware package"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the firmware package has already been downloaded, it is recommended to update the firmware package before proceeding with the remaining operations"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})}),"\n"]}),"\n"]})}function s(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},43801:function(e,n,t){t.d(n,{ZP:function(){return s},d$:function(){return l}});var r=t(74132),i=t(94551);let l=[];function a(e){let n={code:"code",img:"img",li:"li",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prepare a data cable with data transfer capabilities."}),"\n",(0,r.jsx)(n.li,{children:"Download the firmware to the computer."}),"\n",(0,r.jsxs)(n.li,{children:["Connect the BOOT jumper or hold it and connect it to the computer, at this point the ",(0,r.jsx)(n.code,{children:"RPI-RP2"})," disk will appear.\n",(0,r.jsx)(n.img,{src:"https://example.com/@site/docs/General/dfu-flash/img/uf2.webp",alt:""})]}),"\n",(0,r.jsx)(n.li,{children:"Remove the BOOT jumper or release the button!!!"}),"\n",(0,r.jsxs)(n.li,{children:["Copy the firmware that needs to be burned into it, please note that only ",(0,r.jsx)(n.code,{children:"UF2"})," suffix firmware can be used!!! (Do not modify the suffix name, it is useless.)"]}),"\n",(0,r.jsxs)(n.li,{children:["Refer to\n",(0,r.jsx)(n.img,{src:"https://example.com/@site/docs/General/dfu-flash/img/uf21.webp",alt:""})]}),"\n",(0,r.jsxs)(n.li,{children:["After copying the firmware into the ",(0,r.jsx)(n.code,{children:"RPI-RP2"})," disk, it will automatically disappear, indicating that the firmware burning is complete!"]}),"\n"]})}function s(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},72455:function(e,n,t){t.r(n),t.d(n,{default:()=>f,frontMatter:()=>c,metadata:()=>r,assets:()=>h,toc:()=>u,contentTitle:()=>d});var r=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-ercf/ercf/flash/bl","title":"Katapult Firmware","description":"Katapult Firmware Description","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-ercf/ercf/flash/bl.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-ercf/ercf/flash","slug":"/ProductDoc/ToolBoard/fly-ercf/ercf/flash/bl","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-ercf/ercf/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-ercf/ercf/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"BL firmware, please ignore"},"sidebar":"tutorialSidebar","previous":{"title":"ID Search Tutorial","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-ercf/ercf/flash/id"},"next":{"title":"Motherboard Wiring","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-ercf/ercf/wiring"}}'),i=t("74132"),l=t("94551"),a=t("43801"),s=t("58099"),o=t("31688");let c={sidebar_position:6,sidebar_label:"BL firmware, please ignore"},d="Katapult Firmware",h={},u=[{value:"Katapult Firmware Description",id:"katapult-firmware-description",level:2},...o.d$,{value:"Enter Burning Mode",id:"enter-burning-mode",level:2},{value:"Burn Firmware",id:"burn-firmware",level:2},...a.d$,...s.d$,{value:"Confirm Whether the Firmware Starts",id:"confirm-whether-the-firmware-starts",level:2}];function p(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Button:r,ImageView:c,TabItem:d,Tabs:h}=n;return r||m("Button",!0),c||m("ImageView",!0),d||m("TabItem",!0),h||m("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"katapult-firmware",children:"Katapult Firmware"})}),"\n",(0,i.jsx)(n.h2,{id:"katapult-firmware-description",children:"Katapult Firmware Description"}),"\n",(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ERCF supports CAN, USB"}),"\n",(0,i.jsx)(n.li,{children:"Here provides CAN firmware at 500K and 1M rates"}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"enter-burning-mode",children:"Enter Burning Mode"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The circled part is the ",(0,i.jsx)(n.code,{children:"BOOT button"})]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To enter burning mode, the motherboard must be completely powered off, press and hold the BOOT button, then connect one end of the data cable with data transmission to the motherboard and the other end to the host computer","\n",(0,i.jsx)(c,{image:t(43034).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"burn-firmware",children:"Burn Firmware"}),"\n",(0,i.jsxs)(h,{children:[(0,i.jsxs)(d,{value:"win",label:"Windows Burning Tutorial",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ERCF's Katapult firmware ",(0,i.jsx)(r,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/ERCF.zip",children:"Click to download firmware automatically"})]}),"\n"]}),(0,i.jsx)(a.ZP,{})]}),(0,i.jsxs)(d,{value:"linux",label:"Host Computer Burning Tutorial",children:[(0,i.jsx)(s.ZP,{}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Burn Firmware"}),"\n"]}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Only one of the firmwares needs to be burned"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Below is the firmware writing instruction for 500K CAN rate"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/ERCF/FLY_ERCF_CANBOOT_CAN_500K.uf2\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Below is the firmware writing instruction for 1M CAN rate"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/ERCF/FLY_ERCF_CANBOOT_CAN_1M.uf2\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Below is the firmware writing instruction for USB"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/FLY_ERCF_CANBOOT_USB.uf2\n"})}),"\n"]}),"\n"]}),(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the following prompt appears, the burning is successful"}),"\n",(0,i.jsx)(c,{image:t(49707).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"After burning, the motherboard needs to be completely powered off once."})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"confirm-whether-the-firmware-starts",children:"Confirm Whether the Firmware Starts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the firmware starts normally, the LED will start flashing","\n",(0,i.jsx)(c,{image:t(73401).Z,size:"100%",align:"center"}),"\n"]}),"\n"]})]})}function f(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},46366:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/2040-cc7587e65304922141ed75654c56e8e0.webp"},49707:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/flash3-ca07b1c5da933a137dbf5155a965a150.webp"},47368:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/2e8a-387d46703c1d67dcf7b6fd514e28df22.webp"},43034:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/boot-df5fe4d243ec040dcef9fab6d9057e9b.webp"},73401:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/led-1c429bd67445273fd217174a7186ef09.webp"},94551:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var r=t(39546);let i={},l=r.createContext(i);function a(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);