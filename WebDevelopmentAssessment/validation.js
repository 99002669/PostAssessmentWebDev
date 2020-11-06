function validationOfValues()
{
    if(document.getElementById("uname").value==""){
        alert("Enter your name");
        document.myregistrationform.username.focus();
    }
    else if(validateUser()){
        alert("User name");
        document.myregistrationform.username.focus();
    }
    else if(validateUserLength()){
        alert("lenth of username");
        document.myregistrationform.username.focus();
    }


    else if(document.getElementById("passwordrequired").value==""){
        alert("Enter your password");   
        document.myregistrationform.password.focus();
    }
    else if(validatePassword()){
        alert("Correct password please");
        document.myregistrationform.password.focus();
    }


    else if(document.getElementById("email").value==""){
        alert("Enter your Email ID");
        document.myregistrationform.emailID.focus();}
    else if(validateEmail()){
        alert("valid email ID please");
        document.myregistrationform.emailID.focus();
    }


    else if(document.getElementById("phoneno").value==""){
        alert("Enter your Phone No");
        document.myregistrationform.phone.focus();}
    else if (validatePhone()){
        alert("valid phone no please");
        document.myregistrationform.phone.focus();
    }


   function validateUser(){
    var registeredname = ["Chutki", "Bheem", "Indumati","Kaliya"];
        regname = document.getElementById("uname").value;
        flag = 0;
        for(var i = 0; i<registeredname.length; i++)
        {
            if (!regname.localeCompare(registeredname[i])){
            alert("Username already exist, please give another one");
            flag = 0;
            break;
        }
        else
        {
            flag = 1;
        }
        }
            if (flag == 1){
            registeredname.push(regname);
            alert("Registration is successful");
            document.myregistrationform.submit();
        } 
   }

   function validateUserLength()
   {
       var registeredname = document.getElementById("uname").value;
       if(registeredname.length>=5&&str.length<=15)
        return false;
       else 
        return true;
   }

   function validatePassword(){
    
            var pswd = document.getElementById("pass").value; 
            if (pswd.match(/[a-z]/g) && pswd.match( 
                    /[A-Z]/g) && pswd.match( 
                    /[0-9]/g) && pswd.match( 
                    /[^a-zA-Z\d]/g) && pswd.length >= 8) 
                return false;
    
            else 
                return true; 
   }


   function validateEmail()  
    {
    var eml = document.getElementById("email").value; 
            if (eml.match(/@/g)  )
                return false;
    
            else 
                return true; 
    } 

    function validatePhone()
    {
        var phn = document.getElementById("phoneno").value;
        if(phn.match(/[0-9]/g))
        return false;
        else
        return true;
    }
}