"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["89221"],{46104:function(e,n,r){r.d(n,{ZP:function(){return l},d$:function(){return t}});var i=r(74132),s=r(94551);let t=[{value:"Configuration CAN et Recherche d&#39;ID",id:"configuration-can-et-recherche-did",level:2},{value:"Remarques avant la recherche d&#39;appareils",id:"remarques-avant-la-recherche-dappareils",level:3},{value:"Recherche d&#39;appareils",id:"recherche-dappareils",level:3},{value:"Recherche de l&#39;ID CAN",id:"recherche-de-lid-can",level:3},{value:"Ensemble des probl\xe8mes li\xe9s \xe0 CAN",id:"ensemble-des-probl\xe8mes-li\xe9s-\xe0-can",level:3},{value:"Remplissez l&#39;ID CAN dans la configuration",id:"remplissez-lid-can-dans-la-configuration",level:3}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Button:t,ImageView:a}=n;return t||c("Button",!0),a||c("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"configuration-can-et-recherche-did",children:"Configuration CAN et Recherche d'ID"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si vous avez besoin d'utiliser CAN, assurez-vous que votre ordinateur de contr\xf4le a \xe9t\xe9 configur\xe9 pour CAN."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,i.jsx)(n.p,{children:"Assurez-vous que la carte m\xe8re est correctement connect\xe9e \xe0 l'ordinateur de contr\xf4le avant de proc\xe9der aux op\xe9rations suivantes."})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Assurez-vous que le r\xe9seau CAN de l'ordinateur de contr\xf4le, la vitesse CAN de la carte m\xe8re ponteuse et la vitesse CAN de la carte outil sont enti\xe8rement coh\xe9rentes."})}),"\n",(0,i.jsx)(n.h3,{id:"remarques-avant-la-recherche-dappareils",children:"Remarques avant la recherche d'appareils"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Avant de rechercher l'ID CAN, veuillez ",(0,i.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"cliquez pour acc\xe9der",children:"vous connecter \xe0 SSH"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Veuillez noter qu'il faut vous assurer d'\xeatre connect\xe9 \xe0 SSH via le r\xe9seau et non par port s\xe9rie."}),"\n",(0,i.jsx)(n.li,{children:"Assurez-vous d'avoir correctement connect\xe9 la carte UTOC ou une carte m\xe8re avec le firmware CAN bridge flash\xe9, et assurez-vous que le c\xe2ble de connexion \xe0 l'ordinateur de contr\xf4le poss\xe8de la fonction de transmission de donn\xe9es."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"recherche-dappareils",children:"Recherche d'appareils"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Maintenant que vous \xeates connect\xe9 normalement \xe0 l'ordinateur de contr\xf4le, vous pouvez entrer ",(0,i.jsx)(n.code,{children:"lsusb"})," pour rechercher des appareils. Il y aura l'une des situations suivantes :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si vous entrez ",(0,i.jsx)(n.code,{children:"lsusb"})," et que cela indique que la commande ",(0,i.jsx)(n.code,{children:"ls"})," n'est pas trouv\xe9e, vous pouvez entrer la commande ci-dessous pour installer la commande :","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Si vous entrez ",(0,i.jsx)(n.code,{children:"lsusb"})," et qu'il ne se passe rien, c'est un probl\xe8me syst\xe8me auquel nous ne pouvons rien faire. Vous devez changer de syst\xe8me ou utiliser un syst\xe8me qui fonctionne correctement."]}),"\n",(0,i.jsxs)(n.li,{children:["Si vous obtenez les informations contenues dans l'image ci-dessous, veuillez noter que cela n'est qu'une r\xe9f\xe9rence. Vous n'avez besoin de vous assurer que ",(0,i.jsx)(n.code,{children:"1d50:606f"})," appara\xeet.","\n",(0,i.jsx)(a,{image:r(55811).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1d50:606f"})," appartient \xe0 l'appareil que vous utiliserez cette fois-ci. Les indications suivantes ne sont pas importantes car les probl\xe8mes du syst\xe8me peuvent entra\xeener une affichage incomplet ou m\xeame aucune affichage."]}),"\n",(0,i.jsxs)(n.li,{children:["Si plusieurs ",(0,i.jsx)(n.code,{children:"1d50:606f"})," apparaissent, il est recommand\xe9 d'en exclure une, sinon cela affectera la gravure ult\xe9rieure et la connexion du firmware. Par exemple, si vous utilisez le ",(0,i.jsx)(n.code,{children:"FLY MINI PAD"}),", il est recommand\xe9 d'utiliser le UTOC int\xe9gr\xe9 plut\xf4t que d'autres p\xe9riph\xe9riques de pontage CAN."]}),"\n",(0,i.jsx)(n.li,{children:"Si aucun appareil n'appara\xeet, veuillez v\xe9rifier si les c\xe2bles de donn\xe9es sont correctement connect\xe9s et si le firmware a \xe9t\xe9 correctement flash\xe9."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Remarques",type:"warning",children:(0,i.jsxs)(n.p,{children:["Vous ne pouvez rechercher l'ID CAN qu'apr\xe8s avoir trouv\xe9 ",(0,i.jsx)(n.code,{children:"1d50:606f"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"recherche-de-lid-can",children:"Recherche de l'ID CAN"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Entrez la commande ci-dessous pour rechercher l'ID :"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si un ID appara\xeet et que la derni\xe8re partie ",(0,i.jsx)(n.code,{children:"Application:"})," indique ",(0,i.jsx)(n.code,{children:"Klipper"}),", cela signifie que cet ID peut \xeatre utilis\xe9 directement."]}),"\n",(0,i.jsxs)(n.li,{children:["Si un ID appara\xeet et que la derni\xe8re partie ",(0,i.jsx)(n.code,{children:"Application:"})," indique ",(0,i.jsx)(n.code,{children:"CANBOOT"})," ou ",(0,i.jsx)(n.code,{children:"Katapult"}),", cela signifie que vous devez graver le firmware pour pouvoir l'utiliser.","\n",(0,i.jsx)(a,{image:r(54915).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ensemble-des-probl\xe8mes-li\xe9s-\xe0-can",children:"Ensemble des probl\xe8mes li\xe9s \xe0 CAN"}),"\n",(0,i.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si vous ne trouvez pas l'ID CAN, consultez le document ci-dessous."}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(t,{variant:"contained",disableElevation:!0,href:"/docs/DebugDoc/faq/klipper_can",children:"Ensemble des probl\xe8mes li\xe9s \xe0 CAN"}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"remplissez-lid-can-dans-la-configuration",children:"Remplissez l'ID CAN dans la configuration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ouvrez l'interface Web de l'imprimante, dans le menu lat\xe9ral gauche, trouvez l'option de configuration : fluidd est ",(0,i.jsx)(n.code,{children:"{\u2026}"})," ; mainsail est ",(0,i.jsx)(n.code,{children:"machine"}),", cliquez dessus pour acc\xe9der \xe0 ",(0,i.jsx)(n.code,{children:"printer.cfg"}),"."]}),"\n",(0,i.jsx)(a,{image:r(43412).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copiez l'UUID que vous avez trouv\xe9 et collez-le dans la configuration ",(0,i.jsx)(n.code,{children:"printer.cfg"})," \xe0 la section ",(0,i.jsx)(n.code,{children:"[mcu]"})," sous ",(0,i.jsx)(n.code,{children:"canbus_uuid:"}),". En sauvegardant et en red\xe9marrant, vous pourrez connecter la carte m\xe8re. Si Klipper indique qu'un mise \xe0 jour du firmware est n\xe9cessaire, une erreur ADC, etc., cela signifie que Klipper s'est connect\xe9 \xe0 la carte m\xe8re."]}),"\n",(0,i.jsx)(a,{image:r(54915).Z,size:"50%",align:"left"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"Notez : Tous les ID mentionn\xe9s dans ce document sont des exemples. L'ID de chaque carte m\xe8re est diff\xe9rente. Modifiez et remplissez en fonction de l'ID r\xe9ellement obtenue."})}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function c(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},5543:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>c});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-e3/fly-e3-v2/canbridge","title":"Pont CAN","description":"Le bus CAN est un protocole de communication en s\xe9rie pour applications temps r\xe9el, qui peut transmettre des signaux via des c\xe2bles torsad\xe9s et est l\'un des bus de terrain les plus largement utilis\xe9s dans le monde. Le protocole CAN est utilis\xe9 pour la communication entre diff\xe9rents \xe9l\xe9ments dans une voiture, remplacer ainsi des faisceaux de c\xe2bles co\xfbteux et encombrants. La robustesse de ce protocole lui permet d\'\xeatre utilis\xe9 dans d\'autres applications automatis\xe9es et industrielles. Les caract\xe9ristiques du protocole CAN comprennent des communications de donn\xe9es s\xe9rie compl\xe8tes, un support temps r\xe9el, un taux de transmission allant jusqu\'\xe0 1 Mb/s, une adresse de 11 bits et une capacit\xe9 de d\xe9tection d\'erreurs.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-e3/fly-e3-v2/canbridge.mdx","sourceDirName":"ProductDoc/MainBoard/fly-e3/fly-e3-v2","slug":"/ProductDoc/MainBoard/fly-e3/fly-e3-v2/canbridge","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/canbridge","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/canbridge.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Pont CAN"},"sidebar":"tutorialSidebar","previous":{"title":"Klipper\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/cfg"},"next":{"title":"Mod\xe8les 3D et sch\xe9mas \xe9lectriques","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/schematic"}}'),s=r("74132"),t=r("94551"),a=r("46104");let l={sidebar_position:6,sidebar_label:"Pont CAN"},c="Pont CAN",o={},d=[{value:"Utilisation du panneau d&#39;outils avec CAN connect\xe9 \xe0 la carte m\xe8re",id:"utilisation-du-panneau-doutils-avec-can-connect\xe9-\xe0-la-carte-m\xe8re",level:2},{value:"Mise \xe0 jour du firmware de la carte m\xe8re",id:"mise-\xe0-jour-du-firmware-de-la-carte-m\xe8re",level:2},{value:"Recherche de l&#39;ID",id:"recherche-de-lid",level:2},...a.d$];function u(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components},{ImageView:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"pont-can",children:"Pont CAN"})}),"\n",(0,s.jsx)(n.p,{children:"Le bus CAN est un protocole de communication en s\xe9rie pour applications temps r\xe9el, qui peut transmettre des signaux via des c\xe2bles torsad\xe9s et est l'un des bus de terrain les plus largement utilis\xe9s dans le monde. Le protocole CAN est utilis\xe9 pour la communication entre diff\xe9rents \xe9l\xe9ments dans une voiture, remplacer ainsi des faisceaux de c\xe2bles co\xfbteux et encombrants. La robustesse de ce protocole lui permet d'\xeatre utilis\xe9 dans d'autres applications automatis\xe9es et industrielles. Les caract\xe9ristiques du protocole CAN comprennent des communications de donn\xe9es s\xe9rie compl\xe8tes, un support temps r\xe9el, un taux de transmission allant jusqu'\xe0 1 Mb/s, une adresse de 11 bits et une capacit\xe9 de d\xe9tection d'erreurs.\nSur une imprimante 3D, le bus CAN est utilis\xe9 pour r\xe9duire le nombre de c\xe2bles reliant la t\xeate d'impression \xe0 la carte m\xe8re, passant de plusieurs dizaines de fils \xe0 seulement quatre, ce qui r\xe9duit consid\xe9rablement le nombre de c\xe2blages et facilite la pose des c\xe2bles.\nCe chapitre ne fait qu'un aper\xe7u succinct de l'utilisation du pontage CAN."}),"\n",(0,s.jsx)(n.h2,{id:"utilisation-du-panneau-doutils-avec-can-connect\xe9-\xe0-la-carte-m\xe8re",children:"Utilisation du panneau d'outils avec CAN connect\xe9 \xe0 la carte m\xe8re"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Veuillez noter que le c\xe2ble d'alimentation du panneau d'outils n'est pas connect\xe9 au port CAN, mais \xe0 une ligne d'alimentation de 12V-24V","\n",(0,s.jsx)(i,{image:r(42752).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"mise-\xe0-jour-du-firmware-de-la-carte-m\xe8re",children:"Mise \xe0 jour du firmware de la carte m\xe8re"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Assurez-vous que le firmware br\xfbl\xe9 sur la carte m\xe8re E3V2 est configur\xe9 pour ",(0,s.jsx)(n.code,{children:"le pont USB-CAN"}),"\n",(0,s.jsx)(n.a,{href:"/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/flash/can.mdx",title:"Cliquez pour sauter",children:"Firmware de la carte m\xe8re E3V2"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"recherche-de-lid",children:"Recherche de l'ID"}),"\n",(0,s.jsx)(a.ZP,{})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},55811:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/606f-ba58e29a9188142cd34019862e0c85e2.webp"},54915:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/canbus-uuid-7117b665e00888c3c8163973d8c29b10.webp"},43412:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/fluidd-cfg-852485b665e4c2b86aaf45ae4b133d7d.webp"},42752:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/canbridge-c9ce2e1279262f721c6eb00bb2d3e878.webp"},94551:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var i=r(39546);let s={},t=i.createContext(s);function a(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);