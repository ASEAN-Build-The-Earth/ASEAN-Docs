---
title: Plot System
id: plot-system
---
```mdx-code-block
import MinecraftWindow from '@site/src/components/MinecraftWindow';
import Text from '@site/src/components/TextDecoration';
import BuildsiteImage from '@site/static/img/docs/plot-system/buildsite_exmp.png';
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';
```
<!-- Brief Intro -->
As we introduced before we have a server dedicated for newcomer to try building their first build called <em style={{color:"var(--ifm-link-color)"}}>Plot System</em>,<br/>
Continue to next page to get started on it.

<!-- Main Topic -->
## What is Plot System ?
<Text.Tab/>Plot system is a BuldTheEarth Building system made for newcomer and beginner builder to try out building.<br/>
Builder entered  the server will have an option to build in any build site created by official builder.<br/><br/>
<details><summary>What is Build Site ?</summary>

Build site is an on-going team project in every country we're building on(ASEAN).<br/>
the plot's buildsite is originally outlined in the [Master server](../visiting#1-master-server) and submit to [Plot server](../visiting#2-plot-server) for everyone to build on.



:::info our buildsite at Malaysia, Klang
<dt><sup>this buildsite is registered in plot system too!</sup></dt>
<img src={BuildsiteImage} width="500rem" className="item shadow--md" style={{borderRadius:"6px"}} alt="Welsome To ASEAN BTE" />
:::
</details>

## Overview
<Text.Tab>Each plot given to builder is a floating island looking land with an outline of the main building in the plot.
The outline is a rough repesentation of building's shell by [Google Map](https://www.google.com/maps/) satellite image for builder to build on top of it.
</Text.Tab>

:::tip Before you go to next page
- we recommend log in to our [Plot server](../visiting#2-plot-server) and folow along with this document.

```mdx-code-block
<MinecraftWindow width="fit-content" useDropdown="true"><img src={require('@site//static/img/docs/plot-system/plot_join.gif').default} alt="Guide Image"/></MinecraftWindow>
```
:::

- Now let's see the workflow from creating your plot to submitting your first BuildTheEarth build via plot system!

```mdx-code-block
<DocCardList items={useCurrentSidebarCategory().items}/>
```