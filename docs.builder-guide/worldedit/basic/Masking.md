---
id: Masking
---

Masking (in our case) is the process of highlighting a specific block in a selected area.

## mask

## gmask
gmask highlights only the blocks **globally**. 

### For example, if you set the gmask to grass
If you're trying to remove terrain:
  - Only the top layer will be affected (no stone, dirt)
  - Ores, gravel and other things still remain
  
If you're trying to copy a building:
  - Only the terrain will be copied over
  - No buildings will be copied (unless it has grass then it will be floating grass)
  
If you're trying to paint a road:
  - Outlines will not be affected 
  - Overlapping pathways will not be affected
  
:::tip
If you encounter where the clipboard is not your result, reset gmask.
:::