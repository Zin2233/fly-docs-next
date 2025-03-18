"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["66808"],{55579:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>s,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>a});var r=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-kppm/power_resume","title":"Klipper Power Resume","description":"* Only applicable to some machines","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-kppm/power_resume.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-kppm","slug":"/ProductDoc/ExtensionBoard/fly-kppm/power_resume","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/fly-kppm/power_resume","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-kppm/power_resume.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Product Introduction","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/fly-kppm/"},"next":{"title":"3D Model","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/fly-kppm/schematic"}}'),o=n("52676"),i=n("79938");let a={sidebar_position:2},s="Klipper Power Resume",d={},c=[{value:"Switch Branch",id:"switch-branch",level:2},{value:"Reference Configuration",id:"reference-configuration",level:2}];function l(e){let t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"klipper-power-resume",children:"Klipper Power Resume"})}),"\n",(0,o.jsx)(t.admonition,{title:"Notice",type:"danger",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Only applicable to some machines"}),"\n"]})}),"\n",(0,o.jsx)(t.h2,{id:"switch-branch",children:"Switch Branch"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"It needs to be executed after connecting to the host computer through SS via the network, and it is necessary to ensure that the host computer can access the internet"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git clone https://e.coding.net/g-ofpa1390/3D-Printers/klipper-dev.git -b fly-dev klipper\n"})}),"\n",(0,o.jsx)(t.h2,{id:"reference-configuration",children:"Reference Configuration"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cfg",children:"[power_resume]\npower_pin: PA10\nis_shutdown: True # Whether to perform shutdown operation, enabled by default\nstart_gcode:\n    # Gcode executed before starting to continue printing\n    # All parameters saved before power failure can be obtained through {PR}\n    # M118 {PR} can be used to output all available parameters\n    M118 Start continuing: {PR.print_stats.filename}\n    {% if PR.print_stats.info.total_layer %}\n        M118 Total layers: {PR.print_stats.info.total_layer}\n        M118 Interrupted layer: {PR.print_stats.info.current_layer}\n    {% endif %}\n    M118 Interrupted position: X:[{PR.POS_X}] Y:[{PR.POS_Y}] Z:[{PR.POS_Z}] E:[{PR.POS_E}]\n    M140 S{PR.bed.target}      ; Set hotbed temperature\n    # M104 S180                ; Set extruder head temperature\n    # M109 S180                ; Wait for the extruder head to heat up to the set temperature\n    G91                        ; Relative coordinates\n    G1 Z2 F100                 ; Raise Z, prepare for X,Y zeroing\n    G90                        ; Absolute coordinates\n    G28 X Y                    ; Zero XY\n    M140 S{PR.bed.target}      ; Set hotbed temperature\n    M104 S{PR.extruder.target} ; Set extruder head temperature\n    M190 S{PR.bed.target}      ; Wait for the hotbed to heat up to the set temperature\n    M109 S{PR.extruder.target} ; Wait for the extruder head to heat up to the set temperature\n    M106 S255                  ; Turn on the blowing fan\n    M83                        ; Relative extrusion\n    G1 E10 F400                ; Extrude a little\n    G90                        ; Absolute coordinates\n    G1 F{PR.gcode_move.speed}  ; Set movement speed\n    G1 X{PR.POS_X} Y{PR.POS_Y} Z{PR.POS_Z} ; Move to the starting position\n    {% if PR.gcode_move.absolute_coordinates %}\n        G90 ; Absolute movement\n    {% else %}\n        G91 ; Relative movement\n    {% endif %}\n    {% if PR.gcode_move.absolute_extrude %}\n        M82 ; Absolute extrusion\n    {% else %}\n        M83 ; Relative extrusion\n    {% endif %}\n    G92 E{PR.POS_E} ; Set extrusion position\nshutdown_gcode:\n    # Gcode executed before shutdown\n    M118 Low power supply voltage, shutting down\n    # M112 ; Emergency stop\n"})})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},79938:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var r=n(75271);let o={},i=r.createContext(o);function a(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);