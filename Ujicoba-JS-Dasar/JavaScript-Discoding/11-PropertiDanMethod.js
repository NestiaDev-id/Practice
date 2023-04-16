class User {
    constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
   
    get getfullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    set setfirstname(first) {
      const firstName = first.split(' ');
      this.firstName = firstName;
    }
    set setfullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
   
  const user = new User('John', 'Doe');
  console.log(user);
  user.setfirstname='marta';
  console.log(user.getfullName);
   
  user.setfullName = 'Fulan Fulanah';
  console.log(user);
  console.log(user.getfullName);
   
  /* Output:
  User { firstName: 'John', lastName: 'Doe' }
  John Doe
  User { firstName: 'Fulan', lastName: 'Fulanah' }
  Fulan Fulanah
  */

  // ! simbol # dapat menetapkan hak akses private pada properti dan method objek
  class Car {
    #chassisNumber = null;
   
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.#chassisNumber = this.#generateChassisNumber();
   }
   
    get chassisNumber() {
      return this.#chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
   
    // Methods
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn(direction) {
      console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }
   
    #generateChassisNumber() {
      return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }