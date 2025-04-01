"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["42524"],{37878:function(e,n,r){r.d(n,{ZP:function(){return a},d$:function(){return t}});var i=r(74132),l=r(94551);let t=[];function s(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult \xe9tait auparavant appel\xe9 CanBoot, puis renomm\xe9 katapult"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult est un type de bootloader qui peut \xeatre utilis\xe9 avec Klipper. Apr\xe8s avoir \xe9t\xe9 grav\xe9 via DFU ou d'autres m\xe9thodes, il permet une mise \xe0 jour du firmware via commande en un clic."}),"\n",(0,i.jsx)(n.li,{children:"Avantages : Un double appui rapide sur le bouton de r\xe9initialisation (reset) ou une coupure d'alimentation rapide deux fois permet d'entrer dans le firmware Katapult, auquel cas une LED clignote sur la carte m\xe8re."}),"\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult ne peut \xeatre utilis\xe9 que pour graver des firmwares, et non pour se connecter \xe0 klipper !!!"}),"\n",(0,i.jsxs)(n.li,{children:["Le firmware Katapult supporte trois m\xe9thodes de connexion \xe0 l'ordinateur principal, les firmwares de ces trois m\xe9thodes sont ind\xe9pendants les uns des autres :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Connexion CAN","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware, r\xe9sistant aux interf\xe9rences."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il faut conna\xeetre \xe0 l'avance le taux de transmission du firmware compil\xe9."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion RS232","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour le firmware, r\xe9sistant fortement aux interf\xe9rences."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il n'est pas possible de mettre \xe0 jour le firmware en un clic via commande, il faut entrer manuellement dans le firmware Katapult."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion USB","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Un c\xe2ble de donn\xe9es trop long peut \xeatre sujet aux interf\xe9rences, ce qui pourrait entra\xeener une d\xe9connexion."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},47829:function(e,n,r){r.d(n,{ZP:function(){return a},d$:function(){return t}});var i=r(74132),l=r(94551);let t=[];function s(e){let n={code:"code",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{ImageView:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Installation de l'outil de gravure"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L'interface sup\xe9rieure FLY n'a pas besoin d'ex\xe9cuter l'installation de l'outil de gravure"}),"\n",(0,i.jsx)(n.li,{children:"Si vous devez installer, veuillez noter : l'interface sup\xe9rieure doit \xeatre en mesure de se connecter \xe0 Internet pour installer correctement"}),"\n",(0,i.jsx)(n.li,{children:"Si vous avez d\xe9j\xe0 install\xe9, vous n'avez pas besoin d'installer"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install dfu-util -y\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Ex\xe9cutez la commande suivante pour v\xe9rifier si la connexion a r\xe9ussi."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lsusb\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si aucun p\xe9riph\xe9rique DFU n'est d\xe9tect\xe9, essayez de r\xe9entrez en ",(0,i.jsx)(n.strong,{children:"mode de gravage"})]}),"\n",(0,i.jsxs)(n.li,{children:["En raison des probl\xe8mes de version du syst\xe8me, il est possible que d'autres noms soient affich\xe9s, si ",(0,i.jsx)(n.code,{children:"0483:df11"})," est affich\xe9, cela signifie que le mode de gravage a \xe9t\xe9 entr\xe9"]}),"\n"]}),"\n",(0,i.jsx)(t,{image:r(44691).Z,size:"100%",align:"left"}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"T\xe9l\xe9chargez les fichiers de firmware pr\xe9compil\xe9s"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Cela contient tous les fichiers de firmware pr\xe9compil\xe9s"}),"\n",(0,i.jsx)(n.li,{children:"Veuillez noter que l'interface sup\xe9rieure doit \xeatre en mesure de se connecter \xe0 Internet pour installer"}),"\n",(0,i.jsx)(n.li,{children:"L'interface sup\xe9rieure doit ex\xe9cuter la commande ci-dessous pour t\xe9l\xe9charger le paquet de fichiers de firmware (si le t\xe9l\xe9chargement ne peut pas \xeatre effectu\xe9 en raison de probl\xe8mes de r\xe9seau sur l'interface sup\xe9rieure, veuillez contacter l'administrateur du groupe de support apr\xe8s-vente)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si vous avez d\xe9j\xe0 t\xe9l\xe9charg\xe9 le paquet de fichiers de firmware, il est recommand\xe9 de mettre \xe0 jour le paquet de fichiers de firmware avant de poursuivre les autres op\xe9rations"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},7843:function(e,n,r){r.d(n,{ZP:function(){return a},d$:function(){return t}});var i=r(74132),l=r(94551);let t=[];function s(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.a)(),...e.components},{Button:t,ImageView:s}=n;return t||o("Button",!0),s||o("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Probl\xe8mes de compatibilit\xe9 du syst\xe8me, veuillez utiliser le port ",(0,i.jsx)(n.code,{children:"USB2.0"})," de l'ordinateur pour la gravure"]}),"\n",(0,i.jsx)(n.li,{children:"Si la gravure \xe9choue toujours, veuillez utiliser un logiciel de p\xe9riph\xe9rique pour la gravure"}),"\n"]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Outil de gravure ",(0,i.jsx)(t,{variant:"contained",disableElevation:!0,href:"https://mellow-next.klipper.cn/docs/ResDownload/auxiliary_software/",children:"Lien de t\xe9l\xe9chargement"})]}),"\n",(0,i.jsxs)(n.li,{children:["T\xe9l\xe9chargez ",(0,i.jsx)(n.code,{children:"SetupSTM32CubeProgrammer"})," et ",(0,i.jsx)(n.code,{children:"Pilote DFU STM32"})]}),"\n",(0,i.jsxs)(n.li,{children:["Copiez le firmware compil\xe9 \xe0 l'avance (klipper.bin) ou le ",(0,i.jsx)(n.code,{children:"firmware Katapult"})," pr\xe9compil\xe9 dans un r\xe9pertoire au choix de l'ordinateur"]}),"\n",(0,i.jsxs)(n.li,{children:["Connectez la carte m\xe8re au PC via un c\xe2ble de donn\xe9es Type-C, assurez-vous que vous avez d\xe9j\xe0 :",(0,i.jsx)(t,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/bl#entrer-en-mode-de-gravage-dfu",children:"Entrer en mode de gravage DFU"})]}),"\n",(0,i.jsxs)(n.li,{children:["Dans STM32CubeProgrammer, choisissez le mode USB, puis rafra\xeechissez et connectez-vous","\n",(0,i.jsx)(s,{image:r(54411).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Si aucune fen\xeatre d'erreur n'appara\xeet, la connexion est r\xe9ussie.","\n",(0,i.jsx)(n.admonition,{title:"Avertissement",type:"danger",children:(0,i.jsxs)(n.p,{children:["Si le contenu suivant s'affiche, il s'agit d'un probl\xe8me avec l'ordinateur ou le logiciel, veuillez utiliser un logiciel de p\xe9riph\xe9rique pour la gravure :",(0,i.jsx)(t,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/bl#graver-le-firmware",children:"Tutoriel de gravure par logiciel de p\xe9riph\xe9rique"})]})}),"\n",(0,i.jsx)(s,{image:r(11542).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Cliquez sur l'ic\xf4ne de t\xe9l\xe9chargement \xe0 gauche et s\xe9lectionnez quelques options","\n",(0,i.jsx)(s,{image:r(88789).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Cliquez sur ",(0,i.jsx)(n.code,{children:"Browse"})," indiqu\xe9 par la fl\xe8che, puis s\xe9lectionnez le firmware \xe0 graver","\n",(0,i.jsx)(s,{image:r(34319).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["S\xe9lectionnez ",(0,i.jsx)(n.code,{children:"Start address"})," et entrez ",(0,i.jsx)(n.code,{children:"0x08000000"}),"\n",(0,i.jsx)(s,{image:r(18134).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Cliquez sur ",(0,i.jsx)(n.code,{children:"Start automatic mode"})," en bas pour commencer la gravure du firmware","\n",(0,i.jsx)(s,{image:r(92085).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Une fois le message suivant affich\xe9, cela signifie que la gravure du firmware est termin\xe9e","\n",(0,i.jsx)(s,{image:r(61566).Z,size:"100%",align:"center"}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}function o(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},10775:function(e,n,r){r.r(n),r.d(n,{default:()=>f,frontMatter:()=>d,metadata:()=>i,assets:()=>u,toc:()=>p,contentTitle:()=>c});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-dp5/flash/bl","title":"Firmware Katapult","description":"Explication du firmware Katapult","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-dp5/flash/bl.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-dp5/flash","slug":"/ProductDoc/MainBoard/fly-d/fly-dp5/flash/bl","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-dp5/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-dp5/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Flasher le firmware Katapult"},"sidebar":"tutorialSidebar","previous":{"title":"Tutoriel de recherche d\'ID","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-dp5/flash/id"},"next":{"title":"Klipper\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-dp5/cfg"}}'),l=r("74132"),t=r("94551"),s=r("7843"),a=r("47829"),o=r("37878");let d={sidebar_position:6,sidebar_label:"Flasher le firmware Katapult"},c="Firmware Katapult",u={},p=[{value:"Explication du firmware Katapult",id:"explication-du-firmware-katapult",level:2},...o.d$,{value:"Entrer en mode de flashage",id:"entrer-en-mode-de-flashage",level:2},{value:"Flasher le firmware",id:"flasher-le-firmware",level:2},...s.d$,...a.d$];function m(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Button:i,ImageView:d,TabItem:c,Tabs:u}=n;return i||h("Button",!0),d||h("ImageView",!0),c||h("TabItem",!0),u||h("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"firmware-katapult",children:"Firmware Katapult"})}),"\n",(0,l.jsx)(n.h2,{id:"explication-du-firmware-katapult",children:"Explication du firmware Katapult"}),"\n",(0,l.jsx)(o.ZP,{}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"D5 connect\xe9 via USB"}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"entrer-en-mode-de-flashage",children:"Entrer en mode de flashage"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["\xc0 gauche se trouve le bouton ",(0,l.jsx)(n.code,{children:"BOOT"}),", \xe0 droite se trouve le bouton ",(0,l.jsx)(n.code,{children:"RESET"}),"."]})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Il existe deux m\xe9thodes pour entrer en mode de flashage."}),"\n",(0,l.jsx)(n.li,{children:"Premi\xe8re m\xe9thode : \xc9teignez compl\xe8tement la carte m\xe8re, appuyez sur le bouton BOOT, puis branchez un c\xe2ble de transmission de donn\xe9es entre la carte m\xe8re et votre appareil."}),"\n",(0,l.jsxs)(n.li,{children:["Deuxi\xe8me m\xe9thode : Branchez un c\xe2ble de transmission de donn\xe9es entre la carte m\xe8re et votre appareil, appuyez sur le bouton BOOT, puis appuyez sur le bouton RST, rel\xe2chez le bouton RST en dernier, puis rel\xe2chez le bouton BOOT.","\n",(0,l.jsx)(d,{image:r(20388).Z,size:"50%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"flasher-le-firmware",children:"Flasher le firmware"}),"\n",(0,l.jsxs)(u,{children:[(0,l.jsxs)(c,{value:"win",label:"Tutoriel de flashage Windows",default:!0,children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Firmware Katapult pour DP5 ",(0,l.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/D.zip",children:"Cliquez pour t\xe9l\xe9charger automatiquement le firmware"})]}),"\n"]}),(0,l.jsx)(s.ZP,{})]}),(0,l.jsxs)(c,{value:"linux",label:"Tutoriel de flashage avec l'interface graphique",children:[(0,l.jsx)(a.ZP,{}),(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"Flasher le firmware"}),"\n"]}),(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Vous n'avez besoin de flasher qu'un seul firmware."})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Voici la commande de flashage","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo dfu-util -a 0 -d 0483:df11 --dfuse-address 0x08000000 -D ~/FLY_Katapult/BL/D/FLY_DP5.bin\n"})}),"\n"]}),"\n"]}),(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Si vous voyez le contenu indiqu\xe9 par la fl\xe8che dans l'image ci-dessous ",(0,l.jsx)(n.code,{children:"File downloaded successfully"}),", alors le flashage est r\xe9ussi."]}),"\n",(0,l.jsx)(d,{image:r(69056).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Apr\xe8s le flashage, il faut couper l'alimentation de la carte m\xe8re une fois."})})]})]})]})}function f(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}function h(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44691:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/lsusb-460d7d3379cb644139898385fd86f2ec.webp"},69056:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/make-flash-85b1e01b14ed5924982a2ae7cb6501f0.webp"},54411:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/stm32cube-1-4d518a7b7231de7da7230ae63b82e477.webp"},88789:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/stm32cube-2-8f9f2f15bea5e6acf6c39175f13140fc.webp"},34319:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/stm32cube-3-51ae6c039223223689cbcab82827c416.webp"},18134:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/stm32cube-4-9cf41c6403736a50cf97b75379c12579.webp"},92085:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/stm32cube-5-02cc80158d21b9919d8815237e5555f3.webp"},61566:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/stm32cube-6-6011a605b09f201c9daa91f53d1c8fca.webp"},11542:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/stm32cube-7-aaf9c753d51189c3c1566d683e552682.webp"},20388:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/boot-7342bc51eaea0da5cf73805e93469d73.webp"},94551:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var i=r(39546);let l={},t=i.createContext(l);function s(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);