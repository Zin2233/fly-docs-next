"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["39085"],{27490:function(n,e,s){s.r(e),s.d(e,{default:()=>t,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>a,contentTitle:()=>c});var i=JSON.parse('{"id":"ProductDoc/ExtensionBoard/bd-sensor/marlin","title":"\uC124\uCE58  **BD\uC13C\uC11C**","description":"\uC13C\uC11C \uCF00\uC774\uBE14\uC744 \uBA54\uC778\uBCF4\uB4DC \uB610\uB294 CAN \uBC84\uC2A4 \uD5E4\uB4DC\uBCF4\uB4DC\uC5D0 \uC5F0\uACB0\uD569\uB2C8\uB2E4.","source":"@site/i18n/ko/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/bd-sensor/marlin.mdx","sourceDirName":"ProductDoc/ExtensionBoard/bd-sensor","slug":"/ProductDoc/ExtensionBoard/bd-sensor/marlin","permalink":"/fly-docs-next/ko/docs/ProductDoc/ExtensionBoard/bd-sensor/marlin","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/bd-sensor/marlin.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Marlin \uC0AC\uC6A9"},"sidebar":"tutorialSidebar","previous":{"title":"klipper \uC0AC\uC6A9","permalink":"/fly-docs-next/ko/docs/ProductDoc/ExtensionBoard/bd-sensor/kliper"},"next":{"title":"klipper \uC790\uB3D9 Z-OFFSET","permalink":"/fly-docs-next/ko/docs/ProductDoc/ExtensionBoard/bd-sensor/klipperpz"}}'),r=s("74132"),d=s("94551");let l={sidebar_position:3,sidebar_label:"Marlin \uC0AC\uC6A9"},c="\uC124\uCE58  BD\uC13C\uC11C",o={},a=[{value:"\uC13C\uC11C \uCF00\uC774\uBE14\uC744 \uBA54\uC778\uBCF4\uB4DC \uB610\uB294 CAN \uBC84\uC2A4 \uD5E4\uB4DC\uBCF4\uB4DC\uC5D0 \uC5F0\uACB0\uD569\uB2C8\uB2E4.",id:"\uC13C\uC11C-\uCF00\uC774\uBE14\uC744-\uBA54\uC778\uBCF4\uB4DC-\uB610\uB294-can-\uBC84\uC2A4-\uD5E4\uB4DC\uBCF4\uB4DC\uC5D0-\uC5F0\uACB0\uD569\uB2C8\uB2E4",level:2},{value:"Marlin \uD38C\uC6E8\uC5B4\uC5D0 \uD328\uCE58 \uC124\uCE58",id:"marlin-\uD38C\uC6E8\uC5B4\uC5D0-\uD328\uCE58-\uC124\uCE58",level:2},{value:"\uAD6C\uC131.h \uD3B8\uC9D1",id:"\uAD6C\uC131h-\uD3B8\uC9D1",level:3},{value:"Configuration_adv.h \uD3B8\uC9D1",id:"configuration_advh-\uD3B8\uC9D1",level:3},{value:"pins_boardname.h \uD3B8\uC9D1",id:"pins_boardnameh-\uD3B8\uC9D1",level:3},{value:"LCD \uD654\uBA74\uC5D0\uC11C Bdsensor \uAC12 \uD45C\uC2DC",id:"lcd-\uD654\uBA74\uC5D0\uC11C-bdsensor-\uAC12-\uD45C\uC2DC",level:2},{value:"\uCE98\uB9AC\uBE0C\uB808\uC774\uC158",id:"\uCE98\uB9AC\uBE0C\uB808\uC774\uC158",level:2},{value:"\uD14C\uC2A4\uD2B8 \uBC0F \uD504\uB9B0\uD305",id:"\uD14C\uC2A4\uD2B8-\uBC0F-\uD504\uB9B0\uD305",level:2},{value:"\uCE68\uC9C0\uD310 \uC790\uB3D9 \uB808\uBCA8\uB9C1\uC758 \uB450 \uAC00\uC9C0 \uBC29\uBC95:",id:"\uCE68\uC9C0\uD310-\uC790\uB3D9-\uB808\uBCA8\uB9C1\uC758-\uB450-\uAC00\uC9C0-\uBC29\uBC95",level:2},{value:"Z \uC5D4\uB4DC\uC2A4\uD1B1 \uD655\uC778 <code>M119</code>",id:"z-\uC5D4\uB4DC\uC2A4\uD1B1-\uD655\uC778-m119",level:3},{value:"\uC5F0\uACB0 \uD655\uC778",id:"\uC5F0\uACB0-\uD655\uC778",level:3},{value:"\uB9CC\uC57D \uBAA8\uB4E0 \uB2E8\uACC4\uAC00 \uC62C\uBC14\uB974\uAC8C \uC218\uD589\uB418\uC5C8\uB2E4\uBA74, \uC774\uC81C Z\uCD95\uC744 \uD648\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",id:"\uB9CC\uC57D-\uBAA8\uB4E0-\uB2E8\uACC4\uAC00-\uC62C\uBC14\uB974\uAC8C-\uC218\uD589\uB418\uC5C8\uB2E4\uBA74-\uC774\uC81C-z\uCD95\uC744-\uD648\uD654\uD560-\uC218-\uC788\uC2B5\uB2C8\uB2E4",level:2}];function h(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...n.components},{ImageView:i}=e;return i||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsxs)(e.h1,{id:"\uC124\uCE58--bd\uC13C\uC11C",children:["\uC124\uCE58  ",(0,r.jsx)(e.strong,{children:"BD\uC13C\uC11C"})]})}),"\n",(0,r.jsx)(e.h2,{id:"\uC13C\uC11C-\uCF00\uC774\uBE14\uC744-\uBA54\uC778\uBCF4\uB4DC-\uB610\uB294-can-\uBC84\uC2A4-\uD5E4\uB4DC\uBCF4\uB4DC\uC5D0-\uC5F0\uACB0\uD569\uB2C8\uB2E4",children:"\uC13C\uC11C \uCF00\uC774\uBE14\uC744 \uBA54\uC778\uBCF4\uB4DC \uB610\uB294 CAN \uBC84\uC2A4 \uD5E4\uB4DC\uBCF4\uB4DC\uC5D0 \uC5F0\uACB0\uD569\uB2C8\uB2E4."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"SB2040\uB294 Bdsensor\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."}),"\n",(0,r.jsx)(e.li,{children:"SHT36\uC740 Bdsensor\uC758 CLK/SCL    (\uC785\uB825)\uB97C \uACE0\uC804\uC555 \uC785\uB825 \uD3EC\uD2B8\uC5D0 \uC5F0\uACB0\uD558\uACE0 \uC810\uD37C\uB97C \uC7A5\uCC29\uD574\uC57C \uD569\uB2C8\uB2E4."}),"\n",(0,r.jsx)(e.li,{children:"Bdsensor\uC758 CKL \uBC0F SDA \uC120\uC740 \uD68C\uB85C\uD310\uC758 \uC784\uC758\uC758 GPIO \uD540\uC5D0 \uC5F0\uACB0\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C Bdsensor \uCF00\uC774\uBE14\uC744 \uC608\uB97C \uB4E4\uC5B4 Bltouch \uD3EC\uD2B8\uC5D0 \uC9C1\uC811 \uC5F0\uACB0\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"BLtouch    |    Bdsensor\n5V       --\x3e     5V\nGND      --\x3e     GND\nS        --\x3e     CLK/SCL    (\uC785\uB825)\nGND      --\x3e     GND\nZmin     --\x3e     SDA    (\uC785\uB825/\uCD9C\uB825) \n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\uBA54\uC778\uBCF4\uB4DC \uCEE4\uB125\uD130\uC758 \uC77C\uBD80 \uD540\uC740 MCU\uC758 gpios\uC5D0 \uC9C1\uC811 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uC608\uB97C \uB4E4\uC5B4, \uADF8\uB4E4 \uC704\uC5D0\uB294 \uD544\uD130\uB9C1 \uCE90\uD328\uC2DC\uD130\uAC00 \uC788\uAC70\uB098 MOSFET, \uB2E4\uC774\uC624\uB4DC \uB610\uB294 \uAD11\uCEE4\uD50C\uB7EC\uB97C \uD1B5\uD574 \uACA9\uB9AC\uB420 \uC218 \uC788\uC73C\uBA70, \uB9CC\uC57D \uADF8\uB4E4\uC774 \uC800\uD56D\uC744 \uD1B5\uD574 \uACA9\uB9AC\uB41C\uB2E4\uBA74, \uADF8\uB4E4\uB3C4 Bdsensor\uC640 \uD568\uAED8 \uC0AC\uC6A9\uB420 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uD38C\uC6E8\uC5B4\uB294 \uC5F0\uACB0 \uC624\uB958\uB97C \uBCF4\uACE0\uD560 \uAC83\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\uD32C\uACFC \uD788\uD130\uC758 \uCEE4\uB125\uD130\uB294 MOSFET\uC744 \uD1B5\uD574 \uACA9\uB9AC\uB429\uB2C8\uB2E4,"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\uC77C\uBD80 \uD68C\uB85C\uD310\uC5D0\uC11C \uC628\uB3C4 \uD56B\uB9AC\uC800\uC2A4\uD130 \uBC0F \uC5D4\uB4DC\uC2A4\uD1B1/\uD504\uB85C\uBE0C\uB97C \uC704\uD55C \uCEE4\uB125\uD130\uB294 \uC77C\uBC18\uC801\uC73C\uB85C GND\uC5D0 \uD544\uD130\uB9C1 \uCE90\uD328\uC2DC\uD130\uB97C \uD1B5\uD574 \uC5F0\uACB0\uB429\uB2C8\uB2E4,"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\uC544\uB798 \uADF8\uB9BC\uACFC \uAC19\uC774, Bdsensor\uB97C \uC5F4\uB2E8\uC790 \uADFC\uCC98\uC5D0 \uC124\uCE58\uD569\uB2C8\uB2E4. ",(0,r.jsx)(e.a,{href:"https://www.thingiverse.com/thing:6098131",children:"mount STL"}),",  ",(0,r.jsx)(e.a,{href:"https://discord.com/channels/829828765512106054/1163237892957671424",children:"STL_mount_VzBot_Goliath short"})]}),"\n",(0,r.jsx)(i,{image:s(47663).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"marlin-\uD38C\uC6E8\uC5B4\uC5D0-\uD328\uCE58-\uC124\uCE58",children:"Marlin \uD38C\uC6E8\uC5B4\uC5D0 \uD328\uCE58 \uC124\uCE58"}),"\n",(0,r.jsx)(e.p,{children:"Bdsensor\uB294 Marlin2.1.x (2022.8.27\uBD80\uD130)\uC5D0 \uD1B5\uD569\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),"\n",(0,r.jsxs)(e.p,{children:["\uBC1C\uD589 \uBC84\uC804\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uD604\uC7AC \uCD5C\uC2E0 \uC624\uB958 \uC218\uC815 \uBC84\uC804\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uB294 \uAC83\uC774 \uAD8C\uC7A5\uB429\uB2C8\uB2E4: ",(0,r.jsx)(e.a,{href:"https://github.com/MarlinFirmware/Marlin",children:"https://github.com/MarlinFirmware/Marlin"})]}),"\n",(0,r.jsx)(e.p,{children:"\uD544\uC694\uD55C \uAC83\uC740 \uAD6C\uC131 \uD30C\uC77C\uACFC \uD540 \uD30C\uC77C\uC744 \uBCC0\uACBD\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4."}),"\n",(0,r.jsx)(e.h3,{id:"\uAD6C\uC131h-\uD3B8\uC9D1",children:"\uAD6C\uC131.h \uD3B8\uC9D1"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"BD\uC13C\uC11C \uD65C\uC131\uD654"}),"\n",(0,r.jsx)(e.p,{children:"\uC8FC\uC11D \uD574\uC81C"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#define BD_SENSOR`\n`#define Z_SAFE_HOMING\n#define BD_SENSOR_PROBE_NO_STOP //fast bed leveling without nozzle stop\uC744 \uC704\uD574 \uC774 \uC0C8\uB85C\uC6B4 \uC904\uC744 \uCD94\uAC00,\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\uB2E8\uC9C0 ",(0,r.jsx)(e.code,{children:"BD_SENSOR_PROBE_NO_STOP"})]}),"\n",(0,r.jsxs)(e.p,{children:["\uCD5C\uC2E0 Marlin \uC624\uB958 \uC218\uC815: ",(0,r.jsx)(e.a,{href:"https://github.com/MarlinFirmware/Marlin",children:"https://github.com/MarlinFirmware/Marlin"})]}),"\n",(0,r.jsxs)(e.p,{children:["\uC124\uBA85: ",(0,r.jsx)(e.a,{href:"https://github.com/MarlinFirmware/Marlin/pull/25847",children:"https://github.com/MarlinFirmware/Marlin/pull/25847"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\uD504\uB85C\uBE0C\uB97C \uC0AC\uC6A9\uD55C Z\uCD95 \uD648\uD654"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN"}),"\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uACE0 ",(0,r.jsx)(e.code,{children:"USE_PROBE_FOR_Z_HOMING"}),"\uC774 \uB2E4\uC74C\uCC98\uB7FC \uD65C\uC131\uD654\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"//#define Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN\n// Z\uCD95 \uD648\uD654\uB97C \uC704\uD574 \uD504\uB85C\uBE0C \uAC15\uC81C \uC0AC\uC6A9\n#define USE_PROBE_FOR_Z_HOMING\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\uB450 \uBC88\uC9F8 Z \uD648\uD654 \uC18D\uB3C4 \uAC10\uC18C"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#define Z_PROBE_FEEDRATE_SLOW (Z_PROBE_FEEDRATE_FAST / 16)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\uC5EC\uAE30\uC11C \uC6B0\uB9AC\uB294 Bdsensor \uD504\uB85C\uC138\uC2A4\uC5D0\uC11C \uC77D\uC740 \uC2A4\uD1B1\uD37C\uC758 \uC18D\uB3C4\uB97C \uB290\uB9AC\uAC8C \uD574\uC57C \uD558\uBA70, \uC77C\uBC18\uC801\uC778 \uC2A4\uD1B1\uD37C\uCC98\uB7FC \uC2E4\uC2DC\uAC04\uC73C\uB85C \uC791\uB3D9\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4."}),"\n",(0,r.jsx)(e.h3,{id:"configuration_advh-\uD3B8\uC9D1",children:"Configuration_adv.h \uD3B8\uC9D1"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"#define BABYSTEPPING"})," \uC774 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD558\uC5EC \uC2E4\uC2DC\uAC04 \uD3C9\uD0C4\uD654 \uAE30\uB2A5\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#define HOMING_BUMP_DIVISOR { 2, 2, 8 }       // Re-Bump Speed Divisor (Homing Feedrate\uB97C \uB098\uB215\uB2C8\uB2E4)\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"pins_boardnameh-\uD3B8\uC9D1",children:"pins_boardname.h \uD3B8\uC9D1"}),"\n",(0,r.jsxs)(e.p,{children:["\uD540 \uD30C\uC77C pins_boardname.h\uC5D0\uC11C Bdsensor\uC758 SDA \uBC0F SCL \uD540\uC744 \uAD6C\uC131\uD558\uAE30 \uC704\uD574 \uB2E4\uC74C 3\uC904\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4 (\uC608\uB97C \uB4E4\uC5B4): ",(0,r.jsx)(e.code,{children:"pins_PANDA_PI_V29.h"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#define  I2C_BD_SDA_PIN    PC6   // SDA \uC640\uC774\uC5B4\uAC00 \uBA54\uC778\uBCF4\uB4DC\uC5D0 \uC2E4\uC81C\uB85C \uC5F0\uACB0\uB41C \uBC88\uD638\uB85C \uBCC0\uACBD\uD558\uC2ED\uC2DC\uC624.\n#define  I2C_BD_SCL_PIN    PB2   // SLC \uC640\uC774\uC5B4\uAC00 \uBA54\uC778\uBCF4\uB4DC\uC5D0 \uC2E4\uC81C\uB85C \uC5F0\uACB0\uB41C \uBC88\uD638\uB85C \uBCC0\uACBD\uD558\uC2ED\uC2DC\uC624.\n#define  I2C_BD_DELAY  20      // \uAE30\uBCF8\uAC12\uC740 20\uC774\uBA70, \uBC94\uC704\uB294 [20,50]\uC785\uB2C8\uB2E4.\n"})}),"\n",(0,r.jsx)(e.p,{children:"\uC790\uB3D9 \uCE68\uC9C0/\uCD9C\uACA9\uC774 \uC788\uB294 \uD504\uB9B0\uD305 \uC804\uC5D0 \uC77C\uBC18\uC801\uC778 BLtouch\uCC98\uB7FC Bdsensor\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uC8FC\uC11D \uD574\uC81C"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#define AUTO_BED_LEVELING_BILINEAR\n"})}),"\n",(0,r.jsx)(e.p,{children:"\uADF8\uB9AC\uACE0 \uAC12\uC774 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD3B8\uC9D1\uB429\uB2C8\uB2E4"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#define Z_CLEARANCE_DEPLOY_PROBE   0 // \uCE68\uC9C0/\uCD9C\uACA9\uC744 \uC704\uD55C Z \uD074\uB9AC\uC5B4\uB7F0\uC2A4\n#define Z_CLEARANCE_BETWEEN_PROBES  1 // \uD504\uB85C\uBE0C \uD3EC\uC778\uD2B8 \uAC04\uC758 Z \uD074\uB9AC\uC5B4\uB7F0\uC2A4\n#define Z_CLEARANCE_MULTI_PROBE     1 // \uC5EC\uB7EC \uD504\uB85C\uBE0C \uAC04\uC758 Z \uD074\uB9AC\uC5B4\uB7F0\uC2A4\n"})}),"\n",(0,r.jsx)(e.h2,{id:"lcd-\uD654\uBA74\uC5D0\uC11C-bdsensor-\uAC12-\uD45C\uC2DC",children:"LCD \uD654\uBA74\uC5D0\uC11C Bdsensor \uAC12 \uD45C\uC2DC"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uD504\uB9B0\uD130\uAC00 \uC0C1\uD0DC \uD45C\uC2DC\uB97C \uC9C0\uC6D0\uD558\uB294 \uACBD\uC6B0(\uC608: LCD12864 \uB610\uB294 Ender3V2 \uAC19\uC740 UART \uD654\uBA74)"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\uCE98\uB9AC\uBE0C\uB808\uC774\uC158",children:"\uCE98\uB9AC\uBE0C\uB808\uC774\uC158"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\uB178\uC990\uC744 \uCCAD\uC18C\uD55C \uD6C4, \uCEE8\uC194\uC744 \uC0AC\uC6A9\uD558\uC5EC Z \uCD95\uC744 \uC81C\uC5B4\uD558\uC5EC \uB178\uC990\uC774 \uCE68\uC9C0\uD310\uC5D0 \uC815\uD655\uD788 \uC811\uCD09\uD558\uB3C4\uB85D \uD569\uB2C8\uB2E4(Bdsensor\uB294 \uC774 \uC704\uCE58\uB97C 0\uC810\uC73C\uB85C \uC0AC\uC6A9\uD558\uBBC0\uB85C z_offset \uAC12\uC744 \uC124\uC815\uD558\uC9C0 \uC54A\uC544\uB3C4 \uB429\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 \uC774 \uAC12\uC744 0\uC73C\uB85C \uC124\uC815\uD569\uB2C8\uB2E4)."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Gcode \uBA85\uB839 ",(0,r.jsx)(e.code,{children:"M102 S-6"}),"\uB97C \uBCF4\uB0B4\uC11C \uD504\uB9B0\uD130\uAC00 Z \uCD95\uC744 \uB9E4\uBC88 0.1mm\uC529 \uCC9C\uCC9C\uD788 \uC704\uB85C \uC774\uB3D9\uD558\uAC8C \uD569\uB2C8\uB2E4. 4mm\uAE4C\uC9C0 \uB3C4\uB2EC\uD560 \uB54C\uAE4C\uC9C0 \uACC4\uC18D\uD569\uB2C8\uB2E4. \uC13C\uC11C\uB97C \uC124\uCE58\uD558\uAE30 \uC804\uC5D0 M102 S-6\uB97C \uC2E4\uD589\uD558\uAC70\uB098 \uCE98\uB9AC\uBE0C\uB808\uC774\uC158 \uC911\uC5D0 \uD504\uB9B0\uD130 \uC804\uC6D0\uC744 \uB044\uC9C0 \uB9C8\uC2ED\uC2DC\uC624. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uC624\uB798\uB41C \uCE98\uB9AC\uBE0C\uB808\uC774\uC158 \uB370\uC774\uD130\uAC00 \uC0AD\uC81C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7F0 \uACBD\uC6B0\uC5D0\uB294 \uB2E4\uC2DC \uCE98\uB9AC\uBE0C\uB808\uC774\uC158\uD574\uC57C \uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"M102 S-5"}),"\uB97C \uBCF4\uB0B4\uC11C Bdsensor\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uCE98\uB9AC\uBE0C\uB808\uC774\uC158\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uAC83\uC740 Bdsensor\uC5D0 \uC800\uC7A5\uB41C \uC6D0\uC2DC \uCE98\uB9AC\uBE0C\uB808\uC774\uC158 \uB370\uC774\uD130\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\uC774 \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uC218 \uC788\uB294 \uCE98\uB9AC\uBE0C\uB808\uC774\uC158 \uB3C4\uAD6C\uB3C4 \uC788\uC2B5\uB2C8\uB2E4: ",(0,r.jsx)(e.a,{href:"https://github.com/markniu/Bed_Distance_sensor/raw/new/marlin/BD_Config_Tool_Marlin.zip",children:"https://github.com/markniu/Bed_Distance_sensor/raw/new/marlin/BD_Config_Tool_Marlin.zip"})," ",(0,r.jsx)(e.img,{src:"https://raw.githubusercontent.com/markniu/Bed_Distance_sensor/main/doc/images/Read.jpg",alt:"img"})]}),"\n",(0,r.jsx)(e.p,{children:"\uC8FC\uC758: 1015 \uB610\uB294 \uADF8 \uC774\uC0C1\uC758 \uB370\uC774\uD130 \uAC12\uC740 \uC13C\uC11C \uBC94\uC704\uB97C \uCD08\uACFC\uD568\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4. 0\uC5D0\uC11C 1000 \uC0AC\uC774\uC758 \uAC12\uC774 5\uAC1C \uC774\uC0C1\uC774\uAC70\uB098 \uC99D\uAC00\uD558\uB294 \uAC12 delta\uAC00 >=10\uC774\uBA74 \uCE98\uB9AC\uBE0C\uB808\uC774\uC158\uC774 \uC131\uACF5\uD588\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC704\uC5D0\uC11C \uBCF4\uC5EC\uC9C4 \uCC28\uD2B8\uC640 \uAC19\uC2B5\uB2C8\uB2E4."}),"\n",(0,r.jsx)(e.p,{children:"\uB9CC\uC57D M102 S-5\uAC00 \uCCAB \uBC88\uC9F8 \uC6D0\uC2DC \uCE98\uB9AC\uBE0C\uB808\uC774\uC158 \uB370\uC774\uD130\uAC00 400\uBCF4\uB2E4 \uD06C\uBA74 \uC13C\uC11C\uAC00 \uB108\uBB34 \uB192\uAC8C \uC124\uCE58\uB418\uC5C8\uC74C\uC744 \uC758\uBBF8\uD558\uBA70 \uC7AC\uC124\uCE58\uD558\uC5EC \uCE68\uC9C0\uD310\uC5D0 \uB354 \uAC00\uAE4C\uC6CC\uC838\uC57C \uD569\uB2C8\uB2E4. \uB610\uD55C \uB450 \uBC88\uC9F8 \uB370\uC774\uD130\uAC00 \uCCAB \uBC88\uC9F8 \uB370\uC774\uD130\uBCF4\uB2E4 10 \uC774\uC0C1 \uD070\uC9C0 \uD655\uC778\uD558\uC2ED\uC2DC\uC624"}),"\n",(0,r.jsx)(e.h2,{id:"\uD14C\uC2A4\uD2B8-\uBC0F-\uD504\uB9B0\uD305",children:"\uD14C\uC2A4\uD2B8 \uBC0F \uD504\uB9B0\uD305"}),"\n",(0,r.jsx)(e.p,{children:"\uBA54\uB274 \uBCA0\uB4DC \uB808\uC774\uC5B4"}),"\n",(0,r.jsx)(e.p,{children:"\uC790\uB3D9 \uBCA0\uB4DC \uB808\uC774\uC5B4"}),"\n",(0,r.jsx)(e.h2,{id:"\uCE68\uC9C0\uD310-\uC790\uB3D9-\uB808\uBCA8\uB9C1\uC758-\uB450-\uAC00\uC9C0-\uBC29\uBC95",children:"\uCE68\uC9C0\uD310 \uC790\uB3D9 \uB808\uBCA8\uB9C1\uC758 \uB450 \uAC00\uC9C0 \uBC29\uBC95:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"1. M102\uB97C \uC0AC\uC6A9\uD55C \uC2E4\uC2DC\uAC04 \uB808\uC774\uC5B4 \uB808\uBCA8\uB9C1"})}),"\n",(0,r.jsx)(e.p,{children:"\uC774 \uC790\uB3D9 \uB808\uBCA8\uB9C1\uC744 \uC27D\uAC8C \uD65C\uC131\uD654\uD558\uAC70\uB098 \uBE44\uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,r.jsxs)(e.p,{children:["Kula\uC5D0\uC11C \uBCA0\uB4DC \uB808\uC774\uC5B4\uB97C \uD65C\uC131\uD654\uD558\uB824\uBA74 G102 (\uBAA8\uB4E0 \uCD95\uC744 \uD648\uD654) G \uCF54\uB4DC \uBC14\uB85C \uC544\uB798\uC5D0 M28 G \uCF54\uB4DC\uB97C \uCD94\uAC00\uD558\uC138\uC694. \uC608\uB97C \uB4E4\uC5B4, G28 \uC544\uB798\uC5D0 \uCD94\uAC00\uD558\uBA74 Z \uCD95 \uB192\uC774 0.2mm \uBBF8\uB9CC\uC5D0\uC11C\uB9CC \uBCA0\uB4DC \uB808\uC774\uC5B4\uAC00 \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4.",(0,r.jsx)(e.code,{children:"M102 S2"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"M102 S0"}),"\uB85C Bdsensor\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBCA0\uB4DC \uB808\uC774\uC5B4\uB97C \uBE44\uD65C\uC131\uD654\uD558\uAC70\uB098, ",(0,r.jsx)(e.code,{children:"M18"}),"\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC774\uB97C \uC218\uD589\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"M102   S-1     //\uC5F0\uACB0 \uD655\uC778\uC744 \uC704\uD574 \uC13C\uC11C \uC815\uBCF4 \uC77D\uAE30.\nM102   S-2     //\uD604\uC7AC \uAC70\uB9AC \uAC12 \uC77D\uAE30\nM102   S-5     //\uC6D0\uC2DC \uCE98\uB9AC\uBE0C\uB808\uC774\uC158 \uB370\uC774\uD130 \uC77D\uAE30\nM102   S-6     //\uC870\uC815\uC744 \uC2DC\uC791\uD558\uAE30 \uC804\uC5D0 \uB178\uC990\uC774 \uCE68\uC9C0\uD310\uC5D0 \uC811\uCD09\uD558\uB3C4\uB85D \uD558\uC138\uC694. Z \uCD95\uC744 \uD648\uD654\uD558\uC9C0 \uB9C8\uC2ED\uC2DC\uC624.\nM102   S4      //\uC870\uC815 \uAC00\uB2A5\uD55C Z \uB192\uC774 \uAC12 \uC124\uC815, \uC608\uB97C \uB4E4\uC5B4 M102 S4\uB294 Z \uB192\uC774\uAC00 0.4mm \uC774\uD558\uC77C \uB54C \uC870\uC815\uC744 \uC218\uD589\uD558\uBA70, \uC774\uB97C \uBE44\uD65C\uC131\uD654\uD558\uB824\uBA74 M102 S0\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"2. G29\uB97C \uC0AC\uC6A9\uD55C \uC790\uB3D9 \uBCA0\uB4DC \uB808\uC774\uC5B4"})}),"\n",(0,r.jsx)(e.p,{children:"\uB2E4\uB978 \uC790\uB3D9 \uBCA0\uB4DC \uB808\uC774\uC5B4 \uBC29\uBC95\uC740 BLtouch\uC640 \uB3D9\uC77C\uD55C \uBC29\uC2DD\uC73C\uB85C G29\uCC98\uB7FC \uC791\uB3D9\uD569\uB2C8\uB2E4. G29 \uC544\uB798\uC5D0 \uD55C \uC904\uC744 \uCD94\uAC00\uD558\uBA74 \uB429\uB2C8\uB2E4."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://www.pandapi3d.com/post/install-bed-distance-sensor-video",children:"\uC124\uCE58 \uB3D9\uC601\uC0C1"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://youtu.be/VLUfvkO2NFc?si=PF_6nhw39KhHBhcj",children:"\uD06C\uB9AC\uC2A4 \uC9C0\uD558\uC2E4\uC758 \uC124\uCE58 \uB3D9\uC601\uC0C1"})}),"\n",(0,r.jsxs)(e.h3,{id:"z-\uC5D4\uB4DC\uC2A4\uD1B1-\uD655\uC778-m119",children:["Z \uC5D4\uB4DC\uC2A4\uD1B1 \uD655\uC778 ",(0,r.jsx)(e.code,{children:"M119"})]}),"\n",(0,r.jsx)(e.p,{children:"\uC774 \uB2E8\uACC4\uB97C \uD655\uC778\uD558\uAE30 \uC804\uC5D0 Z\uB97C \uD648\uD654\uD558\uC9C0 \uB9C8\uC2ED\uC2DC\uC624. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uB178\uC990\uC774 \uD504\uB9B0\uD305 \uCE68\uC9C0\uD310\uC744 \uB118\uCE60 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,r.jsx)(e.p,{children:"M119 \uBA85\uB839 (\uC5D4\uB4DC\uC2A4\uD1B1 \uC0C1\uD0DC \uBCF4\uACE0)\uC744 \uBCF4\uB0B4\uACE0 \uBC1B\uC740 \uBA54\uC2DC\uC9C0\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"Send: M119\nRecv: x:open y:open z:open\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\uB9CC\uC57D z min\uC774 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uB2E4\uBA74, \uC124\uC815\uC744 \uD655\uC778\uD558\uC2ED\uC2DC\uC624. ",(0,r.jsx)(e.code,{children:"#define Z_MAX_ENDSTOP_HIT_STATE HIGH"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Z \uBAA8\uD130\uB97C \uAEBC\uD558\uAC70\uB098 \uC7A0\uAE08 \uD574\uC81C"}),"\n",(0,r.jsx)(e.li,{children:"\uC190\uC73C\uB85C Z \uCD95\uC744 \uC544\uB798\uB85C \uC6C0\uC9C1\uC5EC \uB178\uC990\uC774 \uCE68\uC9C0\uD310\uC5D0 \uB2EB\uD788\uB3C4\uB85D \uD569\uB2C8\uB2E4."}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"M102 S-2"}),"\uB97C \uBCF4\uB0B4\uBA74 \uAC12\uC774 0.00mm\uAC00 \uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uB2E4\uC2DC M119\uB97C \uBCF4\uB0B4\uBA74 Z \uC5D4\uB4DC\uC2A4\uD1B1\uC774 \uC774\uC81C \uD2B8\uB9AC\uAC70\uB428\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"Send: M119\nRecv: x:open y:open z:TRIGGERED\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\uC5F0\uACB0-\uD655\uC778",children:"\uC5F0\uACB0 \uD655\uC778"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"M102 S-1"}),"\uC744 \uD1B5\uD574 \uC5F0\uACB0\uC744 \uD655\uC778\uD569\uB2C8\uB2E4. \uC774\uB294 \uBC18\uD658 \uBA54\uC2DC\uC9C0\uC758 \uC608\uC2DC\uC774\uBA70, \uC5F0\uACB0\uACFC \uC640\uC774\uC5B4 \uC21C\uC11C\uB97C \uD655\uC778\uD558\uAE30 \uC704\uD574 \uACF5\uBC31\uC774\uB098 \uB2E4\uB978 \uBB38\uC790\uC5F4\uC774 \uBC18\uD658\uB418\uB294\uC9C0 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"Send: M102 S-1\nRecv: V1.0 pandapi3d.com\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\uB9CC\uC57D-\uBAA8\uB4E0-\uB2E8\uACC4\uAC00-\uC62C\uBC14\uB974\uAC8C-\uC218\uD589\uB418\uC5C8\uB2E4\uBA74-\uC774\uC81C-z\uCD95\uC744-\uD648\uD654\uD560-\uC218-\uC788\uC2B5\uB2C8\uB2E4",children:"\uB9CC\uC57D \uBAA8\uB4E0 \uB2E8\uACC4\uAC00 \uC62C\uBC14\uB974\uAC8C \uC218\uD589\uB418\uC5C8\uB2E4\uBA74, \uC774\uC81C Z\uCD95\uC744 \uD648\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})]})}function t(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},47663:function(n,e,s){s.d(e,{Z:function(){return i}});let i=s.p+"assets/images/bd-4d1080107145fed7d8a6ac8c4e5d9536.webp"},94551:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return l}});var i=s(39546);let r={},d=i.createContext(r);function l(n){let e=i.useContext(d);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);