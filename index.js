const jimp = require('jimp')
const algebra = require('algebra.js')





// this function will invert the fraction and output his result 
function FracInvFinish(CNum, CDenom) {
    let a = new algebra.Fraction(CDenom, CNum)
    let nom = a.numer
    let denom = a.denom
    let finish = nom / denom
    return finish;
}




jimp.read("./assets/assets.jpeg", (err, image) => {
    if (err) throw err;


    // this statement will check the size of the image and make the factor for resizing as an equation 
    if (image.bitmap.width > 100) {

        let w = image.bitmap.width;
        let x = new algebra.Expression("x")
        var x2 = algebra.parse("100");
        x = x.multiply(w)
        let eq = new algebra.Equation(x2, x)
        let answer = eq.solveFor("x")
        let finish = FracInvFinish(answer.numer, answer.denom)

        image.resize(image.bitmap.width / finish, image.bitmap.height / finish)
    }

    image.greyscale().write("./assets/image.png");
});