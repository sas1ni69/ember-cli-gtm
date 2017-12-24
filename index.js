/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-gtm',

  contentFor: function(type, config) {
    var config = config['ember-cli-gtm']
    var appId = config && config.appId
    if (type === 'body' && appId) {
      return "<noscript><iframe src='//www.googletagmanager.com/ns.html?id=" + appId + "' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript> <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','" + appId + "');</script>";
    }
  }
};
