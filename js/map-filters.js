const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = mapFilters.children;

const disableFilters = () => {
  mapFilters.classList.add('map__filters--disabled');
  for (const filter of mapFiltersList) {
    filter.disabled = true;
  }
};

const activateFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  for (const filter of mapFiltersList) {
    filter.disabled = false;
  }
};

// disableFilters();
// activateFilters();
