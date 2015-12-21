
function templateWelcome(){
    
    var baseTemplate = "HOME>WELCOME<br/>\n\
                        \n\
                        WELCOME TO YAIS CLIENT\n\
                        ";
    
    this.getTemplate = function(handleReq){
        return baseTemplate;
    }
}