---
id: basic-commands
title: Beginner commands
---

:::caution
Do not use too big areas, as it can crash your server and completely lag out your world.
Because this project is not using normal cubes, we most of the time have to change the figure to a polygon. We have moved this first as most people are going to have use for this, so if there is anything you have a question about after reading this, you will most likely find the answer under one of the other commands.
:::

## Circles

![](../../../static/img/docs/world-edit/beginner-commands/circles.png)

Circles can be created easily using WorldEdit. 

Filled: <kbd>//cyl [blocktype] [radius] 1</kbd>

Unfilled: <kbd>//hcyl [blocktype] [radius] 1</kbd>

## Polygon selection

- With <kbd>//sel</kbd> you can change your <kbd>//wand</kbd> to create non square structures. The command that is the most useful is <kbd>//sel poly</kbd>. This will change your wand into a tool that can zone out a location that is not a full square or rectangle, also known as a polygon.
- After you have done <kbd>//sel poly</kbd>, you can start marking your area. Left click where you want to start your polygon, and then right click all the other corners. You can select as many as you want, but the less the better. 

![](../../../static/img/docs/world-edit/beginner-commands/polygon_1.png)

- After you have selected the area, you can use the normal <kbd>//set</kbd>, <kbd>//replace</kbd>, <kbd>//copy</kbd> and <kbd>//paste</kbd> commands to change your build.

![](../../../static/img/docs/world-edit/beginner-commands/polygon_2.png)

- When you are finished with your polygon, you can turn it back to a normal cube wand, with <kbd>//sel cuboid</kbd>.

## Undo 

The undo command is your best friend. If you are afraid to mess up, undo is here to help you. After you have done most commands, you can do <kbd>//undo</kbd> to reset the last WorldEdit command you did. You can also do <kbd>//undo 10</kbd> to erase the last 10 actions you did.

A couple things to remember:
- This will not remove flowing water, or flowing lava, if you have done <kbd>//set</kbd> with either water or lava, so be careful with this!
- If you place something that has to be placed on a block, for example a flower, mid air, then everything will drop down to the floor. This can cause major lags, so double check the ID before you do any major commands.

## Wand 

<kbd>//wand</kbd> is used to bring up the tool you are going to use for your WorldEdit commands. When you do <kbd>//wand</kbd>, you get a wooden axe in your hand, which you can use to select regions of what you want to change. By default it is for cuboid shapes, also known as rectangles and squares. So to select an area, you left click with the wand out on one corner, and right click on the opposite corner. You now have selected the area that you want to work on.

- You can also use <kbd>//pos1</kbd> and <kbd>//pos2</kbd> to select the area. It will take the position out of where your feet are placed, so you can easily make a mark in the sky or above ground without having to build up.

## Set

<kbd>//set [Block-id]</kbd> is used to set every block in your region to a certain block. You can use both block id and name. So if I do <kbd>//set dirt</kbd>, the entire region will change to dirt. If I do <kbd>//set 1</kbd>, the entire region will be changed to stone.

## Replace

<kbd>//replace [from block-id] [to block-id]</kbd> is used to change only certain blocks into a different block in the region. So if I do <kbd>//replace dirt 1</kbd>, it will change all dirt blocks to stone blocks. You can also remove certain blocks using 0, or air. <kbd>//replace stone 0</kbd> will delete all stones in the area. You can also use <kbd>//cut stone</kbd> to remove only stone.

- You can also use //replacenear [radius] [from block-id] [to block-id] if you do not want to mark the area. If i do 
//replacenear 100 water grass, it will replace all water in a 100 block radius to grass centered on the player.

:::caution
If you pick a too large radius number, it can crash both the server and your world. It becomes really laggy above 100 blocks.
:::

## Line 

<kbd>//line [block-id]</kbd> can be used to create a diagonal line from point A to point B. Select this area with the wand. Only works with cuboid wand.

## Up

<kbd>/up [amount]</kbd> is used to teleport you up a certain amount of blocks, and then place a glass block below you. This is useful if you want to select up to a certain amount of blocks above you.

## Copy 

