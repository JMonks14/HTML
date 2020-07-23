const reduce = (reducer, initial, arr) =>{
    //shared stuff
    let acc = initial;

    for(let i=0; i<arr.length; i++) {
        //unique stuff in reducer() call
        acc = reducer(acc,arr[i]);

        // more shared stuff
    }
    return acc;
}
const filter = (fn,arr) => reduce((acc,curr) => fn(curr) ? acc.concat([curr]) : acc, [], arr);

let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc,curr)=>{ acc + curr.grade}, 0) / grades.length);

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

let highestGrade = maxGrade(grades);
console.log(highestGrade);
let lowestGrade = minGrade(grades)
console.log(lowestGrade);
let highestBoy = maxGrade(getBoys(grades))
console.log(highestBoy);
let highestGirl = maxGrade(getGirls(grades))
console.log(highestGirl);
let lowestBoy = minGrade(getBoys(grades))
console.log(lowestBoy);
let lowestGirl = minGrade(getGirls(grades))
console.log(lowestGirl);