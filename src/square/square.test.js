const square = require('./square');
//const jest = require
//const {jest} = require('jest');


describe('square', ()=>{
  let mockValue;
  beforeEach(()=>{});
  beforeAll(()=>{});

  test('Корректное значения', ()=>{
    expect(square(2)).toBe(4);
  });
  test('Меньше 5', ()=>{
    expect(square(2)).toBeLessThan(5);
  });
  test('Больше 3', ()=>{
    expect(square(2)).toBeGreaterThan(3);
  });
  test('Не пустое', ()=>{
    expect(square(2)).not.toBeUndefined();
  });
  test('Pow 2 call test', ()=>{
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    square(2);
    expect(spyMathPow).toBeCalledTimes(2);
  });

  test('Pow 1 call test', ()=>{
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  afterEach(()=>{
    jest.clearAllMocks();
  });
  afterAll(()=>{});
});
