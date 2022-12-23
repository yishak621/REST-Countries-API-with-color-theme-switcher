import { getElement } from './getElement.js';
import { fetchAllData, fetchAllDataMain } from './fetch.js';
import setCountry from './setCountry.js';
import setupoptions from './btnFilter.js';
import formatNum from './formatNum.js';
import { showLoadingMain } from './loading.js';
import { hideLoadingMain } from './loading.js';
//SHOW country
const showCountry = async (url) => {
  //fetch country
  hideLoadingMain();
  const data = await fetchAllDataMain(url);

  const section = await displayCountry(data);
  setupoptions(data); //dynamically adding the select options

  //event listner to select options
  const select = document.getElementById('continents');
  select.addEventListener('change', function () {
    const selectedvalue = select.value;
    //All
    if (selectedvalue === 'all') {
      //const newSection = displayCountry(data);
      return displayCountry(data);
    }
    //other continents
    let filtered = data.filter((country) => {
      if (country.region === selectedvalue) {
        return country;
      }
    });
    displayCountry(filtered);
    hideLoadingMain();
  });

  //if there is a country list
  if (section) {
    setCountry(section);
  }
};

//DISPLAY country
const displayCountry = (countries) => {
  console.log(countries.length);
  const section = getElement('.countries-display');
  //if there is no items to be displayed
  if (countries.length < 1 || countries.length === undefined) {
    section.innerHTML = `<h1 class="error">sorry no country to be displayed here,check your spelling and search again!</h1>`;
  }
  //console.log(countries);
  const newCountry = countries
    .map(({ name, capital, population, region, flags: { png } }) => {
      const countryName = name.common;
      const countryCapital = capital;

      return ` <a href="singleCountry.html" data-aos="fade-up">
            <article class="single-country" >
              <div class="single-country__wrapper">
                <picture class="single-country__flag">
                  <img
                    data-id="${countryName}"
                    src="${png}"
                    alt="${countryName} flag"
                  />
                </picture>
                <div class="single-country__discription">
                  <h3>${countryName}</h3>
                  <div class="single-country__discription__wrapper">
                    <span class="single-country__population"
                      ><span class="title population-title">Population:</span>
                      <span class="population-number"> ${formatNum(
                        population
                      )}</span>
                    </span>
                    <span class="single-country__region"
                      ><span class="title region-title">Region:</span
                      ><span class="region-name"> ${region}</span>
                    </span>
                    <span class="single-country__capital"
                      ><span class="title capital-title">Capital:</span
                      ><span class="country-capital"> ${countryCapital}</span>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </a>`;
    })
    .join('');

  //displaying them
  section.innerHTML = newCountry;
  hideLoadingMain();
  return section;
};

export { showCountry };
