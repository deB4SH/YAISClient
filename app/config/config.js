function Config(){
	
	this.wsAdress = "127.0.0.1";
	this.wsPort = "60000"; 
	
	
	this.getwsAdress = function(){
		return this.wsAdress;
	}
	
	this.getwsPort = function(){
		return this.wsPort;
	}
	
}