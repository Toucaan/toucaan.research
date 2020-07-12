<h1 align="center">Toucaan—The Tropical CSS Framework.</h1>

<div align="center">
  <a href="http://toucaan.com">
    <img src="./assets/toucaan.png" alt="Toucaan-A Tropical CSS Framework" width="400">
  </a>
  <br>
</div>

# Introduction

Toucaan is a _mutative_, _intrinsic_ and _deterministic_ CSS framework.
It is meant for designing "app-like" web interfaces according to the [new landscape of the web](https://bubblin.io/blog/the-new-landscape-of-the-web). Read the story about how it came to be over [here](https://bubblin.io/blog/toucaan-introduction).

1. Mutative means that you can add or edit baseline rules (think custom `normalize`) yourself, directly into the framework. This concept borders close to the idea of a class-less & framework-less approach to design. 
There is no single heavy `reset` or `normalize` or outside utility required to be enforce cross-browser consistency.

2. Intrinsic means that the design "belongs to" the device. The term `intrinsic` was [coined](https://www.zeldman.com/2018/05/02/transcript-intrinsic-web-design-with-jen-simmons-the-big-web-show/) by Jen Simmons of Mozilla in 2017.
Now, intrinsic can mean a lot of things but unlike responsive think, for example, not using hardcoded pixel values on media-queries to switch layout, blockscoped typography, clear interface between the container and the contained etc. In fact, even responsive web design is a subset of intrinsic web design.

3. Deterministic implies evaluation of the container before the content is laid out on a webpage. Only then can a layout "belong" to the device it is being viewed on. It can also mean other things like not serving desktop css on mobile and vice-versa (no media-query matching), or blockscoped typography or pinning for physical size to keep web design accessible. 

Read more about [this](https://bubblin.io/blog/baseline-css).

Toucaan uses several ultramodern CSS patterns and new defaults that are
mathematically grounded. It introduces…

1. Block-scoped typography, and,
2. Deterministic layouts using the absolute [--inch](https://github.com/bookiza/--inch) (optional).

…should you need to design your web-app with 'app-like' precision that isn't possible
with traditional CSS frameworks.

Toucaan is also careful about avoiding tribalistic positions such as _not_
choosing between grids, floats or the flexbox. Use whatever you want, whenever you like!

## Donate

> I have written a book on the [thoughts and reasoning](https://bubblin.io/cover/the-toucaan-framework-by-marvin-danig) behind Toucaan.

Buying the book helps me support the Toucaan CSS framework directly, no donation is required.

## Getting Started

Head over [here](https://www.toucaan.com/docs/getting-started).

### Key features

1. Semantic layouts with CSS Grids.
2. Block-scoped typography
3. Deterministic layouts with `inch:pixel` mappings (Optional).
4. Support starts at Apple Watch 5 and goes all the way up to projectors and LCD TVs.
5. Powerful and yet simple reusable classes. Like writing style in plain English.
6. Easy to customize and theme-ify.

### Browser Support

Preferably modern browsers that are inside of 2017 and now. Check-out [CSS Remedy](https://github.com/jensimmons/cssremedy)
to see how much debt you're willing to undertake for backwards-compatibility.

### Why call it Toucaan

Quite simply because I owned the pretty domain name.

Besides that Toucan is a beautiful bird. This aggressive little arboreal
_ramphastidus_ symbolizes both beauty and strength. We are not only going to found
our CSS framework on the metaphor of this highly social and resilient bird but also
implement a design language that covers support for all devices on the web including
but not limited to just mobile or the desktop.

Occasionally, though only rarely, we may even spar with other CSS frameworks
using our “mean” oversized and colorful bill. 😉

So… say hello to Toucaan—the tropical new CSS framework for the web. And repeat
after me: **_if Toucaan, then you can too!_** 😉

