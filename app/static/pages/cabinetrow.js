
function templateCabinetRow(){
    var baseTemplate = "\n\
                        <button type='button' id='btnCabinetRowNew'>New CabinetRow</button> \n\
                        <button type='button' id='btnCabinetRowAll'>Display all CabinetRow</button> \n\
                        <button type='button' id='btnCabinetRowRem'>Remove CabinetRow</button>\n\
                        <br\><br\>\n\
                        {{data}}";
    
    var cabinetRowNewTemplate = " \n\
                        <button type='button' id='btnCabinetRowNew'>New CabinetRow</button> \n\
                        <button type='button' id='btnCabinetRowAll'>Display all CabinetRow</button> \n\
                        <button type='button' id='btnCabinetRowRem'>Remove CabinetRow</button>\n\
                        <br\><br\> \n\
                        Please enter the following informations. <br/>\n\
                        \n\
                        Cabinet Letter: <input type='text' name='cabinetletter' id='inputCabinetRowLetter'><br /> \n\
                        Cabinet ID: <input type='text' name='cabinetroomid' id='inputCabinetRowCabinetID'><br /> \n\
                        Cabinet Row Count: <input type='text' name='cabinetrowcount' id='inputCabinetRowRowCount'> how many dossier fits in this<br /> \n\
                        <br />\n\
                        <input type='submit' id='inputNewCabinetRowSubmit' value='Submit' onClick='instanceHandler.sendNewCabinetRow()'>\n\
                        ";
    
    var cabinetRowSuccessNew =    "\
                            <button type='button' id='btnCabinetRowNew'>New CabinetRow</button> \n\
                            <button type='button' id='btnCabinetRowAll'>Display all CabinetRow</button> \n\
                            <button type='button' id='btnCabinetRowRem'>Remove CabinetRow</button>\n\
                            \n\
                            Cabinet successfully created: {{data}}\n\
                            ";
    
    var cabinetRowListTemplate = " \n\
                        <button type='button' id='btnCabinetRowNew'>New CabinetRow</button> \n\
                        <button type='button' id='btnCabinetRowAll'>Display all CabinetRow</button> \n\
                        <button type='button' id='btnCabinetRowRem'>Remove CabinetRow</button>\n\
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
                            CabinetID\n\
                        </div>\n\
                        <div class='col-md-2'>\n\
                            Row Count\n\
                        </div>\n\
                        </div>\n\
                        <div id='cabinetrowAnchor'></div>\n\
                        ";
    
    var cabinetRowRemoveTemplate = " \n\
                        <button type='button' id='btnCabinetRowNew'>New CabinetRow</button> \n\
                        <button type='button' id='btnCabinetRowAll'>Display all CabinetRow</button> \n\
                        <button type='button' id='btnCabinetRowRem'>Remove CabinetRow</button>\n\
                        <br\><br\> \n\
                        Please enter the following informations. <br/>\n\
                        \n\
                        ID: <input type='text' name='id' id='inputID'><br /> \n\
                        <br />\n\
                        <input type='submit' id='inputNewCabinetSubmit' value='Submit' onClick='instanceHandler.sendRemoveCabinet()'>\n\
                        ";
    
    var cabinetRowSuccessRemove = "\
                            <button type='button' id='btnCabinetRowNew'>New CabinetRow</button> \n\
                            <button type='button' id='btnCabinetRowAll'>Display all CabinetRow</button> \n\
                            <button type='button' id='btnCabinetRowRem'>Remove CabinetRow</button>\n\
                            \n\
                            Cabinet successfully removed: {{data}}\n\
                            ";
    
    this.getTemplate = function(handleReq){
        if(handleReq == "new"){
            return cabinetRowNewTemplate;
        }
        if(handleReq == "newSuccess"){
            return cabinetRowSuccessNew;
        }
        if(handleReq == "all"){
            return cabinetRowListTemplate;
        }
        if(handleReq == "remSuccess"){
            return cabinetRowSuccessRemove;
        }
        if(handleReq == "remove"){
            return cabinetRowRemoveTemplate;
        }
        else{
            return baseTemplate;
        }
    }
}