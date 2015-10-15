function Route(){
	this.name = "";
	this.behavior = function(){};
	
	this.createRoute = function(name, behavior){
		
		console.log(name);
		console.log(behavior);
		
		
		this.name = name;
		this.behavior = behavior;
	}
	
	this.getName = function(){
		return this.name;
	}
	
	this.getBehavior = function(){
		return this.bahavior;
	}
	
}