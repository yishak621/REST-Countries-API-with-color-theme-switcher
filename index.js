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
