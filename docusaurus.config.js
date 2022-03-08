const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ASEAN BTE',
  tagline: 'We are building southeast asia in minecraft scale 1:1!',
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
    [ /**Responsive Image quality plugin 
       * src: (https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image)
       * ```jsx
       * <Image img={require('./path/to/img.png')} />
       * ```
       */
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1920, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: true, // see in build ver only
      },
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
            label: 'Support us', 
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
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/DNwnKmkQpw',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AseanBte',
              },
            ],
          },
          {
            title: 'More',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'GitHub',
                href: 'https://github.com/ASEAN-Build-The-Earth',
              },
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
        backgroundColor: '#f69c00',
        textColor: '#091E42',
        isCloseable: false,
      },
    }),
    

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'th', 'my', 'vn'],
    localeConfigs: {
      en: {
        label: 'English'
      },
      th: {
        label: 'Thai'
      },
      my: {
        label: 'Malay'
      },
      vn: {
        label: 'Vietnamese'
      },
    },
  },
};

module.exports = config;
