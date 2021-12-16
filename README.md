# ASEAN BTE Docs

[ASEAN BTE Docs](https://asean-docs.netlify.app) website consists all the important docs related to builder guide, plot system workflow, API etc..

Made with [Docusaurus](https://docusaurus.io/)

## Prerequisites

<hr>

Before installation, please make sure you have already installed following tools:

- [Git](https://git-scm.com/downloads)
- [NodeJs](https://nodejs.org/en/download/)

## Installation Steps

<hr>

1. Fork the project
2. Clone the project
3. Navigate to the project directory `cd ASEAN-Docs`
4. Install dependencies with `npm install`
5. Run `npm start`

## How to translate the docs ?

<hr>

If the language is been already configured in `docusaurus.config.js`, skip to step 4

1. Configure the language in `docusaurus.config.js` by adding the languages's aliases to [this](https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/blob/main/docusaurus.config.js#L117) list.
2. Start the locale site by using the following commmand 

   ```bash 
   npm run start -- --locale <locale-aliases>
   ```
3. Run the following commands to get the copy of the docs, where you can translate them
   
   ```bash
   mkdir -p i18n/<locale-aliases>/docusaurus-plugin-content-docs/current

   cp -r docs/** i18n/<locale-aliases>/docusaurus-plugin-content-docs/current
   ```

4. Open `i18n/<locale-aliases>/docusaurus-plugin-content-docs/current` directory, you would find the copy of all the docs in this directory and you could edit them.

5. Run `npm build` after translation.

## How to translate the content of the website ?

<hr>

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

## Contributors 

<a href="https://github.com/ASEAN-Build-The-Earth/ASEAN-Docs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ASEAN-Build-The-Earth/ASEAN-Docs" />
</a>