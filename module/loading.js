import { getElement } from './getElement.js';
const loading = getElement('.loading');
//show
export const showLoading = () => {
  loading.classList.remove('hide-loading');
};
//hide

export const hideLoading = () => {
  loading.classList.add('hide-loading');
};
