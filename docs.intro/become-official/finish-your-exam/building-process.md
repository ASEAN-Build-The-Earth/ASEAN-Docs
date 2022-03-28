---
title: Building Process
id: building-process
---
```mdx-code-block
import Img from '@site/src/components/Img';
import MinecraftWindow from '@site/src/components/MinecraftWindow';

import IMG_TypicalBuilding from '@site/static/media/docs/intro/exam/building-process/typical_building.png';
import WEBP_Fill from '@site/static/media/docs/intro/exam/building-process/fill.webp';
import GIF_Fill from '@site/static/media/docs/intro/exam/building-process/fill.gif';
```
In this page, we will get you some tips to finish your exam plot faster.

## Outline
Use the tpll trick from trick to outline your exam plot's building.
After you get building outline and roads done you can start recreate your build in minecraft.


## Building
If you already familiar building in plot system, the building process in exam plot is nearly the same.<br/>
Please go back to read the [Plot System Guide](../../getting-started/building-first-build/plot-system/finishing-plot) if you still get a hand on in

:::info

<details>
<summary>
    Building in exam plot won't have 3D
</summary>

In ASEAN, there is only 2 - 3 city that has full 3D scanned city such as `Malaysia, Klang`, `Philipine, Davao city`.<br/>
By this the exam plot wont 3D Building to use as reference you'll have to guess building height, 
length etc. by your self with only satellite and street view image.

Keep in mind that you can use street view environment to guess out the building height like comparing human/cars to buildings.
In most case 1 floor of a build is usually 3 blocks high.
```mdx-code-block
<Img src={IMG_TypicalBuilding} maxWidth="600px" aspect="1920 1039" className="item shadow--md" style={{borderRadius:"6px"}} alt="Typical Building in Exam Plot" />
```

</details>

:::

## Fill
One more tips is you can fill out a roof with world edit command
* Stand on the block you want to fill your roof. (The block you are standing one must have solid border blocking you)
* Type `//fill` followed by [Block ID](./making-outline#block-id) and Radius your fill command can expanded to.
* Your command should looks like the reference below
* After running the command, it'll fill up the block you are standing on by Radius you typed blocked by the border block.

:::caution
High radius number above 50 blocks might crash the server.
:::
```mdx-code-block
<MinecraftWindow useDropdown="true" maxWidth="600px">
    <Img srcList={[WEBP_Fill, GIF_Fill]} aspect="800 440"/>
</MinecraftWindow>
```
