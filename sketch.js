var ball,paddle,ballImg,paddleImg;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballImg = loadImage("ball.png");
  paddleImg = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  
  ball = createSprite(20,200,10,10);
  ball.addImage("b1",ballImg);
  
  ball.velocityX = 3;
  
  paddle = createSprite(350,200,10,10);
  paddle.addImage("p1",paddleImg);
  

}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(paddle,randomVelocity);
  
  paddle.collide(edges);
  
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y - 20;
    
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y + 20;
  }
  drawSprites();
  
}

function randomVelocity()
{
  
  ball.velocityY = random(-8,8);
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

