
function Message(messageType, messageSubType, message){
	
	this.messageType = messageType;
	this.messageSubType = messageSubType;
	this.message= message;
	
	this.buildRequest = function(){
		
		var requestObj = new Object();
		requestObj.messageType = this.messageType;
		requestObj.messageSubType = this.messageSubType;
		requestObj.message = this.message;
		
		var request = JSON.stringify(requestObj);
						
		console.log(request);
		return request;
	}
	
	this.restoreFromJson = function(handleJson){
		
	}
	
}