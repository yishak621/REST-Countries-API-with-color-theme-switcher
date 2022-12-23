const setCountry = (section) => {
  section.addEventListener('click', function (e) {
    // e.preventDefault();
    const id = e.target.dataset.id;

    localStorage.setItem('id', id);
  });
};

export default setCountry;
