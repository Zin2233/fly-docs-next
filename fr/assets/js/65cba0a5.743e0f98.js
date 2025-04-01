"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["43867"],{94484:function(e,n,i){i.d(n,{ZP:function(){return l},d$:function(){return s}});var r=i(74132),t=i(94551);let s=[];function o(e){let n={admonition:"admonition",li:"li",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsx)(n.admonition,{title:"Astuce pour l'utilisation sans limite",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"L'utilisation sans limite n\xe9cessite l'occupation d'une sortie limit\xe9e, en g\xe9n\xe9ral, la position de pilotage n\xb01 utilise IO1, la position de pilotage n\xb02 utilise IO2, et ainsi de suite"}),"\n",(0,r.jsx)(n.li,{children:"Veuillez faire attention lors de l'utilisation sans limite : ne connectez rien aux sorties limit\xe9es correspondantes"}),"\n",(0,r.jsx)(n.li,{children:"Certaines cartes m\xe8res FLY sont directement connect\xe9es aux broches de pilotage, veuillez v\xe9rifier si DIAG est directement connect\xe9 \xe0 la broche correspondante"}),"\n"]})})}function l(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},72766:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"ProductDoc/ModuleDrive/tmc5160_pro_1.5","title":"TMC 5160 Pro V1.5","description":"Param\xe8tres de base","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ModuleDrive/tmc5160_pro_1.5.mdx","sourceDirName":"ProductDoc/ModuleDrive","slug":"/ProductDoc/ModuleDrive/tmc5160_pro_1.5","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc5160_pro_1.5","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ModuleDrive/tmc5160_pro_1.5.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"TMC 5160 Pro V1.2","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc5160_pro"},"next":{"title":"TMC 5160 Plus","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc5160_plus"}}'),t=i("74132"),s=i("94551"),o=i("94484");let l={sidebar_position:5},c="TMC 5160 Pro V1.5",a={},d=[{value:"Param\xe8tres de base",id:"param\xe8tres-de-base",level:2},{value:"Explications sur les sauts de carte m\xe8re",id:"explications-sur-les-sauts-de-carte-m\xe8re",level:2},{value:"Installation du FPC de la carte m\xe8re",id:"installation-du-fpc-de-la-carte-m\xe8re",level:2},{value:"Branchement du ventilateur 12V",id:"branchement-du-ventilateur-12v",level:2},{value:"R\xe9f\xe9rences de configuration pour TMC5160 Pro",id:"r\xe9f\xe9rences-de-configuration-pour-tmc5160-pro",level:2},{value:"Configuration de r\xe9f\xe9rence en mode SPI",id:"configuration-de-r\xe9f\xe9rence-en-mode-spi",level:3},{value:"Instructions d&#39;utilisation sans fin de course",id:"instructions-dutilisation-sans-fin-de-course",level:2},...o.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{ImageView:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tmc-5160-pro-v15",children:"TMC 5160 Pro V1.5"})}),"\n",(0,t.jsx)(r,{image:i(70984).Z,size:"80%",align:"center"}),"\n",(0,t.jsx)(n.h2,{id:"param\xe8tres-de-base",children:"Param\xe8tres de base"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Tension d'entr\xe9e : 24-48V"}),"\n",(0,t.jsx)(n.li,{children:"Cour maximum : 6A"}),"\n",(0,t.jsx)(n.li,{children:"Convient pour : Firmware Marlin/Klipper/RRF"}),"\n",(0,t.jsx)(n.li,{children:"Mode de pilotage pris en charge : TMC : SPI"}),"\n",(0,t.jsx)(n.li,{children:"Interface de pas/direction avec interpolation microPlyer"}),"\n",(0,t.jsx)(n.li,{children:"R\xe9solution maximale de 256 subdivisions"}),"\n",(0,t.jsx)(n.li,{children:"Prise en charge du fonctionnement silencieux et des mouvements fluides avec stealthChop2"}),"\n",(0,t.jsx)(n.li,{children:"Prise en charge de l'amortissement de r\xe9sonance pour les r\xe9sonances \xe0 fr\xe9quence moyenne"}),"\n",(0,t.jsx)(n.li,{children:"Prise en charge du commutateur de d\xe9coupe spreadCycle pour un contr\xf4le moteur dynamique \xe9lev\xe9"}),"\n",(0,t.jsx)(n.li,{children:"Prise en charge du contr\xf4le de vitesse li\xe9 \xe0 la charge avec dcStep"}),"\n",(0,t.jsx)(n.li,{children:"Prise en charge de la d\xe9tection de charge de moteur sans capteur avec stallGuard2 haute pr\xe9cision"}),"\n",(0,t.jsx)(n.li,{children:"Prise en charge du contr\xf4le de courant coolStep, pouvant \xe9conomiser jusqu'\xe0 75% d'\xe9nergie"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"explications-sur-les-sauts-de-carte-m\xe8re",children:"Explications sur les sauts de carte m\xe8re"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le TMC5160 Pro utilise un saut SPI"}),"\n",(0,t.jsxs)(n.li,{children:["Les broches SPI de FLY sont la quatri\xe8me broche en partant du haut vers le bas, CS est la broche SPI. Si la carte m\xe8re n'a pas les broches correspondantes, l'utilisation de SPI n'est pas possible.","\n",(0,t.jsx)(r,{image:i(12142).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation-du-fpc-de-la-carte-m\xe8re",children:"Installation du FPC de la carte m\xe8re"}),"\n",(0,t.jsx)(r,{image:i(13288).Z,size:"80%",align:"center"}),"\n",(0,t.jsx)(n.h2,{id:"branchement-du-ventilateur-12v",children:"Branchement du ventilateur 12V"}),"\n",(0,t.jsx)(r,{image:i(34171).Z,size:"80%",align:"center"}),"\n",(0,t.jsx)(n.h2,{id:"r\xe9f\xe9rences-de-configuration-pour-tmc5160-pro",children:"R\xe9f\xe9rences de configuration pour TMC5160 Pro"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["La r\xe9sistance d'\xe9chantillonnage du pilote est ",(0,t.jsx)(n.code,{children:"sense_resistor: 0.033"})," veuillez ne pas la configurer incorrectement"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"spi_bus"})," et ",(0,t.jsx)(n.code,{children:"spi_software"})," ne peuvent \xeatre utilis\xe9s qu'en une seule option"]}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"configuration-de-r\xe9f\xe9rence-en-mode-spi",children:"Configuration de r\xe9f\xe9rence en mode SPI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"[tmc5160 stepper_x]\ncs_pin:\nspi_bus:\n# spi_software_mosi_pin:\n# spi_software_miso_pin:\n# spi_software_sclk_pin: \nrun_current: 1.0                    # Valeur du courant de fonctionnement du moteur\ninterpolate: False                  # Activer ou non l'interpolation de 256 micropas (activer est True, d\xe9sactiver est False)\nsense_resistor: 0.033\nstealthchop_threshold: 0\ndriver_DISS2G: 1\ndriver_DISS2VS: 1\n"})}),"\n",(0,t.jsx)(n.h2,{id:"instructions-dutilisation-sans-fin-de-course",children:"Instructions d'utilisation sans fin de course"}),"\n",(0,t.jsx)(o.ZP,{}),"\n",(0,t.jsx)(n.admonition,{title:"Conseils d'utilisation sans fin de course",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ce pilote n\xe9cessite que le FPC \xe0 4 broches soit install\xe9 pour \xeatre utilis\xe9"}),"\n",(0,t.jsxs)(n.li,{children:["L'ancienne ",(0,t.jsx)(n.code,{children:"endstop_pin:"})," doit \xeatre masqu\xe9e ou supprim\xe9e, puis ajouter ",(0,t.jsx)(n.code,{children:"endstop_pin: tmc5160_stepper_x:virtual_endstop"})]}),"\n",(0,t.jsxs)(n.li,{children:["Apr\xe8s avoir configur\xe9 ",(0,t.jsx)(n.code,{children:"diag0_pin:"}),", l'\xe9tat de fin de course sera non d\xe9clench\xe9"]}),"\n",(0,t.jsxs)(n.li,{children:["La configuration de ",(0,t.jsx)(n.code,{children:"driver_SGT:"})," n\xe9cessite un test d'une valeur appropri\xe9e"]}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configuration de r\xe9f\xe9rence"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:'[stepper_x]\n# endstop_pin:PF3\nendstop_pin: tmc5160_stepper_x:virtual_endstop\nhoming_retract_dist: 0        # Aucun retrait lors du retour \xe0 la maison ne devrait pas \xeatre modifi\xe9 \xe0 0 pour \xe9viter un \xe9chec du retour \xe0 la maison\n\n[tmc5160 stepper_x]\ndiag0_pin: ^!\ndriver_SGT: 1\n\n#   Assurez-vous que l\'\xe9tat de fin de course est non d\xe9clench\xe9 apr\xe8s la configuration\n#   Ce fil est g\xe9n\xe9ralement pr\xe9fix\xe9 par "^" pour activer la r\xe9sistance interne de tirage en haut\n#   La sensibilit\xe9 est li\xe9e \xe0 la tension de la courroie et doit \xeatre ajust\xe9e manuellement\n#  (Assurez-vous \xe9galement de d\xe9finir driver_SGTHRS sur une sensibilit\xe9 appropri\xe9e)\n\n'})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},70984:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/5160pro-1.5-9c4f8e9af10987481be92546196d68fd.webp"},34171:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/5160pro-fan-c93a42b5258ea6e2a831626bd46dc9bb.webp"},12142:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/jumper-b7f0cad58ee1720512eaebc40deee431.webp"},13288:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/line-d8ed13b5977b20667eedfef3648e9e15.webp"},94551:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return o}});var r=i(39546);let t={},s=r.createContext(t);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);