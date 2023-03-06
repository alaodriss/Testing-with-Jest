const data = require('../all');


test('Check my data contains 6 elements 1st Methode', () => {
    expect(data.length).toBe(6);
  });


test('Check my data contains 6 elements  2st Methode', () => {
    expect(data).toHaveLength(6);
  });


test('Check my data contains 6 elements  2st Methode', () => {
    expect("drisss").toHaveLength(6);
  });


test('Check my data contains Number 6 ', () => {
    expect(data).toContain(6);
  });


test('Check my data not contains Number 7 ', () => {
    expect(data).not.toContain(7);
  });

test('Check my data not contains Number 0 ', () => {
    for(let i = 0; i<data.length; i++){
        expect(data[i]).not.toBe(0);
    }
  });

  test('Check my data not  only Number 1St Methode', () => {
    for(let i = 0; i<data.length; i++){
        expect(isNaN(data[i])).toBe(false);
    }
  });

  test('Check my data not  only Number 2St Methode', () => {
    for(let i = 0; i<data.length; i++){
        expect(isNaN(data[i])).toBeFalsy();
    }
  });


  test('Check my data not  only Number 3St Methode', () => {
    for(let i = 0; i<data.length; i++){
        expect(isNaN(data[i])).not.toBeTruthy();
    }
  });



  test('Check if arry first element is larger than 1', () => {
    expect(data[0]).toBeGreaterThanOrEqual(1);
  });


  test('Check if arry first element is Less than 6', () => {
    expect(data[0]).toBeLessThan(5);
  });