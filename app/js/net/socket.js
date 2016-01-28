function Socket(){
	
	/**
	* Variable
	*/
	var self = this;
	var connection = null;
	var output = "";
	var connectionRdy = false;
	var messageStack = [];
	var messageParser = null;
	
	/**
	* Private Functions
	*/
	var _onOpen = function(event){
            console.log("[SOCKET]:[CONNECTED TO WS]");
            //self.sendMessage("HEY");
	}
	
	var _onClose = function(event){
            console.log("[SOCKET]:[CONNECTION CLOSED]");
	}
	
        var _onMessage = function(event){
            messageParser.addMessage(event.data);
            console.log(event.data);
        }
	
	/**
	* Public Functions
	*/ 
	
	this.init = function(uri, messageparser){
                messageParser = messageparser;
		this.connection = new WebSocket(uri); 
	
		this.connection.onopen = function(event){
                    _onOpen(event);
		}
	
		this.connection.onclose = function(event){
                    _onClose(event);
		}
                
                this.connection.onmessage = function(event){
                    _onMessage(event);
                }
	}
	
	this.sendMessage = function(message){
		messageStack.push(message);
		if(self.connection.readyState == 1){
			self.connection.send(messageStack.pop());
		}
		
		//check if there are some messages in stack
		if(self.connection.readyState == 1){
			if(messageStack.length > 0){
			for(var i = 0; i < messageStack.length; i++){	
					self.connection.send(messageStack.pop());	
				}	
			}
		}		
	}
	
	this.getMessageStack = function(){
		return messageStack;
	}
	
	this.backgroundWorker = function(){
		if(messageStack.length > 0){
			if(self.connection.readyState == 1){
			self.connection.send(messageStack.pop());	
			}	
		}
	}
}