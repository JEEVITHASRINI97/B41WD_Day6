
  //2.Circle

 class Circle{ //creatinf a Circle class
    constructor(radius,color){ //constructor
        this.radius=radius;
        this.color=color;
    }
    getRadius(){ //to get the radius
        return this.radius;
    }
    setRadius(radius){ //to set the value of radius
        this.radius=radius;
    }
    getColor(){ //to get the color
        return this.color;
    }
    setColor(color){ //to set the value of color
        this.color=color;
    }
    toString(){ // to print the radius and color in below format
        console.log(`Circle[Radius=${this.radius}, Color=${this.color}]`);
    }
    getArea(){ //returns the area of circle
        return 3.142*Math.pow(this.radius,2);
    }
    getCircumference(){ //returns the circumference of circle
        return 2*3.142*this.radius;
    }
}

let c1=new Circle(2,'blue'); // creating a object for Circle class 
console.log(`Area: ${c1.getArea()}`); //printing the area for c1 object
c1.toString(); // printing the radius and circle in a specific format

//--------------------------------*****************************-------------------------
//output:
/* Area: 12.568
Circle[Radius=2, Color=blue] */

