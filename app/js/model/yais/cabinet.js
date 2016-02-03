function modelCabinet(){
    
    var id = "";
    var cabinetletter = "";
    var roomid = "";
    var cabinetrowCount = "";
    var mustacheObject = null;
    var template =  new templateModelCabinet();
    
    this.createCabinet = function(handleid,handlecabinetletter,handleroomid,handlerowcount){
        id = handleid;
        cabinetletter = handlecabinetletter;
        roomid = handleroomid;
        cabinetrowCount = handlerowcount;
        
        /*mustacheObject = {
            roomID: handleid,
            roomLocation: handlelocation
        };*/
    }
   
    this.getID = function(){
        return id;
    }
    
    this.setID = function(hid){
        id = hid;
    }
    
    this.getCabinetLetter = function(){
        return cabinetletter;
    }
    
    this.getCabinetRoomID = function(){
        return roomid;
    }
    
    this.getCabinetRowCount = function(){
        return cabinetrowCount;
    }
    
    this.buildByNewInput = function(handleidletter, handleroomid, handlerowcount){
        cabinetletter = handleidletter;
        roomid = handleroomid;
        cabinetrowCount = handlerowcount;
    }
    
}