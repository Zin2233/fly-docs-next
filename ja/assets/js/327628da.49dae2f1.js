"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["31503"],{85788:function(n,e,s){s.r(e),s.d(e,{default:()=>d,frontMatter:()=>r,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>p});var t=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sb2040/sb2040/cfg","title":"\u53C2\u8003\u914D\u7F6E","description":"","source":"@site/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sb2040/sb2040","slug":"/ProductDoc/ToolBoard/fly-sb2040/sb2040/cfg","permalink":"/fly-docs-next/ja/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1743130497000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u914D\u7F6E\u53C2\u8003"},"sidebar":"tutorialSidebar","previous":{"title":"\u63A5\u7DDA\u53C2\u8003","permalink":"/fly-docs-next/ja/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040/wiring"},"next":{"title":"\u52A0\u901F\u5EA6\u8A08\u306E\u4F7F\u7528","permalink":"/fly-docs-next/ja/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040/adxl"}}'),o=s("85893"),i=s("50065");let r={sidebar_position:5,sidebar_label:"\u914D\u7F6E\u53C2\u8003"},p="\u53C2\u8003\u914D\u7F6E",a={},c=[];function _(n){let e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"\u53C2\u8003\u914D\u7F6E",children:"\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cfg",children:'#####################################################################\n#                               \u4E3B\u677F\u914D\u7F6E\n#####################################################################\n[mcu sb2040]  # \u5DE5\u5177\u4E3B\u677F\u5E8F\u5217\u53F7\ncanbus_uuid: e51d5c71a901\n### \u67E5\u8BE2can\u56FA\u4EF6id\u662F\uFF1A~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n### can\u7684id\u9700\u8981\u628Aserial\u66FF\u6362\u6210canbus_uuid: \u540E\u9762\u6DFB\u52A0id \n\n#####################################################################\n#                       adxl345\u52A0\u901F\u5EA6\u8BA1\u914D\u7F6E\uFF08\u9700\u8981\u65F6\u542F\u7528\u5373\u53EF\uFF09\n#####################################################################\n## ADXL345\u52A0\u901F\u5EA6\u8BA1\n[adxl345]\ncs_pin: sb2040:gpio1\nspi_software_sclk_pin: sb2040:gpio0\nspi_software_mosi_pin: sb2040:gpio3\nspi_software_miso_pin: sb2040:gpio2\n#--------------------------------------------------------------------\n[resonance_tester]\naccel_chip: adxl345         # \u52A0\u901F\u5EA6\u82AF\u7247\u578B\u53F7\nprobe_points: 150,150,10    # \u5750\u6807\u914D\u7F6E\u4E3A\u70ED\u5E8A\u7684\u4E2D\u95F4\n\n#####################################################################\n#                             \u6E29\u5EA6\u76D1\u63A7\n#####################################################################\n[temperature_sensor FLY-SB2040]   # \u5DE5\u5177\u677F\u4E3B\u677F\u6E29\u5EA6\nsensor_type: temperature_mcu      # \u5173\u8054mcu\nsensor_mcu: sb2040                # \u5173\u8054mcu\u662Fsb2040\n#--------------------------------------------------------------------\n[temperature_sensor Warehouse]    # \u5DE5\u5177\u677F\u70ED\u654F\u6E29\u5EA6 \nsensor_type: ATC Semitec 104GT-2  # \u4F20\u611F\u5668\u578B\u53F7\nsensor_pin = sb2040:gpio26        # \u4FE1\u53F7\u63A5\u53E3\n\n#####################################################################\n#                            E \u6324\u51FA\u673A\u8BBE\u7F6E                            # \n#####################################################################\n#\u6CE8\uFF1A\u63A5\u5B8C\u7EBF\u9700\u6D4B\u8BD5\u8FD0\u884C\u65B9\u5411\n[extruder]                          # \u6324\u51FA\u673A\nstep_pin: sb2040:gpio9              # \u6324\u51FA\u7535\u673A\u65B9\u8109\u51B2\u5F15\u811A\ndir_pin: sb2040:gpio10              # \u6324\u51FA\u7535\u673A\u65B9\u5411\u5F15\u811A\u8BBE\u7F6E\nenable_pin: !sb2040:gpio7           # \u6324\u51FA\u7535\u673A\u65B9\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E\n## \u6267\u884C\u6324\u51FA\u673A\u6821\u51C6\u65F6\uFF0C\u66F4\u65B0\u4EE5\u4E0B\u503C\n## \u6BD4\u5982\u4F60\u8981\u6C42100\u6BEB\u7C73\u7684\u8FDB\u6599\uFF0C\u4F46\u5B9E\u9645\u4E0A\u662F102\uFF1A\n## rotation_distance = <\u65E7rotation_distance> * <\u5B9E\u9645\u6324\u51FA\u957F\u5EA6> / <\u8BF7\u6C42\u7684\u6324\u51FA\u957F\u5EA6>\n## \u6821\u51C6\u6B65\u8FDB\u503C: 22.44=\u65E7\u503C22*\u5B9E\u9645\u503C102/\u76EE\u6807\u503C100\nrotation_distance: 22.44            # \u6B65\u8FDB\u503C\ngear_ratio: 50:17                   # \u51CF\u901F\u6BD4\uFF08\u4F3D\u5229\u7565\u9F7F\u6BD47.5:1 \u5E76\u4E14\u8FD9\u884C\u6CE8\u91CA\u6389\uFF1BBMG\u4E3A50\uFF1A17\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09\nmicrosteps: 16                      # \u7535\u673A\u7EC6\u5206\u8BBE\u7F6E,\u7EC6\u5206\u8D8A\u9AD8\uFF0C\u8D28\u91CF\u8D8A\u9AD8\uFF0C\u4F46\u4E3B\u63A7\u8D1F\u8377\u8D8A\u5927\nfull_steps_per_rotation: 200        # \u5355\u5708\u8109\u51B2\u6570 \uFF08200 \u4E3A 1.8 \u5EA6, 400 \u4E3A 0.9 \u5EA6\uFF09\nnozzle_diameter: 0.400              # \u55B7\u5634\u76F4\u5F84\nfilament_diameter: 1.75             # \u8017\u6750\u76F4\u5F84\nheater_pin: sb2040:gpio6            # \u52A0\u70ED\u68D2\u5F15\u811A,\u63A5\u5230HETA0\n#--------------------------------------------------------------------\n##\u666E\u901A\u70ED\u654F\u914D\u7F6E\nsensor_type: ATC Semitec 104GT-2    # \u4F20\u611F\u5668\u578B\u53F7  (Generic 3950, ATC Semitec 104GT-2\uFF0C PT1000)\nsensor_pin: sb2040:gpio27            # \u4F20\u611F\u5668\u5F15\u811A  \n#--------------------------------------------------------------------\n##pt1000\u914D\u7F6E\n#sensor_type: PT1000                 # \u4F20\u611F\u5668\u578B\u53F7  (Generic 3950, ATC Semitec 104GT-2\uFF0C PT1000)\n#pullup_resistor: 1000               # \u70ED\u654F\u4E0A\u62C9\u7535\u963B\u4E3A1000\uFF0C\u5982\u679C\u6E29\u5EA6\u4E3A\u8D1F-180\u9700\u8981\u66F4\u6362\u8DF3\u7EBF\n#sensor_pin: sb2040:gpio27           # \u4F20\u611F\u5668\u5F15\u811A \n#--------------------------------------------------------------------\n## PT100\u8BBE\u7F6E \u4EC5V2\u652F\u6301\n#sensor_type: MAX31865                # \u4F20\u611F\u5668\u578B\u53F7\uFF0CPT100\u7248\u672C\n#sensor_pin: sb2040:gpio22            # \u4F20\u611F\u5668\u5F15\u811A\uFF0CPT100\u7248\u672C\n# spi_software_sclk_pin: sb2040:gpio18\n# spi_software_mosi_pin: sb2040:gpio19\n# spi_software_miso_pin: sb2040:gpio23\n#rtd_reference_r: 430                 # \u4F7F\u752831865\u65F6\u9700\u8981\u5220\u9664\u524D\u9762#\n#rtd_nominal_r: 100  ## \u4F7F\u7528PT100\u65F6\u8BF7\u8BBE\u7F6E\u4E3A100\uFF0C\u4F7F\u7528PT1000\u65F6\u8BF7\u8BBE\u7F6E\u4E3A1000\n#--------------------------------------------------------------------\nmin_temp: 10                        # \u6700\u5C0F\u6E29\u5EA6\uFF08\u6CE8\u610F\uFF1A\u6D4B\u91CF\u6E29\u5EA6\u8D85\u8FC7\u8BBE\u5B9A\u503C\u4F1A\u89E6\u53D1\u7D27\u6025\u505C\u6B62\uFF09\nmax_temp: 350                       # \u6700\u5927\u6E29\u5EA6\uFF08\u6CE8\u610F\uFF1A\u6D4B\u91CF\u6E29\u5EA6\u8D85\u8FC7\u8BBE\u5B9A\u503C\u4F1A\u89E6\u53D1\u7D27\u6025\u505C\u6B62\uFF09\nmax_power: 1.0                      # \u6700\u5927\u529F\u7387\nmin_extrude_temp: 170               # \u6700\u5C0F\u6324\u51FA\u6E29\u5EA6\uFF08\u81F3\u5C11\u9700\u8981\u8FBE\u5230\u8FD9\u4E2A\u6E29\u5EA6\uFF0C\u6324\u51FA\u673A\u624D\u80FD\u6324\u51FA\uFF09\npressure_advance: 0.05              # \u63A8\u8FDB\u538B\u529B-\u5C3D\u91CF\u5C06\u538B\u529B\u4FDD\u6301\u57281.0\u4EE5\u4E0B(\u538B\u529B\u63D0\u524D\u662F\u8C03\u6574\u8FD9\u4E2A)\n#\u538B\u529B\u63D0\u524D\u8C03\u6574\u65B9\u6CD5:https://www.klipper3d.org/zh/Pressure_Advance.html\npressure_advance_smooth_time: 0.040 # \u5E73\u7A33\u63A8\u8FDB\u65F6\u95F4-\u9ED8\u8BA4\u503C\u4E3A0.040\n#max_extrude_only_distance: 200.0   # \u6324\u51FA\u6D41\u91CF\u62A5\u9519\u53EF\u4EE5\u6CE8\u91CA\u8FD9\u4E2A\uFF0C\u4F46\u662F\u5EFA\u8BAE\u91CD\u65B0\u5207\u7247\n#\u55B7\u5634\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A  "PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol = pid                # PID\u55B7\u5634\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\npid_kp = 26.213              # PID\u55B7\u5634\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\npid_ki = 1.304               # PID\u55B7\u5634\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\npid_kd = 131.721             # PID\u55B7\u5634\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\nstep_pulse_duration: 0.000004     \n#--------------------------------------------------------------------\n[tmc2209 extruder]                  # \u6324\u51FA\u673A\u9A71\u52A8\u914D\u7F6E- TMC2209\nuart_pin: sb2040:gpio8              # \u901A\u8BAF\u7AEF\u53E3Pin\u811A\u5B9A\u4E49\ninterpolate: False                  # \u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C\uFF08\u5F00\u542F\u662FTrue\uFF0C\u5173\u95ED\u662FFalse\uFF09\nrun_current: 0.6                    # \u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C\nsense_resistor: 0.110               # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\nstealthchop_threshold: 500          # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n\n#####################################################################\n#                             \u98CE\u6247\u914D\u7F6E\n#####################################################################\n[fan]                        # \u6A21\u578B\u51B7\u5374\u98CE\u6247\npin: sb2040:gpio13           # \u4FE1\u53F7\u63A5\u53E3\nkick_start_time: 0.5         # \u542F\u52A8\u65F6\u95F4\uFF08\u52FF\u52A8\uFF09\noff_below: 0.10              # \u52FF\u52A8\n#--------------------------------------------------------------------\n[heater_fan \u5589\u7BA1\u6563\u70ED]         # \u5589\u7BA1\u51B7\u5374\u98CE\u6247\npin: sb2040:gpio14           # \u4FE1\u53F7\u63A5\u53E3\nmax_power: 1.0               # \u6700\u5927\u8F6C\u901F\nkick_start_time: 0.5         # \u542F\u52A8\u65F6\u95F4\uFF08\u52FF\u52A8\uFF09\nheater: extruder             # \u5173\u8054\u7684\u8BBE\u5907\uFF1A\u6324\u51FA\u673A\nheater_temp: 50              # \u6324\u51FA\u673A\u8FBE\u5230\u591A\u5C11\u5EA6\u542F\u52A8\u98CE\u6247\nfan_speed: 1.0               # \u98CE\u6247\u8F6C\u901F\n\n#####################################################################\n#                            X\u9650\u4F4D\u914D\u7F6E\n#####################################################################\n[stepper_x]\nendstop_pin: !sb2040:gpio29\n## SB2040\u677F\u6709gpio25, gpio28, gpio29\u4E09\u4E2A\u9650\u4F4D\u5F15\u811A\u53EF\u7528\uFF0Cgpio25\u652F\u6301\u9AD8\u538B\u8F93\u5165\u3002\u6309\u7167\u5B9E\u9645\u63A5\u7EBF\u4FEE\u6539\u914D\u7F6E\n\n#####################################################################\n#                           SB\u5934led\u914D\u7F6E\n#####################################################################\n[neopixel sb_leds]\npin: sb2040:gpio12          # \u4FE1\u53F7\u63A5\u53E3\nchain_count: 3              # \u706F\u73E0\u6570\u91CF\ncolor_order: GRBW           # \u706F\u73E0\u7C7B\u578B\ninitial_RED: 0.4            # \ninitial_GREEN: 0.8          # \ninitial_BLUE: 1             # \ninitial_WHITE: 0.0          # \u8FDE\u63A5\u540E\u4F1A\u4EAE\u8D77\u6765\n\n#####################################################################\n#                           PL08N\u611F\u5E94\u63A2\u5934\n#####################################################################\n# PL08N\u611F\u5E94\u63A2\u5934\u4E0D\u4F4E\u4E8E\u55B7\u5634\u9AD8\u5EA6\uFF0C\u4EC5\u7528\u4E8E\u8C03\u5E73,\u5982\u679C\u4F60\u7684PL08N\u662FNO\uFF08\u5E38\u5F00\uFF09\uFF0C\u8BF7\u5C06\u66F4\u6539pin\u6DFB\u52A0\u5230\uFF01 \n#[probe]\n#pin: ^sb2040:gpio25          # \u4FE1\u53F7\u63A5\u53E3\n#x_offset: 0                  # X\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\uFF0C\u9700\u8981\u81EA\u884C\u786E\u5B9A\u504F\u79FB\u91CF\n#y_offset: 25.0               # Y\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\uFF0C\u9700\u8981\u81EA\u884C\u786E\u5B9A\u504F\u79FB\u91CF\n#z_offset: 0                  # Z\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\uFF0C\u9700\u8981\u81EA\u884C\u786E\u5B9A\u504F\u79FB\u91CF\n#speed: 10.0                  # \u8C03\u5E73\u901F\u5EA6\n#samples: 3                   # \u91C7\u6837\u6B21\u6570\n#samples_result: median       # \u53D6\u503C\u65B9\u5F0F\uFF08\u9ED8\u8BA4median-\u4E2D\u4F4D\u6570\uFF09\n#sample_retract_dist: 4.0     # \u8C03\u5E73\u56DE\u7F29\u8DDD\u79BB\n#samples_tolerance: 0.010     # \u91C7\u6837\u516C\u5DEE\uFF08\u6CE8\u610F\u8FC7\u5C0F\u7684\u503C\u53EF\u80FD\u9020\u6210\u91C7\u6837\u6B21\u6570\u589E\u52A0\uFF09\n#samples_tolerance_retries: 3 # \u8D85\u516C\u5DEE\u91CD\u8BD5\u6B21\u6570\n\n#--------------------------------------------------------------------\n#[bltouch]\n#sensor_pin: ^sb2040:gpio29   # \u4FE1\u53F7\u63A5\u53E3\n#control_pin: sb2040:gpio28   # \u8235\u673A\u63A7\u5236\n#x_offset: -26.1              # X\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\uFF0C\u9700\u8981\u81EA\u884C\u786E\u5B9A\u504F\u79FB\u91CF\n#y_offset: -15.3              # Y\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\uFF0C\u9700\u8981\u81EA\u884C\u786E\u5B9A\u504F\u79FB\u91CF\n#z_offset: 2.1                # Z\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\uFF0C\u9700\u8981\u81EA\u884C\u786E\u5B9A\u504F\u79FB\u91CF\n\n'})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(_,{...n})}):_(n)}},50065:function(n,e,s){s.d(e,{Z:function(){return p},a:function(){return r}});var t=s(67294);let o={},i=t.createContext(o);function r(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);