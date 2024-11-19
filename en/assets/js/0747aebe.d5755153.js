"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[91882],{10921:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-c/fly-c8/wiring","title":"Motherboard Wiring","description":"Interface Diagram","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-c/fly-c8/wiring.mdx","sourceDirName":"ProductDoc/MainBoard/fly-c/fly-c8","slug":"/ProductDoc/MainBoard/fly-c/fly-c8/wiring","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/wiring","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-c/fly-c8/wiring.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730539595000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"sidebar_label":"Motherboard Wiring"},"sidebar":"tutorialSidebar","previous":{"title":"Reading and Viewing Motherboard ID","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/read-id"},"next":{"title":"klipper\u53c2\u8003\u914d\u7f6e","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/cfg"}}');var s=i(86070),t=i(15658),o=i(63436);const a={sidebar_position:8,sidebar_label:"Motherboard Wiring"},d="Motherboard Wiring",c={},l=[{value:"Interface Diagram",id:"interface-diagram",level:2},{value:"Interface Description",id:"interface-description",level:3},{value:"Pin Description",id:"pin-description",level:3},{value:"Power Wiring",id:"power-wiring",level:2},{value:"Driver Installation",id:"driver-installation",level:2},{value:"Motherboard Driver Jumper",id:"motherboard-driver-jumper",level:3},{value:"Driver Installation",id:"driver-installation-1",level:3},{value:"Stepper Motor Wiring",id:"stepper-motor-wiring",level:2},{value:"Heater Wire Connection",id:"heater-wire-connection",level:2},{value:"Bed Wiring",id:"bed-wiring",level:2},{value:"Thermistor Wiring",id:"thermistor-wiring",level:2},{value:"Thermistor Type Introduction",id:"thermistor-type-introduction",level:3},{value:"Motherboard Thermistor Wiring",id:"motherboard-thermistor-wiring",level:3},{value:"Fan Wiring",id:"fan-wiring",level:2},{value:"Limit Switch Wiring",id:"limit-switch-wiring",level:2},{value:"Leveling Sensor Wiring",id:"leveling-sensor-wiring",level:2},{value:"Metal Proximity Switch Wiring",id:"metal-proximity-switch-wiring",level:3},{value:"BL-Touch Wiring",id:"bl-touch-wiring",level:3},{value:"Klicky Wiring",id:"klicky-wiring",level:3},{value:"Voron Tap Wiring",id:"voron-tap-wiring",level:3},{value:"FLY-Mini12864 LCD Wiring",id:"fly-mini12864-lcd-wiring",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"motherboard-wiring",children:"Motherboard Wiring"})}),"\n",(0,s.jsx)(n.h2,{id:"interface-diagram",children:"Interface Diagram"}),"\n",(0,s.jsx)(n.h3,{id:"interface-description",children:"Interface Description"}),"\n",(0,s.jsx)(o.A,{image:i(55077).A,size:"50%",align:"center"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"pin-description",children:"Pin Description"}),"\n",(0,s.jsx)(o.A,{image:i(18701).A,size:"50%",align:"center"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"power-wiring",children:"Power Wiring"}),"\n",(0,s.jsx)(o.A,{image:i(19042).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"driver-installation",children:"Driver Installation"}),"\n",(0,s.jsx)(n.h3,{id:"motherboard-driver-jumper",children:"Motherboard Driver Jumper"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"STEP/DIR Mode."})," In this mode, subdivision is set using a jumper cap, and current is adjusted using a potentiometer. The most common driver used is the A4988 driver. For this type of driver, you need to refer to the manufacturer's provided subdivision configuration table and set the subdivision using the jumper cap."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"UART Mode."})," The most common drivers using this mode are TMC2208, TMC2209, TMC2226, etc. These driver chips can communicate asynchronously with the main controller via UART, and settings such as subdivision, operating current, and silent mode can be configured by modifying the configuration file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SPI Mode."})," The most common drivers using this mode are TMC5160, TMC2230, etc. These driver chips communicate synchronously with the main controller via SPI, and similarly, settings such as subdivision, operating current, and silent mode can be configured by modifying the configuration file."]}),"\n",(0,s.jsx)(o.A,{image:i(9569).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"driver-installation-1",children:"Driver Installation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Before installing the driver, perform necessary checks to avoid damaging the driver or motherboard."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FLY Driver:"})," If you do not use the infinite zeroing function, set the DIP switch to position 1; if you want to use the infinite zeroing function, set the DIP switch to ON."]}),"\n",(0,s.jsx)(o.A,{image:i(42259).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Note!! When installing the driver module, ensure the correct insertion direction, i.e., the EN pin should be at the top left corner, otherwise it may damage the driver or even the motherboard!! Ensure that the driver has a heatsink attached!!"})}),"\n"]})}),"\n",(0,s.jsx)(o.A,{image:i(34623).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"stepper-motor-wiring",children:"Stepper Motor Wiring"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Regardless of the manufacturer, a two-phase stepper motor will ultimately have four wires. No matter what color they are, black, white, green, yellow, etc., they all correspond to four wires. Therefore, we need to group these wires into two groups, A and B."}),"\n",(0,s.jsx)(n.li,{children:"For a two-phase four-wire stepper motor, we do not need to know which is Group A and which is Group B; mainly, we just need to determine one group. In the configuration, we can change the motor direction."}),"\n"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In a 3D printer, the most commonly used is the two-phase four-wire stepper motor. Its principle is shown in the figure below. There are two methods to identify the wire sequence of a stepper motor:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Connect any two phase wires and turn the motor shaft by hand. If there is a significant resistance, then the two wires form a pair. Otherwise, they do not form a pair, and another pair needs to be tested."}),"\n",(0,s.jsx)(n.li,{children:"Use a multimeter set to continuity mode to test any two phase wires of the stepper motor. If they are connected, then they form a pair; otherwise, they do not form a pair, and another pair needs to be tested."}),"\n"]}),"\n",(0,s.jsx)(o.A,{image:i(33675).A,size:"50%",align:"center"}),"\n",(0,s.jsx)(o.A,{image:i(39618).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"heater-wire-connection",children:"Heater Wire Connection"}),"\n",(0,s.jsx)(o.A,{image:i(62450).A,size:"60%",align:"center"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"bed-wiring",children:"Bed Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"AC Bed:"})," When wiring the solid-state relay, make sure not to connect the input and output incorrectly."]}),"\n",(0,s.jsx)(o.A,{image:i(90681).A,size:"20%",align:"center"}),"\n",(0,s.jsx)(o.A,{image:i(13658).A,size:"40%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DC Bed:"})," When connecting the onboard MOS to a DC bed, pay attention to the power usage. The maximum current for a DC bed cannot exceed 10A. If the current exceeds 10A, it is recommended to use an external MOS module to use the bed, otherwise, it may cause irreversible damage to the motherboard."]}),"\n",(0,s.jsx)(o.A,{image:i(48656).A,size:"60%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"thermistor-wiring",children:"Thermistor Wiring"}),"\n",(0,s.jsx)(n.h3,{id:"thermistor-type-introduction",children:"Thermistor Type Introduction"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The wiring method for the thermistor is as follows. Please consult the purchasing merchant for the type of thermistor."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If purchased from fly (as shown below), please configure ",(0,s.jsx)(n.code,{children:"sensor_type"})," as: ",(0,s.jsx)(n.strong,{children:"ATC Semitec 104GT-2"})]}),"\n",(0,s.jsx)(o.A,{image:i(68814).A,size:"30%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If it is a conventional NTC 100K (as shown below), please configure ",(0,s.jsx)(n.code,{children:"sensor_type"})," as: ",(0,s.jsx)(n.strong,{children:"Generic 3950"})]}),"\n",(0,s.jsx)(o.A,{image:i(96645).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(o.A,{image:i(44380).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"motherboard-thermistor-wiring",children:"Motherboard Thermistor Wiring"}),"\n",(0,s.jsx)(o.A,{image:i(19196).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"fan-wiring",children:"Fan Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Fan Wiring"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Choose the fan voltage. By shorting the corresponding voltage pins with a jumper cap, choose as shown in the following diagram. Note: The jumpers within the yellow boxes in the diagram are the same. Incorrectly choosing the fan voltage may damage the fan or MOS module."})}),"\n",(0,s.jsx)(o.A,{image:i(90299).A,size:"30%",align:"center"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fan Wiring"}),"\n"]}),"\n",(0,s.jsx)(o.A,{image:i(40466).A,size:"30%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"limit-switch-wiring",children:"Limit Switch Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Limit switches come in Normally Open (NO) and Normally Closed (NC) types. Generally, in a 3D printer, it is recommended to use ",(0,s.jsx)(n.strong,{children:"NC"}),". This way, if there is an issue with the limit switch circuit, the system will promptly report an error, preventing unnecessary crashes and damage to the printer."]}),"\n",(0,s.jsx)(o.A,{image:i(38582).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"leveling-sensor-wiring",children:"Leveling Sensor Wiring"}),"\n",(0,s.jsx)(n.h3,{id:"metal-proximity-switch-wiring",children:"Metal Proximity Switch Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"VORON officially recommends using the Omron TL-Q5MC sensor (previously, PL08N was recommended, but the principles are the same, only the detection distance differs) for bed leveling. The wiring method is as shown below."}),"\n",(0,s.jsx)(o.A,{image:i(70945).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"bl-touch-wiring",children:"BL-Touch Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"BL-Touch has five wires, three of which form the first group, responsible for sensor power supply and probe extension/retraction. The second group consists of ground and signal lines, which output limit signals. When wiring BL-Touch, carefully verify the wire sequence; incorrect wiring may permanently damage the sensor and motherboard!! The wiring method is as shown below."}),"\n",(0,s.jsx)(o.A,{image:i(22834).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"klicky-wiring",children:"Klicky Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Klicky is a third-party leveling sensor that can be made at home with low cost and stable performance, making it highly recommended. The wiring method is as shown below."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Project Address: ",(0,s.jsx)(n.a,{href:"https://github.com/jlas1/Klicky-Probe",title:"Project Address, click to jump",children:"jlas1/Klicky-Probe"})]}),"\n",(0,s.jsx)(o.A,{image:i(29432).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"voron-tap-wiring",children:"Voron Tap Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Tap is a nozzle-based z-probe suitable for V2 and Trident printer designs. The entire toolhead moves to trigger the optical switch, providing better precision than a standard limit switch, and can be used with almost all print platforms."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Voron Tap is not recommended to be connected to ",(0,s.jsx)(n.strong,{children:"24V"}),", as some versions may burn out the Tap sensor when using ",(0,s.jsx)(n.strong,{children:"24V"}),". This is not a problem with the Fly product, but a design flaw of Voron Tap. Please be aware!!"]})}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"Note: The 5V and GND connections must not be reversed, otherwise it may damage the Tap sensor or even the motherboard!!"})}),"\n",(0,s.jsx)(o.A,{image:i(39562).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"fly-mini12864-lcd-wiring",children:"FLY-Mini12864 LCD Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The wiring method for FLY's mini12864 is shown below. For screens from other manufacturers, please consult the respective manufacturer. Reversing or misconnecting a Mini12864 screen may result in the host computer being unable to connect to the MCU. If you previously could connect the MCU normally with the motherboard, but after using the mini12864, you cannot connect to the MCU, try unplugging the mini12864 wiring!!"}),"\n",(0,s.jsx)(o.A,{image:i(24183).A,size:"30%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},55077:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/interface-3f1fbb275ea911eba6ece9b531f864cf.png"},18701:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/pin-7398f65751f45789d4a85e5f6d99d6fc.png"},13658:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/bed-ac-2-33c5c72d7000182c0e0185f9398b2d97.png"},48656:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/bed-dc-5a9741b5d5b10dd4e66c4ef20dfadabb.png"},22834:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/bltouch-7d74048adf7c5d443aa86bce52465473.png"},38582:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/endstop-665027cc172f8e4b926c327306141dc0.png"},90299:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/fan-voltage-8537ecd75be12fcc6dd3f79259209ecc.png"},40466:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/fan-2b45e62c86b78a3067ed703b0e14dfb0.png"},62450:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/heater-3fb8aad9330075443f6014fe3b972500.png"},29432:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/klicky-a4293c5f57308ee705c93123ec3c32e4.png"},24183:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/mini12864-fdbf5179d938f6bf1ed521e77950440f.png"},39618:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/motor-ae4693a15e3eb1f64ec76d832e363f9b.png"},70945:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/pl08-abde6ae0bade8e550fabd7dd54835491.png"},19042:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/power-fc362f05a8a0d28aa8bf3e44c10d63b1.png"},39562:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/tap-59aa8892302213f98334332efa1a60da.png"},19196:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/thermistor-3798122c8634d3b2ca494ff23d016086.png"},90681:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/bed-ac-1-a4b4eab93ba1947b0f5255d44742eb3f.png"},9569:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/drive-dip-1aebf17b24c834f025388ade3bf8e272.png"},34623:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/drive-install-56d7ab81c9915397e3f2fd81ba34e36f.png"},42259:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/fly2209-1cee8fa0494f5b62764ed69e253bed6e.png"},33675:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/motor-sch-b16829f4e51bb69ef280f7db774a904b.png"},68814:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/ntc-1-746ec56dfccc1c129fb2bb5239a37c3d.png"},96645:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/ntc-2-0330ce02c944c6cee65495605121ac0a.png"},44380:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/ntc-3-5434e95a50b04bcf3cf4a8905fd23687.png"}}]);