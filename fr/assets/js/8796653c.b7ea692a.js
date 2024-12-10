"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["86124"],{37521:function(n,e,t){t.r(e),t.d(e,{metadata:()=>o,contentTitle:()=>p,default:()=>_,assets:()=>a,toc:()=>l,frontMatter:()=>r});var o=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/cfg","title":"\u53C2\u8003\u914D\u7F6E","description":"","source":"@site/docs/ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/cfg","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1725931817000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u53C2\u8003\u914D\u7F6E"},"sidebar":"tutorialSidebar","previous":{"title":"C\xe2blage de la carte m\xe8re","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/wiring"},"next":{"title":"Utilisation de l\'acc\xe9l\xe9rom\xe8tre","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/adxl"}}'),s=t("52676"),i=t("79938");let r={sidebar_position:5,sidebar_label:"\u53C2\u8003\u914D\u7F6E"},p="\u53C2\u8003\u914D\u7F6E",a={},l=[];function d(n){let e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u53C2\u8003\u914D\u7F6E",children:"\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cfg",children:'#####################################################################\n#                               \u4E3B\u677F\u914D\u7F6E\n#####################################################################\n[mcu SHT36] # \u5DE5\u5177\u4E3B\u677F\u5E8F\u5217\u53F7\ncanbus_uuid: eeb4f40a0b9b\n### \u67E5\u8BE2can\u56FA\u4EF6id\u662F\uFF1A~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n### can\u7684id\u9700\u8981\u628Aserial\u66FF\u6362\u6210canbus_uuid: \u540E\u9762\u6DFB\u52A0id \n\n#####################################################################\n#                             \u6E29\u5EA6\u76D1\u63A7\n#####################################################################\n[temperature_sensor SHT36]        # \u5DE5\u5177\u677F\u4E3B\u677F\u6E29\u5EA6\nsensor_type: temperature_mcu      # \u5173\u8054mcu\nsensor_mcu: SHT36                 # \u5173\u8054mcu\u662FSHT36\n#--------------------------------------------------------------------\n[temperature_sensor Box]          # \u5DE5\u5177\u677F\u70ED\u654F\u6E29\u5EA6 \nsensor_type: ATC Semitec 104GT-2  # \u4F20\u611F\u5668\u578B\u53F7\nsensor_pin: SHT36:gpio27          # \u4FE1\u53F7\u63A5\u53E3\n\n#####################################################################\n#                            E \u6324\u51FA\u673A\u8BBE\u7F6E                            # \n#####################################################################\n#\u6CE8\uFF1A\u63A5\u5B8C\u7EBF\u9700\u6D4B\u8BD5\u8FD0\u884C\u65B9\u5411\n[extruder]                          # \u6324\u51FA\u673A\nstep_pin: SHT36:gpio24              # \u6324\u51FA\u7535\u673A\u65B9\u8109\u51B2\u5F15\u811A\ndir_pin: SHT36:gpio23               # \u6324\u51FA\u7535\u673A\u65B9\u5411\u5F15\u811A\u8BBE\u7F6E\nenable_pin: !SHT36:gpio25           # \u6324\u51FA\u7535\u673A\u65B9\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E\n## \u6267\u884C\u6324\u51FA\u673A\u6821\u51C6\u65F6\uFF0C\u66F4\u65B0\u4EE5\u4E0B\u503C\n## \u6BD4\u5982\u4F60\u8981\u6C42100\u6BEB\u7C73\u7684\u8FDB\u6599\uFF0C\u4F46\u5B9E\u9645\u4E0A\u662F102\uFF1A\n## rotation_distance = <\u65E7rotation_distance> * <\u5B9E\u9645\u6324\u51FA\u957F\u5EA6> / <\u8BF7\u6C42\u7684\u6324\u51FA\u957F\u5EA6>\n## \u6821\u51C6\u6B65\u8FDB\u503C: 22.44=\u65E7\u503C22*\u5B9E\u9645\u503C102/\u76EE\u6807\u503C100\nrotation_distance: 22.44            # \u6B65\u8FDB\u503C\ngear_ratio: 50:17                   # \u51CF\u901F\u6BD4\uFF08\u4F3D\u5229\u7565\u9F7F\u6BD47.5:1 \u5E76\u4E14\u8FD9\u884C\u6CE8\u91CA\u6389\uFF1BBMG\u4E3A50\uFF1A17\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09\nmicrosteps: 16                      # \u7535\u673A\u7EC6\u5206\u8BBE\u7F6E,\u7EC6\u5206\u8D8A\u9AD8\uFF0C\u8D28\u91CF\u8D8A\u9AD8\uFF0C\u4F46\u4E3B\u63A7\u8D1F\u8377\u8D8A\u5927\nfull_steps_per_rotation: 200        # \u5355\u5708\u8109\u51B2\u6570 \uFF08200 \u4E3A 1.8 \u5EA6, 400 \u4E3A 0.9 \u5EA6\uFF09\nnozzle_diameter: 0.400              # \u55B7\u5634\u76F4\u5F84\nfilament_diameter: 1.75             # \u8017\u6750\u76F4\u5F84\nheater_pin: SHT36:gpio8             # \u52A0\u70ED\u68D2\u5F15\u811A,\u63A5\u5230HETA0\n#--------------------------------------------------------------------\n##\u666E\u901A\u70ED\u654F\u914D\u7F6E\nsensor_type: ATC Semitec 104GT-2    # \u4F20\u611F\u5668\u578B\u53F7  (Generic 3950, ATC Semitec 104GT-2\uFF0C PT1000)\nsensor_pin: SHT36:gpio26            # \u4F20\u611F\u5668\u5F15\u811A  \n#--------------------------------------------------------------------\n##pt1000\u914D\u7F6E\n#sensor_type: PT1000                 # \u4F20\u611F\u5668\u578B\u53F7  (Generic 3950, ATC Semitec 104GT-2\uFF0C PT1000)\n#pullup_resistor: 1000               # \u70ED\u654F\u4E0A\u62C9\u7535\u963B\u4E3A1000\uFF0C\u5982\u679C\u6E29\u5EA6\u4E3A\u8D1F-180\u9700\u8981\u66F4\u6362\u8DF3\u7EBF\n#sensor_pin: SHT36:gpio26            # \u4F20\u611F\u5668\u5F15\u811A  \n#--------------------------------------------------------------------\nmin_temp: -200                      # \u6700\u5C0F\u6E29\u5EA6\uFF08\u6CE8\u610F\uFF1A\u6D4B\u91CF\u6E29\u5EA6\u8D85\u8FC7\u8BBE\u5B9A\u503C\u4F1A\u89E6\u53D1\u7D27\u6025\u505C\u6B62\uFF09\nmax_temp: 350                       # \u6700\u5927\u6E29\u5EA6\uFF08\u6CE8\u610F\uFF1A\u6D4B\u91CF\u6E29\u5EA6\u8D85\u8FC7\u8BBE\u5B9A\u503C\u4F1A\u89E6\u53D1\u7D27\u6025\u505C\u6B62\uFF09\nmax_power: 1.0                      # \u6700\u5927\u529F\u7387\nmin_extrude_temp: 170               # \u6700\u5C0F\u6324\u51FA\u6E29\u5EA6\uFF08\u81F3\u5C11\u9700\u8981\u8FBE\u5230\u8FD9\u4E2A\u6E29\u5EA6\uFF0C\u6324\u51FA\u673A\u624D\u80FD\u6324\u51FA\uFF09\npressure_advance: 0.05              # \u63A8\u8FDB\u538B\u529B-\u5C3D\u91CF\u5C06\u538B\u529B\u4FDD\u6301\u57281.0\u4EE5\u4E0B(\u538B\u529B\u63D0\u524D\u662F\u8C03\u6574\u8FD9\u4E2A)\npressure_advance_smooth_time: 0.040 # \u5E73\u7A33\u63A8\u8FDB\u65F6\u95F4-\u9ED8\u8BA4\u503C\u4E3A0.040\n#\u538B\u529B\u63D0\u524D\u8C03\u6574\u65B9\u6CD5:https://www.klipper3d.org/zh/Pressure_Advance.html\npressure_advance_smooth_time: 0.040 # \u5E73\u7A33\u63A8\u8FDB\u65F6\u95F4-\u9ED8\u8BA4\u503C\u4E3A0.040\n#max_extrude_only_distance: 200.0   # \u6324\u51FA\u6D41\u91CF\u62A5\u9519\u53EF\u4EE5\u6CE8\u91CA\u8FD9\u4E2A\uFF0C\u4F46\u662F\u5EFA\u8BAE\u91CD\u65B0\u5207\u7247\n#\u55B7\u5634\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A  "PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol = pid                # PID\u55B7\u5634\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\npid_kp = 26.213              # PID\u55B7\u5634\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\npid_ki = 1.304               # PID\u55B7\u5634\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\npid_kd = 131.721             # PID\u55B7\u5634\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n[tmc2209 extruder]                  # \u6324\u51FA\u673A\u9A71\u52A8\u914D\u7F6E- TMC2209\nuart_pin: SHT36:gpio1               # \u901A\u8BAF\u7AEF\u53E3Pin\u811A\u5B9A\u4E49\ntx_pin: SHT36:gpio0\ninterpolate: False                  # \u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C\uFF08\u5F00\u542F\u662FTrue\uFF0C\u5173\u95ED\u662FFalse\uFF09\nrun_current: 0.8                    # \u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C\nsense_resistor: 0.110               # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\nstealthchop_threshold: 500          # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n\n#####################################################################\n#                             \u98CE\u6247\u914D\u7F6E\n#####################################################################\n[fan]                        # \u6A21\u578B\u51B7\u5374\u98CE\u6247\npin: SHT36:gpio15            # \u4FE1\u53F7\u63A5\u53E3\nkick_start_time: 0.5         # \u542F\u52A8\u65F6\u95F4\uFF08\u52FF\u52A8\uFF09\noff_below: 0.10              # \u52FF\u52A8\n#--------------------------------------------------------------------\n[heater_fan hotend_fan]      # \u5589\u7BA1\u51B7\u5374\u98CE\u6247\npin: SHT36:gpio14            # \u4FE1\u53F7\u63A5\u53E3\nmax_power: 1.0               # \u6700\u5927\u8F6C\u901F\nkick_start_time: 0.5         # \u542F\u52A8\u65F6\u95F4\uFF08\u52FF\u52A8\uFF09\nheater: extruder             # \u5173\u8054\u7684\u8BBE\u5907\uFF1A\u6324\u51FA\u673A\nheater_temp: 50              # \u6324\u51FA\u673A\u8FBE\u5230\u591A\u5C11\u5EA6\u542F\u52A8\u98CE\u6247\nfan_speed: 1.0               # \u98CE\u6247\u8F6C\u901F\n\n#####################################################################\n#                            X\u9650\u4F4D\u914D\u7F6E\n#####################################################################\n[stepper_x]\nendstop_pin: !SHT36:gpio21\n## SHT36\u677F\u6709gpio2,gpio21\u4E24\u4E2A\u9650\u4F4D\u5F15\u811A\u53EF\u7528\uFF0C\u6309\u7167\u5B9E\u9645\u63A5\u7EBF\u4FEE\u6539\u914D\u7F6E\n## gpio21\u5F15\u811A\u9ED8\u8BA4\u652F\u6301\u9AD8\u538B\u8F93\u5165\uFF0C\u53EF\u7528\u4E8E12v\u7684\u63A5\u8FD1\u4F20\u611F\u5668\u7B49\u3002\u53EF\u901A\u8FC7\u8DF3\u7EBF\u5E3D\u914D\u7F6Egpio21\u4E3A\u666E\u901A\u9650\u4F4D\u5F15\u811A\n#####################################################################\n#                           SB\u5934led\u914D\u7F6E\n#####################################################################\n[neopixel sb_leds]\npin: SHT36:gpio6            # \u4FE1\u53F7\u63A5\u53E3\nchain_count: 3              # \u706F\u73E0\u6570\u91CF\ncolor_order: GRBW           # \u706F\u73E0\u7C7B\u578B\ninitial_RED: 0.4            # \ninitial_GREEN: 0.8          # \ninitial_BLUE: 1             # \ninitial_WHITE: 0.0          # \u8FDE\u63A5\u540E\u4F1A\u4EAE\u8D77\u6765\n\n#####################################################################\n#                           PL08N\u611F\u5E94\u63A2\u5934\n#####################################################################\n# PL08N\u611F\u5E94\u63A2\u5934\u4E0D\u4F4E\u4E8E\u55B7\u5634\u9AD8\u5EA6\uFF0C\u4EC5\u7528\u4E8E\u8C03\u5E73,\u5982\u679C\u4F60\u7684PL08N\u662FNO\uFF08\u5E38\u5F00\uFF09\uFF0C\u8BF7\u5C06\u66F4\u6539pin\u6DFB\u52A0\u5230\uFF01 \n[probe]\npin: ^SHT36:gpio3            # \u4FE1\u53F7\u63A5\u53E3\nx_offset: 0                  # X\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\ny_offset: 25.0               # Y\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\nz_offset: 0                  # Z\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\nspeed: 10.0                  # \u8C03\u5E73\u901F\u5EA6\nsamples: 3                   # \u91C7\u6837\u6B21\u6570\nsamples_result: median       # \u53D6\u503C\u65B9\u5F0F\uFF08\u9ED8\u8BA4median-\u4E2D\u4F4D\u6570\uFF09\nsample_retract_dist: 4.0     # \u8C03\u5E73\u56DE\u7F29\u8DDD\u79BB\nsamples_tolerance: 0.006     # \u91C7\u6837\u516C\u5DEE\uFF08\u6CE8\u610F\u8FC7\u5C0F\u7684\u503C\u53EF\u80FD\u9020\u6210\u91C7\u6837\u6B21\u6570\u589E\u52A0\uFF09\nsamples_tolerance_retries: 3 # \u8D85\u516C\u5DEE\u91CD\u8BD5\u6B21\u6570\n\n#--------------------------------------------------------------------\n#[bltouch]\n#sensor_pin: ^SHT36:gpio3     # \u4FE1\u53F7\u63A5\u53E3\n#control_pin: SHT36:gpio7     # \u8235\u673A\u63A7\u5236\n#x_offset: -26.1              # X\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\uFF0C\u9700\u8981\u81EA\u884C\u786E\u5B9A\u504F\u79FB\u91CF\n#y_offset: -15.3              # Y\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\uFF0C\u9700\u8981\u81EA\u884C\u786E\u5B9A\u504F\u79FB\u91CF\n#z_offset: 2.1                # Z\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\uFF0C\u9700\u8981\u81EA\u884C\u786E\u5B9A\u504F\u79FB\u91CF\n\n#####################################################################\n#                          \u78C1\u89D2\u5EA6\u4F20\u611F\u5668\n#####################################################################\n## \u78C1\u89D2\u5EA6\u4F20\u611F\u5668\n## \u76F8\u5173\u8BF4\u660E\u8BF7\u53C2\u8003https://www.klipper3d.org/API_Server.html#angledump_angle \n## https://www.klipper3d.org/Debugging.html#motion-analysis-and-data-logging\n# [angle my_angle_sensor]\n# sensor_type: as5047d\n# #sample_period: 0.000400\n# stepper: stepper_x\n# cs_pin: SHT36:gpio17\n# spi_bus: spi1\n# # spi_software_sclk_pin: SHT36:PA5\n# # spi_software_mosi_pin: SHT36:PA7\n# # spi_software_miso_pin: SHT36:PA6\n\n\n'})})]})}function _(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},79938:function(n,e,t){t.d(e,{Z:function(){return p},a:function(){return r}});var o=t(75271);let s={},i=o.createContext(s);function r(n){let e=o.useContext(i);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);