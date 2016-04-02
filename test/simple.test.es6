import simple from '../src/simple.es6'

describe('simple', function () {
    it('should square the input', function () {
        expect(simple(2)).toBe(4)
    })
})
