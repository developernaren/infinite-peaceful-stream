function getPixelShape(col, row, padding) {
    if (col % padding === 0 && col <= row) {
        return 2
    }

    if (row % padding === 0 && row <= col) {
        return 1;
    }

    return 0;
}

function draw(width, height, padding) {

    if(width < 20 || width % 2 !== 0) {
        throw new Error('Width should be even and more than 20')
    }

    if(height < 20 || height % 2 !== 0) {
        throw new Error('Height should be even and more than 20')
    }

    if(padding < 4 || padding % 2 !== 0) {
        throw new Error('Padding should be even and more than 4')
    }

    let result = []
    let row
    let col
    let actualPadding = 1 + padding / 2

    for (let i = 0; i < height; i++) {
        result[i] = []
        row = i
        if (row >= height / 2) {
            row = height - row - 1;
        }
        for (let j = 0; j < width; j++) {
            col = j
            if (col >= width / 2) {
                col = width - col - 1;
            }
            result[i][j] = getPixelShape(col, row, actualPadding)
        }
    }

    return result
}

module.exports = draw;
