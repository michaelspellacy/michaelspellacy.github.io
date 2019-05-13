---
layout: default
title: "Tabindex Reminder"
tags: Accessibility
---

This is a reminder to be very careful with tabindex. There are only two values that developers should ever really be using:

## tabindex=”0”

You can set this attribute inline or via JavaScript (I personally prefer scripting it in). The element falls into the tab flow of your page and can always be focused on via keyboard.

## tabindex=”-1”

The element can’t be tabbed to via keyboard, but you can bring focus to your element programmatically.

With jQuery, you might do something like this:

<pre><code>$("#foo").attr("tabindex", "-1").focus();</code></pre>

With JavaScript, like so:

<pre><code>element = document.getElementById("#foo");
element.setAttribute("tabindex", "-1");
element.focus();</code></pre>

Values greater than zero create a priority level in your document that will trump the natural tabbing order, so it is almost always better to stay away from using higher tabindex values whenever possible.
