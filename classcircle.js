//Convert the UML diagram to Typescript class. - use number for double
//creating a class name as circle

class Circle{
//set the values
    constructor(radius,color,area){
        this.radius=radius;
        this.color=color;
        this.area=area;
    }//get the cd values
    getDeatials(){
        return(`${this.radius}`)
    }
    getDeatials(){
        return(`${this.color}`)
    }

getDeatials(){
    return(`${this.area}`)
}
}
//creating a instance object
let Circle1 = new Circle(1.0,"red","200sqft");
console.log(Circle1);