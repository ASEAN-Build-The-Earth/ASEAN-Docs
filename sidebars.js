/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'how-to-join',
        },
        {
          type: 'doc',
          id: 'links'
        }
      ],
    },
    {
      type: 'category',
      label: 'Building Tips',
      items: [
        {
          type: 'doc',
          id: 'tips/settings',
        },
        {
          type: 'doc',
          id: 'tips/best-practices',
        },
        {
          type: 'doc',
          id: 'tips/finding-borders-of-my-plot'
        },
        {
          type: 'doc',
          id: 'tips/teleport'
        }
      ],
    },
    {
      type: 'category',
      label: 'Useful WorldEdit commands',
      items: [
        {
          type: 'doc',
          id: 'worldedit/blocks-ids'
        },
        {
          type: 'doc',
          id: 'worldedit/select-region'
        },
        {
          type: 'doc',
          id: 'worldedit/beginner-commands'
        }
      ]
    }
  ],
};

module.exports = sidebars;
