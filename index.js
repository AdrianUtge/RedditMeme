const jimp = require('jimp')
const algebra = require('algebra.js')

jimp.read("./assets/assets.jpeg", (err, image) => {
    if (err) throw err;
    image.resize(256, 256)

    image.greyscale().write("./assets/image.png");
});