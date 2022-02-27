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
  favicon: 'img/aseanbte_logo.png',
  organizationName: 'ASEAN-Build-The-Earth',
  projectName: 'ASEAN-Docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // change default "doc/" root path
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            if (locale !== 'en') {
              return `https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/blob/main/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
            }
            return `https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/tree/main/docs/${docPath}`;
          },
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
          /*{
            to: '/docs/',
            label: 'Blog',
            position: 'left'
          }, */
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
                label: 'How to join ASEAN BTE',
                to: '/docs/how-to-join',
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
    }),

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'th', 'my', 'vi'],
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
      vi: {
        label: 'Vietnamese'
      },
    },
  },
};

module.exports = config;
