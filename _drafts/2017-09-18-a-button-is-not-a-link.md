---
layout: default
title: "A Button Is Not a Link"
tags: Accessibility
---

For instances where you need to create a button that might toggle elements around it, or some other similar functionality, do avoid the following:

<pre><code>&lt;a href=”#”&gt; ... &lt;/a&gt;</code></pre>

Hyperlinks should be used for linking to other pages or used as anchors to jump a user to content. While you *could* anchor to a nearby element, like so:

<pre><code>&lt;a href=”#info”&gt; ... &lt;/a&gt;</code></pre>

<pre><code>&lt;div id=”info&gt; ... &lt;/div&gt;</code></pre>

You are not exactly jumping to anything, so it seems a little silly to anchor to an element that is directly below link. While you would not be faulted for it, I offer an alternative method:

<pre><code>&lt;button&gt; ... &lt;/button&gt;</code></pre>

Simple, semantic, and designed for the purpose in which it was intended for: To perform a task (Like toggling!). If, for some reason, the <code>&lt;button&gt;</code> element can’t be used, ARIA has you covered:

<pre><code>&lt;div role=”button” tabindex=”0”&gt; ... &lt;/div&gt;</code></pre>

Proper use of the role attribute to redefine our <code>&lt;div&gt;</code> as a <code>&lt;button&gt;</code> and a tabindex of zero to allow the element to be focused on, has you totally set up for a11y success!


*A quick note about ARIA. It’s great for enhancing HTML where needed, but your first choice should always be to choose elements with inherent roles and properties that are already built into them. Remember: The first rule of ARIA is not to use it at all!*
