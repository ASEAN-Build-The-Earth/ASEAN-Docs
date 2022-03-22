class Locale {
    static current = "";
    static getCurrent() {
        return this.current;
    }
    static fetch(locale) {
        this.current = locale;
    }
}

module.exports = Locale;