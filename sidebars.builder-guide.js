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
module.exports =  {
    docs_builderGuide: [
      {
        type: 'doc',
        label: 'Intro to Builder Guide',
        id: 'builder-guide',    
      },
      {
        type: "doc",
        label: "Modpack",
        id: "modpack"
      },
      /* "Building In BuildTheEarth" Category */
      {
        type: 'category',
        label: 'Building in BTE',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'building',
        },
        items: [
          { /* "Basic Building" Category */
            type: 'category',
            label: 'Basic BTE Building',
            link: {
              type: "doc",
              id: "building/basic"
            },
            items: [
              /* Advance Building Documents */
              {
                type: "doc",
                label: "Diagnal Build",
                id: "building/basic/diagnal-build"
              },
            ],
          },
          { /* "Advance Building" Category */
            type: 'category',
            label: 'Advance Building',
            link: {
              type: "generated-index",
            },
            items: [
              /* Advance Building Documents */
              "building/advance-building/detailing",
            ],
          },
          { /* "Tips" Category */
          type: 'category',
          label: 'Tips',
          link: {
            type: "generated-index",
          },
          items: [
            "building/tips/best-practices",
            "building/tips/finding-borders-of-my-plot",
            "building/tips/settings",
            "building/tips/teleport",
          ],
        },
        ]
      },
      { /* "World Edit" Category */
            type: 'category',
            label: 'World Edit',
            link: {
              type: "doc",
              id: "worldedit/what-is-worldedit"
            },
            items: [
              /* World Edit Documents */
              { 
                type: 'category',
                label: 'Basic of World Edit',
                link: {
                  type: "doc",
                  id: "worldedit/basic-worldedit"
                },
                items: [
                  "worldedit/basic/blocks-ids",
                  "worldedit/basic/select-region",
                ],
              },
              { 
                type: 'category',
                label: 'Basic Commands',
                link: {
                  type: "doc",
                  id: "worldedit/basic-commands"
                },
                items: [
                  "worldedit/basic-commands/wcmd.sel-poly",
                ],
              },
              { 
                type: 'category',
                label: 'Advanced Commands',
                link: {
                  type: "doc",
                  id: "worldedit/advanced-commands"
                },
                items: [
                  "worldedit/advanced-commands/wcmd.brush",
                ],
              },

            ],
          },
    ]
  };
  
  