The copy command is used to take a copy of something you have built, and move it to wherever you want it. The commands are <kbd>//copy</kbd> and <kbd>//paste</kbd>.

![](../../../static/img/docs/world-edit/beginner-commands/copy.png)

You have to remember where you took the copy, because it pastes in relation to where you stood. The best idea is to stand either on a corner or in the middle of the building, on ground level. Then you move to where you want to paste it, and stand on the exact same block you stood when you did <kbd>//copy</kbd>.

You can also do <kbd>//rotate [degree amount]</kbd> after you have done <kbd>//copy</kbd> to change the direction of the build. You can do 90, 180 and 270. It rotates clockwise. After you have rotated it, you can do <kbd>//paste</kbd> to place it.

If you only want to copy certain blocks, you can do <kbd>//copy -m [block-id]</kbd> and then 
<kbd>//paste -a</kbd> to place them. The <code>-m</code> stands for mask and any blocks that do not match will be replaced with air in your clipboard. In the paste command, the <code>-a</code> means -air, which means you can paste only the blocks you want without changing anything about the other surrounding blocks.

## Change Biome

Select the area you want to change the biome of using the <kbd>//wand</kbd>, then type <kbd>//setbiome [biome]</kbd> (refer to <kbd>/biomelist</kbd>). Relaunch the world to see your changes.
A known bug is that the biome only changes in a few chunks or that the biome reverts back to the original in some chunks. The only fix we have for this, is to do the command in smaller areas. We do not have a fix for biomes reverting

## Stacking

![](../../../static/img/docs/world-edit/beginner-commands/stacking.gif)

<kbd>//stack [floor amount] [direction]</kbd>. This will rise your building up the amounts of floors you have chosen. The direction can be up, down, north, south, east or west.
Make sure the building height is correct after doing the stack command, as it might not be exactly as high as it is supposed to be.

## Brush commands

The Brush command rewrites what a tool does. You know how right clicking on grass with a hoe will create farmland? With the brush command we can make any tool do a terraforming action. As this action is bound to a tool you need to choose a tool to overwrite. You can choose any tool (hoes, pickaxes, shovels even compasses and swords) except for the wooden axe (it is the WorldEdit wand so you better not overwrite it)

### Sphere brush

We now need to make this tool a brush. While holding the tool use the command: <kbd>/brush sphere [blocktype(s)] [radius]</kbd>.So when we use the command <kbd>/brush sphere stone 3</kbd>.Your tool has become a “sphere brush”. If you right click a ball of stone will appear. This ball has a radius of 3 blocks.

- A variation of this would be if you want a ball that is mixed e.g. stone and dirt. For this you use the command <kbd>/brush sphere stone,dirt 3</kbd>. You can create a mixture of any number of block types. If you do this the block types will be equally distributed. What if you want a ball that is 80% stone and 20% dirt? No problem <kbd>/brush sphere 80%stone,20%dirt 3</kbd> will do the trick.
    - You can use this command to create a mountain very quickly, but it will look like it is made from balls. We need a smoothing tool to fix that.

### Smoothing brush

Choose another tool to rewrite and use the command <kbd>/brush smooth [radius]</kbd> (e.g. <kbd>/brush smooth 4</kbd>) to create a smoothing brush. If you right-click this brush you will smooth out the landscape.

### Mask brush

So far our tools have affected all blocks. The sphere brush has replaced air, grass and stone and the smooth brush has smoothed all block types. We can change this by applying a mask to our brush.
As an example we will create two brushes that can be used to create gigantic farms in seconds.
The first brush will paint the farm land.
Choose a tool and use the command <kbd>/brush sphere 90%farmland,10%water 4</kbd> . This will create a sphere tool that draws a ball of farmland and water.

We only want to affect the top layer with this brush so we use the command <kbd>/mask grass</kbd> to selectively replace grass blocks. (If your top layer is some other block choose that instead of grass)

Now we can create farmland with water sources by right-clicking.

To quickly add the wheat on top we use a wheat plant sphere brush <kbd>/brush sphere wheat 4</kbd> but we only want the wheat to show up on top of farmland so we mask it with <kbd>/mask >farmland</kbd>
