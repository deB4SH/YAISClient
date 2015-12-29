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
        this.postUpdateWeb = function(){};
        
	
	this.createRoute = function(name, behavior, template, postUpdate){
		this.name = name;
		this.behavior = behavior;
		this.template = template;
                this.postUpdateWeb = postUpdate;
	}
	
	this.getName = function(){
		return this.name;
	}
	
	this.getBehavior = function(){
		return this.bahavior;
	}
        
        this.runPostUpdateWeb = function(){
            this.postUpdateWeb();
        }
	
	this.getBaseTempalte = function(state){
		return this.template.getTemplate(state);
	}
	
	/**
	 * handleDataset is an array of templatedata
	 */
	this.renderTemplate = function(state, data){
            var render = Mustache.render(this.getBaseTempalte(state), data);
            //console.log(render);
            return render;
            
	}
	
	/**
	 * change contents on webpage
	 */
	this.updateWeb = function(state, data){
		var anchor = document.getElementById("main-text");
		var span = document.createElement("span");
                span.id = "main-text";
		span.innerHTML = this.renderTemplate(state, data);
		anchor.parentNode.replaceChild(span,anchor);
	}

}