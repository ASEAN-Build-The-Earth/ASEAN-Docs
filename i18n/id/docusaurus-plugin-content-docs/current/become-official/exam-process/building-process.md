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
Use the tpll command from the previous page to build your outline for the exam plot's buildings.
After you finished  building the outlines for the buildings and roads you can start to build.


## Building
If you are familiar with building in our plot system, the building process in exam plot is about the same.<br/>
Please go back to read our [Plot System Guide](../../getting-started/building-first-build/plot-system/building-plot) if you do not have alot of experience with our plot system.

:::info

<details>
<summary>
    Building in exam plot will not have 3D
</summary>

In ASEAN, there are only 2 - 3 cities that have full 3D scanned buildings examples of these cities are `Malaysia, Klang` and `Philippine, Davao city`.<br/>
Since the exam plot does not have 3D Buildings to use as reference you'll have to estimate the building height, 
length etc with only satellite and street view image.

Keep in mind that you can use street view to estimate the building height this can be done by comparing humans/cars to the building.
In most cases a floor of a building is usually 3 blocks high (3 Meters).
```mdx-code-block
<Img src={IMG_TypicalBuilding} maxWidth="600px" aspect="1920 1039" className="item shadow--md" style={{borderRadius:"6px"}} alt="Typical Building in Exam Plot" />
```

</details>

:::

## Fill
One more tip is that you can fill a roof with a world edit command
* Stand on the block you want to fill your roof. (The block you are standing one must have solid border blocking you)
* Type `//fill` followed by [Block ID](./making-outline#block-id) and the Radius that you want your fill command to fill.
* Your command should looks like the reference below
* After running the command, it'll fill up the block you are standing on by Radius you typed blocked by the border block.

:::caution
High radius numbers may crash the server.
:::
```mdx-code-block
<MinecraftWindow useDropdown="true" maxWidth="600px">
    <Img srcList={[WEBP_Fill, GIF_Fill]} aspect="800 440"/>
</MinecraftWindow>
```
