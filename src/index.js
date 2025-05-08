import './styles.css';

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const reverseString = (str) => {
  return str.split('').reverse().join('');
};

export class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }
}

export const caesarCipher = (str, shift) => {
  let cipher = '';
  const isUpper = /[A-Z]/;
  const isLower = /[a-z]/;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === ' ') {
      cipher += ' ';
    } else if (isUpper.test(char)) {
      cipher += String.fromCharCode(
        ((str.charCodeAt(i) + shift - 65) % 26) + 65
      );
    } else if (isLower.test(char)) {
      cipher += String.fromCharCode(
        ((str.charCodeAt(i) + shift - 97) % 26) + 97
      );
    } else {
      cipher += char;
    }
  }
  return cipher;
};
