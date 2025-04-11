"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["19189"],{92180:function(e,r,n){n.d(r,{ZP:function(){return l},d$:function(){return s}});var i=n(85893),t=n(50065);let s=[{value:"Remarques",id:"remarques",level:3},{value:"Liens de t\xe9l\xe9chargement du syst\xe8me pr\xe9install\xe9 TFTV2 pour Raspberry Pi",id:"liens-de-t\xe9l\xe9chargement-du-syst\xe8me-pr\xe9install\xe9-tftv2-pour-raspberry-pi",level:2},{value:"T\xe9l\xe9chargement de l&#39;image",id:"t\xe9l\xe9chargement-de-limage",level:2},{value:"T\xe9l\xe9chargement de rpiboot (programme de d\xe9marrage)",id:"t\xe9l\xe9chargement-de-rpiboot-programme-de-d\xe9marrage",level:2},{value:"Entrer en mode de gravure",id:"entrer-en-mode-de-gravure",level:2},{value:"Formater la carte EMMC ou SD",id:"formater-la-carte-emmc-ou-sd",level:2},{value:"\xc9criture de l&#39;image",id:"\xe9criture-de-limage",level:2},{value:"Fin de la gravure et red\xe9marrage",id:"fin-de-la-gravure-et-red\xe9marrage",level:2}];function a(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{ImageView:s}=r;return s||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h3,{id:"remarques",children:"Remarques"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Il est interdit de brancher ou de d\xe9brancher tout appareil autre que l'USB lorsque celui-ci est aliment\xe9."}),"\n",(0,i.jsx)(r.li,{children:"L'interface Type C peut \xeatre utilis\xe9e pour l'alimentation ou comme interface USB SLAVE pour graver une image."}),"\n",(0,i.jsx)(r.li,{children:"Pour garantir une alimentation normale du CM4 lors de la gravure d'une image via l'interface Type C, ne connectez pas d'autres appareils."}),"\n",(0,i.jsx)(r.li,{children:"Le module n'est dot\xe9 d'aucune protection. Veuillez \xe9viter les courts-circuits."}),"\n",(0,i.jsx)(r.li,{children:"La carte m\xe8re FLY ne prend pas en charge la fonction POE ! Veuillez ne pas utiliser d'alimentation POE."}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{title:"\xc0 savoir",type:"danger",children:(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Attention : la version EMMC ne peut pas utiliser la carte SD."}),"\n",(0,i.jsx)(r.li,{children:"Attention : la version sans EMMC doit utiliser une carte MICRO SD pour le d\xe9marrage et n\xe9cessite un lecteur de cartes pour graver l'image."}),"\n",(0,i.jsxs)(r.li,{children:["Il est recommand\xe9 que la vitesse de transmission de la carte m\xe9moire TF soit de niveau ",(0,i.jsx)(r.code,{children:"class10"})," ou sup\xe9rieur. Il est conseill\xe9 d'utiliser des cartes TF de marque SanDisk par exemple."]}),"\n"]})}),"\n",(0,i.jsx)(s,{image:n(16414).Z,size:"100%",align:"left"}),"\n",(0,i.jsx)(r.h2,{id:"liens-de-t\xe9l\xe9chargement-du-syst\xe8me-pr\xe9install\xe9-tftv2-pour-raspberry-pi",children:"Liens de t\xe9l\xe9chargement du syst\xe8me pr\xe9install\xe9 TFTV2 pour Raspberry Pi"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Syst\xe8me d'image compatible avec Raspberry Pi 3B/3B+/4B/CM4/5B."}),"\n",(0,i.jsx)(r.li,{children:"Ce syst\xe8me pr\xe9installe klipper, moonraker, mainsail, fulidd, klipper-screen, etc."}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"https://cdn.mellow.klipper.cn/IMG/Beta/RPI-TFT-IMG-new.img.xz\n"})}),"\n",(0,i.jsx)(r.h2,{id:"t\xe9l\xe9chargement-de-limage",children:"T\xe9l\xe9chargement de l'image"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["T\xe9l\xe9chargez le syst\xe8me ",(0,i.jsx)(r.a,{href:"https://www.raspberrypi.org/downloads/raspberry-pi-os/",children:"cliquez ici pour t\xe9l\xe9charger"})," la derni\xe8re version publi\xe9e du syst\xe8me (ou comme indiqu\xe9 dans l'image ci-dessous)."]}),"\n",(0,i.jsx)(r.li,{children:"Si vous t\xe9l\xe9chargez un fichier torrent, utilisez un logiciel comme Thunder ou Com\xe9t pour le redescendre."}),"\n"]}),"\n",(0,i.jsx)(s,{image:n(62345).Z,size:"70%",align:"left"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["L'image contenant le bureau et les logiciels recommand\xe9s ",(0,i.jsx)(r.code,{children:"(Raspberry Pi OS with desktop and recommended software)"}),", il est conseill\xe9 d'utiliser cette image si la carte EMMC est de 16 Go ou plus, ou si la carte CM4 lite est de 16 Go ou plus."]}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{title:"\xc0 savoir",type:"danger",children:(0,i.jsx)(r.p,{children:"La version EMMC n\xe9cessite de basculer le commutateur en mode de gravure de l'image lorsqu'elle est d\xe9branch\xe9e. La version Lite peut simplement graver l'image sur la carte syst\xe8me."})}),"\n",(0,i.jsx)(r.admonition,{title:"\xc0 savoir",type:"danger",children:(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"La version EMMC n\xe9cessite d'entrer en mode de gravure pour acc\xe9der au syst\xe8me. Voici comment entrer en mode de gravure."}),"\n",(0,i.jsx)(r.li,{children:"La version Lite n'a pas besoin d'entrer en mode de gravure, elle peut simplement \xeatre format\xe9e puis graver."}),"\n"]})}),"\n",(0,i.jsx)(r.h2,{id:"t\xe9l\xe9chargement-de-rpiboot-programme-de-d\xe9marrage",children:"T\xe9l\xe9chargement de rpiboot (programme de d\xe9marrage)"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["T\xe9l\xe9chargez et ex\xe9cutez le logiciel rpiboot avec des privil\xe8ges d'administrateur ",(0,i.jsx)(r.a,{href:"https://files.waveshare.net/wiki/w/upload/f/f3/Rpiboot_setup.zip",children:"cliquez ici pour t\xe9l\xe9charger"})]}),"\n",(0,i.jsx)(r.li,{children:"Il sert \xe0 installer les pilotes et les outils de d\xe9marrage. Une fois install\xe9, il y a un fichier rpiboot.exe dans le r\xe9pertoire d'installation."}),"\n"]}),"\n",(0,i.jsx)(s,{image:n(96898).Z,size:"80%",align:"left"}),"\n",(0,i.jsx)(r.h2,{id:"entrer-en-mode-de-gravure",children:"Entrer en mode de gravure"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Connectez l'ordinateur et alimentez la carte m\xe8re. Dans le gestionnaire de p\xe9riph\xe9riques de l'ordinateur, un appareil BCMxxx sera d\xe9tect\xe9."}),"\n",(0,i.jsx)(s,{image:n(13330).Z,size:"80%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Ensuite, ex\xe9cutez rpiboot"}),"\n",(0,i.jsx)(s,{image:n(43296).Z,size:"80%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Attendez la fin de l'ex\xe9cution, un lecteur amovible appara\xeetra dans mon ordinateur."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{title:"\xc0 savoir",type:"danger",children:(0,i.jsx)(r.p,{children:"Attention : si l'ordinateur ne d\xe9tecte pas l'appareil BCMxxx, c'est probablement parce qu'une \xe9tape pr\xe9c\xe9dente est incorrecte. Il est n\xe9cessaire de d\xe9tecter l'appareil BCMxxx pour que l'ex\xe9cution de rpiboot soit efficace, sinon elle est inefficace."})}),"\n",(0,i.jsx)(r.h2,{id:"formater-la-carte-emmc-ou-sd",children:"Formater la carte EMMC ou SD"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Utilisez le logiciel SDFormatter.exe ",(0,i.jsx)(r.a,{href:"https://www.waveshare.net/w/upload/d/d7/Panasonic_SDFormatter.zip",children:"cliquez ici pour t\xe9l\xe9charger"})," pour formater la carte SD."]}),"\n",(0,i.jsx)(s,{image:n(70629).Z,size:"80%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Ou utilisez la gestion des disques int\xe9gr\xe9e \xe0 Windows pour supprimer les partitions. Apr\xe8s avoir supprim\xe9 les partitions, cr\xe9ez-en de nouvelles."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Faites un clic droit sur cet ordinateur -> G\xe9rer -> Gestion des disques -> Trouvez le nouveau lecteur (choisissez mal et c'est fichu) -> Supprimez toutes les partitions -> Cr\xe9ez une partition (n'importe quel syst\xe8me de fichiers). Si le syst\xe8me a \xe9t\xe9 grav\xe9 auparavant, il y aura deux lecteurs, ignorez-les et formatez ou supprimez simplement les partitions."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"\xe9criture-de-limage",children:"\xc9criture de l'image"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Utilisez Raspberry Pi Imager ",(0,i.jsx)(r.a,{href:"https://www.raspberrypi.com/software/",children:"cliquez ici pour t\xe9l\xe9charger"})," pour graver l'image."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Avant de graver, configurez le nom d'utilisateur et le mot de passe, ainsi que l'activation de SSH."}),"\n",(0,i.jsx)(s,{image:n(37947).Z,size:"80%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Une fois la gravure termin\xe9e, un lecteur amovible appara\xeetra dans mon ordinateur."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"fin-de-la-gravure-et-red\xe9marrage",children:"Fin de la gravure et red\xe9marrage"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Une fois la gravure termin\xe9e, d\xe9connectez l'alimentation, d\xe9connectez le c\xe2ble de connexion \xe0 l'ordinateur et remettez le commutateur BOOT \xe0 sa position initiale. Alimentez \xe0 nouveau pour d\xe9marrer."}),"\n"]})]})}function l(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},49896:function(e,r,n){n.r(r),n.d(r,{default:()=>p,frontMatter:()=>l,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-pro/fly-pro-x10/rpi","title":"Syst\xe8me de gravure pour Raspberry Pi CM4","description":"Pr\xe9sentation des configurations de commutation","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-pro/fly-pro-x10/rpi.mdx","sourceDirName":"ProductDoc/MainBoard/fly-pro/fly-pro-x10","slug":"/ProductDoc/MainBoard/fly-pro/fly-pro-x10/rpi","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-pro/fly-pro-x10/rpi","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-pro/fly-pro-x10/rpi.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Syst\xe8me de gravure pour Raspberry Pi CM4"},"sidebar":"tutorialSidebar","previous":{"title":"Pr\xe9sentation de la carte m\xe8re","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-pro/fly-pro-x10/"},"next":{"title":"Pro X10\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/fr/docs/category/pro-x10\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"}}'),t=n("85893"),s=n("50065"),a=n("92180");let l={sidebar_position:2,sidebar_label:"Syst\xe8me de gravure pour Raspberry Pi CM4"},o="Syst\xe8me de gravure pour Raspberry Pi CM4",d={},c=[{value:"Pr\xe9sentation des configurations de commutation",id:"pr\xe9sentation-des-configurations-de-commutation",level:2},...a.d$];function u(e){let r={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,s.a)(),...e.components},{ImageView:i}=r;return i||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"syst\xe8me-de-gravure-pour-raspberry-pi-cm4",children:"Syst\xe8me de gravure pour Raspberry Pi CM4"})}),"\n",(0,t.jsx)(r.h2,{id:"pr\xe9sentation-des-configurations-de-commutation",children:"Pr\xe9sentation des configurations de commutation"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Veuillez noter l'\xe9tat des configurations de commutation"}),"\n"]}),"\n",(0,t.jsx)(i,{image:n(33711).Z,size:"100%",align:"left"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Explications sur l'utilisation du slot carte SD"}),"\n"]}),"\n",(0,t.jsx)(i,{image:n(40273).Z,size:"100%",align:"left"}),"\n",(0,t.jsx)(a.ZP,{})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},13330:function(e,r,n){n.d(r,{Z:function(){return i}});let i="data:image/webp;base64,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"},96898:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/boot-30e786b88f2beb3c9ecbefc146030a15.webp"},16414:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/emmc-f57dca1bca02b69988e52630f6d2d0bc.webp"},37947:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/imager-2a6d8702dd8045f4ce65fa9c09b242ee.webp"},62345:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/rpi-a8e30ec0e4b76e25c4c5b15ca0720fdd.webp"},43296:function(e,r,n){n.d(r,{Z:function(){return i}});let i="data:image/webp;base64,UklGRoomAABXRUJQVlA4IH4mAADwdQCdASpNAeEAPm0ylUgkIqIhJbJaaIANiWlu4XKRHx4RWaq87o9AH/quRvQjepFz6fsU/5bJGPBn8v/i36md8H9F/jP9t/uP8n/9Prb3vO+v6J+z38x9XT9F/NLr+9Rr5F9Qfr39K/nn/J/tX7x/ZD8Z/k32P+ivvF/gP5T/JfcF/Hf4f/V/6N/SP+z/YvRX/Xv4B+1/gxY9/P/8t/Q/YC9hvhf96/iv/h/9H958zv8g/JT9///P9AfiX8j/2/8q/D77AP6L/EP73/IP+1/1v7Z/////9Wfxz/oeKL84/sv69fAD/Fv5p/gv8R/gf+L/dv///+/wt/If8T/Zf9B/6/8t/////8Gvx7+cf8f+wf4P9qfsD/kP8d/yX9w/v3/w/w3////32r/+P2Vfrh7Ev6if63+p/vf/0SVNa7up2kUsYMY4F3mXxEjsKheSgzGgKlo5C/NueCLciGbT/jtudnQYlw9mXHlXg3k3ThpR/fFVsK4vtkGnlV1jIJnBsX0ifewmV/jsor+2dL6rWvTvfp2hxvQAlMiVNwP82LH7H9pFApV/ly8SjDXKmueAm6FsmP6WAQ+TcYInLZxWuHrPnY6iVtg+w7mJ8Cvti1m71SIn2EVYQut4aFpeZ473/70252c0T5L0lkrCcbkmVxjyx/sWOM8BzyFUpW6wHMTsgQb+7K9+0pbodK8X/Xa2VpkLRJ6JZPq+vxlD19GKFsH9ENEEo43GSv7HcCafx8i5L2fBm0/VwrXvN1cIieskkqoEf+tCxJzteG2ktKE4r57NTrpjWHTa+dh71853kmVKe4IjtOvbc7OvYoONydWrvlFsG0ArM7D+VoB6NHdLx2Zadhr2m0foslvmtuivfHkULLPy+s+EmuydhpcQauzrtu1Avrln/JT1ogxNwXG9Gg82moEfmRFT7VZUx9V7wykcRZj3vf6ROLRwjbjCkmL1VTOwjB2ENPfHD6mn4GUohwGkVFwZzZzrZtc5jIXPqNCwIch6pibJ0jAt58cuFQM/gqd2nANyN8GSRbIH5l724yhxcbiLcln8PDmOyUtrKp2dexsPspzt19GSozrzUYc2Z2cEogJByMI5VdBgtsFuKSmmRPwi1TWoutmN9/XBkI2K3aM9pf15AVVDcGrXl9gIdkPZ9TpCLOATvtA+tn5BFJ8WtBU8pbyGXIRM3QON47b7Cxm0U+d1Nf8zaf8dtzs69jbc7OvY23Ozr2Ntzs69jbc7OvY23Ozr2Ntzs69jbc7OvY23Ozr2NtIAAP5AiVIj1ijT/u/mC04ApH3wQbH+C5whDdtAuFK9BV4Te8sGC4wkJQNRg+/f1OF19//nYWoeTY9BZksP+6YvaNIYVnHNsamZ6PcI/+oTOaoNx9+tCRDckLt7EvLRFy3vLV76gbfM6YUAXoIpWPYOpagfVsEa192xWlGoLQ5dLRxtS6fBsdqzzYcVhEMAF/vC7Xfuy1rtUt2JJw2taMU/keUJLE7Mgr9BG7dkr7thRezgIJQImEQmLmANhHaFbeoABR8vwRanvW1+FMDHG8D1unu5U+MwfhDRncsxNKmSXXqtMa9EJasAeah7nGpciBvyFICflc2xPpK+FqGb7yltJ8dkF30w6tXFxTQ/zzIVs74oY5+MkwDFLHOt9WA0S36ntMA27PFRUiUXNCGnhl5q/+wG5qPZRRU5RvtZEonLXKvZuztYOl6H+DxhGebe7nqBNE0Xa55wFZQBYNNhCXx13MPlgL8ZNFNruyTM85iVe/uvuRkWpWcODk9i1cLH46Xv79BtgQ5ntAW6hpzmZIk1yGxae/2UTPON4vs5UwbgJ2OMC1ShhP95bEVUywNE00DCrzdNALvH4s5B18pWBwfhAm3fE3u316QLk5noHaLLpXzSiU3aHfm//Nf9If7HfNCdhX2MS1mAoxRoIwvQ6Cor5oKEFjnMkE+7tx4SSDUzCt0bJt7FhMnKr4pQ+9V5TC2vvxDwUUPtjjfO0cBprHUOiCwTCCeaD6MJ0u5C9c8+lZjWYNPi+qbHJgR1yWgoi7zE7mdbTLTilpa6dOcusO6g+1LUEQjBFL9z/9hZ6Fx4quQI2g5CvwDy7/s6jJ6bCs0WT/QTOtoZ3pW88ZWe1TSO+cBAatOzvLZ5T4CeGemM5p/0rh23cjh3pWyji09f0MVR3O1eNz7fOjZvHKPUGlfKQCK8xGrFxWhfG4GDVooGGOkuJctmh6nBe0nG3Oo6DVCpzSAIzlVaSFM61Y8+MxhvtqH4KxXeIhEgDV+1ZBnFU70PdlSNKdkNTqnzbHSexsAnCdVfRppIhJ3ncmxLJpOK8UdfbSTqLUckiYDWl2tPIJtYnWkxojn+fxhFLRE+diBe9MZJw4eq1FY8L9I/ooe52kansM9K5/cIBKSN4yxqIvcrP7+Asuj+X7kKccVx4RLpoYi0sxVE+oKTJ+DXamTsM99P2ywuObC/NL+uHYA3yxwKYUnA+5M/gORe29ZNyjMuHRgqj6A3g+La18ddSZPwa7USZkOliJdqM6CPbjeief5zJAE6XbpF6j3gFKvf5WLgVj0sHNoYQIn31oVW/F61iKktH7UBaVA4FWG8oMybidmeJP3+CSX23KPXNruxi3hoUacWcBTQ3kzbOX+m2JxoMDyYzq6Za3HftHdiSVKlOlvQwuQ9FMrlAxaSlkJxVvwsxV9B1HrjaApv55g4SU5MT0yHuO9+t56lXZFK4y+SPuzINMjZkDWufwXtoD6YahLhuhOTrUfdALY+JmlzDbT+w9EsqWgBuIDDsiS1loLBgV0TTumlUez+o+OJHUJs92GuMB9+ZxxzpqIk9/XtnN7epH0eH9+Ohl0GKF0EOfg0Kb9AHkXWmPsfY3rdfKGt77DQwF9tGYMlMpiXmOnghQncixEJL2YhkrO/o/PYRWWAy2dULxsy2TR0dqqPsegwKyNZ3gJjrl/EuMUlixVbgNkY8Idoi88actUjDeG7vd8mjtoGnpqWTPxqsp9zjBs+t3xgO1hgpEfX/W8li9VHs8C9UZ7yORwToXArUzE9ojU/YI9xRLDCmYdatRbMexC4RAc4qr3jxN8j/WIDe1kyKgVDUBJWNkQY8+MUP9SWNzhQs5/1fas4M3q6BPlduMzn5q6p4bQ+rL6FTVQkdmvO8h7i3KpdsoIdlybXkINFOaejLTj7E273jwqpz7EJ1vwWeDl1T/7CjtjzdL9EY/aoBUr+ZNEG0EfGQrx23LNfJhDymkFs+k3TBpOKWpz7NQPzvaB/S0ewgZCmspFuwr69maShmGsEwlEpJAhj5ISrnYZOUk5BeL/OjL7Ko8qmsl8LCOvAbsEHqwKuBf0yz2D7IMYh2gkTuA+IHLcGNWQPpbceqtVXoY3/qCXCgQhJctL9UJBLOJpRYD62Y1EtP4YPk7+UdejppOehtfq/q4SDXin/T3xfpQdymhWOFM410Oqfzvd8tQDldbrXVCz+SownXCgXihBssy6bf2JyGgAuTOsVkQPGyiUnI1k/mdRLx+nqAoAT2QHdKIwoCK0Gw+OSN8dKop6wWMCfViP4Vyi2otSRHfM5YcLOslc9CP2VuYDoI6/vJhH5bxwvkg2hfPSF7qr6Q2pMxg8yqMmvCu2N24GrN384JDicTRuQOm5f3rTkHpLE8dv4LTKE0gb2M1OUrotOsVWCcNW3HDbd7quaOz7ahPj0LfG3VIZvQU0kmx5prchnJUHz6ccxVg5ARZEK+6yuP4hsckEsoxDRh4jH0H1p1egBtJPc9NGRXOC0tVT9OXLCuEnAkCxAOchBIA89ps6V/xyY5amJ84PR8JeYOD6oG3YCIPiJHkCg2GDgCdG5BHw+n9JXhTTB/0xq286T12fGOcD7TkmdoKXkl+MwT0TtKYtMY5Ngswpdb0nIKwtxhQIv2n5pCWV35Bl9p9zuSCO2IFoZGmseDvLxjfT+Q9oyf7+lO+mQEJWHOFaEgk5NCMI44j+FYydhZ6vWkHCTxZ6sKx0/2uwZBjMz2NKNLwjnfCvPyp3rWdU7aci1JMlar9/6/psZvu0L1tRDe7zyAHOelOOV/BcZ41G+PDQTBiJPnMBKND16XmQyuNo8gZ6FgJFif/XeYxT5SJye0ajKoJiiS36QY9v/qgOg++z7YqJ9TvL9rclnKtKWLnQuWeNUDlCyDYBJfCOZRwETJGQVqwGqNxM0lwepmwAXwj2iEKmrtGFbQm1jlyv/xvybZkK/Z/JvENKq0x/USECenHZs+JhhTqNTiFrtF+de4U67mnS1ojoGm1FyR1CbPdhsTtvyBiYdMabxIy2PIwHlBgmdrQYC13YWndXUrTx6Rbs618+hGoXvmtux++XgJ9VKQaMWWEuX1RMUIEvMQuAg5Sfpy2uLvBh0d2i32s16JbLO2D3tgLNkCM58s8jqddE2VScP4YVQB+V6uzrMQcuoUZabz5OoPti3euQovvNTYrUcqfIEqESoiwq3TAlQqDWiXj+mJ5n5xT+8Vmm5NW00keYpCGNJTYh2g3JvHKTUoWA/Fp1G0ruvyJyGA59mhq4zKQn+uVmKrhhtUNdTLchNwHsKAPPe98tMnsCE6HnLFDj/HcwO0cIZ3Ece/b6HZLsGFM4dlGArmBFFu+ipdKDe6pcb00ssH1DKLUjZt6jIMZYZEJGJt31VywyKLxclm853g1PO6po+zy3vg5mkTTs8b2PpZIUWs9WFY6ZdavXN5GqpIiq6/2t8xmyCHaOSH7/nxLUbX7q3LGdu4RYxgrHv6I8x8ZSDKLKFH57CaKHyvspHVgMECAk0mwfhOsm794veHjWbwxQ8KVN8ldA/DZ+CsPojkmmt3BFkOYAmccBrirQJma/2v5QioXVnzEjNCW0NNtmW9J4SH93Xjs2uGLKnQi2bemxHrR36OOnzZDULvIRkGKEyOHede93IkGkwzarz0yIS5jOVwsIVQ/usSGdoI9F25hwreQ3BpTEmE9CGjCGGzNe5IfsZ1703IS4Nm7rXF0l8xELBuxJ9TOQx3TpteRyjZBLdDk4wqas4EV1RCIOQbMdv+TJntxZ78wR0SD2sRjOM7gi5qmaGBWIztiJj9HWs1qzUjwaCiIzliOfQ2dEaUNH53UNaIWhhGa9KdfZGCH66EzwgRu9+hiou853OEi4G03pZnNmP3gvHGTGq/k/S8MT9HfZEBjtcMTVBqRdXZUpoJhqzHS8OfmWjOJgkjmNsBr97ttXl3qA1SlVv0laPw758C2aOT4a96yPeD5xEMF+fCm0nxiPTrWXyfuENpQjVPRkj45pgFMMj7hYg57URdpk4w2QDVEyMWfZXoDM9TnXP8eY20eeO+zWzSXD77TZWUOft8RfLHNo2Sd01z2rE5EKMedH1t0TSa8hInrNizOBIN3bcZrU3GsTaxkhPUzfMznbIC7DN52F/wnxtziaRT2bXLACxGoP8KW2x6CJrXrvqfA7+57jshxEuTtLu+QZRPtfS5Lj/ETfume9juKrgz04oOlnv+PhFaTyGH4pQQMQQmpdbZ59HYZ98vsmpYRpGpc+GYM8JMa7A6XB5Lad79GDxgmKRbxXWDauLsRNCdCPTJfASBvEl+NkGw9HgVRQVKColY0xPrNpdSx9X9DMHqMJ3IInayRh63qVuVFrCLEKKQII+dMMF3h+x1QMdy6AXNp8QWJ62+bGL7FfP9Wh/QLikkixSmgVrcKRXQ58NfCDZoaZTB9vSX9U8zIuMXdeh1PjvzDQwF9tGanLqROYMdPBChO5FiISXsv3SmUpzqWS4pgcCV/bb3ObEzBqwX3KvfqHd2hlCsS39nrc+lPlsUExwr7ePfkBvv7RwS0x1c7tfpdpa+PBbxU2kDSW0IQQHdI/fpvj5Vv4A92ebdG2VhxYpJmJh3Q2SftlBTzcof+bf4fzWmvQPdxP3sDlFvq8g5Ebp9sK6dJEcupUl22hajOqFn8lRhOkOE1L1ojXIiBSTqZOkE0do9izFsFti51Yv1AYWvFQQdWLLjicR/CwEfZSUKSfGk6FtDPmUcJGjijFnHDEaP+P+mEas4f6Dx7mVE5f/fke+k2Ry1nulm5on1pAICdYy+Y9a6DVPQpnHQTyVP9jbw7FV7sFJ3JwwJDFtMYUDaSg7G0QzPCH4bhSS2zu/oBKnFx/5uX7L/V2iDMqbYarvHiSVN4OvLnllrvNYAx18egZ7v/2kKrsCtuYXqhyGBZTiFSFkE1c7XOpNnvaXf/SxtRoLSg+HaFJc3gkhDRsmdZMZOLzuThKDtrmZFZtYID2Qzz5k6bP1ygoKnX0sUyg22hXRF38TKIWmuoDnwbxRSQso1HCpJ0LONGGwDy+v6Ktn8b3w/fR0xXhV4eQZR+vz2FHf8l/ziqPLKfUbr5TvsvRKb6nomAGGZy72HE3E4Q77WZHTYD+H4pX9NlMQFjM5b6oV3/Yk0AxqUnZrRje8UB0qENX/t3G0RfWhGcW2uKs87J45zCaRCJAX12sQemIix/Lz5S3Q7wDbHUBLZoiWNc+Oi0+uGwLp8xxy7cpDX8DpUPZ/Yln2dPsxCH0O/Lm6y2PElRy+nWXCtDaK/lmEPyVYN+QkmubD8WV7zNjXlxOSjjADncKjHLXHREkpg6ZBT6YXf4Zt5d/vnwLCtSgCChBbRGu1/ApePn+88Fl+6Fo/RoGsvDuWr2r8TARNXdMcF04kNZGNA2KdsFzORRcnzCJ7n7ya6rEv4Am4VVvJ24EAK1f69m6QsQBSlFQdVIL5zepKx/nYG0Zizv7aoeS8Sl6UJiyhPpYuqtdm8Ih7WMMAH5hMxBG3ySRz3LQxjP8d9RnNXx6Q12liOg3ohGHK7kAXKF24cAvNjqYKWIqhZDO23z+sgCZbx3wsoSl166s91cDd6zdPhKeUKJmz/676E7hc6J09dUOA5x1SmnvyEjTXstHEQcYfXLJ/4l2TXphMnlTpqw4vUonGJvWp94ci2ThzShOKpIrk1LzXzpNbvbo274hWD6DHrxPAmcPk+CpsfWLfTQZzYk1j54YAzEbkjR3Ew56r4hwBUVzHjN8/T2tOFWtHVTmswsmqD27yyCfw8dtwo8J3T8c/r0GBazgNHVNAlmTsTwYaVvvHbb5lI9tzvDfEWi0rhDFP0aryyv93vrDLwh6M1V5cR3C3dKpQg2qqIThPL6DfBTHGXfkfXP2IAlWsNz4abPlhy2lng1eGX5Z1YCSsbIgE7J585+7RiP1LTP1ZUUAQ6TTLtXAjVBmc/ABD/BH7Eook5GRbVBTRH37kCmke9EDdF4cg17sJ2wVHZFe33S9olYFtHC84kPlgbjWYFJ/OhiFFY9CNVggdiF4qnlSsPyZ7KCjL0B2xDW85Czy6czExLy6JtxJBl2DILoWRWT3tpfX7ZG8uJQ1gwsF/EU4kncv/sI6pMaFMleX860m6gnC1Dy1vEdJlBFDVciDX3m6FO9010kr+GgSFNt43D8nYVJF6W00DyPE0GZPRYAI62hcvlH4nxyphNXCUOcfkVOy5+kb8diLhd9EKgORmxaFXq7b3ToOb2DHgNPTGuJ/CGLFxTXQydeRxBgRBNMfZEp0isC0Efxn/tRjENUBBIybrbIbwAGwC+3EKTwI1gkSuHWNJIMA9rbFP+aFURVBsB5+XSQCHfZhoB5w5RmGMoe3RR1Qq7pqmmNLJTPXCehCZ3U3kVxjMSffPZcSoFtmtpPX+9WKbZPpV0599kxPNXaA3hR85sFKEI6BIKQXGiDWVCGaxZRaPI97vwquqW2L+xaLamC0F/aPGmdmSQm0BHHFNV9Cy9d4/5pGCzln4TJmtWQT8PAVxRMSUoDQkLTXG1biec+VOLMNkLvWvBEg7O3jEhijm92vyiDYO9vUxFZ+POgi1rH+3AUy30FuP+NSIS9yjCAY1+SyklEkOJH+6XTeROzUidD3n+lubAVHMoy7g7VyiHGQ/brORcuX5M4RNJHEyz8ipZyQa4njHlSObcQY6GtT6HF/47ozsHd+6JeckVqFWIq9h6RETnY5Hz0BaBUh3UQw/W2hQlyp3RcQh8Ccz/dJ66ci3mHiJlaOUweY8w5qvV8duP+SMEy7yvRaG489qYMWqp7YKaYRHgoK+Pwks3vIIi8UzFJAFumrYwAuGe/gcg4jI+GYxHy1gVsrqQXcupTPjDtv5OP5HhDsV1lHRNYsIqcvpMbIMwxZ3uP4BBtJBoVNmeSwZ3WUPnZjRUOG/AwEkGfF3uzUsuYS3bU9ktSnfr05WIqAKuBQa0okEvbg9moEFrl/ZF1h/ouKntcSKqCW/UbqaV6qtqxCjQZ3FJuYeVp5pZnbi9HYtN/itVM7fwig7Yj5MSp850P0yWQq+VH4getH4Wq+HfphnrkXStyzRDf6Rv34vTB81WZWRVamB5ieCfnECEsJy478TBMo9pbwQ7ahkijEgpDVY2T/MST0TQtCf9PRwIKUtMBDCWFmtDAX20ZmG/WAA/7Sj57SN4f3csiNqQ/fc4yQmZ18YhamAheMulGuNRDyB7eN/0IYSG20zaWfSBHaGRYfoBGDDjIxHnL/ZrTzSzO3F6hmKIiWIIdJHzRgKKcfVMQ8yuThJf6d1vqM/QGRDdBvrDXnXmj+f8wxROR30EHDz+8u09bTUo7FrcwI2MU4MHLr0QVSBJOmyP2tjuUi14AY4Yt7dY4CM+PpSoeztqmL4KVgwnfAbXH/pfL2UMdJbinHvr8+zSILHbIcWHUzLspByDjNnbSbqA24HvPZtKF67VWPnTzpBOsl91DiG8IGEkgAsTgHfDDNt0tavWgLl2aB0Arhh10MAXRpgIfdzYUDtKWT3A/EOC9ji8wxhNMdLQgG86WBZ9B8gcTM2NBbx3eZteK+KeR6yUg3NVsjAwocqB8pmLhdn2rJewjgv7J2iL9Mzhl3oLG+tp8Hj0TfNrhiyp0IuGEVUZH0uEk7lVKFIJJipyMHAgegSWHZpBzRGCPdOEYDosb8X0c4hlLDxSJH1yPNg8CQ6K9DfOCEGbxMbx2m8YPBFKfq/DFTM5dA11ACsk2gelnVok7abL9pC+jbXgArAfoOyd6XxmqkAVg1tqzM+shfPWe9EOAlqXt2lNkZIFDwy4yZeBbbca5HPhyTmsepv/OZ5e7zKE2PZeTMoACqPXz6VSljvksqxOdkq2GL2sfedG2uPamdqmx9UvH4xXz/WuDrBimI/599dxlLEBux2QG1uPyR/BhRaS4iEE06jaWxLrndBtDJo7Y1XKVkObpVJ/NGnDx8Fvnl8pzpSORW4O5s8lRUOmh3z5IM7b1T8p1LHXQKlwsFToAr6V6L58WzMSzPBbEvC0BVn8rmBhDgOPBnPX/teFmo41jprHv1HJYZ82zcHf+JatucApQw5fl7ul05VcgE0wf9LgE4tojjJ212Z21/Zscy0TGZl4ZCiw0FXPBLggPMhoWx8jAMpmbFObzRnOtDAExJbDFs2UYrQmb+giUBR6nDGNt/Oks1quqPX/IJ/MYiw54rBqHpldjAWGrUYcevVZO4gCBX/oUcR6uduI+lWG5eGSmuhq5gc3kgsY9ZJe4PdVSYBdt4XFD/+HYJTtRrFYNYh54QLoLlYQnTKD6CZSfEvGq6vHKuXb43uLUWB4m/IwoDCAl2AJdsDGH7kpXq9DCMuZoc83qGzZKf1kvtajTICuQDi+blzUcnrsNQ2QP84OEYZE1TfyUosAXqjimm0Sc9B8Cp1jcYkDPVXTv7qhP+o5wN+yfHb4CjzZhJZjmj+0a6n+71s7hqRu2wFT7vbPiTCFdk2UJjmDAWu7C0/7m5VMRY/s+k6OD/UmQLuhCrlFDHUanELXaL+9yYBeQCSiBCFCdyLEQkvZ+8K9oTFlCfZSH06nnsDsFgGWNHXq832NgcM4tf4diMAm/2aiIdf7VWxUy9iE+JUcdMxSaoc6hk4RXxk+IYIcBsHeuj7VXXV7ed8p0ugv0scNx0cgC/nU1XAasoTSDrZOCmeu7JVPeEUtESX3MAF+GMFeBD2XAjPfWKFm03tMY6KhPuSfYPvgGEApQxdvLcPf3RgMW3IWvI6XJcP6u3p3DHpa+WGI/nd4+hARIoXByjaQrdCoI5rqQhmepXpbYFS1t/9VDn/ckGbCfV1PQAygpy0L19f9iP6SzB9/C4IDMpbRuvohIb8/Lkh86RarZXTU4IM5XeWIC2IOYguJ77SWvEkGKnBtAcAcn+eNchoIIVVXHvZUu5ciMTwWduHMG6MkYzGY/JerM2fohbxdyvW//FfHXIveBoHhbpxxNJch3E0EZK9OgbgBSjTdL2Z5TsJvkNIOIyPhmMUCQme4NLMkg80U8qis9GsJkbMqcJ6k6xraIPGtpDMxIouUcarDYFub7GwOFue9pjHRUJ9ySsRhSfDb1UtjUpeFdvxd0Pt7Te5dR9YANtbv05LcUW27FGL3sii8UXGmb5m3iGsYweYqrf6N8e8gZjnORIUeNX3xW8Sz6O5/IL/HfIZatnG0FI0BT0Nvzgh00lltdleBKbJ2Q1oKhRR4+tl925m7uEs5AIfwTHVHkffRHeystdua2JOM48zJAWBEnIm5IyRbGlD3HwKbOb3LNBgILc/h454UAMZJ2GKYyo+jPiyD+J7gTsfBpVdy9zFmccgM38XVMaB5NYBVlcptuMfRodSnTaDN5NL7ftBSiMQjfl9FzbofBuRkLcecMs95u5Jg2/Ayhz1Vvb/j9cv5TdOc2rJr8d4zyOc5XdoNPGe3MQdQ7Rgvqnmy27FGL3sijFJ58lYGOPT17jp2tryKITEMRr5wINFsC/vWS5ffnmZJ9Jqc2d9Y35jRmPCx1pj8H/93BQpoEpVLxvDsV+TCY0jvSrDBge4Cl3j1YKDBxnH8F2XTZR6U5kLVDQPY+1t554UF+l6STS0q4jWwfhufPUqcuz4SU2yg1T0KZx0E8sCdhB3Uh1oO3Op6IScgE86hkmICTpv6+cFjN+POAZ6OUClkj1owtJ6scEGq1e/I9qY27rs0KFBT4HfNEjX3mtkmLvCoMGxdcRX83QAf2N4btBRb1b01hGt9v6r1cUdfsWQsHE+SB0h8YZ+6xDxls2M+zwnrwwej/ExhBrJ8JnhDZxD35VlIcP2F2uc4ySbhGJHpDs9s5Pk0PGhxyKvjhI5LlAM+hOJ/evCLtiv/BX3mC7sni/lsK/8fgbtMxe3xHdR7+k7QzmfcTviVEILyYWnJkVFKM0aPfApAChb3KUYbcoWOtCsdt6kTsUe5W0RI7ZkxxdS2gR2hj8YHbxfZAHdInPSKw9KFbB70QFk74MIZWTzQ+oTEEgAIjj3mZRZs+e5SL/dMJMZyQdy9mHYKj7r8SScN5lHR+6yLLRAZsjm5U4eroNwPJU8VOv/a8xnTz3PwYx2Wm25IxP2ysOLFJ+ppVVcNrlWyg1x8VpNLRnrjhXrxKRhC/mVkUGbti019A/RolfXg9Exnp5VfNeRz0t43GwPkocSbUhydAq1ussejtA9QaGYXTU5bz1RY/6/j325QBXFY/8ZE2hANGKOW8K+IbiCDVWGb8W39gVy83Er/7au/FMV67yIRSLkOqiyRKVQBKhGlTyridBgbDYthEx2ESWn8MHyd/Md5+2EGoKon6WE9TRdJUuny0xZARiakcI/Ain0f0ZNtgmfpqIplzJFTGDRrwv8i3DfiVC3kBcNAcYohss1XsZrpCy21vv3Gn5XkxF16rC0PjV+Cx3TYyFbXbegJr63zenCHJ28zb+LlhYB+cRJQoGkY+GBqXWZdC+QDrZio4F++ZGo4WPJDZam5403VfyJmaBNW2V1SNtBG4B6gXFuWiEebLXwPoGr7wbViIjfSm0BZV9R9N9KlyTw0V6eZSBgRzrXe662YaSlVtM0ZHfcIIKqO+ueT3jOwLUBIkSoeWu33Qr2h32RAY7XDE1P5e5QXCUwapy8ICQ9dXbuOmBvNf9urRegBVCnpU4vDofbwq853bIC7DN52F9DoYXhNws6Wj4mhaviFuPg0qu6+ZmaRiXcCdDw5gcRyN/x8hM9K1s3NjKk68aUSv8q+XIJ4m2c/GdrHPe9E3Cd6HQ7/h2CU7UaxWDWIeeEC6C5WEJuvV++j3nTwWq9/jnfbsYgcq9JV7MQ/wId4YntdS1NyFS9Ex6jyfceTMMjyxlsGo0GEYtU7sM1KXKF6up34hdp40tNv2GZeTDz8YsntfP1LMudpvhVFzxPV6nQQFitq5khUqahNnuw2J235AxMOmNN4kZbHkYDygwYUxZUrpzdSxU8A7Pg0Kb9AHe7wkLJU54Qq5RQx1GpxC12i/vcmAXkAkogQhQncixEJL2fvCvaExZQn1Kta3+6cDrdC6TwDKj4LSWy4pEmi66s/Xiv5CAQZT4C0NJlmiHxKjjpmKTVDVOsKo2DjCOFSFP8oWEOZzzQVKvYVYPRd4Yp3cKf7uChTQJSryRE3AhLiCNlwJ+/wCqfD93A0dpqbe2dfuS4LnLs7golD4E8boCznGiEX98Wv7FIbhLgSj4F8+YLLJSexjuIwwX367hZ6sPzItw+oxYBkkMo4Jm8MlRc2HZ8Pf8zxzyKpW315cSWd72IFqbqxJSNkhJdFY573om4TvQ6it8fmSTN5zoOJuBCXEEbLf51zCxzV97wu9l2CPFp0t3uZcpgB3117yoMHVDHRxS1XQNrJ26RevGQi0N2MlenQNwApMyWS8Wj4m795vppwxUWqE5LZqbEeFNvH3hSNFltfVW7c04ki3oynTs1r0CDw6c+sK1P6SOp10TZVJwscqMPOZoQ+BN3P7/70R5PIlnau6cXKR3MzavkmD4kWG2a8NSQ2FtuxRi97IoxzoGuW5M3ZOaTy96dvyao7SW7wwY2BdN2RlErhreJZ9Hc/kF/YrwvXf6h6tgPUKu0DISsLrw2OnMPnnFSs0PgRquyR8vdN8X7zXF0ztMrLXbodJcmxU5iWwtkPCAnznkgsGPTtgociGSAD4wpcP709jEZjJOwxTGVH0Z8WQ/m+UY7IY9ZJflSRhmrBiFENKB1zCxx6ySsL/jUq7Sq2RkHgWP38qgXsIBM57VaFPjNvtuuWIEJZvv6nVCv5PS3lnkdTromyqTh+/2xRi97IoxSefJWBjj09X5ubW15FEJiGI184EGi2Bfn1Yv6RvVjxZRLs8aLPMaMx4XXq3NDQ0xZiXUJkbH5KoTk+zSP8RtI5C8dcAEe8erARiYAAAAAAA=="},70629:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/sdformatter-dd0569bb3f8db34c5fbb6378e22b400f.webp"},33711:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/dialing_code-6a17555ed5c34826ca42146cc1af2825.webp"},40273:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/tf-1d2c719fd8be4fb12be18f13dfcf5bcd.webp"},50065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return a}});var i=n(67294);let t={},s=i.createContext(t);function a(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);