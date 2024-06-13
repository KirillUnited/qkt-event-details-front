> AfrikaBurn 2023 - S P A C E | Event Details
## [Live preview](https://afrika-burn-2023.netlify.app/)
## Technologies used
- <a href="https://www.11ty.dev/" rel="nofollow">Eleventy</a> to transform all of the directories with a leading `_`, and will copy across any `images` and `fonts`. Run server.
Eleventy’s output will be to a `_site` directory at the root level.
- <a href="http://mozilla.github.io/nunjucks/templating.html" rel="nofollow">Nunjucks</a> as the templating language
- <a href="https://sass-lang.com/" rel="nofollow">Sass</a> for writing CSS
- <a href="https://tailwindcss.com/" rel="nofollow">Tailwind</a> for utility CSS classes
- <a href="https://babeljs.io/" rel="nofollow">Babel</a> for transpiling and polyfilling JavaScript
- <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a> for vendor prefixing CSS
- <a href="https://webpack.js.org/" rel="nofollow">Webpack</a> for compiling the Sass and JavaScript assets
## Getting started
1. Clone this repo: `git clone https://github.com/KirillUnited/qkt-event-details-front.git`
2. `cd` into the project directory and run `npm install`
## Running and serving a dev build
<pre>npm run start</pre>
Browse to http://localhost:8080.
## Running a prod build
<pre>npm run build</pre>
