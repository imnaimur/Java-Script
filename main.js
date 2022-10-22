
let name = "Naimur";
console.log(name);
const num = 78;
console.log(num);
const arr = [1,2,3,4,5];
console.log(arr);
console.log(...arr); 
const [first,second,third] = arr;
console.log(second);
arr.pop();
console.log(arr);
arr.push(8);
console.log(arr);
// const arr2 =(...arr,10);
const sprofile = {
    name:"Rafiad",
    id:1010,
    room:821
}
const sprofile2 = {
    ...sprofile,
    dorm:"Nikunjo",
}
console.log(sprofile)
console.log(sprofile2)