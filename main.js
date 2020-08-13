//PARENT Class

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }

    // static method cant acces this.age and etc also cant be called like person.hello" for example and console loging it gives undefnied
    
    static hello(){
        return "i am static"
    }
    
    //METHOD 
    
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
        console.log(`${this.name} is coding for ${this.experience} year`)
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

//STATIC Testing

console.log(programmer1.hello);
programmer1.hello();


