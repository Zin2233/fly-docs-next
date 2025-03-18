"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["99960"],{4735:function(e,n,r){r.d(n,{ZP:function(){return c},d$:function(){return o}});var i=r(52676),t=r(79938);let o=[];function s(e){let n={admonition:"admonition",li:"li",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Astuce pour l'utilisation sans limite",type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L'utilisation sans limite n\xe9cessite l'occupation d'une sortie limit\xe9e, en g\xe9n\xe9ral, la position de pilotage n\xb01 utilise IO1, la position de pilotage n\xb02 utilise IO2, et ainsi de suite"}),"\n",(0,i.jsx)(n.li,{children:"Veuillez faire attention lors de l'utilisation sans limite : ne connectez rien aux sorties limit\xe9es correspondantes"}),"\n",(0,i.jsx)(n.li,{children:"Certaines cartes m\xe8res FLY sont directement connect\xe9es aux broches de pilotage, veuillez v\xe9rifier si DIAG est directement connect\xe9 \xe0 la broche correspondante"}),"\n"]})})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},17481:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>l,frontMatter:()=>s});var i=JSON.parse('{"id":"ProductDoc/ModuleDrive/tmc5160_pro","title":"TMC 5160 Pro V1.2","description":"Param\xe8tres de base","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ModuleDrive/tmc5160_pro.mdx","sourceDirName":"ProductDoc/ModuleDrive","slug":"/ProductDoc/ModuleDrive/tmc5160_pro","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc5160_pro","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ModuleDrive/tmc5160_pro.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"TMC 5160HV","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc5160hv"},"next":{"title":"TMC 5160 Pro V1.5","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc5160_pro_1.5"}}'),t=r("52676"),o=r("79938");r("4735");let s={sidebar_position:5},c="TMC 5160 Pro V1.2",a={},l=[{value:"Param\xe8tres de base",id:"param\xe8tres-de-base",level:2},{value:"Explications des sauts de broche sur la carte m\xe8re",id:"explications-des-sauts-de-broche-sur-la-carte-m\xe8re",level:2},{value:"Branchement du ventilateur 12V",id:"branchement-du-ventilateur-12v",level:2},{value:"Configuration de r\xe9f\xe9rence pour TMC5160 Pro",id:"configuration-de-r\xe9f\xe9rence-pour-tmc5160-pro",level:2},{value:"Configuration de r\xe9f\xe9rence en mode SPI",id:"configuration-de-r\xe9f\xe9rence-en-mode-spi",level:3}];function d(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{ImageView:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tmc-5160-pro-v12",children:"TMC 5160 Pro V1.2"})}),"\n",(0,t.jsx)(i,{image:r(700).Z,size:"80%",align:"center"}),"\n",(0,t.jsx)(n.h2,{id:"param\xe8tres-de-base",children:"Param\xe8tres de base"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Tension d'entr\xe9e : 24-48V"}),"\n",(0,t.jsx)(n.li,{children:"Courant maximum : 6A"}),"\n",(0,t.jsx)(n.li,{children:"Convient pour : Firmware Marlin/Klipper/RRF"}),"\n",(0,t.jsx)(n.li,{children:"Modes de pilotage pris en charge : TMC : SPI"}),"\n",(0,t.jsx)(n.li,{children:"Interface de pas/de direction avec interpolation microPlyer"}),"\n",(0,t.jsx)(n.li,{children:"R\xe9solution maximale de 256 subdivisions"}),"\n",(0,t.jsx)(n.li,{children:"Prise en charge du fonctionnement silencieux et des mouvements fluides avec stealthChop2"}),"\n",(0,t.jsx)(n.li,{children:"Prise en charge de l'amortissement de r\xe9sonance \xe0 fr\xe9quence moyenne"}),"\n",(0,t.jsx)(n.li,{children:"Prise en charge du commutateur de d\xe9coupage spreadCycle pour un contr\xf4le de moteur dynamique \xe9lev\xe9"}),"\n",(0,t.jsx)(n.li,{children:"Prise en charge du contr\xf4le de vitesse li\xe9 \xe0 la charge avec dcStep"}),"\n",(0,t.jsx)(n.li,{children:"Prise en charge de la d\xe9tection de charge de moteur sans capteur avec stallGuard2"}),"\n",(0,t.jsx)(n.li,{children:"Prise en charge du contr\xf4le de courant coolStep, pouvant \xe9conomiser jusqu'\xe0 75% d'\xe9nergie"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"explications-des-sauts-de-broche-sur-la-carte-m\xe8re",children:"Explications des sauts de broche sur la carte m\xe8re"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le TMC5160 Pro utilise le saut SPI"}),"\n",(0,t.jsxs)(n.li,{children:["La broche SPI du FLY est la quatri\xe8me broche en partant du haut vers le bas, CS est la broche SPI. Si la broche de la carte m\xe8re ne correspond pas, le SPI ne peut pas \xeatre utilis\xe9","\n",(0,t.jsx)(i,{image:r(12142).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"branchement-du-ventilateur-12v",children:"Branchement du ventilateur 12V"}),"\n",(0,t.jsx)(i,{image:r(34171).Z,size:"80%",align:"center"}),"\n",(0,t.jsx)(n.h2,{id:"configuration-de-r\xe9f\xe9rence-pour-tmc5160-pro",children:"Configuration de r\xe9f\xe9rence pour TMC5160 Pro"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["La r\xe9sistance de d\xe9tection du driver est ",(0,t.jsx)(n.code,{children:"sense_resistor: 0.033"}),", veuillez ne pas la configurer incorrectement"]}),"\n",(0,t.jsx)(n.li,{children:"spi_bus et spi_software ne peuvent \xeatre utilis\xe9s qu'en une seule option"}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"configuration-de-r\xe9f\xe9rence-en-mode-spi",children:"Configuration de r\xe9f\xe9rence en mode SPI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"[tmc5160 stepper_x]\ncs_pin:\nspi_bus:\n# spi_software_mosi_pin:\n# spi_software_miso_pin:\n# spi_software_sclk_pin: \nrun_current: 1.0                    # Valeur du courant de fonctionnement du moteur\ninterpolate: False                  # Activer ou non l'interpolation de 256 micro-pas (activer est True, d\xe9sactiver est False)\nsense_resistor: 0.033\nstealthchop_threshold: 0\ndriver_DISS2G: 1\ndriver_DISS2VS: 1\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},34171:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/5160pro-fan-c93a42b5258ea6e2a831626bd46dc9bb.webp"},700:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/5160pro-7d10e297511488f746345cc6de2a0794.webp"},12142:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/jumper-b7f0cad58ee1720512eaebc40deee431.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return s}});var i=r(75271);let t={},o=i.createContext(t);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);