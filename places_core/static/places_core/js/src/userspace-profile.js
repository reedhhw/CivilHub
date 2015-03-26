//
// userspace-profile.js
// ====================
// 
// User profile that is available to see by other people.

require([window.STATIC_URL + "/js/config.js"], function () {
  require(['jquery',
           'js/modules/userspace/user-follow',
           'js/modules/common',
           'js/modules/userspace/actions/actions',
           'js/modules/userspace/enable-contacts'],

  function($) {

    "use strict";

    $(document).trigger('load');

  });
});