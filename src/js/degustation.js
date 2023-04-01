const nameInput = document.getElementById('name-input');
const phoneInput = document.getElementById('phone-input');
const submitBttn = document.getElementById('submit-button');
function nameInputHandler(event) {
  const {target} = event;
  const {value} = target;
  const sample = /^[a-z]{3,}$/i;
  if (!sample.test(value) && value !== '') {
    nameInput.classList.remove('validated');
    submitBttn.classList.remove('active');
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
    nameInput.classList.add('validated');
    if (phoneInput.classList.contains('validated')) submitBttn.classList.add('active')
    document.getElementById('name-tip').remove();
  }
  if (value === '') {
    nameInput.classList.remove('validated');
    submitBttn.classList.remove('active');
  }
};
function phoneInputHandler(event) {
  const {target} = event;
  const {value} = target;
  const sample = /^8-?\d{3}-?\d{3}-?\d{2}-?\d{2}$|^\+?\d{3}-?\d{2,3}-?\d{3}-?\d{2}-?\d{2}$/;
  if (!sample.test(value) && value !== '') {
    phoneInput.classList.remove('validated');
    submitBttn.classList.remove('active');
    phoneInput.classList.add('red');
    if (document.getElementById('phone-tip')) return
    const tip = document.createElement('div');
    tip.className = 'main-form__form-container__phone-tip';
    tip.id = 'phone-tip';
    tip.innerHTML = `<p>Your phone must fit to one of these shapes: 8-000-000-00-00 or +000-00(0)-000-00-00. 
                     You can to not use the - sign in your phone number.</p>`;
    document.getElementById('form-container').append(tip);
    return;
  }
  if (phoneInput.classList.contains('red')) {
    phoneInput.classList.remove('red');
    phoneInput.classList.add('validated');
    if (nameInput.classList.contains('validated')) submitBttn.classList.add('active')
    document.getElementById('phone-tip').remove();
  }
  if (value === '') {
    phoneInput.classList.remove('validated');
    submitBttn.classList.remove('active');
  }
};

function submitHandler() {
  if (!nameInput.classList.contains('validated') || !phoneInput.classList.contains('validated')) return;
  function sendForm() {                           // your send form logic
    document.getElementById('modal').remove();
  };
  const modal = document.createElement('div');
  modal.style = `position: absolute; color: black; text-align: center; width: 600px; height: 400px; top: 75px; left: 275px;
                 background-color: #E6E3C4; border: 7px double black; border-radius: 15px;`;
  modal.id = 'modal';
  modal.innerHTML = `<style>
                       .form-input
                         {
                           margin-top: 30px;
                           border: none;
                           height: 40px;
                           width: 180px;
                           background-color: gray;
                           font-size: 26px;
                           line-height: 30px;
                           color: white;
                           font-weight: bold;
                           border-radius: 5px 0 0 5px;
                           cursor: pointer;
                         };
                     </style>
                     <p style="margin-top: 50px; font-size: 18px; font-weight: bold">Please check this information and click OK to send this form.</p>
                     <p style="margin-top: 20px">Our managers will call you back.</p>
                     <p style="margin-top: 20px">Press <span style="font-weight: bold">CANCEL</span> to abort sending the form.</p>
                     <p style="margin-top: 20px">Your name - ${nameInput.value}.</p> 
                     <p style="margin-top: 20px">Your phone - ${phoneInput.value}.</p>
                     <p style="margin-top: 20px">The store address - ${document.getElementById('store-input').value}.</p>
                     <input onmouseover="this.style.backgroundColor='red'" onmouseout="this.style.backgroundColor='gray'"  
                      onclick="document.getElementById('modal').remove()"  class="form-input" type="button" value="CANCEL" />
                     <input onmouseover="this.style.backgroundColor='green'" onmouseout="this.style.backgroundColor='gray'"
                      onclick="document.getElementById('modal').remove()" class="form-input" style="border-radius: 0 5px 5px 0;" type="button" value="OK" />`
  document.getElementById('form-container').append(modal);
};

nameInput.addEventListener('input', nameInputHandler);
phoneInput.addEventListener('input', phoneInputHandler);
submitBttn.addEventListener('click', submitHandler);