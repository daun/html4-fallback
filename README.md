# HTML4 Fallback

A default CSS file to give *unsupported* browsers something other than a totally broken experience of the web.

Based on [area17/html4css](https://github.com/area17/html4css).

[Try the demo tool](http://html4css.dev.area17.com/). In the demo, a website is stripped of its `<head>`, `<style>` and `<script>` tags and a new `<head>` inserted which hooks up the HTML4CSS.

Responsive images are shim'd using [legacypicturefill](https://github.com/area17/legacypicturefill).

## Usage

In the `<head>` of your website, inline the included script. If the browser is deemed to be a HTML4 browser by not ['cutting the mustard test'](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard), the fallback stylesheet is loaded and any other stylesheets are disabled.

```js
  <script>
    // Include minified script
    !function(e){var t,a,l=window;function n(){if(/in/.test(e.readyState)) /* ... */;
    // Serve fallback styles
    serveHtml4Fallback('/dist/styles/html4css.css');
  </script>
```

## Support

* Chrome 15+
* Safari 5.1+
* Firefox 3+
* IE 6+
* Android 4+

## Author

* [Mike Byrne](https://github.com/13twelve) - [@13twelve](https://twitter.com/13twelve) - Original work
* [Philipp Daun](https://github.com/daun) - Video tags, package script
