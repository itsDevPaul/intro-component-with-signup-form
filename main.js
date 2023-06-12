const form = document.getElementById('signup-form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  // Validate First Name
  if (firstName.value.trim() === '') {
    showError(firstName);
  } else {
    removeError(firstName);
  }

  // Validate Last Name
  if (lastName.value.trim() === '') {
    showError(lastName);
  } else {
    removeError(lastName);
  }

  // Validate Email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    showError(email);
  } else {
    removeError(email);
  }

  // Validate Password
  if (password.value === '') {
    showError(password);
  } else if (password.value.length < 8) {
    showPasswordError(password, "Password must be at least 8 characters long");
  } else if (!isPasswordValid(password.value)) {
    showPasswordError(password, "Password must contain at least 1 uppercase letter, 1 lowercase letter, and a number");
  } else {
    removeError(password);
  }
});

function showError(input) {
  let errorIcon = input.nextElementSibling;
  let errorMessage = errorIcon.nextElementSibling;

  input.classList.add('input-error');
  errorIcon.style.display = 'block';
  errorMessage.style.display = 'block';
}

function removeError(input) {
  let errorIcon = input.nextElementSibling;
  let errorMessage = errorIcon.nextElementSibling;

  input.classList.remove('input-error');
  errorIcon.style.display = 'none';
  errorMessage.style.display = 'none';
}

function showPasswordError(input, message) {
  showError(input);
  let errorMessage = input.nextElementSibling.nextElementSibling;
  errorMessage.textContent = message;
}

function isPasswordValid(password) {
  return /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
}
