import Validator from './main'
test('Testing naming', () => {
   let validator = new Validator
   let name = validator.validateUsername('Megapihar777')
   let test = false
        expect(name).toBe(test)
    
})