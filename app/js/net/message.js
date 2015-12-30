
function Message(messageType, messageSubType, messageActionType, message){
	
        this.generateMessageID = function(){
            return Math.random().toString(36).substring(7);
        }
        
	this.messageType = messageType;
	this.messageSubType = messageSubType;
        this.messageActionType = messageActionType;
	this.message= message;
        this.messageID = this.generateMessageID();
	
	this.buildRequest = function(){
		var requestObj = new Object();
		requestObj.messageType = this.messageType;
		requestObj.messageSubType = this.messageSubType;
                requestObj.messageActionType = this.messageActionType;
                requestObj.messageID = this.messageID;
		requestObj.message = this.message;
		
		var request = JSON.stringify(requestObj);
		return request;
	}
	
	this.restoreFromJson = function(handleJson){
		
	}
        
        this.getMessageID = function(){
            return this.messageID;
        }
	
}