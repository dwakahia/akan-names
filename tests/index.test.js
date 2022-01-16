const nameTest = require('../index.js')


describe('name generation testing', () => {
    test('date as 2021-01-06 and gender as male expects name as kwame', () => {
        let result = nameTest.getName('2022-01-07', 'male')
        expect(result.toString()).toBe('kofi')
    })
})