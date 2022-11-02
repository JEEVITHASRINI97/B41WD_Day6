/*a) Write a constructor for the class Movie, which takes aString representing the title of the movie, 
a String representing the studio,and a String representing the rating as its arguments, and sets the
respective class properties to these values.*/

//creating a class name as Movie
class Movie{
    //set the values
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
/**-------------------------------- **/ 


/*b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
 */
//creating a class name as Movie
class Movie{
        //setting the values
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating="PG";//Crating a default value
    }
}
/**------------------------------------------------------- */
/**
 c) Write a method getPG, which takes an array of base type Movie as its argument, and returns 
 a new array of only those movies in the input array with a rating of "PG". You may assume the input array 
 is full of Movie instances. The returned array need not be full.
*/
//creating a class name as Movie
class Movie{
    //setting the values
constructor(title,studio,rating)
{
    this.title=title;
    this.studio=studio;
    this.rating="PG";//Crating a default value
}
//instance method
getPG(Movie1,Movie2,Movie3){
    let Movie=`
        title=${this.title}
        studio=${this.studio}
        rating=${this.rating}`
    console.log(Movie)
}
}
//let create a instance object for a Movie
let Movie1=new Movie(" Royale"," Productions");
let Movie2=new Movie("vikram","sun Productions");
let Movie3=new Movie("3","lika Productions");
//printing the data
Movie1.getPG();
Movie2.getPG();
Movie3.getPG();
/*output
title= Royale
studio= Productions
rating=PG
title=vikram
studio=sun production
rating=PG
title=3
studio=lika Productions
rating=PG   */ 



/**------------------------------------------------------- */

/* d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio 
“Eon Productions”, and the rating “PG­13”*/

//let create a instance object for a Movie
let Movie4=new Movie("Casino Royale","Eon Productions","PG13")