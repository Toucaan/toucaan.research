<div align="center">
    <h1>Intrinsic Web Design.</h1>
    <a href="https://toucaan.com" rel="follow">
        <img src="header.svg" width="800">
    </a>
</div>

# Introduction
Toucaan is an _intrinsic_, _mutative_, and _deterministic_ CSS framework. It is a "utility-free" tool built ground-up to remove the gap between mobile web and native apps altogether and add support for web devices according to [the new landscape of the web](https://bubblin.io/blog/the-new-landscape-of-the-web).

### Definition

1. **Intrinsic** implies that your web designs must "belong" to the device. Implement the most natural and accessible UX/UI that utilizes a user's device's physical and technical characteristics.

#### Brief explanation
The term `intrinsic design` was [coined by Jen Simmons](https://youtu.be/AMPKmh98XLY) of Mozilla (now of Apple) back in 2017. Here is the [podcast+transcript](https://www.zeldman.com/2018/05/02/transcript-intrinsic-web-design-with-jen-simmons-the-big-web-show/) of the original discussion to help you soak the concept.

While the term intrinsic design could mean different things to different people, it usually leads to arriving at a native "app-like" interface that closely fits the accessibility situation of the user and the capabilities of their device. Read more about Intrinsic Web Design over [here](https://medium.com/@mattkrick/intrinsic-web-design-b5e9f9c8d8d6).

2. **Mutative** means that the user-written styles are added into the framework directly. This concept borders close on the idea of a low-class or _almost_ classless architecture. Mutative also implies that there is no single heavy `reset` or `reboot` css file to be imported except for the most [current baseline](https://bubblin.io/blog/baseline-css) determined for a slew of modern browsers on the market.

3. **Deterministic** means applying style without approximations or guesswork, such as using the "media query breakpoints" to separate mobile from desktop. The deterministic approach compels the writer to establish the type of UI container beforehand. Simply put, a style layer can "belong" to a device only when the kind of device it is on is known.

Learn more about how Toucaan uses a [CSS Router](https://bubblin.io/blog/a-css-router) to serve category-specific stylesheets (watch → mobile → tablet → desktop → television…) instead of the approximate media-queries with hardcoded widths.


### Demo
The [Red Goose](https://goose.red) website. (A work in progress).

## Getting started

The first step of setting up Toucaan on your new web project is to remove _all_ instances of the following line from the head tag of your web app:

```CSS
  <link rel="stylesheet" href="path/to/app.css" />
```
Toucaan does not use a `link` tag to import the stylesheet. It uses a CSS router with a prioritized `@import` call from within a `<style> </style>` block to fetch the right stylesheet for a given "device-state", like so:

```HTML
<!doctype html>
<html>
<head>
  <!--Regular head stuff-->
  <style> 
    /* Toucaan Router Code goes here:                    */
    /* This router separates the application style    */
    /* along the two axes of Intrinsic Design:  */

    /* Portrait ⇋ landscape switch. */
    @import url('/toucaan/router/portrait.css') only screen and (orientation: portrait);
    @import url('/toucaan/router/landscape.css') only screen and (orientation: landscape);
  </style> 
</head>
<body>
  <!-- Add your site or application content here -->
  <div id="app">Hello world! This is HTML5 Boilerplate.</div>
  <script src="route/to/app.js"></script>
</body>
</html>
```

Read about [axes of intrinsic app design](https://bubblin.io/blog/a-css-router) to visualize the router roadmap for your web app. 

### Help wanted
We are looking for help with documentation for this project. Feel free to submit a PR or write to me directly if you want to join the core team and help us expand this project further.

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
Toucaan is all about designing "app-like" interfaces on the web. Build web apps _and_ mobile apps using the intrinsic qualities of web-connected devices. Use HTML, CSS, JavaScript, and [WebAssembly](https://webassembly.org/) to distribute universally. 🏅

A few of its key goals are:

- Putting accessibility above everything else.
- Optimizing UX/UI according to "device-state," as in its underlying capabilities (e.g.: `pointer: coarse /fine`) and other accessibility constraints such as orientation, physical size, screen type etc.
- Scoping the design systems according to the [new web landscape](https://bubblin.io/blog/the-new-landscape-of-the-web). 
- Lowering technical debt by adopting [Domain Driven Design](https://verraes.net/2021/09/what-is-domain-driven-design-ddd/) instead of utility-driven.

Toucaan uses several ultramodern CSS patterns grounded in maths and the fundamentals of Intrinsic Design. It introduces some new concepts like:

1. A square-fitted `vmin` based font unit for block-scoped typography. Replace the old-style font units like `px`, `em`, `rem`, or even `vw` (or the responsive formulae that depend on these units) that do not scale properly or require safety checks in the long run. 
2. An extensible `inch:pixel` polyfill for screen media that allows the use of the absolute [--inch](https://github.com/bookiza/--inch) unit or other SI units of physical measurement like centimeters or millimeters to define your UI (this is optional and still a work in progress).
3. A CSS router with conditional media queries to ship and maintain only so much css necessary for a given outlet: `mobile.css`, `watch.css`, `desktop.css`, and so on….

> Read more about how Toucaan came about to be over [here](https://bubblin.io/blog/toucaan-introduction).

### Key features

1. Accessibile by default.
2. Well-organized and clean architecture.
3. Smart intrinsic typography without using a complex formula.
4. Deterministic UX/UI that scales precisely the way you want.
5. Support Apple Watch 5 and upwards, up to projectors & OLED TVs.
6. Fewer yet classy utilities to minimize the design or technical debt. 
7. Lightweight Design System grounded in mathematics.
8. No resetting or bulldozing vendor consistency. 
9. Follow native app UI patterns for mobile web and beyond.

### Vendor Support

All modern browsers that are inside of 2017 and today! The support can go further back, but check out [CSS Remedy](https://github.com/jensimmons/cssremedy) to see how much debt you are willing to undertake for backward compatibility.


## Financial support
If you like our work, consider sponsoring it. Or you can support me on [Github](https://github.com/sponsors/marvindanig) or buy me a coffee.

#### Sponsorship
Current sponsors of the team Toucaan are: 

<div align="left">
  <a href="https://goose.red" rel="follow">
    <img src="sponsors/red-goose.png" width="50"> 
  </a>
</div>

Feel free to join the bandwagon!

### Why call it Toucaan?

Mainly because I owned the pretty domain name and because Toucan is a beautiful bird that symbolizes both beauty and aggression. 

You see **_if Toucaan, you-can-too!_** 🥳.

## License

MIT Standard License

The Parity Public License 7.0.0. 