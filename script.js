

let userDetails = {

  
}
  
    function fillDetails() {
      let password = prompt("Enter your password");
      
      function validatePassword() {
        if (password.length >0 && password.length <=6) {
          alert("valid data!");  
          
        }else{
          alert("invalid data!");
        }
        
      }
      while (validatePassword(password) ===false){
        password = prompt("Password must be greater than 5");
      }
      alert(validatePassword(password));
      userDetails["password"] = password
    
      let ConfirmPassword = prompt("Confirm password");
    
      function validateConfirmPassword(comfirmPassword) {
        if (comfirmPassword === password) {
          alert("valid data!");  
          
        }else{ 
          alert("invalid data!");
        }
        
      }
      alert(validateConfirmPassword(ConfirmPassword));
      userDetails["confirmPassword"] = ConfirmPassword


      let email = ("Enter your Email");
      function validateEmail() {
        if( email.includes("@") && email.includes(".")){
          alert("valid data");
         }
         else{
          alert("invalid data");
          email = "";
        }



      }
        
      
    }


    function seeDetails() {
      alert(`User Details\n Password: ${userDetails.Password}\n Confirm Password: ${userDetails.ConfirmPassword}`)
      
    
    }


