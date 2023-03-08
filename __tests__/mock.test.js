const mocker = require('../mock')

test('Mock Function', () => { 
    const mocker = jest.fn((name)=> `Hello ${name}`);
    expect(mocker("driss")).toBe("Hello driss");
    expect(mocker("anas")).toBe("Hello anas");
    expect(mocker("ali")).toBe("Hello ali");
    // expect(mocker).toHaveBeeCalled();
 })