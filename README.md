<h1 align="center">
<p align="center">ASEAN BTE Docs</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/32b1c8b2-926b-477d-bb86-4f62fc0853af/deploy-status)](https://app.netlify.com/sites/builders-doc/deploys)
[![npm version](https://img.shields.io/npm/v/@docusaurus/core.svg?style=flat)](https://www.npmjs.com/package/@docusaurus/core)
[![Discord Chat](https://img.shields.io/discord/702883639574396969)](https://discord.gg/DNwnKmkQpw)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs)

</h1>

[ASEAN BTE Docs](https://asean.buildtheearth.asia/) website consists all the important docs related to builder guide, plot system workflow, Building in <abbr title="Build The Earth">BTE</abbr> etc..

> Made with [Docusaurus](https://docusaurus.io/)

## Translation
Make a ticket in our discord server and message us your email to gain access to our google spreadsheet and help us translate this site. _(you can preview it <a href="https://docs.google.com/spreadsheets/d/1SMr3F7tv2HIj4bqk0YDECXhJhLZVJPfs12SxFEVHm9c/edit?usp=sharing">here</a>)_

---
## Developer Corner
This section is for experienced developer to try compile the project and contributing to this resopitory.
### Prerequisites

Before installation, please make sure you have already installed following tools:

- [Git](https://git-scm.com/downloads)
- [NodeJs](https://nodejs.org/en/download/)

### Installation Steps

1. Fork the project
2. Clone the project
3. Navigate to the project directory `cd ASEAN-Docs`
4. Install dependencies with `npm install`
5. Run `npm start`

### How to translate/edit the docs ?

Go to docs page which you want to transalte/edit and click the edit button and do the following changes. Don't change the content inside `---`

After editing the file, click the propose changes button and wait until the maintainers review it.

### How to translate/edit the content of the website ?

If the language is been already configured in `docusaurus.config.js`, skip to step 

If the text is wrapped under `Translate` tag, skip to step 

1. Configure the language in `docusaurus.config.js` by adding the languages's aliases to [this](https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/blob/main/docusaurus.config.js#L117) list.
2. Start the locale site by using the following commmand 

   ```bash 
   npm run start -- --locale <locale-aliases>
   ```
3. Import the `Translate` module of docusaurus
4. Wrap the text which is to be translated by using the `Translate` tag. Make sure that the text which is wrapped is simple, plain text without any tags in between them
5. Run the following command, to generate JSON files where you could add the translated version of the text 
   ```bash
   npm run write-translations -- --locale <locale-aliases>
   ```
6. After translation, run `npm build`.

---
## Contributors 

<a href="https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ASEAN-Build-The-Earth/ASEAN-Docs" />
</a>
