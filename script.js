let firstImage = document.getElementById("img1");
let secondImage = document.getElementById("img2");
let thirdImage = document.getElementById("img3");
let fourthImage = document.getElementById("img4");
let form = document.getElementById("form");
let dice = document.getElementById("dice");
let congratulations = document.getElementById("congratulations");
let message = document.getElementById("message");

let name;
let email;
let username;

let diceRolls = [];
let attempts = 0;

firstImage.addEventListener("click", function() {
  form.style.display = "block";
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  name = e.target.name.value;
  email = e.target.email.value;
  username = e.target.username.value;
  form.style.display = "none";
});

secondImage.addEventListener("click", function() {
  if (!name || !email || !username) {
    alert("Please fill out the form first");
    return;
  }
  message.innerHTML = `Name: ${name} <br> Username: ${username}`; 
});

thirdImage.addEventListener("click", function() {
  if (!name || !email || !username) {
    alert("Please fill out the form and view your details first");
    return;
  }
  dice.style.display = "block";
});

dice.addEventListener("click", function() {
  if (diceRolls.length === 3) {
    return;
  }
  let roll = Math.floor(Math.random() * 6) + 1;
  diceRolls.push(roll);
  message.innerHTML += `${roll} + `;

  if (diceRolls.length === 3) {
    let total = diceRolls.reduce((a, b) => a + b);
    message.innerHTML += `${roll} + `;

    if (total > 10) {
      fourthImage.style.display = "block";
    } else if (attempts === 0) {
      attempts += 1;
      diceRolls = [];
    message.innerHTML += "";

      alert("Please try again");
    } else {
      message.innerHTML = "Bad luck";
    }
  }
});

fourthImage.addEventListener("click", function() {
  let coupon = Math.random().toString(36).substr(2, 12);
  message.innerHTML = `Coupon: ${coupon}`;
  congratulations.style.display = "block";
});
