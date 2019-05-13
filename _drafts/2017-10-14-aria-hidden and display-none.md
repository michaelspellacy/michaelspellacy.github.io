---
layout: default
title: "aria-hidden and display: none"
tags: Accessibility
---

Occasionally, we may come across the following in our CSS:

<pre><code>*[aria-hidden=”true”] {
display: none;
}</code></pre>

This can cause problems because we may have need to show something visually, but need to specifically hide it from blind users.  This CSS declaration assumes we want to hide from all users. If you need to hide something from both types of users, simply create a unique class, or even better, go native and use the hidden attribute, instead:

<pre><code>&lt;p hidden&gt;I am error.&lt;/p&gt;</code></pre>

For universal browser support, just add the following to your CSS:

<pre><code>*[hidden] {
display: none;
}</code></pre>
