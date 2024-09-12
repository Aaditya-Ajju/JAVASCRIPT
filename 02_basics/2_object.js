//declare object using constructor

const user = new Object()
user.id = "123"
user.name = "ajju"
const user1 = {
    userid : 234,
     name :"Ajju",
     email:"user@google.com",
     deatils:{
        fullname :"Aaditya raj",

     }
}

// cobining objects

const obj1={
    name :"Ajju",
    Age:20,

}
const obj2={
    name:"klu",
    Age:21,
}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}

console.log(obj3);
console.log(Object.entries(obj3))
