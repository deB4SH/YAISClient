
function templateRoom(){
    
    var baseTemplate = "HOME>ROOM<br/>\n\
                        \n\
                        btn NEW ROOM , btnGET ALL ROOMS, btnREMOVE ONE ROOM\n\
                        <br\>\n\
                        <br\>\n\
                        {{content}\n\
                        ";
    
    this.getBaseTemplate = function(){
        return baseTemplate;
    }
}