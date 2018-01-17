interface UserInterface {
    age: number;
}

class User implements UserInterface {
   //cannot access from outside this class
   private name: string;
   
   //can only access in this class or class that inherits 
   protected email: string;

   //can be acccessed from outside the class
   public age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log("User Created: "+ this.name)
    }
}

let john = new User('john', 'john@gmail.com', 34);

class Member extends User {
    id: number;
    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age);
    }
}