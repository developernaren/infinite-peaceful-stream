const draw = require('./draw')

const cases = [
    [20, 40, 6],
    [60, 60, 10],
    [80, 20, 16],
    [80, 100, 20],
]

cases.forEach(data => {
    let [width, height, padding] = data
    result = draw(width, height, padding)
    result.forEach(pixels => console.log(pixels.map(pixel => {
        switch (pixel) {
            case 2:
                return '|'
            case 1:
                return '-'
            case 0:
                return ' '
        }
    }).join('')))
})
