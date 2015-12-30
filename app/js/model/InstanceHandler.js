
function InstanceHandler(){
    
    //private
    var roomStorage = new Array();
    var cabinetStorage = new Array();
    var cabinetRowStorage = new Array();
    var dossierStorage = new Array();
    var socket = null;
    var openticketID = 0;
    
    //public
    this.linkSocket = function(handleSocket){
        socket = handleSocket;
    }
    
    this.addRoom = function(handleRoom){
        var bool = false;
        //check if the room already exists in list
        for(var i = 0; i < roomStorage.length; i++){
            if(roomStorage[i].getID() == handleRoom.getID()){
                //found one , do nothing
                bool = true;
            }
            
        }
        
        if(!bool){
            roomStorage.push(handleRoom);
        }
    }
    
    this.getAllRoom = function(){
        return roomStorage;
    }
    
    this.getRoom = function(handleRoomName){
        for(var i=0; i < roomStorage.length; i++){
            if(handleRoomName == roomStorage[i].getLocation()){
                return roomStorage[i];
            }
        }
    }
    
    this.delRoom = function(handleRoomName){
        var index = -1;
        //find index
        for(var i=0; i < roomStorage.length; i++){
            if(handleRoomName == roomStorage[i].getLocation()){
                index = i;
            }
        }
        var dump = roomStorage.splice(index,1);
    }
    
    this.manageDataRquest = function(handleClassType, action){
        var classType = handleClassType.replace("#","");
        if(classType == "room"){
            if(action == "new"){
                //nothing to request
            }
            if(action == "all"){
                message = new Message(messageType.getDataCode(), messageSubType.getDataRoom(), messageActionType.loadAction(),"");
                openticketID = message.getMessageID();
                socket.sendMessage(message.buildRequest());
            }
            if(action == "remove"){
                
            }
        }
    }
    
    this.getOpenTicketState = function(){
        if(openticketID == 0){
            return false;
        }
        else{
            return true;
        }
    }
    
    this.handleIncommingDataRequest = function(handleClassType, messageID ,data){
        if(handleClassType == "room"){
            console.log("got new room data");
            if(openticketID == messageID){
                //id equal with open ticket and now setting it back to done
                openticketID = 0;
                
                if(handleClassType == "room"){
                    for(var key in data){
                        if(key.search(/([0-9])+/) != -1){
                            var obj = JSON.parse(data[key]);
                            var model = new modelRoom();
                            model.createRoom(obj.id,obj.location);
                            this.addRoom(model);
                        }
                    }
                }
            }
        }   
    }
}