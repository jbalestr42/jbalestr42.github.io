---
layout: post
title:  "Chip 8 Arduino"
date:   2024-12-03 16:00:00 -0500
img: img/portfolio/chip8_device.JPEG
modalID: modalGameboy
color1: abafb2 
color2: 395f85 
category: personal
description: Homemade handheld controller made from a NES controller and an arduino to play chip 8 roms.
libs:
 - cpp
platforms_svg:
 - arduino
credits:
 - julien
carousel:
 - img/portfolio/chip8_device.gif
 - img/portfolio/chip8_device.JPEG
 - img/portfolio/chip8_inside.JPEG
 - img/portfolio/chip8_prototype.JPEG
 - img/portfolio/chip8_schematic.png
---
I made a simple chip 8 emulator long time ago when the idea of turning it into a portable console came to my mind...

{% include text.html text="
The goal was to turn a NES controller into a handheld controller to play chip 8 roms.<br/>
Even if there is not 16 keys like the chip 8, all keys are not always used. In order to have a bit of control over the keys, I implemented a system to map a controller key to a chip 8 key for each rom. This way when adding a new rom we can configure the appropriate keys.
"%}

{% include text.html text="
To be honest, it was a bit tricky to fit everything inside the controller.<br/>
That's why there is a USB-C cable to power the device.
"%}

{% include text.html text="
For the hardware I used an \"Arduino Nano ESP32\" which is really thin and can fit into the NES controller.<br/>
For the display I used an \"OLED 128x64px for 0,96inches\" which is the smallest I found. The resolution is perfect because the chip 8 resolution is 64x32 which fits perfectly.<br/>
The device is lacking sound as well but it could be done in a later version.
"%}

{% include carousel.html %}

{% include small_link.html link="https://github.com/jbalestr42/chip_8_emu_arduino" title="Download on GitHub" %}