---
title: How BuildTheEarth building looks like
id: bte-building
---
```mdx-code-block

import Admonition from '@theme/Admonition';
import Text from '@site/src/components/TextDecoration'
import Img from '@site/src/components/Img'

import IMG_BadBuild from '@site/static/img/docs/bte-buildings/bad_build.png';
import IMG_GoodBuild from '@site/static/img/docs/bte-buildings/good_build.png';
import IMG_BadRoof from '@site/static/img/docs/bte-buildings/bad_roof.png';
import IMG_GoodRoof from '@site/static/img/docs/bte-buildings/good_roof.png';
import IMG_DiagnalBuild from '@site/static/img/docs/bte-buildings/diagnal_build.png';
import IMG_NormalIRLRoof from '@site/static/img/docs/bte-buildings/normal_roof_1.png';
import IMG_NorminalIRLRoof from '@site/static/img/docs/bte-buildings/normal_roof_2.png';

```

Before we build anything, you first need to know  what its look like to build with us

## Most building are diagonal❕
<Text.Tab>As we are building the earth one to one scale, buildings have to be accurate and aligned properly which makes it impossible to have every build being in a straight line.</Text.Tab>

```mdx-code-block

<Admonition type="info" title={<p style={ { display: "inline-flex", textTransform:"none", fontStyle:"italic" } }>Typical BuildTheEarth building outline</p>} >
    <Img src={IMG_DiagnalBuild} width="1920" height="1009" alt="every building is diagnal" style={{borderRadius:"6px"}} className="item shadow--md" />
</Admonition>

```

## Every build looks smaller than you think
<Text.Tab/>Many newcomers think 1:1 scale is relative to your minecraft character and misunderstand it.<br/>
for example if you built a normal house with 4 blocks tall floor its means you have built a 4 meter high building and make it looks out of place.
A typical building in our project only has 2 - 3 blocks height as you can see in the example below.<br/><br/>

<!-- good bad card -->
```mdx-code-block

<div class="container">
    <div class="row row--no-gutters">
        <div class="col">
            <Admonition 
                type = "danger" 
                icon = { <svg width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg> }
                title = {
                    <p style={ { display: "inline-flex", textTransform:"none", fontStyle:"italic" } }>
                        A typical real-life building is not this tall
                    </p>
                } 
            >
                <Img src={IMG_BadBuild} width="1920" height="1017" alt="bad build" style={{borderRadius:"6px"}} className="item shadow--md" />
            </Admonition>
        </div>
        <div class="col">
            <Admonition 
                type = "tip" 
                icon = { <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg> } 
                title = {
                    <p style={ { display: "inline-flex", textTransform:"none", fontStyle:"italic" } }>
                        A BTE building in south east asia is about this size
                    </p>
                } 
            >
                <Img src={IMG_GoodBuild} width="1920" height="1015" alt="good build" style={{borderRadius:"6px"}} className="item shadow--md" />
            </Admonition>
        </div>
    </div>
</div>

```

## Roof is not 90 degree steep!
<!-- custom document card -->
```mdx-code-block

<div class="card-demo">
    <div class="card">
        <div class="card__image">
            <div class="row row--no-gutters">
                <div class="col">
                    <Img src={IMG_NorminalIRLRoof} width="764" height="321" alt="bad roof" style={{borderWidth:"2px", borderBottomStyle:"solid", borderColor:"var(--ifm-color-emphasis-200)"}} className="item shadow--md" />
                </div>
                <div class="col">
                    <Img src={IMG_NormalIRLRoof} width="1708" height="787" alt="bad roof" style={{transform:"translateY(-20px)", borderWidth:"2px", borderBottomStyle:"solid", borderColor:"var(--ifm-color-emphasis-200)"}} className="item shadow--md" />
                </div>
            </div>
        </div>
        <div class="card__body" style={{padding:"0 var(--ifm-card-horizontal-spacing) var(--ifm-card-vertical-spacing) "}}>
            <p>
                As you can see, its very hard to find a steep 45 degrees roof in real world.<br/>
                It turns out we have many new builders that build their roofs with  a 45 degree block or stair that makes the building seems unnatural.
            </p>
        </div>
        <div class="container">
            <div class="row row--no-gutters">
                <div class="col">
                    <Admonition 
                        type = "danger" 
                        icon = { <svg width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg> }
                        title = {
                            <p style={ { display: "inline-flex", textTransform:"none", fontStyle:"italic" } }>
                                The roof is too steep hence it is bad and inaccurate
                            </p>
                        } 
                    >
                        <Img src={IMG_BadRoof} width="1910" height="1020" alt="bad roof" style={{borderRadius:"6px"}} className="item shadow--md" />
                    </Admonition>
                </div>
                <div class="col">
                    <Admonition 
                        type = "tip" 
                        icon = { <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg> } 
                        title = {
                            <p style={ { display: "inline-flex", textTransform:"none", fontStyle:"italic" } }>
                                The roof has a natural looking steepness. 
                            </p>
                        } 
                    >
                        <Img src={IMG_GoodRoof} width="1910" height="1024" alt="good roof" style={{borderRadius:"6px"}} className="item shadow--md" />
                    </Admonition>
                </div>
            </div>
        </div>
    </div>
</div>

```
