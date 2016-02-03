
function templateRegister(){
    
    var baseTemplate = "HOME>REGISTER <br/>\n\
                        \n\
                        Please enter the following informations. <br/>\n\
                        \n\
                        username: <input type='text' name='username' id='inputUsername'><br /> \n\
                        password: <input type='password' name='password' id='inputPassword'><br />\n\
                        <br />\n\
                        <input type='submit' id='inputLoginSubmit' value='Submit' onClick='instanceHandler.sendRegister()'>\n\
                        ";
    
    var successTempalte =   "HOME>REGISTER <br/>\n\
                            \n\
                            User successful registerd with username: {{data}}\n\
                            ";
    
    this.getTemplate = function(handleReq){
        if(handleReq == "success"){
            return successTempalte;
        }
        else{
            return baseTemplate;
        }
        
    }
}