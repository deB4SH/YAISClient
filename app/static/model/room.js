
function templateRoom(){

    var baseTemplate = "<row>\
                        <div class='col-md-2'>\n\
                            {{roomID}}\n\
                        </div>\n\
                        <div class='col-md-12'>\n\
                            {{roomLocation}}\n\
                        </div>\n\
                        </row>";
    
    this.getBaseTemplate = function(){
        return baseTemplate;
    }
    
}