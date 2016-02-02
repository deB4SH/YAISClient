function MessageParser(){
    
    /**
     * Private
     */
    var messagePool = new Array();
    var instanceHandler = null;
    
    
    /**
     * Public
     */
    
    this.linkInstanceHandler = function(handleInstanceHandler){
        instanceHandler = handleInstanceHandler;
    }
    
    this.addMessage = function(message){
        messagePool.push(message);
    }
    
    /**
     * cron task to work throgh messages in pool
     * @returns {undefined}
     */
    this.parseMessages = function(){
        //check if there is message in the open pool
        
        //insert into instancehandler
        if(messagePool.length > 0){
            var current = JSON.parse(messagePool.pop());
            
            if(current.error){
                console.log("error");
                //console.log(current);
                instanceHandler.handleIncommingError(current.messageID, current.error);
            }
            else if(current.response){
                console.log("response");
                console.log(current);
                var dbO = JSON.parse(current.response);
                instanceHandler.handleIncommingDataRequest(dbO.classType,current.messageID,dbO);
            }
            else{
                console.log("something gone wrong here");
            }
        }
    }
    
    
}