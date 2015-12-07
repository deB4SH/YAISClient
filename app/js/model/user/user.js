
function mdlUser(){
	
	this.username = "";
	this.password= ""; //TODO: find some encryption for this
	this.JSONobject = new Object();
	
	this.createUser = function(username, password){
		this.username = username;
		this.password = password;
		this.JSONobject.username = username;
		this.JSONobject.password = password;
	}
	
	this.getJSON = function(){
		return JSON.stringify(this.JSONobject);
	}
}