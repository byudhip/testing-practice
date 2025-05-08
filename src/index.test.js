const {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
} = require('./index.js');

test('Capitalize first letter, jakarta should be returned as Jakarta', () => {
  expect(capitalize('jakarta')).toBe('Jakarta');
});

test('Reverse string argument, Maelle should be returned as elleaM', () => {
  expect(reverseString('Maelle')).toBe('elleaM');
});

const calc = new Calculator();

describe('Solve math functions', () => {
  test('Adds 2 + 3 to equal 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });
  test('Subtracts 3 - 2 to equal 1', () => {
    expect(calc.subtract(3, 2)).toBe(1);
  });
  test('Divide 6 / 2 to equal 3', () => {
    expect(calc.divide(6, 2)).toBe(3);
  });
  test('Multiply 2 * 3 to equal 6', () => {
    expect(calc.multiply(2, 3)).toBe(6);
  });
});

test('Encrypt Bandung using Caesar Cipher should return Edqgxqj', () => {
  expect(caesarCipher('Bandung', 3)).toBe('Edqgxqj');
});
