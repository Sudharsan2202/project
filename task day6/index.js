//Write a “person” class to hold all the details.
class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }
  
  // Create instances of the Person class
  const person1 = new Person('sudharsan', 25, 'salem');
  const person2 = new Person('sudhan', 30, 'salem');
  
  // Display details of person1
  console.log('Person-1 Details:');
  person1.displayDetails();
  
  // Display details of person2
  console.log('\nPerson-2 Details:');
  person2.displayDetails();

  console.log("*******************************")

  //write a class to calculate the Uber price.


  class UberPriceCalculator {

    static BASE_FARE = 2.0;
    
    static PER_MILE_RATE = 1.5;
    
    static PER_MINUTE_RATE = 0.5;
    
    constructor(distance, duration) {
    
    this.distance = distance;
    
    this.duration = duration;
    
    }
    
    calculateFare() {
    
    const distanceFare = this.distance * UberPriceCalculator.PER_MILE_RATE;
    
    const timeFare = this.duration * UberPriceCalculator.PER_MINUTE_RATE;
    
    const totalFare = UberPriceCalculator.BASE_FARE + distanceFare + timeFare;
    
    return totalFare;
    
    }
    
    getDistance() {
    
    return this.distance;
    
    }
    
    setDistance(distance) {
    
    this.distance = distance;
    
    }
    
    getDuration() {
    
    return this.duration;
    
    }
    
    setDuration(duration) {
    
    this.duration = duration;
    
    }
    
    toString() {
    
    return `UberPriceCalculator[distance=${this.distance.toFixed(4)} miles, duration=${this.duration} minutes]`;
    
    }
    
    }
    
    const calculator = new UberPriceCalculator(10.5, 15);
    
    console.log(calculator.toString());
    
    const fare = calculator.calculateFare();
    
    console.log(`Total Fare: $${fare.toFixed(4)}`);


  