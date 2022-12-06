document.addEventListener('DOMContentLoaded', () => {
  console.log('hi')
})

let p1 = document.querySelector('#password').value;
let p2 = document.querySelector('#confirmPassword').value;



// const password = document.getElementById('password');
// password.onfocus = function () {
//   document.getElementById('message').style.display = 'block';
// }

// password.onblur = function () {
//   document.getElementById('message').style.display = 'none';
// }


const button = document.querySelector('.btn');

button.addEventListener('click', (e) => {
  console.log('The button has been clicked!')
  button.innerHTML = 'Clicked!';
  if (p1 !== p2) {
    alert('passwords do not match!')
  } else {
    console.log('passwords match!')
  }
})