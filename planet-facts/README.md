# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Screenshot

![](.src/images/screenshot.png)

### Links

- Solution URL: [Github repo](https://github.com/evancp87/fem-planet-facts)
- Live Site URL: [Netlify live site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Sass
- useContext hooks
- Axios
- React Framer Motion
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I used React Framer motion in this project, which i'd never used before, so it was good to use a new technology.

I definitely passed data around a lot and had to think carefully about how it was used differently in different places. There were certainly a few gotchas and where i had to rethink my approach. But

I could've used Redux for this app, but decided to get more experience with the useContext hook. UseContext made it easy to pass data around and it was good to have the logic for changing planets wrapped up in one function. It made writing most other code quite easy as i knew it was being controlled and working from there.

There were lots of opportunities to manipulate things based on state, and I had fun using custom properties to update border styles on hover or active state based on either the current planet selected or the colour associated with a particular planet.

```js
// My function to update the current planet in the context
const setPlanetData = useCallback(async () => {
    const { data } = await axios.get("src/data.json");
    return data.filter((planet) => {
      const {
        name,
        overview: { content: overviewContent, source: overviewSource },
        structure: { content: structureContent, source: structureSource },
        geology: { content: geologyContent, source: geologySource },
        rotation,
        revolution,
        radius,
        temperature,
        images: {
          planet: planetImage,
          internal: planetInternalImage,
          geology: planetGeologyInternal,
        },
      } = planet;
      if (name === currPlanet) {
        setData({
          name,
          overviewContent,
          overviewSource,
          structureContent,
          structureSource,
          geologyContent,
          geologySource,
          rotation,
          revolution,
          radius,
          temperature,
          planetImage,
          planetInternalImage,
          planetGeologyInternal,
        });
      }
    });
  }, [currPlanet]);

}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I definitely need to continue learning how to refine css to get the website looking as close to 100% like the designs as possible. I felt that some of the alignments of the different components could be tightened up. I didn't manage to get the data values section to fit onto the screen and the user has to scroll down to see that data.

I struggled to get the tabs to match the design, in the sense of how the tabs switched position on mobile. My solution was to build a new component displayed only on smaller devices, and the same was true of the sidebar, independent of the Nav. I felt perhaps a cleverer approach would've been to try and make the Nav responsive, as i ended up writing code twice for that and the tabs, whereas i could've written one component and made it responsive. I will look into these kinds of solutions for complex responsive designs in future.

i was unsure about where to place the sidebar too. I placed it inside the main layout heirarchy, but alternatives could've been to have used createPortal, so it's created in the component it's controlled from and placed outside of that component in the DOM.

## Author

- Website - [Evan Parker](https://www.evanparker.co.uk/)
- Frontend Mentor - [@evancp87](https://www.frontendmentor.io/profile/evancp87)
