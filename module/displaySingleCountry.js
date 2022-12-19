import { getElement } from './getElement.js';
import formatNum from './formatNum.js';
import { fetchAllData } from './fetch.js';
import setCountry from './setCountry.js';

const displaySingleCountry = (data) => {
  const countryData = data[0];
  console.log(countryData);
  //declaration
  const nativeNameDOM = getElement('.native-result');
  const populationDOM = getElement('.population-result');
  const regionDOM = getElement('.region-result');
  const subRegion = getElement('.subregion-result');
  const capitalResult = getElement('.capital-result');

  const TLD = getElement('.tld-result');
  const currenciesResult = getElement('.currencies-result');
  const languagesResult = getElement('.languages-result');
  const image = getElement('.single-page-img');
  const singleCountryTitle = getElement('.single-page__country__name');
  //OBJECT destructuring
  const {
    altSpellings,
    name: { nativeName, common },
    borders,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    flags: { svg },
  } = countryData;

  //iterate over language object and return values
  const list = Object.values(languages);
  const newLanguage = list
    .map((lang) => {
      return lang;
    })
    .join('');

  //Further destructuring arrays and object
  const newCapital = capital
    .map((capitals) => {
      return capitals;
    })
    .join('/');

  const newTLD = tld[0];

  //Object.values

  const newnativeName = Object.values(nativeName)[0].official;
  const newcurrencies = Object.values(currencies)[0].name;

  //replacing evry item in the DOM
  document.title = `${common} Detail`;

  nativeNameDOM.textContent = newnativeName;
  populationDOM.textContent = formatNum(population);
  regionDOM.textContent = region;
  subRegion.textContent = subregion;
  capitalResult.textContent = newCapital;
  TLD.textContent = newTLD;
  currenciesResult.textContent = newcurrencies;
  languagesResult.textContent = newLanguage;
  image.src = svg;
  image.alt = `${common} flag`;
  singleCountryTitle.textContent = common;

  //Dynamically adding the buttons
  const borderCountry = getElement('.border-country__btn__wrapper');
  borderCountry.innerHTML = borders
    .map((border) => {
      return `<button class="btn">${border}</button>`;
    })
    .join('');
};
//event listner for boarders btn
const borderCountry = getElement('.border-country__btn__wrapper');
borderCountry.addEventListener('click', async (e) => {
  const shortname = e.target.textContent;
  const allurl = 'https://restcountries.com/v3.1/all';

  const allData = async (url) => {
    const data = await fetchAllData(url);
    const newDatalist = await data.find((obj) => {
      return obj.fifa === shortname;
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
});
export default displaySingleCountry;