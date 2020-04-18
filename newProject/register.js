var users = [];
var user = {};
user["username"] = "isaiah";
user["password"] = "password";
users.push(user)

console.log(users)


function goToMain(){
    if(document.getElementById("username").value.length === 0){
        alert("fill in the box")
    }else{
    //   window.location.href = "main.html" 
      users.push(document.getElementById("username").value, document.getElementById("password").value)
      console.log(users)
    }
   
}