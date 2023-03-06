const filterName = require('../form')

describe("validate the input field", ()=>{
    
    test('check if name is empty', ()=> {
        expect(filterName()).toBe("Unknow")
    })

    test('check for spaces (start + end)', ()=> {
        expect(filterName(" driss ")).toBe("driss")
    })

    test('check if name length > 12', ()=> {
        expect(filterName("driss_alaoui_test")).toBe("driss_alaoui")
    })

    test('check if name not starts with Underscore', ()=> {
        expect(filterName("_Driss")).toBe("Driss")
    })
})