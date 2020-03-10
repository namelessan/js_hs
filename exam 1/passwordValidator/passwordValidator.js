function isIn(char, collection) {
  for (e of collection) {
    if (char === e) {
      return true;
    }
  }
  return false;
}

function passwordValidator(password) {
  let upperCase = false;
  let lowerCase = false;
  let number = false;
  let special = false;
  let enoughLength = false;

  if (password.length >= 6 && password.length <= 12) {
    enoughLength = true;
  }

  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i].toUpperCase()) {
      upperCase = true;
    }
    if (password[i] === password[i].toLowerCase()) {
      lowerCase = true;
    }
    if (password[i] == parseInt(password[i])) {
      number = true;
    }
    if (isIn(password[i], ['$', '#', '@'])) {
      special = true;
    }
  }

  return upperCase && lowerCase && number && special && enoughLength;
}

module.exports = passwordValidator;
