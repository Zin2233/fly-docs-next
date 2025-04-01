"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["97870"],{71815:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"ProductDoc/ExtensionBoard/BDsensor-m/marlinpz","title":"D\xe9tection de collision Marlin","description":"Cette fonction n\xe9cessite une version du firmware du capteur BD (vous pouvez obtenir cette version en envoyant M102 S-1, pas la version mat\xe9rielle du capteur)","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/BDsensor-m/marlinpz.mdx","sourceDirName":"ProductDoc/ExtensionBoard/BDsensor-m","slug":"/ProductDoc/ExtensionBoard/BDsensor-m/marlinpz","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlinpz","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlinpz.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"D\xe9calage automatique Z pour Marlin"},"sidebar":"tutorialSidebar","previous":{"title":"klipper auto-z-offset","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/BDsensor-m/klipperpz"},"next":{"title":"Installation  **BDsensor-m-m**","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/BDsensor-m/marlin"}}'),r=i("74132"),s=i("94551");let o={sidebar_position:4,sidebar_label:"D\xe9calage automatique Z pour Marlin"},l="D\xe9tection de collision Marlin",a={},d=[];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Button:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"d\xe9tection-de-collision-marlin",children:"D\xe9tection de collision Marlin"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Cette fonction n\xe9cessite une version du firmware du capteur BD (vous pouvez obtenir cette version en envoyant M102 S-1, pas la version mat\xe9rielle du capteur)\nde V1.1b, sup\xe9rieure \xe0 V1.2b ou achet\xe9e apr\xe8s mars 2024, sinon vous devrez utiliser un outil mat\xe9riel externe (comme STlink) pour flasher le firmware sur le capteur BD."})}),"\n",(0,r.jsx)(n.h1,{id:"comment-cela-fonctionne",children:"Comment cela fonctionne"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Le calibrage automatique du d\xe9calage Z est effectu\xe9 lors de l'ex\xe9cution de G28 : il peut \xeatre d\xe9clench\xe9 au moment du retour \xe0 la maison (apr\xe8s que l'extrudeuse ait touch\xe9 la plaque) \u2014 puis se d\xe9place lentement vers le haut jusqu'\xe0 ce que l'extrudeuse quitte l\xe9g\xe8rement la plaque \u2014 d\xe9finissez cette position comme le point 0 de l'axe Z."}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"avantages",children:"Avantages"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Calibrage automatique du d\xe9calage Z."}),"\n",(0,r.jsx)(n.li,{children:"Vous pouvez toujours ajuster manuellement le d\xe9calage Z pour diff\xe9rents filaments."}),"\n",(0,r.jsx)(n.li,{children:"Surmontez les d\xe9rives de temp\xe9rature."}),"\n",(0,r.jsx)(n.li,{children:"Les d\xe9rives de temp\xe9rature changent le d\xe9calage Z, mais n'affectent pas l'\xe9tendue de la carte de hauteur du lit avec un capteur BD. Cela signifie que m\xeame si la temp\xe9rature est diff\xe9rente, la carte de hauteur du lit reste la m\xeame."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Astuce",type:"info",children:(0,r.jsxs)(n.p,{children:["Le code de cette fonction est dans la liste des demandes d'extraction officielles de Marlin GitHub : ",(0,r.jsx)(n.a,{href:"https://github.com/MarlinFirmware/Marlin/pull/27243",children:"https://github.com/MarlinFirmware/Marlin/pull/27243"}),"\nDonc, veuillez utiliser le code Marlin suivant : ",(0,r.jsx)(n.a,{href:"https://github.com/markniu/MarlinPULL/tree/bugfix-2.1.x",children:"https://github.com/markniu/MarlinPULL/tree/bugfix-2.1.x"})]})}),"\n",(0,r.jsx)(n.h1,{id:"comment-lutiliser",children:"Comment l'utiliser"}),"\n",(0,r.jsxs)(n.p,{children:["Activez ",(0,r.jsx)(n.code,{children:"BD_SENSOR"}),", et ajoutez ",(0,r.jsx)(n.code,{children:"#define BD_SENSOR_CONTACT_PROBE"})," dans ",(0,r.jsx)(n.code,{children:"configuration.h"}),".\nIl doit ressembler \xe0 ceci :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#define BD_SENSOR\n#if ENABLED(BD_SENSOR)\n  #define BD_SENSOR_PROBE_NO_STOP // Sondez le lit sans arr\xeater \xe0 chaque point de sondage\n  #define BD_SENSOR_CONTACT_PROBE // Il utilise la d\xe9tection de collision de la buse pour sonder pendant le retour \xe0 la maison\n#endif\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Augmentez la vitesse du sondeur dans ",(0,r.jsx)(n.code,{children:"configuration.h"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"La sensibilit\xe9 d\xe9pend de la vitesse, donc vous devez ajuster la vitesse de l'axe Z."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Les vitesses de retour \xe0 la maison (homing_speed) et de deuxi\xe8me retour \xe0 la maison (second_homing_speed) doivent \xeatre comprises entre 3 et 10, ici sont les vitesses de feed du sondeur Z."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Par exemple :"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:" #define Z_PROBE_FEEDRATE_FAST  (5*60)\n #define Z_PROBE_FEEDRATE_SLOW  (5*60)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Augmentez la mont\xe9e de retour \xe0 la maison de l'axe Z \xe0 plus de 4 millim\xe8tres dans ",(0,r.jsx)(n.code,{children:"Configuration_adv.h"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#define HOMING_BUMP_MM      { 5, 5, 5 } \n"})}),"\n",(0,r.jsx)(n.h1,{id:"test-de-retour-\xe0-la-maison",children:"Test de retour \xe0 la maison"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Envoyez environ 10 fois la commande ",(0,r.jsx)(n.code,{children:"G28 Z"})," ou utilisez la commande ",(0,r.jsx)(n.code,{children:"M48"})," pour voir si elle est stable."]}),"\n"]}),"\n",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://www.youtube.com/watch?v=DzmGyJNS9bY",children:"Vid\xe9o de d\xe9monstration"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},94551:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return o}});var t=i(39546);let r={},s=t.createContext(r);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);