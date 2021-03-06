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
This project has been made at the school [42]({{ site.data.links.ft }}) with C, OpenCL and OpenGL.<br/>
It shows millions of particles moving around.

{% include text.html text="
The particle computation is done on the GPU with OpenCL, and the display is also done on the GPU with OpenGL.<br/>
Both API are designed to interoperate, they share the particles data to avoid overheads.
<br/><br/>
In the following video there is 3 millions particles moving around the cursor at 60 frames per second.
"%}

{% include small_link.html link="https://github.com/jbalestr42/42/tree/master/Graphics/particle_system" title="Download on GitHub" %}

{% include video.html link="https://www.youtube.com/embed/Z7KoNQg-e_k?modestbranding=1&autohide=1&showinfo=0&controls=1&rel=0" %}
