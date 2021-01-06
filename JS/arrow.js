// let add = function(a,b){
//     return a+b;
// }

// let add = (a,b) =>  a+b;
// console.log(add(2,3))

//used in the same way as function exp

// let v = 19

// let result = (v > 20) ?
//             () => console.log("Greater then 20"):
//             () => console.log("Less then 20")

// result();

let person = {
    firstName:"John",
    depts:["dev", "test", "dep"],

    display(){
        this.depts.forEach(
            dept => console.log(this.firstName+ " "+ dept)
        );
    }
};

person.display();