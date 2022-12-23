import { getElement } from './getElement.js';
import { showCountry } from './display.js';
import { showLoadingMain } from './loading.js';
import { hideLoadingMain } from './loading.js';
//declaration for single country search
const baseURL = 'https://restcountries.com/v3.1/name/';
const searchForm = getElement('.filter-search-form');
const searchInput = getElement('#filter-search');
const allurl = 'https://restcountries.com/v3.1/all';

searchForm.addEventListener('keyup', function (e) {
  showLoadingMain();
  e.preventDefault();
  const value = searchInput.value;
  //CASE-1--when the input is empty
  if (!value) {
    return showCountry(allurl);
  }

  //CASE-2--user add values
  showCountry(`${baseURL}${value}`);
  hideLoadingMain();
});

export default searchForm;
