
function templateCabinetRow(){
    var baseTemplate = "\n\
                        <button type='button' id='btnCabinetRowNew'>New Cabinet</button> \n\
                        <button type='button' id='btnCabinetRowAll'>Display all Cabinet</button> \n\
                        <button type='button' id='btnCabinetRowRem'>Remove Cabinet</button>\n\
                        <br\><br\>\n\
                        {{data}}";
    
    var cabinetNewTemplate = " \n\
                        <button type='button' id='btnCabinetRowNew'>New Cabinet</button> \n\
                        <button type='button' id='btnCabinetRowAll'>Display all Cabinet</button> \n\
                        <button type='button' id='btnCabinetRowRem'>Remove Cabinet</button>\n\
                        <br\><br\> \n\
                        Please enter the following informations. <br/>\n\
                        \n\
                        Cabinet Letter: <input type='text' name='cabinetletter' id='inputCabinetRowLetter'><br /> \n\
                        Room ID: <input type='text' name='cabinetroomid' id='inputCabinetRowCabinetID'><br /> \n\
                        Cabinet Row Count: <input type='text' name='cabinetrowcount' id='inputCabinetRowRowCount'><br /> \n\
                        <br />\n\
                        <input type='submit' id='inputNewRoomSubmit' value='Submit' onClick='instanceHandler.sendNewCabinetRow()'>\n\
                        ";
    
    var cabinetSuccessNew =    "<button type='button' id='btnCabinetRowNew'>New Cabinet</button> \n\
                            <button type='button' id='btnCabinetRowAll'>Display all Cabinet</button> \n\
                            <button type='button' id='btnCabinetRowRem'>Remove Cabinet</button>\n\ <br/>\n\
                            \n\
                            Cabinet successfully created: {{data}}\n\
                            ";
    
    var cabinetListTemplate = " \n\
                        <button type='button' id='btnCabinetRowNew'>New Cabinet</button> \n\
                        <button type='button' id='btnCabinetRowAll'>Display all Cabinet</button> \n\
                        <button type='button' id='btnCabinetRowRem'>Remove Cabinet</button>\n\
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
                        <div id='cabinetrowAnchor'></div>\n\
                        ";
    
    var cabinetRemoveTemplate = " \n\
                        <button type='button' id='btnCabinetRowNew'>New Cabinet</button> \n\
                        <button type='button' id='btnCabinetRowAll'>Display all Cabinet</button> \n\
                        <button type='button' id='btnCabinetRowRem'>Remove Cabinet</button>\n\
                        <br\><br\> \n\
                        Please enter the following informations. <br/>\n\
                        \n\
                        ID: <input type='text' name='id' id='inputID'><br /> \n\
                        <br />\n\
                        <input type='submit' id='inputNewCabinetSubmit' value='Submit' onClick='instanceHandler.sendRemoveCabinetRow()'>\n\
                        ";
    
    var cabinetSuccessRemove = "<button type='button' id='btnCabinetRowNew'>New Cabinet</button> \n\
                            <button type='button' id='btnCabinetRowAll'>Display all Cabinet</button> \n\
                            <button type='button' id='btnCabinetRowRem'>Remove Cabinet</button>\n\ <br/>\n\
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