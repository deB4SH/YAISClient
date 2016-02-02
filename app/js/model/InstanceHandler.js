
function InstanceHandler(){
    
    //private
    var roomStorage = new Array();
    var cabinetStorage = new Array();
    var cabinetRowStorage = new Array();
    var dossierStorage = new Array();
    var user = new mdlUser();
    var socket = null;
    var socketPromise = null;
    
    //public
    this.linkSocket = function(handleSocket){
        socket = handleSocket;
    }
    
    this.linkSocketPromise = function(handleSocketPromise){
        socketPromise = handleSocketPromise;
        socketPromise.clearList();
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
    
    this.getAllDossier = function(){
        return dossierStorage;
    }
    
    this.getDossierByID = function(handleDossierID){
        return dossierStorage[handleDossierID];
    }
    
    this.getDossierByName = function(handleDossierName){
        for(var i = 0; i < dossierStorage.length; i++){
            if(dossierStorage[i].getName() == handleDossierName){
                return dossierStorage[i];
            }
        }
    }
    
    this.addDossier = function(handleDossier){
        dossierStorage.push(handleDossier);
    }
    
    this.sendLogin = function(){
            //get login credentials and create userdata from it
        var u = document.getElementById("inputUsername").value;
        var p = document.getElementById("inputPassword").value;
        user.newUser(u,p);
        this.manageDataRquest("user","login");
    }
    
    this.sendRegister = function(){
        //get login credentials and create userdata from it
        var u = document.getElementById("inputUsername").value;
        var p = document.getElementById("inputPassword").value;
        user.newUser(u,p);
        this.manageDataRquest("user","register");
    }
    
    this.manageDataRquest = function(handleClassType, action){
        var classType = handleClassType.replace("#","");
        if(classType == "room"){
            if(action == "new"){
                //nothing to request
            }
            if(action == "all"){
                message = new Message(messageType.getDataCode(), messageSubType.getDataRoom(), messageActionType.loadAction(),"");
                socketPromise.addNewOpenID(message.getMessageID());
                socket.sendMessage(message.buildRequest());
            }
            if(action == "remove"){
                
            }
        }
        else if(classType == "user"){
            var uMessageType = "";
            var uMessageSubType = "";
            if(action == "login"){
                uMessageType = messageType.getUserCode();
                uMessageSubType = messageSubType.getUserLogon();
            }
            if(action == "register"){
                uMessageType = messageType.getUserCode(); 
                uMessageSubType = messageSubType.getUserRegistration()
            }
            var message = new Message(uMessageType, uMessageSubType, "0", user.getJSON());
            socketPromise.addNewOpenID(message.getMessageID());
            var build = message.buildRequest();
            console.log(build);
            socket.sendMessage(message.buildRequest());  
        }
    }
    
    this.handleIncommingError = function(messageID, reason){
        console.log("handle incomming error");
        socketPromise.addReceivedID(messageID);
    }
    
    this.handleIncommingDataRequest = function(handleClassType, messageID ,data){
        //add messageID to socketPromise (check if answer for request is there)
        socketPromise.addReceivedID(messageID);
        
        //check if classtype is room
        if(handleClassType == "room"){
            console.log("got new room data");
            console.log(data);
            for(var key in data){
                if(key.search(/([0-9])+/) != -1){
                    var obj = JSON.parse(data[key]);
                    var model = new modelRoom();
                    model.createRoom(obj.id,obj.location);
                    this.addRoom(model);
                }
            }
        }
           
        //check if classtype is dossier
        else if(handleClassType == "dossier"){
            console.log("recieved new dossier data");
            
            for(var key in data){
                if(key.search(/([0-9])+/) != -1){
                    var obj = JSON.parse(data[key]);
                    var mdl = new modelDossier();
                    mdl.createDossier(obj.id,obj.name,obj.archive,obj.use,obj.created);
                    this.add
                }
            }
        }
        //check if classtype is cabinet
        else if(handleClassType == "cabinet"){
            
        }
        //check if classtype is cabinetrow
        else if(handleClassType == "cabinetrow"){
            
        }
    }
}