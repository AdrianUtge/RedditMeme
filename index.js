const jimp = require('jimp')
const algebra = require('algebra.js')
var substrWord = require('substr-word');
var fs = require('fs');
var Canvas = require('canvas');
const {
    stringify
} = require('querystring');

let jkl = fs.readFileSync('./assets/image.png')
let hjk = jkl.toString('hex')
let uio = 0x9A
let mko = ""
mko = hjk;
let asd = mko.substring(7, mko.length - 16)

function hexToString(str) {
    const buf = new Buffer.alloc(1000, str, 'hex');
    return buf.toString('utf8');
}

function hexa(num, w, h) {
    console.log('_________________---------------______________')
    console.log(num.length / h)
    console.log(w, h)
    for (let j = 0; j < h; j++) {
        for (let i = 0; i < w; i += 2) {
            let w = i - 2
            if (w >= 0) {

                y = num.substring(w, i)
            }



        }
    }
    return y;

}




// this function will invert the fraction and output his result 
function FracInvFinish(CNum, CDenom) {
    let a = new algebra.Fraction(CDenom, CNum)
    let nom = a.numer
    let denom = a.denom
    let finish = nom / denom
    return finish;
}



function Matrixx(w, h, data) {
    /*   var k = 'row';
      var i = 0;
      for (i; i < h + 1; i++) {
          eval('var ' + k + i + '= ' + i + ';');
          console.log(i)


          for (let j = 0; j != h; j++) {

              let f = data
              let n = f.slice(0, h)
              console.log(n)

          }

      } */



    let myImage = data



    // Create a Canvas element
    const canvas = new Canvas.createCanvas('canvas');

    // Size the canvas to the element
    canvas.width = w;
    canvas.height = h;
    // Draw image onto the canvas
    var ctx = canvas.getContext('2d');
    ctx.drawImage(myImage, 0, 0);

    // Finally, get the image data
    // ('data' is an array of RGBA pixel values for each pixel)
    var data = ctx.getImageData(0, 0, w, h);





}




// image resizing 
jimp.read("./assets/assets.jpeg", (err, image) => {
    if (err) throw err;


    // this statement will check the size of the image and make the factor for resizing as an equation 
    if (image.bitmap.width > 100) {

        let w = image.bitmap.width;
        let x = new algebra.Expression("x")
        var x2 = algebra.parse("40");
        x = x.multiply(w)
        let eq = new algebra.Equation(x2, x)
        let answer = eq.solveFor("x")
        let finish = FracInvFinish(answer.numer, answer.denom)

        image.resize(image.bitmap.width / finish, image.bitmap.height / finish)

        let a = (image.bitmap.data.buffer)

    }


    image.greyscale().write("./assets/image.png");
    hexa(asd, image.bitmap.width, image.bitmap.height)
});