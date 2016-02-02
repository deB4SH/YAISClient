
function mdlUser(){
	
	var username = "";
	var password= ""; //TODO: find some encryption for this
	var JSONobject = new Object();
        var socket = null;
        var serverSession = null; //user is anon until there is a serverSession
	
	this.newUser = function(handleusername, handlepassword){
		username = handleusername;
		password = handlepassword;
		JSONobject.username = username;
		JSONobject.password = this.hashPassword();
	}
	
        this.initAnon = function(){
            username = "anonymous";
            password = "anonymous";
        }
        
	this.getJSON = function(){
            return JSON.stringify(JSONobject);
	}
        
        this.getUsername = function(){
            return username;
        }
        
        this.getPassword = function(){
            return password;
        }
        
        this.hashPassword = function(){
            return md5(password);
        }
        
        this.isUserAnon = function(){
            if(username == "anonymous"){
                return true;
            }
            else{
                return false;
            }
        }
        
        this.linkSocket = function(handleSocket){
            socket = handleSocket;
        }
}