/**
 * app/js/route.js
 * -Class for the route
 * -- contains informations about the subinformations and functions
 * -- contains handle to switch page content
 */
function Route(){
	this.name = "";
	this.behavior = function(){};
	
	this.createRoute = function(name, behavior){
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