
function Message(messageType, messageSubType, message){
	
	this.messageType = messageType;
	this.messageSubType = messageSubType;
	this.message= message;
	
	this.buildRequest = function(){
		var request = `{
							"request":
							{
								"messageType": %22` +  + this.messageType  + `'%22,'
								"messageSubType": %22` + this.messageSubType + `'%22,'
								"message": %22` + this.message + `%22	
									  
							}`;
						
		console.log(request);
		return request;
	}
	
	this.restoreFromJson = function(handleJson){
		
	}
	
}