
function templateCabinet(){
    var baseTemplate = "\n\
                        <button type='button' id='btnCabinetNew'>New Cabinet</button> \n\
                        <button type='button' id='btnCabinetAll'>Display all Cabinet</button> \n\
                        <button type='button' id='btnCabinetRem'>Remove Cabinet</button>\n\
                        <br\><br\>\n\
                        {{data}}";
    
    var cabinetNewTemplate = " \n\
                        <button type='button' id='btnCabinetNew'>New Cabinet</button> \n\
                        <button type='button' id='btnCabinetAll'>Display all Cabinet</button> \n\
                        <button type='button' id='btnCabinetRem'>Remove Cabinet</button>\n\
                        <br\><br\> \n\
                        Please enter the following informations. <br/>\n\
                        \n\
                        Cabinet Letter: <input type='text' name='cabinetletter' id='inputCabinetLetter'><br /> \n\
                        Room ID: <input type='text' name='cabinetroomid' id='inputCabinetRoomID'><br /> \n\
                        Cabinet Row Count: <input type='text' name='cabinetrowcount' id='inputCabinetRowCount'><br /> \n\
                        <br />\n\
                        <input type='submit' id='inputNewRoomSubmit' value='Submit' onClick='instanceHandler.sendNewCabinet()'>\n\
                        ";
    
    var cabinetSuccessNew =    "<button type='button' id='btnCabinetNew'>New Cabinet</button> \n\
                            <button type='button' id='btnCabinetAll'>Display all Cabinet</button> \n\
                            <button type='button' id='btnCabinetRem'>Remove Cabinet</button>\n\ <br/>\n\
                            \n\
                            Cabinet successfully created: {{data}}\n\
                            ";
    
    var cabinetListTemplate = " \n\
                        <button type='button' id='btnCabinetNew'>New Cabinet</button> \n\
                        <button type='button' id='btnCabinetAll'>Display all Cabinet</button> \n\
                        <button type='button' id='btnCabinetRem'>Remove Cabinet</button>\n\
                        <br\><br\> \n\
                        Following Rooms are in the Database <br/> <br />\n\
                        \n\
                        \n\
                        <div class='col-md-12'>\
                        <div class='col-md-2'>\n\
                            ID\n\
                        </div>\n\
                        <div class='col-md-2'>\n\
                            IDLetter\n\
                        </div>\n\
                        <div class='col-md-2'>\n\
                            RoomID\n\
                        </div>\n\
                        <div class='col-md-2'>\n\
                            Row Count\n\
                        </div>\n\
                        </div>\n\
                        <div id='cabinetAnchor'></div>\n\
                        ";
    
    var cabinetRemoveTemplate = " \n\
                        <button type='button' id='btnCabinetNew'>New Cabinet</button> \n\
                        <button type='button' id='btnCabinetAll'>Display all Cabinet</button> \n\
                        <button type='button' id='btnCabinetRem'>Remove Cabinet</button>\n\
                        <br\><br\> \n\
                        Please enter the following informations. <br/>\n\
                        \n\
                        ID: <input type='text' name='id' id='inputID'><br /> \n\
                        <br />\n\
                        <input type='submit' id='inputNewCabinetSubmit' value='Submit' onClick='instanceHandler.sendRemoveCabinet()'>\n\
                        ";
    
    var cabinetSuccessRemove = "<button type='button' id='btnCabinetNew'>New Cabinet</button> \n\
                            <button type='button' id='btnCabinetAll'>Display all Cabinet</button> \n\
                            <button type='button' id='btnCabinetRem'>Remove Cabinet</button>\n\ <br/>\n\
                            \n\
                            Cabinet successfully removed: {{data}}\n\
                            ";
    
    this.getTemplate = function(handleReq){
        if(handleReq == "new"){
            return cabinetNewTemplate;
        }
        if(handleReq == "newSuccess"){
            return cabinetSuccessNew;
        }
        if(handleReq == "all"){
            return cabinetListTemplate;
        }
        if(handleReq == "remSuccess"){
            return cabinetSuccessRemove;
        }
        if(handleReq == "remove"){
            return cabinetRemoveTemplate;
        }
        else{
            return baseTemplate;
        }
    }
}