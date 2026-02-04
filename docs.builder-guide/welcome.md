---
title: Welcome to ASEAN
id: welcome-builder
---
This section assumes you have been accepted as a builder in ASEAN.
If you are not please look at [this guide](../docs/official-builder-req)


## Choosing a Build Site

* **Check boundaries first:** [Webmap](https://map.thatsnek.asia/#world:700825:12:-1582800:372:-0.53:0:0:1:flat) → top-left → **“[ALL] Boundaries.”**
* If the location is outside the boundaries, consult the support bot before building.

---

## Starting a Build Site

Once your build site has been approved — or confirmed to be within a boundary — you must create a warp so the site is not lost.

* **Country code:** use a 2-letter lowercase code ([country codes](https://www.iban.com/country-codes)).
* **Naming:** use **PascalCase** (e.g., `JoeMama`, `TalingChan`).
* **Hidden warps:** prefix with `~` to hide from the in-game list and webmap (e.g., `/warp ~KfcVn`).
* **Do not abbreviate** names.

### Format

* **Most countries:**
  `/warp {country},{city/state},{OSM Query},{warpName}`
  Example: `/warp th,Bangkok,Khlongsan,Iconsiam`

* **Singapore:**
  `/warp sg,{OSM Query},{warpName}`
  Example: `/warp sg,AngMoKio,SomeShop`

  For Singapore MRT stations, add `-MRT` at the end of the warp name.
  Example: `/warp sg,Punggol,Oasis-MRT`

---

## OSM Query for the Warp

As ASEAN countries use different naming systems for districts and subdistricts, we standardise names by querying OpenStreetMap (OSM). This ensures the correct district or subdistrict name is used.

Examples of what belongs in the **“OSM Query”** field:


![OSM Query Example 1](@site/static/media/docs/builder-guide/getting-query-th.png)
The warp would be /warp th,Bangkok,YanNawaDistrict,{name}

![OSM Query Example 2](@site/static/media/docs/builder-guide/getting-query.png)
The warp would be /warp my,Penang,SeberangPerai,{name}



* For Singapore, use the **Administrative Boundary (Level 6)** for the entire island.
