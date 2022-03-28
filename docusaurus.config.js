const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { globalConfig, i18nConfig } = require('./config');
const isDeployPreview = process.env.CONTEXT === "deploy-preview";
const isDeveloping = process.env.NODE_ENV === "development";
// const isProductionDeployment = process.env.CONTEXT === "production";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ASEAN BTE',
  tagline: 'We are building southeast asia in Minecraft 1:1 scale!',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'media/icons/aseanbte_logo.png',
  organizationName: 'ASEAN-Build-The-Earth',
  projectName: 'ASEAN-Docs',
  url: globalConfig.siteUrl,
  clientModules: [globalConfig.globalModule],
  customFields: globalConfig,
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs.intro',
          routeBasePath: "intro", // change default "doc/" root path
          sidebarPath: require.resolve('./sidebars.intro.js'),
          editUrl: ({ locale, docPath }) => {
            if (locale !== 'en') {
              return `${globalConfig.baseGithubUrl}/ASEAN-Docs/blob/main/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
            }
            return `${globalConfig.baseGithubUrl}/ASEAN-Docs/tree/main/docs.intro/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        gtag: {
          trackingID: globalConfig.googleGtag,
          anonymizeIP: true,
        },
        blog: false,
        /* no blog
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/tree/main/',
        },
        */
        theme: {
          customCss: globalConfig.globalStyle,
        },
        /* http://localhost:3000/__docusaurus/debug */
        debug: isDeveloping? true : false,
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
        editUrl: ({locale, docPath}) => {
          if (locale !== 'en') {
            return `${globalConfig.baseGithubUrl}/ASEAN-Docs/tree/main/docs.builder-guide/${locale}/docusaurus-plugin-content-docs-builder-guide/current/${docPath}`;
          }
          return `${globalConfig.baseGithubUrl}/ASEAN-Docs/tree/main/docs.builder-guide/${docPath}`;
        },
        sidebarPath: require.resolve('./sidebars.builder-guide.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  (
    {
      colorMode: { defaultMode: "dark", },
      autoCollapseSidebarCategories: true,
      hideableSidebar: true, // idk what this do
      image: "media/icons/aseanbte_full_logo.jpg", //meta og image
      metadata: [{name: 'theme-color', content: '#ffc561'}],
      navbar: {
        title: 'ASEAN BTE',
        logo: {
          alt: 'ASEAN BTE',
          src: 'media/icons/aseanbte_logo.gif',
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
            href: globalConfig.discordInviteLink,
            label: 'Discord',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsBefore: [
              { // [TODO]: replace this href to our google doc translate site
                href: `${globalConfig.baseGithubUrl}/ASEAN-Docs`,
                label: 'Help Us Translate',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Association of Southeast Asian Nation Build The Earth.`,
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
                label: 'BuildTheEarth.Asia',
                href: 'https://discord.gg/R5dfd4Fc8b'
              },
              {
                label: 'BuildTheEarth ASEAN',
                href: globalConfig.discordInviteLink,
              },             
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
                href: globalConfig.baseGithubUrl,
              },
              {
                label: 'BuildTheEarth Website',
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
    }
  ),
    
  i18n: {
    defaultLocale: i18nConfig.defaultLocale,
    locales: isDeployPreview? [i18nConfig.defaultLocale] : i18nConfig.registeredLocales,
    localeConfigs: i18nConfig.localeConfigs
  },

  scripts: globalConfig.globalScript,
};

module.exports = config;
