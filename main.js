/*---------------------------new topic--------------------------------------*/
// json type object

// const toDos = [
//     {
//         "id": 1,
//         "text": "Take the trash",
//         "status":true
//     },
//     {
//         "id": 2,
//         "text": "Meeting with boss",
//         "status":true
//     },
//     {
//         "id": 1,
//         "text": "Doctor appt",
//         "status":false
//     }
// ]

// const statusCheck = toDos.filter(function(todo){
//     return todo.status === true;
// }).map(function(todo){
//     console.log( todo.text);
// })


/*---------------------------new topic--------------------------------------*/

// console.log(statusCheck)

// function

// const getText = (function(todo){
//     console.log(todo[1].text)
// })
// getText(toDos)

// function getId(todo){
//     console.log(todo[2].id)
// }
// getId(toDos)

/*---------------------------new topic--------------------------------------*/
// function constructor

function Person(firstName,lastName,dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
    this.address = {
        "street":"1 infinite loop",
        "state":"California",
        "house":14
    }
    this.getDob = (function(){
        console.log(this.dob.getFullYear())
    })
}


const person1 = new Person("Naimur","Rahman",'7/2/2003')
// person1.dob = 
person1.getDob()