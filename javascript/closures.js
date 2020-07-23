function mul(x) {
    return function(y) {
        return x*y
    }
}
let r=mul(5)
console.log(r);
let s= r(4)
console.log(s);

function Person() {
    let name = "Dave"
    return {
    setName:  function (newName) {
        name=newName;
    },
     getName: function () {
        return name;
    }
}
}
let person1=Person()
console.log(person1.getName());
person1.setName("Steve")
console.log(person1.getName());

function counter() {
    let count=0
    return {
        decrement() {
            count--
        },
        increment() {
            count++
        },
        getCount() {
            return count
        },
        addNum: function (num) {
            count+=num
        }
    }
}

let count1=counter()
count1.increment()
count1.increment()
count1.decrement()
count1.addNum(5)
console.log(count1.getCount());