/* config.js
 * This file contains globally accessable config with repetative usage
 */

const globalConfig = {
  globalModule: require.resolve('./src/global/client_module.js'),
  globalStyle: require.resolve('./src/global/global.css'),
  siteUrl: "https://builders-doc.netlify.app",
  baseGithubUrl: "https://github.com/ASEAN-Build-The-Earth",
  discordInviteLink: "https://discord.gg/DNwnKmkQpw",
  googleGtag: "G-FT2L3SS4RX",  
  globalScript: [{ 
    /* kofi widget button script, will be drawn on footer */
    defer: false,
    async: false,
    src: 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js',
    id: "kofi-overlay-widget-script",
  }],
}

const i18nConfig = {
  defaultLocale: 'en',
  registeredLocales: ['en', 'th', 'my', 'id', 'vn', 'ph'],
  localeConfigs: {
      /**
       * htmlLang code: [https://gist.github.com/JamieMason/3748498]
       */
      en: { label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      th: { label: 'Thai',
        direction: 'ltr',
        htmlLang: 'th-TH',
      },
      my: { label: 'Malay',
        direction: 'ltr',
        htmlLang: 'ms-MY',
      },
      id: { label: 'Indonesian',
        direction: 'ltr',
        htmlLang: 'id-ID',
      },
      vn: { label: 'Vietnamese',
        direction: 'ltr',
        htmlLang: 'vi-VN',
      },
      ph: { label: 'Filipino',
        direction: 'ltr',
        htmlLang: 'en-PH',
      },
  },
}

module.exports = { globalConfig,  i18nConfig }