## Template for webpack setup for static js page

Basic styled index page that supports styling, images and fonts. The purpose of this repo is to provide
out of the box javascript project template built on webpack5. Template supports development and release and saves you from reading the whole [wepback documentation](https://webpack.js.org/guides/).

Last updated: February 2023

### What's in the template

- static `index.html` page with a toggle button that enlarges the text on demand. For illustrative purposes the page has information on open source movement.
- `index.js` script with event listener
- development mode with `watch` capabilities based on `webpack-dev-server`

### Setup

1. Use this repo as a template, following [these instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
2. Setup:

```
npm install
```

3. Build

```
npm build
```

and open `/dist/index.html` in your browser

4. ... or run with watch

```
npm start
```

and open browser at http://localhost:8080 and your changes to src will be automatically picked up when you save
files from `src`

Note:

- I have added the fonts to `.gitignore` as they are the property of [Threedotstype](https://threedotstype.com/product/di-grotesk/)
