function formValidate() {     
    var userName = document.getElementById("username").value; 
    var password = document.getElementById("password").value; 
    var error = document.getElementById("error");  
    var text = ""; 
    if (userName.length < 3 || userName =="") {
        text = "Please Enter a Valid Name";
        error.innerHTML = text; 
        return false;
        } 
    else {
        }
    if (isNaN(password) || password =="") {
         text = "Please Enter a Valid password"; 
         error.innerHTML = text; 
         return false; 
        } 
    else {
             alert("Done"); 
             return true;
         }
}