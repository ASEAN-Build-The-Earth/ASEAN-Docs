---
title: Builders FAQ
id: builder-faq
---

## Generating areas/chunks
Please only generate what you would finish, not the entire area. If you need to generate a large area, please break it down into smaller portions before building it all.

## /tpll Not working?
Try using `/tpll <lat> <long> <y level>` instead

## The Warp Format:
### What format should I use for warp names?

General Rules:
- Use the 2-letter international country codes in lowercase, as listed here: Country Codes
- Exception: Cambodia will use `cam` instead of `kh`.
- Warp names should use PascalCase (capitalize the first letter of each word, no spaces).

Examples:
- "Joe mama" becomes `JoeMama`
- "Taling Chan" becomes `TalingChan`
- Warps that are a single word in each section (e.g., sg, punggol, north) do not need PascalCase.

### Excluding warps from ingame menu
For those who do not want warps to appear in the ingame menu OR webmap add ! to the start of the warp
Example: `/warp !kfcVN`

---

### How should I format the country code?
Use **2-letter lowercase ISO country codes** from [iban.com](https://www.iban.com/country-codes).  
**Exception:** Use `cam` for Cambodia.

Examples:
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