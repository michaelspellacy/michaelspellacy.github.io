---
layout: default
title: "Focus Management"
tags: Accessibility
---

<p>Hi All!</p>

<p>I wanted to give you guys a good example of how accessibility can often improve a product for everybody who uses it. A lot of folks ask me what the benefits of accessibility are (Besides avoiding litigation), and the following small tale is one example of it.</p>

<p>Tabbing through a UI, and being able to do it without hindrance, is very important to certain disabled groups of people. For example, if I am navigating via keyboard and tab to a link that spawns, say, a modal window when I access it, then I should expect to have keyboard focus returned to the original link that initiated the modal when the modal window is closed. This is known as focus management. When focus is returned to its original location, the user may then continue on their journey from that point on. Pretty cool, but sadly, not a well-known fact.</p>

<p>Our faceted search has a few such issues with focus management. For example, when I tab to a filter checkbox and select it, an ajax call is made and the results on the page are refreshed, based on that selection. However, because of the refresh, focus is now removed from the checkbox that was selected, forcing the user to have to tab through the UI all over again to reach the checkbox that they just selected. That is a poor experience. I recently opened a ticket to address this problem and it has been fixed. The benefit to visual users is that because focus is now reapplied to the checkbox after the ajax refresh, the label now retains its visual highlighting. Yes, it is a very small and subtle thing, but pretty sweet when you realize that accessibility was the impetus for making it so.  The lesson here is that accessibility can often have a far reaching impact and improve the overall quality of a site or product.</p>

<p>Before: https://www.screencast.com/t/cZeonfgA - Note how highlighting is removed from selected field due to the Ajax refresh.</p>

<p>After:    https://www.screencast.com/t/1dbDD5689n - Ah. Sweet perfection. Note how visual highlighting is retained. Thank you, accessibility!</p>
