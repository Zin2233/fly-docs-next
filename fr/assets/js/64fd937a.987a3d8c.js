"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["34905"],{89363:function(e,n,i){i.d(n,{ZP:function(){return l},d$:function(){return t}});var r=i(85893),s=i(50065);let t=[{value:"Configuration CAN et Recherche d&#39;ID",id:"configuration-can-et-recherche-did",level:2},{value:"Remarques avant la recherche d&#39;appareils",id:"remarques-avant-la-recherche-dappareils",level:3},{value:"Recherche d&#39;appareils",id:"recherche-dappareils",level:3},{value:"Recherche de l&#39;ID CAN",id:"recherche-de-lid-can",level:3},{value:"Ensemble des probl\xe8mes li\xe9s \xe0 CAN",id:"ensemble-des-probl\xe8mes-li\xe9s-\xe0-can",level:3},{value:"Remplissez l&#39;ID CAN dans la configuration",id:"remplissez-lid-can-dans-la-configuration",level:3}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Button:t,ImageView:a}=n;return t||c("Button",!0),a||c("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"configuration-can-et-recherche-did",children:"Configuration CAN et Recherche d'ID"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si vous avez besoin d'utiliser CAN, assurez-vous que votre ordinateur de contr\xf4le a \xe9t\xe9 configur\xe9 pour CAN."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,r.jsx)(n.p,{children:"Assurez-vous que la carte m\xe8re est correctement connect\xe9e \xe0 l'ordinateur de contr\xf4le avant de proc\xe9der aux op\xe9rations suivantes."})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Assurez-vous que le r\xe9seau CAN de l'ordinateur de contr\xf4le, la vitesse CAN de la carte m\xe8re ponteuse et la vitesse CAN de la carte outil sont enti\xe8rement coh\xe9rentes."})}),"\n",(0,r.jsx)(n.h3,{id:"remarques-avant-la-recherche-dappareils",children:"Remarques avant la recherche d'appareils"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Avant de rechercher l'ID CAN, veuillez ",(0,r.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"cliquez pour acc\xe9der",children:"vous connecter \xe0 SSH"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Veuillez noter qu'il faut vous assurer d'\xeatre connect\xe9 \xe0 SSH via le r\xe9seau et non par port s\xe9rie."}),"\n",(0,r.jsx)(n.li,{children:"Assurez-vous d'avoir correctement connect\xe9 la carte UTOC ou une carte m\xe8re avec le firmware CAN bridge flash\xe9, et assurez-vous que le c\xe2ble de connexion \xe0 l'ordinateur de contr\xf4le poss\xe8de la fonction de transmission de donn\xe9es."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"recherche-dappareils",children:"Recherche d'appareils"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Maintenant que vous \xeates connect\xe9 normalement \xe0 l'ordinateur de contr\xf4le, vous pouvez entrer ",(0,r.jsx)(n.code,{children:"lsusb"})," pour rechercher des appareils. Il y aura l'une des situations suivantes :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si vous entrez ",(0,r.jsx)(n.code,{children:"lsusb"})," et que cela indique que la commande ",(0,r.jsx)(n.code,{children:"ls"})," n'est pas trouv\xe9e, vous pouvez entrer la commande ci-dessous pour installer la commande :","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Si vous entrez ",(0,r.jsx)(n.code,{children:"lsusb"})," et qu'il ne se passe rien, c'est un probl\xe8me syst\xe8me auquel nous ne pouvons rien faire. Vous devez changer de syst\xe8me ou utiliser un syst\xe8me qui fonctionne correctement."]}),"\n",(0,r.jsxs)(n.li,{children:["Si vous obtenez les informations contenues dans l'image ci-dessous, veuillez noter que cela n'est qu'une r\xe9f\xe9rence. Vous n'avez besoin de vous assurer que ",(0,r.jsx)(n.code,{children:"1d50:606f"})," appara\xeet.","\n",(0,r.jsx)(a,{image:i(61270).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"1d50:606f"})," appartient \xe0 l'appareil que vous utiliserez cette fois-ci. Les indications suivantes ne sont pas importantes car les probl\xe8mes du syst\xe8me peuvent entra\xeener une affichage incomplet ou m\xeame aucune affichage."]}),"\n",(0,r.jsxs)(n.li,{children:["Si plusieurs ",(0,r.jsx)(n.code,{children:"1d50:606f"})," apparaissent, il est recommand\xe9 d'en exclure une, sinon cela affectera la gravure ult\xe9rieure et la connexion du firmware. Par exemple, si vous utilisez le ",(0,r.jsx)(n.code,{children:"FLY MINI PAD"}),", il est recommand\xe9 d'utiliser le UTOC int\xe9gr\xe9 plut\xf4t que d'autres p\xe9riph\xe9riques de pontage CAN."]}),"\n",(0,r.jsx)(n.li,{children:"Si aucun appareil n'appara\xeet, veuillez v\xe9rifier si les c\xe2bles de donn\xe9es sont correctement connect\xe9s et si le firmware a \xe9t\xe9 correctement flash\xe9."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Remarques",type:"warning",children:(0,r.jsxs)(n.p,{children:["Vous ne pouvez rechercher l'ID CAN qu'apr\xe8s avoir trouv\xe9 ",(0,r.jsx)(n.code,{children:"1d50:606f"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"recherche-de-lid-can",children:"Recherche de l'ID CAN"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Entrez la commande ci-dessous pour rechercher l'ID :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si un ID appara\xeet et que la derni\xe8re partie ",(0,r.jsx)(n.code,{children:"Application:"})," indique ",(0,r.jsx)(n.code,{children:"Klipper"}),", cela signifie que cet ID peut \xeatre utilis\xe9 directement."]}),"\n",(0,r.jsxs)(n.li,{children:["Si un ID appara\xeet et que la derni\xe8re partie ",(0,r.jsx)(n.code,{children:"Application:"})," indique ",(0,r.jsx)(n.code,{children:"CANBOOT"})," ou ",(0,r.jsx)(n.code,{children:"Katapult"}),", cela signifie que vous devez graver le firmware pour pouvoir l'utiliser.","\n",(0,r.jsx)(a,{image:i(56583).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ensemble-des-probl\xe8mes-li\xe9s-\xe0-can",children:"Ensemble des probl\xe8mes li\xe9s \xe0 CAN"}),"\n",(0,r.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si vous ne trouvez pas l'ID CAN, consultez le document ci-dessous."}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"/docs/DebugDoc/faq/klipper_can",children:"Ensemble des probl\xe8mes li\xe9s \xe0 CAN"}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"remplissez-lid-can-dans-la-configuration",children:"Remplissez l'ID CAN dans la configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Ouvrez l'interface Web de l'imprimante, dans le menu lat\xe9ral gauche, trouvez l'option de configuration : fluidd est ",(0,r.jsx)(n.code,{children:"{\u2026}"})," ; mainsail est ",(0,r.jsx)(n.code,{children:"machine"}),", cliquez dessus pour acc\xe9der \xe0 ",(0,r.jsx)(n.code,{children:"printer.cfg"}),"."]}),"\n",(0,r.jsx)(a,{image:i(531).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copiez l'UUID que vous avez trouv\xe9 et collez-le dans la configuration ",(0,r.jsx)(n.code,{children:"printer.cfg"})," \xe0 la section ",(0,r.jsx)(n.code,{children:"[mcu]"})," sous ",(0,r.jsx)(n.code,{children:"canbus_uuid:"}),". En sauvegardant et en red\xe9marrant, vous pourrez connecter la carte m\xe8re. Si Klipper indique qu'un mise \xe0 jour du firmware est n\xe9cessaire, une erreur ADC, etc., cela signifie que Klipper s'est connect\xe9 \xe0 la carte m\xe8re."]}),"\n",(0,r.jsx)(a,{image:i(56583).Z,size:"50%",align:"left"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"Notez : Tous les ID mentionn\xe9s dans ce document sont des exemples. L'ID de chaque carte m\xe8re est diff\xe9rente. Modifiez et remplissez en fonction de l'ID r\xe9ellement obtenue."})}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function c(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},17354:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/canbridge","title":"Pont CAN","description":"Le bus CAN est un protocole de communication en s\xe9rie pour applications temps r\xe9el, qui peut utiliser des fils torsad\xe9s pour transmettre des signaux, et c\'est l\'un des bus de terrain les plus largement utilis\xe9s dans le monde. Le protocole CAN est utilis\xe9 pour la communication entre diff\xe9rents \xe9l\xe9ments dans une voiture, rempla\xe7ant ainsi des c\xe2bles d\'alimentation co\xfbteux et encombrants. La robustesse de ce protocole a permis son utilisation dans d\'autres applications automatis\xe9es et industrielles. Les caract\xe9ristiques du protocole CAN incluent des communications de donn\xe9es s\xe9rie compl\xe8tes, un support temps r\xe9el, des taux de transmission allant jusqu\'\xe0 1Mb/s, ainsi qu\'une adresse \xe0 11 bits et une capacit\xe9 de d\xe9tection d\'erreurs.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/canbridge.mdx","sourceDirName":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3","slug":"/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/canbridge","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/canbridge","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/canbridge.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"sidebar_label":"Pont CAN"},"sidebar":"tutorialSidebar","previous":{"title":"Branchement de la carte m\xe8re","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/wiring"},"next":{"title":"Guide d\'utilisation des pilotes externes","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/servo-drive"}}'),s=i("85893"),t=i("50065"),a=i("89363");let l={sidebar_position:9,sidebar_label:"Pont CAN"},c="Pont CAN",o={},d=[{value:"Utilisation du pont CAN avec la carte m\xe8re",id:"utilisation-du-pont-can-avec-la-carte-m\xe8re",level:2},{value:"Mise \xe0 jour du firmware de la carte m\xe8re",id:"mise-\xe0-jour-du-firmware-de-la-carte-m\xe8re",level:2},{value:"Recherche de l&#39;ID",id:"recherche-de-lid",level:2},...a.d$];function u(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components},{ImageView:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"pont-can",children:"Pont CAN"})}),"\n",(0,s.jsx)(n.p,{children:"Le bus CAN est un protocole de communication en s\xe9rie pour applications temps r\xe9el, qui peut utiliser des fils torsad\xe9s pour transmettre des signaux, et c'est l'un des bus de terrain les plus largement utilis\xe9s dans le monde. Le protocole CAN est utilis\xe9 pour la communication entre diff\xe9rents \xe9l\xe9ments dans une voiture, rempla\xe7ant ainsi des c\xe2bles d'alimentation co\xfbteux et encombrants. La robustesse de ce protocole a permis son utilisation dans d'autres applications automatis\xe9es et industrielles. Les caract\xe9ristiques du protocole CAN incluent des communications de donn\xe9es s\xe9rie compl\xe8tes, un support temps r\xe9el, des taux de transmission allant jusqu'\xe0 1Mb/s, ainsi qu'une adresse \xe0 11 bits et une capacit\xe9 de d\xe9tection d'erreurs.\nSur une imprimante 3D, le bus CAN est utilis\xe9 pour r\xe9duire le nombre de c\xe2bles reliant la t\xeate d'impression \xe0 la carte m\xe8re, passant de plusieurs dizaines de c\xe2bles \xe0 seulement quatre, ce qui r\xe9duit consid\xe9rablement le nombre de c\xe2bles et facilite leur installation.\nCe chapitre ne fait qu'un bref aper\xe7u de l'utilisation du pontage CAN."}),"\n",(0,s.jsx)(n.h2,{id:"utilisation-du-pont-can-avec-la-carte-m\xe8re",children:"Utilisation du pont CAN avec la carte m\xe8re"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Veuillez noter que le fil d'alimentation du pont CAN n'est pas connect\xe9 au port CAN, mais au c\xe2ble d'alimentation de 12V-24V"}),"\n"]}),"\n",(0,s.jsx)(r,{image:i(77456).Z,size:"80%",align:"center"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Veuillez noter que la r\xe9sistance de 120\u03A9 doit \xeatre connect\xe9e"}),"\n"]}),"\n",(0,s.jsx)(r,{image:i(28458).Z,size:"80%",align:"center"}),"\n",(0,s.jsx)(n.h2,{id:"mise-\xe0-jour-du-firmware-de-la-carte-m\xe8re",children:"Mise \xe0 jour du firmware de la carte m\xe8re"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Assurez-vous que le firmware br\xfbl\xe9 sur la carte m\xe8re Gemini est ",(0,s.jsx)(n.code,{children:"Firmware de pont USB-CAN configur\xe9"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"recherche-de-lid",children:"Recherche de l'ID"}),"\n",(0,s.jsx)(a.ZP,{})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},61270:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/606f-ba58e29a9188142cd34019862e0c85e2.webp"},56583:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/canbus-uuid-7117b665e00888c3c8163973d8c29b10.webp"},531:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/fluidd-cfg-852485b665e4c2b86aaf45ae4b133d7d.webp"},28458:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/120-37aadf15031444cb622ab057442fd0a3.webp"},77456:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/canbridge-33a7808f6a6de92a75124d5f39f950e2.webp"},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return a}});var r=i(67294);let s={},t=r.createContext(s);function a(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);