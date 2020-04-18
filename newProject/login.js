var users = [
    {
        username: "isaiah",
        password: "yuh"
    },
    {
        username: 'user',
        password: 'password'
    }

]

function getInfo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
   

    for(i = 0; i < users.length; i++){
        if(username === users[i].username && password === users[i].password){
            console.log(username + " is logged in!")
            goToMain()
            return
        }
    }
    console.log('Wrong username or password')

    // var login = 0

    // while(login < users.length){
    //     if(username === users[login].username && password === users[login].password){
    //         console.log(username + " is logged in!")
    //         login++;
    //     }
    // }

}


function goToMain(){
    window.location.href = "main.html"
}