"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["55483"],{78777:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>_,default:()=>c,assets:()=>p,toc:()=>a,frontMatter:()=>o});var r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-super/fly-super5/cfg","title":"Klipper\u53C2\u8003\u914D\u7F6E","description":"\u793A\u4F8B\u914D\u7F6E","source":"@site/docs/ProductDoc/MainBoard/fly-super/fly-super5/cfg.mdx","sourceDirName":"ProductDoc/MainBoard/fly-super/fly-super5","slug":"/ProductDoc/MainBoard/fly-super/fly-super5/cfg","permalink":"/fly-docs-next/docs/ProductDoc/MainBoard/fly-super/fly-super5/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-super/fly-super5/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1729848160000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"Klipper\u53C2\u8003\u914D\u7F6E"},"sidebar":"tutorialSidebar","previous":{"title":"\u4E3B\u677F\u63A5\u7EBF","permalink":"/fly-docs-next/docs/ProductDoc/MainBoard/fly-super/fly-super5/wiring"},"next":{"title":"CAN\u6865\u63A5","permalink":"/fly-docs-next/docs/ProductDoc/MainBoard/fly-super/fly-super5/canbridge"}}'),i=t("52676"),s=t("79938");let o={sidebar_position:5,sidebar_label:"Klipper\u53C2\u8003\u914D\u7F6E"},_="Klipper\u53C2\u8003\u914D\u7F6E",p={},a=[{value:"\u793A\u4F8B\u914D\u7F6E",id:"\u793A\u4F8B\u914D\u7F6E",level:2}];function d(n){let e={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"klipper\u53C2\u8003\u914D\u7F6E",children:"Klipper\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,i.jsx)(e.h2,{id:"\u793A\u4F8B\u914D\u7F6E",children:"\u793A\u4F8B\u914D\u7F6E"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cfg",children:'####################################################################################\n#                         3D MELLOW /Fly-Super5                                    #\n####################################################################################\n## Fly-Super5-PRO\u8D44\u6599\u7F51\u5740\uFF1A\n## Fly-Super5-PRO\u539F\u7406\u56FE\u7F51\u5740\uFF1A\n## FLY \u5B98\u65B9\u6DD8\u5B9D\u5E97\uFF1Ahttps://shop126791347.taobao.com/shop/view_shop.htm?spm=a230r.1.14.4.1a4840a8hyvpPJ&user_number_id=2464680006\n## \u5982\u9700\u552E\u540E\uFF0C\u8BF7\u8054\u7CFB\u6DD8\u5B9D\u5BA2\u670D\n## FLY \u552E\u540E\u6280\u672F\u652F\u6301\u7FA4\uFF1A621032883\n## FLY-RRF\u56FA\u4EF6\u4EA4\u6D41\u7FA4\uFF1A786561979\n\n#####################################################################\n#                               \u6CE8\u610F\u4E8B\u9879                              #\n#####################################################################\n##***\u9700\u8981\u66F4\u6539/\u68C0\u67E5\u7684\u4E8B\u9879\uFF1A***\n## MCU \u8DEF\u5F84                                [mcu] \n## \u6253\u5370\u673A\u6D3B\u52A8\u8303\u56F4                           xyz\u7684position   \n## \u70ED\u654F\u7535\u963B\u7C7B\u578B                             [extruder] \u548C [heater_bed]\n## Z\u8F74\u9650\u4F4D\u5F00\u5173\u505C\u6B62\u4F4D\u7F6E                      [safe_z_home] \n## Z\u8F74\u9650\u4F4D\u5F00\u5173\u504F\u79FB\u4F4D\u7F6E                      [stepper_z] \n## PID \u6821\u51C6                                [extruder] \u548C [heater_bed] \n## \u5FAE\u8C03\u6324\u51FA\u673A\u7535\u673A\u6B65\u8FDB\u503C                     [extruder] \n\n#####################################################################\n#                               \u6587\u4EF6\u8C03\u7528                              #\n#####################################################################\n#[include fluidd.cfg]          # FLUIDD\u8C03\u7528\u6587\u4EF6\u3002\n#[include mainsail.cfg]        # MAINSDIL\u8C03\u7528\u6587\u4EF6\u3002\n#\u9700\u8981\u81EA\u884C\u786E\u5B9A\u4F7F\u7528\u54EA\u4E2A\u6587\u4EF6\n\n#####################################################################\n#                               \u4E3B\u677F\u914D\u7F6E                               #\n#####################################################################\n[mcu]                           # FLY\u4E3B\u677FID\nserial: /dev/serial/by-id/usb-Klipper_stm32f407xx_XXXXXXXXXXXXXXXXXXXXX\n### \u67E5\u8BE2usb\u56FA\u4EF6id\u662F\uFF1Als -l /dev/serial/by-id/\n### \u628A/dev/serial/by-id/usb-Klipper_stm32f407xx_XXXXXXXXXXXXXXXXXXXXX\u66FF\u6362\u67E5\u8BE2\u5230\u7684id\n#canbus_uuid: e51d5c71a901\n### \u67E5\u8BE2can\u56FA\u4EF6id\u662F\uFF1A~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n### can\u7684id\u9700\u8981\u628Aserial\u66FF\u6362\u6210canbus_uuid: \u540E\u9762\u6DFB\u52A0id \n\n#####################################################################\n#                            \u673A\u578B\u548C\u52A0\u901F\u5EA6                            #\n#####################################################################\n[printer]                       # \u6253\u5370\u673A\u8BBE\u7F6E\nkinematics: corexy              # \u8FD0\u52A8\u5B66\u7ED3\u6784\u5206\u4E3A\uFF1A\u7B1B\u5361\u5C14\u548Ccorexy\u7B49\u7B49\u3002\u7B1B\u5361\u5C14\uFF1Acartesian\nmax_velocity: 300               # \u6253\u5370\u673A\u6700\u5927\u901F\u5EA6   \nmax_accel: 3000                 # \u6700\u5927\u52A0\u901F\u5EA6 \u6700\u59273000\nmax_z_velocity: 15              # z\u8F74\u6700\u5927\u901F\u5EA6\nmax_z_accel: 100                # z\u8F74\u6700\u5927\u52A0\u901F\u5EA6\nsquare_corner_velocity: 5.0     # \u65B9\u5F62\u62D0\u89D2\u901F\u5EA6\uFF0C\u5C0F\u4E00\u70B9\u53EF\u4EE5\u6709\u6548\u907F\u514D\u5E73\u53F0\u91CD\u5E26\u6765\u7684\u60EF\u6027\n\n#####################################################################\n#                             \u6E29\u5EA6\u76D1\u63A7                               #\n#####################################################################\n[temperature_sensor Fly-Super5-PRO]    # FLY\u4E3B\u677F\u6E29\u5EA6\nsensor_type: temperature_mcu      # \u5173\u8054mcu\uFF08\u9ED8\u8BA4\uFF09\n#--------------------------------------------------------------------\n[temperature_sensor FLY-\u03C0]        # \u4E0A\u4F4D\u673A\u6E29\u5EA6\nsensor_type: temperature_host     # \u5173\u8054\u4E0A\u4F4D\u673A\n#--------------------------------------------------------------------\n# [temperature_sensor Box]          # \u7BB1\u5185\u6E29\u5EA6\u6E29\u5EA6 \uFF08\u9700\u8981\u589E\u52A0\u4E00\u9897\u6E29\u611F,\u53C2\u8003\u914D\u7F6E\uFF09\n# sensor_type: ATC Semitec 104GT-2  # \u4F20\u611F\u5668\u578B\u53F7\n# sensor_pin: PA4                   # \u4FE1\u53F7\u63A5\u53E3\n\n#####################################################################\n#                              \u70ED\u5E8A\u7F51\u683C\u6821\u51C6\n#####################################################################\n[bed_mesh]\nspeed: 50                    # \u6821\u51C6\u901F\u5EA6\nhorizontal_move_z: 5         # \u63A2\u9488\u524D\u5F80\u4E0B\u4E00\u4E2A\u70B9\u4E4B\u524DZ\u9700\u8981\u62AC\u5347\u7684\u9AD8\nmesh_min: 30,30              # \u6700\u5C0F\u6821\u51C6\u70B9\u5750\u6807x\uFF0Cy\nmesh_max: 270, 270           # \u6700\u5927\u6821\u51C6\u70B9\u5750\u6807x\uFF0Cy\nprobe_count: 4,4             # \u91C7\u6837\u70B9\u6570\uFF084X4\u4E3A16\u70B9\uFF09\nmesh_pps: 2,2                # \u8865\u5145\u91C7\u6837\u70B9\u6570\nalgorithm: bicubic           # \u7B97\u6CD5\u6A21\u578B\nbicubic_tension: 0.2         # \u7B97\u6CD5\u63D2\u503C\u4E0D\u8981\u52A8\n\n#####################################################################\n#             X/Y\u6B65\u8FDB\u7535\u673A\u8BBE\u7F6E (X/Y Stepper Settings)                 # \n#####################################################################\n#   B Motor ---- Motor A \n#   |                  |\n#   |------\u6324\u51FA\u673A------|\n#   |                  |\n#   |                  |\n#          \u6B63\u524D\u65B9   \n#####################################################################\n#                  X \u8F74\u6B65\u8FDB\u7535\u673A   DRIVER0  (B Motor)                 #\n#####################################################################\n#\u6CE8\uFF1A\u63A5\u5B8C\u7EBF\u9700\u6D4B\u8BD5\u8FD0\u884C\u65B9\u5411\n[stepper_x]\nstep_pin: PE14                      # X\u8F74\u7535\u673A\u8109\u51B2\u5F15\u811A\u8BBE\u7F6E\ndir_pin: PE15                       # X\u8F74\u7535\u673A\u8FD0\u884C\u5F15\u811A\u8BBE\u7F6E,\u65B9\u5411\u6309\u5B9E\u9645\u5224\u65AD\uFF0C\u52A0\u611F\u53F9\u53F7\u4F1A\u8BA9\u8FD0\u884C\u65B9\u5411\u53CD\u8F6C\nenable_pin: !PB11                   # X\u8F74\u7535\u673A\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E,\u4F7F\u80FD\u5F15\u811A\u9700\u8981\u52A0\u611F\u53F9\u53F7\uFF0C\u5426\u8005\u7535\u673A\u4E0D\u5DE5\u4F5C\nrotation_distance: 40               # \u4E3B\u52A8\u5E26\u8F6E\u5468\u957Fmm\uFF082GT-20T\u5E26\u8F6E40\uFF0C2GT-16T\u5E26\u8F6E32\uFF09\nmicrosteps: 16                      # \u7535\u673A\u7EC6\u5206\u8BBE\u7F6E\uFF0C\u7EC6\u5206\u8D8A\u9AD8\uFF0C\u8D28\u91CF\u8D8A\u9AD8\uFF0C\u4F46\u4E3B\u63A7\u8D1F\u8377\u8D8A\u5927\nfull_steps_per_rotation: 200        # \u7535\u673A\u5355\u5708\u6240\u9700\u8109\u51B2\u6570\uFF081.8\u5EA6\u7535\u673A:200\uFF0C0.9\u5EA6\u7535\u673A:400\uFF09\nendstop_pin: PB7                    # \u9650\u4F4D\u5F00\u5173PIN\u811A,\u5EFA\u8BAE\u5E38\u95ED\u63A5\u5E38\u95ED\n###\u63A5\u5E38\u95ED\u540E\u662F\u89E6\u53D1\u72B6\u6001\uFF0C\u52A0\u611F\u53F9\u53F7\u53EF\u4EE5\u53CD\u8F6C\u8FD9\u4E2A\u72B6\u6001\uFF0C\u4E07\u4E00\u65AD\u7EBF\u65F6\u5019\u53EF\u4EE5\u907F\u514D\u649E\u673A\nposition_min: 0                     # \u8F6F\u9650\u4F4D\u6700\u5C0F\u884C\u7A0B\nposition_endstop: 120               # \u8F6F\u9650\u4F4D\u6700\u5927\u884C\u7A0B (250mm-300mm-350mm)\uFF08voron0.1\u662F120\uFF09\nposition_max: 120                   # \u673A\u68B0\u9650\u4F4D\u6700\u5927\u884C\u7A0B (250mm-300mm-350mm)\uFF08voron0.1\u662F120\uFF09\nhoming_speed: 50                    # \u590D\u4F4D\u901F\u5EA6\uFF0C\u6700\u5927\u4E3A100.\u5F52\u4F4D\u901F\u5EA6\u5EFA\u8BAE\u522B\u592A\u5FEB\nhoming_retract_dist: 5              # \u7B2C\u4E00\u6B21\u89E6\u53D1\u590D\u4F4D\u5F00\u5173\u4E4B\u540E\u7684\u540E\u9000\u8DDD\u79BB\nhoming_positive_dir: true           # \u590D\u4F4D\u65B9\u5411\uFF08\u4E00\u822C\u4E0D\u9700\u8981\u6539\u52A8\uFF09\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n##  \u8BF7\u786E\u4FDD\u9A71\u52A8\u578B\u53F7\u914D\u7F6E\u6B63\u786E (2208 or 2209)\n[tmc2209 stepper_x]                 # X \u9A71\u52A8\u914D\u7F6E -TMC2209\nuart_pin: PB10                      # \u901A\u8BAF\u7AEF\u53E3Pin\u811A\u5B9A\u4E49\n#interpolate: False                 # \u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C\uFF08\u5F00\u542F\u662FTrue\uFF0C\u5173\u95ED\u662FFalse)\nrun_current: 0.8                    # \u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C\uFF08\u5355\u4F4D\uFF1AmA\uFF09\nsense_resistor: 0.110               # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\nstealthchop_threshold: 500          # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n#--------------------------------------------------------------------\n#[tmc5160 stepper_x]                 # \u6324\u51FA\u673A\u9A71\u52A8\u914D\u7F6E- TMC5160\n#cs_pin: PB10                        # SPI \u7247\u9009Pin\u811A\u5B9A\u4E49\n#spi_bus: spi1                       # SPI \u901A\u8BAF\u603B\u7EBF\u5B9A\u4E49\n#run_current: 1.0                    # \u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C\n#interpolate: False                  # \u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C\uFF08\u5F00\u542F\u662FTrue\uFF0C\u5173\u95ED\u662FFalse)\n#sense_resistor: 0.075               # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\uFF08\u5982\u679C\u4F7F\u75285160 Pro\uFF0C\u8BF7\u5C06\u6570\u503C\u4FEE\u6539\u4E3A0.033\uFF09\n#stealthchop_threshold: 500          # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n#####################################################################\n#                 Y \u8F74\u6B65\u8FDB\u7535\u673A     DRIVER01   (B Motor)              #\n#####################################################################\n#\u6CE8\uFF1A\u63A5\u5B8C\u7EBF\u9700\u6D4B\u8BD5\u8FD0\u884C\u65B9\u5411\n[stepper_y]\nstep_pin: PE11                      # Y\u8F74\u7535\u673A\u8109\u51B2\u5F15\u811A\u8BBE\u7F6E\ndir_pin: PE12                       # Y\u8F74\u7535\u673A\u8FD0\u884C\u5F15\u811A\u8BBE\u7F6E,\u65B9\u5411\u6309\u5B9E\u9645\u5224\u65AD\uFF0C\u52A0\u611F\u53F9\u53F7\u4F1A\u8BA9\u8FD0\u884C\u65B9\u5411\u53CD\u8F6C\nenable_pin: !PE13                   # Y\u8F74\u7535\u673A\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E,\u4F7F\u80FD\u5F15\u811A\u9700\u8981\u52A0\u611F\u53F9\u53F7\uFF0C\u5426\u8005\u7535\u673A\u4E0D\u5DE5\u4F5C\nrotation_distance: 40               # \u4E3B\u52A8\u5E26\u8F6E\u5468\u957Fmm\uFF082GT-20T\u5E26\u8F6E40\uFF0C2GT-16T\u5E26\u8F6E32\uFF09\nmicrosteps: 16                      # \u7535\u673A\u7EC6\u5206\u8BBE\u7F6E\uFF0C\u7EC6\u5206\u8D8A\u9AD8\uFF0C\u8D28\u91CF\u8D8A\u9AD8\uFF0C\u4F46\u4E3B\u63A7\u8D1F\u8377\u8D8A\u5927\nfull_steps_per_rotation: 200        # \u7535\u673A\u5355\u5708\u6240\u9700\u8109\u51B2\u6570\uFF081.8\u5EA6\u7535\u673A:200\uFF0C0.9\u5EA6\u7535\u673A:400\uFF09\nendstop_pin: PC7                    # \u9650\u4F4D\u5F00\u5173PIN\u811A,\u5EFA\u8BAE\u5E38\u95ED\u7136\u540E\u6DFB\u52A0\uFF01\u53CD\u8F6C\u72B6\u6001\n###\u63A5\u5E38\u95ED\u540E\u662F\u89E6\u53D1\u72B6\u6001\uFF0C\u52A0\u611F\u53F9\u53F7\u53EF\u4EE5\u53CD\u8F6C\u8FD9\u4E2A\u72B6\u6001\uFF0C\u4E07\u4E00\u65AD\u7EBF\u65F6\u5019\u53EF\u4EE5\u907F\u514D\u649E\u673A\nposition_min: 0                     # \u8F6F\u9650\u4F4D\u6700\u5C0F\u884C\u7A0B\nposition_endstop: 120               # \u8F6F\u9650\u4F4D\u6700\u5927\u884C\u7A0B (250mm-300mm-350mm)\uFF08voron0.1\u662F120\uFF09\nposition_max: 120                   # \u673A\u68B0\u9650\u4F4D\u6700\u5927\u884C\u7A0B (250mm-300mm-350mm)\uFF08voron0.1\u662F120\uFF09\nhoming_speed: 50                    # \u590D\u4F4D\u901F\u5EA6\uFF0C\u6700\u5927\u4E3A100        \u5F52\u4F4D\u901F\u5EA6\u5EFA\u8BAE\u522B\u592A\u5FEB\nhoming_retract_dist: 5              # \u7B2C\u4E00\u6B21\u89E6\u53D1\u590D\u4F4D\u5F00\u5173\u4E4B\u540E\u7684\u540E\u9000\u8DDD\u79BB\nhoming_positive_dir: true           # \u590D\u4F4D\u65B9\u5411\uFF08\u4E00\u822C\u4E0D\u9700\u8981\u6539\u52A8\uFF09\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n##  \u8BF7\u786E\u4FDD\u9A71\u52A8\u578B\u53F7\u914D\u7F6E\u6B63\u786E (2208 or 2209)\n[tmc2209 stepper_y]                 # Y\u9A71\u52A8\u914D\u7F6E -TMC2209\nuart_pin: PE10                      # \u901A\u8BAF\u7AEF\u53E3Pin\u811A\u5B9A\u4E49\n#interpolate: False                 # \u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C\uFF08\u5F00\u542F\u662FTrue\uFF0C\u5173\u95ED\u662FFalse)\nrun_current: 0.8                    # \u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C\uFF08\u5355\u4F4D\uFF1AmA\uFF09\nsense_resistor: 0.110               # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\nstealthchop_threshold: 500          # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n#--------------------------------------------------------------------\n#[tmc5160 stepper_y]                 # \u6324\u51FA\u673A\u9A71\u52A8\u914D\u7F6E- TMC5160\n#cs_pin: PE10                        # SPI \u7247\u9009Pin\u811A\u5B9A\u4E49\n#spi_bus: spi1                       # SPI \u901A\u8BAF\u603B\u7EBF\u5B9A\u4E49\n#run_current: 1.0                    # \u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C\n#interpolate: False                  # \u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C\uFF08\u5F00\u542F\u662FTrue\uFF0C\u5173\u95ED\u662FFalse)\n#sense_resistor: 0.075               # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\uFF08\u5982\u679C\u4F7F\u75285160 Pro\uFF0C\u8BF7\u5C06\u6570\u503C\u4FEE\u6539\u4E3A0.033\uFF09\n#stealthchop_threshold: 500          # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n\n#####################################################################\n#                     Z\u8F74\u6B65\u8FDB\u7535\u673A \uFF08Z Stepper Settings\uFF09              #\n#####################################################################\n#   |------Z1------|\n#   |              |\n#   |              |\n#   |              |\n#   |-----\u663E\u793A\u5C4F----|\n\n#####################################################################\n#                           Z\u8F74\u6B65\u8FDB\u7535\u673A  DRIVER02                    #\n#####################################################################\n#\u6CE8\uFF1A\u63A5\u5B8C\u7EBF\u9700\u6D4B\u8BD5\u8FD0\u884C\u65B9\u5411\n[stepper_z]\nstep_pin: PE7                 # z\u8F74\u7535\u673A\u8109\u51B2\u5F15\u811A\u8BBE\u7F6E\ndir_pin: !PE8                 # z\u8F74\u7535\u673A\u65B9\u5411\u5F15\u811A\u8BBE\u7F6E,\u65B9\u5411\u5F15\u811A\u9700\u8981\u6309\u5B9E\u9645\u5224\u65AD\uFF0C\u52A0\u611F\u53F9\u53F7\u4F1A\u8BA9\u8FD0\u884C\u65B9\u5411\u53CD\u8F6C\nenable_pin: !PE9              # z\u8F74\u7535\u673A\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E,\u4F7F\u80FD\u5F15\u811A\u9700\u8981\u52A0\u611F\u53F9\u53F7\uFF0C\u5426\u8005\u7535\u673A\u4E0D\u5DE5\u4F5C\n### T8x4\u4E1D\u6760\u3002\u65CB\u8F6C\u4E00\u5708\uFF0C\u70ED\u5E8A\u5E8A\u53EF\u79FB\u52A84\u6BEB\u7C73 \n### \u8BF7\u6839\u636E\u8D2D\u4E70\u7684\u4E1D\u6746\u53C2\u6570\u8FDB\u884C\u4FEE\u6539\nrotation_distance: 4          # \u4E1D\u6746\u5BFC\u7A0B\u4E3A 4\nfull_steps_per_rotation: 200  # \u7535\u673A\u5355\u5708\u6240\u9700\u8109\u51B2\u6570\uFF081.8\u5EA6\u7535\u673A:200\uFF0C0.9\u5EA6\u7535\u673A:400\nmicrosteps: 16                # \u7535\u673A\u7EC6\u5206\u8BBE\u7F6E,\u7EC6\u5206\u8D8A\u9AD8\uFF0C\u8D28\u91CF\u8D8A\u9AD8\uFF0C\u4F46\u4E3B\u63A7\u8D1F\u8377\u8D8A\u5927\nendstop_pin: PC6              # \u9650\u4F4D\u5F00\u5173PIN\u811A,\u5EFA\u8BAE\u5E38\u95ED\u7136\u540E\u6DFB\u52A0\uFF01\u53CD\u8F6C\u72B6\u6001\n## position_endstop \u662F\u55B7\u5634\u76F8\u5BF9\u4E8E\u6253\u5370\u8868\u9762(Z0)\u5230Z\u9650\u4F4D\u505C\u6B62\u89E6\u53D1\u70B9\u7684\u4F4D\u7F6E(\u5355\u4F4D:mm)\n## \u6B63\u6570\u503C = \u9AD8\u4E8E\u5E73\u53F0\u7684\u7EC8\u6B62\u70B9\uFF0C\u8D1F\u6570\u503C = \u4F4E\u4E8E\u5E73\u53F0\u7684\u7684\u7EC8\u6B62\u70B9\n## \u589E\u52A0position_ endstop\u7684\u6570\u503C\u4F1A\u4F7F\u55B7\u5634\u66F4\u9760\u8FD1\u5E8A\n## \u5728\u8FD0\u884CZ_ENDSTOP_CALIBRATE\u4E4B\u540E\uFF0Cposition_endstop\u5C06\u5B58\u50A8\u5728CFG\u914D\u7F6E\u7684\u6700\u540E\nposition_min: -15             # \u914D\u7F6E\u55B7\u5634\u6E05\u6D01\u9700\u8981-5\u5DE6\u53F3\nposition_endstop: 120         # \u8F6F\u9650\u4F4D\u6700\u5927\u884C\u7A0B (250mm-300mm-350mm)\uFF08voron0.1\u662F120\uFF09\nposition_max: 120             # \u673A\u68B0\u9650\u4F4D\u6700\u5927\u884C\u7A0B (250mm-300mm-350mm)\uFF08voron0.1\u662F120\uFF09\nhoming_speed: 5               # \u590D\u4F4D\u901F\u5EA6-\u6700\u5927 20\nsecond_homing_speed: 3        # \u4E8C\u6B21\u590D\u4F4D\u901F\u5EA6-\u6700\u5927 10\nhoming_retract_dist: 0        # \u540E\u64A4\u8DDD\u79BB\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n[tmc2209 stepper_z]\nuart_pin: PA4                 # \u9A71\u52A8\u901A\u4FE1\u7AEF\u53E3\ninterpolate: false            # \u5FAE\u6B65\u63D2\u503C256\nrun_current: 0.8              # \u8FD0\u884C\u7535\u6D41mA\nsense_resistor: 0.110         # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\nstealthchop_threshold: 500    # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n#--------------------------------------------------------------------\n#[tmc5160 stepper_z]            # \u6324\u51FA\u673A\u9A71\u52A8\u914D\u7F6E- TMC5160\n#cs_pin: PA4                    # SPI \u7247\u9009Pin\u811A\u5B9A\u4E49\n#spi_bus: spi3                  # SPI \u901A\u8BAF\u603B\u7EBF\u5B9A\u4E49\n#run_current: 1.0               # \u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C\n#interpolate: False             # \u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C\uFF08\u4E0D\u5EFA\u8BAE\u5F00\u542F\uFF09\n#sense_resistor: 0.075          # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\uFF08\u5982\u679C\u4F7F\u75285160 Pro\uFF0C\u8BF7\u5C06\u6570\u503C\u4FEE\u6539\u4E3A0.033\uFF09\n#stealthchop_threshold: 500     # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n\n#####################################################################\n#                     E0 \u6324\u51FA\u673A\u8BBE\u7F6E \uFF08E0 Settings\uFF09                   # \n#####################################################################\n#DRIVER03\n[extruder]                          # \u6324\u51FA\u673A\nstep_pin: PE4                       # \u6324\u51FA\u7535\u673A\u65B9\u8109\u51B2\u5F15\u811A\ndir_pin: PE5                        # \u6324\u51FA\u7535\u673A\u65B9\u5411\u5F15\u811A\u8BBE\u7F6E\nenable_pin: !PC1                    # \u6324\u51FA\u7535\u673A\u65B9\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E\n## \u6267\u884C\u6324\u51FA\u673A\u6821\u51C6\u65F6\uFF0C\u66F4\u65B0\u4EE5\u4E0B\u503C\n## \u6BD4\u5982\u4F60\u8981\u6C42100\u6BEB\u7C73\u7684\u8FDB\u6599\uFF0C\u4F46\u5B9E\u9645\u4E0A\u662F98\u6BEB\u7C73\uFF1A\n## \u65B0\u503C=\u65E7\u503C x\uFF08\u5B9E\u9645\u6324\u51FA\u957F\u5EA6/\u76EE\u6807\u957F\u5EA6\uFF09\n## \u6821\u51C6\u6B65\u8FDB\u503C: 23.1325301 = \u65E7\u503C22.6789511*\uFF08\u5B9E\u9645\u503C102/\u76EE\u6807\u503C100\uFF09\nrotation_distance: 22.6789511       # \u6B65\u8FDB\u503C-Bondtech 5mm \u9A71\u52A8\u9F7F\u8F6E\ngear_ratio: 50:17                   # \u51CF\u901F\u6BD4\uFF08\u4F3D\u5229\u7565\u9F7F\u6BD47.5:1 \u5E76\u4E14\u8FD9\u884C\u6CE8\u91CA\u6389\uFF1BBMG\u4E3A50\uFF1A17\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09\nmicrosteps: 16                      # \u7535\u673A\u7EC6\u5206\u8BBE\u7F6E,\u7EC6\u5206\u8D8A\u9AD8\uFF0C\u8D28\u91CF\u8D8A\u9AD8\uFF0C\u4F46\u4E3B\u63A7\u8D1F\u8377\u8D8A\u5927\nfull_steps_per_rotation: 200        # \u5355\u5708\u8109\u51B2\u6570 \uFF08200 \u4E3A 1.8 \u5EA6, 400 \u4E3A 0.9 \u5EA6\uFF09\nnozzle_diameter: 0.400              # \u55B7\u5634\u76F4\u5F84\nfilament_diameter: 1.75             # \u8017\u6750\u76F4\u5F84\nheater_pin: PD12                    # \u52A0\u70ED\u68D2\u5F15\u811A,\u63A5\u5230HETA0\nsensor_type: ATC Semitec 104GT-2    # \u4F20\u611F\u5668\u578B\u53F7  (Generic 3950, ATC Semitec 104GT-2\uFF0C PT1000)\npullup_resistor:2200                # \u4E0A\u62C9\u7535\u963B\nsensor_pin: PC4                     # \u4F20\u611F\u5668\u5F15\u811A,\u63A5\u5230ADC-1\nmin_temp: 10                        # \u6700\u5C0F\u6E29\u5EA6\uFF08\u6CE8\u610F\uFF1A\u6D4B\u91CF\u6E29\u5EA6\u8D85\u8FC7\u8BBE\u5B9A\u503C\u4F1A\u89E6\u53D1\u7D27\u6025\u505C\u6B62\uFF09\nmax_temp: 350                       # \u6700\u5927\u6E29\u5EA6\uFF08\u6CE8\u610F\uFF1A\u6D4B\u91CF\u6E29\u5EA6\u8D85\u8FC7\u8BBE\u5B9A\u503C\u4F1A\u89E6\u53D1\u7D27\u6025\u505C\u6B62\uFF09\nmax_power: 1.0                      # \u6700\u5927\u529F\u7387\nmin_extrude_temp: 170               # \u6700\u5C0F\u6324\u51FA\u6E29\u5EA6\uFF08\u81F3\u5C11\u9700\u8981\u8FBE\u5230\u8FD9\u4E2A\u6E29\u5EA6\uFF0C\u6324\u51FA\u673A\u624D\u80FD\u6324\u51FA\uFF09\npressure_advance: 0.05              # \u63A8\u8FDB\u538B\u529B-\u5C3D\u91CF\u5C06\u538B\u529B\u4FDD\u6301\u57281.0\u4EE5\u4E0B(\u538B\u529B\u63D0\u524D\u662F\u8C03\u6574\u8FD9\u4E2A)\n#\u538B\u529B\u63D0\u524D\u8C03\u6574\u65B9\u6CD5:https://www.klipper3d.org/zh/Pressure_Advance.html\npressure_advance_smooth_time: 0.040 # \u5E73\u7A33\u63A8\u8FDB\u65F6\u95F4-\u9ED8\u8BA4\u503C\u4E3A0.040\n#max_extrude_only_distance: 200.0   # \u6324\u51FA\u6D41\u91CF\u62A5\u9519\u53EF\u4EE5\u6CE8\u91CA\u8FD9\u4E2A\uFF0C\u4F46\u662F\u5EFA\u8BAE\u91CD\u65B0\u5207\u7247\n#\u55B7\u5634\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A  "PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol = pid                # PID\u55B7\u5634\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\npid_kp = 26.213              # PID\u55B7\u5634\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\npid_ki = 1.304               # PID\u55B7\u5634\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\npid_kd = 131.721             # PID\u55B7\u5634\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n[tmc2209 extruder]                  # \u6324\u51FA\u673A\u9A71\u52A8\u914D\u7F6E- TMC2209\nuart_pin: PC0                       # \u901A\u8BAF\u7AEF\u53E3Pin\u811A\u5B9A\u4E49\n#interpolate: False                 # \u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C\uFF08\u5F00\u542F\u662FTrue\uFF0C\u5173\u95ED\u662FFalse)\nrun_current: 0.8                    # \u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C\nsense_resistor: 0.110               # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\nstealthchop_threshold: 500          # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n#--------------------------------------------------------------------\n#[tmc5160 extruder]                  # \u6324\u51FA\u673A\u9A71\u52A8\u914D\u7F6E- TMC5160\n#cs_pin: PC0                         # SPI \u7247\u9009Pin\u811A\u5B9A\u4E49\n#spi_bus: spi1                       # SPI \u901A\u8BAF\u603B\u7EBF\u5B9A\u4E49\n#run_current: 1.0                    # \u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C\n#interpolate: False                  # \u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C\uFF08\u5F00\u542F\u662FTrue\uFF0C\u5173\u95ED\u662FFalse)\n#sense_resistor: 0.075               # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\uFF08\u5982\u679C\u4F7F\u75285160 Pro\uFF0C\u8BF7\u5C06\u6570\u503C\u4FEE\u6539\u4E3A0.033\uFF09\n#stealthchop_threshold: 500          # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n\n#####################################################################\n#                            \u70ED\u5E8A\u914D\u7F6E                                # \n#####################################################################\n[heater_bed]\nheater_pin: PB0              # \u70ED\u5E8A\u63A5\u53E3,\u63A5\u5230HETA1\nsensor_type: Generic 3950    # \u4F20\u611F\u5668\u578B\u53F7  (Generic 3950, ATC Semitec 104GT-2\uFF0C PT1000)\nsensor_pin: PB1              # \u70ED\u5E8A\u4F20\u611F\u5668\u63A5\u53E3\npullup_resistor:2200\nmax_power: 1.0               # \u70ED\u5E8A\u529F\u7387\nmin_temp: 0                  # \u6700\u5C0F\u6E29\u5EA6\uFF08\u6CE8\u610F\uFF1A\u6D4B\u91CF\u6E29\u5EA6\u8D85\u8FC7\u8BBE\u5B9A\u503C\u4F1A\u89E6\u53D1\u7D27\u6025\u505C\u6B62\uFF09\nmax_temp: 120                # \u6700\u5927\u6E29\u5EA6\uFF08\u6CE8\u610F\uFF1A\u6D4B\u91CF\u6E29\u5EA6\u8D85\u8FC7\u8BBE\u5B9A\u503C\u4F1A\u89E6\u53D1\u7D27\u6025\u505C\u6B62\uFF09\n# \u70ED\u5E8A\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A  "PID_CALIBRATE HEATER=heater_bed TARGET=100"\ncontrol: pid                # PID\u70ED\u5E8A\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\npid_kp: 58.437              # PID\u70ED\u5E8A\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\npid_ki: 2.347               # PID\u70ED\u5E8A\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\npid_kd: 363.769             # PID\u70ED\u5E8A\u6E29\u5EA6\u81EA\u52A8\u6821\u51C6\u9879\uFF08pid\u6821\u51C6\u5B8C\u6210\u540E\uFF0C\u4F1A\u88AB\u6CE8\u91CA\uFF09\n\n#####################################################################\n#                            \u98CE\u6247\u914D\u7F6E                                # \n#####################################################################\n[fan]                        # \u6A21\u578B\u51B7\u5374\u98CE\u6247 \npin: PA0                     # \u4FE1\u53F7\u63A5\u53E3\nkick_start_time: 0.5         # \u542F\u52A8\u65F6\u95F4\uFF08\u52FF\u52A8\uFF09\noff_below: 0.10              # \u52FF\u52A8\n#--------------------------------------------------------------------\n[heater_fan hotend_fan]      # \u5589\u7BA1\u51B7\u5374\u98CE\u6247\npin: PA1                     # \u4FE1\u53F7\u63A5\u53E3\nmax_power: 1.0               # \u6700\u5927\u8F6C\u901F\nkick_start_time: 0.5         # \u542F\u52A8\u65F6\u95F4\uFF08\u52FF\u52A8\uFF09\nheater: extruder             # \u5173\u8054\u7684\u8BBE\u5907\uFF1A\u6324\u51FA\u673A\nheater_temp: 50              # \u6324\u51FA\u673A\u8FBE\u5230\u591A\u5C11\u5EA6\u542F\u52A8\u98CE\u6247\nfan_speed: 1.0               # \u98CE\u6247\u8F6C\u901F\n#--------------------------------------------------------------------\n[heater_fan controller_fan]  # \u7535\u5668\u4ED3\u98CE\u6247\npin: PA2                     # \u4FE1\u53F7\u63A5\u53E3\nmax_power: 1.0               # \u6700\u5927\u8F6C\u901F\nkick_start_time: 0.5         # \u542F\u52A8\u65F6\u95F4\uFF08\u52FF\u52A8\uFF09\nheater: heater_bed           # \u5173\u8054\u7684\u8BBE\u5907\uFF1A\u70ED\u5E8A\nheater_temp: 50              # \u70ED\u5E8A\u8FBE\u5230\u591A\u5C11\u5EA6\u542F\u52A8\u98CE\u6247\nfan_speed: 1.0               # \u98CE\u6247\u8F6C\u901F\n#--------------------------------------------------------------------\n[heater_fan exhaust_fan]     # \u6392\u98CE\u6247\u98CE\u6247\npin: PA3                     # \u4FE1\u53F7\u63A5\u53E3\nmax_power: 1.0               # \u6700\u5927\u8F6C\u901F\nkick_start_time: 0.5         # \u542F\u52A8\u65F6\u95F4\uFF08\u52FF\u52A8\uFF09\nheater: heater_bed           # \u5173\u8054\u7684\u8BBE\u5907\uFF1A\u70ED\u5E8A\nheater_temp: 70              # \u70ED\u5E8A\u8FBE\u5230\u591A\u5C11\u5EA6\u542F\u52A8\u98CE\u6247\nfan_speed: 1.0               # \u98CE\u6247\u8F6C\u901F\n\n#####################################################################\n#                           \u95F2\u7F6E\u5173\u95ED\u70ED\u5E8A                             #\n#####################################################################\n[idle_timeout]\ntimeout: 1800                # \u7A7A\u95F2\u65F6\u95F4\u8D85\u8FC730\u5206\u949F\u5219\u5173\u95ED\u70ED\u5E8A\n\n#####################################################################\n#                           PL08N\u611F\u5E94\u63A2\u5934\n#####################################################################\n# PL08N\u611F\u5E94\u63A2\u5934\u4E0D\u4F4E\u4E8E\u55B7\u5634\u9AD8\u5EA6\uFF0C\u4EC5\u7528\u4E8E\u8C03\u5E73,\u5982\u679C\u4F60\u7684PL08N\u662FNO\uFF08\u5E38\u5F00\uFF09\uFF0C\u8BF7\u5C06\u66F4\u6539pin\u6DFB\u52A0\u5230\uFF01 \n#[probe]\n#pin:                         # \u4FE1\u53F7\u63A5\u53E3\n#x_offset: 0                  # X\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\n#y_offset: 25.0               # Y\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\n#z_offset: 0                  # Z\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\n#speed: 10.0                  # \u8C03\u5E73\u901F\u5EA6\n#samples: 3                   # \u91C7\u6837\u6B21\u6570\n#samples_result: median       # \u53D6\u503C\u65B9\u5F0F\uFF08\u9ED8\u8BA4median-\u4E2D\u4F4D\u6570\uFF09\n#sample_retract_dist: 4.0     # \u8C03\u5E73\u56DE\u7F29\u8DDD\u79BB\n#samples_tolerance: 0.006     # \u91C7\u6837\u516C\u5DEE\uFF08\u6CE8\u610F\u8FC7\u5C0F\u7684\u503C\u53EF\u80FD\u9020\u6210\u91C7\u6837\u6B21\u6570\u589E\u52A0\uFF09\n#samples_tolerance_retries: 3 # \u8D85\u516C\u5DEE\u91CD\u8BD5\u6B21\u6570\n#--------------------------------------------------------------------\n#[bltoch]\n#sensor_pin: ^PC2             # \u4FE1\u53F7\u63A5\u53E3\n#control_pin\uFF1APE6             # \u8235\u673A\u5F15\u811A\n#x_offset: 0                  # X\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\n#y_offset: 25.0               # Y\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\n#z_offset: 0                  # Z\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\n\n#####################################################################\n#                      FLY-Mini 12864 LCD                           #\n#####################################################################\n[board_pins]\naliases:\n    # EXP1 header\n    EXP1_1=PA8, EXP1_3=PA15, EXP1_5=PD0, EXP1_7=PD4, EXP1_9=<GND>,\n    EXP1_2=PA13, EXP1_4=PA14,EXP1_6=PD1, EXP1_8=PD3, EXP1_10=<5V>,\n    # EXP2 header\n    EXP2_1=PB4, EXP2_3=PD7, EXP2_5=PD6, EXP2_7=PD5,  EXP2_9=<GND>,\n    EXP2_2=PB3, EXP2_4=PB6, EXP2_6=PB5, EXP2_8=<RST>, EXP2_10=<5V>\n#--------------------------------------------------------------------\n#[display]\n#lcd_type: uc1701                # \u663E\u793A\u5C4F\u9A71\u52A8\u7C7B\u578B\n#cs_pin: EXP1_3                  # \u663E\u793A\u5C4F\u7247\u9009cs\u5F15\u811A\u8BBE\u7F6E\n#a0_pin: EXP1_4                  # \u663E\u793A\u5C4F\u6570\u636Ea0\u5F15\u811A\u8BBE\u7F6E\n#rst_pin: EXP1_5                 # \u663E\u793A\u5C4F\u590D\u4F4Drst\u811A\u8BBE\u7F6E\n#contrast: 63                    # \u5BF9\u6BD4\u5EA6\n#encoder_pins: ^EXP2_5, ^!EXP2_3 # \u65CB\u8F6C\u7F16\u7801\u5668\uFF08\u65CB\u94AE\u5F00\u5173\uFF09\u5F15\u811A\u8BBE\u7F6E\n#click_pin: ^!EXP1_2             # \u65CB\u8F6C\u7F16\u7801\u5668\uFF08\u65CB\u94AE\u5F00\u5173\uFF09\u786E\u8BA4\u6309\u952E\u7684\u5F15\u811A\u8BBE\u7F6E\n#spi_bus: spi1a                   # \u5FC5\u987B\u6307\u5B9ASPI\u901A\u9053\n#--------------------------------------------------------------------\n#####\u9002\u7528\u4E8EFLY Mini12864\n#[neopixel fly_mini12864]\n#pin: EXP1_6                     # \u663E\u793A\u5C4F\u80CC\u5149\u706F\u63A7\u5236\u5F15\u811A\u8BBE\u7F6E\n#chain_count: 3\n#initial_RED: 0.5                # \u7EA2\u8272LED\u706F\u4EAE\u5EA6\u63A7\u5236\uFF08\u8303\u56F4\uFF1A0-1\uFF09\n#initial_GREEN: 0.5              # \u7EFF\u8272LED\u706F\u4EAE\u5EA6\u63A7\u5236\uFF08\u8303\u56F4\uFF1A0-1\uFF09\n#initial_BLUE: 0.5               # \u84DD\u8272LED\u706F\u4EAE\u5EA6\u63A7\u5236\uFF08\u8303\u56F4\uFF1A0-1\uFF09\n#color_order: RGB                # \u989C\u8272\u987A\u5E8F\n\n#####################################################################\n#                           \u81EA\u5B9A\u4E49gcode\u5B8F                            #\n#####################################################################\n[gcode_macro PRINT_START]          # \u5C06 PRINT_START \u8BBE\u7F6E\u4E3A\u5F00\u59CB\u6253\u5370\u65F6\u7684\u5B8F\uFF0C\u81EA\u5B9A\u4E49\u6253\u5370\u524D\u7684\u52A8\u4F5C\ngcode:\n    G92 E0                         # \u91CD\u7F6E\u6324\u51FA\n    G28                            # \u5F52\u4F4D\u6240\u6709\u8F74\n    G1 Z20 F3000                   # \u62AC\u9AD8\u9F99\u95E8\n    #SET_LED LED=LEDlight RED=0.2 GREEN=0.2 BLUE=0.5   # LED\u706F\u63A7\u5236\n    #M117 Printing                 # \u5411\u5C4F\u5E55\u53D1\u9001\u6587\u672C\n    \n#--------------------------------------------------------------------\n[gcode_macro PRINT_HUAXIAN]        # \u5C06 PRINT_HUAXIAN \u8BBE\u7F6E\u4E3APRINT_START\u540E\u7684\u5B8F\uFF0C\u81EA\u5B9A\u4E49\u6253\u5370\u524D\u7684\u52A8\u4F5C\ngcode:\n    G1 Z5 F3000 \n    G92 E0;              # \u91CD\u7F6E\u6324\u51FA\n    G90                  # \u8BBE\u7F6E\u7EDD\u5BF9\u5750\u6807\u4F53\u7CFB\n    G0 X5 Y1 F6000       # \u79FB\u52A8\u81F3x5 y1\u4F4D\u7F6E\uFF0C\u901F\u5EA6100mm/s\uFF08F6000\uFF0C\u610F\u601D\u4E3A6000mm\u6BCF\u5206\u949F\uFF09\n    G0 Z0.4              # \u79FB\u52A8z\u8F74\u9AD8\u5EA6\u81F30.4\n    G91                  # \u8BBE\u7F6E\u5750\u6807\u4F53\u7CFB\u4E3A\u76F8\u5BF9\u5750\u6807\n    G1 X100 E20 F1200;   # \u79FB\u52A8x\u8F74100mm\uFF0C\u5E76\u6324\u51FA\uFF0C\u66F4\u6539F\u53EF\u66F4\u6539\u6324\u51FA\u7387\n    G1 Y1                # \u79FB\u52A8y\u8F741mm\n    G1 X-100 E20 F1200;  # \u53CD\u65B9\u5411\u79FB\u52A8x\u8F74100mm\uFF0C\u5E76\u6324\u51FA\uFF0C\u66F4\u6539F\u53EF\u66F4\u6539\u6324\u51FA\u7387\n    G0 z5                # \u62AC\u9AD8z\u8F745mm\n    G1 E-5.0 F3600       # \u7F29\u56DE\u8017\u6750\u4E1D\n    G92 E0;              # \u91CD\u7F6E\u6324\u51FA\n    G90                  # \u8BBE\u7F6E\u7EDD\u5BF9\u5750\u6807\u4F53\u7CFB \n\n#--------------------------------------------------------------------\n[gcode_macro PRINT_END]            # \u5C06 PRINT_END \u8BBE\u7F6E\u4E3A\u6253\u5370\u7ED3\u675F\u65F6\u7684\u5B8F\uFF0C\u81EA\u5B9A\u4E49\u6253\u5370\u5B8C\u6210\u4E4B\u540E\u52A8\u4F5C\ngcode:\n    #   Get Boundaries\n    {% set max_x = printer.configfile.config["stepper_x"]["position_max"]|float %}\n    {% set max_y = printer.configfile.config["stepper_y"]["position_max"]|float %}\n    {% set max_z = printer.configfile.config["stepper_z"]["position_max"]|float %}\n    \n    #   Check end position to determine safe directions to move\n    {% if printer.toolhead.position.x < (max_x - 20) %}\n        {% set x_safe = 20.0 %}\n    {% else %}\n        {% set x_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.y < (max_y - 20) %}\n        {% set y_safe = 20.0 %}\n    {% else %}\n        {% set y_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.z < (max_z - 2) %}\n        {% set z_safe = 2.0 %}\n    {% else %}\n        {% set z_safe = max_z - printer.toolhead.position.z %}\n    {% endif %}\n    \n    M400                              # \u7B49\u5F85\u7F13\u51B2\u533A\u6E05\u9664\n    G92 E0                            # \u5C06\u6324\u51FA\u673A\u5F52\u96F6\n    G1 E-10.0 F3600                   # \u7F29\u56DE\u8017\u6750\u4E1D\n    G91                               # \u76F8\u5BF9\u5B9A\u4F4D\n    G0 Z{z_safe} F3600                # \u62AC\u9AD8\u9F99\u95E8\n    G0 X{x_safe} Y{y_safe} F20000     # \u79FB\u52A8\u55B7\u5634\u4EE5\u79FB\u9664\u67B6\u7EBF\n    M104 S0                           # \u5173\u95ED\u6324\u51FA\u5934\n    M140 S0                           # \u5173\u95ED\u70ED\u5E8A\n    M106 S0                           # \u5173\u95ED\u6A21\u578B\u98CE\u6247\n    G90                               # \u8BBE\u7F6E\u7EDD\u5BF9\u5750\u6807\u4F53\u7CFB\n    G0 X{max_x / 2} Y{max_y} F3600    # \u5C06\u55B7\u5634\u505C\u5728\u540E\u90E8\n    BED_MESH_CLEAR                    # \u5378\u8F7D\u7F51\u5E8A\n\n'})})]})}function c(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},79938:function(n,e,t){t.d(e,{Z:function(){return _},a:function(){return o}});var r=t(75271);let i={},s=r.createContext(i);function o(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function _(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);