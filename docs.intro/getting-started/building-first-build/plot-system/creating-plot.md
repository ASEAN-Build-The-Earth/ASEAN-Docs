---
title: Creating your plot
id: creating-plot
---

```mdx-code-block

import MinecraftWindow from "@site/src/components/MinecraftWindow";
import Text from "@site/src/components/TextDecoration";

import Image from "@theme/IdealImage";
import Admonition from '@theme/Admonition';

import guide_create from "@site/static/img/docs/creating-plot/guide_create.gif";
import guide_companion from "@site/static/img/docs/creating-plot/your-companion.png";
import guide_profile from "@site/static/img/docs/creating-plot/your-profile.png";
import guide_panel from "@site/static/img/docs/creating-plot/your-panel.png";
import guide_difficulty from "@site/static/img/docs/creating-plot/plot-difficulty.png";

```
<div class="container"><div class="row">
    <div class="col col--6"><dd>After you joined our plot server, you'll have a netherstar compaion in your inventory.</dd><hr/></div>
    <div class="col col--6"><Image img={guide_companion} alt="companion" width="250rem" style={{borderRadius:"6px"}} className="item shadow--md" /></div>
</div></div>

## Companion panel
```mdx-code-block

<MinecraftWindow width="fit-content" useDropdown="true">
    <Image img={guide_panel} alt="companion_panel" width="500rem" />
</MinecraftWindow>

```

Hold your companion then <kbd>Right Click</kbd> or <kbd>/companion</kbd> to open your Plot server panel.
The server panel is basically your plot system hub and your builder profile, it is included with many thing
- at the main inventory grid is all advariable build site for you to build on
- down in the bottom right of the grid is your builder profile and utility, you can see your builder's point and your on-going plot here
- at the top right corner is plot's difficulty filter, your will get this building difficulty by creating the plot

```mdx-code-block

<Admonition type="info">
    <div style={{lineHeight:"200%"}}>
        <Text.Hl color="#55FF55" ><strong style={{textShadow:"2px 1px 3px #575757"}}>Easy</strong></Text.Hl> 1 - 2 small house and simple detail<br/>
        <Text.Hl color="#FFAA00" ><strong style={{textShadow:"2px 1px 3px #575757"}}>Medium</strong></Text.Hl> detailed row houses or medium sized city block building<br/>
        <Text.Hl color="#FF5555" ><strong style={{textShadow:"2px 1px 3px #575757"}}>Hard</strong></Text.Hl> big city block to big skyscraper <br/>
    </div>
</Admonition>

```

## Choosing your plot 
:::caution 

due to this system is new, you can only choose buildsite at `Malaysia, Klang` for now, more build site is coming soon!

:::

:::tip Choose your difficulty first
due to oour system will set the default difficulty as automatic, you could accidentally get to build hard plot if you forgets to choose the difficulty.

```mdx-code-block

<Image img={guide_difficulty} alt="difficulty" width="500rem" />

```
:::

## Create your plot!
after you decided your interested buildsite and difficulty, simply press the buildsite icon and the system will auto generate you a plot to build.


```mdx-code-block

<MinecraftWindow width="fit-content" useDropdown="true"><img src={guide_create} width="500rem" alt="Guide Image"/></MinecraftWindow>

```