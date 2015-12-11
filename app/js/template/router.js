/**
 * app/js/router.js
 * -Class for routing information 
 * -- contains x-many routings
 * -- handles page updates based on url
 * -- contains job that runs on interval (listen)
 */
function Router(){
	
	var currentPage = null;
	var routes = null;
	var root = "/";
	var limiter = "#";
	var mode = null;
	var socket = null;
	var regex = /(#[A-Z]*)\w+/g;
        var lastPage = null;
	
	
	this.createRouter = function(handleHistory){
		routes = [];
		mode = handleHistory;
		root = window.location.href;
		currentPage = root;
		lastPage = root;
	}
	
	this.linkSocket = function(handlesocket){
            socket = handlesocket;
	}
	
	this.addRoute = function(handleRoute){
            routes.push(handleRoute);
	}
	
	this.removeRoute = function(handleName){
            for(var i = 0; i < routes.length; i++){
                    if(routes[i].getName() === handleName){
                            routes.splice(i,1);
                    }
            }
	}
	
	this.navigate = function(handlePath){
            if(handlePath != ""){
                    root = root.split("#")[0];
                    var found = false;
                    for(var i = 0; i < routes.length; i++){
                            if(routes[i].getName() == handlePath){
                                    history.pushState({},document.title, root + limiter + handlePath);
                                    currentPage = window.location.href;
                                    found = true;
                            }
                    }
                    if(!found){
                            console.log("ERROR: CANNOT FIND PAGE - ERROR ON REQ.-PATH: " + handlePath);
                    }
            }
            else{
                    history.pushState({},document.title,root);
            }
	}
	
	
	/*
	 * Job Functions
	 */
	this.listen = function(){	
            var currentPage = window.location.href + "";
            if(lastPage !== currentPage){
                    var currentCall = regex.exec(currentPage)[0].replace("#","");
                    console.log(currentCall);
                    for(var i = 0; i < routes.length; i++){
                            if(routes[i].getName() == currentCall){
                                    //change lastPage
                                    lastPage = window.location.href + "";
                                    //TODO: requesting new data from socket (if exists)

                                    //TODO: process data

                                    //TODO: behavior on each page
                                    routes[i].behavior();

                                    //TODO: render Outcome
                                    routes[i].updateWeb();
                                    
                                    
                            }
                    }
            }
	}
	
}