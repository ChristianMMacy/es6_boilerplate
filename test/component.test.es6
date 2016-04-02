import component from 'component'

describe('component', function () {
    it('should have a foo method', () => {
      expect(typeof component.foo).toBe('function')
    })
    it('should return the string "foo" when calling the foo method', () => {
      expect(component.foo()).toEqual('foo')
    })
})
