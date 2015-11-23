/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-gtm',

  contentFor: function(type, config) {
    if (type === 'head') {
      return "<noscript><iframe src='//www.googletagmanager.com/ns.html?id=" + config['ember-cli-gtm'].appId + "' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript> <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','" + config['ember-cli-gtm'].appId + "');</script>";
    }
  }
};

