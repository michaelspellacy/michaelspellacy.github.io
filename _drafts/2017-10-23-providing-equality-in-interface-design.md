---
layout: default
title: "Providing Equality in Interface Design"
tags: Accessibility Articles
---

When it comes to creating web interfaces, it is easy to fall into the habit of looking at our work from a visual perspective only. As responsible user interface designers and developers, we must always be mindful of the obligation we have to all users. We also need to be conscientious of the fact that what we produce for the web often goes deeper than what we can see on the screens in front of us. Yes, we want all users to be able to access our work, but we also want to ensure an equal experience for everybody as well. What we do for one group of users, we must do for all.

Let's take a look at a couple of examples on how we can do this and see equivalency in action.

## Menu Button

In our first example, we have a menu button that toggles a navigation opened and closed. As you can see, it is a common hamburger menu interface, but with no text included to state it is a menu button.

![A common menu button.](https://content.screencast.com/users/Spellacy/folders/Jing/media/c7e27190-4dc2-4661-98ca-dba8487f6900/00000056.png)

While most visual users will understand the action to take here, many disabled users may not know what to do because the button is missing a label that would help better identify this interface.

<pre><code>&lt;button class="btn-menu"&gt;&lt;span&gt;&lt;/span&gt;&lt;/button&gt;</code></pre>

In the past, we might have added text and accessibly hidden it via CSS, but <abbr title="Accessible Rich Internet Applications">ARIA</abbr> also has our back here and is a more modern solution to including disernable text. By adding `aria-label="Menu"` to our `button`, we have now created an equal experience. Sometimes a little ARIA can go a long way!

<pre><code>&lt;button aria-label="Menu" class="btn-menu"&gt;&lt;span&gt;&lt;/span&gt;&lt;/button&gt;</code></pre>

## Navigation Highlighting

Here is a more advanced approach to creating equivalency (Many thanks to Heydon Pickering for this tip! Check out his book, [Inclusive Web Design](https://shop.smashingmagazine.com/products/inclusive-design-patterns)). Let’s imagine that we toggle open a navigation and notice that one of the links are highlighted to indicate which page we are on. This is a common, and helpful, user interface cue because it reinforces where we are on the site.

![A highlightd navigation item.](https://content.screencast.com/users/Spellacy/folders/Jing/media/175d363e-396b-48eb-8142-df1df452c2ba/2017-06-09_1043.png)

So how do we convey the same thing to assistive technology users? How do we make this an equal experience for all? Once again, ARIA comes to our rescue! Here we add `aria-describedby="current-page"` to our hyperlink. You can hardcode in this attribute, but it will likely be something you wish to append using JavaScript. As a bonus, our focus on accessibility can also benefit everybody, as the presence of ARIA can double as a styling hook to add the needed highlighting for visual users.

<pre><code>&lt;a href="..." aria-describedby="current-page"&gt;Business Careers&lt;/a&gt;</code></pre>

The `aria-describedby` attribute establishes a relationship between the element it is referenced on and more descriptive text that can be found elsewhere on the page. The extra information we wish to convey will be contained within a hidden div element that contains an id of “current-page”.

<pre><code>&lt;div hidden id="current-page"&gt;(Current Page)&lt;/div&gt;</code></pre>

Most assistive technologies should produce the following:

“Link: Business Careers (Current Page)”

As you can see, creating an equal experience can be attained with a little extra thought and elbow grease and when done well, it can really level the experience for all!

ARIA is a powerful way to enhance your markup for assistive technology users. You can learn more about it by visiting these fine publications:

* [WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)
* [ARIA - Accessibility - MDN](href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
* [Web applications and ARIA FAQ - MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Web_applications_and_ARIA_FAQ)
* [WAI-ARIA Basics - MDN](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
* [WebAIM: Accessibility of Rich Internet Applications](https://webaim.org/techniques/aria/)
