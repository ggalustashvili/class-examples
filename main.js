//PARENT Class
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    // static method cant acces this.age (helper)
    static hello(){
        return "i am static"
    }
    describe(){
        console.log(`i am ${this.name} and i am ${this.age} old`)
        console.log(Person.hello())
    }
}
//CHILD Class (acces to person variables methods etc)
class Programmer extends Person{
    constructor(name,age,experience){
        super(name,age);
        this.experience = experience;
    }
    static hello(){
        //can access parent class using super.static
        return super.hello()+" hello";   
    }
    code(){
        console.log(`${this.name} is coding for ${this.experience}`)
        console.log(Programmer.hello()); 
      
    }

    //Polimorfism(reassign)
    describe(){
        console.log(`polimorf example by ${this.name}`);
    }
    
}

let person1=new Person("jeff",45);
let programmer1=new Programmer("Don",56,12);
person1.describe();
//AFTER polimorf 
programmer1.describe();
programmer1.code();

