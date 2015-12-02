
function Message(){
	
	this.messageType ="";
	this.messageSubType = "";
	this.message="";
	
	this.createMessage = function(messageType, messageSubType, message){
		this.messageType = messageType;
		this.messageSubType = messageType;
		this.message = message;
	}
	
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
	
}