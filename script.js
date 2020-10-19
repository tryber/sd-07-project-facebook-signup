
document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

// function validarForm() {

// }

const justValidate = new window.JustValidate('.js-form', {
  rules: {
    firstname: {
      required: true,
    },
    lastname: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      strength: {
        default: true,
      },
    },
    birthdate: {
      required: true,
    },
    gender: {
      required: true,
    },
  },
  messages: {
    firstname: {
      required: 'Campos inválidos',
    },
    lastname: {
      required: 'Campos inválidos',
    },
    email: {
      required: 'Campos inválidos',
      email: 'E-mail inválido',
    },
    password: {
      required: 'Campos inválidos',
      strength: 'Senha deve ter pelo menos uma letra maiúscula, uma minúscula, e um número',
    },
    birthdate: {
      required: 'Campos inválidos',
    },
    gender: {
      required: 'Campos inválidos',
    },
  },

  // submitHandler: function () {
  //   validarForm();
  // },
});

window.onload = function () {
  return justValidate;
};

function showGenderCustom() {
  const genderCustomInput = document.getElementById('gender-custom');
  if (genderCustomInput.style.display === 'none') {
    genderCustomInput.style.display = 'block';
  } else {
    genderCustomInput.style.display = 'none';
  }
}

window.onload = function () {
  const genderCustomInput = document.getElementById('gender-custom');
  genderCustomInput.style.display = 'none';

  const personalizadoRadio = document.getElementById('personalizado');
  personalizadoRadio.addEventListener('click', showGenderCustom);
};
