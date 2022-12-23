import { getElement } from './getElement.js';
import { showLoading, showLoadingMain } from './loading.js';
//URL
//const allurl = 'https://restcountries.com/v3.1/all';

const fetchAllData = async (url) => {
  showLoading();
  try {
    const data = await fetch(url);
    const countriesData = await data.json();
    return countriesData;
  } catch (error) {
    console.log(error);
  }
};
const fetchAllDataMain = async (url) => {
  showLoadingMain();
  try {
    const data = await fetch(url);
    const countriesData = await data.json();
    return countriesData;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllData, fetchAllDataMain };
