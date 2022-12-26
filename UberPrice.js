

//write a class to calculate the uber price.

class Uber{ //class Uber
    constructor(type,numberOfSeats,location,destinationAddress,travelDistance){ // constructor and setting values
        this.type=type;
        this.numberOfSeats=numberOfSeats;
        this.location=location,
        this.destinationAddress=destinationAddress,
        this.travelDistance=travelDistance  
        if(type=='uberPool'){
            this.sharing=true;
        }else{
            this.sharing=false;
        }
    }
    getPrice(){ //method for calculating price
        this.costPerKM='18'
        //conditon checking if sharing is true or not
        if(this.sharing==true){
            this.basePrice=(this.costPerKM-3)*this.travelDistance*this.numberOfSeats;
        }else{
            this.basePrice=(this.costPerKM)*this.travelDistance*this.numberOfSeats;
        }
        //switch case to calcuate the price for different ride types
        switch(this.type){
            case 'uberPool':
            case 'uberX':
                return `
                Ride: ${this.location} to ${this.destinationAddress}
                Ride Type: ${this.type}
                Ride Distance; ${this.travelDistance}
                Number of seats booked: ${this.numberOfSeats}
                Total Price is Rs.${this.basePrice*1}`;  
            case 'uberXL':
                return `
                Ride: ${this.location} to ${this.destinationAddress}
                Ride Type: ${this.type}
                Ride Distance; ${this.travelDistance}
                Number of seats booked: ${this.numberOfSeats}
                Total Price is Rs.${this.basePrice*2}`; 
            case 'uberSUV':
                return `
                Ride: ${this.location} to ${this.destinationAddress}
                Ride Type: ${this.type}
                Ride Distance; ${this.travelDistance}
                Number of seats booked: ${this.numberOfSeats}
                Total Price is Rs.${this.basePrice*2}`; 
            default:
                return 'Invalid Type';
        }
        return 0;
   }
}
let ride1=new Uber('uberXL',2,'yelhanka','majestic',19); //creating an instance
console.log(ride1.getPrice()); // printing the price details

//----------------------------********************************-----------
//output:
/* Ride: yelhanka to majestic
Ride Type: uberXL
Ride Distance; 19
Number of seats booked: 2
Total Price is Rs.1368 */  
