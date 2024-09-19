function func(){
        var email = document.getElementById("username").value;
        var pass = document.getElementById("password").value;
        if(email=='ramjanakidevi9655@gmail.com' && pass=='1234567'){
            alert("login successfully")
        window.location.assign("index.html") 
        }
        else{
            alert("please enter valid email")
        }
 }