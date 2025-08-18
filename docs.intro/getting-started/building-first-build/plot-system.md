---
title: Plot System
id: plot-system
---
```mdx-code-block
import MinecraftWindow from '@site/src/components/MinecraftWindow';
import Img from '@site/src/components/Img'
import Text from '@site/src/components/TextDecoration';
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

import BuildsiteImage from '@site/static/media/docs/intro/plot-system/buildsite_exmp.png';
import JoiningPlotImage from '@site/static/media/docs/intro/plot-system/plot_join.gif';
```
<!-- Brief Intro -->
As we introduced before we have a server dedicated for newcomer to try building their first build called <em style={{color:"var(--ifm-link-color)"}}>Plot System</em>,<br/>
Continue to the next page to get started on it.

<!-- Main Topic -->
## What is Plot System ?
<Text.Tab/>Plot system is a BuildTheEarth Building system made for newcomer and beginner builders alike to try out building.<br/>
Builders entering the server will have an option to build on any build site created by official builders.<br/><br/>
<details><summary>What is a Build Site ?</summary>

Build site is an on-going team project in every country we're building on (ASEAN).<br/>
The plot's buildsite is originally outlined in the [Master server](../visiting#1-master-server) and submitted to [Plot server](../visiting#2-plot-server) for everyone to try and build on.

:::info our buildsite at Malaysia, Klang
<dt><sup>This buildsite is registered in the plot system!</sup></dt>
<Img src={BuildsiteImage} aspect="848 477" className="item shadow--md" style={{borderRadius:"6px"}} alt="Welsome To ASEAN BTE" />
:::
</details>

## Overview
<Text.Tab>Each plot given to builder is a floating island looking land with an outline of the main building in the plot.
The outline is a rough representation of the building's shell by [Google Map](https://www.google.com/maps/) satelite image for builder to build on top of it.
</Text.Tab>

:::tip Before you go to next page
- We recommend you to log in to our [Plot server](../visiting#2-plot-server) and follow along with this document.

```mdx-code-block
<MinecraftWindow maxWidth="600px" useDropdown="true"><Img src={JoiningPlotImage} aspect="600 318" alt="Guide Image"/></MinecraftWindow>
```
:::

- Now let's see the workflow from creating your plot to submitting your first BuildTheEarth build via plot system!

```mdx-code-block
<DocCardList items={useCurrentSidebarCategory().items}/>
```