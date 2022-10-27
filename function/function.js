function sum(x,y){
    return x + y;
}
// big arrow function
const sum1 = (x,y) => x + y

console.log(sum(10,5))
console.log(sum1(100,50))

const iHave = 50;
if(iHave >= 50){
    console.log("I am rich")
}else if ( iHave < 50 && iHave >=50){
    console.log("Not so rich")
}else{
    console.log("I am poor")
}
// ternary
iHave >= 50?console.log("I am rich"):console.log("I am poor")
const arr = ["php","reac","js"]
for(let i = 0;i < 5; i++){
    console.log(i)
}
// map
arr.map((value,index) => {
    console.log(index, value)
})

// import and export
import { sayMyName } from "./function1.js"
sayMyName("Naimur")
import { setMyId } from "./function1.js"
setMyId("22101075")