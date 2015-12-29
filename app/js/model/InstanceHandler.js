
function InstanceHandler(){
    
    //private
    var roomStorage = new Array();
    var cabinetStorage = new Array();
    var cabinetRowStorage = new Array();
    var dossierStorage = new Array();
    var socket = null;
    var ticketID = null;
    
    //public
    this.linkSocket = function(handleSocket){
        socket = handleSocket;
    }
    
    this.addRoom = function(handleRoom){
        roomStorage.push(handleRoom);
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
                console.log("request all room data");
                message = new Message(messageType.getDataCode(), messageSubType.getDataRoom(), messageActionType.loadAction(),"");
                socket.sendMessage(message.buildRequest());
            }
            if(action == "remove"){
                
            }
        }
    }    
}