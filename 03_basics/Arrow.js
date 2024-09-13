const user = {
    username: "Ajju",
    price: 999,
  
    welcomeMessage: function() {
      console.log(`${this.username}, welcome to the website`);
    }
  }
  
  user.welcomeMessage();
  console.log(this)
  

  // this always works in object not in function 

  const chai = ()=>{
    let username = "ajuu"
    console.log(this)
  }

  const addtwo = (num1,num2)=>{
    return num1+num2
  }
  console.log(addtwo(2,4))
  const addTwo=(num1,num2) =>(num1+num2)
  console.log(addTwo(3,8))
  