console.log("James")
console.log("Monks")
console.log("South London")
console.log("May")
let word = "aword"
// function test(){
//     var foo = 33; 
//     if(foo){
//         let foo = (foo + 60); // ReferenceError
//     }
// }
// test(); 
const rgb = [200];
const [red = 255, green, blue = 255] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`);
function sub(a,b) {
    return a-b;
}
function welcome(name, age, gender) {
    return "Hello, my name is " + name + ", I am " + age + " years old and I am a " + gender
}
powerup = (num, ind) => Math.pow(num,ind)

hypotenuse = (a,b) => Math.sqrt(a**2 + b**2)
class cat {
    constructor(name, age, favtreat) {
        this.name=name
        this.age=age
        this.favTreat=favtreat
    }

    getfavtreat() {
        return this.favTreat;
    }

}
class person {
    constructor(name,age,gender) {
        this.name=name
        this.age=age
        this.gender=gender
    }

    tellInterests(interests) {
        this.interests = interests
    }

    tellBio(Bio) {
        this.Bio=Bio
    }

    greeting() {
        return "Hello"
    }

}
