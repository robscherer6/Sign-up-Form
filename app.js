let password = document.querySelector('#password').value;
let confirmPassword = document.querySelector('#confirmPassword').value;

let error = document.querySelector('#error');

const button = document.querySelector('.btn');

button.addEventListener('click', (e) => {
  console.log('The button has been clicked!')
  button.innerHTML = 'Clicked!';
  if (password === confirmPassword) {
    error.innerHTML = ''
  }
})