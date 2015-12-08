
function userCreation(socket, messageType, messageSubType){

	this.socket = socket;
	this.messageType = messageType;
	this.messageSubType = messageSubType;
		
	this.createTestUser = function(){
		var user1 = new mdlUser();
		user1.createUser("GuentherAlaf","123123");
		var message1 = new Message(messageType.getUserCode(),messageSubType.getUserRegistration(),user1.getJSON());	
		var user2 = new mdlUser();
		user2.createUser("PeterLustig","123123");
		var message2 = new Message(messageType.getUserCode(),messageSubType.getUserRegistration(),user2.getJSON());
		var user3 = new mdlUser();
		user3.createUser("NicoLaus","123123");
		var message3 = new Message(messageType.getUserCode(),messageSubType.getUserRegistration(),user3.getJSON());
		
		//FIRE
		socket.sendMessage(message1.buildRequest());
		socket.sendMessage(message2.buildRequest());
		socket.sendMessage(message3.buildRequest());
	}

}