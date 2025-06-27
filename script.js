// script.js

document.addEventListener("DOMContentLoaded", () => {
  const subscribeBtn = document.querySelector(".subscribe button");
  subscribeBtn.addEventListener("click", () => {
    const emailInput = document.querySelector(".subscribe input");
    if (emailInput.value) {
      alert(`Thanks for subscribing with: ${emailInput.value}`);
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
