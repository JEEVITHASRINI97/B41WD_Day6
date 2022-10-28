//write a class to calculate the uber price.
  //creating a class name as uber class
  class Uber{
    //set the values
  constructor(distance,waitingPeriod,rate,vehicletype){
      this.distance= distance;
      this.waitingPeriod=waitingPeriod;
      this.rate=rate;
      this.vehicletype=vehicletype;
  }//get the valuess
setDistance(dist){
      this.distance=dist;
  }
getRideDetails(){
      return(`The distance of the ride is ${this.distance} with waiting period of 
      ${this.waitingPeriod} the vehicle type is inova with AC ${this.vehicletype} and rate of ${this.rate}`)
  }
getRate(){
      let totalRate = (this.distance *this.vehicletype* this.rate)+ (this.waitingPeriod * 5)
      return totalRate;
  }
}//creating a instance class
let customer1= new Uber(100,0,15,5)
console.log(customer1.getRate());
customer1.setDistance(100);
console.log(customer1.getRate());
console.log(customer1.getRideDetails());
/**output:7500
7500
The distance of the ride is 100 with waiting period of 
      0 the vehicle type is inova with AC 5 and rate of 15 */