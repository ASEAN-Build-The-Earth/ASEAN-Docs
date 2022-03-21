import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

/**
 * This file is made only to append custom thai language font to the document when it loads
 * will remove this file if i finds better way to import custom font in
 */
if (ExecutionEnvironment.canUseDOM) {
    // As soon as the site loads in the browser, register a global event listener

    /* get document's locale by accessing the baseUrl prefix of that local */
    const locale = document.baseURI.charAt(document.baseURI.length - 3) 
        + document.baseURI.charAt(document.baseURI.length - 2) 
        + document.baseURI.charAt(document.baseURI.length - 1);

    console.log("entered locale of ", locale);

    if(locale === "th/" || locale === "/th") 
    {  /* append a google font to every thai locale*/
        var font = document.createElement("link");
        font.rel = "stylesheet";
        font.href = "https://fonts.googleapis.com/css?family=Noto+Sans+Thai";
        // font.type = "text/css";
        document.head.appendChild(font);
        console.log("appended script child");
    }
    else
    {
        console.log("no thai locale found");
    }
}




