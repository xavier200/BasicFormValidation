function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;


  //Show message that there is an error with the username...
if (userEntered.length < 6)
    { document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    }

else { document.getElementById("usernameError").innerHTML="Good username.";

document.getElementById("usernameError").classList.remove("hidden-message");
document.getElementById("usernameError").classList.add("shown-message");
//Turn the username items red
document.getElementById("usernameGroup").classList.add("has-success");
     }

if (passEntered.length < 9)
  //Show message that there is an error with the password...
{
  document.getElementById("passwordError").innerHTML="password needs to be longer than eight characters";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
else{
  document.getElementById("passwordError").innerHTML="good password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-success");
}


}
