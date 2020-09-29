const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', () => {
  const login = document.querySelector('#user-email-phone');
  alert(`${login.value}`);
});

const inputGender = document.querySelector('#gender-custom');
const radioGender = document.querySelector('#other');

radioGender.addEventListener('change', () => {
  if (
    inputGender.style.display === '' ||
    inputGender.style.display === 'none'
  ) {
    inputGender.style.display = 'block';
  } else {
    inputGender.style.display = 'none';
  }
});

function checkRadio() {
  if (inputGender.style.display === 'block') {
    inputGender.style.display = 'none';
  }
}

function welcome() {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const birthdate = document.getElementById('birthdate').value;
  const phoneEmail = document.getElementById('phone_email').value;
  const welcomeUser = `Olá, ${firstName} ${lastName}, ${phoneEmail}, ${birthdate}`;
  const contentReturn = document.querySelector('.right-content');
  for (let index = 0; index < contentReturn.children.length; index += 1) {
    contentReturn.children[index].style.display = 'none';
  }
  contentReturn.innerHTML = welcomeUser;
}

const male = document.querySelector('#male');
male.addEventListener('change', checkRadio);

const female = document.querySelector('#female');
female.addEventListener('change', checkRadio);

const cadast = document.querySelector('#facebook-register');

cadast.addEventListener('click', () => {
  const formsValue = document.querySelectorAll('.form-newaccaount input');
  const input = document.querySelectorAll('input:checked');
  let ok;
  for (let i = 0; i < 5; i += 1) {
    if (input.length < 1 ||
  (inputGender.style.display === 'block' && inputGender.value === '')
  || formsValue[i].value === '') {
      document.querySelector('.chek-return').style.display = 'block';
    } else {
      ok = true;
    }
  }
  if (ok) {
    welcome();
  }
});
