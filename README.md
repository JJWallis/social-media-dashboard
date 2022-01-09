# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H) on Frontend Mentor

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Your users should be able to:

-  View the optimal layout for the site depending on their device's screen size
-  See hover states for all interactive elements on the page
-  Toggle color theme to their preference

### Screenshot

![](./Screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  Mobile-first workflow
-  CSS Grid
-  Flexbox
-  Javascript

### What I learned

```html
<label class="switch">
   <input type="checkbox" id="dark-mode" class="checkbox-dark-mode" />
   <span class="slider round"></span>
</label>
```

```css
input:checked + .slider {
   background-image: linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%));
}
```

```js
themeSwitch.addEventListener('change', (e) => {
   if (e.target.matches('#dark-mode')) {
      root.classList.toggle('html-dark')
      ...
   }
```

One primary reason I chose to attempt this project was because it included a theme toggle that I had never attempted to build before. I learnt how to semantically create the markup for it via a parent `<label>` which linked with the checkbox that it housed, whilst also containing a `<span>` with no semantic meaning to create the slider shape. Applying padding to the label would correspondingly increase the clickable area that would target the theme change, which was very similar behaviour to increasing the padding on a link for mobile devices (a technique I was familiar with at the time).

I was also introduced to the `translate` property in order to re-create the slider's movement when the checkbox state changed. At first I thought the slider would keep moving in the desired direction repeatedly, but because the checkbox can only be in either a 'checked' or 'non-checked' state, it would only move back and forth on each change.

```css
:root {
   background-image: linear-gradient(
      to bottom,
      hsl(225, 100%, 98%) 270px,
      hsl(0, 0%, 100%) 270px
   );
}

.bg-grey {
   position: absolute;
   z-index: -1;
   border-radius: 5px;
}
```

The light-grey body background colour change provided a nice challenge as well, since I had never encountered this design feature before. My first solution was to apply a linear-gradient to the `<html>` tag, that transitioned into the light-grey at the desired vertical point. However, the original design contained a border-radius applied to both bottom corners, so I changed my solution to a negatively positioned `<div>` behind the rest of the content.

```css
.grid-container-hero,
.grid-container-overview {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   gap: 30px;
}
```

Another great challenge this project provided was the responsive behaviour of the primary grid container, which by default created blank grid-items at certain viewport sizes when applying a `repeat(autofill, ...)`. In order to accommodate for this as best as possible, I decided to add extra empty grid-items whose visibility were toggled at those viewport sizes to create an even looking grid. Once I learn more about design, I would like to experiment more with those empty grid-cells so they don't quite look as naked as they currently do.

```css
.grid-item {
   transition: 400ms;
}

.grid-item:hover {
   transform: scale(1.1);
}
```

Finally, to add further interactivity to the project, I decided to use a `transform: scale()`, whilst playing with appropiate transition amounts at the same time. I learnt how not to apply the transition on the pseudo-class, but the base element instead so that it occurs both when the pseudo-class applies and stops applying.

### Continued development

I would like to continue learning about the different ways to create theme toggles accross all languages, but with a greater focus on accessibility.

Additionally, further practice at creating more responsive grid containers by using an explicitly defined layout at different viewports would be something great to practice as well.

### Useful resources

-  [Toggle Switch - Codepen](https://codepen.io/haleonearth/pen/aJMevP) - This helped me tremendously with the styles and logic of the theme switcher toggle.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)
