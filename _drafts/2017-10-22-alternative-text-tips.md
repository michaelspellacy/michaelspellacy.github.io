---
layout: default
title: "Alternative Text Tips"
tags: Accessibility
---

In regard to alternative text, here are a few simple rules to keep in mind. These may be especially helpful for any new developers in the audience:

## Rule 1: Know When To Describe

Ask yourself if it will matter whether the image you are adding to a page can can be easily replaced with another photo. If the answer is yes, then the image may be decorative and will only require a null alt. If the answer is no, then the image may be informative, and and should be described. There may be some exceptions here, but this quick test helps keep decision making fairly simple.

## Rule 2: The Null Alt

If no alternative text is needed, a null (empty) alt (alt="") must *always* be provided. If it is not included, assistive technology may read out the file path. Who wants to hear “SearchBanner_Desktop_1800x600_version_1_revision_c.jpg” read back to them?

<pre><code>&lt;img src=”hero-banner.jpg” alt=””&gt;</code></pre>

## Rule 3: Links with Images

If you have a link with a single image in it, then that image *must* contain an alternative text value:

<pre><code>&lt;a href=”https://www.tmp.com/”&gt;&lt;img src=”tmp-logo.png” alt=”TMP Worldwide”&gt;&lt;/a&gt;</code></pre>

If equally informative text is present within the link, then alternative text may be redundant and not needed in these cases. This is fine:

<pre><code>&lt;a href=”https://www.tmp.com/”&gt;&lt;img src=”tmp-logo.png” alt=””&gt; &lt;span&gt;TMP Worldwide&lt;/span&gt;&lt;/a&gt;</code></pre>

## Rule 4: Short and Sweet

Be succinct in your descriptions and please refrain from adding anything inappropriate or which does not adequetly descrbe the image. In an article about New York City, I may have an image that specifically relates to a portion of my content, so this is an excelent use case for adding alternative text:

![Sunset over New York Harbor. Statue of Liberty in foreground.](https://content.screencast.com/users/Spellacy/folders/Jing/media/3463e661-3ca6-4774-908c-635f059f9e5a/00000058.png)

<pre><code>&lt;img src=”sunset-new-york.jpg” alt=”Sunset over New York Harbor. Statue of Liberty in foreground.”&gt;</code></pre>

## Rule 5: The Web Is For People

The purpose of alternative text is to provide information to users who use assistive technology to access our sites and as a fallback for images that may not load. That's it. Any attempt to add description for, say, the purpose of attempting to improve search engine ranking, should be frowned upon. There can be some exceptions, though.  For instance, if it just so happens that a keyword *could* be applied to an image as part its description, then this might be acceptable, but those instances will likely be few and far between. Just use common sense and remember the web is for people–not search engines!

If you would like to learn more about when to use alternative text, be sure to check out the [W3C's Alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/). [Alt-texts: The Ultimate Guide](https://axesslab.com/alt-texts/) is also another informative read.
