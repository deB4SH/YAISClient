function modelRoom(){
    
    var id = "";
    var location = "";
    var mustacheObject = null;
    var template =  new templateRoom().getBaseTemplate();
    
    
    this.createRoom = function(handleid,handlelocation){
        id = handleid;
        location = handlelocation;
        
        mustacheObject = {
            roomID: handleid,
            roomLocation: handlelocation
        };
    }
    
    this.renderTempalte = function(){
        var render = Mustache.render(template, mustacheObject);
    }
    
    
    
    
    
}