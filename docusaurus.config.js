const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ASEAN BTE',
  tagline: 'We are building southeast asia in Minecraft 1:1 scale!',
  url: 'https://ASEAN-Docs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icons/aseanbte_logo.png',
  organizationName: 'ASEAN-Build-The-Earth',
  projectName: 'ASEAN-Docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs.intro',
          routeBasePath: "intro", // change default "doc/" root path
          sidebarPath: require.resolve('./sidebars_intro.js'),
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            if (locale !== 'en') {
              return `https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/blob/main/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
            }
            return `https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/tree/main/docs/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        /* no doc
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/tree/main/',
        },
        */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [ /* Builder guide page */
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'builder-guide',
        path: 'docs.builder-guide',
        routeBasePath: 'guide',
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          if (locale !== 'en') {
            return `https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/tree/main/docs/${locale}`;
          }
          return `https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/tree/main/docs/${docPath}`;
        },
        sidebarPath: require.resolve('./sidebars_builder-guide.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { defaultMode: "dark", },
      autoCollapseSidebarCategories: true,
      hideableSidebar: true, // idk what this do
      navbar: {
        title: 'ASEAN BTE',
        logo: {
          alt: 'ASEAN BTE',
          src: 'img/icons/aseanbte_logo.gif',
        },
        items: [
          {
            type: 'doc',
            docId: 'get-started',
            position: 'left',
            label: 'Get Started',
          },
          { 
            to: 'guide/builder-guide',
            position: 'left',
            label: 'Builder Guide',
          },
          {
            to: 'support', 
            label: 'Support Us', 
            position: 'left'
          },
          {
            href: 'https://discord.gg/DNwnKmkQpw',
            label: 'Discord',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsBefore: [
              { // [TODO]: replace this href to our google doc translate site
                href: 'https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs',
                label: 'Help Us Translate',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: 'intro/get-started',
              },
              {
                label: 'Builder Guide',
                to: 'guide/builder-guide',
              },
            ],
          },
          {
            title: 'Discord Community',
            items: [
              {
                label: 'BuildTheEarth.net',
                href: 'https://discord.gg/buildtheearth',
              },
              {
                label: 'ASEAN BTE',
                href: 'https://discord.gg/DNwnKmkQpw',
              },
              {
                label: 'Asia BTE',
                href: 'https://discord.gg/R5dfd4Fc8b'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Support Us',
                to: '/support',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ASEAN-Build-The-Earth',
              },
              {
                label: 'Official BTE Website',
                href: 'https://buildtheearth.net/'
              }
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // extra annoucement
      announcementBar: {
        id: 'annouce_wip-caution',
        content:
          '<strong>Hey, This website is still in a heavy development, If you want to help us, ask our admin in discord server or contribute directly in our <a href="https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs">github repository</a></strong>',
        backgroundColor: '#99ffcc',
        textColor: '#091E42',
        isCloseable: false,
      },
    }),
    

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'th', 'my', 'id', 'vn', 'ph'],
    localeConfigs: {
      /**
       * htmlLang code: [https://gist.github.com/JamieMason/3748498]
       */
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      th: {
        label: 'Thai',
        direction: 'ltr',
        htmlLang: 'th-TH',
      },
      my: {
        label: 'Malay',
        direction: 'ltr',
        htmlLang: 'ms-MY',
      },
      id: {
        label: 'Indo',
        direction: 'ltr',
        htmlLang: 'id-ID',
      },
      vn: {
        label: 'Vietnam',
        direction: 'ltr',
        htmlLang: 'vi-VN',
      },
      ph: {
        label: 'Philippines',
        direction: 'ltr',
        htmlLang: 'en-PH',
      },
    },
  },
};

module.exports = config;
