function modelDossier(){
    
    var id = "";
    var name = "";
    var archiveObject = "";
    var lastUse = "";
    var createdOn = "";
    var mustacheObject = null;
    var template =  new templateModelRoom();
    
    this.createDossier = function(handleid,handleDossierName,handleArchiveObject,handleUse,handleCreated){
        id = handleid;
        name = handleDossierName;
        lastUse = handleUse;
        createdOn = handleCreated;
        
        mustacheObject = {
            dossierID : id,
            dossierName : name,
            dossierArchive : archiveObject,
            dossierUse : lastUse
        };
    }
    
    this.renderTempalte = function(handle){
        var render = Mustache.render(template.getBaseTemplate(handle), mustacheObject);
        return render;
    }
    
    this.getID = function(){
        return id;
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
    
    this.getMustacheObject = function(){
        return mustacheObject;
    }
    
    this.getTemplate = function(){
        return template;
    }
}