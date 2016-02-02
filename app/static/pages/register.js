
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
    
    this.getTemplate = function(handleReq){
        return baseTemplate;
    }
}