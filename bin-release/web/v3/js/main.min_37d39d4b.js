var __reflect=this&&this.__reflect||function(t,e,o){t.__class__=e,o?o.push(e):o=[e],t.__types__=t.__types__?o.concat(t.__types__):o},__extends=this&&this.__extends||function(t,e){function o(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);o.prototype=e.prototype,t.prototype=new o},GameObject=function(){function t(){this.compornent=null,this.shapes=[],this.destroyFlag=!1,t.objects.push(this)}return t.init=function(e){t.objects=[],t.display=e},t.prototype.destroy=function(){this.destroyFlag=!0},t.prototype.addDestroyMethod=function(){},t.prototype["delete"]=function(){var e=this;this.addDestroyMethod(),this.shapes&&this.compornent&&(this.shapes.forEach(function(t){e.compornent.removeChild(t),t=null}),this.shapes=[]),Util.remove(t.display,this.compornent);var o=t.objects.filter(function(t){return t.destroyFlag!==!0});t.objects=o},t.allDestroy=function(){t.objects=t.objects.filter(function(t){return t.destroy(),t["delete"](),!1})},t.update=function(){t.objects.forEach(function(t){return t.updateContent()}),t.objects=t.objects.filter(function(t){return t.destroyFlag&&t["delete"](),!t.destroyFlag}),t.transit&&(t.allDestroy(),t.transit(),t.transit=null)},t.objects=[],t}();__reflect(GameObject.prototype,"GameObject");var GameCompornent=function(t){function e(e,o,i,n){var r=t.call(this)||this;return r.setCompornent(e,o,i,n),r}return __extends(e,t),e.prototype.setCompornent=function(t,e,o,i){this.compornent=new egret.DisplayObjectContainer,this.compornent.x=t,this.compornent.y=e,this.compornent.width=o,this.compornent.height=i,GameStage.display.addChild(this.compornent)},e.prototype["delete"]=function(){var t=this;this.addDestroyMethod(),this.shapes&&this.compornent&&(this.shapes.forEach(function(e){t.compornent.removeChild(e),e=null}),this.shapes=[]),this.compornent&&Util.remove(GameStage.display,this.compornent);var e=GameObject.objects.filter(function(t){return t.destroyFlag!==!0});GameObject.objects=e},e}(GameObject);__reflect(GameCompornent.prototype,"GameCompornent");var UICompornent=function(t){function e(e,o,i,n){var r=t.call(this)||this;return r.setCompornent(e,o,i,n),r}return __extends(e,t),e.prototype.setCompornent=function(t,e,o,i){this.compornent=new egret.DisplayObjectContainer,this.compornent.x=t,this.compornent.y=e,this.compornent.width=o,this.compornent.height=i,UILayer.display.addChild(this.compornent)},e.prototype["delete"]=function(){var t=this;this.addDestroyMethod(),this.shapes&&this.compornent&&(this.shapes.forEach(function(e){t.compornent.removeChild(e),e=null}),this.shapes=[]),this.compornent&&Util.remove(UILayer.display,this.compornent);var e=GameObject.objects.filter(function(t){return t.destroyFlag!==!0});GameObject.objects=e},e.compornents=[],e}(GameObject);__reflect(UICompornent.prototype,"UICompornent");var GraphicShape;!function(t){t[t.NONE=Math.pow(2,0)]="NONE",t[t.CIECLE=Math.pow(2,1)]="CIECLE",t[t.BOX=Math.pow(2,2)]="BOX",t[t.WALL=Math.pow(2,3)]="WALL",t[t.COIN=Math.pow(2,4)]="COIN",t[t.NEEDLE=Math.pow(2,5)]="NEEDLE"}(GraphicShape||(GraphicShape={}));var PhysicsObject=function(t){function e(e,o,i,n){var r=t.call(this,e,o,i,n)||this;return r.body=null,r.bodyShape=null,r.setCompornent(e,o,i,n),r}return __extends(e,t),e.prepare=function(t){e.pixelPerMeter=t,e.meterPerPixel=1/t,e.width=e.pixelToMeter(Util.width),e.height=e.pixelToMeter(Util.height),e.world=new p2.World,e.world.gravity=[0,0]},e.prototype.updateContent=function(){this.compornent,this.fixedUpdate()},e.prototype.updateDrowShape=function(){this.compornent.x=this.body.position[0],this.compornent.y=this.body.position[1]},e.prototype.updateBodyAngle=function(){this.compornent.rotation=this.body.angle},e.prototype.addDestroyMethod=function(){this.body&&(e.world.removeBody(this.body),this.body=null),this.addDestroyPhysicsMethod()},e.prototype.addDestroyPhysicsMethod=function(){},e.step=function(t){return GameOver.gameOverFlag?!0:(e.world.step(1/60,t/1e3,10),!1)},e.pixelToMeter=function(t){return t*e.meterPerPixel},e.meterToPixel=function(t){return t*e.pixelPerMeter},e.prototype.m2p=function(t){return e.meterToPixel(t)},e.prototype.p2m=function(t){return e.pixelToMeter(t)},Object.defineProperty(e.prototype,"px",{get:function(){return e.meterToPixel(this.mx)},set:function(t){this.mx=e.pixelToMeter(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"py",{get:function(){return e.meterToPixel(this.my)},set:function(t){this.my=e.pixelToMeter(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"mx",{get:function(){return this.body.position[0]},set:function(t){this.body.position[0]=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"my",{get:function(){return this.body.position[1]},set:function(t){this.body.position[1]=t},enumerable:!0,configurable:!0}),e.world=null,e.deltaScale=1,e}(GameCompornent);__reflect(PhysicsObject.prototype,"PhysicsObject");var CreateGameScene=function(t){function e(){var o=t.call(this)||this;return e.createPosY=Game.height,e.createCoinPosY=Game.height,e.rightWall=[],e.leftWall=[],e.coin=[],e.needle=[],o.wallWidth=.1*Game.width,o.wallHeight=.98*Game.height,o.needleWidth=.065*Game.width,o.initialWall(),o}return __extends(e,t),e.prototype.initialWall=function(){new Wall(.9*Game.width,1*-Game.height,this.wallWidth,this.wallHeight),new Wall(0,1*-Game.height,this.wallWidth,this.wallHeight),new Wall(.9*Game.width,0*Game.height,this.wallWidth,1.5*Game.height),new Wall(0,0*Game.height,this.wallWidth,1.5*Game.height)},e.prototype.createWall=function(){if(e.createPosY-Player.I.compornent.y>Game.height){var t=e.createPosY-3*Game.height;e.createPosY-=Game.height,new Needle(this.wallWidth,t+Util.randomInt(.02*Game.height,.98*Game.height),this.needleWidth,this.needleWidth),new Needle(Game.width-this.wallWidth,t+Util.randomInt(.02*Game.height,.98*Game.height),this.needleWidth,this.needleWidth),new Wall(.9*Game.width,t,this.wallWidth,this.wallHeight),new Wall(0,t,this.wallWidth,this.wallHeight)}if(e.createCoinPosY-Player.I.compornent.y>.4*Game.height){var o=Util.randomInt(.12*Game.width,.86*Game.width),t=Player.I.compornent.y-1*Game.height-Util.randomInt(0,.5*Game.height);e.createCoinPosY=Player.I.compornent.y,new Coin(o,t,.06*Game.width,.06*Game.width)}},e.freshArray=function(){var t=e.rightWall.filter(function(t){return t.destroyFlag!==!0});e.rightWall=t;var o=e.leftWall.filter(function(t){return t.destroyFlag!==!0});e.leftWall=o;var i=e.coin.filter(function(t){return t.destroyFlag!==!0});e.coin=i;var n=e.needle.filter(function(t){return t.destroyFlag!==!0});e.needle=n},e.prototype.updateContent=function(){this.createWall()},e.createPosY=0,e.rightWall=[],e.leftWall=[],e.coin=[],e.createCoinPosY=0,e.needle=[],e}(GameObject);__reflect(CreateGameScene.prototype,"CreateGameScene");var Background=function(t){function e(){var o=t.call(this)||this;return o.color=ColorPallet.GREEN,e.I=o,e.createPosY=0,o.setCompornent(0,0,Game.width,Game.height),o.setShape(0,0,Game.width,Game.height,o.color),o}return __extends(e,t),e.prototype.setCompornent=function(t,e,o,i){this.compornent=new egret.DisplayObjectContainer,this.compornent.x=t,this.compornent.y=e,this.compornent.width=o,this.compornent.height=i,GameObject.display.addChild(this.compornent)},e.prototype.setShape=function(t,e,o,i,n){var r=Util.setRect(t,e,o,i,n,0,!0);this.compornent.addChild(r),this.compornent.addChild(r),this.shapes.push(r)},e.prototype.updateContent=function(){},e.I=null,e.createPosY=0,e}(GameObject);__reflect(Background.prototype,"Background");var Ground=function(t){function e(e,o,i,n,r,a){var s=t.call(this,e,o,i,r)||this;return s.setBody(e,o,i,r),s.setShape(0,0,i,n,r,a),s}return __extends(e,t),e.prototype.setShape=function(t,e,o,i,n,r){var a=Util.setLine(t,e,o,i,n,r);this.compornent.addChild(a),this.shapes.push(a)},e.prototype.setBody=function(t,e,o,i){this.body=new p2.Body({mass:1,position:[t,e],type:p2.Body.STATIC}),this.bodyShape=new p2.Plane({collisionGroup:GraphicShape.WALL,collisionMask:GraphicShape.CIECLE}),this.body.angle=Math.PI,this.body.addShape(this.bodyShape),PhysicsObject.world.addBody(this.body)},e.prototype.fixedUpdate=function(){},e}(PhysicsObject);__reflect(Ground.prototype,"Ground");var ChipType;!function(t){t[t.NONE=0]="NONE",t[t.LOAD=1]="LOAD",t[t.RUN=2]="RUN"}(ChipType||(ChipType={}));var MapType;!function(t){t[t.STRAIGHT_UP=0]="STRAIGHT_UP",t[t.STRAIGHT_RIGHT=1]="STRAIGHT_RIGHT",t[t.RIGHT_CURVE=2]="RIGHT_CURVE",t[t.RIGHT_CURVE_REVERSE=3]="RIGHT_CURVE_REVERSE"}(MapType||(MapType={}));var CourseType;!function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE"}(CourseType||(CourseType={}));var Map=function(t){function e(){var e=t.call(this)||this;return e.createMap(),e}return __extends(e,t),e.prototype.createMap=function(){var t=1;switch(t){case CourseType.ZERO:break;case CourseType.ONE:this.setMap(MapType.STRAIGHT_UP,!1,!0,!1),this.setMap(MapType.RIGHT_CURVE,!0,!0,!1),this.setMap(MapType.RIGHT_CURVE,!1,!1,!1),this.setMap(MapType.STRAIGHT_UP,!1,!1,!1),this.setMap(MapType.RIGHT_CURVE_REVERSE,!0,!1,!1),this.setMap(MapType.RIGHT_CURVE_REVERSE,!1,!0,!1),this.setMap(MapType.RIGHT_CURVE,!0,!0,!1),this.setMap(MapType.STRAIGHT_RIGHT,!1,!1,!1),this.setMap(MapType.RIGHT_CURVE_REVERSE,!1,!0,!1),this.setMap(MapType.STRAIGHT_UP,!1,!0,!1)}},e.prototype.setMap=function(t,o,i,n){for(var r=this.map(t),a=0,s=0,h=0;h<r.length;h++)for(var l=0;l<r[h].length;l++)a=o?Game.mapChipWidth*(r[h].length-1-l)+e.createLineX:Game.mapChipWidth*l+e.createLineX,s=Game.mapChipHeight*h+e.createLineY,r[h][l]===ChipType.LOAD?new Road(a,s,Game.mapChipWidth,Game.mapChipHeight):r[h][l]===ChipType.NONE||r[h][l]===ChipType.RUN&&new Run(a,s,Game.mapChipWidth,Game.mapChipHeight);this.setCreateLine(t,o,i,n)},e.prototype.map=function(t){var e=[];switch(t){case MapType.STRAIGHT_UP:e=[[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0]];break;case MapType.STRAIGHT_RIGHT:e=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];break;case MapType.RIGHT_CURVE:e=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,2,2],[0,0,1,1,1,1,2,1,1],[0,0,1,1,1,2,1,1,1],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0]];break;case MapType.RIGHT_CURVE_REVERSE:e=[[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,2,1,1,0,0],[0,0,1,1,1,2,1,1,1],[0,0,1,1,1,1,2,1,1],[0,0,1,1,1,1,1,2,2],[0,0,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]}return e},e.prototype.setCreateLine=function(t,o,i,n){switch(t){case MapType.STRAIGHT_UP:i?e.createLineY-=Game.height:e.createLineY+=Game.height;break;case MapType.STRAIGHT_RIGHT:n?e.createLineX+=Game.width:e.createLineX-=Game.width;break;case MapType.RIGHT_CURVE:o?i&&!n?e.createLineX-=Game.width:!i&&n?e.createLineY+=Game.height:console.log("toUpかtoRightが間違っています"):i&&n?e.createLineX+=Game.width:i||n?console.log("toUpかtoRightが間違っています"):e.createLineY+=Game.height;break;case MapType.RIGHT_CURVE_REVERSE:o?i&&n?e.createLineY-=Game.height:i||n?console.log("toUpかtoRightが間違っています"):e.createLineX-=Game.width:i&&!n?e.createLineY-=Game.height:!i&&n?e.createLineX+=Game.width:console.log("toUpかtoRightが間違っています")}},e.prototype.updateContent=function(){},e.createLineX=0,e.createLineY=0,e}(GameObject);__reflect(Map.prototype,"Map");var Chip=function(t){function e(e,o,i,n){return t.call(this,e,o,i,n)||this}return __extends(e,t),e.prototype.setShape=function(t,e,o,i,n){var r=Util.setRect(t,e,o,i,n,0,!0);this.compornent.addChild(r),this.shapes.push(r)},e.prototype.updateContent=function(){},e}(GameCompornent);__reflect(Chip.prototype,"Chip");var Road=function(t){function e(e,o,i,n){var r=t.call(this,e,o,i,n)||this;return r.setShape(0,0,i,n,ColorPallet.BLUE),r}return __extends(e,t),e}(Chip);__reflect(Road.prototype,"Road");var None=function(t){function e(e,o,i,n){return t.call(this,e,o,i,n)||this}return __extends(e,t),e}(Chip);__reflect(None.prototype,"None");var Run=function(t){function e(o,i,n,r){var a=t.call(this,o,i,n,r)||this;return a.number=0,a.setShape(0,0,n,r,ColorPallet.RED),e.chipNumber+=1,a.number=e.chipNumber,e.run.push(a),a}return __extends(e,t),e.prototype.setVector=function(){var t=[0,0];if(e.chipNumber>0){[this.compornent.x-e.run[this.number-1].compornent.x,this.compornent.y-e.run[this.number-1].compornent.y]}return t},e.chipNumber=0,e.run=[],e}(Chip);__reflect(Run.prototype,"Run");var Needle=function(t){function e(e,o,i,n){var r=t.call(this,e,o,i,n)||this;return r.setBody(e,o,i,n),r.setShape(0,0,i,n,ColorPallet.RED),CreateGameScene.needle.push(r),r}return __extends(e,t),e.prototype.setBody=function(t,e,o,i){this.body=new p2.Body({mass:1,position:[t,e],type:p2.Body.STATIC}),this.bodyShape=new p2.Box({width:o,height:i,fixedRotation:!0,collisionGroup:GraphicShape.NEEDLE,collisionMask:GraphicShape.CIECLE}),this.body.angle=45,this.body.addShape(this.bodyShape),PhysicsObject.world.addBody(this.body)},e.prototype.setShape=function(t,e,o,i,n){var r=Util.setRect(t,e,o,i,n,0,!0);this.compornent.addChild(r),this.shapes.push(r),this.compornent.anchorOffsetX+=o/2,this.compornent.anchorOffsetY+=i/2,this.compornent.rotation=45},e.prototype.fixedUpdate=function(){this.compornent.y>Player.I.compornent.y+2*Game.height&&this.destroy()},e}(PhysicsObject);__reflect(Needle.prototype,"Needle");var Coin=function(t){function e(e,o,i,n){var r=t.call(this,e,o,i,n)||this;return CreateGameScene.coin.push(r),r.setBody(e,o,i/2),r.setShape(0,0,i,n,ColorPallet.GREEN),r}return __extends(e,t),e.prototype.setBody=function(t,e,o){this.body=new p2.Body({mass:1,position:[t,e],type:p2.Body.STATIC}),this.bodyShape=new p2.Circle({radius:2*o,fixedRotation:!1,sensor:!0,collisionGroup:GraphicShape.COIN,collisionMask:GraphicShape.CIECLE}),this.body.addShape(this.bodyShape),PhysicsObject.world.addBody(this.body)},e.prototype.setShape=function(t,e,o,i,n){var r=Util.setEllipse(t,e,o,i,n,!0);this.compornent.addChild(r),this.shapes.push(r)},e.prototype.fixedUpdate=function(){this.updateDrowShape(),this.compornent.y>Player.I.compornent.y+.6*Game.height&&this.destroy()},e}(PhysicsObject);__reflect(Coin.prototype,"Coin");var Player=function(t){function e(o,i,n,r){var a=t.call(this,o,i,n,r)||this;return a.velocity=[0,0],a.velocityLimit=10,a.acceleration=[0,0],a.speed=2.5,e.I=a,a.ballPosX=.5*Game.width,a.ballPosY=.5*Game.height,a.setBody(o,i,n,r),a.setShape(0,0,n,r,ColorPallet.WHITE),a.acceleration[0]=Math.cos(Util.toRadian(270))*a.speed,a.acceleration[1]=Math.sin(Util.toRadian(270))*a.speed,a}return __extends(e,t),e.prototype.setShape=function(t,e,o,i,n){var r=Util.setRect(t,e,o,i,n,20,!0);this.compornent.addChild(r),this.shapes.push(r)},e.prototype.setBody=function(t,e,o,i){this.body=new p2.Body({mass:1,angle:270,position:[t,e]}),this.bodyShape=new p2.Box({width:o,height:i,fixedRotation:!0,collisionGroup:GraphicShape.BOX,collisionMask:GraphicShape.WALL}),console.log(this.body.angle),this.body.addShape(this.bodyShape),PhysicsObject.world.addBody(this.body)},e.prototype.addDestroyPhysicsMethod=function(){PhysicsObject.world.off("beginContact",this.collision)},e.prototype.collision=function(t){t.bodyA,t.shapeA,t.bodyB,t.shapeB},e.prototype.move=function(){this.acceleration[0]=Math.cos(Util.toRadian(this.body.angle))*this.speed,this.acceleration[1]=Math.sin(Util.toRadian(this.body.angle))*this.speed,this.velocity[0]>this.velocityLimit?this.velocity[0]=this.velocityLimit:this.velocity[0]+=this.acceleration[0],this.velocity[1]>this.velocityLimit?this.velocity[1]=this.velocityLimit:this.velocity[1]+=this.acceleration[1],this.body.position[0]+=this.velocity[0],this.body.position[1]+=this.velocity[1],this.velocity[0]*=.8,this.velocity[1]*=.8},e.prototype.turn=function(){UILayer.onRight?this.body.angle+=3:UILayer.onLeft&&(this.body.angle-=3),this.body.angle<0?(this.body.angle%=360,this.body.angle+=360):this.body.angle>360&&(this.body.angle%=360)},e.prototype.fixedUpdate=function(){this.move(),this.turn(),this.updateDrowShape(),this.updateBodyAngle(),Camera2D.x=this.ballPosX-this.compornent.x,Camera2D.y=this.ballPosY-this.compornent.y,Camera2D.transform(GameStage.display)},e.prototype.checkGameOver=function(){},e.prototype.getPosX=function(){return this.body.position[0]},e.prototype.setPosX=function(t){this.body.position[0]=t},e.prototype.getPosY=function(){return this.body.position[1]},e.prototype.setPosY=function(t){this.body.position[1]=t},e.prototype.getBodyAngle=function(){return this.body.angle},e.prototype.setBodyAngle=function(t){this.body.angle=t},e.prototype.getVelocity=function(){return this.velocity},e.prototype.setVelocity=function(t){this.velocity=t},e.I=null,e.chipNumber=1,e}(PhysicsObject);__reflect(Player.prototype,"Player");var TimeLimit=function(t){function e(o,i,n,r,a){var s=t.call(this,o,i,n,r)||this;return s.coinCount=0,s.time=60,s.timeText=null,s.textColor=0,e.limitTimer=new egret.Timer(e.limitInterval,0),e.limitTimer.addEventListener(egret.TimerEvent.TIMER,s.timePass,s),s.textColor=a,s.setText(),s}return __extends(e,t),e.startTimer=function(){e.limitTimer.start()},e.prototype.setText=function(){this.timeText=Util.myText(0,0,"TIME : "+this.time.toString(),100,.5,this.textColor,!0),this.compornent.addChild(this.timeText)},e.prototype.resetTimer=function(){e.limitTimer.stop(),e.limitTimer.removeEventListener(egret.TimerEvent.TIMER,this.timePass,this),e.limitTimer=new egret.Timer(e.limitInterval,0),e.limitTimer.addEventListener(egret.TimerEvent.TIMER,this.timePass,this),e.limitTimer.start()},e.prototype.timePass=function(){0==GameOver.gameOverFlag&&(this.time>0&&(this.time-=1),0==this.time&&(this.time=0,new GameOver(0,0,0,0)))},e.prototype.addDestroyMethod=function(){GameObject.display.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.timePass,this),e.limitTimer.stop(),e.limitTimer.removeEventListener(egret.TimerEvent.TIMER,this.timePass,this),this.compornent&&(this.compornent.removeChildren(),this.compornent=null),this.timeText=null},e.prototype.updateContent=function(){this.timeText.text="TIME : "+this.time.toString()},e.limitTimer=null,e.limitInterval=1e3,e}(UICompornent);__reflect(TimeLimit.prototype,"TimeLimit");var Wall=function(t){function e(e,o,i,n){var r=t.call(this,e,o,i,n)||this;return r.setShape(0,0,i,n,ColorPallet.BLUE),e<Game.width/2?CreateGameScene.leftWall.push(r):CreateGameScene.rightWall.push(r),r}return __extends(e,t),e.prototype.setShape=function(t,e,o,i,n){var r=Util.setRect(t,e,o,i,n,0,!0);this.compornent.addChild(r),this.shapes.push(r)},e.prototype.updateContent=function(){this.compornent.y>Player.I.compornent.y+2*Game.height&&this.destroy()},e}(GameCompornent);__reflect(Wall.prototype,"Wall");var Camera2D=function(){function t(){}return t.initial=function(){t.x=0,t.y=0,t.scale=1},t.transform=function(e,o){void 0===o&&(o=1),e.x=t.transX(e.x),e.y=t.transY(e.y),e.scaleX=e.scaleY=t.scale*o},t.transX=function(e){return t.x*t.scale},t.transY=function(e){return t.y*t.scale},t.x=0,t.y=0,t.scale=1,t}();__reflect(Camera2D.prototype,"Camera2D");var GameOver=function(t){function e(o,i,n,r){var a=t.call(this,o,i,n,r)||this;return a.textGameOver=null,a.textScore=null,a.textColor=ColorPallet.BLUE,e.gameOverFlag=!0,a.textGameOver=Util.myText(Game.width/2,Game.height/2-50,"GAME OVER",80,1,a.textColor,!0),a.textGameOver.anchorOffsetX=a.textGameOver.width/2,a.textGameOver.anchorOffsetY=a.textGameOver.height/2,a.compornent.addChild(a.textGameOver),a.textScore=Util.myText(Game.width/2,Game.height/2+50,"SCORE : "+Score.score,80,1,a.textColor,!0),a.textScore.anchorOffsetX=a.textScore.width/2,a.textScore.anchorOffsetY=a.textScore.height/2,a.compornent.addChild(a.textScore),UILayer.display.once(egret.TouchEvent.TOUCH_BEGIN,function(t){return a.tap(t)},a),Score.I.saveBestScore(),a}return __extends(e,t),e.prototype.addDestroyMethod=function(){this.compornent&&this.compornent.removeChildren(),this.textGameOver=null,this.textScore=null},e.prototype.updateContent=function(){},e.prototype.tap=function(t){UILayer.I.remove(),GameObject.transit=Game.init},e.gameOverFlag=!1,e}(UICompornent);__reflect(GameOver.prototype,"GameOver");var ColorPallet;!function(t){t[t.WHITE=16777215]="WHITE",t[t.RED=15821679]="RED",t[t.BLUE=8437150]="BLUE",t[t.GREEN=9034329]="GREEN",t[t.VERMILION=16353382]="VERMILION"}(ColorPallet||(ColorPallet={}));var PIXEL_PER_METER=1,Main=function(t){function e(){var e=t.call(this)||this;return e.once(egret.Event.ADDED_TO_STAGE,e.addToStage,e),e}return __extends(e,t),e.prototype.addToStage=function(){Util.init(this),CheckDate.init(),SaveData.init(),GameObject.init(this.stage),PhysicsObject.prepare(PIXEL_PER_METER),Camera2D.initial(),Game.init(),egret.startTick(this.tickLoop,this)},e.prototype.tickLoop=function(t){return PhysicsObject.step(t),GameObject.update(),!1},e}(eui.UILayer);__reflect(Main.prototype,"Main");var Game=function(){function t(){}return t.init=function(){this.width=egret.MainContext.instance.stage.stageWidth,this.height=egret.MainContext.instance.stage.stageHeight,this.mapChipWidth=this.width/9,this.mapChipHeight=this.height/16,GameOver.gameOverFlag=!1,new Background,new GameStage,new UILayer,new Map,new Map,new Player(t.width/2,t.height-250,.2*t.width,.1*t.width)},t}();__reflect(Game.prototype,"Game");var MyTween=function(){function t(){}return t.cameraScroll=function(t,e){egret.Tween.get(t).to({y:e},500,egret.Ease.quadIn).call(function(){Camera2D.y=e,egret.Tween.removeTweens(t)})},t}();__reflect(MyTween.prototype,"MyTween");var SaveData=function(){function t(){}return t.setObject=function(){t.object={gameName:t.gameName,playerID:t.playerID,gameID:t.gameID,registrationDate:CheckDate.registrationDate,lastDate:CheckDate.lastDate,bestScore:Score.bestScore}},t.save=function(){t.object.gameName=t.gameName,t.object.playerID=t.playerID,t.object.gameID=t.gameID,t.object.registrationDate=CheckDate.registrationDate,t.object.lastDate=CheckDate.lastDate,t.object.bestScore=Score.bestScore,Util.saveJSONLocalStrage(t.gameID,t.object),t.test()},t.load=function(){t.object=Util.loadJSONLocalStrage(t.gameID),t.test()},t.deleteData=function(){console.log("データを消去します"),t.object=null,CheckDate.registrationDate=null,Util.clearLocalStrage(t.gameID)},t.testUser=function(){t.deletePlayerID(),t.deleteGameID(),t.deleteData(),t.getPlayerID(),t.getGameID(),t.load(),t.save()},t.init=function(){t.getPlayerID(),t.getGameID(),t.load()},t.getPlayerID=function(){t.playerID=Util.loadStringLocalStrage("playerID"),null==t.playerID&&(console.log("playerIDがありません"),t.setPlayerID())},t.setPlayerID=function(){console.log("playerIDを新規作成"),CheckDate.deleteDate(),CheckDate.getDate(),t.playerID=CheckDate.registrationDate.toString(),Util.saveStringLocalStrage("playerID",t.playerID),console.log("playerIDを作成しました")},t.deletePlayerID=function(){console.log("playerIDを削除します"),Util.clearLocalStrage("playerID")},t.getGameID=function(){t.gameID=t.gameName+t.playerID.toString()},t.setGameID=function(){console.log("gameIDを作成します"),t.gameID=t.gameName+t.playerID.toString()},t.deleteGameID=function(){console.log("gameIDを消去します"),t.gameID=null,Util.clearLocalStrage(t.gameID)},t.test=function(){console.log(t.object)},t.object=null,t.gameName="Wall_Jump",t.playerID=null,t.gameID=null,t}();__reflect(SaveData.prototype,"SaveData");var Util=function(){function t(){}return t.init=function(t){this.height=t.stage.stageHeight,this.width=t.stage.stageWidth,this.ui=t},t.random=function(t,e){return t+Math.random()*(e-t)},t.randomInt=function(t,e){return Math.floor(t+Math.random()*(e+.999-t))},t.clamp=function(t,e,o){return e>t&&(t=e),t>o&&(t=o),t},t.color=function(t,e,o){var i=t.toFixed(0),n=e.toFixed(0),r=o.toFixed(0);i=t.toString(16),n=e.toString(16),r=o.toString(16),i=("00"+i).slice(-2),n=("00"+n).slice(-2),r=("00"+r).slice(-2);var a=parseInt("0x"+i+n+r,16);return a},t.myText=function(t,e,o,i,n,r,a){var s=new eui.Label;return s.scaleX=n,s.scaleY=n,s.bold=a,s.size=i,s.text=o,s.textColor=r,s.x=t,s.y=e,s.multiline=!0,s},t.myStrokeText=function(t,e,o,i,n,r,a,s,h){var l=new eui.Label;return l.x=t,l.y=e,l.scaleX=n,l.scaleY=n,l.textFlow=[{text:o,style:{textColor:r,size:i,fontFamily:a,strokeColor:s,stroke:h}}],l},t.saveLocalStrage=function(t,e){window.localStorage.setItem(t,e.toString())},t.loadLocalStrage=function(t,e){var o=window.localStorage.getItem(t);null==o&&(o=e.toString(),window.localStorage.setItem(t,o.toString()));var i=parseInt(o);return i},t.saveStringLocalStrage=function(t,e){window.localStorage.setItem(t,e)},t.loadStringLocalStrage=function(t){var e=window.localStorage.getItem(t),o=e;return o},t.clearLocalStrage=function(t){t&&window.localStorage.removeItem(t)},t.saveJSONLocalStrage=function(t,e){var o=JSON.stringify(e);window.localStorage.setItem(t,o)},t.loadJSONLocalStrage=function(t){var e=window.localStorage.getItem(t);null==e&&(SaveData.setObject(),e=JSON.stringify(SaveData.object),window.localStorage.setItem(t,e));var o=JSON.parse(e);return o},t.setRect=function(t,e,o,i,n,r,a,s){var h=new egret.Shape;return h.x=t,h.y=e,a?(h.graphics.beginFill(n),h.graphics.drawRoundRect(0,0,o,i,r),h.graphics.endFill()):(h.graphics.lineStyle(s,n),h.graphics.drawRoundRect(0,0,o,i,r)),h},t.setCircle=function(t,e,o,i,n,r){var a=new egret.Shape;return a.x=t,a.y=e,n?(a.graphics.beginFill(i),a.graphics.drawCircle(0,0,o),a.graphics.endFill()):(a.graphics.lineStyle(r,i),a.graphics.drawCircle(0,0,o)),a},t.setEllipse=function(t,e,o,i,n,r,a){var s=new egret.Shape;return s.x=t,s.y=e,r?(s.graphics.beginFill(n),s.graphics.drawEllipse(0,0,o,i),s.graphics.endFill()):(s.graphics.lineStyle(a,n),s.graphics.drawEllipse(0,0,o,i)),s},t.setLine=function(t,e,o,i,n,r){var a=(360-i)*Math.PI/180,s=new egret.Shape;return s.x=t,s.y=e,s.graphics.lineStyle(n,r),s.graphics.moveTo(t,e),s.graphics.lineTo(o*Math.cos(a),o*Math.sin(a)),s},t.remove=function(t,e){t&&e&&t.removeChild(e),e=null},t.toRadian=function(t){var e=t*Math.PI/180;return e%=2*Math.PI,0>e&&(e+=2*Math.PI),e},t.toDegree=function(t){var e=t/(Math.PI/180);return e%=360,0>e&&(e+=360),e},t.vector=function(t,e,o,i){var n=e*Math.PI/180,r=[];return void 0==o&&void 0==i?(r[0]=t*Math.cos(n),r[1]=t*Math.sin(n)):(r[0]=t*Math.cos(n)-o,r[1]=t*Math.sin(n)-i),r[2]=t,r},t.cross=function(t,e){var o=t[0]*e[1]-t[1]*e[0];return o},t.dot=function(t,e){var o=t[0]*e[0]+t[1]*e[1];return o},t.cos=function(e,o){var i=Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)),n=Math.sqrt(Math.pow(o[0],2)+Math.pow(o[1],2));0>i&&(i*=-1),0>n&&(n*=-1);var r=t.dot(e,o)/(i*n);return r},t.sin=function(e,o){var i=Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)),n=Math.sqrt(Math.pow(o[0],2)+Math.pow(o[1],2));0>i&&(i*=-1),0>n&&(n*=-1);var r=t.cross(e,o)/(i*n);return r},t.size=function(t){var e=Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2));return e},t}();__reflect(Util.prototype,"Util");var Button=function(t){function e(e,o,i,n,r){var a=t.call(this,e,o,i,n)||this;return a.indexText=null,a.indexTextColor=Util.color(230,230,230),a.shapeColor=Util.color(230,0,0),a.mask=null,a.maskColor=Util.color(0,0,0),a.onMask=!1,a.setCompornentStatus(e,o,i,n),a}return __extends(e,t),e.prototype.setCompornentStatus=function(t,e,o,i){this.compornent.anchorOffsetX+=o/2,this.compornent.anchorOffsetY+=i/2,this.compornent.x=t,this.compornent.y=e,this.compornent.touchEnabled=!0,this.compornent.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tap,this)},e.prototype.setShape=function(t,e,o,i,n){this.shapes[0]&&GameObject.display.removeChild(this.shapes[0]),n&&(this.shapeColor=n),this.shapes[0]=new egret.Shape,this.shapes[0].x=0,this.shapes[0].y=0,this.shapes[0].graphics.beginFill(this.shapeColor),this.shapes[0].graphics.drawRoundRect(0,0,o,i,30),this.shapes[0].graphics.endFill(),this.compornent.addChild(this.shapes[0])},e.prototype.setMask=function(t,e,o,i,n){n&&(this.maskColor=n),this.mask=new egret.Shape,this.mask.x=0,this.mask.y=0,this.mask.alpha=0,this.mask.graphics.beginFill(this.maskColor),this.mask.graphics.drawRoundRect(0,0,o,i,30),this.mask.graphics.endFill(),this.shapes.push(this.mask),this.compornent.addChild(this.mask)},e.prototype.setIndexText=function(t,e,o,i,n,r,a,s){r=80|r,a=.5|a,this.indexTextColor=s|this.indexTextColor,this.indexText=Util.myText(t,e,n,r,a,this.indexTextColor,!0),this.indexText.width=this.compornent.width/a,this.indexText.height=this.compornent.height/a,this.indexText.textAlign=egret.HorizontalAlign.CENTER,this.compornent.addChild(this.indexText)},e.prototype.addDestroyMethod=function(){this.compornent.hasEventListener&&this.compornent.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tap,this),this.indexText&&(this.compornent.removeChild(this.indexText),this.indexText=null)},e}(UICompornent);__reflect(Button.prototype,"Button");var CheckDate=function(){function t(){}return t.init=function(){t.getDate()},t.getDate=function(){!function(){var e=window.localStorage.getItem("registrationDate");(null==e||void 0==e)&&(e=(new Date).getTime().toString(),window.localStorage.setItem("registrationDate",e)),t.registrationDate=parseInt(e)}(),function(){var e=new Date;t.lastDate=e.getTime(),t.lastDate=parseInt(t.lastDate.toString())}()},t.save=function(){SaveData.object.registrationDate=t.registrationDate,SaveData.object.lastDate=t.lastDate,SaveData.save()},t.deleteDate=function(){t.registrationDate=null,t.lastDate=null,Util.clearLocalStrage("registrationDate")},t.I=null,t.registrationDate=null,t.lastDate=null,t}();__reflect(CheckDate.prototype,"CheckDate");var Description=function(t){function e(o,i,n,r,a){var s=t.call(this,o,i,n,r)||this;return s.text=null,s.textBest=null,s.textColor=0,e.I=s,s.textColor=a,Score.bestScore=SaveData.object.bestScore,s.setText(),s}return __extends(e,t),e.prototype.setText=function(){var t="タップでジャンプ\n\nジャンプ中タップで三角飛び\n\n\nコインを集めてください";this.text=Util.myText(Game.width/2,Game.height/2.4,t,80,.5,this.textColor,!0),this.text.anchorOffsetX=this.text.width/2,this.text.anchorOffsetY=this.text.height/2,this.text.textAlign=egret.HorizontalAlign.CENTER,this.compornent.addChild(this.text)},e.prototype.addDestroyMethod=function(){this.compornent&&this.compornent.removeChildren(),this.text=null},e.prototype.updateContent=function(){},e.I=null,e}(UICompornent);__reflect(Description.prototype,"Description");var GameStage=function(t){function e(){var o=t.call(this)||this;return o.setContainer(),e.index=GameObject.display.getChildIndex(e.display),o}return __extends(e,t),e.prototype.setContainer=function(){e.display=new egret.DisplayObjectContainer,GameObject.display.addChild(e.display)},e.prototype.addDestroyMethod=function(){e.display&&(e.display.removeChildren(),GameObject.display.removeChild(e.display),e.display=null)},e.prototype.updateContent=function(){},e.display=null,e}(GameObject);__reflect(GameStage.prototype,"GameStage");var Score=function(t){function e(o,i,n,r,a){var s=t.call(this,o,i,n,r)||this;return s.text=null,s.textBest=null,s.textColor=0,e.I=s,e.score=0,e.bestScore=0,s.textColor=a,e.bestScore=SaveData.object.bestScore,s.setText(),s}return __extends(e,t),e.prototype.setText=function(){this.text=Util.myText(Game.width/2*0,0,"0",60,.5,this.textColor,!0),this.text.x=(Game.width-this.text.width)/2,this.compornent.addChild(this.text),this.textBest=Util.myText(.11*Game.width,0,"BEST:"+e.bestScore.toString(),60,.5,this.textColor,!0),e.bestScore=SaveData.object.bestScore,this.textBest.text="BEST:"+e.bestScore.toString(),this.compornent.addChild(this.textBest)},e.prototype.saveBestScore=function(){e.bestScore>SaveData.object.bestScore&&(SaveData.object.bestScore=e.bestScore,SaveData.save())
},e.prototype.addDestroyMethod=function(){this.compornent&&(this.compornent.removeChildren(),this.compornent=null),this.text=null,this.textBest=null,e.score=0},e.prototype.updateContent=function(){this.text.text=e.score.toFixed(),this.text.x=(Game.width-this.text.width)/2,e.bestScore<e.score&&(e.bestScore=e.score,this.textBest.text="BEST:"+e.bestScore.toFixed())},e.addScore=function(){e.score+=1},e.I=null,e.score=0,e.bestScore=0,e}(UICompornent);__reflect(Score.prototype,"Score");var UILayer=function(){function t(){this.pushPos=[0,0],this.releasePos=[0,0],this.initialBallPos=[0,0],this.displayRotation=90,t.I=this,this.setContainer(),t.index=GameObject.display.getChildIndex(t.display),t.display.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.push,this),t.display.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.move,this),t.display.addEventListener(egret.TouchEvent.TOUCH_END,this.end,this)}return t.prototype.setContainer=function(){t.display=new eui.UILayer,GameObject.display.addChild(t.display)},t.prototype.push=function(e){t.onTouch=!0,e.stageX>Game.width/2&&!t.onLeft?this.turnRight(!0):e.stageX<Game.width/2&&!t.onRight&&this.turnRight(!1)},t.prototype.move=function(e){t.onTouch=!0},t.prototype.end=function(){t.onTouch=!1,t.onRight=!1,t.onLeft=!1},t.prototype.turnRight=function(e){e?(t.onRight=!0,t.onLeft=!1):(t.onRight=!1,t.onLeft=!0)},t.prototype.remove=function(){t.display&&(t.display.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.push,this),t.display.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.move,this),t.display.removeEventListener(egret.TouchEvent.TOUCH_END,this.end,this),t.display.removeChildren(),GameObject.display.removeChild(t.display),t.display=null)},t.prototype.testMove=function(){},t.I=null,t.display=null,t.onTouch=!1,t.onLeft=!1,t.onRight=!1,t}();__reflect(UILayer.prototype,"UILayer");