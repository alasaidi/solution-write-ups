const sum = (...number) => {
  let total = 0;
  for (let i = 0; i < number.length; i++) {
    total += number[0];
  }
  return total;
};

describe('calculator', () => {
  describe('sum', () => {
    it('should return zero if there is no input', () => {
      expect(sum()).toBe(0);
    });

    it('should return 2 if the input is 2', () => {
      expect(sum(2)).toBe(2);
    });

    it('should return 4 if the input is 2,2', () => {
      expect(sum(2, 2)).toBe(4);
    });
  });
});
