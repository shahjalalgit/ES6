const str = "korim"
console.log(str)
// str = 153    // it's not worked because str is constant variable, if it is var or let variable then it will work
console.log(str)
array = [1,5,8,9]
let sum = 0
for (let i = 0; i < array.length; i++) {
     sum = sum + array[i];
}
console.log(sum)

//print(i) // it's not worked because i is let variable

sum = 0
for (var j = 0; j < array.length; j++) {
    sum = sum + array[j];
}
console.log(j)
console.log(sum)