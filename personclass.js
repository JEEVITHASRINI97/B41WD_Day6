//Write a “person” class to hold all the details.
//creating a class name as person
class Person{
    //setting the values
constructor(name,age,email,location,designation){
    this.name=name;
    this.age=age;
    this.email=email;
    this.location=location;
    this.designation=designation;
}
// creating Instance method to accessing the data
getData(){
    let personData=`
    Name:${this.name}
    Age:${this.age}
    Email:${this.email}
    Location:${this.location}
    Designation:${this.designation}
    `
    //printing the PersonData
console.log(personData);
}
}
// create of instance object
let person1=new Person("jeevitha","24","jeevitha@gmail.com","chennai","software Engineer");
let person2=new Person("niveka","26","niveka@gmail.com","bangalore","Quality Analyst");
let person3=new Person("ramya","30","ramya@gmail.com","mumbai","network engineer");
let person4=new Person("puniya","28","puniya@gmail.com","mangalore","Program Analyst");
//getting the person data
person1.getData();
person2.getData();
person3.getData();
person4.getData();
/*output:
 Name:jeevitha
    Age:24
    Email:jeevitha@gmail.com
    Location:chennai
    Designation:software Engineer
    

    Name:niveka
    Age:26
    Email:niveka@gmail.com
    Location:bangalore
    Designation:Quality Analyst
    

    Name:ramya
    Age:30
    Email:ramya@gmail.com
    Location:mumbai
    Designation:network engineer
    

    Name:puniya
    Age:28
    Email:puniya@gmail.com
    Location:mangalore
    Designation:Program Analyst
    */

