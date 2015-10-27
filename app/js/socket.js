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