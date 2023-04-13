const validateValue = require('./validateValue');
//const j = require('jest');

test('Валидация значения', ()=>{
  expect(validateValue(50)).toBe(true);

})
