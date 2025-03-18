"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["65629"],{4735:function(e,n,i){i.d(n,{ZP:function(){return c},d$:function(){return s}});var r=i(52676),t=i(79938);let s=[];function o(e){let n={admonition:"admonition",li:"li",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsx)(n.admonition,{title:"Astuce pour l'utilisation sans limite",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"L'utilisation sans limite n\xe9cessite l'occupation d'une sortie limit\xe9e, en g\xe9n\xe9ral, la position de pilotage n\xb01 utilise IO1, la position de pilotage n\xb02 utilise IO2, et ainsi de suite"}),"\n",(0,r.jsx)(n.li,{children:"Veuillez faire attention lors de l'utilisation sans limite : ne connectez rien aux sorties limit\xe9es correspondantes"}),"\n",(0,r.jsx)(n.li,{children:"Certaines cartes m\xe8res FLY sont directement connect\xe9es aux broches de pilotage, veuillez v\xe9rifier si DIAG est directement connect\xe9 \xe0 la broche correspondante"}),"\n"]})})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},19743:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>c});var r=JSON.parse('{"id":"ProductDoc/ModuleDrive/tmc2240","title":"TMC 2240","description":"Param\xe8tres de base","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ModuleDrive/tmc2240.mdx","sourceDirName":"ProductDoc/ModuleDrive","slug":"/ProductDoc/ModuleDrive/tmc2240","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc2240","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ModuleDrive/tmc2240.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"TMC 2209","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc2209"},"next":{"title":"TMC 5160","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc5160"}}'),t=i("52676"),s=i("79938"),o=i("4735");let c={sidebar_position:2},a="TMC 2240",l={},d=[{value:"Param\xe8tres de base",id:"param\xe8tres-de-base",level:2},{value:"Explications sur les sauts de carte m\xe8re",id:"explications-sur-les-sauts-de-carte-m\xe8re",level:2},{value:"Configuration de r\xe9f\xe9rence TMC2240",id:"configuration-de-r\xe9f\xe9rence-tmc2240",level:2},{value:"Configuration de r\xe9f\xe9rence en mode SPI",id:"configuration-de-r\xe9f\xe9rence-en-mode-spi",level:3},{value:"Configuration de r\xe9f\xe9rence en mode UART",id:"configuration-de-r\xe9f\xe9rence-en-mode-uart",level:3},{value:"Explications d&#39;utilisation sans fin de course",id:"explications-dutilisation-sans-fin-de-course",level:2},...o.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tmc-2240",children:"TMC 2240"})}),"\n",(0,t.jsx)(r,{image:i(32782).Z,size:"80%",align:"center"}),"\n",(0,t.jsx)(n.h2,{id:"param\xe8tres-de-base",children:"Param\xe8tres de base"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Tension d'entr\xe9e : 12V-36V"}),"\n",(0,t.jsx)(n.li,{children:"Convient pour : Firmware Klipper/RRF"}),"\n",(0,t.jsx)(n.li,{children:"Modes de pilotage pris en charge : TMC : SPI/UART"}),"\n",(0,t.jsx)(n.li,{children:"D\xe9tection de temp\xe9rature int\xe9gr\xe9e"}),"\n",(0,t.jsx)(n.li,{children:"Protection et diagnostic des entr\xe9es analogiques universelles"}),"\n",(0,t.jsx)(n.li,{children:"Sondage de courant sans perte int\xe9gr\xe9 (ICS)"}),"\n",(0,t.jsx)(n.li,{children:"Interface pas/position avec interpolation de micro-pas par microPlyer"}),"\n",(0,t.jsx)(n.li,{children:"Protection contre les courts-circuits, verrouillage sous tension, protection contre le surchauffe de la puce (arr\xeat thermique)"}),"\n",(0,t.jsx)(n.li,{children:"Prise en charge de stallGuard2 pour un d\xe9tection de charge moteur non sensibilis\xe9e haute pr\xe9cision"}),"\n",(0,t.jsx)(n.li,{children:"StallGuard2 et StallGuard4 int\xe9gr\xe9s pour la d\xe9tection de charge moteur non sensibilis\xe9e"}),"\n",(0,t.jsx)(n.li,{children:"Combinaison sans saccades de StealthChop et SpreadCycle pour r\xe9soudre le probl\xe8me de sauts du moteur au point de commutation de tranchage."}),"\n",(0,t.jsx)(n.li,{children:"Puissance plus grande, moindre production de chaleur. (Prise en charge de tensions plus \xe9lev\xe9es, 3,0 AMAX, convient aux travaux d'impression 3D de domaines plus \xe9lev\xe9s, et fonctionne pendant une p\xe9riode plus longue sans surchauffe ni dommage.)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"explications-sur-les-sauts-de-carte-m\xe8re",children:"Explications sur les sauts de carte m\xe8re"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Le TMC2240 utilise par d\xe9faut le saut SPI","\n",(0,t.jsx)(r,{image:i(12142).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["M\xe9thode de saut UART pour le TMC2240","\n",(0,t.jsx)(r,{image:i(24804).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-de-r\xe9f\xe9rence-tmc2240",children:"Configuration de r\xe9f\xe9rence TMC2240"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["La r\xe9sistance d'\xe9chantillonnage du pilote est ",(0,t.jsx)(n.code,{children:"rref: 12300"}),", veuillez ne pas la configurer incorrectement"]})}),"\n",(0,t.jsx)(n.h3,{id:"configuration-de-r\xe9f\xe9rence-en-mode-spi",children:"Configuration de r\xe9f\xe9rence en mode SPI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"[tmc2240 stepper_x]\ncs_pin: \nspi_bus: \nrun_current: 0,65                   # Valeur du courant de fonctionnement du moteur\ninterpolate: False                  # Activer la subdivision de 256 micro-pas (non recommand\xe9)\nrref: 12300\nstealthchop_threshold: 0           # Seuil de silence (si vous n'avez pas besoin de silence, changez la valeur en 0)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configuration-de-r\xe9f\xe9rence-en-mode-uart",children:"Configuration de r\xe9f\xe9rence en mode UART"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"[tmc2240 stepper_x]\nuart_pin:\nrun_current: 0,65                   # Valeur du courant de fonctionnement du moteur\ninterpolate: False                  # Activer la subdivision de 256 micro-pas (non recommand\xe9)\nrref: 12300                         # R\xe9sistance d'\xe9chantillonnage du pilote\nstealthchop_threshold: 0            # Seuil de silence (si vous n'avez pas besoin de silence, changez la valeur en 0)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Si vous rencontrez l'erreur ci-dessous"}),"\n",(0,t.jsx)(r,{image:i(39791).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Vous devez vous connecter via SSH \xe0 l'utilisateur install\xe9 sur klipper, puis ex\xe9cuter ce code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sed -i 's/\"uart_pin\"/'\"'\"'uart_pin'\"'\"'/g' ~/klipper/klippy/extras/tmc2240.py\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"explications-dutilisation-sans-fin-de-course",children:"Explications d'utilisation sans fin de course"}),"\n",(0,t.jsx)(o.ZP,{}),"\n",(0,t.jsx)(n.admonition,{title:"Conseils d'utilisation sans fin de course",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["L'ancienne ",(0,t.jsx)(n.code,{children:"endstop_pin:"})," doit \xeatre masqu\xe9e ou supprim\xe9e, puis ajoutez ",(0,t.jsx)(n.code,{children:"endstop_pin: tmc2240_stepper_x:virtual_endstop"})]}),"\n",(0,t.jsxs)(n.li,{children:["Apr\xe8s avoir configur\xe9 ",(0,t.jsx)(n.code,{children:"diag0_pin:"}),", l'\xe9tat de fin de course est non d\xe9clench\xe9"]}),"\n",(0,t.jsxs)(n.li,{children:["Pour configurer ",(0,t.jsx)(n.code,{children:"driver_SGT:"}),", vous devez tester une valeur appropri\xe9e, normalement ",(0,t.jsx)(n.code,{children:"1"})]}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configuration de r\xe9f\xe9rence"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"[stepper_x]\n# endstop_pin:PF3   # L'ancien port de fin de course doit \xeatre masqu\xe9 ou supprim\xe9\nendstop_pin: tmc2240_stepper_x:virtual_endstop\nhoming_retract_dist: 0        # Aucun retrait n'est n\xe9cessaire, sinon cela pourrait entra\xeener un \xe9chec de la mise en position initiale\n\n[tmc2240 stepper_x]\ndiag0_pin: ^!PG12\ndriver_SGT: 1\n\n"})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},32782:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/2240-1d3edddee51f2b73d97ff7aff0eb8a07.webp"},39791:function(e,n,i){i.d(n,{Z:function(){return r}});let r="data:image/webp;base64,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"},24804:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/2240uart-2c27534e9b39fd8f8439317f675b11d7.webp"},12142:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/jumper-b7f0cad58ee1720512eaebc40deee431.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return o}});var r=i(75271);let t={},s=r.createContext(t);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);