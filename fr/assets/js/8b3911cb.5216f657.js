"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["59221"],{76605:function(e,n,i){i.d(n,{ZP:function(){return l},d$:function(){return t}});var r=i(74132),s=i(94551);let t=[{value:"Recherche de tutoriels USB",id:"recherche-de-tutoriels-usb",level:2},{value:"Remarques avant la recherche du p\xe9riph\xe9rique",id:"remarques-avant-la-recherche-du-p\xe9riph\xe9rique",level:2},{value:"Recherche de p\xe9riph\xe9riques",id:"recherche-de-p\xe9riph\xe9riques",level:2},{value:"Recherche de l&#39;ID USB",id:"recherche-de-lid-usb",level:2},{value:"Inscription de l&#39;ID USB dans la configuration",id:"inscription-de-lid-usb-dans-la-configuration",level:3}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{ImageView:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"recherche-de-tutoriels-usb",children:"Recherche de tutoriels USB"}),"\n",(0,r.jsx)(n.h2,{id:"remarques-avant-la-recherche-du-p\xe9riph\xe9rique",children:"Remarques avant la recherche du p\xe9riph\xe9rique"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Avant de rechercher l'ID USB, veuillez vous ",(0,r.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"cliquez pour acc\xe9der",children:"connecter \xe0 SSH"})]}),"\n",(0,r.jsx)(n.li,{children:"Veuillez noter qu'il est n\xe9cessaire d'\xeatre connect\xe9 \xe0 SSH via le r\xe9seau et non via un port s\xe9rie"}),"\n",(0,r.jsx)(n.li,{children:"Assurez-vous que la carte m\xe8re avec le firmware USB est correctement connect\xe9e et que le c\xe2ble de donn\xe9es reliant la station sup\xe9rieure au mat\xe9riel a la fonction de transmission de donn\xe9es"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"recherche-de-p\xe9riph\xe9riques",children:"Recherche de p\xe9riph\xe9riques"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Assurez-vous que la station sup\xe9rieure est correctement connect\xe9e \xe0 Internet et que le c\xe2ble de donn\xe9es reliant la station sup\xe9rieure au mat\xe9riel a la fonction de transmission de donn\xe9es."}),"\n",(0,r.jsxs)(n.li,{children:["Connectez-vous \xe0 SSH sur la station sup\xe9rieure et entrez ",(0,r.jsx)(n.code,{children:"lsusb"})," puis appuyez sur Entr\xe9e. Si des informations entour\xe9es dans l'image ci-dessous sont affich\xe9es, vous pouvez passer \xe0 l'\xe9tape suivante.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si aucune information n'est renvoy\xe9e, il s'agit d'un probl\xe8me de syst\xe8me de la station sup\xe9rieure. Nous ne pouvons rien faire de plus, vous devrez changer pour un syst\xe8me confirm\xe9 comme \xe9tant normal ou changer la station sup\xe9rieure."}),"\n",(0,r.jsxs)(n.li,{children:["Si le message indique qu'il n'y a pas de commande ",(0,r.jsx)(n.code,{children:"lsusb"}),", vous pouvez ex\xe9cuter cette commande pour l'installer :","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n",(0,r.jsx)(t,{image:i(18377).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"1d50:6177"})," appartient \xe0 l'appareil que vous utiliserez cette fois-ci. Le suffixe ",(0,r.jsx)(n.code,{children:"OpenMoko, Inc. stm32f407xx"})," peut \xeatre utile \xe0 titre indicatif, mais ne doit pas servir de crit\xe8re de jugement.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Certaines stations sup\xe9rieures peuvent afficher des informations incompl\xe8tes ou ne rien afficher en raison de probl\xe8mes de syst\xe8me."}),"\n",(0,r.jsxs)(n.li,{children:["Si vous entrez la commande ",(0,r.jsx)(n.code,{children:"lsusb"})," et que l'appareil est visible, mais que ",(0,r.jsx)(n.code,{children:"1d50:6177"})," n'est pas pr\xe9sent, essayez de changer de c\xe2ble de donn\xe9es et de connecter la carte m\xe8re \xe0 un autre port USB de la station sup\xe9rieure."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Si vous avez d\xe9j\xe0 effectu\xe9 les \xe9tapes ci-dessus et que vous avez r\xe9ussi \xe0 flasher le firmware Klipper, et que la carte m\xe8re fonctionne normalement, et que vous souhaitez simplement mettre \xe0 jour le firmware Klipper, veuillez consulter la section ",(0,r.jsx)(n.code,{children:"Mise \xe0 jour du firmware"})," du menu de droite de cette page."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Remarque",type:"warning",children:(0,r.jsxs)(n.p,{children:["Vous devez avoir trouv\xe9 l'appareil ",(0,r.jsx)(n.code,{children:"1d50:6177"})," avant de pouvoir passer \xe0 l'\xe9tape suivante."]})}),"\n",(0,r.jsx)(n.h2,{id:"recherche-de-lid-usb",children:"Recherche de l'ID USB"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ls /dev/serial/by-id/*\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Entrez la commande ci-dessous et appuyez sur Entr\xe9e. Si tout se passe bien, une ligne d'ID bleue appara\xeetra. (L'exemple ci-dessous est donn\xe9 \xe0 titre indicatif)"}),"\n"]}),"\n",(0,r.jsx)(t,{image:i(27496).Z,size:"80%",align:"left"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si aucune ID n'appara\xeet apr\xe8s l'entr\xe9e de la commande ci-dessous, mais que ",(0,r.jsx)(n.code,{children:"lsusb"})," montre un appareil, veuillez changer de station sup\xe9rieure ou de syst\xe8me de la station sup\xe9rieure"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Remarque",type:"warning",children:(0,r.jsx)(n.p,{children:"Si plusieurs ID apparaissent, choisissez l'ID correspondant au mod\xe8le de MCU de votre carte m\xe8re."})}),"\n",(0,r.jsx)(n.h3,{id:"inscription-de-lid-usb-dans-la-configuration",children:"Inscription de l'ID USB dans la configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Ouvrez l'interface web de l'imprimante, trouvez ",(0,r.jsx)(n.code,{children:"printer.cfg"})," dans l'option de configuration du panneau lat\xe9ral gauche : fluidd est ",(0,r.jsx)(n.code,{children:"{\u2026}"})," ; mainsail est ",(0,r.jsx)(n.code,{children:"machine"}),", cliquez dessus pour y acc\xe9der."]}),"\n",(0,r.jsx)(t,{image:i(43412).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copiez l'ID bleu et collez-le dans le champ ",(0,r.jsx)(n.code,{children:"serial:"})," du n\u0153ud ",(0,r.jsx)(n.code,{children:"[mcu]"})," de la configuration ",(0,r.jsx)(n.code,{children:"printer.cfg"}),". Enregistrez et red\xe9marrez pour vous connecter \xe0 la carte m\xe8re. Si Klipper affiche ",(0,r.jsx)(n.code,{children:"ADC out of range"}),", c'est un ph\xe9nom\xe8ne normal. Branchez correctement le lit chauffant et le thermocouple, configurez les broches thermiques et les broches de sortie du hot-end et du lit, puis enregistrez et red\xe9marrez."]}),"\n",(0,r.jsx)(t,{image:i(16488).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"Attention : tous les ID mentionn\xe9s dans le document sont des exemples. Chaque carte m\xe8re a un ID unique. Veuillez modifier et remplir en fonction de l'ID r\xe9ellement obtenu."})})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},87885:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-d5/canbridge","title":"Pont CAN","description":"Le bus CAN est un protocole de communication en s\xe9rie utilis\xe9 pour les applications temps r\xe9el, capable d\'utiliser des fils torsad\xe9s pour transmettre des signaux. C\'est l\'un des bus de terrain les plus largement utilis\xe9s dans le monde. Le protocole CAN est utilis\xe9 pour la communication entre divers \xe9l\xe9ments dans les v\xe9hicules automobiles, remplacant ainsi les faisceaux de c\xe2bles co\xfbteux et encombrants. La robustesse du protocole a permis son extension \xe0 d\'autres applications automatis\xe9es et industrielles. Les caract\xe9ristiques du protocole CAN incluent une communication en s\xe9rie compl\xe8te avec contr\xf4le de l\'int\xe9grit\xe9 des donn\xe9es, un support temps r\xe9el, des taux de transmission allant jusqu\'\xe0 1 Mb/s, ainsi qu\'une capacit\xe9 d\'adressage \xe0 11 bits et de d\xe9tection d\'erreurs.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-d5/canbridge.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-d5","slug":"/ProductDoc/MainBoard/fly-d/fly-d5/canbridge","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d5/canbridge","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-d5/canbridge.mdx","tags":[],"version":"current","lastUpdatedBy":"Zin2233","lastUpdatedAt":1743907105000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Pont CAN"},"sidebar":"tutorialSidebar","previous":{"title":"Klipper\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d5/cfg"},"next":{"title":"ADXL345","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d5/adxl345"}}'),s=i("74132"),t=i("94551"),a=i("76605");let l={sidebar_position:6,sidebar_label:"Pont CAN"},d="Pont CAN",o={},c=[{value:"Utilisation du pont CAN avec la carte m\xe8re",id:"utilisation-du-pont-can-avec-la-carte-m\xe8re",level:2},{value:"Mise \xe0 jour du firmware de la carte m\xe8re",id:"mise-\xe0-jour-du-firmware-de-la-carte-m\xe8re",level:2},{value:"Recherche d&#39;identifiant",id:"recherche-didentifiant",level:2},...a.d$];function u(e){let n={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components},{ImageView:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"pont-can",children:"Pont CAN"})}),"\n",(0,s.jsx)(n.p,{children:"Le bus CAN est un protocole de communication en s\xe9rie utilis\xe9 pour les applications temps r\xe9el, capable d'utiliser des fils torsad\xe9s pour transmettre des signaux. C'est l'un des bus de terrain les plus largement utilis\xe9s dans le monde. Le protocole CAN est utilis\xe9 pour la communication entre divers \xe9l\xe9ments dans les v\xe9hicules automobiles, remplacant ainsi les faisceaux de c\xe2bles co\xfbteux et encombrants. La robustesse du protocole a permis son extension \xe0 d'autres applications automatis\xe9es et industrielles. Les caract\xe9ristiques du protocole CAN incluent une communication en s\xe9rie compl\xe8te avec contr\xf4le de l'int\xe9grit\xe9 des donn\xe9es, un support temps r\xe9el, des taux de transmission allant jusqu'\xe0 1 Mb/s, ainsi qu'une capacit\xe9 d'adressage \xe0 11 bits et de d\xe9tection d'erreurs.\nDans les imprimantes 3D, le bus CAN est utilis\xe9 pour r\xe9duire le nombre de fils n\xe9cessaires pour connecter la t\xeate d'impression \xe0 la carte m\xe8re. Alors que cela n\xe9cessitait auparavant une douzaine de fils, l'utilisation du CAN permet de n'utiliser que quatre fils, r\xe9duisant consid\xe9rablement le nombre de fils et facilitant la mise en place.\nCe chapitre ne couvre que bri\xe8vement l'utilisation du pontage CAN."}),"\n",(0,s.jsx)(n.h2,{id:"utilisation-du-pont-can-avec-la-carte-m\xe8re",children:"Utilisation du pont CAN avec la carte m\xe8re"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Veuillez noter que les fils d'alimentation du pont ne sont pas branch\xe9s sur le port CAN, mais sur la ligne d'alimentation 12V-24V"}),"\n",(0,s.jsx)(n.li,{children:"Veuillez noter que la r\xe9sistance de 120\u03A9 doit \xeatre branch\xe9e"}),"\n"]}),"\n",(0,s.jsx)(r,{image:i(20200).Z,size:"80%",align:"center"}),"\n",(0,s.jsx)(n.h2,{id:"mise-\xe0-jour-du-firmware-de-la-carte-m\xe8re",children:"Mise \xe0 jour du firmware de la carte m\xe8re"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Assurez-vous que le firmware br\xfbl\xe9 sur la carte m\xe8re D5 est configur\xe9 pour le "Pont USB-CAN"'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"recherche-didentifiant",children:"Recherche d'identifiant"}),"\n",(0,s.jsx)(a.ZP,{})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},18377:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/6177-1c73cdd0d9f211a723e9cfe826ffc5c4.webp"},16488:function(e,n,i){i.d(n,{Z:function(){return r}});let r="data:image/webp;base64,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"},43412:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/fluidd-cfg-852485b665e4c2b86aaf45ae4b133d7d.webp"},27496:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/usb-id-d430e6018bea26720d0ecb34dff8d9ed.webp"},20200:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/d5_canbridge-127daf266bdd22674e8030117e05b794.webp"},94551:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return a}});var r=i(39546);let s={},t=r.createContext(s);function a(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);