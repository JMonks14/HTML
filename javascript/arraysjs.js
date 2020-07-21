let quote = ["I","am", "your", "friend"]
console.log(quote[2])
quote.pop()
quote.push("father")
console.log(quote)
quote.unshift("Luke")
console.log(quote)
let erroneousWord = "Luke"
let LukeIsHere = quote.find(lukeIsHere)
console.log(lukeIsHere)
let lukeIsAt;
if (LukeIsHere) {
    lukeIsAt = quote.findIndex(lukeIsHere)
    quote[lukeIsAt] = "No"
}
let output = "";
for (let x = 0; x < quote.length; x++) {
    output = output + quote[x]
    if (x == 0) {
        output = output + ", "
    } else if (x < quote.length - 1) {
        output = output + " "
    } else {
        output = output + "!"
    } 
}
console.log(output)
function lukeIsHere(input) {
    if (input=="Luke") {
        return true
    }
}