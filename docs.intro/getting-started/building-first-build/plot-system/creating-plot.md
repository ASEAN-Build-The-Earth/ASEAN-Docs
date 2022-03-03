---
title: Creating your plot
id: creating-plot
---
```mdx-code-block
import Styling from '@site/util/styling';
import Image from '@theme/IdealImage';

import guide_create from "@site/static/img/docs/creating-plot/guide_create.gif";
import guide_companion from "@site/static/img/docs/creating-plot/your-companion.png";
import guide_profile from "@site/static/img/docs/creating-plot/your-profile.png";
import guide_panel from "@site/static/img/docs/creating-plot/your-panel.png";
import guide_difficulty from "@site/static/img/docs/creating-plot/plot-difficulty.png";
```
<div class="container"><div class="row">
    <div class="col col--6">After you joined our plot server, you'll have a netherstar compaion in your inventory.<br/><br/></div>
    <div class="col col--6"><Image img={guide_companion} alt="companion" width="250rem" style={{borderRadius:"6px"}} className="item shadow--md" /></div>
</div></div>

## Companion panel
Hold your companion then <kbd>Right Click</kbd> or <kbd>/companion</kbd> to open your Plot server panel.

```mdx-code-block
<Image img={guide_panel} alt="companion_panel" width="500rem" style={{ borderRadius:"6px" }} className="item shadow--md" />
```


## Choose and create your plot
:::tip Choose your difficulty first

```mdx-code-block
<Image img={guide_difficulty} alt="difficulty" width="500rem" />
```

:::



```mdx-code-block
<Styling.MinecraftWindow width="fit-content" useDropdown="true"><img src={guide_create} width="500rem" alt="Guide Image"/></Styling.MinecraftWindow>
```