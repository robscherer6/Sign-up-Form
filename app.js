const button = document.querySelector('.btn');

button.addEventListener('click', (e) => {
  console.log('The button has been clicked!')
  button.innerHTML = 'Clicked!';
})