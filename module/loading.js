import { getElement } from './getElement.js';
const loading = getElement('.loading');
//const loadingCircle = getElement('.loader');
//show
export const showLoading = () => {
  loading.classList.remove('hide-loading');
};
//hide

export const hideLoading = () => {
  loading.classList.add('hide-loading');
};

//show
export const showLoadingMain = () => {
  getElement('.loader').classList.remove('hide-loader');
};
//hide

export const hideLoadingMain = () => {
  getElement('.loader').classList.add('hide-loader');
};
