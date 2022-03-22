const Locale = require("./locale");

function drawKofiWidget() {
    /* the widget parent script is loaded in docusaurus config file */
    kofiWidgetOverlay.draw('bteasean', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.background-color': '#434B57',
        'floating-chat.donateButton.text-color': '#fff',
    });
}

function fetchLocale() {
    /* get document's locale by accessing the baseUrl prefix of that local */
    const locale = document.baseURI.charAt(document.baseURI.length - 3) 
        + document.baseURI.charAt(document.baseURI.length - 2) 
        + document.baseURI.charAt(document.baseURI.length - 1);
    Locale.fetch(locale.replace("/", ""));
}

function customLocale() {
    switch(Locale.getCurrent()) 
    {
        case "th": {
            /* append a google font to every thai locale*/
            var font = document.createElement("link");
            font.rel = "stylesheet";
            font.href = "https://fonts.googleapis.com/css?family=Noto+Sans+Thai";
            // font.type = "text/css";
            document.head.appendChild(font);
        }
        case "id": {}
        case "my": {}
        case "vn": {}
        case "ph": {}
    }
}

function inject() {
    fetchLocale();
    drawKofiWidget();
    customLocale(); 
}

module.exports = { inject }