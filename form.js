var signUp = (e) => {
  const data = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    uname: document.getElementById("uname").value,
    pass: document.getElementById("pass").value
  }
  localStorage.setItem('data', JSON.stringify(data));
}

const login = (e) => {
  e.preventDefault();
  let result = JSON.parse(localStorage.getItem('data'));
  let loginEmail = document.getElementById("email1").value;
  let loginPass = document.getElementById("pass1").value
  if (result.email !== loginEmail) {
    alert('email is not exist!')
  } else if (result.pass !== loginPass) {
    alert('pass not correct!')
  } else {
    alert('user is Authenticated!')
  }
}

function loginPage(){
  window.open("/home/dell/Downloads/Sadik/login.html")
}

const signupPageOpen = () => {
  window.open("/home/dell/Downloads/Sadik/signup.html")
}
