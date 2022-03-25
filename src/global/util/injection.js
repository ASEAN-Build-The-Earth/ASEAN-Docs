const Locale = require("./locale");

function KofiWidget(onload) {
    /* load the script and as soon as it's loaded we callback to a draw widget function (element id is set in docusaurus.config file) */
    const overlayWidgetScript = document.getElementById("kofi-overlay-widget-script");
    overlayWidgetScript.onload = function(){ onload(); }
}

function drawWidget() {
    /* the widget parent script is loaded in docusaurus config file */
    kofiWidgetOverlay.draw('bteasean', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support Us',
        'floating-chat.donateButton.background-color': '#434B57',
        'floating-chat.donateButton.text-color': '#fff',
    });

    /* support screen reader by adding title to iframe */
    var foterKofiIframeMobi = document.getElementsByClassName("floatingchat-container-mobi");
    var foterKofiIframe = document.getElementsByClassName("floatingchat-container");
    foterKofiIframeMobi[0].title ="Support me on kofi";
    foterKofiIframe[0].title ="Support me on kofi";
}

function fetchLocale() {
    /* get document's locale by accessing the Url prefix of that local
     * the regex extract first sub path from url and output in groups.locale
     * ref: [https://regex101.com/r/kkqwRJ/2]
     */
    const baseURL = document.URL.charAt(document.URL.length - 1) == "/" ? document.URL : document.URL.concat("/");
    const baseLocale = baseURL.match("http[s]?:\/\/([^\/]+\/){1}(?<locale>[^\/]+)\/");
    if(baseLocale !== null) {
        const locale = baseLocale.groups.locale;
        Locale.fetch(locale);
    }
}

function customLocale() {
    switch(Locale.getCurrent()) 
    {
        case "th": {
            /* append a google font to every thai locale*/
            var font = document.createElement("link");
            font.rel = "stylesheet";
            font.href = "https://fonts.googleapis.com/css?family=Noto+Sans+Thai";
            font.type = "text/css";
            document.head.appendChild(font);
        }
        case "id": {/*soon*/}
        case "my": {/*soon*/}
        case "vn": {/*soon*/}
        case "ph": {/*soon*/}
    }
}

function inject() {
    fetchLocale();
    KofiWidget(drawWidget());
    customLocale(); 
}

module.exports = { inject }