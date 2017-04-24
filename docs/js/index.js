window.onload = function(){
    console.log("hello, world!");
    init();
}

var scene;  //シーンオブジェクト
//初期化
function init(){
    //シーンオブジェクトの取得
    scene = document.querySelector('a-scene');
    //入力イベントの実装
    document.addEventListener("keydown", keyInput);

    //更新処理の開始
    //update();
}

//更新
function update(){
    setTimeout(update, 1000);
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

    scene.appendChild(el);
}

//入力イベント
function keyInput(e)
{
    console.log(e.keyCode);
    generateBox();
}