---
layout: post
title:  "Toucaan—Baseline CSS 🎼"
date:   2019-10-24 1:30:00 -0400
categories: css, responsive, reset, baseline
author: Marvin Danig
published: true

original:
  link: https://bubblin.io/blog/baseline
  date: 2019-10-24
  site: Bubblin Superbooks

---

[Status: draft]

[Last update: October, 29<sup>th</sup> 2019.]


_❥ **TLDR**; Modern web browsers have evolved to a point where a heavy-handed reset or the reboot css is no longer needed. In this chapter, we implement a fundamentally different and a much lighter strategy by uncovering only the bare minimum set of rules required for consistency. As per the new [landscape](https://bubblin.io/blog/toucaan-introduction) of the web._

_We will tackle to two beasts on this article, responsive layouts and block scoped typography, both of which in my opinion will form the basis of intrinisically responsive interfaces of the future._


## Baselining CSS

In the last chapter, we created a [blank file](https://raw.githubusercontent.com/bookiza/toucaan/master/examples/example0.html) to test responsiveness of an empty page. It worked perfectly and was easy enough to implement. We simply touched a new file and [opened](https://raw.githubusercontent.com/bookiza/toucaan/master/examples/example0.html) it on a browser like Chrome:


```bash
$ touch example0.html     // Create a new file but do not write anything on it. 

$ chrome example0.html    // Open this 0 byte files on your favorite browser. 
```

Let us take it forward from here. **Inspect** this 0 byte blank page on the console of your browser next. 

Press `⌘+⌥+I` keys if you are on Chrome & Mac.


<br>

<div class="center">
  <img src="https://raw.githubusercontent.com/marvindanig/assets/master/blank-page.jpg" alt="Blank web page." width="100%" style="max-width:100%;">
  <div class="super-small">Blank webpage on the browser window.</div>
</div>

<br>

Even though the web-page loaded on the browser is a blank file, you will soon notice that there still are some `html` elements that rendered on the DOM just to display the blank page correctly. Every web browser does this and will insert the tags automatically to "fix" the `html` on the blank page. It is in the nature of HTML to be forgiving, and the browsers are smart enough to handle issues like missing or unmatched tags like a champion.

```html
<!-- Blank page as rendered on Chrome, Firefox, Brave & Safari (Desktop) -->
<html>
  <head></head>
  <body></body>
</html>
```

The browser also applies a default user-agent<sup>\*</sup> stylesheet called the `html.css`, under the hood, that you can see above under the **Styles** block of the browser's console. This html.css file is a default set of rules that every browser comes with upon installation. Until a few years ago, html.css used to contain several inconsistencies across vendors, but this is no longer the case now. We can practically assume that the html.css itself _is_ the consistent reset.css of our unset cascade.  

A very interesting <a rel="nofollow" href="https://hankchizljaw.com/wrote/a-modern-css-reset/">reset</a> was shared by Andy Bell last week for a blog application. Even though his reset is limited in scope, it kind of repeats the same tell that there is very little arm-twisting required over a browser's defaults to establish consistency. This is ultimately great news!, and also one of the primary reasons why we are going to keep Toucaan a loosely coupled framework.


---

> Head over here to see what the latest `html.css` looks like on major browsers today:
> 
> Webkit html.css@ <a rel="nofollow" href="https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css"> Chrome & Safari</a>
> 
> Quantum html.css@ <a rel="nofollow" href="https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css">Firefox</a>
> 
> Chromium html.css@    <a rel="nofollow" href="https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css"> Blink or Edge browser</a>

---

Given that there are only three html elements required for a webpage to be valid, we will start baselining Toucaan by considering reset for only three elements to begin with, if required at all:

    1. <html> tag or **:root** element,
    2. <body> tag, and the… 
    3. <head> tag. 

Now the \<head\> element is always set to `display:none;` so there are only two html tags \<body> and \<html> really for us to dabble with for the initial reset. Here is how we will structure our baseline for Toucaan:


```html

<style>
    /* The following is pure css and not sass/scss. */
    @import url('toucaan/portrait/portrait.css') only screen and (orientation: portrait);

    @import url('toucaan/landscape/landscape.css') only screen and (orientation: landscape); 

    @media only screen and (orientation: portrait) {
        :root { 
            /* Portrait variables go here.  */ 
        } 
    }

    @media only screen and (orientation: landscape) {    
        :root { 
            /* Landscape variables go here. */ 
        }
    }

    /* Bare minimum elements required for a valid webpage */
    html { }

    body { }
</style>

```
That's it. This is the structure of our new reset.css on Toucaan, if you will.

What this also means is that everything else that will go into building an application, the other html elements and their style, will determine what other helpers will be required to support the entire spectrum of browsers and devices. My guess is that there wouldn't be a lot of style for even the most sophisticated web applications out there but let us see where it goes before committing to anything. 

Notice that I have inlined our portrait ⇋ landscape switch along with the baseline style for body and html tags inside a `<style> … </style>` tag. We are doing this to ensure that the <a rel="nofollow" href="https://css-tricks.com/annotating-critical-css/">critical</a> above-the-fold <a rel="nofollow" href="https://css-tricks.com/authoring-critical-fold-css/">css</a> is available for the first contentful paint (FCP) asap. Also, it helps us to declare all global css variables from one place.

> Some of you pointed me towards Steve Souder's article [don't use @import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/) from 2009 but I can confirm that this position is no longer valid. The fact that almost 50% of the web is on http/2 and that there is a possibility of hardcaching all CSS locally using a serviceworker, I think we are good to go with imports in 2020 and beyond. Besides, our little CSS import switch will request only one external CSS file for a given 'viewport state', just like a \<link\> url does.
>
> Feel free to dissect the position I have taken on using CSS @imports on Toucaan but for now I am gonna happily report that **not using CSS imports** to separate critical from non-critical CSS is an anti-pattern that should do be done away with. Toko, toko! 

Great, so now we have the critical structure for Toucaan's new reset file in place. Let us add some meat to it next. 


## Layouts with CSS Grids.

One of the things that I'm super (super!) excited about using for layouts on Toucaan is the CSS grids. 

Layouts with Toucaan are based on CSS grids exculsively. To enable grids we simply apply the following rule on the `body` element of our inline-reset:

```css
    body {
        display: grid;
    }
```

That's it. We are all set for any kind of responsive layout with CSS grids now.

Enabling grid on the body ensures that every child element on the page can now behave as part of a larger blueprint specified under a **grid system**. Not only that, we can also specify different layouts for portrait and landscape modes each and switch the layout according to the state of the viewport. 

I don't think there is another way that I would do layouts in 2020. It has to be CSS grids! Support for CSS grids <a rel="nofollow" href="https://caniuse.com/#feat=css-grid">grown</a> lately and you can see that almost every major browser has implemented the new specification.

<br>

<div class="center">
  <img src="https://raw.githubusercontent.com/marvindanig/assets/master/css-grids.jpg" alt="Blank web page." width="100%" style="max-width:100%;">
  <div class="super-small">Support from CSS grids is substantial in 2019.</div>
</div>

<br>

Here's what our inline-reset would look with Toucaan:

```html

<style>
    /* The following is pure css and not sass/scss. */
    @import url('toucaan/portrait/portrait.css') only screen and (orientation: portrait);

    @import url('toucaan/landscape/landscape.css') only screen and (orientation: landscape); 

    @media only screen and (orientation: portrait) {
        :root { 
            /* Portrait variables go here.  */ 
        } 
    }

    @media only screen and (orientation: landscape) {    
        :root { 
            /* Landscape variables go here. */ 
        }
    }

    /* Bare minimum elements required for a valid webpage */
    html { }
    
    body { 
        display: grid; /* Semantic layouts! */
    }
</style>

```

Still a very simple reset that is grounded in the reality of the web today. 

CSS grids aren't anything new but they certainly are a new standards tool that is available on web to be used for layouts. After having dabbled with CSS floats, flexbox and whatnot for years I am convinced that CSS grids are the only way forward. It is simple, semantic and much easier to reason about than anything else on market. 

We'll talk about breaking down a webpage into its header, footer and main content using grids in the next chapter.

#### No CSS Floats and No Flexbox. CSS grids only!

Thing is that if you want to do modern layouts in 2020 you shouldn't use flexbox or CSS floats anymore. It is just plain wrong. I feel very strongly about this, so let me explain this a little more: 

The body element on an empty webpage is like a raw piece of land—a lot, if you will—waiting to be cut-up into smaller rectangles to form the foundation of a house: the layout. These little rectangles are a part of a larger blueprint of a building that is yet to be built. A set of rectangular blocks that sit next to each other in _harmony_ with shared edges. 


CSS grids are an ideal tool to do this because with grids you are essentially looking down this whole patch of land—the body— and then deciding on how you want to break it down into smaller meaningful parts. It is a top ↝ down view. 

Whereas with flexbox it is more at the element level. 

You say that 'hey, I am a flexing DIV and I am going to be stretching all the way leftwards to occupy whatever space is available'. Flexbox adds that behavior on the HTML element and is almost like little men trying to flex their muscles against each other and in process locking themselves in. The layout is in a sort of dynamic equilibrium instead of harmony. This is not a very ideal situation because if the viewport were to suddenly go ultrawide the layout will fail.


<br>

<div class="center">
    <img src="https://raw.githubusercontent.com/marvindanig/assets/master/traffic-jam.jpg" alt="Blank web page." width="100%" style="max-width:100%;">
    <div class="small">A soup of elements in a traffic jam.
    Credit: <a href="https://unsplash.com/photos/o1eDaWJanpA" rel="nofollow">Joline Torres</a>, Unsplash.
    </div>

</div>

<br>



Similarly, using CSS floats with a left or right momentum turns the webpage into a sort of 'traffic jam' between elements in which at least one piece is always trying to outrun others. Such a layout too, like the flexbox, is locked in a dynamic equilibrium that can fail easily on ultrawidescreens that are execessively long on one side. 

In my opinion since a layout is a boundary of control, a blueprint of proportions on which the foundations of a house will be laid out, it is better to use CSS grids to split the land into useful pieces that fit together naturally. Doing anything else like using the flexbox or CSS floats or tables (does anyone?) is just plain wrong. 






## Block Scoped Typography.

One of the common memes about CSS is about how difficult it is to handle text inside a box:




<br>

<div class="center">
  <img src="https://raw.githubusercontent.com/marvindanig/assets/master/cssisawesome.png" alt="CSS is awesome!" width="66%" style="max-width:100%;">
  <br>
  <div class="small">It has been traditionally been difficult to scale text within a box.</div>
</div>

<br>

There is quite a bit of developer merchandise available out there that sells this meme printed on a coffee mug or t-shirts but I'm afraid those are gonna have to go away of late. For Toucaan we will first try and solve 'CSS is Awesome in a box' problem using our portrait ⇋ landscape switch, and then use that solution to introduce block scoped typography on our framework for anyone to use. 

This is hard problem so I'm going to be pinning more on maths instead of design sense here. We'll try to reconcile engineering with design later on. Below is the code I penned using our orientation switch for the first piece on typography:

<p class="codepen" data-height="300" data-theme-id="20737" data-default-tab="css,result" data-user="marvindanig" data-slug-hash="bGGRZdE" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS is Awesome">
  <span>See the Pen <a href="https://codepen.io/marvindanig/pen/bGGRZdE">
  CSS is Awesome</a> by Marvin Danig (<a href="https://codepen.io/marvindanig">@marvindanig</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


No javascript has been used in the experiment above to 'fit text' 😉. Let's solve this step by step:

**Step 1.** Let's start with the following HTML:

```html

    <div class="box">
        <p>CSS</p>
        <p>is</p>
        <p>awesome.</p>
    </div>

```

We know that the box is a square, so its two sides are equal. I am going to be using viewport widths to specify dimensions  



Given that there is so much that can happen with typefaces, I'll keep our ideas on responsive block scoped typography in an evaluative state for now. We'll see if we can nail intrinsic typesetting using this technique in the future chapters.


---

### A note about vocabulary we use today:

Height and width is how we usually label the dimensions of a screen or a browser window but really what we are usually referring to, mathematically speaking, is a simple rectangle with a length and a breadth. It appears that height and width were a more accurate description of the monitor in the 'desktop era' where the monitor used to be mounted in a way that the contents were always displayed along the vertical plane. This terminology however is invalidated as soon as we start consuming content on a mobile or tablet that is not held vertically. 


<br>
<div class="center">
  <img src="https://raw.githubusercontent.com/marvindanig/assets/master/rectangles.jpg" alt="Portrait or landscape rectangles." width="100%" style="max-width:100%;">
  <br>
  <div class="small">Use length & breadth instead of height & width?</div>
</div>
<br>

We could be lying down on a sofa looking up towards a phone that is parallel to ceiling. Or looking down on a tablet lying flat on a table, i.e parallel to the floor. Since the screen is no longer restricted to displaying content along a vertical plane, using height or width to specify the sides of the rectangle isn't always correct—length & breadth however, are and swill always be. 🤯 


\*For the literature on Toucaan I'll often use mathematical labels _length_ and _breadth_ instead to refer to the sides of the rectangular screen. There is an added advantage of doing this—we know exactly that the shorter side of the rectangle is the breadth.

<br>


---




## The final reset:

This is what our final `reset.css` looks like: 


```html

[Tentative]

<style>
    @charset "UTF-8";   /* Recommended reading: https://www.w3.org/International/questions/qa-css-charset.en */

    /* Option 1. Use 'privacy safe' self-hosted typefaces, or use…  */
    @font-face {
        font-family: "Font Family";
        src: url(data:font/opentype;base64, _font_subsetted_string_); 
        font-style: normal;
        font-weight: 300;
    }

    /* Option 2. Hosted typefaces such as from Google Fonts. */
    @import url(https://fonts.googleapis.com/css?family=Font+Family:300,300i&display=swap); 

    @import url('toucaan/portrait/portrait.css') only screen and (orientation: portrait);

    @import url('toucaan/landscape/landscape.css') only screen and (orientation: landscape); 

    @media only screen and (orientation: portrait) {
        :root { 
            --fs: calc(100vw/100); /* Tentative */
        } 
    }

    @media only screen and (orientation: landscape) {    
        :root { 
            --fs: calc(100vh/100);  /* Tentative */
        }
    }

    /* Sane defaults below */s
    *, *:after, *:before   {
        box-sizing: border-box;
        /* I have a feeling that using margin & padding on elements instead */
        /* of the flexbox is somewhat an anti-pattern now but I am not sure. */
        /* We will come back to this topic in sometime. */
        margin: 0;  
        padding: 0; 
    }

    html {
        background-color: white; /* Always set the background color */ 
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        overflow-y: scroll;
        text-size-adjust: 100%;
    }

    body {
        font-size: calc(4 * var(--fs)); /* Theoretical a.t.m */
        font-family: 'Font Family', sans-serif; 
        font-smooth: always;
        font-weight: 300;   
        font-style: normal;
        font-synthesis: none;
        font-stretch: ultra-condensed;
        font-variant: no-common-ligatures proportional-nums slashed-zero;
        font-kerning: normal;
        text-rendering: geometricPrecision; /* Why not: text-rendering: optimizeSpeed;?… in light of PWA. */
        font-display: swap;
        font-display: optional;

        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-backface-visibility: hidden;

        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-osx-font-smoothing: antialiased;


        line-height: calc(1.5 * 4 * var(--fs));  /* Or 1.5 */

        /* Colors + contrast */
        color: rgba(0, 0, 0, 0.95);
        background-color: white;

        /* Dimensions */
        border: none;
        min-height: 100vh;


        /* Behavior */
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
        touch-action: auto;
        display: grid; /* Grids are meant for layouts, flex are meant for element behavior! */
    }



    /* Accessibility specific media queries go below. */

    /* 1. Dark mode (or light) depending on requirement. */
    @media screen and (prefers-color-scheme: dark) {
        body {
            background-color: #343434;
            color: #fff;
        }
    }

    /* 2. Override animations for users with motion sickness or other vestibular disorders. */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

</style>

```

An intrinisically scalable layout using CSS grids, block scoped responsive typography and orientation based behaviors separated along `portrait.css` & `landscape.css` to adapt according to the new landscape of the web. 

We'll break it down in the next chapter.


I have updated the repository with this article and code on [Toucaan](https://github.com/bookiza/toucaan). Everything that is checked-in is currently experimental so feel free to question, star, jump-in or offer sage advice. 

Or better still, contribute to Toucaan if you can!

---

Written by: Marvin Danig, CEO & Cofounder of Bubblin Superbooks. Follow me on [Twitter](https://twitter.com/marvindanig) or [Github](https://github.com/marvindanig) perhaps?



**P.S.:** It is likely that some of you viewed this article on your desktop or mobile. If you did that, I recommend you bookmarking us for the iPad next time! :-)

