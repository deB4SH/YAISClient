
function templateModelCabinet(){

    var self = this;

    var listTemplate = "<div class='col-md-12'>\
                            <div id='cabinetID' class='col-md-2'>\n\
                                {{cabinetID}}\n\
                            </div>\n\
                            <div id='cabinetLetter' class='col-md-2'>\n\
                                {{cabinetIDLetter}}\n\
                            </div>\n\
                            <div id='cabinetRoomID' class='col-md-2'>\n\
                                {{cabinetRoomID}}\n\
                            </div>\n\
                            <div id='cabinetRowCount' class='col-md-2'>\n\
                                {{cabinetRowCount}}\n\
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