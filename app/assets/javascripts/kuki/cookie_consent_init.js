if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

var default_options = {
  "palette": {
    "popup": {
      "background": "#efefef",
      "text": "#404040"
    },
    "button": {
      "background": "transparent",
      "text": "#8ec760",
      "border": "#8ec760"
    }
  },
  "position": "bottom-right",
  "type": "opt-in",
  onStatusChange: function (status) {
    window.setTimeout(function () { window.location.reload() }, 100)
  },
}

init_kuki = function(options) {
  i18n_data = JSON.parse(JSON.parse($("[data-kuki-i18n]").data('kuki-i18n')))

  i18n = {
    "content": {
      "message": i18n_data.cookie_hint,
      "dismiss": i18n_data.decline_button,
      "allow": i18n_data.accept_button,
      "link": i18n_data.learn_more_link,
    }
  }

  consent_options = Object.assign(default_options, options, i18n);
  window.cookieconsent.initialise(consent_options)
}

$(document).on('turbolinks:load', function () {
  $('body').on('click', '.deny-cookie-consent', function (e) {
    e.preventDefault()
    console.log("Cookies", Cookies.get)
    Cookies.set('cookieconsent_status', 'deny')
    window.setTimeout(function () { window.location.reload() }, 100)
  })
  $('body').on('click', '.allow-cookie-consent', function (e) {
    e.preventDefault()
    Cookies.set('cookieconsent_status', 'allow')
    window.setTimeout(function () { window.location.reload() }, 100)
  })
})
