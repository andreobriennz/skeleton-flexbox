# Skeleton Flexbox - v0.1.1 - 22 May

This is an unofficial project adding flexbox to the popular Skeleton boilerplate. Development is in beta.

## Get Started

The v-flex.scss contains a very simple flexbox grid which won't conflict with the Skeleton framework. While not tested on other frameworks, it is designed to be unlikely to conflict.

To create a row, add a class of either "v-row" or "flex-row" to the parent div. Next, set the width of the children by adding a class based on a twelve column grid and mobile-first design. For example, use a class of "six-sm" to target all screens (300px wide or larger) which support media queries and make the div six columns wide. If you need to target all screens, including those which don't support media queries, you can use "six-a".

You can then add a second class ending with -md to target medium size screens (750px or larger). ie "four-md" would cause all devices with a screen what is at least 750px to show the div as being four columns wide.

Example:

<div class="v-row">
  <div class="six-sm four-md"></div>
  <div class="six-sm four-md"></div>
  <div class="six-sm four-md""></div>
  <div class="six-sm four-md""></div>
</div>

If all the divs in a row are the same width, you can specify this in the parent div to create cleaner code. simply move the sizing suffix to the beginning. For example six-sm would become sm-six. This method of selecting will have a slightly negative impact on performance, but it should usually be very minor on modern devices.

Example:

<div class="v-row sm-six md-four">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
