var backgroundImage
var whiteDiamondImage, whiteDiamond1, whiteDiamond2, whiteDiamond3, whiteDiamond4, whiteDiamond5, whiteDiamond6
var blackDiamondImage, blackDiamond1, blackDiamond2, blackDiamond3, blackDiamond4, blackDiamond5, blackDiamond6
var moonBlockImage, moonBlock
var redButton, yellowButton, greenButton

function preload() {
  backgroundImage = loadImage("assets/background.png")
  whiteDiamondImage = loadImage("assets/White Diamond.png")
  blackDiamondImage = loadImage("assets/Black Diamond.png")
  moonBlockImage = loadImage("assets/Moon Block.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight)
  redButton = createSprite(10000, 100000000000)


  spawnDiamond()
  spawnBlocks()
}
  


function draw() {
  background("red")

  
drawSprites()
}

function spawnBlocks(){
  moonBlock1 = createSprite(25, 175)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13 

  moonBlock2 = createSprite(75, 175)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13

  moonBlock3 = createSprite(125, 175)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13

  moonBlock4 = createSprite(175, 175)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.13

  moonBlock5 = createSprite(225, 175)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.13

  moonBlock6 = createSprite(275, 175)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.13

  moonBlock7 = createSprite(325, 175)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.13

  moonBlock8 = createSprite(375, 175)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.13

  moonBlock9 = createSprite(425, 175)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13

  moonBlock10 = createSprite(475, 175)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13

  

  moonBlock1 = createSprite(width - 25, 175)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13 

  moonBlock2 = createSprite(width - 75, 175)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13

  moonBlock3 = createSprite(width - 125, 175)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13

  moonBlock4 = createSprite(width - 175, 175)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.13

  moonBlock5 = createSprite(width - 225, 175)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.13

  moonBlock6 = createSprite(width - 275, 175)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.13

  moonBlock7 = createSprite(width - 325, 175)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.13

  moonBlock8 = createSprite(width - 375, 175)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.13

  moonBlock9 = createSprite(width - 425, 175)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13

  moonBlock10 = createSprite(width - 475, 175)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13

// DONE!!!!!

  moonBlock1 = createSprite(250, 350)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13

  moonBlock2 = createSprite(310, 350)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13

  moonBlock3 = createSprite(370, 350)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13

  moonBlock4 = createSprite(410, 365)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.08

  moonBlock5 = createSprite(440, 365)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.08

  moonBlock6 = createSprite(470, 365)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.08

  moonBlock7 = createSprite(500, 365)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.08

  moonBlock8 = createSprite(530, 365)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.08

  moonBlock9 = createSprite(550, 350)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13
  
  moonBlock10 = createSprite(610, 350)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13

  moonBlock11 = createSprite(670, 350)
  moonBlock11.addImage("moon", moonBlockImage)
  moonBlock11.scale = 0.13



  moonBlock1 = createSprite(width - 250, 350)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13

  moonBlock2 = createSprite(width - 310, 350)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13

  moonBlock3 = createSprite(width - 370, 350)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13

  moonBlock4 = createSprite(width - 410, 365)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.08

  moonBlock5 = createSprite(width - 440, 365)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.08

  moonBlock6 = createSprite(width - 470, 365)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.08

  moonBlock7 = createSprite(width - 500, 365)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.08

  moonBlock8 = createSprite(width - 530, 365)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.08

  moonBlock9 = createSprite(width - 550, 350)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13
  
  moonBlock10 = createSprite(width - 610, 350)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13

  moonBlock11 = createSprite(width - 670, 350)
  moonBlock11.addImage("moon", moonBlockImage)
  moonBlock11.scale = 0.13

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  moonBlock1 = createSprite(50, 500)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13




}



function spawnDiamond(){
  whiteDiamond1 = createSprite(420, 90)
  whiteDiamond1.addImage("white", whiteDiamondImage)
  whiteDiamond1.scale = 0.05

  whiteDiamond2 = createSprite(width - 750, 265)
  whiteDiamond2.addImage("white", whiteDiamondImage)
  whiteDiamond2.scale = 0.05

  whiteDiamond3 = createSprite(width- 100, 315)
  whiteDiamond3.addImage("white", whiteDiamondImage)
  whiteDiamond3.scale = 0.05

  whiteDiamond4 = createSprite(600, 465)
  whiteDiamond4.addImage("white", whiteDiamondImage)
  whiteDiamond4.scale = 0.05

  whiteDiamond5 = createSprite(width - 50, 665)
  whiteDiamond5.addImage("white", whiteDiamondImage)
  whiteDiamond5.scale = 0.05

  whiteDiamond6 = createSprite(100, height - 90)
  whiteDiamond6.addImage("white", whiteDiamondImage)
  whiteDiamond6.scale = 0.05


  blackDiamond1 = createSprite(width - 420, 90)
  blackDiamond1.addImage("black", blackDiamondImage)
  blackDiamond1.scale = 0.05

  blackDiamond2 = createSprite(750, 265)
  blackDiamond2.addImage("black", blackDiamondImage)
  blackDiamond2.scale = 0.05

  blackDiamond3 = createSprite(100, 315)
  blackDiamond3.addImage("black", blackDiamondImage)
  blackDiamond3.scale = 0.05

  blackDiamond4 = createSprite(width - 600, 465)
  blackDiamond4.addImage("black", blackDiamondImage)
  blackDiamond4.scale = 0.05

  blackDiamond5 = createSprite(50, 565)
  blackDiamond5.addImage("black", blackDiamondImage)
  blackDiamond5.scale = 0.05

  blackDiamond6 = createSprite(width - 510, 765)
  blackDiamond6.addImage("black", blackDiamondImage)
  blackDiamond6.scale = 0.05
}