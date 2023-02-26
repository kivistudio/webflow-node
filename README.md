## Template for webpack setup for static js page

Basic styled index page that supports images and fonts. Following instructions is not as easy as it seems. I'm trying to produce a template with close to zero functionality that saves you from reading the whole [wepback documentation](https://webpack.js.org/guides/).

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

and open browser at http://localhost:8080 and your changes to src will be automatically picked up

Note:

- I have added the fonts to `.gitignore` as they are the property of [Threedotstype](https://threedotstype.com/product/di-grotesk/)
