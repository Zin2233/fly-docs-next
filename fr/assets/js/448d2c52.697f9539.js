"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["70"],{4735:function(e,n,i){i.d(n,{ZP:function(){return c},d$:function(){return s}});var t=i(52676),r=i(79938);let s=[];function o(e){let n={admonition:"admonition",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Conseils d'utilisation de la position infinie",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"L'utilisation de la position infinie n\xe9cessite l'occupation d'un port de fin de course. Normalement, la position de conduite num\xe9ro un utilise IO1, la position de conduite num\xe9ro deux utilise IO2, et ainsi de suite."}),"\n",(0,t.jsx)(n.li,{children:"Veuillez noter que lors de l'utilisation de la position infinie, il ne faut rien connecter aux ports de fin de course correspondants."}),"\n",(0,t.jsx)(n.li,{children:"Pour certaines cartes m\xe8res FLY, les ports de commande sont directement connect\xe9s. Veuillez v\xe9rifier si DIAG est directement connect\xe9 aux broches correspondantes."}),"\n"]})})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},51333:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>p,assets:()=>l,toc:()=>a,frontMatter:()=>c});var t=JSON.parse('{"id":"ProductDoc/ModuleDrive/tmc2209","title":"TMC 2209","description":"Param\xe8tres de base","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ModuleDrive/tmc2209.mdx","sourceDirName":"ProductDoc/ModuleDrive","slug":"/ProductDoc/ModuleDrive/tmc2209","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc2209","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ModuleDrive/tmc2209.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/"},"next":{"title":"TMC 2240","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc2240"}}'),r=i("52676"),s=i("79938"),o=i("4735");let c={sidebar_position:1},d="TMC 2209",l={},a=[{value:"Param\xe8tres de base",id:"param\xe8tres-de-base",level:2},{value:"Explication des cavaliers de la carte m\xe8re",id:"explication-des-cavaliers-de-la-carte-m\xe8re",level:2},{value:"Configuration de r\xe9f\xe9rence pour TMC2209",id:"configuration-de-r\xe9f\xe9rence-pour-tmc2209",level:2},{value:"Instructions pour l&#39;utilisation sans fin de course",id:"instructions-pour-lutilisation-sans-fin-de-course",level:2},...o.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Button:t,ImageView:c}=n;return!t&&m("Button",!0),!c&&m("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tmc-2209",children:"TMC 2209"})}),"\n",(0,r.jsx)(c,{image:i(91798).Z,size:"80%",align:"center"}),"\n",(0,r.jsx)(n.h2,{id:"param\xe8tres-de-base",children:"Param\xe8tres de base"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tension d'entr\xe9e : 12V-24V"}),"\n",(0,r.jsx)(n.li,{children:"Adapt\xe9 pour : Firmware Marlin/Klipper/RRF"}),"\n",(0,r.jsx)(n.li,{children:"Le moteur ne perd pas facilement des pas"}),"\n",(0,r.jsx)(n.li,{children:"Supporte le mode silencieux"}),"\n",(0,r.jsx)(n.li,{children:"Patins thermiques de grande surface pour le ventilateur, r\xe9duisant la temp\xe9rature de travail du driver"}),"\n",(0,r.jsx)(n.li,{children:"Modes de pilotage support\xe9s : TMC : UART"}),"\n",(0,r.jsx)(n.li,{children:"D\xe9tection de blocage du moteur support\xe9e"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"explication-des-cavaliers-de-la-carte-m\xe8re",children:"Explication des cavaliers de la carte m\xe8re"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"TMC2209 utilise le cavalier UART"}),"\n",(0,r.jsx)(c,{image:i(12142).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"La broche UART du driver FLY est la quatri\xe8me en partant du haut \xe0 gauche, la broche PDN est la broche UART. Si la carte m\xe8re n'a pas les broches correspondantes, elle ne peut pas utiliser l'UART"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Si d'autres drivers utilisent la cinqui\xe8me broche, vous pouvez utiliser notre m\xe9thode de r\xe9f\xe9rence pour r\xe9soudre le probl\xe8me  ",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"/docs/DebugDoc/faq/tmc#unable-to-read-tmc-uart-stepper_x-register-ifcnt%E6%88%96%E8%80%85-unable-to-read-tmc-spi-stepper_x-register-register-%E7%9A%84%E9%94%99%E8%AF%AF",children:"M\xe9thode pour r\xe9soudre l'impossibilit\xe9 d'utiliser l'UART"})]}),"\n",(0,r.jsx)(c,{image:i(38776).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-de-r\xe9f\xe9rence-pour-tmc2209",children:"Configuration de r\xe9f\xe9rence pour TMC2209"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"La r\xe9sistance d'\xe9chantillonnage du driver est de 0,110, ne la modifiez pas"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[tmc2209 stepper_x]\nuart_pin: \ninterpolate: False\nrun_current: 0,8                    # Valeur du courant de fonctionnement du moteur (en mA)\nsense_resistor: 0,110               # Ne modifiez pas la r\xe9sistance d'\xe9chantillonnage du driver\nstealthchop_threshold: 0\n"})}),"\n",(0,r.jsx)(n.h2,{id:"instructions-pour-lutilisation-sans-fin-de-course",children:"Instructions pour l'utilisation sans fin de course"}),"\n",(0,r.jsx)(o.ZP,{}),"\n",(0,r.jsx)(n.admonition,{title:"Conseils pour l'utilisation sans fin de course",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Le ",(0,r.jsx)(n.code,{children:"endstop_pin:"})," original doit \xeatre masqu\xe9 ou supprim\xe9, puis ajoutez ",(0,r.jsx)(n.code,{children:"endstop_pin: tmc2209_stepper_x:virtual_endstop"})]}),"\n",(0,r.jsxs)(n.li,{children:["Apr\xe8s avoir configur\xe9 ",(0,r.jsx)(n.code,{children:"diag_pin:"}),", l'\xe9tat du fin de course est non d\xe9clench\xe9 lors du rafra\xeechissement"]}),"\n",(0,r.jsxs)(n.li,{children:["La configuration de ",(0,r.jsx)(n.code,{children:"driver_SGTHRS:"})," n\xe9cessite de tester une valeur appropri\xe9e"]}),"\n"]})}),"\n",(0,r.jsx)(c,{image:i(8102).Z,size:"80%",align:"center"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Configuration de r\xe9f\xe9rence"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Le dos de FLY 2209 a un s\xe9lecteur qui doit \xeatre bascul\xe9 de l'autre c\xf4t\xe9"}),"\n",(0,r.jsx)(n.li,{children:"FLY 2209C est un driver connect\xe9 directement au DIAG, cette \xe9tape n'est pas n\xe9cessaire"}),"\n"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[stepper_x]\n# endstop_pin:PF3\nendstop_pin: tmc2209_stepper_x:virtual_endstop\nhoming_retract_dist: 0        # Ne modifiez pas la distance de retrait \xe0 0, cela pourrait entra\xeener un \xe9chec de retour\n\n[tmc2209 stepper_x]\ndiag_pin: ^\ndriver_SGTHRS: 100\n\n"})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},91798:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/2209-28599a8d77bf982ea9cec5579c7cb94b.webp"},8102:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/2209diag-262cd788fbf99f89f3dfc8ec68d68e8c.webp"},12142:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/jumper-b7f0cad58ee1720512eaebc40deee431.webp"},38776:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/uart1-602d6fd2f11086c68218afd60014228b.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return o}});var t=i(75271);let r={},s=t.createContext(r);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);