import { getElement } from './getElement.js';
//URL
//const allurl = 'https://restcountries.com/v3.1/all';

const fetchAllData = async (url) => {
  try {
    const data = await fetch(url);
    const countriesData = await data.json();
    return countriesData;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllData };
