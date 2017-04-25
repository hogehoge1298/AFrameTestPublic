class Vector3
{
    constructor(vec){
        if(typeof vec.x == "undefined") { this._x = 0; }else{ this._x = vec.x }
        if(typeof vec.y == "undefined") { this._y = 0; }else{ this._y = vec.y }
        if(typeof vec.z == "undefined") { this._z = 0; }else{ this._z = vec.z }
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    get z(){
        return this._z;
    }

    set x(x){
        this._x = x;
    }

    set y(y){
        this._y = y;
    }

    set z(z){
        this._z = z;
    }
}
class Transform {
    constructor(p, r, s){
        //this._position = position;
        this._position = new Vector3({x: p.x, y: p.y, z: p.z});
        this._rotation = new Vector3({x: r.x, y: r.y, z: r.z});
        this._scale = new Vector3({x: s.x, y: s.y, z: s.z});
        //this._owner = o;

        //this._position._x = position._x;
        //this._position._y = position._y;
        //this._position._z = position._z;

        //this._rotation = rotation;
        //this._scale = scale;
        //this._owner = owner;
        //this._owner.SetElementAttribute('position', {x: this._position.x, y: this._position.y, z: this._position.z});
        //this._owner.SetElementAttribute('rotation', {x: this._rotation.x, y: this._rotation.y, z: this._rotation.z});
        //this._owner.SetElementAttribute('scale', {x: this._scale.x, y: this._scale.y, z: this._scale.z});   

    }

    get PositionAttrName()
    {
        return {x: this._position.x, y: this._position.y, z: this._position.z};
    }

    get RotationAttrName()
    {
        return {x: this._rotation.x, y: this._rotation.y, z: this._rotation.z};
    }

    get ScaleAttrName()
    {
        return {x: this._scale.x, y: this._scale.y, z: this._scale.z};
    }

    /*set Position(position)
    {
        this._position = new Vector3(position.x, position.y, position.z);
        this.owner.SetElementAttribute('position', {x: this.position.x, y: this.position.y, z: this.position.z});
    }*/

    /*set Rotation(rotation)
    {
        this._rotation = new Vector3(rotation.x, rotation.y, rotation.z);
    }

    set Scale(scale)
    {
        this._scale = new Vector3(scale.x, scale.y, scale.z);
    }*/

    /*get Position()
    {
        return this._position;
    }*/

    get Forward(){
        var radian = this._rotation.y * (Math.PI / 180);
        var momentX = Math.sin(radian) * 0.1;
        var momentZ = Math.cos(radian) * 0.1;

        return new Vector3({x:momentX, y:0, z:momentZ});
    }
}

class Actor{
    constructor(scene){
        //位置情報の初期化
        var pos = new Vector3({x: 0, y: 0, z: -5});
        var rot = new Vector3({x:0, y:0, z:0});
        var scale = new Vector3({x:1, y:1, z:1});
        this.transform = new Transform(pos, rot, scale);
        this.element = document.createElement('a-entity');

        console.log(this);
        
        this.SetElementAttribute('position', this.transform.PositionAttrName);
        this.SetElementAttribute('rotation', this.transform.RotationAttrName);
        this.SetElementAttribute('scale', this.transform.ScaleAttrName); 

        console.log(this.transform.Forward);  

        this.SetElementAttribute("id", "test")
        scene.appendChild(this.element);
    }

    set Element(ele){
        this.element = ele;
    }

    SetElementAttribute(attrName, attrValue){
        this.element.setAttribute(attrName, attrValue);
    }

    Update(){
        //this.SetElementAttribute('position', {x: this.transform.Position.x, y: this.transform.Position.y, z: this.transform.Position.z});
        //console.log(this.element.getAttribute('position'));
        this.Move();
    }

    Move(){
        this.transform._rotation.y = this.transform._rotation.y + 5;
        if(this.transform._rotation.y >= 360){
            this.transform._rotation.y = 0;
        }
        var dir = this.transform.Forward;
        this.transform._position.x = this.transform._position.x + dir.x * 10;
        this.transform._position.z = this.transform._position.z + dir.z * 10;
        console.log(this.transform._position);
        this.SetElementAttribute('position', this.transform.PositionAttrName);
        this.SetElementAttribute('rotation', this.transform.RotationAttrName);
    }

    get Transform(){
        return this.transform;
    }

    get Element(){
        return this.element;
    }

    get position(){
        return this.element.getAttribute("position")
    }
}