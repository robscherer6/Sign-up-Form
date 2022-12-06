const password = document.getElementById('password');
password.onfocus = function () {
  document.getElementById('message').style.display = 'block';
}

password.onblur = function () {
  document.getElementById('message').style.display = 'none';
}


const button = document.querySelector('.btn');

button.addEventListener('click', (e) => {
  console.log('The button has been clicked!')
  button.innerHTML = 'Clicked!';
})