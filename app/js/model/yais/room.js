function modelRoom(){
    
    var id = "";
    var location = "";
    var mustacheObject = null;
    var template =  new templateModelRoom();
    
    
    this.createRoom = function(handleid,handlelocation){
        id = handleid;
        location = handlelocation;
        
        mustacheObject = {
            roomID: handleid,
            roomLocation: handlelocation
        };
    }
    
    this.renderTempalte = function(handle){
        var render = Mustache.render(template.getBaseTemplate(handle), mustacheObject);
        return render;
    }
    
    
    this.getLocation = function(){
        return location;
    }
    
    this.getID = function(){
        return id;
    }
    
    
}