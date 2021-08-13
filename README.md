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

---

<div align="left">
  <h3>
    Developed and sponsored by
    <span>
      <img src="assets/goose.red.svg" width="100"> 
    </span>
  </h3>
</div>

<a href='https://goose.red'> Red Goose</a>. The world's fastest website → app conversion engine. 

Create mobile apps written in Swift or Kotlin with just a url.

---

### Demo

The [Red Goose](https://goose.red) website is a real-life demo / inspiration / implementation of the Toucaan CSS Framework. (Currently, only the landscape mode is supported). 

### About

Design "app-like" interfaces. 

Toucaan is meant for building web apps and mobile apps using the building blocks of the web, i.e., HTML, CSS, JavaScript, and WebAssembly. 🏅

It is about:

- Optimizing UX/UI according to a device, its underlying capabilities (e.g.: `pointer: coarse /fine`), physical size, and other situational qualities.
- Putting accessibility above everything else.
- Routing stylesheets according to the [new landscape of the web](https://bubblin.io/blog/the-new-landscape-of-the-web). 

Toucaan uses several ultramodern CSS patterns that are grounded in mathematics and fundamentals of Intrinsic Web Design. 

It introduces some new concepts like:

1. Using `vmin` for block-scoped typography and intrinsic aspect-ratios instead of the regular units like `px` `em` or `rem,`
2. Optional use of absolute [--inch](https://github.com/bookiza/--inch) units or other SI units of physical measurement like centimeters or millimeters to define your UI. (Work in progress)

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

#### Toucaan Fundamentals 

1. [Rethinking CSS frameworks](https://bubblin.io/blog/toucaan-introduction)
2. [A new baseline](https://bubblin.io/blog/baseline-css)
3. [Web designing for the Apple Watch](https://bubblin.io/blog/web-design-recommendations-for-the-apple-watch)
4. [The new landscape of the web](https://bubblin.io/blog/the-new-landscape-of-the-web)
5. [Mapping pixels to physical inches?](https://bubblin.io/blog/inch)
6. [Writing a Router in CSS](https://bubblin.io/blog/a-css-router)
7. [Intrinsic Typography and Aspect Ratio with VMIN units](https://bubblin.io/blog/magical-powers-of-css-vmin-unit)
6. _Switch Media Query Explained_
7. _Understanding Intrinsic Web Design_

## Getting started

The first step of setting up Toucaan on your project is to remove _all_ instances of the following line from the head tag of your web application:

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

Head over [here](https://www.toucaan.com/docs/getting-started) to get started. We are looking for help on documentation and contributors for this project. 

Feel free to submit a PR or write to me if you want to join the core team.

### Vendor Support

Modern browsers that are inside of 2017 and now. The support can go further back, but check-out [CSS Remedy](https://github.com/jensimmons/cssremedy)
to see how much debt you're willing to shoulder for backward-compatibility.


### Financial support

If you like my [work](https://github.com/sponsors/marvindanig) please consider supporting it financially.

#### The Superbook

> I'm writing a book on the [Fundamentals of Toucaan CSS](https://bubblin.io/cover/the-toucaan-framework-by-marvin-danig) that will explain the thoughts and the reasoning behind the choices made by Toucaan and how you could override them.

#### Sponsorship

Current sponsors of Toucaan are: 

<div align="left">
  <a href="https://goose.red" rel="follow">
    <img src="sponsors/red-goose.png" width="50"> 
  </a>
</div>

But you can support our project by [sponsoring this repository](https://github.com/sponsors/marvin-danig) too!

### Why call it Toucaan?

Mainly because I owned the pretty domain name. 

Besides, Toucan is a beautiful bird. This aggressive little arboreal _ramphastidus_ symbolizes both beauty and aggression. What better animal to ground our framework's central metaphor on? 

You see **_if Toucaan, then you can too!_** 😉

## License

For Boomers – MIT 

For the next generation of developers and designers – The Parity Public License 7.0.0. 