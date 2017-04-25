window.onload = function(){
    init();
}
var FPS = 30;
var scene;  //シーンオブジェクト
var actor;  //アクターオブジェクト
//初期化
function init(){
    //シーンオブジェクトの取得
    scene = document.querySelector('a-scene');
    //入力イベントの実装
    document.addEventListener("keydown", keyInputDown);
    document.addEventListener("keyup", keyInputUp);

    //アクターオブジェクトの生成
    actor = new Actor(scene);
    actor.SetElementAttribute('geometry',{primitive: 'box', height: 3, width: 1});
    //actor.Transform.Position = new Vector3(10, 0, 0);

    //更新処理の開始
    update();
}

//更新
function update(){
    actor.Update();
    setTimeout(update, 1000 / FPS);
}

//a-boxを生成する
function generateBox(){
    var el = document.createElement('a-entity');
    var randX = Math.floor( Math.random() * 11 ) ;
    var randY = Math.floor( Math.random() * 11 ) ;

    el.setAttribute('geometry',{
        primitive: 'box',
        height: 3,
        width: 1,
    });

    el.setAttribute('position',randX + " " + randY + " -5" );

    scene.appendChild(el);
}

//入力イベント
//押されたときのイベント
function keyInputDown(e)
{
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 68:

        break;
      case 65:

        break;
      case 87:

        break;
      case 83:

        break;
      default:

    }
    //generateBox();
}

//離したときのイベント
function keyInputUp(e)
{
  console.log("KeyUp : " + e.keyCode);
}
