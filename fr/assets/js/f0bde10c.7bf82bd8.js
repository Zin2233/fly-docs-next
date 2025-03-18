"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["50868"],{19339:function(e,n,r){r.d(n,{ZP:function(){return a},d$:function(){return s}});var i=r(52676),t=r(79938);let s=[];function l(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult \xe9tait auparavant appel\xe9 CanBoot, puis renomm\xe9 katapult"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult est un type de bootloader qui peut \xeatre utilis\xe9 avec Klipper. Apr\xe8s avoir \xe9t\xe9 grav\xe9 via DFU ou d'autres m\xe9thodes, il permet une mise \xe0 jour du firmware via commande en un clic."}),"\n",(0,i.jsx)(n.li,{children:"Avantages : Un double appui rapide sur le bouton de r\xe9initialisation (reset) ou une coupure d'alimentation rapide deux fois permet d'entrer dans le firmware Katapult, auquel cas une LED clignote sur la carte m\xe8re."}),"\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult ne peut \xeatre utilis\xe9 que pour graver des firmwares, et non pour se connecter \xe0 klipper !!!"}),"\n",(0,i.jsxs)(n.li,{children:["Le firmware Katapult supporte trois m\xe9thodes de connexion \xe0 l'ordinateur principal, les firmwares de ces trois m\xe9thodes sont ind\xe9pendants les uns des autres :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Connexion CAN","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware, r\xe9sistant aux interf\xe9rences."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il faut conna\xeetre \xe0 l'avance le taux de transmission du firmware compil\xe9."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion RS232","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour le firmware, r\xe9sistant fortement aux interf\xe9rences."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il n'est pas possible de mettre \xe0 jour le firmware en un clic via commande, il faut entrer manuellement dans le firmware Katapult."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion USB","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Un c\xe2ble de donn\xe9es trop long peut \xeatre sujet aux interf\xe9rences, ce qui pourrait entra\xeener une d\xe9connexion."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},55175:function(e,n,r){r.d(n,{ZP:function(){return a},d$:function(){return s}});var i=r(52676),t=r(79938);let s=[];function l(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{ImageView:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Installation de l'outil de gravure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Tapez la commande ci-dessous dans SSH"}),"\n",(0,i.jsx)(n.li,{children:"N\xe9cessaire uniquement lors de la premi\xe8re gravure, pas besoin de r\xe9p\xe9ter par la suite"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/lib/rp2040_flash/ && make\n"})}),"\n",(0,i.jsx)(s,{image:r(46366).Z,size:"100%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ex\xe9cutez la commande suivante pour v\xe9rifier si la connexion a r\xe9ussi."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Tapez ",(0,i.jsx)(n.code,{children:"lsusb"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Si le p\xe9riph\xe9rique ",(0,i.jsx)(n.code,{children:"2e8a:0003"})," n'est pas pr\xe9sent, essayez de r\xe9entrer en ",(0,i.jsx)(n.strong,{children:"mode de gravage"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["En raison des versions du syst\xe8me d'exploitation, le nom peut \xeatre diff\xe9rent ; la pr\xe9sence de ",(0,i.jsx)(n.code,{children:"2e8a:0003"})," indique que le mode de gravage a \xe9t\xe9 atteint"]}),"\n",(0,i.jsx)(s,{image:r(47368).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Remarque",type:"warning",children:(0,i.jsxs)(n.p,{children:["Effectuez l'\xe9tape suivante uniquement si vous avez ",(0,i.jsx)(n.code,{children:"2e8a:0003"})]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"T\xe9l\xe9chargement des firmwares pr\xe9compil\xe9s"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ceux-ci contiennent des firmwares pr\xe9compil\xe9s"}),"\n",(0,i.jsx)(n.li,{children:"Veuillez noter que l'ordinateur h\xf4te doit \xeatre connect\xe9 \xe0 Internet pour installer"}),"\n",(0,i.jsx)(n.li,{children:"L'ordinateur h\xf4te doit ex\xe9cuter la commande ci-dessous pour t\xe9l\xe9charger le paquet de firmwares"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si vous avez d\xe9j\xe0 t\xe9l\xe9charg\xe9 le paquet de firmwares, il est recommand\xe9 de mettre \xe0 jour le paquet avant de continuer"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})}),"\n"]}),"\n"]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},6814:function(e,n,r){r.d(n,{ZP:function(){return a},d$:function(){return s}});var i=r(52676),t=r(79938);let s=[];function l(e){let n={code:"code",li:"li",ul:"ul",...(0,t.a)(),...e.components},{ImageView:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pr\xe9parez un c\xe2ble de donn\xe9es avec fonction de transmission de donn\xe9es"}),"\n",(0,i.jsx)(n.li,{children:"T\xe9l\xe9chargez le firmware sur l'ordinateur"}),"\n",(0,i.jsxs)(n.li,{children:["Branchez ou maintenez enfonc\xe9 le sautateur BOOT puis reliez-le au ordinateur, cela fera appara\xeetre le disque ",(0,i.jsx)(n.code,{children:"RPI-RP2"}),"\n",(0,i.jsx)(s,{image:r(55138).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"D\xe9sbranchez ou rel\xe2chez le sautateur BOOT !!!"}),"\n",(0,i.jsxs)(n.li,{children:["Copiez le firmware \xe0 graver dans le dossier, veillez \xe0 ne copier que des fichiers avec l'extension ",(0,i.jsx)(n.code,{children:".uf2"})," !!! (Ne modifiez pas l'extension du fichier, cela n'a aucun effet)"]}),"\n",(0,i.jsxs)(n.li,{children:["R\xe9f\xe9rez-vous","\n",(0,i.jsx)(s,{image:r(69057).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Une fois le firmware copi\xe9, le disque ",(0,i.jsx)(n.code,{children:"RPI-RP2"})," dispara\xeetra automatiquement, la gravure du firmware est termin\xe9e !"]}),"\n"]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},87514:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>u,toc:()=>p,frontMatter:()=>d});var i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/bl","title":"Firmware Katapult","description":"Explication du firmware Katapult","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/bl.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/bl","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"frontMatter":{"position-sidebar":6,"\xe9tiquette-sidebar":"BL firmware, ignorer !"},"sidebar":"tutorialSidebar","previous":{"title":"Compilation et flash du firmware CAN","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/can"},"next":{"title":"Lecture et v\xe9rification de l\'ID de la carte m\xe8re","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/id"}}'),t=r("52676"),s=r("79938"),l=r("6814"),a=r("55175"),o=r("19339");let d={"position-sidebar":6,"\xe9tiquette-sidebar":"BL firmware, ignorer !"},c="Firmware Katapult",u={},p=[{value:"Explication du firmware Katapult",id:"explication-du-firmware-katapult",level:2},...o.d$,{value:"Entrer en mode de programmation",id:"entrer-en-mode-de-programmation",level:2},{value:"Flasher le firmware",id:"flasher-le-firmware",level:2},...l.d$,...a.d$,{value:"V\xe9rifier si le firmware est d\xe9marr\xe9",id:"v\xe9rifier-si-le-firmware-est-d\xe9marr\xe9",level:2}];function m(e){let n={code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Button:i,ImageView:d,TabItem:c,Tabs:u}=n;return!i&&f("Button",!0),!d&&f("ImageView",!0),!c&&f("TabItem",!0),!u&&f("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"firmware-katapult",children:"Firmware Katapult"})}),"\n",(0,t.jsx)(n.h2,{id:"explication-du-firmware-katapult",children:"Explication du firmware Katapult"}),"\n",(0,t.jsx)(o.ZP,{}),"\n",(0,t.jsx)(n.div,{children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le SHT36 PRO prend en charge CAN"}),"\n",(0,t.jsx)(n.li,{children:"Seule la version CAN du firmware est fournie ici, avec des vitesses de 500K et 1M"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"entrer-en-mode-de-programmation",children:"Entrer en mode de programmation"}),"\n",(0,t.jsx)(n.div,{children:(0,t.jsxs)(n.p,{children:["Ce qui est entour\xe9 est le ",(0,t.jsx)(n.code,{children:"bouton BOOT"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avec le circuit principal compl\xe8tement d\xe9branch\xe9, court-circuitez le bouton BOOT puis branchez un c\xe2ble de transmission de donn\xe9es d'une extr\xe9mit\xe9 au circuit principal et de l'autre \xe0 votre appareil"}),"\n",(0,t.jsxs)(n.li,{children:["Ensuite, retirez le court-circuit du bouton BOOT","\n",(0,t.jsx)(d,{image:r(96039).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"flasher-le-firmware",children:"Flasher le firmware"}),"\n",(0,t.jsxs)(u,{children:[(0,t.jsxs)(c,{value:"win",label:"Tutoriel de flashage pour Windows",default:!0,children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Le firmware Katapult pour SHT36_PRO    ",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/SHT36_PRO.zip",children:"Cliquez pour t\xe9l\xe9charger automatiquement le firmware"})]}),"\n"]}),(0,t.jsx)(l.ZP,{})]}),(0,t.jsxs)(c,{value:"linux",label:"Tutoriel de flashage pour l'ordinateur h\xf4te",children:[(0,t.jsx)(a.ZP,{}),(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Flasher le firmware"}),"\n"]}),(0,t.jsx)(n.div,{children:(0,t.jsx)(n.p,{children:"Vous n'avez besoin de flasher qu'un seul firmware"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ci-dessous est la commande pour flasher le firmware avec une vitesse de CAN de 500K"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/SHT36/FLY_SHT36PRO_CANBOOT_500K.uf2\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ci-dessous est la commande pour flasher le firmware avec une vitesse de CAN de 1M"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/SHT36/FLY_SHT36PRO_CANBOOT_1M.uf2\n"})}),(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Si vous voyez ci-dessous, cela signifie que le flashage a r\xe9ussi."}),"\n"]}),(0,t.jsx)(d,{image:r(49707).Z,size:"100%",align:"center"}),(0,t.jsx)(n.div,{children:(0,t.jsx)(n.p,{children:"Apr\xe8s le flashage, il est n\xe9cessaire de couper l'alimentation au circuit principal une fois."})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"v\xe9rifier-si-le-firmware-est-d\xe9marr\xe9",children:"V\xe9rifier si le firmware est d\xe9marr\xe9"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si le firmware d\xe9marre correctement, la LED va clignoter","\n",(0,t.jsx)(d,{image:r(40976).Z,size:"70%",align:"center"}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}function f(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},46366:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/2040-cc7587e65304922141ed75654c56e8e0.webp"},49707:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/flash3-ca07b1c5da933a137dbf5155a965a150.webp"},55138:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/uf2-c04612a2d39377a5d2deda5ab967e7cf.webp"},69057:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/uf21-2c911712248e23dca385b8be6dc6f628.webp"},47368:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/2e8a-387d46703c1d67dcf7b6fd514e28df22.webp"},96039:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/boot-e784543ee4dd0015c4fdfd3ebdef1235.webp"},40976:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/led-7e3b49092e9e3cf6926928758b767be9.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var i=r(75271);let t={},s=i.createContext(t);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);