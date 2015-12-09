
function getAllRoomData(socket, messageType, messageSubType, messageActionType){

	this.socket = socket;
	this.messageType = messageType;
	this.messageSubType = messageSubType;
        this.messageActionType = messageActionType;
        
        
        this.getAllRoomData = function(){
            this.message = new Message(this.messageType.getDataCode(), this.messageSubType.getDataRoom(), this.messageActionType.loadAction(),"");
            this.socket.sendMessage(this.message.buildRequest());
        }

}