var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(45, 100,90,10);
var wall2 = createSprite(150, 90,10,180);
var wall3 = createSprite(90, 240,10,150);
var wall4 = createSprite(45, 170,90,10);
var wall5 = createSprite(220,240,150,10);
var wall6 = createSprite(150, 320,10,160);
var wall7 = createSprite(220, 180,10,120);
var wall8 = createSprite(220, 30,10,60);
var wall9 = createSprite(280, 55,125,10);
var wall10 = createSprite(350, 125,100,10);
var wall11 = createSprite(350, 260,10,175);
var wall12 = createSprite(290, 343,125,10);
var ball = createSprite(25, 135,20,20);
var end = createSprite(380, 380, 40,40);

function draw() {
background("black");
createEdgeSprites();
ball.bounceOff(edges);
if (keyDown(UP_ARROW)) {
  ball.velocityX = 0;
  ball.velocityY = -5;
  
}

if (keyDown(DOWN_ARROW)) {
  ball.velocityX = 0;
  ball.velocityY = 5;
  
}

if (keyDown(RIGHT_ARROW)) {
  ball.velocityX = 5;
  ball.velocityY = 0;
  
}

if (keyDown(LEFT_ARROW)) {
  ball.velocityX = -5;
  ball.velocityY = 0;
  
}

  if (ball.isTouching(wall1)||ball.isTouching(wall2)||ball.isTouching(wall3)||ball.isTouching(wall4)||ball.isTouching(wall5)||ball.isTouching(wall6)||ball.isTouching(wall7)||ball.isTouching(wall8)||ball.isTouching(wall9)||ball.isTouching(wall10)||ball.isTouching(wall11)||ball.isTouching(wall12)){
ball.x = 25;
ball.y = 135;

        
  }
















drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
