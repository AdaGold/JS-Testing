const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act, Assert
    expect(isPangram(text)).toBeTruthy();
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = "abcdefghijklmnopqrstuvwxyz";

    // Act, Assert
    expect(isPangram(text)).toBeTruthy();

  });

  test("missing character 'x'", () => {
    // Arrange
    const text = "abcdefghijklmnopqrstuvwyz";

    // Act, Assert
    expect(isPangram(text)).toBeFalsy();

  });

  test('empty sentence', () => {
    // Arrange
    const text = "";

    // Act, Assert
    expect(isPangram(text)).toBeFalsy();
  
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrrange
    const text = 'the quick_brown fox jumps over the lazy_dog';

    // Act, Assert
    expect(isPangram(text)).toBeTruthy();

  });

  test('pangram with numbers', () => {
    // Arrrange
    const text = 'the 1 quick brown fox jumps 2 over the lazy dog';

    // Act, Assert
    expect(isPangram(text)).toBeTruthy();
  
  });

  // Write your own test case
});
