# Admin Dashboard

## Live Demo

[Click me to see the Live Demo!](https://xbiotech.github.io/Admin-Dashboard/)

[![Admin Dashboard Desktop Preview](https://i.gyazo.com/1645955babc32a8bd68197e1ad9017dc.png)](https://gyazo.com/1645955babc32a8bd68197e1ad9017dc)

[![Admin Dashboard Mobile Preview](https://i.gyazo.com/aa596cabb84526f8a08d33c3c189998d.gif?autplay=1&loop=1)](https://gyazo.com/aa596cabb84526f8a08d33c3c189998d)

## Welcome! :wave:

Thanks for checking out my Project.

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Learning resources](#learning-resources)
  - [Feedback](#got-feedback-for-me)

## Overview

### The project

a responsive Admin Dashboard built to learn how CSS Grid works

This project was created as part of the Odin Project curriculum, an open-source web development education platform. The purpose of this project was to learn and practice new web development skills.

## My process

### Built with

- HTML5
- CSS
- Grid
- Flexbox
- Mobile-First Workflow
- JavaScript

### What I learned

- CSS Grid
- combine CSS Grid with CSS Flexbox

I added some small code snippets below to illustrate my workwise

```css
.main-content {
  gap: 10px;
  grid-row: 2/5;
  grid-column: 2/5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
/* cards are sitting inside main-content */
.card {
  display: grid;
  grid-template-columns: 0.15fr 1fr;
  grid-template-rows: 1fr 0.3fr;
}
/* img-wrapper are sitting inside cards*/
.img-wrapper {
  display: flex;
  justify-content: flex-end;
  grid-column: 2;
  gap: 1em;
}
```

### Learning resources

- [The Odin Project](https://www.theodinproject.com/)
- [W3Schools](https://www.w3schools.com/)
- [MDN](https://developer.mozilla.org/en-US/)

## Got feedback for me?

I'm always down for some feedback! I'm constantly striving to improve my coding skills and take them to the next level, so if you have any thoughts or suggestions, don't hesitate to hit me up via email or Discord.

Thanks a ton for your help, and let's blast off together :rocket:

- E-Mail - [Dennis Schneider](mailto:biotech9261@gmail.com)
- Discord - [BioTech](https://discord.com/users/343126401450377217)
