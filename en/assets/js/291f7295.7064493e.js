"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["83100"],{49237:function(e,n,t){t.d(n,{ZP:function(){return l},d$:function(){return a}});var i=t(85893),r=t(50065);let a=[];function o(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult was originally named CanBoot, and later renamed to katapult."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After burning the firmware using methods like DFU, you can use commands to update the firmware with one click."}),"\n",(0,i.jsx)(n.li,{children:"Advantage: Quickly double-clicking the reset button or quickly cutting power twice will enter the Katapult firmware, at which point there will be an LED flashing on the mainboard."}),"\n",(0,i.jsx)(n.li,{children:"Katapult firmware can only be used to burn firmware and cannot connect to Klipper!!!"}),"\n",(0,i.jsxs)(n.li,{children:["Katapult firmware supports three connection methods for connecting to the host computer, and the firmwares for these three methods are independent of each other.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CAN connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command, and it has strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RS232 connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can update the firmware using a command, and it has very strong interference resistance."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: You cannot use a command to update the firmware with one click; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["USB connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantage: After compiling the KLIPPER firmware, you can directly update the firmware using a command."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantage: A long data cable is prone to interference, which may lead to disconnection."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},36301:function(e,n,t){t.d(n,{ZP:function(){return l},d$:function(){return a}});var i=t(85893),r=t(50065);let a=[];function o(e){let n={code:"code",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:a}=n;return a||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install the burning tool"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No need to install the burning tool for the FLY upper computer"}),"\n",(0,i.jsx)(n.li,{children:"If you need to install, please note: The upper computer needs to be connected to the internet to install normally"}),"\n",(0,i.jsx)(n.li,{children:"If already installed, no need to install"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install dfu-util -y\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Execute the following command to check if the connection is successful."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lsusb\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If there is no DFU device, please try to re-enter ",(0,i.jsx)(n.strong,{children:"burning mode"})]}),"\n",(0,i.jsxs)(n.li,{children:["Due to system version issues, other names may be displayed. If ",(0,i.jsx)(n.code,{children:"0483:df11"})," is shown, it indicates that the burning mode has been entered"]}),"\n"]}),"\n",(0,i.jsx)(a,{image:t(92028).Z,size:"100%",align:"left"}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Pull the pre-compiled firmware"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"These are all pre-compiled firmwares"}),"\n",(0,i.jsx)(n.li,{children:"Please note: The upper computer needs to be connected to the internet to install"}),"\n",(0,i.jsx)(n.li,{children:"The upper computer needs to execute the command below to download the firmware package (if unable to get the file due to network issues on the upper computer, please contact the administrator in the after-sales group)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the firmware package has already been downloaded, it is recommended to update the firmware package before proceeding with the remaining operations"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},44828:function(e,n,t){t.d(n,{ZP:function(){return l},d$:function(){return a}});var i=t(85893),r=t(50065);let a=[];function o(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components},{Button:a,ImageView:o}=n;return a||s("Button",!0),o||s("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["System compatibility issues, please use the computer's ",(0,i.jsx)(n.code,{children:"USB2.0"})," for burning"]}),"\n",(0,i.jsx)(n.li,{children:"If it still cannot be burned, please use the host machine for burning"}),"\n"]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Burning tool ",(0,i.jsx)(a,{variant:"contained",disableElevation:!0,href:"https://mellow-next.klipper.cn/docs/ResDownload/auxiliary_software/",children:"Download link"})]}),"\n",(0,i.jsxs)(n.li,{children:["Need to download ",(0,i.jsx)(n.code,{children:"SetupSTM32CubeProgrammer"})," and ",(0,i.jsx)(n.code,{children:"STM32 DFU driver"})]}),"\n",(0,i.jsxs)(n.li,{children:["Copy the firmware (klipper.bin) compiled in front or the precompiled ",(0,i.jsx)(n.code,{children:"Katapult firmware"})," to any directory on the computer"]}),"\n",(0,i.jsxs)(n.li,{children:["Use a Type-C data cable to connect the motherboard to the computer, make sure it is already:",(0,i.jsx)(a,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/bl#enter-dfu-burning-mode",children:"Enter DFU burning mode"})]}),"\n",(0,i.jsxs)(n.li,{children:["In STM32CubeProgrammer, select USB mode, refresh, and connect","\n",(0,i.jsx)(o,{image:t(48587).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["If no error pop-up appears, then the connection is successful.","\n",(0,i.jsx)(n.admonition,{title:"Warning",type:"danger",children:(0,i.jsxs)(n.p,{children:["If the content shown below appears, it indicates a problem with the computer or software, please use the host machine for burning:",(0,i.jsx)(a,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/bl#burn-firmware",children:"Host machine burning tutorial"})]})}),"\n",(0,i.jsx)(o,{image:t(77664).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click the download icon on the left and select several options below","\n",(0,i.jsx)(o,{image:t(17865).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.code,{children:"Browse"})," button indicated by the arrow, then select the firmware you need to burn","\n",(0,i.jsx)(o,{image:t(43360).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.code,{children:"Start address"})," and enter ",(0,i.jsx)(n.code,{children:"0x08000000"}),"\n",(0,i.jsx)(o,{image:t(7790).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Start automatic mode"})," below to start burning the firmware","\n",(0,i.jsx)(o,{image:t(36957).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The prompt below indicates that the firmware burning is complete","\n",(0,i.jsx)(o,{image:t(7432).Z,size:"100%",align:"center"}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function s(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},41959:function(e,n,t){t.r(n),t.d(n,{default:()=>f,frontMatter:()=>s,metadata:()=>i,assets:()=>d,toc:()=>h,contentTitle:()=>c});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-e3/fly-e3-v2/flash/bl","title":"BL firmware","description":"* Please note that the bootloader has already been pre-flashed at the factory and does not need to be flashed again.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-e3/fly-e3-v2/flash/bl.mdx","sourceDirName":"ProductDoc/MainBoard/fly-e3/fly-e3-v2/flash","slug":"/ProductDoc/MainBoard/fly-e3/fly-e3-v2/flash/bl","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"BL firmware, please ignore"},"sidebar":"tutorialSidebar","previous":{"title":"ID Search Tutorial","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/flash/id"},"next":{"title":"Mainboard Wiring","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/wiring"}}'),r=t("85893"),a=t("50065"),o=t("44828"),l=t("36301");t("49237");let s={sidebar_position:6,sidebar_label:"BL firmware, please ignore"},c="BL firmware",d={},h=[{value:"Entering programming mode",id:"entering-programming-mode",level:2},{value:"Flashing firmware",id:"flashing-firmware",level:2},...o.d$,...l.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Button:i,ImageView:s,TabItem:c,Tabs:d}=n;return i||m("Button",!0),s||m("ImageView",!0),c||m("TabItem",!0),d||m("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"bl-firmware",children:"BL firmware"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Please note that the ",(0,r.jsx)(n.code,{children:"bootloader"})," has already been pre-flashed at the factory and does not need to be flashed again."]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"entering-programming-mode",children:"Entering programming mode"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The button on the right is the ",(0,r.jsx)(n.code,{children:"BOOT button"}),", and the button on the left is the ",(0,r.jsx)(n.code,{children:"RESET button"}),"."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"There are two ways to enter programming mode."}),"\n",(0,r.jsx)(n.li,{children:"First method: With the mainboard completely powered off, press and hold the BOOT button and then connect the data transfer cable to the mainboard and your device."}),"\n",(0,r.jsxs)(n.li,{children:["Second method: After connecting the data transfer cable to the mainboard and your device, press and hold the BOOT button and then press the RST button, release the RST button, and finally release the BOOT button.","\n",(0,r.jsx)(s,{image:t(55430).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"flashing-firmware",children:"Flashing firmware"}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsxs)(c,{value:"win",label:"Windows flashing tutorial",default:!0,children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["E3's Katapult firmware ",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/E3_V2.bin",children:"Click to automatically download the firmware"})]}),"\n"]}),(0,r.jsx)(o.ZP,{})]}),(0,r.jsxs)(c,{value:"linux",label:"Host flashing tutorial",children:[(0,r.jsx)(l.ZP,{}),(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Flashing firmware"}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Only one firmware needs to be flashed."})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Below is the firmware flashing command","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo dfu-util -a 0 -d 0483:df11 --dfuse-address 0x08000000 -D ~/FLY_Katapult/BL/E3/E3_V2.bin\n"})}),"\n"]}),"\n"]}),(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["If the content shown at the arrow in the image below says ",(0,r.jsx)(n.code,{children:"File downloaded successfully"}),", then the flashing was successful.","\n",(0,r.jsx)(s,{image:t(62733).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"After flashing, you need to completely power off the mainboard once."})})]})]})]})}function f(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},92028:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/lsusb-460d7d3379cb644139898385fd86f2ec.webp"},62733:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/make-flash-85b1e01b14ed5924982a2ae7cb6501f0.webp"},48587:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-1-4d518a7b7231de7da7230ae63b82e477.webp"},17865:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-2-8f9f2f15bea5e6acf6c39175f13140fc.webp"},43360:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-3-51ae6c039223223689cbcab82827c416.webp"},7790:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-4-9cf41c6403736a50cf97b75379c12579.webp"},36957:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-5-02cc80158d21b9919d8815237e5555f3.webp"},7432:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-6-6011a605b09f201c9daa91f53d1c8fca.webp"},77664:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-7-aaf9c753d51189c3c1566d683e552682.webp"},55430:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/boot-6bc6d47c40cf9015b0c3b5fa694dadac.webp"},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(67294);let r={},a=i.createContext(r);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);