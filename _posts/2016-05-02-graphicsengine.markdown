---
layout: post
title:  "Graphics Engine"
date:   2016-05-02 15:08:10 -0500
img: img/portfolio/graphicsengine.png
modalID: modalGraphics
color1: 331b22
color2: eb8e90
category: personal
description: I started this project to learn OpenGL and rendering techniques.
libs:
 - cpp
 - opengl
credits:
 - julien
platforms:
 - windows
 - apple
 - linux
---
I started this project to learn rendering techniques and to be familiar with shaders programming using GLSL.<br/>
<br/>
Developped in C++ with OpenGL, the code can compile on Windows, Mac and Linux.<br/>
The engine use [phong]({{ site.data.links.phong }}) shading and it's possible to add multiple point lights, spot lights and directional lights.

{% include text.html text="
   On the following video there is a red point light, a green spotlight and a white directional light.
"%}

{% include small_link.html link="https://github.com/jbalestr42/GraphicsEngine" title="Download on GitHub" %}

{% include video.html link="https://www.youtube.com/embed/qSY0bUQsBNs?modestbranding=1&autohide=1&showinfo=0&controls=1&rel=0" %}

{% include text.html text="
   The implementation of a <a href='https://msdn.microsoft.com/en-us/library/windows/desktop/ee416307(v=vs.85).aspx'>Cascade Shadow Mapping</a> is in progress.<br/>
   We can notice three areas in the video:<br/>
   - The red area which is the nearest from the camera with the most accurate shadow<br/>
   - The green area in the middle which have less accurate shadow<br/>
   - The blue area which is the farthest and thus the lowest shadow quality<br/>
"%}

{% include video.html link="https://www.youtube.com/embed/Vp6IKhyT248?modestbranding=1&autohide=1&showinfo=0&controls=1&rel=0" %}
