"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["84472"],{95289:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-filguard-filament-detector/index","title":"Product Introduction","description":"FilGuard Filament detector is compatible with VZ-Hextrudort-Low extruder, supports filament breakage detection, clogging detection, and comes with customizable buttons.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-filguard-filament-detector/index.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-filguard-filament-detector","slug":"/ProductDoc/ExtensionBoard/fly-filguard-filament-detector/","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/fly-filguard-filament-detector/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-filguard-filament-detector/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"FLY-FilGuard-\u65AD\u5835\u6599\u4F20\u611F\u5668","permalink":"/fly-docs-next/en/docs/category/fly-filguard-\u65AD\u5835\u6599\u4F20\u611F\u5668"},"next":{"title":"FLY-LLL\u7F13\u51B2\u5668","permalink":"/fly-docs-next/en/docs/category/fly-lll\u7F13\u51B2\u5668"}}'),r=t("52676"),o=t("79938");let a={sidebar_position:1},d="Product Introduction",l={},c=[{value:"Wiring Tutorial",id:"wiring-tutorial",level:2},{value:"Firmware Light Status Introduction",id:"firmware-light-status-introduction",level:2},{value:"Klipper, filament breakage and clogging reference configuration",id:"klipper-filament-breakage-and-clogging-reference-configuration",level:2},{value:"Klipper retracting button reference configuration",id:"klipper-retracting-button-reference-configuration",level:2},{value:"Klipper feeding button reference configuration",id:"klipper-feeding-button-reference-configuration",level:2},{value:"3D model download link",id:"3d-model-download-link",level:2}];function s(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{ImageView:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"product-introduction",children:"Product Introduction"})}),"\n",(0,r.jsx)(n.p,{children:"FilGuard Filament detector is compatible with VZ-Hextrudort-Low extruder, supports filament breakage detection, clogging detection, and comes with customizable buttons."}),"\n",(0,r.jsx)(i,{image:t(78163).Z,size:"60%",align:"left"}),"\n",(0,r.jsx)(i,{image:t(58303).Z,size:"40%",align:"left"}),"\n",(0,r.jsx)(n.h2,{id:"wiring-tutorial",children:"Wiring Tutorial"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"On-board PH2.0 5P terminal makes wiring more convenient"}),"\n"]}),"\n",(0,r.jsx)(i,{image:t(95361).Z,size:"80%",align:"left"}),"\n",(0,r.jsx)(n.h2,{id:"firmware-light-status-introduction",children:"Firmware Light Status Introduction"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Out of filament: Red flashing"}),"\n",(0,r.jsx)(n.li,{children:"Feeding: Blue flashing (the faster the feeding speed, the higher the flashing frequency)"}),"\n",(0,r.jsx)(n.li,{children:"Retracting: Green flashing (same as above)"}),"\n",(0,r.jsx)(n.li,{children:"Filament present but no feeding or retracting: Orange breathing light"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"klipper-filament-breakage-and-clogging-reference-configuration",children:"Klipper, filament breakage and clogging reference configuration"}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["In the clogging detection configuration, ",(0,r.jsx)(n.code,{children:"detection_length: 2.0"})]}),(0,r.jsx)(n.p,{children:"2.0mm is the minimum detection length required for the normal operation of this smart consumable detection module. If you encounter false triggering issues, try increasing the detection length by 1 mm until the problem is resolved."})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:'[respond]\ndefault_type: echo\n\n[force_move]\nenable_force_move: True\n\n[filament_switch_sensor filament breakage detection]\npause_on_runout: False\nswitch_pin: ^!PG12\nrunout_gcode:\n        {% if (printer.print_stats.state == "printing") %}\n                PAUSE\n        {% endif %}\n        M118 Out of filament\n        # filament_unload\ninsert_gcode:\n        M118 Loading filament\n        FORCE_MOVE STEPPER=extruder DISTANCE=8 VELOCITY=5 ACCEL=60\n        {% if (printer.extruder.can_extrude|lower != \'true\') or (printer.extruder.target == 0)%}\n                M118 Waiting for heating!\n                SET_HEATER_TEMPERATURE HEATER=extruder TARGET=200\n                TEMPERATURE_WAIT SENSOR=extruder MINIMUM=190\n        {% endif %}\n        M83\n        G92 E0\n        G0 E50 F500\n        G0 E10 F200\n\n[filament_motion_sensor clogging detection]\nextruder: extruder\ndetection_length: 2.0\nswitch_pin: ^!PG10\npause_on_runout: False\nrunout_gcode:\n        {% if (printer.print_stats.state == "printing") %}\n                PAUSE\n        {% endif %}\n        M118 Clogging\ninsert_gcode:\n        M118 Clogging recovery\n#event_delay:\n#pause_delay:\n\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Only one of feeding and retracting can be used"})}),"\n",(0,r.jsx)(n.h2,{id:"klipper-retracting-button-reference-configuration",children:"Klipper retracting button reference configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[gcode_button filament_unload]\npin: ^!PG11\nrelease_gcode:\nfilament_unload\npress_gcode:\n\n\n[gcode_macro filament_unload]\ngcode:\n        {% if (printer.print_stats.state != \"printing\") %}\n                M83\n                G92 E0\n                {% if (printer.extruder.can_extrude|lower != 'true') or (printer.extruder.target == 0)%}\n                        M118 Waiting for heating!\n                        SET_HEATER_TEMPERATURE HEATER=extruder TARGET=190\n                        TEMPERATURE_WAIT SENSOR=extruder MINIMUM=185\n                {% endif %}\n                G0 E10 F300\n                G0 E-20 F200\n                G0 E-50 F500\n        {% else %}\n                M118 Printing, no retraction operation!\n        {% endif %}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"klipper-feeding-button-reference-configuration",children:"Klipper feeding button reference configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[gcode_button filament_unload]\npin: ^!PG11\nrelease_gcode:\nfilament_unload\npress_gcode:\n\n\n[gcode_macro filament_unload]\ngcode:\n        {% if (printer.print_stats.state != \"printing\") %}\n                M83\n                G92 E0\n                {% if (printer.extruder.can_extrude|lower != 'true') or (printer.extruder.target == 0)%}\n                        M118 Waiting for heating!\n                        SET_HEATER_TEMPERATURE HEATER=extruder TARGET=190\n                        TEMPERATURE_WAIT SENSOR=extruder MINIMUM=185\n                {% endif %}\n                G0 E20 F300\n        {% else %}\n                M118 Printing, no retraction operation!\n        {% endif %}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"3d-model-download-link",children:"3D model download link"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://cdn.mellow.klipper.cn/STEP/%E8%80%97%E6%9D%90%E6%96%AD%E6%96%99%E5%A0%B5%E6%96%99%E6%A3%80%E6%B5%8B%E6%A8%A1%E5%9D%97.7z\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},95361:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/connection-b9eff57ee6f53f80b9279b964fc8fd97.webp"},58303:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/filament-df744ca0f0c1c0651dd34b82ce98ce1c.webp"},78163:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/filament_1-f664a6bbc99c3ff6f9fd66a8ddec568e.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var i=t(75271);let r={},o=i.createContext(r);function a(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);