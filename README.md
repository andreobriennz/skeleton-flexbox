# Skeleton Flexbox - v0.1.1

This is an unofficial project adding flexbox to the popular Skeleton boilerplate. Development is in beta.

The Skeleton Flexbox grid is designed to work with the Skeleton framework without any conflicting classes or styles. It has not been tested with other other CSS frameworks, but will likely work with many other frameworks as well. It can also be used by itself without a framework. At this stage, it is not designed to be used for more complex layouts.


## Download

### With CSS
First download the v-flex.css file located in the css folder of this repo, and add it into the css folder of your project. There's also a v-flex.min.css file provided for production. Remember to add a reference to this file in the html.

### With SCSS
Download the v-flex.scss file located in this repo, and include it with your other SCSS files. 


## Get Started

### Approach 
Skeleton-Flexbox is used in place of Skelton's row and column classes (Skeleton's container class is optional). It also follows a mobile-first design approach to media queries.

### Rows
To create a row, add a class of either "v-row" or "flex-row" to the parent div. v-row and flex-row do the same thing, so use whichever makes the most sense to you.

### Columns
Set the width of the children divs by adding a class based on a twelve column grid.

For example, to make the div six columns wide, use a class of "six-sm" to target all screens 300px wide or larger. If you need to target all screens, including browsers which don't support media queries (e.g IE8), you can use "six-all".

To target medium size screens (750px or larger) you can then add a second class ending with -md. E.g. "three-md" would cause all devices with a screen what is at least 750px to show the div as being three columns wide.

Example:

```html
<div class="v-row">
  <div class="six-sm three-md"></div>
  <div class="six-sm three-md"></div>
  <div class="six-sm three-md"></div>
  <div class="six-sm three-md"></div>
</div>
```

In the above example, on small devices flexbox would wrap the last two divs to a new row automatically (this works behind the scenes with Skeleton-Flexbox).

If all the divs in a row are the same width, you can specify this in the parent div to create cleaner code. Simply move the sizing suffix to the beginning. For example six-sm would become sm-six. This method of selecting will have a minor impact on performance, but should be negligible on modern devices.

Example:

```html
<div class="v-row sm-six md-three">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```
