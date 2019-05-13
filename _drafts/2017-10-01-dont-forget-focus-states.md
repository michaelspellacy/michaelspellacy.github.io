---
layout: default
title: "Don't Forget Focus States"
tags: Accessibility Notes
---

Always remember to add a focus state along with your hover states, for better keyboard usability. For example, if you using Sass, you should be doing similar to this:

<pre><code>a {
color: #fff;

    &:focus, &:hover {
    color: tomato;
    }

}</code></pre>

Nice.
