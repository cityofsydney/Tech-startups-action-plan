# Tech startups action plan: Survey results

[![Deployment status from DeployBot](https://cityofsydney.deploybot.com/badge/45290642051912/57356.svg)](http://deploybot.com)

We use the  [Foundation for Sites](http://foundation.zurb.com/sites) framework to deliver static code to our distribution folder. It has a Gulp-powered build system with these features:

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
* `npm run deploy` — To Quickly deploy dist folder to gh-pages with gulp-gh-pages

### Dev notes
* https://confluence.atlassian.com/bitbucketserver/permanently-authenticating-with-git-repositories-776639846.html

* http://stackoverflow.com/questions/5343068/is-there-a-way-to-skip-password-typing-when-using-https-on-github

* https://answers.squarespace.com/questions/4565/how-can-i-avoid-credentials-typing-on-every-git-push-pull.html
