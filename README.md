# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)


### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JS

### What I learned

#### en:

Initially, I tried to make the JavaScript code change the `style.display` of the thank you card from 'none' to 'block', but this interfered with the layout and the behavior of the flexbox.

When you hide the card with `display: none`, the element is completely removed from the page flow, which can sometimes break the layout when re-displayed with `display: block`.

#### pt:
Inicialmente, tentei fazer com que o código javascript mudasse o `style.display` do thank you card de 'none' para 'block', porém isso interferia no layout e no comportamento do flexbox.

Quando você oculta o card com `display: none`, o elemento é completamente removido do fluxo da página, o que às vezes pode quebrar o layout quando reexibido com `display: block`.

```js
submitButton.addEventListener('click', () => {
  if (selectedRating) {
    ratingSpan.textContent = `You selected ${selectedRating} out of 5`;
    ratingCard.style.display = 'none';
    thankYouCard.style.display = 'block';
  } else {
    alert('Please select a review rating before submitting!');
  }
});
```
#### en:

Instead of using `display: none` and `display: block`, it is safer to use visibility and opacity to prevent the layout from breaking when the content is hidden and displayed.

#### pt:

Em vez de usar `display: none` e `display: block`, é mais seguro usar a visibilidade e opacidade para evitar que o layout seja quebrado quando o conteúdo é ocultado e exibido.

```js
submitButton.addEventListener('click', () => {
  // Check if a rating has been selected
  if (selectedRating) {
    ratingSpan.textContent = `You selected ${selectedRating} out of 5`;
    ratingCard.style.opacity = '0';
    ratingCard.style.visibility = 'hidden';
    thankYouCard.classList.add('visible');
  } else {
    alert('Please select a review rating before submitting!');
  }
});
```

#### en: 

I also had to adjust the position of the cards. I created a `card-container` div to wrap both cards and used `position: relative`. In the cards, I used `position: absolute` so that they occupy the exact same space within this container.

#### pt:

Também tive que ajeitar a posição dos cards. Criei uma div card-container para envolver os dois cards e usei o position: relative. Nos cards, usei o position: absolute para que ocupem exatamente o mesmo espaço dentro desse contêiner.




