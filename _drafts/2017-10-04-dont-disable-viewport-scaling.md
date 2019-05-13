---
layout: default
title: "Don't Disable Viewport Scaling"
tags: Accessibility
---

Always avoid using `maximum-scale=1.0` and `user-scalable=0` in your viewport meta tags:

<pre><code>&lt;meta name="viewport" content="width=device-width; initial-scale=1.0; <b>maximum-scale=1.0; user-scalable=0;</b>"&gt;</code></pre>

These parameters disable zooming on mobile, a feature that could be very important to individuals with low vision or who may be trying to access your content in less than ideal lighting conditions, etc. *Beware!*
