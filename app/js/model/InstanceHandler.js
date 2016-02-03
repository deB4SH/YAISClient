
function InstanceHandler(){
    
    //private
    var roomStorage = new Array();
    var cabinetStorage = new Array();
    var cabinetRowStorage = new Array();
    var dossierStorage = new Array();
    var user = new mdlUser();
    var socket = null;
    var socketPromise = null;
    var router = null;
    var latestErrorMessage =  "";
    var tmpRoom = null;
    var tmpDossier = null;
    var tmpCabinet = null;
    var tmpCabinetRow = null;
    
    
    user.initAnon();
    
    //public
    this.linkSocket = function(handleSocket){
        socket = handleSocket;
    }
    
    this.linkSocketPromise = function(handleSocketPromise){
        socketPromise = handleSocketPromise;
        socketPromise.clearList();
    }
    
    this.linkRouter = function(handleRouter){
        router = handleRouter;
    }
    
    this.getLatestErrorMessage = function(){
        return latestErrorMessage;
    }
    
    this.getPromise = function(){
        return socketPromise;
    }
    
    this.getUser = function(){
        return user;
    }
    
    /**
     * ================ ROOM FUNCTIONS
     */
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
    
    this.delRoomByID = function(handleID){
        var index = -1;
        //find index
        for(var i=0; i < roomStorage.length; i++){
            if(handleID == roomStorage[i].getID()){
                index = i;
            }
        }
        var dump = roomStorage.splice(index,1);
    }
    
    /**
     * ================ CABINET FUNCTIONS
     */
    this.addCabinet = function(handleCabinet){
        var bool = false;
        //check if the room already exists in list
        for(var i = 0; i < cabinetStorage.length; i++){
            if(cabinetStorage[i].getID() == handleCabinet.getID()){
                //found one , do nothing
                bool = true;
            }
            
        }
        
        if(!bool){
            cabinetStorage.push(handleCabinet);
        }
    }
    
    this.getAllCabinet = function(){
        return cabinetStorage;
    }
    
    this.getCabinet = function(handleCabinetLetter){
        for(var i=0; i < cabinetStorage.length; i++){
            if(handleCabinetLetter == cabinetStorage[i].getCabinetLetter()){
                return cabinetStorage[i];
            }
        }
    }
    
    this.delCabinet = function(handleCabinetLetter){
        var index = -1;
        //find index
        for(var i=0; i < cabinetStorage.length; i++){
            if(handleCabinetLetter == cabinetStorage[i].getCabinetLetter()){
                index = i;
            }
        }
        var dump = cabinetStorage.splice(index,1);
    }
    
    this.delCabinetByID = function(handleID){
        var index = -1;
        //find index
        for(var i=0; i < cabinetStorage.length; i++){
            if(handleID == cabinetStorage[i].getID()){
                index = i;
            }
        }
        var dump = cabinetStorage.splice(index,1);
    }
    
    /**
     * ================ CABINET ROW FUNCTIONS
     */
    this.addCabinetRow = function(handleCabinetRow){
        var bool = false;
        //check if the room already exists in list
        for(var i = 0; i < cabinetRowStorage.length; i++){
            if(cabinetRowStorage[i].getID() == handleCabinetRow.getID()){
                //found one , do nothing
                bool = true;
            }
            
        }
        
        if(!bool){
            cabinetRowStorage.push(handleCabinetRow);
        }
    }
    
    this.getAllCabinetRow = function(){
        return cabinetRowStorage;
    }
    
    this.getCabinetRow = function(handleCabinetLetter){
        for(var i=0; i < cabinetRowStorage.length; i++){
            if(handleCabinetLetter == cabinetRowStorage[i].getCabinetLetter()){
                return cabinetRowStorage[i];
            }
        }
    }
    
    this.delCabinetRow = function(handleCabinetRowLetter){
        var index = -1;
        //find index
        for(var i=0; i < cabinetRowStorage.length; i++){
            if(handleCabinetRowLetter == cabinetRowStorage[i].getCabinetLetter()){
                index = i;
            }
        }
        var dump = cabinetRowStorage.splice(index,1);
    }
    
    this.delCabinetRowByID = function(handleID){
        var index = -1;
        //find index
        for(var i=0; i < cabinetRowStorage.length; i++){
            if(handleID == cabinetRowStorage[i].getID()){
                index = i;
            }
        }
        var dump = cabinetRowStorage.splice(index,1);
    }
    
    /**
     * ================ DOSSIER FUNCTIONS
     */
    
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
    
    /**
     * ================ NET FUNCTIONS
     */
    
    this.sendLogin = function(){
            //get login credentials and create userdata from it
        var u = document.getElementById("inputUsername").value;
        var p = document.getElementById("inputPassword").value;
        user.newUser(u,p);
        socketPromise.setfulfillmentFunction(new function(){
           router.navigate("login$success");
        });
        this.manageDataRquest("user","login");
    }
    
    this.sendRegister = function(){
        //get login credentials and create userdata from it
        var u = document.getElementById("inputUsername").value;
        var p = document.getElementById("inputPassword").value;
        user.newUser(u,p);
        socketPromise.setfulfillmentFunction(new function(){
           router.navigate("register$success");
        });
        this.manageDataRquest("user","register");
    }
    
    this.sendNewRoom = function(){
        //get room informations
        var location = document.getElementById("inputLocation").value;
        tmpRoom = new modelRoom();
        tmpRoom.createRoomFromInput(location);
        socketPromise.setfulfillmentFunction(new function(){
           router.navigate("room$newSuccess");
        });
        this.manageDataRquest("room","new");
    }
    
    this.sendRemoveRoom = function(){
        //get information
        var id = document.getElementById("inputID").value;
        tmpRoom = new modelRoom();
        tmpRoom.createRoomFromInputID(id);
        socketPromise.setfulfillmentFunction(new function(){
           router.navigate("room$remSuccess");
           var rmid = tmpRoom.getID();
           instanceHandler.delRoomByID(rmid);
        });
        this.manageDataRquest("room","remove");
    }
    
    this.sendNewCabinet = function(){
        //get cabinet informations
        var cabinetletter = document.getElementById("inputCabinetLetter").value;
        var cabinetRoomID = document.getElementById("inputCabinetRoomID").value;
        var cabinetRowCount = document.getElementById("inputCabinetRowCount").value;
        tmpCabinet = new modelCabinet();
        tmpCabinet.buildByNewInput(cabinetletter,cabinetRoomID,cabinetRowCount);
        socketPromise.setfulfillmentFunction(new function(){
           router.navigate("cabinet$newSuccess");
        });
        this.manageDataRquest("cabinet","new");
        
    }
    
    this.sendRemoveCabinet = function(){
        //get information
        var id = document.getElementById("inputID").value;
        tmpCabinet = new modelCabinet();
        tmpCabinet.setID(id);
        socketPromise.setfulfillmentFunction(new function(){
           router.navigate("cabinet$remSuccess");
           var rmid = tmpCabinet.getID();
           instanceHandler.delCabinetByID(rmid);
        });
        this.manageDataRquest("cabinet","remove");
    }
    
    this.sendNewCabinetRow = function(){
        //get cabinet informations
        var cabinetletter = document.getElementById("inputCabinetRowLetter").value;
        var cabinetRoomID = document.getElementById("inputCabinetRowCabinetID").value;
        var cabinetRowCount = document.getElementById("inputCabinetRowRowCount").value;
        tmpCabinetRow = new modelCabinetRow();
        tmpCabinetRow.buildByNewInput(cabinetletter,cabinetRoomID,cabinetRowCount);
        socketPromise.setfulfillmentFunction(new function(){
           router.navigate("cabinetrow$newSuccess");
        });
        this.manageDataRquest("cabinetrow","new");
        
    }
    
    this.sendRemoveCabinetRow = function(){
        //get information
        var id = document.getElementById("inputID").value;
        tmpCabinetRow = new modelCabinetRow();
        tmpCabinetRow.setID(id);
        socketPromise.setfulfillmentFunction(new function(){
           router.navigate("cabinetrow$remSuccess");
           var rmid = tmpCabinetRow.getID();
           instanceHandler.delCabinetRowByID(rmid);
        });
        this.manageDataRquest("cabinetrow","remove");
    }
    
    this.manageDataRquest = function(handleClassType, action){
        var classType = handleClassType.replace("#","");
        if(classType == "room"){
            if(action == "new"){
                //nothing to request but stuff to send
                var sendObject = new Object();
                sendObject.location = tmpRoom.getLocation();
                message = new Message(messageType.getDataCode(), messageSubType.getDataRoom(), messageActionType.newAction(), JSON.stringify(sendObject));
                socketPromise.addNewOpenID(message.getMessageID());
                socket.sendMessage(message.buildRequest());
                tmpRoom =  null; //remove old object
            }
            if(action == "all"){
                message = new Message(messageType.getDataCode(), messageSubType.getDataRoom(), messageActionType.loadAction(),"");
                socketPromise.addNewOpenID(message.getMessageID());
                socket.sendMessage(message.buildRequest());
            }
            if(action == "remove"){
                var sendObject = new Object();
                sendObject.id = tmpRoom.getID();
                message = new Message(messageType.getDataCode(), messageSubType.getDataRoom(), messageActionType.removeAction(),JSON.stringify(sendObject));
                socketPromise.addNewOpenID(message.getMessageID());
                socket.sendMessage(message.buildRequest());
                tmpRoom = null;
            }
        }
        else if(classType == "cabinet"){
            if(action == "new"){
                //nothing to request but stuff to send
                var sendObject = new Object();
                sendObject.cabinetLetter = tmpCabinet.getCabinetLetter();
                sendObject.cabinetRoomID = tmpCabinet.getCabinetRoomID();
                sendObject.cabinetRowCount = tmpCabinet.getCabinetRowCount();
                message = new Message(messageType.getDataCode(), messageSubType.getDataCabinet(), messageActionType.newAction(), JSON.stringify(sendObject));
                socketPromise.addNewOpenID(message.getMessageID());
                socket.sendMessage(message.buildRequest());
                tmpCabinet =  null; //remove old object
            }
            if(action == "all"){
                message = new Message(messageType.getDataCode(), messageSubType.getDataCabinet(), messageActionType.loadAction(),"");
                socketPromise.addNewOpenID(message.getMessageID());
                socket.sendMessage(message.buildRequest());
            }
            if(action == "remove"){
                var sendObject = new Object();
                sendObject.id = tmpCabinet.getID();
                message = new Message(messageType.getDataCode(), messageSubType.getDataCabinet(), messageActionType.removeAction(),JSON.stringify(sendObject));
                socketPromise.addNewOpenID(message.getMessageID());
                socket.sendMessage(message.buildRequest());
                tmpCabinet = null;
            }
        }
        else if(classType == "cabinetrow"){
            if(action == "new"){
                //nothing to request but stuff to send
                var sendObject = new Object();
                sendObject.cabinetrowLetter = tmpCabinetRow.getCabinetRowLetter();
                sendObject.cabinetrowCabinetID = tmpCabinetRow.getCabinetRowCabinetID();
                sendObject.cabinetrowRowCount = tmpCabinetRow.getCabinetRowRowCount();
                message = new Message(messageType.getDataCode(), messageSubType.getDataCabinetRow(), messageActionType.newAction(), JSON.stringify(sendObject));
                socketPromise.addNewOpenID(message.getMessageID());
                socket.sendMessage(message.buildRequest());
                tmpCabinetRow =  null; //remove old object
            }
            if(action == "all"){
                message = new Message(messageType.getDataCode(), messageSubType.getDataCabinetRow(), messageActionType.loadAction(),"");
                socketPromise.addNewOpenID(message.getMessageID());
                socket.sendMessage(message.buildRequest());
            }
            if(action == "remove"){
                var sendObject = new Object();
                sendObject.id = tmpCabinetRow.getID();
                message = new Message(messageType.getDataCode(), messageSubType.getDataCabinetRow(), messageActionType.removeAction(),JSON.stringify(sendObject));
                socketPromise.addNewOpenID(message.getMessageID());
                socket.sendMessage(message.buildRequest());
                tmpCabinetRow = null;
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
        latestErrorMessage = reason;
        router.navigate("error");
    }
    
    this.handleIncommingDataRequest = function(handleClassType, messageID ,data){
        //add messageID to socketPromise (check if answer for request is there)
        socketPromise.addReceivedID(messageID);
        
        //check if classtype is room
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
        //check if classtype is dossier
        else if(handleClassType == "dossier"){
            for(var key in data){
                if(key.search(/([0-9])+/) != -1){
                    var obj = JSON.parse(data[key]);
                    var mdl = new modelDossier();
                    mdl.createDossier(obj.id,obj.name,obj.archive,obj.use,obj.created);
                    //this.add
                }
            }
        }
        //check if classtype is cabinet
        else if(handleClassType == "cabinet"){
            for(var key in data){
                if(key.search(/([0-9])+/) != -1){
                    var obj = JSON.parse(data[key]);
                    var model = new modelCabinet();
                    model.createCabinet(obj.id,obj.idLetter,obj.roomID,obj.rowCount);
                    this.addCabinet(model);
                }
            }
        }
        //check if classtype is cabinetrow
        else if(handleClassType == "cabinetrow"){
            for(var key in data){
                if(key.search(/([0-9])+/) != -1){
                    var obj = JSON.parse(data[key]);
                    var model = new modelCabinetRow();
                    model.createCabinetRow(obj.id,obj.idLetter,obj.cabinetID,obj.rowCount);
                    this.addCabinetRow(model);
                }
            }
        }
        
        else if(handleClassType == "task"){
            
        }
    }
}