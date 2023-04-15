const delay = require('./delay');

describe('delay', ()=>{
  beforeEach(()=>{});
  beforeAll(()=>{});

  test('Корректное значения', async ()=>{
    let sum = await delay(()=>5+5, 5000);
    console.log("Hello");
    expect(sum).toBe(10);
  }, 6000);

}) 
