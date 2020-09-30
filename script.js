const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function () {
  const nameInput = document.getElementById('user-email-phone').value;
  alert(`${nameInput}`);
});

const persInput = document.getElementById('personalizado');
persInput.addEventListener('click', function () {
  const choiceGender = document.createElement('input');
  choiceGender.className = 'input';
  choiceGender.type = 'text';
  choiceGender.placeholder = 'Gênero (opcional)';
  choiceGender.name = 'gender-custom';
  const divGender = document.getElementById('pers-input');
  divGender.appendChild(choiceGender);
});

function clearRightContent() {
  const rightContent = document.querySelector('#right-content');
  rightContent.innerHTML = '';
}

//  ajuda de Samanta e Denner e reorganizado depois de consultar Vinicius Muniz
const validate = new window.JustValidate('.js-form', {
  rules: {
    firstname: {
      required: true,
    },
    lastname: {
      required: true,
    },
    phone_email: {
      required: true,
    },
    password: {
      required: true,
    },
    birthdate: {
      required: true,
    },
    radio: {
      required: true,
    },
  },
  messages: {
    firstname: 'Campos inválidos',
    lastname: 'Campos inválidos',
    phone_email: 'Campos inválidos',
    password: 'Campos inválidos',
    birthdate: 'Campos inválidos',
    radio: 'Campos inválidos',
  },
  submitHandler() {
    const firstname = document.querySelector('#firstname').value;
    const lastname = document.querySelector('#lastname').value;
    const phoneMail = document.querySelector('#phone-email').value;
    const birthdate = document.querySelector('#birthdate').value;
    const gender = document.querySelector('#forms').gender.value;
    const resumeForm = document.createElement('div');
    resumeForm.innerHTML = `Olá, ${firstname} ${lastname}.<br>E-mail e/ou telefone: ${phoneMail}.<br>Data de Nascimento: ${birthdate}.<br>Genero: ${gender}.`;
    clearRightContent();
    const rightContent = document.querySelector('#right-content');
    rightContent.appendChild(resumeForm);
  },
});

window.onload = function () {
  return validate;
};
