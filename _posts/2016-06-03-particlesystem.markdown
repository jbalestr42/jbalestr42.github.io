---
layout: post
title:  "Particle System"
date:   2016-06-03 15:08:10 -0500
img: img/portfolio/particle.png
modalID: modalParticle
color1: d3b000
color2: eb8e90
category: school
description: An introduction to parallel computing using OpenGL and OpenCL.
libs:
 - cpp
 - opengl
platforms:
 - apple
 - linux
credits:
 - julien
---
This project was made at 42 School with C, OpenCL and OpenGL.
It shows millions of particle moving around.

{% include link.html link="https://github.com/jbalestr42/42/tree/master/Graphics/particle_system" title="Download on GitHub" %}

{% include text.html text="
The particle computation is done on the GPU with OpenCL, and the display is also done on the GPU with OpenGL.<br/>
Both API are designed to interoperate, they share the particles data to avoid overheads.
"%}

{% include video.html link="https://www.youtube.com/embed/Z7KoNQg-e_k?modestbranding=1&autohide=1&showinfo=0&controls=1&rel=0" %}
