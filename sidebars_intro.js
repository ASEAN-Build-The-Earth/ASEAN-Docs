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
module.exports = {
  docs_intro: [
    /* "Getting Started" Category */
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'get-started',
      },
      items: [
        {
          type: "doc",
          label: "Visiting",
          id: "getting-started/visiting"
        },
        /* "our builder system" page */
        {
          type: "doc",
          id: "getting-started/builder-system"
        },
        /* "Building Your First Build" Category */
        { 
          type: 'category',
          label: 'Building Your First Build',
          link: {
            type: 'doc',
            id: "getting-started/building-first-build"
          },
          collapsed: false,
          items: [
            { /* "Plot system" Category */
              type: 'category',
              label: 'Plot System',
              link: {
                type: 'doc',
                id: 'getting-started/building-first-build/plot-system',
              },
              items: [
                /* Plot system Documents */
                "getting-started/building-first-build/plot-system/creating-plot",
                {
                  type: "doc",
                  label: "Where is your plot ?",
                  id: "getting-started/building-first-build/plot-system/getting-reference",
                },
                {
                  type: "doc",
                  label: "Finishing your plot",
                  id: "getting-started/building-first-build/plot-system/finishing-plot"
                },
                "getting-started/building-first-build/plot-system/submitting-plot"
              ],
            },
          ],
        },
        {
          type: "category",
          label: 'Basic Building',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: "doc",
              label: "BTE Buildings",
              id: "getting-started/basic-building/bte-building"
            }
          ]
        },
      ],
    },
    /* "Becoming Official Builder" Category */
    {
      type: 'category',
      label: 'Becoming Official Builder',
      collapsible: true,
      collapsed: true,
      link: {
        type: "generated-index"
      },
      items: [
        {
          type: "doc",
          label: "Requirements",
          id: "become-official/official-builder-req"
        },
        {
          type: "doc",
          label: "Modpack",
          id: "become-official/modpack"
        },
        {
          type: "doc",
          label: "Exam Plot",
          id: "become-official/exam-plot",
        },
        "become-official/finish-the-exam",
      ]
    },
    {
      label: "F.A.Q",
      type: "doc",
      id: "faq",
    }
  ],
};

