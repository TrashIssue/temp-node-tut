const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', { 
    highWaterMark: 70000,
    encoding: 'utf8',
})

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 63510 })
// const stream = createReadStream('../content/big.txt', { encoding:'utf8'})

stream.on('data', (result) => {
    console.log(result)
})
stream.on('error',(err) => console.log(err))