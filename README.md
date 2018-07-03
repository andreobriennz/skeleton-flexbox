# skeleton-flexbox

The Kube branch contains the standard version of skeleton-flexbox with a simple [color palette](https://imperavi.com/kube/docs/colors) from the [Kube](https://imperavi.com/kube) framework. It is currently being developed and tested and may be added to the master branch in the future. In theory this shouldn't introduce breaking changes (it simply adds variables for colors).

Feedback is welcome, especially regarding whether it should be included by default, and whether it would be good to add any additional components from Kube.

## Setup
skeleton-flexbox modernises the popular Skeleton boilerplate by replacing its traditional grid system with Flexbox-Grid (http://flexboxgrid.com), and updating Normalize to version 8

Simply add one of the CSS or SCSS files in the dist/ directory to your project (dist/skeleton-flexbox.min.css is recommended for production)

For documentation on using Flexbox-Grid: http://flexboxgrid.com

For documentation on using Skeleton: http://getskeleton.com

Gulp setup based on: simple-gulp-setup (https://github.com/andreobriennz/simple-gulp-setup)

## Install with NPM
Install skeleton-flex and save to package.json:

`npm install skeleton-flexbox --save`

Import CSS into the project:

`import 'skeleton-flexbox/dist/skeleton-flexbox.css';`

## Dependencies
- Skeleton (http://getskeleton.com/)
- Flexbox-Grid (https://github.com/kristoferjoseph/flexboxgrid)
- Normalize 8.0.0

[View demo](https://andreobriennz.github.io/skeleton-flexbox/)
