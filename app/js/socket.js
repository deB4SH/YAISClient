function Socket(){
	
	/**
	 * Variable
	 */
	var connection = socket;
	
	/**
	 * Public Functions
	 */	
	this.createSocket = function(handleSocket){
		connection = handleSocket;
		
		connection.onopen = function(){
			connection.send("PING");
		}
		
	}
	
	
	
	
	/**
	 * Private Functions
	 */
	
}

/**
 * var connection = new WebSocket('ws://127.0.0.1:60000');
connection.onopen = function(){
      connection.send("PING");
 */