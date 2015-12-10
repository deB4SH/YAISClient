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
            var outputTemplate = "";
            if(handleDataset instanceof Array){
                for(var i=0; i < handleDataset.length; i++){
                        outputTemplate += this.template.getOutput(handleDataset[i]);
                }	
            }
            console.log(outputTemplate);
            return outputTemplate;
	}
	
	/**
	 * change contents on webpage
	 */
	this.updateWeb = function(handleDataset){
		var anchor = document.getElementById("main-text");
		var span = document.createElement("span");
                span.id = "main-text";
                console.log(span);
		span.innerHTML = this.renderTemplate(handleDataset);
		anchor.parentNode.replaceChild(span,anchor);
	}
}