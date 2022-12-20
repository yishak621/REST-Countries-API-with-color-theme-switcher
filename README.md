# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor]...by Yishak Abrham

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [API limitation](#API-limitation)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

this project is intended to master the API file destructuring and using them in the real application.

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Even if building a web app is easy with framworks i used pure Javascript tools to build this webapp. i used module type JS to enable building diffrent components of JS and combining them in to one JS file.
**Components**

- button filter.js/select options filter
- search.js/search input filter
- Darkmode.js/toggle darkmode
- disply.js/display countries in the main page
- displaySingleCountry.js/displaying single country in the single page
- fetch.js/fetching data from API provider URL
- formatNum.js/formating population number
- setCountry/adding the clicked country name in to local storage
- getElement.js/function grabbing elements from document

  **Cool methods **
  1 - using ...new Set method to return the unique values from the data[in these project to grab the unique continents ]

```js
const setupoptions = (allCountriesData) => {
 const options = [
   'all',
   ...new Set(
     allCountriesData.map(
       (country) => country.region //returns the unique one
     )
   ),
 ];
```

2 - format number --recive a number and format it to the thousends formats

```js
function formatNum(number) {
  let nf = new Intl.NumberFormat('en-US');
  nf = nf.format(number);
  return nf;
}
```

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- SCSS
- Module type

### What I learned

the main thing i learned here is to grab the first item of object from the teration, even if the property name is not consistent for all of iterable objects using `Object.values(objname)[index]` method

```js
const newnativeName = Object.values(nativeName)[0].official;
```

and also sending data to the local storage and grabbing that data from the local storage since we cant acess datas from one page redirected to the other page if we dont use local storage
NOTE: i use countryname as an id

```js
const setCountry = (section) => {
  section.addEventListener('click', function (e) {
    // e.preventDefault();
    const id = e.target.dataset.id;
    localStorage.setItem('id', id);
  });
};
```

## API-limitation

the API provided has some limtations specially on the boarders property they provide a short name `BRA` for border countries so to display them we have no option to the full name of countries. and also since we want to navigate to the border countries when its clicked i have to go through unwanted path just to grap the border country

```js
//event listner for boarders btn
const borderCountry = getElement('.border-country__btn__wrapper');
borderCountry.addEventListener('click', async (e) => {
  const shortname = e.target.textContent;
  const allurl = 'https://restcountries.com/v3.1/all';

  const allData = async (url) => {
    const data = await fetchAllData(url);
    const newDatalist = await data.find((obj) => {
      return obj.cca3 === shortname;
    });

    return newDatalist;
  };
  //all datas
  const allCountryData = await allData(allurl);
  const nameofCountry = allCountryData.name.common;
  const country = await fetchAllData(
    `https://restcountries.com/v3.1/name/${nameofCountry}`
  );
  displaySingleCountry(country);
```

## Acknowledgments

Thank u frontend mentor
