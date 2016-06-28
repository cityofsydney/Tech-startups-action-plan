# Tech startups action plan: Survey results

[![Deployment status from DeployBot](https://cityofsydney.deploybot.com/badge/45290642051912/57356.svg)](http://deploybot.com)

We use the  [Foundation for Sites](http://foundation.zurb.com/sites) framework to deliver static code to our production folder. It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Theme development

### Install gulp and Bower

Building the theme requires [node.js](http://nodejs.org/download/). 

From the command line:

1. Install [gulp](http://gulpjs.com) and [Bower](http://bower.io/) globally with `npm install -g gulp bower`
2. Navigate to the theme directory, then run `npm install`
3. Run `bower install`

You now have all the necessary dependencies to run the build process.

### Available gulp commands

* `npm start` — For development , watch your project and incrementally rebuild it when source files are changed
* `npm run build` — To create compressed, production-ready assets
