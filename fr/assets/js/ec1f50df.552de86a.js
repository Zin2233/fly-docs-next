"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["69094"],{1869:function(e,n,r){r.d(n,{ZP:function(){return t},d$:function(){return l}});var i=r(52676),s=r(79938);let l=[{value:"Configuration CAN et Recherche d&#39;ID",id:"configuration-can-et-recherche-did",level:2},{value:"Remarques avant la recherche d&#39;appareils",id:"remarques-avant-la-recherche-dappareils",level:3},{value:"Recherche d&#39;appareils",id:"recherche-dappareils",level:3},{value:"Recherche de l&#39;ID CAN",id:"recherche-de-lid-can",level:3},{value:"Ensemble des probl\xe8mes li\xe9s \xe0 CAN",id:"ensemble-des-probl\xe8mes-li\xe9s-\xe0-can",level:3},{value:"Remplissez l&#39;ID CAN dans la configuration",id:"remplissez-lid-can-dans-la-configuration",level:3}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Button:l,ImageView:a}=n;return!l&&c("Button",!0),!a&&c("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"configuration-can-et-recherche-did",children:"Configuration CAN et Recherche d'ID"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si vous avez besoin d'utiliser CAN, assurez-vous que votre ordinateur de contr\xf4le a \xe9t\xe9 configur\xe9 pour CAN."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,i.jsx)(n.p,{children:"Assurez-vous que la carte m\xe8re est correctement connect\xe9e \xe0 l'ordinateur de contr\xf4le avant de proc\xe9der aux op\xe9rations suivantes."})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Assurez-vous que le r\xe9seau CAN de l'ordinateur de contr\xf4le, la vitesse CAN de la carte m\xe8re ponteuse et la vitesse CAN de la carte outil sont enti\xe8rement coh\xe9rentes."})}),"\n",(0,i.jsx)(n.h3,{id:"remarques-avant-la-recherche-dappareils",children:"Remarques avant la recherche d'appareils"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Avant de rechercher l'ID CAN, veuillez ",(0,i.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"cliquez pour acc\xe9der",children:"vous connecter \xe0 SSH"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Veuillez noter qu'il faut vous assurer d'\xeatre connect\xe9 \xe0 SSH via le r\xe9seau et non par port s\xe9rie."}),"\n",(0,i.jsx)(n.li,{children:"Assurez-vous d'avoir correctement connect\xe9 la carte UTOC ou une carte m\xe8re avec le firmware CAN bridge flash\xe9, et assurez-vous que le c\xe2ble de connexion \xe0 l'ordinateur de contr\xf4le poss\xe8de la fonction de transmission de donn\xe9es."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"recherche-dappareils",children:"Recherche d'appareils"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Maintenant que vous \xeates connect\xe9 normalement \xe0 l'ordinateur de contr\xf4le, vous pouvez entrer ",(0,i.jsx)(n.code,{children:"lsusb"})," pour rechercher des appareils. Il y aura l'une des situations suivantes :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si vous entrez ",(0,i.jsx)(n.code,{children:"lsusb"})," et que cela indique que la commande ",(0,i.jsx)(n.code,{children:"ls"})," n'est pas trouv\xe9e, vous pouvez entrer la commande ci-dessous pour installer la commande :","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Si vous entrez ",(0,i.jsx)(n.code,{children:"lsusb"})," et qu'il ne se passe rien, c'est un probl\xe8me syst\xe8me auquel nous ne pouvons rien faire. Vous devez changer de syst\xe8me ou utiliser un syst\xe8me qui fonctionne correctement."]}),"\n",(0,i.jsxs)(n.li,{children:["Si vous obtenez les informations contenues dans l'image ci-dessous, veuillez noter que cela n'est qu'une r\xe9f\xe9rence. Vous n'avez besoin de vous assurer que ",(0,i.jsx)(n.code,{children:"1d50:606f"})," appara\xeet.","\n",(0,i.jsx)(a,{image:r(55811).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1d50:606f"})," appartient \xe0 l'appareil que vous utiliserez cette fois-ci. Les indications suivantes ne sont pas importantes car les probl\xe8mes du syst\xe8me peuvent entra\xeener une affichage incomplet ou m\xeame aucune affichage."]}),"\n",(0,i.jsxs)(n.li,{children:["Si plusieurs ",(0,i.jsx)(n.code,{children:"1d50:606f"})," apparaissent, il est recommand\xe9 d'en exclure une, sinon cela affectera la gravure ult\xe9rieure et la connexion du firmware. Par exemple, si vous utilisez le ",(0,i.jsx)(n.code,{children:"FLY MINI PAD"}),", il est recommand\xe9 d'utiliser le UTOC int\xe9gr\xe9 plut\xf4t que d'autres p\xe9riph\xe9riques de pontage CAN."]}),"\n",(0,i.jsx)(n.li,{children:"Si aucun appareil n'appara\xeet, veuillez v\xe9rifier si les c\xe2bles de donn\xe9es sont correctement connect\xe9s et si le firmware a \xe9t\xe9 correctement flash\xe9."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Remarques",type:"warning",children:(0,i.jsxs)(n.p,{children:["Vous ne pouvez rechercher l'ID CAN qu'apr\xe8s avoir trouv\xe9 ",(0,i.jsx)(n.code,{children:"1d50:606f"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"recherche-de-lid-can",children:"Recherche de l'ID CAN"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Entrez la commande ci-dessous pour rechercher l'ID :"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si un ID appara\xeet et que la derni\xe8re partie ",(0,i.jsx)(n.code,{children:"Application:"})," indique ",(0,i.jsx)(n.code,{children:"Klipper"}),", cela signifie que cet ID peut \xeatre utilis\xe9 directement."]}),"\n",(0,i.jsxs)(n.li,{children:["Si un ID appara\xeet et que la derni\xe8re partie ",(0,i.jsx)(n.code,{children:"Application:"})," indique ",(0,i.jsx)(n.code,{children:"CANBOOT"})," ou ",(0,i.jsx)(n.code,{children:"Katapult"}),", cela signifie que vous devez graver le firmware pour pouvoir l'utiliser.","\n",(0,i.jsx)(a,{image:r(54915).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ensemble-des-probl\xe8mes-li\xe9s-\xe0-can",children:"Ensemble des probl\xe8mes li\xe9s \xe0 CAN"}),"\n",(0,i.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si vous ne trouvez pas l'ID CAN, consultez le document ci-dessous."}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(l,{variant:"contained",disableElevation:!0,href:"/docs/DebugDoc/faq/klipper_can",children:"Ensemble des probl\xe8mes li\xe9s \xe0 CAN"}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"remplissez-lid-can-dans-la-configuration",children:"Remplissez l'ID CAN dans la configuration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ouvrez l'interface Web de l'imprimante, dans le menu lat\xe9ral gauche, trouvez l'option de configuration : fluidd est ",(0,i.jsx)(n.code,{children:"{\u2026}"})," ; mainsail est ",(0,i.jsx)(n.code,{children:"machine"}),", cliquez dessus pour acc\xe9der \xe0 ",(0,i.jsx)(n.code,{children:"printer.cfg"}),"."]}),"\n",(0,i.jsx)(a,{image:r(43412).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copiez l'UUID que vous avez trouv\xe9 et collez-le dans la configuration ",(0,i.jsx)(n.code,{children:"printer.cfg"})," \xe0 la section ",(0,i.jsx)(n.code,{children:"[mcu]"})," sous ",(0,i.jsx)(n.code,{children:"canbus_uuid:"}),". En sauvegardant et en red\xe9marrant, vous pourrez connecter la carte m\xe8re. Si Klipper indique qu'un mise \xe0 jour du firmware est n\xe9cessaire, une erreur ADC, etc., cela signifie que Klipper s'est connect\xe9 \xe0 la carte m\xe8re."]}),"\n",(0,i.jsx)(a,{image:r(54915).Z,size:"50%",align:"left"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"Notez : Tous les ID mentionn\xe9s dans ce document sont des exemples. L'ID de chaque carte m\xe8re est diff\xe9rente. Modifiez et remplissez en fonction de l'ID r\xe9ellement obtenue."})}),"\n"]}),"\n"]})]})}function t(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function c(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},20546:function(e,n,r){r.d(n,{ZP:function(){return t},d$:function(){return l}});var i=r(52676),s=r(79938);let l=[{value:"Pr\xe9cautions avant de rechercher un p\xe9riph\xe9rique",id:"pr\xe9cautions-avant-de-rechercher-un-p\xe9riph\xe9rique",level:2},{value:"Pr\xe9cautions lors de la recherche de p\xe9riph\xe9riques",id:"pr\xe9cautions-lors-de-la-recherche-de-p\xe9riph\xe9riques",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{ImageView:l}=n;return!l&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"pr\xe9cautions-avant-de-rechercher-un-p\xe9riph\xe9rique",children:"Pr\xe9cautions avant de rechercher un p\xe9riph\xe9rique"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Avant de commencer \xe0 obtenir l'ID, veuillez d'abord ",(0,i.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"cliquez pour sauter",children:"vous connecter via SSH"})]}),"\n",(0,i.jsx)(n.li,{children:"Assurez-vous que le c\xe2ble de connexion du p\xe9riph\xe9rique inf\xe9rieur au p\xe9riph\xe9rique sup\xe9rieur a la fonction de transmission de donn\xe9es"}),"\n",(0,i.jsxs)(n.li,{children:["Connectez-vous via SSH au p\xe9riph\xe9rique sup\xe9rieur et entrez ",(0,i.jsx)(n.code,{children:"lsusb"})," puis appuyez sur Entr\xe9e, plusieurs p\xe9riph\xe9riques peuvent appara\xeetre"]}),"\n",(0,i.jsxs)(n.li,{children:["Si le syst\xe8me ne prend pas en charge ",(0,i.jsx)(n.code,{children:"lsusb"}),", vous pouvez ex\xe9cuter la commande ci-dessous pour l'installer"]}),"\n",(0,i.jsxs)(n.li,{children:["Si aucun p\xe9riph\xe9rique n'appara\xeet apr\xe8s ",(0,i.jsx)(n.code,{children:"lsusb"}),", changez de p\xe9riph\xe9rique sup\xe9rieur !"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo apt-get install usbutils\n"})}),"\n",(0,i.jsx)(l,{image:r(66810).Z,size:"100%",align:"left"}),"\n",(0,i.jsx)(l,{image:r(68133).Z,size:"100%",align:"left"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"V\xe9rifiez si la carte m\xe8re est correctement flash\xe9e avec le firmware appropri\xe9"}),"\n",(0,i.jsxs)(n.li,{children:["Si c'est un firmware USB, ",(0,i.jsx)(n.code,{children:"lsusb"})," devrait afficher ",(0,i.jsx)(n.code,{children:"1d50:614e"})]}),"\n",(0,i.jsxs)(n.li,{children:["Si c'est un firmware de pont USB-CAN, ",(0,i.jsx)(n.code,{children:"lsusb"})," devrait afficher ",(0,i.jsx)(n.code,{children:"1d50:606f"})]}),"\n",(0,i.jsxs)(n.li,{children:["Si c'est un firmware RS232, il faut utiliser UTOR ou G2T, o\xf9 G2T n'a pas besoin de rechercher de firmware, tandis qu'UTOR devrait afficher ",(0,i.jsx)(n.code,{children:"1a86:7523"})," apr\xe8s ",(0,i.jsx)(n.code,{children:"lsusb"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"pr\xe9cautions-lors-de-la-recherche-de-p\xe9riph\xe9riques",children:"Pr\xe9cautions lors de la recherche de p\xe9riph\xe9riques"}),"\n",(0,i.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,i.jsx)(n.p,{children:"Les commandes de recherche d'ID ne peuvent pas \xeatre m\xe9lang\xe9es !!!"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Notez que le firmware USB ne peut \xeatre recherch\xe9 que par l'ID USB"}),"\n",(0,i.jsx)(n.li,{children:"Notez que le firmware de pont USB-CAN ne peut \xeatre recherch\xe9 que par l'ID CAN"}),"\n",(0,i.jsx)(n.li,{children:"Notez que le firmware RS232 ne peut \xeatre recherch\xe9 que par l'ID RS232"}),"\n",(0,i.jsxs)(n.li,{children:["Si ",(0,i.jsx)(n.code,{children:"0483:df11"})," appara\xeet, cela pourrait signifier que le firmware a \xe9t\xe9 flash\xe9 mais que la carte m\xe8re n'a pas \xe9t\xe9 red\xe9marr\xe9e, si elle ne change pas apr\xe8s avoir red\xe9marr\xe9 la carte m\xe8re, v\xe9rifiez si les DFU (jumper/dip-switch/bouton) sont d\xe9connect\xe9s"]}),"\n",(0,i.jsxs)(n.li,{children:["Si ",(0,i.jsx)(n.code,{children:"2e8a:0003"})," appara\xeet, cela pourrait signifier que le mauvais firmware a \xe9t\xe9 flash\xe9, notez que RP2040 ne peut \xeatre flash\xe9 que par le firmware UF2 compil\xe9, aucun autre firmware ne peut \xeatre flash\xe9. Apr\xe8s l'apparition de ",(0,i.jsx)(n.code,{children:"2e8a:0003"}),", d\xe9connectez BOOT (jumper/dip-switch/bouton) sinon la programmation \xe9chouera !!!"]}),"\n",(0,i.jsxs)(n.li,{children:["Le firmware UF2 de RP2040 est compil\xe9 uniquement lorsque ",(0,i.jsx)(n.code,{children:"No bootloader"})," est s\xe9lectionn\xe9 lors de la compilation"]}),"\n"]})]})}function t(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},91230:function(e,n,r){r.d(n,{ZP:function(){return t},d$:function(){return l}});var i=r(52676),s=r(79938);let l=[{value:"Recherche de tutoriels USB",id:"recherche-de-tutoriels-usb",level:2},{value:"Remarques avant la recherche du p\xe9riph\xe9rique",id:"remarques-avant-la-recherche-du-p\xe9riph\xe9rique",level:2},{value:"Recherche de p\xe9riph\xe9riques",id:"recherche-de-p\xe9riph\xe9riques",level:2},{value:"Recherche de l&#39;ID USB",id:"recherche-de-lid-usb",level:2},{value:"Inscription de l&#39;ID USB dans la configuration",id:"inscription-de-lid-usb-dans-la-configuration",level:3}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{ImageView:l}=n;return!l&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"recherche-de-tutoriels-usb",children:"Recherche de tutoriels USB"}),"\n",(0,i.jsx)(n.h2,{id:"remarques-avant-la-recherche-du-p\xe9riph\xe9rique",children:"Remarques avant la recherche du p\xe9riph\xe9rique"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Avant de rechercher l'ID USB, veuillez vous ",(0,i.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"cliquez pour acc\xe9der",children:"connecter \xe0 SSH"})]}),"\n",(0,i.jsx)(n.li,{children:"Veuillez noter qu'il est n\xe9cessaire d'\xeatre connect\xe9 \xe0 SSH via le r\xe9seau et non via un port s\xe9rie"}),"\n",(0,i.jsx)(n.li,{children:"Assurez-vous que la carte m\xe8re avec le firmware USB est correctement connect\xe9e et que le c\xe2ble de donn\xe9es reliant la station sup\xe9rieure au mat\xe9riel a la fonction de transmission de donn\xe9es"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"recherche-de-p\xe9riph\xe9riques",children:"Recherche de p\xe9riph\xe9riques"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Assurez-vous que la station sup\xe9rieure est correctement connect\xe9e \xe0 Internet et que le c\xe2ble de donn\xe9es reliant la station sup\xe9rieure au mat\xe9riel a la fonction de transmission de donn\xe9es."}),"\n",(0,i.jsxs)(n.li,{children:["Connectez-vous \xe0 SSH sur la station sup\xe9rieure et entrez ",(0,i.jsx)(n.code,{children:"lsusb"})," puis appuyez sur Entr\xe9e. Si des informations entour\xe9es dans l'image ci-dessous sont affich\xe9es, vous pouvez passer \xe0 l'\xe9tape suivante.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si aucune information n'est renvoy\xe9e, il s'agit d'un probl\xe8me de syst\xe8me de la station sup\xe9rieure. Nous ne pouvons rien faire de plus, vous devrez changer pour un syst\xe8me confirm\xe9 comme \xe9tant normal ou changer la station sup\xe9rieure."}),"\n",(0,i.jsxs)(n.li,{children:["Si le message indique qu'il n'y a pas de commande ",(0,i.jsx)(n.code,{children:"lsusb"}),", vous pouvez ex\xe9cuter cette commande pour l'installer :","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n",(0,i.jsx)(l,{image:r(18377).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1d50:6177"})," appartient \xe0 l'appareil que vous utiliserez cette fois-ci. Le suffixe ",(0,i.jsx)(n.code,{children:"OpenMoko, Inc. stm32f407xx"})," peut \xeatre utile \xe0 titre indicatif, mais ne doit pas servir de crit\xe8re de jugement.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Certaines stations sup\xe9rieures peuvent afficher des informations incompl\xe8tes ou ne rien afficher en raison de probl\xe8mes de syst\xe8me."}),"\n",(0,i.jsxs)(n.li,{children:["Si vous entrez la commande ",(0,i.jsx)(n.code,{children:"lsusb"})," et que l'appareil est visible, mais que ",(0,i.jsx)(n.code,{children:"1d50:6177"})," n'est pas pr\xe9sent, essayez de changer de c\xe2ble de donn\xe9es et de connecter la carte m\xe8re \xe0 un autre port USB de la station sup\xe9rieure."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Si vous avez d\xe9j\xe0 effectu\xe9 les \xe9tapes ci-dessus et que vous avez r\xe9ussi \xe0 flasher le firmware Klipper, et que la carte m\xe8re fonctionne normalement, et que vous souhaitez simplement mettre \xe0 jour le firmware Klipper, veuillez consulter la section ",(0,i.jsx)(n.code,{children:"Mise \xe0 jour du firmware"})," du menu de droite de cette page."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Remarque",type:"warning",children:(0,i.jsxs)(n.p,{children:["Vous devez avoir trouv\xe9 l'appareil ",(0,i.jsx)(n.code,{children:"1d50:6177"})," avant de pouvoir passer \xe0 l'\xe9tape suivante."]})}),"\n",(0,i.jsx)(n.h2,{id:"recherche-de-lid-usb",children:"Recherche de l'ID USB"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ls /dev/serial/by-id/*\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Entrez la commande ci-dessous et appuyez sur Entr\xe9e. Si tout se passe bien, une ligne d'ID bleue appara\xeetra. (L'exemple ci-dessous est donn\xe9 \xe0 titre indicatif)"}),"\n"]}),"\n",(0,i.jsx)(l,{image:r(27496).Z,size:"80%",align:"left"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si aucune ID n'appara\xeet apr\xe8s l'entr\xe9e de la commande ci-dessous, mais que ",(0,i.jsx)(n.code,{children:"lsusb"})," montre un appareil, veuillez changer de station sup\xe9rieure ou de syst\xe8me de la station sup\xe9rieure"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Remarque",type:"warning",children:(0,i.jsx)(n.p,{children:"Si plusieurs ID apparaissent, choisissez l'ID correspondant au mod\xe8le de MCU de votre carte m\xe8re."})}),"\n",(0,i.jsx)(n.h3,{id:"inscription-de-lid-usb-dans-la-configuration",children:"Inscription de l'ID USB dans la configuration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ouvrez l'interface web de l'imprimante, trouvez ",(0,i.jsx)(n.code,{children:"printer.cfg"})," dans l'option de configuration du panneau lat\xe9ral gauche : fluidd est ",(0,i.jsx)(n.code,{children:"{\u2026}"})," ; mainsail est ",(0,i.jsx)(n.code,{children:"machine"}),", cliquez dessus pour y acc\xe9der."]}),"\n",(0,i.jsx)(l,{image:r(43412).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copiez l'ID bleu et collez-le dans le champ ",(0,i.jsx)(n.code,{children:"serial:"})," du n\u0153ud ",(0,i.jsx)(n.code,{children:"[mcu]"})," de la configuration ",(0,i.jsx)(n.code,{children:"printer.cfg"}),". Enregistrez et red\xe9marrez pour vous connecter \xe0 la carte m\xe8re. Si Klipper affiche ",(0,i.jsx)(n.code,{children:"ADC out of range"}),", c'est un ph\xe9nom\xe8ne normal. Branchez correctement le lit chauffant et le thermocouple, configurez les broches thermiques et les broches de sortie du hot-end et du lit, puis enregistrez et red\xe9marrez."]}),"\n",(0,i.jsx)(l,{image:r(16488).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"Attention : tous les ID mentionn\xe9s dans le document sont des exemples. Chaque carte m\xe8re a un ID unique. Veuillez modifier et remplir en fonction de l'ID r\xe9ellement obtenu."})})]})}function t(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},77131:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>u,frontMatter:()=>c});var i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/read-id","title":"Lecture et v\xe9rification de l\'ID de la carte m\xe8re","description":"","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/read-id.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl","slug":"/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/read-id","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/read-id","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/read-id.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Lecture et v\xe9rification de l\'ID de la carte m\xe8re"},"sidebar":"tutorialSidebar","previous":{"title":"Flashage du firmware","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/flash"},"next":{"title":"\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-adxl/cfg"}}'),s=r("52676"),l=r("79938"),a=r("20546"),t=r("91230");r("1869");let c={sidebar_position:3,sidebar_label:"Lecture et v\xe9rification de l'ID de la carte m\xe8re"},d="Lecture et v\xe9rification de l'ID de la carte m\xe8re",o={},u=[...a.d$,...t.d$];function p(e){let n={h1:"h1",header:"header",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"lecture-et-v\xe9rification-de-lid-de-la-carte-m\xe8re",children:"Lecture et v\xe9rification de l'ID de la carte m\xe8re"})}),"\n",(0,s.jsx)(a.ZP,{}),"\n",(0,s.jsx)(t.ZP,{})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},55811:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/606f-ba58e29a9188142cd34019862e0c85e2.webp"},18377:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/6177-1c73cdd0d9f211a723e9cfe826ffc5c4.webp"},54915:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/canbus-uuid-7117b665e00888c3c8163973d8c29b10.webp"},16488:function(e,n,r){r.d(n,{Z:function(){return i}});let i="data:image/webp;base64,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"},43412:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/fluidd-cfg-852485b665e4c2b86aaf45ae4b133d7d.webp"},66810:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/lsusb-8766c7f9dcf053b698a4632d72b41c64.webp"},68133:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/rs232-d4cf58af4e95e81843518d194bda7c92.webp"},27496:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/usb-id-d430e6018bea26720d0ecb34dff8d9ed.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return a}});var i=r(75271);let s={},l=i.createContext(s);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);