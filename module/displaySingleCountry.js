import { getElement } from './getElement.js';
import formatNum from './formatNum.js';
import { fetchAllData } from './fetch.js';
import setCountry from './setCountry.js';
import { hideLoading } from './loading.js';

const displaySingleCountry = (data) => {
  hideLoading();
  const countryData = data[0];

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
    .join('/');

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

  //Dynamically adding the border buttons
  const borderCountry = getElement('.border-country__btn__wrapper');
  if (borders) {
    const finalresult = async () => {
      //fetching datas using codes endpoint
      const codes = borders
        .map((border) => {
          return border;
        })
        .join(',');
      const newurl = `https://restcountries.com/v3.1/alpha?codes=${codes}`;
      const borderCountries = await fetchAllData(newurl);

      const newHTML = await borderCountries
        .map((border) => {
          return `<button class="btn">${border.name.common}</button>`;
        })
        .join('');

      borderCountry.innerHTML = newHTML;
    };
    finalresult();
  } else {
    borderCountry.innerHTML = `<span class="error no-border">${common} have no border!</span>`;
  }
};
//event listner for boarders btn
const borderCountry = getElement('.border-country__btn__wrapper');
borderCountry.addEventListener('click', async (e) => {
  const shortname = e.target.textContent;
  const allurl = 'https://restcountries.com/v3.1/all';

  const allData = async (url) => {
    const data = await fetchAllData(url);
    const newDatalist = await data.find((obj) => {
      return obj.name.common === shortname;
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
  //the 0.5sec is the transition of texts
  setTimeout(hideLoading, 250);
});
export default displaySingleCountry;
