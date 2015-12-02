/**
 * app/js/route.js
 * -Class for the route
 * -- contains informations about the subinformations and functions
 * -- contains handle to switch page content
 */
function Route(){
	this.name = "";
	this.behavior = function(){};
	this.template = "";
	
	this.createRoute = function(name, behavior, template){
		this.name = name;
		this.behavior = behavior;
		this.template = template;
	}
	
	this.getName = function(){
		return this.name;
	}
	
	this.getBehavior = function(){
		return this.bahavior;
	}
	
	this.getBaseTempalte = function(){
		return this.template.getBaseTemplate();
	}
	
	/**
	 * handleDataset is an array of templatedata
	 */
	this.renderTemplate = function(handleDataset){
		if(handleDataset instanceof Array){
			var outputTemplate = "";
			for(var i=0; i < handleDataset.length; i++){
				outputTemplate += this.template.getOutput(handleDataset[i]);
			}	
		}
		return outputTemplate;
	}
	
	/**
	 * change contents on webpage
	 */
	this.updateWeb = function(handleDataset){
		var anchor = document.getElementById("main-text");
		var span = document.createElement("span");
		span.innerHTML = this.renderTemplate(handleDataset);
		anchor.parentNode.replaceChild(span,anchor);
	}
}