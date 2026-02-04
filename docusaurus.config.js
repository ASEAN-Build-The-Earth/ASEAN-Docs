// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
;
const { globalConfig, i18nConfig } = require('./config');
const isDeployPreview = process.env.CONTEXT === "deploy-preview";
const isDeveloping = process.env.NODE_ENV === "development";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)


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
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'builder-guide',
        path: 'docs.builder-guide',
        routeBasePath: 'guide',
        sidebarPath: './sidebars.builder-guide.js',
        // ... other options
      },
    ],
    require.resolve('docusaurus-lunr-search'),
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],



  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
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
          // {
          //   href: globalConfig.discordInviteLink,
          //   label: 'Discord',
          //   position: 'right',
          // },
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // extra annoucement
      // announcementBar: {
      //   id: 'annouce-translation',
      //   content:
      //     '<strong>Make a ticket in our discord server and message us your email to gain access to our google spreadsheet and help us translate this site. (you can preview it <a href="https://docs.google.com/spreadsheets/d/1SMr3F7tv2HIj4bqk0YDECXhJhLZVJPfs12SxFEVHm9c/edit?usp=sharing">here</a>)</strong>',
      //   backgroundColor: '#99ffcc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },

    }),
};

export default config;
