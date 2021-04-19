---
title: Creating khdev.ch
description: Creating a website with Nuxt-Content
slug: creating-khdev
img: khdev.webp
banner: nuxtjs.webp
alt: nuxtjs
tags: nuxt, nuxt-content, khdev
createdAt: 2021-04-03
updatedAt: 2021-04-06
---

I am actually writing this post as I am trying to code the actually website this will be displayed on. This website used to be a simple html website with minimal css and a layout copied from another guys website I really liked at the time.

<!--more-->

You can check it out on github:

## GhostCMS

Experience with Ghost WP

## Switching to Grav

Story about Grav WIP

## Trying again with Nuxt + Nuxt Content

I was getting frustrated with trying to make Grav work like I wanted it to. I could not figure out where in the process the prose css rules were being generated. Was it something grav did? Or the Typhoon theme itself via TailwindCSS?

Unable to find any documentation and not wanting to ask in the forums or the issue tracker I decided to browsing youtube for ideas until I stumbled upon https://www.youtube.com/watch?v=1SAZMFwYUDE.

Vue was something I have tried out when I had aspirations to learn more about being a webdeveloper so I was instantly intrigued.

After following the video I recreated most of it, I decided to add AntDesignVue to the project which I really like but I am afraid I made the same mistake like I did with Typhoon and TailwindCSS.

## Building the Layout

Building the layout itself was very easy, I wanted to have a fixed sidebar to the left with my logo, a picture of me, some information about me and a navbar. For the content area I wanted a fixed header/footer and a scrolling body.

This was easily achieved with https://1x.antdv.com/components/layout/. I did run into some issues by giving these elements heights with vh. This somehow broke the scrolling methods of the vue router which caused many bugs. I somehow managed to fix it by removing everything related to height and setting the position to sticky (for the Header) and fixed for the sidebar and footer. Z-Index to get the sidebar over the content on mobile and it was done.

### Mobile first! Or not?

I heard a lot about "mobile first!" development. But then I forgot and had to try to make the layout work on mobile by trial and error. Dont be like me. Have a plan and execute it. It's also very surprising how many devices and resolutions there are. This website will try to look good on the usual resolutions 2560x1440 (my monitor), 1920x1080/1200 my Smartphone which I dont know the resolution and my brothers iPhone. For the other devices, clone the github repo and fix it yourself.

## Adding Features

### Table of Content

https://nuxtjs.org/blog/creating-blog-with-nuxt-content/#adding-an-author-component-with-props

### Banner Images

Same as above

### CreatedAt readable version

### Tags

## Limitations

CreatedAt UpdatedAt

## Caching
