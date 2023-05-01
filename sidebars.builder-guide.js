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
        label: "Download the Modpack",
        id: "modpack"
      },
      {
        type: "doc",
        label: "Mods included in the Modpack",
        id: "modpackMods"
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
                label: "Color picking",
                id: "building/basic/ColorBasics"
              },
              {
               type: "doc",
               label: "BTE Practices",
               id: "building/basic/bteStandards"
              },
              {
               type: "doc",
               label: "Modpack commands",
               id: "building/basic/modpack-basics"
              }
            ],
          },
          { /* "Advance Building" Category */
            type: 'category',
            label: 'Advanced Building',
            link: {
              type: "generated-index",
            },
            items: [
              /* Advance Building Documents */
              "building/advance-building/detailing",
              "building/advance-building/Terraforming",
              "building/advance-building/advancedStructures",
              "building/advance-building/infrastructure",
              "building/advance-building/nature",
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
            "building/tips/settings",
            "building/tips/teleport",
          ],
        },
        ]
      },
      { /* "World Edit" Category */
            type: 'category',
            label: 'WorldEdit',
            link: {
              type: "doc",
              id: "worldedit/what-is-worldedit"
            },
            items: [
              /* World Edit Documents */
              { 
                type: 'category',
                label: 'Tips',
                link: {
                  type: "doc",
                  id: "worldedit/basic-worldedit"
                },
                items: [
                  "worldedit/basic/blocks-ids",
                  "worldedit/basic/pline",
                ],
              },
              { 
                type: 'category',
                label: 'Basics of WorldEdit',
                link: {
                  type: "doc",
                  id: "worldedit/basic-commands"
                },
                items: [
                  "worldedit/basic-commands/Wands",
                  "worldedit/basic-commands/Selection",
                  "worldedit/basic-commands/Modification",
                  "worldedit/basic/Masking",
                ],
              },
              { 
                type: 'category',
                label: 'Advanced Concepts',
                link: {
                  type: "doc",
                  id: "worldedit/advanced-commands"
                },
                items: [
                  "worldedit/advanced-commands/webrush",
                  "worldedit/advanced-commands/Generate"
                ],
              },

            ],
          },
    ]
  };
  
  