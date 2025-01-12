const MIN_PRICES = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
  hotel: 3000,
};

const adForm = document.querySelector('.ad-form');
const typeInput = adForm.querySelector('#type');
const priceInput = adForm.querySelector('#price');
const timeInInput = adForm.querySelector('#timein');
const timeOutInput = adForm.querySelector('#timeout');
const roomNumberInput = adForm.querySelector('#room_number');
const capacityInput = adForm.querySelector('#capacity');

const onTimeInChange = () => {
  timeOutInput.value = timeInInput.value;
};

const onTimeOutChange = () => {
  timeInInput.value = timeOutInput.value;
};

const addPristine = () => new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
});
let pristine = addPristine();

const viewCapacityRecomendations = () =>
  `Допустимые варианты выбора количества гостей:
    - 1 комната — «для 1 гостя»;
    - 2 комнаты — «для 2 гостей» или «для 1 гостя»;
    - 3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»;
    - 100 комнат — «не для гостей».`;

const isValidCapacity = () => {
  if (roomNumberInput.value === '100' && capacityInput.value === '0') {
    return true;
  }
  if (Number(roomNumberInput.value) >= Number(capacityInput.value) &&  Number(capacityInput.value) !== 0 && Number(roomNumberInput.value) !== 100) {
    return true;
  }
  return false;
};

const syncsTypeAndPriceInputs = () => {
  priceInput.placeholder = MIN_PRICES[typeInput.value];
  priceInput.min = MIN_PRICES[typeInput.value];
  pristine.destroy();
  pristine = addPristine();
  pristine.addValidator(
    capacityInput,
    isValidCapacity,
    viewCapacityRecomendations()
  );
};

typeInput.addEventListener('change', syncsTypeAndPriceInputs);
timeInInput.addEventListener('change', onTimeInChange);
timeOutInput.addEventListener('change', onTimeOutChange);
roomNumberInput.addEventListener('change', () => pristine.validate(capacityInput));
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

const toggleForms = (() => {
  const forms = document.querySelectorAll('form');
  const formsDisabledClasses = Array.from(forms, (form) => `${form.classList.value}--disabled`);
  return () => {
    for (const form of forms) {
      let i = 0;
      form.classList.toggle(formsDisabledClasses[i++]);
      for (const formChildren of form.children) {
        if (formChildren.disabled) {
          formChildren.disabled = false;
        } else {
          formChildren.disabled = true;
        }
      }
    }
  };
})();

export {toggleForms, syncsTypeAndPriceInputs};
