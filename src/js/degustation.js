const nameInput = document.getElementById('name-input');
function nameInputHandler(event) {
  const {target} = event;
  const {value} = target;
  const sample = /^[a-z]{3,}$/i;
  if (!sample.test(value) && value !== '') {
    nameInput.classList.add('red');
    if (document.getElementById('name-tip')) return
    const tip = document.createElement('div');
    tip.className = 'main-form__form-container__name-tip';
    tip.id = 'name-tip';
    tip.innerHTML = '<p>The name field must contain only latin letters and have at least 3 symbols length.</p>';
    document.getElementById('form-container').append(tip);
    return;
  }
  if (nameInput.classList.contains('red')) {
    nameInput.classList.remove('red');
    document.getElementById('name-tip').remove();
  }
};

nameInput.addEventListener('input', nameInputHandler);