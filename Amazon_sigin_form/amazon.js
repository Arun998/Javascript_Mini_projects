function validate(){
    var username=document.getElementById("uname").value.trim();
    var password=document.getElementById("pwd").value.trim();
     var uError = document.getElementById("name");
     var pError =  document.getElementById("password");
     
     
    if(username.length==0 && password.length==0){
    
        uError.style.display="inline";
        pError.style.display="inline";
        return false;
        
    
    }
    else if(username.length==0 && password.length>0){
       uError.style.display="inline";
       pError.style.display="none"
       return false;
       
     }

    else if(username.length>0 && password.length==0){
        uError.style.display="none";
        pError.style.display="inline";
        return false
      
      
     }
     else{
        uError.style.display="none";
        pError.style.display="none"
        alert("login successfully")
        return true
     }  
}