 // Syntax  function variable(){

//    }

 function myname(){
    console.log("A")
    console.log("j")
    console.log("j")
    console.log("u")

 }
//  myname()

function sum (num1,num2){
    console.log(num1+num2)
}
sum(5,8)

function loginusermsg(username){
    return `${username} just logged in`
}
// console.log(loginusermsg("ajju"))


function calculateprice(...num1){
   return num1
}
console.log(calculateprice(200,300,400))

const user = {
    username : "ajju",
    price : 500
}