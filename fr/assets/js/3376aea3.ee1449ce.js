"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["66229"],{65827:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>c,assets:()=>a,toc:()=>p,frontMatter:()=>o});var t=JSON.parse('{"id":"DebugDoc/ref-config/stepper_z","title":"Configuration de r\xe9f\xe9rence pour plusieurs Z","description":"Double Z avec une seule limite","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/stepper_z.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/stepper_z","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/stepper_z","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/stepper_z.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732249869000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"debugdocSidebar","previous":{"title":"Configuration de r\xe9f\xe9rence pour i3 Single Z","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/i3"},"next":{"title":"Pause et annulation d\'impression \xe0 une position personnalis\xe9e","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/fuidd"}}'),s=i("52676"),r=i("79938");let o={sidebar_position:9},l="Configuration de r\xe9f\xe9rence pour plusieurs Z",a={},p=[{value:"Double Z avec une seule limite",id:"double-z-avec-une-seule-limite",level:2},{value:"Double Z avec deux limites",id:"double-z-avec-deux-limites",level:2},{value:"Double Z avec Probe ou BL Touch",id:"double-z-avec-probe-ou-bl-touch",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configuration-de-r\xe9f\xe9rence-pour-plusieurs-z",children:"Configuration de r\xe9f\xe9rence pour plusieurs Z"})}),"\n",(0,s.jsx)(n.h2,{id:"double-z-avec-une-seule-limite",children:"Double Z avec une seule limite"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Pour la deuxi\xe8me configuration Z, il n'est pas n\xe9cessaire d'ajouter ",(0,s.jsx)(n.code,{children:"endstop_pin:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"[stepper_z]\nstep_pin: PA5\ndir_pin: PA4\nenable_pin: !PA6\nrotation_distance: 4\nfull_steps_per_rotation: 200\nmicrosteps: 16\nendstop_pin: ^!PA9\nposition_endstop: 0\nposition_max: 300\nhoming_speed: 50\nhoming_retract_dist: 5\n\n[stepper_z1]\nstep_pin: PB10\ndir_pin:  PB2\nenable_pin: !PB11\nrotation_distance: 4\nfull_steps_per_rotation: 200\nmicrosteps: 16\nstep_pulse_duration: 0.000004\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"double-z-avec-deux-limites",children:"Double Z avec deux limites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Pour la deuxi\xe8me configuration Z, il faut ajouter ",(0,s.jsx)(n.code,{children:"endstop_pin:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"[stepper_z]\nstep_pin: PA5\ndir_pin: PA4\nenable_pin: !PA6\nrotation_distance: 4\nfull_steps_per_rotation: 200\nmicrosteps: 16\nendstop_pin: ^!PA9\nposition_endstop: 0\nposition_max: 300\nhoming_speed: 50\nhoming_retract_dist: 5\nstep_pulse_duration: 0.000004\n\n[stepper_z1]\nstep_pin: PB10\ndir_pin:  PB2\nenable_pin: !PB11\nrotation_distance: 4\nfull_steps_per_rotation: 200\nmicrosteps: 16\nstep_pulse_duration: 0.000004\nendstop_pin: ^!PA10\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"double-z-avec-probe-ou-bl-touch",children:"Double Z avec Probe ou BL Touch"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Dans la premi\xe8re configuration Z, modifiez la pin apr\xe8s ",(0,s.jsx)(n.code,{children:"endstop_pin:"})," par ",(0,s.jsx)(n.code,{children:"probe:z_virtual_endstop  "})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Il est n\xe9cessaire de configurer Probe ou BL Touch"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"[stepper_z]\nstep_pin: PA5\ndir_pin: PA4\nenable_pin: !PA6\nrotation_distance: 4\nfull_steps_per_rotation: 200\nmicrosteps: 16\nendstop_pin: probe:z_virtual_endstop  \n# position_endstop: 0\nposition_max: 300\nhoming_speed: 50\nhoming_retract_dist: 5\nstep_pulse_duration: 0.000004\n\n[probe]\npin: ^PB4                    # Interface de signal\nx_offset: 0                  # D\xe9calage relatif de la sonde par rapport \xe0 la buse sur l'axe X\ny_offset: 0                  # D\xe9calage relatif de la sonde par rapport \xe0 la buse sur l'axe Y\n#z_offset: 0                 # D\xe9calage relatif de la sonde par rapport \xe0 la buse sur l'axe Z\nspeed: 3.0                   # Vitesse de nivellement\nlift_speed: 5                # Vitesse de levage de la sonde\nsamples: 3                   # Nombre d'\xe9chantillons\nsamples_result: median       # M\xe9thode de s\xe9lection des valeurs (par d\xe9faut median - m\xe9diane)\nsample_retract_dist: 3.0     # Distance de r\xe9traction du nivellement\nsamples_tolerance: 0.075     # Tol\xe9rance d'\xe9chantillonnage (attention aux valeurs trop petites qui peuvent augmenter le nombre d'\xe9chantillons)\nsamples_tolerance_retries: 3 # Nombre de tentatives de r\xe9\xe9chantillonnage en cas de d\xe9passement de tol\xe9rance\n"})}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},79938:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return o}});var t=i(75271);let s={},r=t.createContext(s);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);