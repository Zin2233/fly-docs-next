"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["78199"],{19339:function(e,n,r){r.d(n,{ZP:function(){return l},d$:function(){return a}});var i=r(52676),t=r(79938);let a=[];function s(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult \xe9tait auparavant appel\xe9 CanBoot, puis renomm\xe9 katapult"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult est un type de bootloader qui peut \xeatre utilis\xe9 avec Klipper. Apr\xe8s avoir \xe9t\xe9 grav\xe9 via DFU ou d'autres m\xe9thodes, il permet une mise \xe0 jour du firmware via commande en un clic."}),"\n",(0,i.jsx)(n.li,{children:"Avantages : Un double appui rapide sur le bouton de r\xe9initialisation (reset) ou une coupure d'alimentation rapide deux fois permet d'entrer dans le firmware Katapult, auquel cas une LED clignote sur la carte m\xe8re."}),"\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult ne peut \xeatre utilis\xe9 que pour graver des firmwares, et non pour se connecter \xe0 klipper !!!"}),"\n",(0,i.jsxs)(n.li,{children:["Le firmware Katapult supporte trois m\xe9thodes de connexion \xe0 l'ordinateur principal, les firmwares de ces trois m\xe9thodes sont ind\xe9pendants les uns des autres :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Connexion CAN","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware, r\xe9sistant aux interf\xe9rences."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il faut conna\xeetre \xe0 l'avance le taux de transmission du firmware compil\xe9."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion RS232","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour le firmware, r\xe9sistant fortement aux interf\xe9rences."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il n'est pas possible de mettre \xe0 jour le firmware en un clic via commande, il faut entrer manuellement dans le firmware Katapult."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion USB","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s la compilation du firmware KLIPPER, il est possible d'utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Un c\xe2ble de donn\xe9es trop long peut \xeatre sujet aux interf\xe9rences, ce qui pourrait entra\xeener une d\xe9connexion."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},77487:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>m,assets:()=>u,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-mmu/mmu/flash/index","title":"index","description":"* MMU fournit le firmware Katapult avec une connexion USB et CAN, qui peut \xeatre programm\xe9 par vous-m\xeame si n\xe9cessaire","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-mmu/mmu/flash/index.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-mmu/mmu/flash","slug":"/ProductDoc/ToolBoard/fly-mmu/mmu/flash/","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-mmu/mmu/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-mmu/mmu/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Explications sur la programmation de la mise \xe0 jour du firmware"},"sidebar":"tutorialSidebar","previous":{"title":"MMU\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/fr/docs/category/mmu\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"Pr\xe9sentation des commutateurs int\xe9gr\xe9s","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-mmu/mmu/flash/dip_switch"}}'),t=r("52676"),a=r("79938"),s=r("19339");let l={sidebar_position:1,sidebar_label:"Explications sur la programmation de la mise \xe0 jour du firmware"},o="Explications sur la programmation de la mise \xe0 jour du firmware",u={},d=[{value:"Comment d\xe9terminer quel firmware vous avez besoin",id:"comment-d\xe9terminer-quel-firmware-vous-avez-besoin",level:2},{value:"Explications sur le firmware Katapult",id:"explications-sur-le-firmware-katapult",level:2},...s.d$];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,a.a)(),...e.components},{Button:i,ImageView:l}=n;return!i&&p("Button",!0),!l&&p("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"MMU fournit le firmware Katapult avec une connexion USB et CAN, qui peut \xeatre programm\xe9 par vous-m\xeame si n\xe9cessaire"}),"\n",(0,t.jsx)(n.li,{children:"Le firmware Katapult connect\xe9 via CAN est pr\xe9install\xe9 lors de la fabrication de MMU, avec un taux de transmission de 1 M"}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./bl",children:"Programmation du firmware Katapult"}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"explications-sur-la-programmation-de-la-mise-\xe0-jour-du-firmware",children:"Explications sur la programmation de la mise \xe0 jour du firmware"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"MMU peut se connecter \xe0 l'ordinateur principal via trois m\xe9thodes : RS232, CAN, USB"}),"\n",(0,t.jsxs)(n.li,{children:["Parmi elles, RS232 et CAN n\xe9cessitent l'utilisation de ",(0,t.jsx)(n.code,{children:"XT30(2+2)-F"})," pour la connexion, tandis que USB n\xe9cessite l'utilisation d'un c\xe2ble de donn\xe9es USB Type-C avec fonction de transmission de donn\xe9es"]}),"\n",(0,t.jsxs)(n.li,{children:["Ci-dessous est le mod\xe8le de c\xe2ble de donn\xe9es ",(0,t.jsx)(n.code,{children:"XT30(2+2)-F"}),"\n",(0,t.jsx)(l,{image:r(68827).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La mise \xe0 jour du firmware de la carte m\xe8re doit \xeatre effectu\xe9e en programmant Klipper via Katapult"}),"\n",(0,t.jsx)(n.li,{children:"Si vous \xeates s\xfbr que la carte m\xe8re a d\xe9j\xe0 \xe9t\xe9 programm\xe9e avec Katapult, il n'est pas n\xe9cessaire de programmer le firmware Katapult \xe0 la fin, car cela ne serait qu'une mesure de pr\xe9caution au cas o\xf9 la programmation de la carte m\xe8re aurait \xe9chou\xe9"}),"\n",(0,t.jsx)(n.li,{children:"Vous pouvez v\xe9rifier rapidement si la carte m\xe8re est entr\xe9e dans le firmware Katapult en appuyant deux fois rapidement sur le bouton de r\xe9initialisation. Si un LED clignote, cela signifie que la carte m\xe8re est dans le firmware Katapult"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"comment-d\xe9terminer-quel-firmware-vous-avez-besoin",children:"Comment d\xe9terminer quel firmware vous avez besoin"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"MMU peut se connecter \xe0 l'ordinateur principal via les m\xe9thodes suivantes"}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./can",children:"Programmation du firmware CAN"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantages : Si vous avez install\xe9 le firmware Katapult, vous pouvez mettre \xe0 jour le firmware sans toucher la carte m\xe8re et il supporte la connexion en bus"}),"\n",(0,t.jsxs)(n.li,{children:["Inconv\xe9nients : Il peut y avoir des erreurs comme un d\xe9passement de d\xe9lai de retour \xe0 z\xe9ro en utilisant ",(0,t.jsx)(n.code,{children:"KlipperScreen"})," en m\xeame temps"]}),"\n",(0,t.jsx)(n.li,{children:"Conseil : Si vous devez utiliser CAN, assurez-vous que l'ordinateur principal prend en charge CAN et qu'il doit \xeatre utilis\xe9 avec UTOC ou une carte m\xe8re avec un firmware de pont"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./rs232",children:"Programmation du firmware RS232"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantages : Il n'est pas n\xe9cessaire d'utiliser un logiciel sp\xe9cial pour l'utiliser, la communication est fiable et stable"}),"\n",(0,t.jsxs)(n.li,{children:["Inconv\xe9nients : Pour mettre \xe0 jour le firmware, vous devez entrer en mode DFU manuel ou appuyer deux fois sur le bouton RST pour entrer dans ",(0,t.jsx)(n.code,{children:"Katapult"})," afin de mettre \xe0 jour le firmware"]}),"\n",(0,t.jsx)(n.li,{children:"Conseil : Il faut utiliser G2T ou UTOR pour l'utiliser"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./usb",children:"Programmation du firmware USB"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantages : Si vous avez install\xe9 le firmware Katapult, vous pouvez mettre \xe0 jour le firmware sans toucher la carte m\xe8re, et si vous utilisez une carte m\xe9moire ou une programmation DFU, vous devez toujours suivre la m\xe9thode originale pour mettre \xe0 jour le firmware. La communication est fiable et stable"}),"\n",(0,t.jsx)(n.li,{children:"Inconv\xe9nients : Si plusieurs p\xe9riph\xe9riques USB sont pr\xe9sents, cela peut affecter la transmission de donn\xe9es"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"explications-sur-le-firmware-katapult",children:"Explications sur le firmware Katapult"}),"\n",(0,t.jsx)(s.ZP,{})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},68827:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/xt30-742629a50a3b92c13e2f62b56ee806a9.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var i=r(75271);let t={},a=i.createContext(t);function s(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);