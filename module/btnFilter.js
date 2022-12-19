import { getElement } from './getElement.js';
import { fetchAllData } from './fetch.js';

//declaration
const filterSelectContainer = getElement('#continents');
const allurl = 'https://restcountries.com/v3.1/all';
//Daynamically adding the select options

const setupoptions = (allCountriesData) => {
  const options = [
    'all',
    ...new Set(
      allCountriesData.map(
        (country) => country.region //returns the unique one
      )
    ),
  ];

  //filling the options innerHTML
  filterSelectContainer.innerHTML = options
    .map((region) => {
      return `<option value="${region}" class="option">${region}</option>`;
    })
    .join('');
};

export default setupoptions;
