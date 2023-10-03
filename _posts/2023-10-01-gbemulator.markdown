---
layout: post
title:  "Game Boy"
date:   2023-09-01 16:00:00 -0500
img: img/portfolio/nintendo.gif
modalID: modalGameboy
color1: 8bac0f 
color2: 395f85 
category: personal
description: A simple Game Boy emulator.
libs:
 - cpp
platforms:
 - windows
credits:
 - julien
carousel:
 - img/portfolio/zelda.gif
 - img/portfolio/pokemon.gif
---
Out of curiosity I wanted to deep dive into emulation, I'm not disappointed :)

{% include text.html text="
I started to work an a CHIP8 emulator which is the easiest emulator one could write. This was quite easy and I wanted to learn more, this is why I started to work on a Game Boy emulator.
"%}

{% include text.html text="
The challenge is a way harder. As an example, the CHIP8 has 35 different instructions while the Game Boy has about 500.
They are a lot of information and tutorial about emulation but some are wrong and others are outdated. The hardest part is to dig into all information to cross check everything you find.
The good point is that there is an awesome active community around emulation.
"%}

{% include small_link.html link="https://discord.gg/dkmJAes" title="Emulation Development Discord" %}

{% include text.html text="
If you want to feel a bit nostalgic, here are \"Pokemon Red\" and \"The Legend of Zelda: Link's Awakening\" intros. 
"%}

{% include carousel.html %}

{% include small_link.html link="https://github.com/jbalestr42/GB_Emulator" title="Download on GitHub" %}