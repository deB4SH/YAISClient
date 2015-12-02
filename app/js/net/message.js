
function Message(messageType, messageSubType, message){
	
	this.messageType = messageType;
	this.messageSubType = messageSubType;
	this.message= message;
	
	this.buildRequest = function(){
		var request = `{
							"request":[
										{"messageType": ` + this.messageType  + `},
										{"messageSubType": ` + this.messageSubType + `},
										{"message": ` + this.message + `}	
									  ]
						}`;
						
		return request;
	}
	
	this.restoreFromJson = function(handleJson){
		
	}
	
}