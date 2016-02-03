
function templateModelCabinetRow(){

    var self = this;

    var listTemplate = "<div class='col-md-12'>\
                            <div id='cabinetrowID' class='col-md-2'>\n\
                                {{cabinetrowID}}\n\
                            </div>\n\
                            <div id='cabinetrowLetter' class='col-md-2'>\n\
                                {{cabinetrowIDLetter}}\n\
                            </div>\n\
                            <div id='cabinetrowCabinetID' class='col-md-2'>\n\
                                {{cabinetrowCabinetID}}\n\
                            </div>\n\
                            <div id='cabinetRowCount' class='col-md-2'>\n\
                                {{cabinetrowRowCount}}\n\
                            </div>\n\
                        </div>";
    
    var addTemplate = "<div class='col-md-12'>\
                        <div class='col-md-2'>\n\
                            {{cabinetrowIDLetter}}\n\
                        </div>\n\
                        <div class='col-md-2'>\n\
                            {{cabinetrowRoomID}}\n\
                        </div>\n\
                        <div class='col-md-2'>\n\
                            {{cabinetrowRowCount}}\n\
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