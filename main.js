const form = document.getElementById("email-form");
const inputEmail = document.getElementById("email");
const error = document.getElementById("error-message");
const success = document.querySelector(".success");
const main = document.getElementById("main");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = inputEmail.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (email === "") {
    error.textContent = "Please enter your email address.";
    error.style.display = "block";
    inputEmail.style.borderColor = "var(--color-tomato)";
    inputEmail.style.backgroundColor = "var(--color-semi-tomato)";
    inputEmail.classList.add("error");
    return;
  }

  if (!isValid) {
    error.textContent = "Valid email required";
    error.style.display = "block";
    inputEmail.style.borderColor = "var(--color-tomato)";
    inputEmail.style.backgroundColor = "var(--color-semi-tomato)";
    inputEmail.classList.add("error");
  } else {
    error.style.display = "none";
    inputEmail.style.borderColor = "";
    inputEmail.style.backgroundColor = "";
    inputEmail.classList.remove("error");
    success.style.display = "block";
    main.style.display = "none";
  }
});

const dismiss = document.getElementById("dismiss");

dismiss.addEventListener("click", () => {
  success.style.display = "none";
  main.style.display = "flex";
});
