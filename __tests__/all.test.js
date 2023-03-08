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


  test('Check for undefind', () => {
    let a; 
    expect(a).toBeUndefined();
  });

  test('Check for Substring Inside String by RegExp', () => {
    let MyString = "I love Reactjs"; 
    expect(MyString).toMatch(/Reactjs/);
  });


  test('Check for Property Age', () => {
    let MyObject = {
      name: "Driss",
      age: 35,
    }; 
    expect(MyObject).toHaveProperty("age");
  });



  test('Check for Property Age Value is 35', () => {
    let MyObject2 = {
      name: "Driss",
      age: 35,
    }; 
    expect(MyObject2).toHaveProperty("age", 35);
  });

  /////// is larger than other number
  expect.extend(
    {
      toBeLargerThan(received, target){
        const pass = received > target

        if(pass){
          return {
            message: () => `Expected${received} To be Laeger Than ${target}`,
            pass: true
          }
          } else {
            return {
                 message: () => `Erroe Expected${received} To be Laeger Than ${target}`,
                 pass: false
            }
        }
      }
    }
  )
  test("check if number il larger than other", ()=>{
    expect(10).toBeLargerThan(6);

  })


  /////// check if number is between entre this and this

  expect.extend(
    {
      toBeBetween(received, start, end){
        const pass = received > start &&   received < end

        if(pass){
          return {
            message: () => `Expected${received} To be to Be Between Than ${start} and ${end}`,
            pass: true
          }
          } else {
            return {
                 message: () => `Expected${received} To be to Be Between Than ${start} and ${end}`,
                 pass: false
            }
        }
      }
    }
  )
  test("check if number is between entre ca et ca", ()=>{
    expect(10).toBeBetween(5,15);
  })

// expect.anything() = > anything but undefiend + null

  test("Expect Anything", () => {
    expect("Osama").toEqual(expect.anything());
    expect([1, 2, 3]).toEqual(expect.anything())
  })

  // expect.anything(Constructor) 

  test("Expect Any Constructor", () => {
    expect(10).toEqual(expect.any(Number))
    expect('driss').toEqual(expect.any(String))
  })


  // expect.arrayContaining(array) 

  test("Expect Array to be found in the main array", () => {
   const mYArray = [1, 2, 3, 4,5]
    expect(mYArray).toEqual(expect.arrayContaining([1,2]))
  })