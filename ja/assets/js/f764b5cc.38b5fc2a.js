"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["46234"],{57831:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>a,default:()=>c,assets:()=>_,toc:()=>p,frontMatter:()=>s});var r=JSON.parse('{"id":"DebugDoc/ref-config/voron2.4","title":"VORON 2.4 \u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u8A2D\u5B9A","description":"","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/voron2.4.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/voron2.4","permalink":"/fly-docs-next/ja/docs/DebugDoc/ref-config/voron2.4","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/voron2.4.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1741075603000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"debugdocSidebar","previous":{"title":"\u30D2\u30FC\u30BF\u306E\u8A31\u5BB9\u8AA4\u5DEE\u8A2D\u5B9A","permalink":"/fly-docs-next/ja/docs/DebugDoc/ref-config/verify_heater"},"next":{"title":"VORON Trident \u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u8A2D\u5B9A","permalink":"/fly-docs-next/ja/docs/DebugDoc/ref-config/trident"}}'),i=t("52676"),o=t("79938");let s={sidebar_position:4},a="VORON 2.4 \u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u8A2D\u5B9A",_={},p=[];function d(n){let e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"voron-24-\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u8A2D\u5B9A",children:"VORON 2.4 \u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u8A2D\u5B9A"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cfg",children:'\n#####################################################################\n#      \u5909\u66F4/\u78BA\u8A8D\u304C\u5FC5\u8981\u306A\u9805\u76EE\n#####################################################################\n##***\u5909\u66F4/\u78BA\u8A8D\u304C\u5FC5\u8981\u306A\u4E8B\u9805\uFF1A***\n## MCU \u30D1\u30B9                                [mcu] \n## \u30D7\u30EA\u30F3\u30BF\u30FC\u306E\u6D3B\u52D5\u7BC4\u56F2                    xyz\u306Eposition   \n## \u30D2\u30FC\u30BF\u30FC\u30BF\u30A4\u30D7                          [extruder] \u3068 [heater_bed]\n## Z\u8EF8\u30EA\u30DF\u30C3\u30C8\u30B9\u30A4\u30C3\u30C1\u505C\u6B62\u4F4D\u7F6E              [safe_z_home] \n## Z\u8EF8\u30EA\u30DF\u30C3\u30C8\u30B9\u30A4\u30C3\u30C1\u30AA\u30D5\u30BB\u30C3\u30C8\u4F4D\u7F6E        [stepper_z] \n## PID \u30AB\u30EA\u30D6\u30EC\u30FC\u30B7\u30E7\u30F3                   [extruder] \u3068 [heater_bed] \n## \u30A8\u30AD\u30B9\u30C8\u30EB\u30FC\u30C0\u30E2\u30FC\u30BF\u30FC\u306E\u30B9\u30C6\u30C3\u30D7\u5024\u3092\u5FAE\u8ABF\u6574 [extruder] \n\n#####################################################################\n#      \u30D5\u30A1\u30A4\u30EB\u547C\u3073\u51FA\u3057\n#####################################################################\n### fuidd\u307E\u305F\u306Fmainsail\u3092\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001#[include XXX.cfg]\u306E\u524D\u306E#\u3092\u53D6\u308A\u9664\u3044\u3066\u304F\u3060\u3055\u3044\u3002\n### When using fuidd or mainsail as the frontend, remove the \'#\' before #[include XXX.cfg].\n[include fluidd.cfg]\n#[include mainsail.cfg]\n\n### \u4E0B\u8A18\u306E/home/fly\u306Efly\u306F\u3042\u306A\u305F\u306E\u30DB\u30B9\u30C8\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u306E\u30E6\u30FC\u30B6\u30FC\u540D\u306B\u7F6E\u304D\u63DB\u3048\u3066\u304F\u3060\u3055\u3044\u3002root\u30E6\u30FC\u30B6\u30FC\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\n### Replace \'fly\' in /home/fly with your host computer username, ensuring it\'s not the ROOT user.\n[virtual_sdcard]\npath: /home/fly/printer_data/gcodes\non_error_gcode: CANCEL_PRINT\n\n\n#####################################################################\n#      Master ID \u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\n#####################################################################\n[mcu]\nserial: /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00\n### USB\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2ID\u3092\u78BA\u8A8D\u3057\u3001\n### /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00\u3092\u767A\u898B\u3057\u305FID\u306B\u7F6E\u304D\u63DB\u3048\u3066\u304F\u3060\u3055\u3044\u3002\n### Find the USB firmware ID with: ls /dev/serial/by-id/* and replace\n### /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00 with the ID you discover.\n\n#canbus_uuid: 114514114514\n### CAN\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2ID\u3092\u78BA\u8A8D\u3057\u307E\u3059\uFF1A~/klippy#env/bin/python ~/klipper/scripts/canbus_query.py can0\n### CAN\u306EID\u306B\u306F\'serial:\'\u3092\'canbus_uuid:\'\u306B\u7F6E\u304D\u63DB\u3048\u3001\u305D\u306E\u5F8CID\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n### Query the CAN firmware ID with: ~/klippy#env/bin/python ~/klipper/scripts/canbus_query.py can0\n### Replace \'serial:\' in the CAN ID with \'canbus_uuid:\', then append the ID.\n\n#####################################################################\n#      \u6E29\u5EA6\u76E3\u8996\n#####################################################################\n[temperature_sensor motherboard]\nsensor_type: temperature_mcu\n\n[temperature_sensor Raspberry Pi]\nsensor_type: temperature_host\n\n#####################################################################\n#      Tmodel\u3068\u52A0\u901F\u5EA6\n#####################################################################\n[printer]\nkinematics: corexy\nmax_velocity: 300\nmax_accel: 2000\nmax_z_velocity: 15\nmax_z_accel: 300\nsquare_corner_velocity: 6.0\n\n#####################################################################\n#      X/Y\u30B9\u30C6\u30C3\u30D1\u30FC\u30E2\u30FC\u30BF\u30FC\u8A2D\u5B9A\n#####################################################################\n\n[stepper_x]\n## \u53C2\u7167\uFF1Ahttps://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:                                        # \u30E2\u30FC\u30BF\u65B9\u5411\u3092\u4E0A\u8A18\u30EA\u30F3\u30AF\u3067\u78BA\u8A8D\u3002\u9006\u306E\u5834\u5408\u3001 gpio3 \u306E\u524D\u306B!\u3092\u8FFD\u52A0\nenable_pin:! \nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200                    # 0.9\xb0\u30B9\u30C6\u30C3\u30D1\u30E2\u30FC\u30BF\u30FC\u306E\u5834\u5408\u306F200\u3092400\u306B\u8A2D\u5B9A\u30011.8\xb0\u30B9\u30C6\u30C3\u30D1\u30E2\u30FC\u30BF\u30FC\u306E\u5834\u5408\u306F200\nendstop_pin:\n# endstop_pin: tmc2209_stepper_x:virtual_endstop\n# endstop_pin: tmc5160_stepper_x:virtual_endstop\nposition_min: 0\nposition_endstop: 300                           # (250mm-300mm-350mm)\nposition_max: 300                               # (250mm-300mm-350mm)\nhoming_speed: 40                                # \u30BB\u30F3\u30B5\u30EC\u30B9\u30DB\u30FC\u30DF\u30F3\u30B0\u3067\u306F40mm/s\u3092\u8D85\u3048\u306A\u3044\u3053\u3068\u3092\u63A8\u5968\nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_x]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0                        # \u30B9\u30C6\u30EB\u30B9\u30C1\u30E7\u30C3\u30D7\u3092\u30AA\u30F3\u306B\u3059\u308B\u306B\u306F999999\u3092\u8A2D\u5B9A\u3001\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F0\ndiag_pin: ^\ndriver_SGTHRS: 80\n\n[tmc5160 stepper_x]\ncs_pin:\n### spi_bus\u3068spi_software\u306F\u3069\u3061\u3089\u304B\u4E00\u65B9\u306E\u307F\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\n### spi_bus and spi_software can only use one of them.\n# spi_bus:\nspi_software_mosi_pin:\nspi_software_miso_pin:\nspi_software_sclk_pin:\nrun_current: 1.0\ninterpolate: False\n### \u30C9\u30E9\u30A4\u30D0\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u62B5\u6297\u306F\u30C9\u30E9\u30A4\u30D0\u306B\u5408\u308F\u305B\u3066\u4FEE\u6B63\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\n### The driver sampling resistor needs to be modified according to the driver\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndiag0_pin: ^!\ndriver_SGT: 1\n\n[stepper_y]\n## \u53C2\u7167\uFF1Ahttps://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:                                        # \u30E2\u30FC\u30BF\u65B9\u5411\u3092\u4E0A\u8A18\u30EA\u30F3\u30AF\u3067\u78BA\u8A8D\u3002\u9006\u306E\u5834\u5408\u3001 gpio0 \u306E\u524D\u306B!\u3092\u8FFD\u52A0\nenable_pin:!\nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200\nendstop_pin:\n# endstop_pin: tmc2209_stepper_y:virtual_endstop\n# endstop_pin: tmc5160_stepper_y:virtual_endstop\nposition_min: 0\nposition_endstop: 300\nposition_max: 300\nhoming_speed: 40 \nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_y]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\ndiag_pin: ^\ndriver_SGTHRS: 80\n\n[tmc5160 stepper_y]\ncs_pin:\n### spi_bus\u3068spi_software\u306F\u3069\u3061\u3089\u304B\u4E00\u65B9\u306E\u307F\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\n### spi_bus and spi_software can only use one of them.\n# spi_bus:\nspi_software_mosi_pin:\nspi_software_miso_pin:\nspi_software_sclk_pin:\nrun_current: 1.0\ninterpolate: False\n### \u30C9\u30E9\u30A4\u30D0\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u62B5\u6297\u306F\u30C9\u30E9\u30A4\u30D0\u306B\u5408\u308F\u305B\u3066\u4FEE\u6B63\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\n### The driver sampling resistor needs to be modified according to the driver\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndiag0_pin: ^!\ndriver_SGT: 1\n\n#####################################################################\n#      Z\u30B9\u30C6\u30C3\u30D1\u30FC\u30E2\u30FC\u30BF\u30FC\u8A2D\u5B9A\n#####################################################################\n\n[stepper_z]\n## \u53C2\u7167\uFF1Ahttps://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:!                                         # \u30E2\u30FC\u30BF\u65B9\u5411\u3092\u4E0A\u8A18\u30EA\u30F3\u30AF\u3067\u78BA\u8A8D\u3002\u9006\u306E\u5834\u5408\u3001 gpio25 \u306E\u524D\u306B!\u3092\u8FFD\u52A0\nenable_pin: !\nrotation_distance: 8\nmicrosteps: 32\nendstop_pin: ^\n# endstop_pin: probe:z_virtual_endstop  \nposition_endstop:-0.5\nposition_max: 270\nposition_min: -15\nhoming_speed: 20\nsecond_homing_speed: 3.0\nhoming_retract_dist: 3.0\n\n[tmc2209 stepper_z]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n[stepper_z1]\nstep_pin: \ndir_pin:\nenable_pin: !\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z1]\nuart_pin:\ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n##    Z2 \u30B9\u30C6\u30C3\u30D1\u30FC\u30E2\u30FC\u30BF\u30FC - \u53F3\u5F8C\u65B9\u306B\u914D\u7F6E on Driver5\n[stepper_z2]\nstep_pin:\ndir_pin:\nenable_pin:!\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z2]\nuart_pin:\ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n\n[stepper_z3]\nstep_pin: \ndir_pin: \nenable_pin: !\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z3]\nuart_pin: \ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n\n\n#####################################################################\n#      \u30A8\u30AD\u30B9\u30C8\u30EB\u30FC\u30C0\n#####################################################################\n[extruder]\n## \u30BB\u30F3\u30B5\u30FC\u306E\u7A2E\u985E #\u4E00\u822C\u7684\u306A\u71B1\u96FB\u62B5\u6297\u306F(Generic 3950, ATC Semitec 104GT#2)\n## Sensor type # Common thermistors are (Generic 3950, ATC Semitec 104GT#2)\nsensor_type: ATC Semitec 104GT-2\nsensor_pin: \n#####################################################################\n## PT1000\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u71B1\u611F\u5EA6\u306E\u96A3\u63A5\u3059\u308B\u30B8\u30E3\u30F3\u30D1\u30FC\u3092\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n## If using PT1000, please connect the jumper next to the thermal sensitivity.\n# sensor_type:PT1000\n# pullup_resistor: 1100\n# sensor_pin: \n#####################################################################\n#      \u30A8\u30AD\u30B9\u30C8\u30EB\u30FC\u30C0\n#####################################################################\n## https://www.klipper3d.org/Config_Reference.html#extruder\n[extruder]\nstep_pin:\ndir_pin:\nenable_pin: !\nrotation_distance: 21.84\n## rotation_distance = The original rotation_distance multiplied by the actual extrusion length divided by the requested extrusion length.\n## Calibration step value: 22.44=old value 22 * actual value 102 / target value 100\ngear_ratio:50:10\n## Reduction ratio (Galileo gear ratio 7.5:1 and this line is commented out; BMG is 50\uFF1A17, output shaft at front, input shaft at back)\nmicrosteps:16\nfull_steps_per_rotation: 200    \nnozzle_diameter:0.400\nfilament_diameter:1.75\nheater_pin:\nmin_temp: -50\nmax_temp: 300\nmax_power: 1.0\nmin_extrude_temp: 150\npressure_advance: 0.05\n##Pressure in advance\n##\u5727\u529B\u306E\u524D\u9032\n##https://www.klipper3d.org/zh/Pressure_Advance.html\npressure_advance_smooth_time: 0.040\n#max_extrude_only_distance: 200.0   # If there is an error in extruding flow, comment this, but it is recommended to re-slice\n# Nozzle temperature PID calibration command: PID_CALIBRATE HEATER=extruder TARGET=245\n# Nozzle temperature PID calibration command: PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol: pid\npid_kp: 26.213\npid_ki:1.304\npid_kd: 131.721\nstep_pulse_duration: 0.000004\n\n[tmc2209 extruder]\nuart_pin:gpio9\nuart_address:3\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n\n#####################################################################\n#      \u30D9\u30C3\u30C9\u30D2\u30FC\u30BF\u30FC\n#####################################################################\n[heater_bed]\nheater_pin: \n## \u30D2\u30FC\u30BF\u30FC\u30BF\u30A4\u30D7\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4E00\u822C\u7684\u306A\u30D2\u30FC\u30BF\u30FC\u30BF\u30A4\u30D7\u306B\u3064\u3044\u3066\u306F https://www.klipper3d.org/Config_Reference.html#common#thermistors \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n## Keenovo\u30D2\u30FC\u30BF\u30FC\u306B\u306F"Generic 3950"\u3092\u4F7F\u7528\u3057\u307E\u3059\nsensor_type:\nsensor_pin:\nmax_power: 1.0 \nmin_temp: -50\nmax_temp: 120\n# Heated bed temperature PID calibration command: PID_CALIBRATE HEATER=heater_bed TARGET=100\n# Heated bed temperature PID calibration command: PID_CALIBRATE HEATER=heater_bed TARGET=100\ncontrol: pid\npid_kp: 68.453\npid_ki: 2.749\npid_kd: 426.122\n\n#####################################################################\n#      \u30D5\u30A1\u30F3\u5236\u5FA1\n#####################################################################\n[fan]\npin: \nmax_power: 1.0\nkick_start_time: 0.5                                                # \u30D5\u30A1\u30F3\u304C\u958B\u59CB\u3067\u304D\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u5024\u3092\u5897\u3084\u3059\u3053\u3068\u304C\u3042\u308A\u307E\u3059\noff_below: 0.13\ncycle_time: 0.010\n#####################################################################\n[heater_fan hotend_fan]\npin: \nmax_power: 1.0\nkick_start_time: 0.5\nheater: extruder\nheater_temp: 50.0\n\n#####################################################################\n#      \u30D5\u30A3\u30E9\u30E1\u30F3\u30C8\u30EA\u30FC\u30F3\u30A2\u30A6\u30C8\u30BB\u30F3\u30B5\u30FC\n#####################################################################\n#[filament_switch_sensor Filament_Runout_Sensor]\n#pause_on_runout: True\n#runout_gcode: PAUSE\n#switch_pin: \n\n#####################################################################\n#      \u30D7\u30ED\u30FC\u30D6\n#####################################################################\n### TAP\n[probe]\npin:\nx_offset: 0\ny_offset: 0\n# z_offset: 0\nspeed: 10.0\nsamples: 3\nsamples_result: median\nsample_retract_dist: 4.0\nsamples_tolerance: 0.006\nsamples_tolerance_retries: 3\n\n### EDDY\n# [probe_eddy_current fly_eddy_probe]\n# sensor_type: ldc1612\n# z_offset: 0.8\n# i2c_address: 43\n# i2c_mcu:\n# i2c_bus:\n# x_offset: 0\n# y_offset: 0\n# speed:40\n# lift_speed: 5\n\n\n#####################################################################\n#      \u30DB\u30FC\u30DF\u30F3\u30B0\u3068\u30AC\u30CB\u30C8\u30EA\u30FC\u30A2\u30B8\u30E3\u30B9\u30C8\u30EB\u30FC\u30C1\u30F3\n#####################################################################\n### safe_z_home\u3068homing_override\u306F\u3069\u3061\u3089\u304B\u4E00\u65B9\u306E\u307F\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\n### You can only use either safe_z_home or homing_override\n#[safe_z_home]\n#home_xy_position: 206,300\n#speed: 100\n#z_hop: 5\n\n#[homing_override]\n#axes: z\n#set_position_z: 0\n#gcode:\n#   G90\n#   G0 Z15 F600\n#   G28 X Y\n#    ## Z \u9650\u4F4D\u5F00\u5173\u7684 XY \u4F4D\u7F6E\n#    ##\u901A\u8FC7\u540E\u5C06X0\u548CY0\u66F4\u65B0\u4E3A\u4F60\u7684\u503C\uFF08\u5982X157\u3001Y305\uFF09\n#    ## Z \u8F74\u9650\u4F4D\u4F4D\u7F6E\u5B9A\u4E49\n#   G0 X185 Y250 F3600    #250mm   \n#   G28 Z\n#   G0 Z10 F1800\n\n#####################################################################\n#      quad_gantry_level\n#####################################################################\n[quad_gantry_level]\n#gantry_corners:\n#    -60,-10\n#    310,320\n#points:                      # 250mm\n#    50,25\n#    50,175\n#    200,175\n#    200,25\n\ngantry_corners:              # 300mm\n   -60,-10\n   360,370\npoints:\n   50,25\n   50,225\n   250,225\n   250,25\n\n#gantry_corners:              # 350mm\n#    -60,-10\n#    410,420\n#points:\n#    50,25\n#    50,275\n#    300,275\n#    300,25\n\nspeed: 100\nhorizontal_move_z: 1\nretry_tolerance: 0.0075\nretries: 5\nmax_adjust: 10\n\n\n#####################################################################\n# Macros\n#####################################################################\n[idle_timeout]\n### 30\u5206\u4EE5\u4E0A\u30A2\u30A4\u30C9\u30EB\u72B6\u614B\u306B\u306A\u308B\u3068\u3001\u30D2\u30FC\u30BF\u30FC\u30D9\u30C3\u30C9\u304C\u30AA\u30D5\u306B\u306A\u308A\u307E\u3059\u3002\n### If idle for more than 30 minutes, heated bed will be turned off.\ntimeout: 1800 \n\n#[gcode_arcs]\n#### \u5F27\u88DC\u9593\u3092\u8A31\u53EF\u3057\u307E\u3059\n#### Allowing arc interpolation\n#resolution: 1.0 \n\n[gcode_macro PRINT_START]          \n### PRINT_START \u3092\u5370\u5237\u958B\u59CB\u6642\u306E\u30DE\u30AF\u30ED\u3068\u3057\u3066\u8A2D\u5B9A\u3057\u3001\u5370\u5237\u524D\u306E\u30AB\u30B9\u30BF\u30E0\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5B9A\u7FA9\u3057\u307E\u3059\n### Set PRINT_START as a macro for the start of printing, customize actions before printing.\ngcode:\n    G92 E0\n    BED_MESH_CLEAR\n    G28\n    quad_gantry_level\n    G28\n    G1 Z20 F3000\n    #BED_MESH_PROFILE LOAD=default  \n    BED_MESH_CALIBRATE adaptive=1 METHOD=scan SCAN_MODE=rapid\n\n[gcode_macro PRINT_END]            \n### PRINT_END \u3092\u5370\u5237\u7D42\u4E86\u6642\u306E\u30DE\u30AF\u30ED\u3068\u3057\u3066\u8A2D\u5B9A\u3057\u3001\u5370\u5237\u5F8C\u306E\u30AB\u30B9\u30BF\u30E0\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5B9A\u7FA9\u3057\u307E\u3059\n### Set PRINT_END as a macro for the end of printing, customize actions after printing completion\ngcode:\n    #   Get Boundaries\n    {% set max_x = printer.configfile.config["stepper_x"]["position_max"]|float %}\n    {% set max_y = printer.configfile.config["stepper_y"]["position_max"]|float %}\n    {% set max_z = printer.configfile.config["stepper_z"]["position_max"]|float %}\n    \n    #   Check end position to determine safe directions to move\n    {% if printer.toolhead.position.x < (max_x - 20) %}\n        {% set x_safe = 20.0 %}\n    {% else %}\n        {% set x_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.y < (max_y - 20) %}\n        {% set y_safe = 20.0 %}\n    {% else %}\n        {% set y_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.z < (max_z - 2) %}\n        {% set z_safe = 2.0 %}\n    {% else %}\n        {% set z_safe = max_z - printer.toolhead.position.z %}\n    {% endif %}\n \n    M400                              # \u30D0\u30C3\u30D5\u30A1\u30AF\u30EA\u30A2\u5F85\u3061\n    G92 E0                            # \u30A8\u30AD\u30B9\u30C8\u30EB\u30FC\u30C0\u3092\u30EA\u30BB\u30C3\u30C8\n    G1 E-10.0 F3600                   # \u30D5\u30A3\u30E9\u30E1\u30F3\u30C8\u3092\u5DFB\u304D\u623B\u3059\n    G91                               # \u76F8\u5BFE\u5EA7\u6A19\u7CFB\u306B\u8A2D\u5B9A\n    G0 Z{z_safe} F3600                # \u30AC\u30CB\u30C8\u30EA\u3092\u4E0A\u3052\u308B\n    G0 X{x_safe} Y{y_safe} F20000     # \u30CE\u30BA\u30EB\u3092\u79FB\u52D5\u3057\u3066\u30E9\u30A4\u30F3\u3092\u9664\u53BB\n    M104 S0                           # \u30A8\u30AD\u30B9\u30C8\u30EB\u30FC\u30C0\u3092\u30AA\u30D5\n    M140 S0                           # \u30D2\u30FC\u30BF\u30FC\u30D9\u30C3\u30C9\u3092\u30AA\u30D5\n    M106 S0                           # \u30E2\u30C7\u30EB\u30D5\u30A1\u30F3\u3092\u30AA\u30D5\n    G90                               # \u7D76\u5BFE\u5EA7\u6A19\u7CFB\u306B\u8A2D\u5B9A\n    G0 X{max_x / 2} Y{max_y} F3600    # \u30CE\u30BA\u30EB\u3092\u5F8C\u65B9\u306B\u505C\u6B62\n    BED_MESH_CLEAR                    # \u30CD\u30C3\u30C8\u30D9\u30C3\u30C9\u3092\u89E3\u9664\n\n\n#*# <---------------------- SAVE_CONFIG ----------------------\x3e\n#*# DO NOT EDIT THIS BLOCK OR BELOW. The contents are auto-generated.\n#*#\n\n'})})]})}function c(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},79938:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return s}});var r=t(75271);let i={},o=r.createContext(i);function s(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);