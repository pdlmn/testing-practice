function caesarCipher(str, key) {
  let regex = /[A-Za-z]/;
  let message = '';

  for (let i = 0; i < str.length; i++) {
    char = str.substr(i, 1);
    if (regex.test(char)) {
      let ciphered = str.charCodeAt(i);
      ciphered = applyKey(ciphered, key);
      message += String.fromCharCode(ciphered);
    } else {
      message += char;
    }
  }
  return message
};

function applyKey(ciphered, key) {
  absKey = Math.abs(key);
  for (let i = 0; i < absKey; i++) {
    if (key > 0) {
      ciphered += 1;
    } else if (key < 0) {
      ciphered -= 1;
    }
    if (ciphered === 91 || ciphered === 123) {
      ciphered -= 26;
    } else if (ciphered === 64 || ciphered === 96) {
      ciphered += 26; 
    }
  }
  return ciphered
}

module.exports = caesarCipher
