---
layout: default
title: "Fallback Colors"
tags: Accessibility
---

This may seem like a no-brainer, but we see it come up often enough to remind developers to please ensure that fallback colors are being added to elements that might be using background images or gradients.

Bad:

<pre><code>.element {
background:  linear-gradient(to bottom, rgba(169,3,41,1) 0%,rgba(143,2,34,1) 44%,rgba(109,0,25,1) 100%);
}</code></pre>

Good:

<pre><code>.element {
background: rbg(169, 3, 41) linear-gradient(to bottom, rgba(169, 3 , 41, 1) 0%,rgba(143, 2, 34, 1) 44%,rgba(109, 0, 25, 1) 100%);
}</code></pre>

Linear gradients are a value of the `background-image` property, so they can be disabled along with other images on the page, with the end result often being an unreadable element. Having a fallback color alleviates this issue and ensures better stability when images may not be available.

Before:

![Buttons with background gradients](https://content.screencast.com/users/Spellacy/folders/Jing/media/04f7898b-e541-4b4e-ae36-d35bc84ae303/2017-06-07_1126.png)

After:

![Buttons without background gradients](https://content.screencast.com/users/Spellacy/folders/Jing/media/e9337308-6021-4cb3-a6d9-c3fbaab857c1/2017-06-07_1127.png)
