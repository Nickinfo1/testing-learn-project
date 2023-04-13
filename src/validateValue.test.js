const validateValue = require('./validateValue');
//const j = require('jest');


describe('validateValue', ()=>{
 test('Корректное значения', ()=>{
    expect(validateValue(50)).toBe(true);
  });
  test('Меньше корректного значения', ()=>{
    expect(validateValue(-1)).toBe(false);
  });
  test('Больше корректного значения', ()=>{
    expect(validateValue(110)).toBe(false);
  });
})
