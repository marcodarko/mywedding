const Directions = require("./Directions")
// @ponicode
describe("selectDirections", () => {
    let inst

    beforeEach(() => {
        inst = new Directions.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.selectDirections()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("selectAccomodations", () => {
    let inst

    beforeEach(() => {
        inst = new Directions.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.selectAccomodations()
        }
    
        expect(callFunction).not.toThrow()
    })
})
