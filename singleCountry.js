import { getElement } from './module/getElement.js';
import { fetchAllData } from './module/fetch.js';
import displaySingleCountry from './module/displaySingleCountry.js';
import { hideLoading } from './module/loading.js';
//loading Gif
const loadingGif = getElement('.loading');

const displayCountryDOM = async () => {
  const id = localStorage.getItem('id');
  //!CASE1--when the user trys to acess directly the single page by typing the url
  if (!id) {
    window.location.replace('index.html');
  } else {
    const country = await fetchAllData(
      `https://restcountries.com/v3.1/name/${id}`
    );
    displaySingleCountry(country);
    hideLoading();
  }
};

//event
window.addEventListener('DOMContentLoaded', displayCountryDOM);

window.addEventListener('DOMContentLoaded', function () {
  loadingGif.classList.add('hide-loading');
});
