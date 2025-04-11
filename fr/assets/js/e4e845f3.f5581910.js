"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["27073"],{43780:function(e,n,i){i.d(n,{ZP:function(){return c},d$:function(){return s}});var t=i(85893),r=i(50065);let s=[];function o(e){let n={admonition:"admonition",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Astuce pour l'utilisation sans limite",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"L'utilisation sans limite n\xe9cessite l'occupation d'une sortie limit\xe9e, en g\xe9n\xe9ral, la position de pilotage n\xb01 utilise IO1, la position de pilotage n\xb02 utilise IO2, et ainsi de suite"}),"\n",(0,t.jsx)(n.li,{children:"Veuillez faire attention lors de l'utilisation sans limite : ne connectez rien aux sorties limit\xe9es correspondantes"}),"\n",(0,t.jsx)(n.li,{children:"Certaines cartes m\xe8res FLY sont directement connect\xe9es aux broches de pilotage, veuillez v\xe9rifier si DIAG est directement connect\xe9 \xe0 la broche correspondante"}),"\n"]})})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},19584:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"ProductDoc/ModuleDrive/tmc5160hv","title":"TMC 5160HV","description":"Param\xe8tres de base","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ModuleDrive/tmc5160hv.mdx","sourceDirName":"ProductDoc/ModuleDrive","slug":"/ProductDoc/ModuleDrive/tmc5160hv","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc5160hv","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ModuleDrive/tmc5160hv.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"TMC 5160","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc5160"},"next":{"title":"TMC 5160 Pro V1.2","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc5160_pro"}}'),r=i("85893"),s=i("50065"),o=i("43780");let c={sidebar_position:4},l="TMC 5160HV",a={},d=[{value:"Param\xe8tres de base",id:"param\xe8tres-de-base",level:2},{value:"Explications sur les sauts de broche de la carte m\xe8re",id:"explications-sur-les-sauts-de-broche-de-la-carte-m\xe8re",level:2},{value:"R\xe9f\xe9rences de configuration TMC5160",id:"r\xe9f\xe9rences-de-configuration-tmc5160",level:2},{value:"Configuration de r\xe9f\xe9rence en mode SPI",id:"configuration-de-r\xe9f\xe9rence-en-mode-spi",level:3},{value:"Explications d&#39;utilisation sans limite",id:"explications-dutilisation-sans-limite",level:2},...o.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{ImageView:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tmc-5160hv",children:"TMC 5160HV"})}),"\n",(0,r.jsx)(t,{image:i(91414).Z,size:"60%",align:"center"}),"\n",(0,r.jsx)(t,{image:i(73683).Z,size:"80%",align:"center"}),"\n",(0,r.jsx)(n.h2,{id:"param\xe8tres-de-base",children:"Param\xe8tres de base"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tension d'entr\xe9e : 12V-48V"}),"\n",(0,r.jsx)(n.li,{children:"Courant maximal : 4.4A"}),"\n",(0,r.jsx)(n.li,{children:"Convient pour : Firmware Marlin/Klipper/RRF"}),"\n",(0,r.jsx)(n.li,{children:"Modes de pilotage pris en charge : TMC : SPI"}),"\n",(0,r.jsx)(n.li,{children:"Interface pas/position avec interpolation microPlyer"}),"\n",(0,r.jsx)(n.li,{children:"R\xe9solution maximale de 256 subdivisions"}),"\n",(0,r.jsx)(n.li,{children:"Prise en charge du fonctionnement silencieux stealthChop2 et des mouvements fluides"}),"\n",(0,r.jsx)(n.li,{children:"Prise en charge de l'amortissement de r\xe9sonance \xe0 fr\xe9quence moyenne"}),"\n",(0,r.jsx)(n.li,{children:"Prise en charge du commutateur haute dynamique spreadCycle"}),"\n",(0,r.jsx)(n.li,{children:"Prise en charge du contr\xf4le de vitesse li\xe9 \xe0 la charge dcStep"}),"\n",(0,r.jsx)(n.li,{children:"Prise en charge de la d\xe9tection de charge de moteur sans capteur stallGuard2 avec pr\xe9cision \xe9lev\xe9e"}),"\n",(0,r.jsx)(n.li,{children:"Prise en charge du contr\xf4le de courant coolStep, pouvant \xe9conomiser jusqu'\xe0 75% d'\xe9nergie"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"explications-sur-les-sauts-de-broche-de-la-carte-m\xe8re",children:"Explications sur les sauts de broche de la carte m\xe8re"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Le TMC5160 utilise un saut SPI"}),"\n",(0,r.jsxs)(n.li,{children:["Les broches SPI de FLY sont la quatri\xe8me broche en partant du haut vers le bas, CS est la broche SPI. Si la carte m\xe8re n'a pas les broches correspondantes, le SPI ne peut pas \xeatre utilis\xe9","\n",(0,r.jsx)(t,{image:i(65376).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"r\xe9f\xe9rences-de-configuration-tmc5160",children:"R\xe9f\xe9rences de configuration TMC5160"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["La r\xe9sistance de mesure du driver est ",(0,r.jsx)(n.code,{children:"sense_resistor: 0.075"}),", veuillez ne pas la configurer incorrectement"]}),"\n",(0,r.jsxs)(n.li,{children:["Seule une des options ",(0,r.jsx)(n.code,{children:"spi_bus"})," ou ",(0,r.jsx)(n.code,{children:"spi_software"})," peut \xeatre choisie"]}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"configuration-de-r\xe9f\xe9rence-en-mode-spi",children:"Configuration de r\xe9f\xe9rence en mode SPI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[tmc5160 stepper_x]\ncs_pin:\nspi_bus:\n# spi_software_mosi_pin:\n# spi_software_miso_pin:\n# spi_software_sclk_pin: \nrun_current: 1.0                    # Valeur du courant de fonctionnement du moteur\ninterpolate: False                  # Activer/D\xe9sactiver l'interpolation de 256 micro-pas (Activ\xe9 = True, D\xe9sactiv\xe9 = False)\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndriver_DISS2G: 1\ndriver_DISS2VS: 1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"explications-dutilisation-sans-limite",children:"Explications d'utilisation sans limite"}),"\n",(0,r.jsx)(o.ZP,{}),"\n",(0,r.jsx)(n.admonition,{title:"Conseils d'utilisation sans limite",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["L'ancienne configuration ",(0,r.jsx)(n.code,{children:"endstop_pin:"})," doit \xeatre masqu\xe9e ou supprim\xe9e, puis remplac\xe9e par ",(0,r.jsx)(n.code,{children:"endstop_pin: tmc5160_stepper_x:virtual_endstop"})]}),"\n",(0,r.jsxs)(n.li,{children:["Apr\xe8s avoir configur\xe9 ",(0,r.jsx)(n.code,{children:"diag1_pin:"}),", l'\xe9tat de fin de course sera ind\xe9termin\xe9"]}),"\n",(0,r.jsxs)(n.li,{children:["La configuration ",(0,r.jsx)(n.code,{children:"driver_SGT:"})," n\xe9cessite un test de valeur appropri\xe9e"]}),"\n"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Configuration de r\xe9f\xe9rence"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:'[stepper_x]\n# endstop_pin:PF3\nendstop_pin: tmc5160_stepper_x:virtual_endstop\nhoming_retract_dist: 0        # Retrait de retour \xe0 z\xe9ro ne devrait pas \xeatre modifi\xe9, sinon cela pourrait entra\xeener un \xe9chec de positionnement\n\n[tmc5160 stepper_x]\ndiag1_pin: ^!\ndriver_SGT: 1\n\n#   Assurez-vous que l\'\xe9tat de fin de course est ind\xe9termin\xe9 apr\xe8s la configuration\n#   Cette broche utilise g\xe9n\xe9ralement un pr\xe9fixe "^" pour activer la r\xe9sistance interne de tirage vers le haut\n#   La sensibilit\xe9 d\xe9pend de la tension de la courroie et doit \xeatre ajust\xe9e manuellement\n#  (Assurez-vous \xe9galement que driver_SGTHRS est configur\xe9 avec une sensibilit\xe9 appropri\xe9e)\n\n'})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},73683:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/5160HV2-b447ee01cf4fcdd0e7db34fe25261349.webp"},91414:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/5160hv-6322c1c9d4c02b0bf4b973d2dd2823fe.webp"},65376:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/jumper-b7f0cad58ee1720512eaebc40deee431.webp"},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return o}});var t=i(67294);let r={},s=t.createContext(r);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);