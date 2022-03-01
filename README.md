<div align="center">
    <h1>Intrinsic Web Design.</h1>
    <a href="https://toucaan.com" rel="follow">
        <img src="header.svg" width="800">
    </a>
</div>

# Introduction

Toucaan is an _intrinsic_, _mutative_, and a _deterministic_ CSS framework. 

### Definition:

1. **Intrinsic** implies that your web designs must "belong" to the device in question. Implement the most natural and accessible UX/UI that utilizes a user's device's physical and technical characteristics.

The term `intrinsic design` was [coined by Jen Simmons](https://youtu.be/AMPKmh98XLY) of Mozilla (now of Apple) back in 2017. Here is a [podcast and transcript](https://www.zeldman.com/2018/05/02/transcript-intrinsic-web-design-with-jen-simmons-the-big-web-show/) of the original discussion if you like. 

While intrinsic web design could mean different things to different people, it usually means arriving at a native "app-like" interface that closely fits the use-case and user's device/accessibility situation. 

Read more about Intrinsic Web Design over [here](https://medium.com/@mattkrick/intrinsic-web-design-b5e9f9c8d8d6).

2. **Mutative** means that the user-written styles are added directly into the framework. This concept borders close to the idea of a low-class or classless implementation for a given web design. Mutative also implies that there is no single heavy `reset` or `reboot` css file to import except for the utilities for the HTML tags that are explicitly included in the app by the developer.

3. **Deterministic** means applying style without approximations or any guesswork about the UI container. Simply put, a layout can "belong" to a device only when it knows the kind of device it is on.

Learn more about how Toucaan uses a [CSS Router](https://bubblin.io/blog/a-css-router) to serve category-specific stylesheets (watch → mobile → tablet → desktop → television…) instead of hardcoded width based media-queries.


### Demo

The [Red Goose](https://goose.red) website is a real-life demo / inspiration / implementation of the Toucaan CSS Framework. It's a work in progress. 

#### Toucaan Fundamentals 

1. [Rethinking CSS frameworks](https://bubblin.io/blog/toucaan-introduction)
2. [A new baseline](https://bubblin.io/blog/baseline-css)
3. [Web designing for the Apple Watch](https://bubblin.io/blog/web-design-recommendations-for-the-apple-watch)
4. [The new landscape of the web](https://bubblin.io/blog/the-new-landscape-of-the-web)
5. [Mapping pixels to physical inches?](https://bubblin.io/blog/inch)
6. [Writing a Router in CSS](https://bubblin.io/blog/a-css-router)
7. [Understanding Intrinsic Typography with the Magic of the VMIN units](https://bubblin.io/blog/magical-powers-of-css-vmin-unit)
6. _Switch Media Query Explained_
7. _Understanding Intrinsic Web Design_


### About

Toucaan is all about designing "app-like" interfaces on the web. It is meant for building web _and_ mobile apps using the building blocks of web alone, i.e., HTML, CSS, JavaScript, and [WebAssembly](https://webassembly.org/). 🏅

It is about:

- Optimizing UX/UI according to a device, its underlying capabilities (e.g.: `pointer: coarse /fine`), physical size, and other intrinsic qualities of a web device.
- Putting accessibility above everything else.
- Routing stylesheets according to the [new landscape of the web](https://bubblin.io/blog/the-new-landscape-of-the-web). 
- [Domain Driven Design](https://verraes.net/2021/09/what-is-domain-driven-design-ddd/) and upwards.

Toucaan uses several ultramodern CSS patterns that are grounded in maths and the fundamentals of Intrinsic Web Design. It introduces some new concepts like:

1. Using a `vmin` based typeface unit for block-scoped typography and intrinsic aspect-ratios for components in place of the older font units like `px` `em` `rem` or even `vw`. 

Toucaan makes web design more accessible, more scalable, and logical.

2. Extends optional use of absolute [--inch](https://github.com/bookiza/--inch) units or other SI units of physical measurement like centimeters or millimeters to define your UI. (this is a work in progress)
3. A CSS router with conditional media queries to ship and maintain only so much css that is necessary for a given outlet–`mobile.css`, `watch.css`, `desktop.css`, and so on….

And a lot more.

> Read more about how Toucaan came about to be over [here](https://bubblin.io/blog/toucaan-introduction).

### Key features

1. Intrinsic architecture.
2. Block-scoped typography using `vmin`.
3. Deterministic UX/UI using physical attributes like `inch: pixel` mappings (Optional).
4. Supports Apple Watch 5 and upwards, up to projectors & OLED TVs.
5. Simple yet classy utilities. It's like writing style in plain English.
6. Accessibile by default.
7. CSS architecture that's grounded in mathematics.
8. Super customizable and themable.
9. Zero resetting or bulldozing vendor consistency. 
10. Follows native UI patterns for mobile-app interfaces.


## Getting started

The first step of setting up Toucaan on your project is to remove _all_ instances of the following line from the head tag of your web app:

```css
  <link rel="stylesheet" href="path/to/app.css" />
``` 

Toucaan does not use a `link` tag to import the stylesheet into the document. It uses a css router with a singular priority css `@import` call from within a `<style> </style>` tag, like so:

```html
<!doctype html>
<html>
<head>
  <!--Regular head stuff-->
  <style> 
    /* Toucaan Router Code goes here:                    */
    /* This router separates the application style    */
    /* along the two axes of Intrinsic Web Design:  */

    @import url('/route/to/landscape.css') only screen and ( /* Some conditions here. */ );
    @import url('/route/to/portrait.css') only screen and ( /* Some other conditions here. */ );
  </style> 
</head>
<body>
  <!-- Add your site or application content here -->
  <div id="app">Hello world! This is HTML5 Boilerplate.</div>
  <script src="route/to/app.js"></script>
</body>
</html>
```

Head over [here](https://www.toucaan.com/docs/getting-started) to get started. We are looking for help on documentation and contributors for this project. Feel free to submit a PR or write to me directly if you want to join the core team and help me develop this project.

### Vendor Support

Modern browsers that are inside of 2017 and now. The support can go further back, but check-out [CSS Remedy](https://github.com/jensimmons/cssremedy) to see how much debt you are willing to take for backward-compatibility.


## Financial support

If you like my [work](https://github.com/sponsors/marvindanig) please do consider supporting it financially.

Or you can sponsor me on [Github](https://github.com/sponsors/marvindanig).

#### Sponsorship

Current sponsors of the team Toucaan (which is mostly me right now) are: 

<div align="left">
  <a href="https://goose.red" rel="follow">
    <img src="sponsors/red-goose.png" width="50"> 
  </a>
</div>

Feel free to join the bandwagon!

### Why call it Toucaan?

Mainly because I owned the pretty domain name. Besides, Toucan is a beautiful bird. This aggressive little arboreal _ramphastidus_ symbolizes both beauty and aggression. 

What better animal to ground our framework's central metaphor on? 

You see **_if Toucaan, then you can too!_** 🥳.

## License

For Boomers – MIT 

For Millenials and the next generation of developers and designers – The Parity Public License 7.0.0. 