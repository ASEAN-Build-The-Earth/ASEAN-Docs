---
title: Builders FAQ
id: builder-faq
---

## Geneating areas/chunks
PLease only generate what you would finish, not the entire area. If you need to generate a large area, please break it down into smaller poritions before building it all.

## The Warp Format:
### What format should I use for warp names?
Use **PascalCase** for all warp names.  
**Examples:**
- `joe mama` → `JoeMama`
- `central park` → `CentralPark`
- `new town plaza` → `NewTownPlaza`

---

### How should I format the country code?
Use **2-letter lowercase ISO country codes** from [iban.com](https://www.iban.com/country-codes).  
**Exception:** Use `cam` for Cambodia.

**Examples:**
- Thailand → `th`
- Cambodia → `cam`

---

### Warp Format by Region

#### Most Countries
Format:
```
/warp {country},{state/province/city},{subDistrict},{warpName}
```

**Examples:**
- `/warp th,bangkok,khlongsan,IconSiam`
- `/warp cam,phnompenh,daunpenh,CentralMarket`

---

#### Singapore
Format:
```
/warp sg,{District/Area},{warpName}
```

**Examples:**
- `/warp sg,AngMoKio,SomeShop`
- `/warp sg,BukitTimah,HillV2`
- `/warp sg,Orchard,IONOrchard`