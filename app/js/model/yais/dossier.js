function modelDossier(){
    
    var id = "";
    var name = "";
    var archiveObject = "";
    var lastUse = "";
    var createdOn = "";
    var cabinetrowID = "";
    var mustacheObject = null;
    var template =  new templateModelRoom();
    
    this.createDossier = function(handleid,handleDossierName,handleArchiveObject,handleUse,handleCreated, handleCabinetRowID){
        id = handleid;
        name = handleDossierName;
        archiveObject = handleArchiveObject;
        lastUse = handleUse;
        createdOn = handleCreated;
        cabinetrowID = handleCabinetRowID;
        
        console.log(archiveObject);
        console.log(createdOn);
        
        mustacheObject = {
            dossierID : id,
            dossierName : name,
            dossierArchive : archiveObject,
            dossierUse : lastUse
        };
    }
    
    this.buildByNewInput = function(handledossierName,handledossierArchiveObject,handleCreated, handleCabinetRowID){
        name = handledossierName;
        archiveObject = handledossierArchiveObject;
        createdOn = handleCreated;
        cabinetrowID = handleCabinetRowID;
    }
    
    this.renderTempalte = function(handle){
        var render = Mustache.render(template.getBaseTemplate(handle), mustacheObject);
        return render;
    }
    
    this.getID = function(){
        return id;
    }
    
    this.setID = function(handleid){
        id = handleid;
    }
    
    this.getName = function(){
        return name;
    }
    
    this.getArchiveObject = function(){
        return archiveObject;
    }
    
    this.getCreateOn = function(){
        return createdOn;
    }
    
    this.getCabinetRowID = function(){
        return cabinetrowID;
    }
    
    this.getMustacheObject = function(){
        return mustacheObject;
    }
    
    this.getTemplate = function(){
        return template;
    }
}