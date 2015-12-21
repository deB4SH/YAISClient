
function templateModelRoom(){

    var self = this;

    var listTemplate = "<div class='col-md-12'>\
                        <div class='col-md-2'>\n\
                            {{roomID}}\n\
                        </div>\n\
                        <div class='col-md-10'>\n\
                            {{roomLocation}}\n\
                        </div>\n\
                        </div>";
    
    var addTemplate = "<div class='col-md-12'>\
                        <div class='col-md-2'>\n\
                            room id\n\
                        </div>\n\
                        <div class='col-md-10'>\n\
                            locationField\n\
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
    
    this.getBaseTemplate = function(state){
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
            return "error";
        }
    }
    
    
    
    
}