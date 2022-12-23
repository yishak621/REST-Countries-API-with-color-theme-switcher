//import
import { getElement } from './module/getElement.js';
import toggleBtn from './module/darkmode.js';

import { fetchAllData } from './module/fetch.js';
import { showCountry } from './module/display.js';
import searchForm from './module/search.js';

//loading Gif
const loadingGif = getElement('.loading');
const allurl = 'https://restcountries.com/v3.1/all';

window.addEventListener('DOMContentLoaded', function () {
  showCountry(allurl);
});

window.addEventListener('load', function () {
  loadingGif.classList.add('hide-loading');
});

//fixed nav bar
const navBar = document.getElementById('filter-bar');
const navHeight = navBar.getBoundingClientRect().height; //103px for pc
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  console.log(scrollHeight);
  if (scrollHeight > navHeight) {
    navBar.classList.add('fixed-nav');
  } else {
    navBar.classList.remove('fixed-nav');
  }
  //top link
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
