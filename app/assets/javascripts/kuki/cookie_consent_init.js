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

