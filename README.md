<div align="center">
		<img src="header.svg" width="800" height="800">
	<!-- <a href="https://toucaan.com">
	</a> -->
</div>

# Introduction

Toucaan is a _deterministic_, _mutative_, and _intrinsic_ CSS framework.

It is meant for designing "app-like" web interfaces according to the [new landscape of the web](https://bubblin.io/blog/the-new-landscape-of-the-web). Read the story about how Toucaan came to be over [here](https://bubblin.io/blog/toucaan-introduction).

1. **Mutative** means that you can add or edit baseline rules (think custom `normalize`) yourself, directly into the framework. This concept borders close to the idea of a class-less & framework-less approach to design. 
There is no single heavy `reset` or `normalize` or outside utility required to be enforce cross-browser consistency.

2. **Intrinsic** implies that the design "belongs to" the device. The term `intrinsic` was [coined](https://www.zeldman.com/2018/05/02/transcript-intrinsic-web-design-with-jen-simmons-the-big-web-show/) by Jen Simmons of Mozilla in 2017.
Now, intrinsic can mean a lot of things but unlike responsive think, for example, not using hardcoded pixel values on media-queries to switch layout, blockscoped typography, clear interface between the container and the contained etc. In fact, even responsive web design is a subset of intrinsic web design.

3. **Deterministic** means carrying out evaluation of the container before the content is laid out into the viewport. Quite simply, a layout can "belong" to the device only when the layout _knows_ the container it is being viewed on. Now this can mean a few other things like not serving desktop css on mobile and vice-versa, like no hardcoded media-query matching, or using blockscoped typography or pinning for the physical size using absolute units just to keep the design accessible. 

Toucaan uses several ultramodern CSS patterns and some new defaults that are mathematically grounded. It also introduces some new concepts like:

1. Blockscoped typography, and,
2. Absolute [--inch](https://github.com/bookiza/--inch) unit (optional).

Toucaan is also careful about avoiding tribalistic positions, this vs. that arguments such as _not_ choosing between grids, flexbox or floats. Use whatever you like, whenever you want, where ever you may deem it fit.

### Table of Contents

1. [Rethinking css frameworks](https://bubblin.io/blog/toucaan-introduction)
2. [A new baseline.css with blockscoped typography](https://bubblin.io/blog/baseline-css)
3. [Web designing for the Apple Watch](https://bubblin.io/blog/web-design-recommendations-for-the-apple-watch)
4. [The new landscape of the web](https://bubblin.io/blog/the-new-landscape-of-the-web)
5. [Mapping pixels to inches. Because, why not!](https://bubblin.io/blog/inch)
6. _Switch Media Query Explained_
7. _Intinsic Web Design_


### Financial support

If you like my work and would love to support:

#### One night stand

> You can also buy the book on the [Fundamentals of Toucaan](https://bubblin.io/cover/the-toucaan-framework-by-marvin-danig) that explains the thoughts and reasoning behind the choices made by Toucaan and how you could override them.

#### Github Sponsorship



### Documentation

Head over [here](https://www.toucaan.com/docs/getting-started).

### Key features

1. Semantic layouts with CSS Grids.
2. Block-scoped typography
3. Deterministic layouts with `inch:pixel` mappings (Optional).
4. Supported Apple Watch 5 all the way up to large projectors & OLED TVs with a modern browser.
5. Powerful and yet simple reusable classes. Like writing style in plain English.
6. Easy to customize and theme-ify.

### Browser Support

Preferably modern browsers that are inside of 2017 and now. Check-out [CSS Remedy](https://github.com/jensimmons/cssremedy)
to see how much debt you're willing to undertake for backwards-compatibility.

### Why call it Toucaan

Quite simply because I owned the pretty domain name.

Besides, Toucan is a beautiful bird. This aggressive little arboreal
_ramphastidus_ symbolizes both beauty and strength. We are not only going to found
our CSS framework on the metaphor of this highly social and resilient bird but also
implement a design language that covers support for all devices on the web including
but not limited to mobile or the desktop.

Occasionally, though only rarely, we may even spar with other CSS frameworks
using our “mean” oversized and colorful bill. 😉 So… say hello to Toucaan—the tropical new CSS framework for web apps. 

And repeat after me: **_if Toucaan, then you can too!_** 😉

