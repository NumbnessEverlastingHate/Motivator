var pass = document.querySelector('.password');
var login = document.querySelector('.login');


pass.addEventListener('input', changeBackground);
login.addEventListener('input', changeBackground);

function changeBackground() {
  if (password.value !== '' && login.value !== '') {
    document.querySelector('button').style.background = 'gold';
  } else {
    document.querySelector('button').style.background = 'grey';
  }
}