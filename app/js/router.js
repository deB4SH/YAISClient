function Router(){
	
	this.currentPage = null;
	this.routes = null;
	this.root = "/";
	this.limiter = "#";
	this.mode = null;
	
	
	this.createRouter = function(handleHistory){
		this.routes = [];
		this.mode = handleHistory;
		this.root = window.location.href;
		this.currentPage = this.root;
		this.lastJobPage = this.root;
	}
	
	this.addRoute = function(handleRoute){
		this.routes.push(handleRoute);
	}
	
	this.removeRoute = function(handleName){
		for(var i = 0; i < this.routes.length; i++){
			if(this.routes[i].getName() === handleName){
				this.routes.splice(i,1);
			}
		}
	}
	
	this.navigate = function(handlePath){
		if(handlePath != ""){
			var found = false;
			for(var i = 0; i < this.routes.length; i++){
				if(this.routes[i].getName() == handlePath){
					history.pushState({},document.title, this.root + this.limiter + handlePath);
					this.currentPage = window.location.href;
					found = true;
				}
			}
			if(!found){
				console.log("ERROR: CANNOT FIND PAGE - ERROR ON REQ.-PATH: " + handlePath);
			}
		}
		else{
			history.pushState({},document.title,this.root);
		}
	}
	
	
	/*
	 * Job Functions
	 */
	this.lastJobPage = null;
	this.regex = /(#[A-Z]*)\w+/g;
	
	this.listen = function(){
		if(this.lastJobPage != this.currentPage){
			var currentCall = this.regex.exec(this.currentPage)[0].replace("#","");
			for(var i = 0; i < this.routes.length; i++){
				if(this.routes[i].getName() == currentCall){
					this.routes[i].behavior();
				}
			}
		}
	}
	
}