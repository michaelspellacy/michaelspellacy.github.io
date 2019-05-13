---
layout: default
title: "Logical Headings in a CMS World"
tags: Accessibility
---

All pages that we create must have a logical heading order. Assistive technology users rely on logical headings to provide structure to, and make better sense of, the content we are providing. However, when it comes to creating headings in a CMS, sometimes we can run into problems in our page output.

Often, we have modules baked into our CMS setups that contain headings, like <code>&lt;h3&gt;</code> or <code>&lt;h4&gt;</code>. The danger in doing this is that we are assuming that our modules will come lower within our pages, when this may not always be the case. The logical heading order cannot really be determined until we start seeing and understanding our content better. Adding a module to a page that has a lower heading, where, say, no <code>&lt;h2&gt;</code> exists already, will inadvertently break our heading order, as illustrated below.

<pre><code>&lt;h1&gt; .. &lt;/h1&gt;

&lt;h3&gt; .. &lt;/h3&gt;

&lt;h4&gt; .. &lt;/h4&gt;</code></pre>

When making assumptions about headings in modules, things can also get out of control when we need to rearrange those same modules on the page:

<pre><code>&lt;h1&gt; .. &lt;/h1&gt;</code></pre>

<pre><code>Module 10

&lt;h5&gt; .. &lt;/h5&gt;</code></pre>

<pre><code>Module 3

&lt;h3&gt; .. &lt;/h3&gt;</code></pre>

<pre><code>Footer

&lt;h3&gt;…&lt;/h3&gt;</code></pre>

## Solution

What we can do here is use <code>&lt;h2&gt;</code> as our go-to heading in most modules. Since we CAN ASSUME that there will always be an <code>&lt;h1&gt;</code> element on every page, including an <code>&lt;h2&gt;</code> in all modules ensures that our logical order will never break. It is only after one has finished creating their page, that it can be evaluated to see if the heading structure needs to be refined a bit more to make better sense of the overall structure of the page. As you can see below, the situation is now more stable:

<pre><code>&lt;h1&gt; .. &lt;/h1&gt;</code></pre>

<pre><code>Module 1

&lt;h2&gt; .. &lt;/h2&gt;</code></pre>

<pre><code>Module 10

&lt;h2&gt; .. &lt;/h2&gt;</code></pre>

<pre><code>Module 3

&lt;h2&gt;.. &lt;/h2&gt;</code></pre>

<pre><code>Footer

&lt;h3&gt;…&lt;/h3&gt;</code></pre>

It is not lost on this author that I too am making assumptions here, but when you are dealing with the unexpected in a CMS, I find it is better to err on the side of caution and use <code>&lt;h2&gt;</code> as your default, rather than risk breaking the logical heading order, which seems much worse. So, H2 <abbr title="For The Win">FTW</abbr>!
