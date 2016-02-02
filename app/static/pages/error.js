
function templateERROR(){
    
    var baseTemplate = "HOME>ERROR <br/>\n\
                        \n\
                        There went something terribly wrong with your request :(. <br/><br />\n\
                        \n\
                        <b>{{data}}</b> \n\
                        <br /><br />\n\
                        Please try your desired action again\n\
                        ";
    
    this.getTemplate = function(handleReq){
        return baseTemplate; 
    }
}