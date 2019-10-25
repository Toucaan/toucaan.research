---
layout: post
title:  "Toucaan—Baseline CSS 🎼"
date:   2019-10-24 1:30:00 -0400
categories: css, responsive, reset, baseline
author: Marvin Danig
published: true

original:
  link: https://bubblin.io/blog/baseline
  date: 2019-10-23
  site: Bubblin Superbooks

---

[Status: rough draft & incomplete]

[Last update: October, 24<sup>th</sup> 2019.]


_❥ **TLDR**; Modern web browsers have evolved a lot, and we are at a point where a heavy-handed reset or reboot css is no longer necessary. In this chapter of my book on the new CSS framework called [Toucaan](http://toucaan.com) we implement a much lighter & a fundamentally grounded strategy by uncovering the minimum ruleset that is required to force consistency across vendors as per the new [landscape](https://bubblin.io/blog/toucaan-introduction) of the web._

## Baselining CSS

In the last chapter we created a [blank file](https://raw.githubusercontent.com/bookiza/toucaan/master/examples/example0.html) to test responsiveness of an empty page. That work perfect and it was easy enough to implement, we simply touched an empty file and [opened](https://raw.githubusercontent.com/bookiza/toucaan/master/examples/example0.html) it on a browser like Chrome:


```bash
$ touch example0.html     // Create a new file but do not write anything on it. 

$ chrome example0.html    // Open this 0 byte files on your favorite browser. 
```

Let us take it forward from this spot and **inspect** the same 0 bytes blank page on the console of your browser next. 

Press `⌘+⌥+I` keys if you are on Chrome & Mac.



<div class="center">
  <img src="https://raw.githubusercontent.com/marvindanig/assets/master/blank-page.jpg" alt="Blank web page." width="100%" style="max-width:100%;">
  <div class="super-small">Blank webpage on the browser window.</div>
</div>


Voila!, you will see that even though our webpage was blank there are still some html elements rendered inside to display the blank page correctly. Every web browser will insert these _minimum_ html elements to a webpage automatically if missing. 

```html
<!-- Blank page as rendered on Chrome, Firefox, Brave & Safari (Desktop) -->
<html>
  <head></head>
  <body></body>
</html>
```

Note, that the browser also applies a default user agent stylesheet<sup>\*</sup> called the `html.css` under the page. This html.css file is the default that every browser comes with on install. Back in the day this file used to contain several inconsistencies but that is no longer the case today. We can practically assume that the `html.css` itself has become the standard reset/reboot for our unset cascade now. 

Andy Bell shared a very interesting [reset](https://hankchizljaw.com/wrote/a-modern-css-reset/) css last week for a blog type of application, and even though it is limited in scope and applications, his reset kind of shows that there's very little arm twisting required over a browser to establish consistent interface. This is great news!

---

> Head over here to see what the latest `html.css` looks like on major browsers today:
> 
> Webkit html.css@ <a rel="nofollow" href="https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css"> Chrome & Safari</a>
> 
> Quantum html.css@ <a rel="nofollow" href="https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css">Firefox</a>
> 
> Chromium html.css@    <a rel="nofollow" href="https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css"> Blink or Edge browser</a>

---

Since there are only three `html` elements that are a minimum requirement for a workable webpage, we will start baselining our CSS framework by resetting CSS only these three elements, if required:

    1. <html> tag or **:root** element,
    2. <body> tag, and the… 
    3. <head> tag. 

Since the \<head\> element is always set to `display:none;` there are only two html tags <body> and <html> to dabble with. Here is what the new structure for a modern `reset.css` would look like with Toucaan:


```html

<style>

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

    /* The minimum elements required on a valid webpage */
    html { }

    body { }


</style>

```

What this also means is that everything else that goes into building your application, the html elements and the style properties that are specific to your app, will determine what other helpers or resettings are required to support the entire spectrum of browsers on the web. 

Notice that I have inlined our portrait ⇋ landscape switch along with the html, body elements inside a `<style> … </style>` tag. We do this to ensure that [critical](https://css-tricks.com/annotating-critical-css/) [css](https://css-tricks.com/authoring-critical-fold-css/) is available for the first contentful paint (FCP) asap and to declare all global css variables from one place. This is good both for organization and long term maintainability.

> Some of you pointed me towards Steve Souder's article [don't use @import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/) from 2009 but I can confirm that their position is no longer a valid pattern. Besides, our CSS import switch will request only one file for a given viewport state, just like a \<link\> url does with an externally linked CSS file. Couple it with the fact that almost 50% of the web is on http/2 and that there is a possibility to hardcache all of the CSS locally using a serviceworker, I think we are good to go with CSS @imports in 2020 and beyond.  
>
> Feel free to dissect the position I have taken on using CSS @imports on Toucaan. But for now, I am happy to report that **not using CSS imports** to separate critical CSS from non-critical parts is somewhat an anti-pattern and should be done away with. Toko, toko! 

Now that we have a basic structure, let us add some meat to it. 

## The final **reset.css**

This is what our final modern day `reset.css` would look like: 


```html

[Incomplete]

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
            --fs: calc((100vh * (1443/1115))/100);  /* Tentative */
        }
    }

    /* Sane defaults below */s
    *, *:after, *:before   {
        box-sizing: border-box;
        /* I have a feeling that using margin & padding on elements instead */
        /* of the flexbox is somewhat an anti-pattern now but I am not sure. */
        /* We will come back to this after sometime. */
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

An intrinisically scalable layout and responsive typography separated according to the nature of rectangle we are painting on:

## Breaking it down

1. The first line on the Toucaan's reset is the charset declaration just to guarantee correct encoding for the CSS parser to use. See the w3c recommendation [here](https://www.w3.org/International/questions/qa-css-charset.en) that says:

> You should always use UTF-8 as the character encoding of your style sheets and your HTML pages, and declare that encoding in your HTML. If you do that, there is no need to declare the encoding of your style sheet.

2. Step 2


I just flat out reset all margin & padding on elements and pseudo-elements and force them to use **box-sizing: border-box**.

### A note about some vocabulary that we use today:

For decades we have used a desktop with a monitor displaying content along a vertical plane. However, with the advent of smartphones and tablets, screens are no longer restricted to a vertical surface and many times look up at the screen while lying down on bed or look down on a screen lying on a table to draw with pencil stylus. 

Meaning, the monitor/screen is not always facing on a vertical with us sitting in front of it.

<br>
<div class="center">
  <img src="https://raw.githubusercontent.com/marvindanig/assets/master/rectangles.jpg" alt="Portrait or landscape rectangles." width="100%" style="max-width:100%;">
  <br>
  <div class="small">Using length & breadth instead of height & width.</div>
</div>
<br>

So for a rectangle that any viewport is, it is about wrong to describe the dimensions of a screen with height and width that is lying flat on a table or bed, or in some orientation or plane that is not vertical. I'd prefer to use the mathematical labels _length_ and _breadth_ for the rectangle instead of height and width for literature on Toucaan instead. 

Added bonus—we exactly know that the shorter side of the viewport is the breadth.


<br>

<div class="center">
  <img src="https://raw.githubusercontent.com/marvindanig/assets/master/viewports.png" alt="Major web devices." width="66%" style="max-width:100%;">
  <br>
  <div class="small">Viewport rectangles of the browser in portrait or landscape.</div>
</div>

<br>



### Charset, typography & typesetting




Choosing typography for your application with Toucaan is simple. Toucaan recommends to host the typefaces you want to use (see Github [issue](https://github.com/bookiza/toucaan/issues/6)) for your webapp locally.  






I have updated the repository with this article and code on [Toucaan](https://github.com/bookiza/toucaan). Everything that is checked-in is currently experimental so feel free to question, star, jump-in or offer sage advice. 

Or better still, contribute to Toucaan if you can!

---

Written by: Marvin Danig, CEO & Cofounder of Bubblin Superbooks. Follow me on [Twitter](https://twitter.com/marvindanig) or [Github](https://github.com/marvindanig) perhaps?

Super thankful to [Sonica Arora](https://bubblin.io/sonica), Abigail Rennmeyer, Varun Singh and <a rel="nofollow noopener" href="https://nilesh.trivedi.pw/">Nilesh Trivedi</a> for helping me review this post for accuracies.

**P.S.:** It is likely that some of you viewed this article on your desktop or mobile. If you did that, I recommend you bookmarking us for the iPad next time! :-)

