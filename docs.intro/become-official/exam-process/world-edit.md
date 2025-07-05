---
title: World Edit
id: world-edit
---
```mdx-code-block
import Img from '@site/src/components/Img';
import Video from '@site/src/components/Video';
import MinecraftWindow from '@site/src/components/MinecraftWindow';

import GIF_Wand from '@site/static/media/docs/intro/exam/world-edit/wand.gif';
import WEBP_Wand from '@site/static/media/docs/intro/exam/world-edit/wand.webp';
import WEPM_Selection from '@site/static/media/docs/intro/exam/world-edit/world_edit_guide_selection.webm';
import MP4_Selection from '@site/static/media/docs/intro/exam/world-edit/world_edit_guide_selection.mp4';
import MP4_CuttingThings from '@site/static/media/docs/intro/exam/world-edit/exam_guide_cut.mp4';
```

An easy to use tool to edit Minecraft buildings/worlds without having to places blocks one by one.
In this case, we will be using it to clear up the plot terrain and create outlines

:::tip
To get better understanding of World Edit, consider reading their [World Edit documentation](https://worldedit.enginehub.org/en/latest/quickstart/).<br/>
You can always ask people in our discord if you get stuck on any of the topics.
:::
:::tip
Alternatively, you can check out our Builder Guide.
:::

## Wand
The wand is the main tool for world edit,<br/>
you can get it by typing `//wand` and a wooden axe will pop in your inventory.<br/>
(Grabbing a `wooden axe` from your inventory works too)

```mdx-code-block
<Img srcList={[WEBP_Wand, GIF_Wand]} maxWidth="400px" aspect="600 330" className="item shadow--md" style={{borderRadius:"6px"}} alt="Getting Wand" />
```
## Selection
A selection is an area selected by your [wand](./world-edit#wand), take a look at the image below, by selecting 2 positions
you creat a 3d cuboid selection. You can then use world edit's commands and the result will be within the selected selection
```mdx-code-block
<MinecraftWindow useDropdown="true" maxWidth="800px">
    <Video width="1920">
        <source src={WEPM_Selection} type="video/webm" alt="World Edit Selection"/>
        <source src={MP4_Selection} type="video/mp4" alt="World Edit Selection"/>
    </Video>
</MinecraftWindow>
```
---

## World Edit in use
### Clearing Terrain
To clear or flatten uneven terrain, we will use `//cut` command to clear everything up.<br/>

#### To use your wand 
> 1. Pick a block then <kbd>Left-Click</kbd> the first position with your wand 
> 2. Go to your second position and <kbd>Right-Click</kbd> the block to create world edit selection.<br/>
> the wand will create invisible 3D selection from the first block and second block you clicked with your wand
> 3. Now that you got the world edit selection done, type the command `//cut` in chat and the blocks you selection should get cut.
> 4. Repeat untill you cleared up the whole island.
>
> :::tip note
> There is no fixed y-level in this plot, flattern the plot up any style you prefer.
> :::
```mdx-code-block
<MinecraftWindow useDropdown="true" maxWidth="600px">
    <Video width="1920">
        <source src={MP4_CuttingThings} type="video/mp4" alt="World Edit //cut command"/>
    </Video>
</MinecraftWindow>
```