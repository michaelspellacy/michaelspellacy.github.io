---
layout: default
title: "Down with 'Click Here'"
tags: Accessibility
---

Linking properly can not only have a very positive impact on accessibility, but SEO as well. Here is an issue that I am sure many of you have come across:

<pre><code>&lt;a href="..."&gt;Click here&lt;/a&gt;</code></pre>

Or worse:

<pre><code>Click &lt;a href="..."&gt;here&lt;/a&gt;</code></pre>

You should be on the lookout for its cousins, “Read More”, “Learn More”, or just “More”. While linking in this manner is usually fine for sighted users who have other visual cues to navigate by on the page, it could prove difficult for assistive technology users. [Imagine hearing “Learn More” read back to you a dozen or so times and you begin to see the need to provide something better for all users](../../2017/09/08/identical-link-text-with-different-destinations.html). We can address this in a couple of ways:

## Solution 1

Link relevant terms . So obvious, right? You can even link full sentences if that is what it takes to be more clear. For example, instead  of linking, “Learn More”, perhaps “Learn More About Foo”, is the more direct way to approach it. This levels the playing field for all users and that is a really smart thing to do when you can, as accessible experiences often create more richer experience for everybody!

## Solution 2

If you can’t link unique terms, then <abbr title="Accessible Rich Internet Applications">ARIA</abbr> has you covered here (H/T to <a href="https://twitter.com/karlgroves">Karl Groves</a> for this little gem of a technique):

<pre><code>&lt;h2 id="foo"&gt;Foo heading&lt;/h2&gt;

&lt;p&gt;Foo stuff and things &lt;a href="..." aria-describedby="foo"&gt;Learn More&lt;/a&gt;&lt;/p&gt;</code></pre>

<p>Output: "Link: Learn More Foo heading".</p>

## Solution 3

Visually hiding content is also a common best practice, but it is a bit outdated. For example:

<pre><code>&lt;a href="..."&gt;Learn More &lt;span class="visually-hidden"&gt; (Foo)&lt;/span&gt;&lt;/a&gt;</code></pre>

Only “Learn More” will show up visually, while "(Foo)" is only accessed via assistive technology. While there may be rare exceptions in using this technique, it is probably best to avoid if you can. ARIA is your freind now.
