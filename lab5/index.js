
const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const dobInput = document.getElementById('dob');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const websiteInput = document.getElementById('website');
const nameError = document.getElementById('nameError');
const dobError = document.getElementById('dobError');
const ageError = document.getElementById('ageError');
const emailError = document.getElementById('emailError');
const websiteError = document.getElementById('websiteError');
const labelAge = document.getElementById('label-age');
const labelEmail = document.getElementById('label-email');
const labelWebsite = document.getElementById('label-website');

// function validateForm() {
// let isValid = true;

// if (nameInput.value.trim() === '') {
//  nameError.textContent = 'Please enter your name.';
//  isValid = false;
// } else {
//  nameError.textContent = '';
// }

// if (dobInput.value.trim() === '') {
//  dobError.textContent = 'Please enter your date of birth.';
//  isValid = false;
// } else {
//  dobError.textContent = '';
// }

// if (ageInput.value < 18 || ageInput.value > 100) {
//  ageError.textContent = 'Please enter a valid age between 18 and 100.';
//  isValid = false;
// } else {
//  ageError.textContent = '';
// }

// if (emailInput.value.trim() === '') {
//  emailError.textContent = 'Please enter your email address.';
//  isValid = false;
// } else {
//  emailError.textContent = '';
// }

// if (websiteInput.value.trim() !== '' && !isValidUrl(websiteInput.value)) {
//  websiteError.textContent = 'Please enter a valid website URL.';
//  isValid = false;
// } else {
//  websiteError.textContent = '';
// }

// return isValid;
// }

// function isValidUrl(string) {
// try {
//  new URL(string);
// } catch (_) {
//  return false;
// }
// return true;
// }

function calculateAge(dob) {
const birthDate = new Date(dob);
const differenceInMS = Date.now() - birthDate.getTime();
const ageDate = new Date(differenceInMS);
return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function showHideFields() {
const age = calculateAge(dobInput.value);

if (age < 18) {
labelAge.style.display = "none";
labelEmail.style.display = "none";
labelWebsite.style.display = "none";
 ageInput.style.display = 'none';
 emailInput.style.display = 'none';
 websiteInput.style.display = 'none';
} else if (age >= 18 && age <= 25) {
    labelAge.style.display = "block";
labelEmail.style.display = "block";
labelWebsite.style.display = "none";
 ageInput.style.display = 'block';
 emailInput.style.display = 'block';
 websiteInput.style.display = 'none';
} else {
 ageInput.style.display = 'block';
 emailInput.style.display = 'block';
 websiteInput.style.display = 'block';
}
}

dobInput.addEventListener('change', showHideFields);
