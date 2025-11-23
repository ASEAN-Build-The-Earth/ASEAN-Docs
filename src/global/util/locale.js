class Locale 
{
    static current = "en";
    
    static getCurrent() {
        return this.current;
    }

    static fetch(locale) {
        const availableLocale = ["th", "id", "my", "ph", "vn"];
        if(availableLocale.includes(locale)) this.current = locale;
    }
}

module.exports = Locale;