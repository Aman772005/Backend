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
function Person(name , age){
    this.name = name ;
    this.age = age ;
    console.log(this);
    }

    Person.prototype.talk = function(){
        console.log(`hii , my name is ${this.name}`);
    };

    let p1 = new Person("aman",20);
    let p2 = new Person("sachin",22);
