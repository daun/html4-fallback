/**
 * html4-fallback
 * https://github.com/daun/html4-fallback
 *
 * Use fallback stylesheet in HTML4 browsers
 *
 * Copyright (c) 2020
 * License: MIT
 * Author: Philipp Daun https://github.com/daun
 * Author: Mike Byrne @13twelve https://github.com/13twelve
 */

(function (d) {
  var w = window, h, s;

  /**
   * Check if a fallback is required
   */
  function isHtml4Browser() {
    return !(typeof d.querySelectorAll && 'addEventListener' in w && w.history.pushState && d.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1'));
  }

  /**
   * Disable all stylesheets except the fallback
   */
  function disableStylesheets() {
    if (/in/.test(d.readyState)) {
      setTimeout(disableStylesheets, 9);
    } else {
      for (var i = 0; i < d.styleSheets.length; i++) {
        var ss = d.styleSheets[i];
        if (ss.title !== 'fallback') {
          ss.disabled = true;
        }
      }
    }
  }

  /**
   * Activate fallback styles if necessary
   */
  function serveFallback(fallbackStylesheet) {
    if (fallbackStylesheet && isHtml4Browser()) {
      h = d.getElementsByTagName('head')[0];
      s = d.createElement('link');
      s.rel = 'stylesheet';
      s.title = 'fallback';
      s.href = fallbackStylesheet;
      h.appendChild(s);
      disableStylesheets();
    }
  }

  /**
   * Assign to window object to allow customization
   */
  window.serveHtml4Fallback = serveFallback;

})(document);
