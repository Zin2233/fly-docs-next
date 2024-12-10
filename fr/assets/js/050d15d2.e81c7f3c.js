"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["33047"],{93567:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"ProductDoc/ExtensionBoard/bd-sensor/kliper","title":"Installation du **capteur BD**","description":"Connectez le c\xe2ble du capteur \xe0 la carte m\xe8re ou \xe0 la carte de t\xeate d\'outil CAN bus.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/bd-sensor/kliper.mdx","sourceDirName":"ProductDoc/ExtensionBoard/bd-sensor","slug":"/ProductDoc/ExtensionBoard/bd-sensor/kliper","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/bd-sensor/kliper","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/bd-sensor/kliper.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Utilisation de Klipper"},"sidebar":"tutorialSidebar","previous":{"title":"Guide d\'installation","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/bd-sensor/line"},"next":{"title":"Utilisation de Marlin","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/bd-sensor/marlin"}}'),i=s("52676"),t=s("79938");let l={sidebar_position:3,sidebar_label:"Utilisation de Klipper"},a="Installation du capteur BD",o={},c=[{value:"Connectez le c\xe2ble du capteur \xe0 la carte m\xe8re ou \xe0 la carte de t\xeate d&#39;outil CAN bus.",id:"connectez-le-c\xe2ble-du-capteur-\xe0-la-carte-m\xe8re-ou-\xe0-la-carte-de-t\xeate-doutil-can-bus",level:2},{value:"Installation du patch dans le firmware Klipper",id:"installation-du-patch-dans-le-firmware-klipper",level:2},{value:"Si votre imprimante fonctionne avec Moonraker, ajoutez la section suivante \xe0 moonraker.conf, puis vous pourrez mettre \xe0 jour le capteur BD d&#39;un simple clic via la page web ou l&#39;\xe9cran Klipper.",id:"si-votre-imprimante-fonctionne-avec-moonraker-ajoutez-la-section-suivante-\xe0-moonrakerconf-puis-vous-pourrez-mettre-\xe0-jour-le-capteur-bd-dun-simple-clic-via-la-page-web-ou-l\xe9cran-klipper",level:2},{value:"\xc9dition de printer.cfg",id:"\xe9dition-de-printercfg",level:2},{value:"Apr\xe8s l&#39;installation, v\xe9rifiez en envoyant les commandes G-Code suivantes",id:"apr\xe8s-linstallation-v\xe9rifiez-en-envoyant-les-commandes-g-code-suivantes",level:2},{value:"V\xe9rification de la connexion",id:"v\xe9rification-de-la-connexion",level:2},{value:"\xc9talonnage",id:"\xe9talonnage",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsxs)(n.h1,{id:"installation-du-capteur-bd",children:["Installation du ",(0,i.jsx)(n.strong,{children:"capteur BD"})]})}),"\n",(0,i.jsx)(n.h2,{id:"connectez-le-c\xe2ble-du-capteur-\xe0-la-carte-m\xe8re-ou-\xe0-la-carte-de-t\xeate-doutil-can-bus",children:"Connectez le c\xe2ble du capteur \xe0 la carte m\xe8re ou \xe0 la carte de t\xeate d'outil CAN bus."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Veuillez noter que le SB2040 ne peut pas utiliser le capteur BD"}),"\n",(0,i.jsx)(n.li,{children:"Veuillez noter que le SHT36 n\xe9cessite de connecter le CLK/SCL du capteur BD (entr\xe9e) \xe0 l'entr\xe9e \xe0 haute tension et de mettre en place le cavalier"}),"\n",(0,i.jsx)(n.li,{children:"Les lignes CKL et SDA du capteur BD peuvent \xeatre connect\xe9es \xe0 n'importe quelle broche GPIO de la carte. Vous pouvez \xe9galement connecter directement le c\xe2ble du capteur BD au port Bltouch, par exemple :"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"BLtouch    |    Capteur BD\n5V       --\x3e     5V\nGND      --\x3e     GND\nS        --\x3e     CLK/SCL    (Input)\nGND      --\x3e     GND\nZmin     --\x3e     SDA    (Input/Output) \n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"En raison du fait que certaines broches dans les connecteurs de la carte m\xe8re peuvent ne pas \xeatre directement connect\xe9es aux gpios de l'MCU (par exemple, elles peuvent avoir des condensateurs de filtrage ou \xeatre isol\xe9es par MOSFET, diodes ou coupleurs optiques, mais si elles sont isol\xe9es par des r\xe9sistances ou des r\xe9sistances pull-up/pull-down, elles peuvent \xeatre utilis\xe9es), elles ne peuvent pas \xeatre utilis\xe9es avec le capteur BD. Et le firmware signalera une erreur de connexion. Par exemple :"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Les connecteurs des ventilateurs et des chauffages sont isol\xe9s par MOSFET,"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Certains connecteurs des cartes utilis\xe9s pour les thermistances de temp\xe9rature et les fins de course/sondes sont g\xe9n\xe9ralement connect\xe9s \xe0 la masse via des condensateurs de filtrage,"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Comme illustr\xe9 ci-dessous, installez le capteur BD \xe0 proximit\xe9 de l'extr\xe9mit\xe9 chaude. ",(0,i.jsx)(n.a,{href:"https://www.thingiverse.com/thing:6098131",children:"STL de montage"}),", ",(0,i.jsx)(n.a,{href:"https://discord.com/channels/829828765512106054/1163237892957671424",children:"STL_montage_VzBot_Goliath court"})]}),"\n",(0,i.jsx)(r,{image:s(47663).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installation-du-patch-dans-le-firmware-klipper",children:"Installation du patch dans le firmware Klipper"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Abandonnez les fichiers Klipper modifi\xe9s pr\xe9c\xe9demment et mettez \xe0 jour Klipper"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd\ncd ~/klipper\ngit checkout .\ngit pull\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clonez le dernier code du capteur BD"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/markniu/Bed_Distance_sensor.git\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Installation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd  ~/Bed_Distance_sensor/klipper/\n./install_BDsensor.sh\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Compilation du firmware"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/\nmake menuconfig\nmake clean\nmake\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Flashez le firmware sur le MCU ou la carte de t\xeate d'outil CAN bus connect\xe9e au capteur BD"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"si-votre-imprimante-fonctionne-avec-moonraker-ajoutez-la-section-suivante-\xe0-moonrakerconf-puis-vous-pourrez-mettre-\xe0-jour-le-capteur-bd-dun-simple-clic-via-la-page-web-ou-l\xe9cran-klipper",children:"Si votre imprimante fonctionne avec Moonraker, ajoutez la section suivante \xe0 moonraker.conf, puis vous pourrez mettre \xe0 jour le capteur BD d'un simple clic via la page web ou l'\xe9cran Klipper."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[update_manager BDsensor]\ntype: git_repo\nprimary_branch: new\nchannel: dev\npath: ~/Bed_Distance_sensor\norigin: https://github.com/markniu/Bed_Distance_sensor.git\ninstall_script: ./klipper/install_BDsensor.sh\nis_system_service: False\nmanaged_services: klipper\ninfo_tags:\ndesc=Capteur de Distance de Lit\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\xe9dition-de-printercfg",children:"\xc9dition de printer.cfg"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copiez cette section dans votre ",(0,i.jsx)(n.strong,{children:"printer.cfg"})," et modifiez ",(0,i.jsx)(n.code,{children:"sda_pin"})," et ",(0,i.jsx)(n.code,{children:"scl_pin"})," de ",(0,i.jsx)(n.code,{children:"[BDsensor]"}),", et n'oubliez pas de d\xe9sactiver les autres sections de sondes comme ",(0,i.jsx)(n.strong,{children:"BLtouch"}),". Vous pouvez connecter le capteur BD \xe0 la carte m\xe8re ou au module CAN de la t\xeate d'outil,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Dans ",(0,i.jsx)(n.code,{children:"[BDsensor]"}),", modifiez ",(0,i.jsx)(n.code,{children:"speed"})," \xe0 0.8. Cela ne s'applique qu'aux commandes Z TILT et PROBE_ACCURACY. Plus la valeur est faible, plus la pr\xe9cision est \xe9lev\xe9e lors de la d\xe9tection, car le MCU ne lit pas le capteur BD en temps r\xe9el comme un interrupteur de fin de course. ",(0,i.jsx)(n.code,{children:"[BDsensor]"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Pour utiliser le capteur BD comme interrupteur de fin de course lors du retour \xe0 z\xe9ro de l'axe Z, changez ",(0,i.jsx)(n.code,{children:"endstop_pin"})," dans ",(0,i.jsx)(n.code,{children:"[stepper_z]"})," pour ",(0,i.jsx)(n.code,{children:"endstop_pin: probe:z_virtual_endstop"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Assurez-vous que ",(0,i.jsx)(n.strong,{children:"printer.cfg"})," contient ",(0,i.jsx)(n.code,{children:"[safe_z_home]"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modifiez la valeur de ",(0,i.jsx)(n.code,{children:"z_offset"})," dans ",(0,i.jsx)(n.code,{children:"[bed_mesh]"})," et ",(0,i.jsx)(n.code,{children:"[z_tilt]"})," ou ",(0,i.jsx)(n.code,{children:"[quad_gantry_level]"})," \xe0 1 (0.7-1.0mm recommand\xe9), la valeur par d\xe9faut de Klipper est de 5 mm, sinon le capteur pourrait d\xe9passer sa port\xe9e"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["L'ajustement de la hauteur de la buse ne doit \xeatre fait que dans ",(0,i.jsx)(n.code,{children:"z_adjust:"})," o\xf9 un nombre positif rapproche la buse du lit et un nombre n\xe9gatif l'\xe9loigne. Tout autre r\xe9glage de la hauteur de la buse pourrait causer des bugs"]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Pour activer le balayage rapide du lit, retirez le # devant ",(0,i.jsx)(n.code,{children:"no_stop_probe:true"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Voici un exemple de configuration."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[BDsensor] \nscl_pin:PC6  # Broche de signal de servo\nsda_pin:PC3  # Broche de signal de fin de course\ndelay: 20 # 20us par impulsion, cette valeur doit \xeatre >=20 mais inf\xe9rieure \xe0 50\nz_offset:0 # cette `z_offset` doit \xeatre r\xe9gl\xe9e \xe0 0. \nz_adjust:0.0 # Ajustement de l'axe Z, remplace la fonction z_offset. entre -0.3 et 0.3mm\nx_offset: -34\ny_offset: 0\n#no_stop_probe:true # activez ceci pour une sonde rapide, la t\xeate d'outil ne s'arr\xeatera pas au point de sonde.\nposition_endstop: 0.8 # l'axe Z s'arr\xeatera \xe0 cette position (mm) lors du retour \xe0 z\xe9ro de Z, valeur recommand\xe9e entre 0.4 et 1.0\n#speed:0.8 # cette vitesse ne fonctionne que pour les commandes z tilt et PROBE_ACCURACY.\n\n[stepper_z]\nendstop_pin: probe:z_virtual_endstop \n#position_endstop: 0.5\nhoming_speed: 5\nsecond_homing_speed: 0.8\n\n[bed_mesh]\nspeed: 200\nhorizontal_move_z:1\nalgorithm: bicubic\n\n[quad_gantry_level]\nhorizontal_move_z:1\n\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"apr\xe8s-linstallation-v\xe9rifiez-en-envoyant-les-commandes-g-code-suivantes",children:"Apr\xe8s l'installation, v\xe9rifiez en envoyant les commandes G-Code suivantes"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"M102   S-1     # Lecture des informations du capteur\nM102   S-2     # Lecture d'une valeur de distance\n"})}),"\n",(0,i.jsx)(n.h2,{id:"v\xe9rification-de-la-connexion",children:"V\xe9rification de la connexion"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Envoyez ",(0,i.jsx)(n.code,{children:"M102 S-1"})," via la ",(0,i.jsx)(n.strong,{children:"console"})," pour obtenir un exemple de message de retour, si vous recevez un message vide ou une autre cha\xeene, v\xe9rifiez la connexion et l'ordre des fils"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Send: M102 S-1\nRecv: V1.0 pandapi3d.com\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\xe9talonnage",children:"\xc9talonnage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Nettoyez la buse, puis d\xe9placez l'axe Z via la console jusqu'\xe0 ce que la buse touche \xe0 peine le lit (le capteur BD utilisera cette position comme position z\xe9ro, donc pas besoin de ",(0,i.jsx)(n.code,{children:"z_offset"}),", c'est pourquoi la valeur dans la section [BDsensor] est \xe0 0)"]}),"\n",(0,i.jsxs)(n.li,{children:["Envoyez la commande G-Code ",(0,i.jsx)(n.code,{children:"M102 S-6"})," via la ",(0,i.jsx)(n.strong,{children:"console"}),", l'imprimante d\xe9placera l'axe Z lentement vers le haut de 0.1mm \xe0 chaque fois jusqu'\xe0 atteindre 4mm. Ne lancez pas M102 S-6 avant l'installation du capteur, et ne coupez pas l'alimentation de l'imprimante pendant l'\xe9talonnage, sinon les anciennes donn\xe9es d'\xe9talonnage seront effac\xe9es. Dans ce cas, recalibrez simplement"]}),"\n",(0,i.jsxs)(n.li,{children:["Ensuite, vous pouvez v\xe9rifier si le capteur BD a \xe9t\xe9 correctement \xe9talonn\xe9 avec ",(0,i.jsx)(n.code,{children:"M102 S-5"}),", ce qui renverra les donn\xe9es d'\xe9talonnage brutes stock\xe9es dans le capteur BD."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Notes"})," :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"La vitesse de retour \xe0 z\xe9ro de l'axe Z devrait \xeatre de pr\xe9f\xe9rence de 5"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Si le premier ensemble de donn\xe9es d'\xe9talonnage retourn\xe9 par M102 S-5 est sup\xe9rieur \xe0 400, cela signifie que le capteur est install\xe9 trop haut et doit \xeatre repositionn\xe9 plus pr\xe8s du lit, la valeur recommand\xe9e pour le premier ensemble de donn\xe9es est de 100. Assurez-vous \xe9galement que la deuxi\xe8me valeur est sup\xe9rieure de plus de 10 \xe0 la premi\xe8re."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"FAQ : Si les donn\xe9es d'\xe9talonnage commencent par 1, la deuxi\xe8me valeur est de 9 et la troisi\xe8me de 24, qu'est-ce que cela signifie ?"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cela signifie que la r\xe9solution entre 0-0.1mm est seulement de 9, tandis que celle entre 0.1-0.2mm est de 15. Il est donc recommand\xe9 de recalibrer pour obtenir une r\xe9solution de 0-0.1mm sup\xe9rieure \xe0 10."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["N'oubliez pas d'ajuster la hauteur de l'axe Z apr\xe8s avoir ex\xe9cut\xe9 G28 ou pour les commandes ",(0,i.jsx)(n.code,{children:"Z_tilt"})," et ",(0,i.jsx)(n.code,{children:"quad_gantry_level"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Les noms de sections doivent \xeatre correctement en majuscules et minuscules, sinon Klipper signalera ",(0,i.jsx)(n.code,{children:"Unknown pin chip name 'probe'"})]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},47663:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/bd-4d1080107145fed7d8a6ac8c4e5d9536.webp"},79938:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var r=s(75271);let i={},t=r.createContext(i);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);