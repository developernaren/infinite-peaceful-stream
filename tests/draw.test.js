const draw = require('../src/draw');
const testData = require('./mocks/test_data')

testData.forEach(function (testData) {
    let [width, height, padding]  = testData.input.split(',')
    test('test ' + width + ' x ' + height + ' with padding ' + padding + ' renders correctly', () => {
        let result = draw(width, height, padding)
        JSON.parse(testData.pixelArrayJson).forEach(function (value, key) {
            expect(result[key]).toEqual(value)
        })
    })
});

test('test throws error when width is less than 20', () => {
    expect(() =>{
        draw(16, 20, 4)
    }).toThrowError(new Error('Width should be even and more than 20'))
})

test('test throws error when width is not even', () => {
    expect(() =>{
        draw(55, 20, 4)
    }).toThrowError(new Error('Width should be even and more than 20'))
})


test('test throws error when height is less than 20', () => {
    expect(() =>{
        draw(30,16, 4)
    }).toThrowError(new Error('Height should be even and more than 20'))
})

test('test throws error when height is not even', () => {
    expect(() =>{
        draw(24, 77, 4)
    }).toThrowError(new Error('Height should be even and more than 20'))
})

test('test throws error when padding is less than 4', () => {
    expect(() =>{
        draw(30,60, 3)
    }).toThrowError(new Error('Padding should be even and more than 4'))
})

test('test throws error when padding is not even', () => {
    expect(() =>{
        draw(24, 24, 7)
    }).toThrowError(new Error('Padding should be even and more than 4'))
})
