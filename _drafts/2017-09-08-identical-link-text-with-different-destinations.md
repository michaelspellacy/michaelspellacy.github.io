---
layout: default
title: "Identical Link Text With Different Destinations"
tags: Accessibility
---

While sighted users may have other visual cues to go by on a page, it can sometimes be difficult for assistive technology users to discern between links that go to different destinations, but which contain identical text. For example:

<pre><code>&lt;a href="/category/technology-jobs/79/20457/1"&gt;View Jobs&lt;/a&gt;

...

&lt;a href="/category/technology-jobs/86/75309/1"&gt;View Jobs&lt;/a&gt;</code></pre>

Same text, but two different href values, so you can see how confusing this mightf be. Let's take a look at some solutions to this problem.

## Solution 1

[The dreaded “click here” link poses a similar problem to assistive technology](../../../2017/10/06/down-with-click-here.html). How can we make this situation better for all users? If no other markup can provide adequate contextual information as to the purpose of the link, such as a heading, then it may be necessary to provide accessibly hidden text to aid assistive technology users. Like so:

<pre><code>&lt;a href="/category/technology-jobs/86/75309/1"&gt;View Jobs &lt;span class=”wai”&gt;(Front-end Developers)&lt;/span&gt;&lt;/a&gt;</code></pre>

This text is accessibly hidden with CSS and will only be read to assistive technology users. Search engines may also appreciate the added context here. We are not going out of our way here to hide content, but to make it more accessible. A search engine’s algorithm is usually smart enough to know when a site is intentionally trying to hide content for the benefit of SEO, so don’t worry about this being flagged as a “black hat” technique.

## Solution 2

Alternatively, you could use <abbr title="Accessible Rich Internet Applications">ARIA</abbr> to assist you here. ARIA is meant to solve problems like these and is the **preferred** solution to this issue nowadays. Here we are making good use of the `aria-label` attribute.

<pre><code>&lt;a href="/category/technology-jobs/86/75309/1" aria-label=”View Front-end Developer Jobs”&gt;View Jobs&lt;/a&gt;</code></pre>

The `aria-label` attribute value (View Front-end Developer Jobs) takes precedence and will be read out over the link text (View Jobs).

## Solution 3

Ideally, it would be great if we designed a more equal standing link or button. One that all users, whether they are disabled or not, could benefit from. In other words, something that does not require a workaround of any kind:

<pre><code>&lt;a href="/category/technology-jobs/86/75309/1"&gt;View Front-end Developer Jobs&gt;/a&gt;</code></pre>

That works for all! However, in event this is not possible, you now have some good solutions to turn to. Happy coding!
