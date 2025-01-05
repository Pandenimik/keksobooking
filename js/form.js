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

export {toggleForms};
