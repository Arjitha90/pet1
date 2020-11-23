//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  dogImg1 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog = createSprite(200,200)
  dog.addImage(dogImg)
  
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.add(dogImg1)
}
  drawSprites();
  //add styles here
text("foodStock",foodStock,100,200)
textSize(10)
fill(black)
stroke(2)
}
function readSyock(data){
  foodS = data.val()
}

function writeStroke(x){
  database.ref('/').update({
    Food:x
  })
}

