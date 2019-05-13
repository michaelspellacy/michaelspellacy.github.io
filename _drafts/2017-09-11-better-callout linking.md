---
layout: default
title: "Better Callout Linking"
tags: Accessibility
---

Let's touch upon a pattern that we frequently come across and share what we believe to be the most efficient way to mark up such an interface in the future. Often, we have callouts on our pages that look similar to the following:

![](https://content.screencast.com/users/Spellacy/folders/Jing/media/6f20c826-7df6-4012-a35f-711a220f7aba/00000057.png)

Typically, we might only link the “Learn more” text. In the code we came across, the following is present:

<pre><code>&lt;div class="career-boxes"&gt;

    &lt;section class="administrative"&gt;

        &lt;h2&gt;Administrative Services&lt;/h2&gt;

        &lt;a href="/administrative-services"&gt;Learn more&lt;/a&gt;

    &lt;/section&gt;

    ...

&lt;/div&gt;</code></pre>

Here, an extra step was taken to use jQuery to make the entire region clickable:

<pre><code>/* makes Careers boxes fully clickable */

$('.career-boxes section').click(function(){

	var gurl = $(this).find("a")[0].href;
	window.location = gurl;

});</code></pre>

How can we do this more efficiently? Making our code more accessible and easy to maintain? Well, how about this?

<pre><code>&lt;ul class="career-boxes"&gt;

&lt;li class=”administrative”&gt;

    &lt;a href=”/administrative-services/”&gt;

        &lt;h2&gt;Administrative Services&lt;/h2&gt;

        &lt;p&gt;Learn more&lt;/p&gt;

    &lt;/a&gt;

&lt;/li&gt;

...

&lt;/ul&gt;</code></pre>

Besides making this a list (it’s not really a section of a page), we can wrap our heading and text within the entire hyperlink. In HTML5, wrapping block-level elements, like a heading, is permitted. The benefits:

* We make our link more accessible. A screen reader will read the entire contents of the link out, which is helpful:  “Clickable Administrative Services, Heading  clickable  Level 2, Clickable Learn more”. The link is chock-full of useful information now! *Booyah!*
* By making it more accessible, we naturally make it more SEO friendly. Sa-weet!
* Our entire region is clickable without JavaScript. *Oh yeah!*
* The interface is much more maintenance friendly! Ah, Heaven.

So, in a nutshell, the more relevant content you can place within a hyperlink, the better! Thanks for reading!
