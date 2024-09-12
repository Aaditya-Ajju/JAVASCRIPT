// to declare obkects by two types 

// singleton (constructor)
// object literals

const myObj = {
    name : "Ajju",
    age: 19,
    location:"klu",
    email:"ajju@klu.com",
    lastLogin :["monday","Saturday"]
}
// console.log(myObj.email)
// console.table(myObj)


myObj.greetings = function(){
    console.log(`hello ${this.name}`)
}
console.log(myObj.greetings())