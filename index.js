//create two object using function cunstructor

function Student(Name,Class,Gender){
    this.Name = Name;
    this.Class = Class;
    this.Gender = Gender;
}
let student1 = new Student("Mohina",5,"Female");
console.log(student1);
let student2 = new Student("John",8,"Male");
console.log(student2);

//----------------------------------------------------------------------
let arr = [1,2,3,4,5]
function add(){
    console.log("Add");
}

let Obj1 ={
    fname: "Riya",
    lname: "Gupta",
    showDetails: function(){
        console.log(this.fname + "" + this.lname);
    }
}
//Obj1(showDetails);
let Obj2 = {
    fname: "Ashish"
}
Obj2__proto__ = Obj1;//this basically allows us to import all the properties and methods of obj1 and obj2
console.log(Obj2);
console.log(Obj2.lname);

//Function using call,apply and Bind

let person1 = {
    fname: "Riya",
    lname: "Raj",
}
const showDetails = function(gender,age){
    console.log(this.fname + " " + this.lname + " " + gender + " " + age);
}
//person1.showDetails()
let person2 = {
    fname: "Kiara",
    lname: "Bajpai"
}
let person3 = {
    fname: "Ruhi",
    lname: "Sharma"
}

//call method takes arguments individually
showDetails.call(person1,"Male",21);
showDetails.call(person2,"Male",21);
showDetails.call(person3,"Female",22);

//apply methods takes arguments in the form of Array.
showDetails.apply(person1,["Male",21]);
showDetails.apply(person2,["Male",21]);
showDetails.apply(person3,["Female",22]);

//****bind never takes arguments it only takes object name and gets a function in return which is store in some variable. Now this variable is a function which is called  with arguments****
//The arguments are also passed individually only and not in form of array.
let result1 = showDetails.bind(person1);
console.log(result1);
result1("Male",21)
let result2 = showDetails.bind(person2);
console.log(result2);
result2("Male",21)
let result3 = showDetails.bind(person3);
console.log(result3);
result3("Male",22)