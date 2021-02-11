<div align="center">
    <a href="https://toucaan.com" rel="follow">
        <img src="header.svg" width="800">
    </a>
</div>

# Introduction

Toucaan is an _intrinsic_, _mutative_, and _deterministic_ CSS framework for the web _and_ mobile apps using the `webView.`

### What Toucaan is about

Designing "app-like" interfaces. 


- It is about optimizing UX/UI according to the category of device, its capabilities, physical size, and situational constraints.
- Separating stylesheets according to the [new landscape of the web](https://bubblin.io/blog/the-new-landscape-of-the-web). 
- Putting accessibility above everything else.

Toucaan introduces intrinsic block-scoped typography with `vmin` instead of the more commonly used units like `px,` 'em,` `rem,` or `vw/vh` that do not scale. Read more about why and how Toucaan came about to be over [here](https://bubblin.io/blog/toucaan-introduction).

### Key features

1. Intrinsic in principle and design.
2. Block-scoped typography using `vmin`
3. Deterministic UX/UI `vmin` or `inch: pixel` mappings (Optional).
4. Supports Apple Watch 5 and upwards, up to projectors & OLED TVs.
5. Simple yet classy utilities. It's like writing style in plain English.
6. Accessibile by default.
7. CSS architecture that's grounded in mathematics.
8. Super customizable and themable.
9. Zero resetting or bulldozing vendor consistency. 
10. Amenable to mobile app interfaces and native UI patterns.

## Definitions

1. **Intrinsic** implies that your app design "belongs" to the device in question naturally. The term `intrinsic` was [coined](https://www.zeldman.com/2018/05/02/transcript-intrinsic-web-design-with-jen-simmons-the-big-web-show/) by Jen Simmons of Mozilla back in 2017. While intrinsic could mean different things to different people, it really points to "app-like" interfaces that belong to the user device.

2. **Mutative** implies that you can edit and add to baseline rules (think customized `normalize.css`) yourself. Directly into the framework. This concept borders close to the idea of a classless & framework-less approach to web design. There is no single heavy `reset` or `normalize` or an external utility included in the DOM to enforce browser consistency.

3. **Deterministic** means without any guesswork or approximations of the container the UI will live in. Put simply, a layout can "belong" to a device only when the layout _knows_ what device it is being viewed on. Learn more about the CSS Router that Toucaan utilizes to serve category-specific stylesheets (watch => mobile => tablet => desktop => television) instead of hardcoded media-queries that match to a device-width.

Toucaan uses several ultramodern CSS patterns that are grounded in mathematics. It also introduces some new concepts like:

1. Using `vmin` for block-scoped typography and intrinsic aspect-ratios,
2. Optionally use absolute [--inch](https://github.com/bookiza/--inch) unit or any other physical SI unit like centimeters or millimeters to define your UI.
3. And much, much more…

### What Toucaan isn't about

Toucaan is careful about avoiding tribalistic positions that developers often take. It doesn't subscribe to a view that says 'use this, but not that,' like _not_ choosing between CSS grids, flexbox, or floats. 

Use whatever you like, wherever you want; however, you may deem it fit.

### Primary concepts

1. [Rethinking CSS frameworks](https://bubblin.io/blog/toucaan-introduction)
2. [A new baseline](https://bubblin.io/blog/baseline-css)
3. [Web designing for the Apple Watch](https://bubblin.io/blog/web-design-recommendations-for-the-apple-watch)
4. [The new landscape of the web](https://bubblin.io/blog/the-new-landscape-of-the-web)
5. [Mapping pixels to physical inches.](https://bubblin.io/blog/inch)
6. [Intrinsic CSS Router](https://bubblin.io/blog/a-css-router)
7. _Blockscoped Typography and Intrinsic Aspect Ratios_
6. _Switch Media Query Explained_
7. _Understanding Intrinsic Web Design_

## Getting started

Head over [here](https://www.toucaan.com/docs/getting-started) to get started on Toucaan with early documentation. 

Contributions are invited for both the framework and documentation.  

### Financial support

If you like my [work](https://github.com/sponsors/marvindanig) and please consider supporting it financially.

#### The Superbook

> I'm writing a book on the [Fundamentals of Toucaan CSS](https://bubblin.io/cover/the-toucaan-framework-by-marvin-danig) that will explain the thoughts and the reasoning behind the choices made by Toucaan and how you could override them.

### Sponsors

<div align="center">
  <a href="https://goose.red" rel="follow">
    <img src="sponsors/red-goose.png" width="50"> 
  </a>
</div>


### Vendor Support

Modern browsers that are inside of 2017 and now. The support can go further back, but check-out [CSS Remedy](https://github.com/jensimmons/cssremedy)
to see how much debt you're willing to shoulder for backward-compatibility.

#### Why call it Toucaan?

Only because I owned the pretty domain name.

Besides, Toucan is a beautiful bird. This aggressive little arboreal
_ramphastidus_ symbolizes both beauty and strength. We will ground our framework on the metaphor of a Toucaan and implement a design language that covers support for all devices on the web. And not just mobile and desktop.

Occasionally, though only rarely, we may even spar with other CSS frameworks using our "mean" oversized and colorful bill. 😉 So… say hello to Toucaan—the tropical new CSS framework for modern web apps. 

And repeat after me: **_if Toucaan, then you can too!_** 😉