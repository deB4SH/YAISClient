
function templateDossier(){
    var baseTemplate = "\n\
                        <button type='button' id='btnDossierNew'>New Dossier</button> \n\
                        <button type='button' id='btnDossierAll'>Display all Dossier</button> \n\
                        <button type='button' id='btnDossierRem'>Remove Dossier</button>\n\
                        <br\><br\>\n\
                        {{data}}";
    
    var dossierNewTemplate = " \n\
                        <button type='button' id='btnDossierNew'>New Dossier</button> \n\
                        <button type='button' id='btnDossierAll'>Display all Dossier</button> \n\
                        <button type='button' id='btnDossierRem'>Remove Dossier</button>\n\
                        <br\><br\> \n\
                        Please enter the following informations. <br/>\n\
                        \n\
                        Dossier Name: <input type='text' name='dossiername' id='inputDossierName'><br /> \n\
                        Dossier Archive Name: <input type='text' name='dossierarchiveName' id='inputDossierArchiveName'><br /> \n\
                        Dossier Created On: <input type='text' name='dossierCreatedOn' id='inputDossierCreatedOn'><br /> \n\
                        Cabinet Row ID: <input type='text' name='dossierCabinetRowID' id='inputDossierCabinetRowID'><br /> \n\
                        <br />\n\
                        <input type='submit' id='inputNewDossierSubmit' value='Submit' onClick='instanceHandler.sendNewDossier()'>\n\
                        ";
    
    var dossierSuccessNew =    "<button type='button' id='btnDossierNew'>New Dossier</button> \n\
                            <button type='button' id='btnDossierAll'>Display all Dossier</button> \n\
                            <button type='button' id='btnDossierRem'>Remove Dossier</button>\n\
                            \n\
                            Dossier successfully created: {{data}}\n\
                            ";
    
    var dossierListTemplate = " \n\
                        <button type='button' id='btnDossierNew'>New Dossier</button> \n\
                        <button type='button' id='btnDossierAll'>Display all Dossier</button> \n\
                        <button type='button' id='btnDossierRem'>Remove Dossier</button>\n\
                        <br\><br\> \n\
                        Following Rooms are in the Database <br/> <br />\n\
                        \n\
                        \n\
                        <div class='col-md-12'>\
                        <div class='col-md-2'>\n\
                            ID\n\
                        </div>\n\
                        <div class='col-md-2'>\n\
                            Dossier Name\n\
                        </div>\n\
                        <div class='col-md-2'>\n\
                            Dossier Archive Name\n\
                        </div>\n\
                        <div class='col-md-2'>\n\
                            Created on\n\
                        </div>\n\
                        <div class='col-md-2'>\n\
                            Cabinet Row ID\n\
                        </div>\n\
                        </div>\n\
                        <div id='dossierAnchor'></div>\n\
                        ";
    
    var dossierRemoveTemplate = " \n\
                        <button type='button' id='btnDossierNew'>New Dossier</button> \n\
                        <button type='button' id='btnDossierAll'>Display all Dossier</button> \n\
                        <button type='button' id='btnDossierRem'>Remove Dossier</button>\n\
                        <br\><br\> \n\
                        Please enter the following informations. <br/>\n\
                        \n\
                        ID: <input type='text' name='id' id='inputID'><br /> \n\
                        <br />\n\
                        <input type='submit' id='inputNewDossierSubmit' value='Submit' onClick='instanceHandler.sendRemoveDossier()'>\n\
                        ";
    
    var dossierSuccessRemove = "<button type='button' id='btnDossierNew'>New Dossier</button> \n\
                            <button type='button' id='btnDossierAll'>Display all Dossier</button> \n\
                            <button type='button' id='btnDossierRem'>Remove Dossier</button>\n\
                            \n\
                            Dossier successfully removed: {{data}}\n\
                            ";
    
    this.getTemplate = function(handleReq){
        if(handleReq == "new"){
            return dossierNewTemplate;
        }
        if(handleReq == "newSuccess"){
            return dossierSuccessNew;
        }
        if(handleReq == "all"){
            return dossierListTemplate;
        }
        if(handleReq == "remSuccess"){
            return dossierSuccessRemove;
        }
        if(handleReq == "remove"){
            return dossierRemoveTemplate;
        }
        else{
            return baseTemplate;
        }
    }
}