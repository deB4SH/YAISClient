
function templateModelDossier(){

    var self = this;

    var listTemplate = "<div class='col-md-12'>\
                            <div id='dossierID' class='col-md-2'>\n\
                                {{dossierID}}\n\
                            </div>\n\
                            <div id='dossierName' class='col-md-2'>\n\
                                {{dossierName}}\n\
                            </div>\n\
                            <div id='dossierArchiveObject' class='col-md-2'>\n\
                                {{dossierArchiveObject}}\n\
                            </div>\n\
                            <div id='dossierCreatedOn' class='col-md-2'>\n\
                                {{dossierCreatedOn}}\n\
                            </div>\n\
                            <div id='dossierCreatedOn' class='col-md-2'>\n\
                                {{dossierCabinetRowID}}\n\
                            </div>\n\
                        </div>";
    
    var addTemplate = "<div class='col-md-12'>\
                        <div class='col-md-2'>\n\
                            {{cabinetIDLetter}}\n\
                        </div>\n\
                        <div class='col-md-2'>\n\
                            {{cabinetRoomID}}\n\
                        </div>\n\
                        <div class='col-md-2'>\n\
                            {{cabinetRowCount}}\n\
                        </div>\n\
                        </div>";
    
    var delTemplate = "<div class='col-md-12'>\
                        <div class='col-md-2'>\n\
                            roomid\n\
                        </div>\n\
                        <div class='col-md-10'>\n\
                            location\n\
                        </div>\n\
                        </div>";
    
    this.getTemplate = function(state){
        if(state == "remove")
        {
            return delTemplate;
        }
        else if(state == "add"){
            return addTemplate;
        }
        else if(state == "list"){
            return listTemplate;
        }
        else{
            return listTemplate;
        }
    }
    
    
    
    
}