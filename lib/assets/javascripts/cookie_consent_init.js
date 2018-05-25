window.addEventListener("load", function(){
  window.cookieconsent.initialise({
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
    "content": {
      "message": "This website uses cookies",
      "dismiss": "Got it",
      "allow": "Cookies erlauben",
      "link": "Learn more"
    }
  })});