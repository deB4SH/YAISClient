
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
        
        this.sendLogin = function(){
            //get login credentials and create userdata from it
            var u = document.getElementById("inputUsername").value;
            var p = document.getElementById("inputPassword").value;
            this.newUser(u,p);
            //send data to server
            
            var messageType = new MessageType();
            var messageSubType = new MessageSubType();
            var messageActionType = new MessageActionType();
            
            var message = new Message(messageType.getUserCode(), messageSubType.getUserLogon(), "", JSON.stringify(JSONobject));
            socket.sendMessage(message.buildRequest());   
        }
        
        this.sendRegister = function(){
            //get login credentials and create userdata from it
            var u = document.getElementById("inputUsername").value;
            var p = document.getElementById("inputPassword").value;
            this.newUser(u,p);
            //send data to server
            
            var messageType = new MessageType();
            var messageSubType = new MessageSubType();
            var messageActionType = new MessageActionType();
            
            var message = new Message(messageType.getUserCode(), messageSubType.getUserRegistration(), "", JSON.stringify(JSONobject));
            socket.sendMessage(message.buildRequest());   
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