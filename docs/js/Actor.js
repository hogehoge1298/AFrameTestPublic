class Vector3
{
    constructor(x, y, z){
        if(typeof x == "undefined") { this.x = 0; }
        if(typeof y == "undefined") { this.y = 0; }
        if(typeof z == "undefined") { this.z = 0; }
    }
}
class Transform{
    constructor(vector3){
        this.position = new Vector3(vector3.x, vector3.y, vector3.z);
    }
}

class Actor{
    constructor(scene){
        //位置情報の初期化
        var vec = new Vector3(0, 0, 0);
        this.transform = new Transform(vec);
        this.element = document.createElement('a-entity');
        scene.appendChild(this.element);
    }

    SetElement(ele){
        this.element = ele;
    }

    SetAttribute(attrName, attrValue){
        this.element.setAttribute(attrName, attrValue);
    }

    GetTransform(){
        return this.transform;
    }

    GetElement(){
        return this.element;
    }
}