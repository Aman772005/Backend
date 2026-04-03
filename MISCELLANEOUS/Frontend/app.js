// function Personmaker(name , age){
//     const person ={
//         name : name , 
//         age : age , 
//         talk() {
//             console.log(`Hi,my name is ${this.name}`)
//         }
//     };
//     return person;
// }
//    let p1 = Personmaker("aman",20);
//    let p2 = Personmaker("sachin",22);


// Constructors - does not return anything & start with capital 
// function Person(name , age){
//     this.name = name ;
//     this.age = age ;
//     console.log(this);
//     }

//     Person.prototype.talk = function(){
//         console.log(`hii , my name is ${this.name}`);
//     };

//     let p1 = new Person("aman",20);
//     let p2 = new Person("sachin",22);


// class Person{
//     constructor(name,age){
//         this.name = name ;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi , my name is ${this.name}`);
//     }
// }

// let p1 = new Person("aman",20);
// let p2 = new Person("sachin",22);

// class Person{
//     constructor(name,age){
//         console.log("person class constructor")
//         this.name = name ;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi , my name is ${this.name}`);
//     }
// }

// class Student extends Person{
//     constructor(name,age,marks){
//         console.log("student class constructor")
//         super(name,age); //parent class constructor is being called
//         this.marks = marks ;
//     }
// }

// class Teacher extends person{
//     constructor(name,age,subject){
//         console.log("Teacher class constructor")
//         super(name,age); //parent class constructor is being called
//         this.subject = subject
//     }
// }

class mammals {
    constructor(name){
        this.name = name ;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("eating")
    }
}

class dog extends mammals{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woof..")
    }
}

class cat extends mammals{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow..")
    }
}



