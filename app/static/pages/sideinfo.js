
function templateSideinfo(){
    
    var baseTemplate = "<br />\
                        [STATiSTiCS]<br/>\n\
                        \n\
                        DOSSIER in DB: {{dossierInDB}} <br />\n\
                        CABINETROW in DB: {{cabinetrowInDB}} <br />\n\
                        CABINET in DB: {{cabinetInDB}} <br />\n\
                        ROOM in DB: {{roomInDB}} <br />\n\
                        <br /><br />\n\
                        [INFORMATIONS]<br />\n\
                        Current User: {{currentUser}} <br />\n\
                        YAIS Server: 0.1a <br />\n\
                        YAIS Client: 0.1a <br />\n\
                        ";
    
    this.getTemplate = function(handleReq){
        return baseTemplate;
    }
}