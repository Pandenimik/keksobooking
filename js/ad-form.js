const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.children;

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  for (const fieldset of adFormFieldsets) {
    fieldset.disabled = true;
  }
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  for (const fieldset of adFormFieldsets) {
    fieldset.disabled = false;
  }
};

// disableForm();
// activateForm();
