const imageEle = document.getElementById("imageEle")

const generateNew = document.getElementById("generateNew")

generateNew.onclick = function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    imageEle.src = `./images/dice-${randomNumber}.png`
}


// Player one
/**
 * roll one : 2
 * roll two: 6
 * roll three: 6 , total = 14
 * skip
 */


// Player Two
/**
 * roll one : 4
 * roll two : 5
 * roll three : 6 , total = 15
 * skip - give turn back to player one
 * 
 * turn two
 * roll one: 6
 * roll two: 5
 * roll three: 6, total = 17, + prev 15 = 32
 * roll four: 1, 16
 */







