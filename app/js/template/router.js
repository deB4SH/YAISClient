/**
 * app/js/router.js
 * -Class for routing information 
 * -- contains x-many routings
 * -- handles page updates based on url
 * -- contains job that runs on interval (listen)
 */
function Router(){
	
    //private
    var currentPage = null;
    var routes = null;
    var root = "/";
    var limiter = "#";
    var mode = null;
    var socket = null;
    var lastPage = null;
    var lastAction = null;
    var self = this;
    var instanceHandler = null;
    var socketPromise = null;
    //public
    this.subregex = new RegExp(/(_[A-Z]*)\w+/g);
        	
    this.createRouter = function(handleHistory){
        routes = [];
        mode = handleHistory;
        root = window.location.href;
        currentPage = root;
        lastPage = root;
        lastAction = null;
    }

    this.linkInstanceHandler = function(handleIH){
        instanceHandler = handleIH;
    }

    this.linkSocketPromise = function(handlePromise){
        socketPromise = handlePromise;
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

    this.getRoutes = function(){
        return routes;
    }

    this.navigate = function(handleReqPath){
        var handlePath = "";
        var subAction = "empty";
        if(handleReqPath.indexOf("$")){
            handlePath = handleReqPath.split("$")[0];
            subAction = handleReqPath.split("$")[1];
        }
        else{
            handlePath = handleReqPath;
        }
        if(handlePath != ""){
                root = root.split("#")[0];
                var found = false;
                for(var i = 0; i < routes.length; i++){
                        if(routes[i].getName() == handlePath){
                                if(subAction == "empty" || typeof subAction == 'undefined'){
                                    history.pushState({},document.title, root + limiter + handlePath);
                                }
                                else{
                                    history.pushState({},document.title, root + limiter + handlePath + "$" + subAction);
                                }
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

    this.loadCurrent = function(){
        var currentCall = window.location.hash.replace("#","")
        for(var i = 0; i < routes.length; i++){
            if(routes[i].getName() == currentCall){
                routes[i].behavior();
                routes[i].updateWeb();
            }
        }
    }

    /*
     * Job Functions
     */
    this.listen = function(){	
        var currentPage = "";
        var subAction = "";
        if(window.location.hash.indexOf("$")){
            currentPage = window.location.hash.split("$")[0];
            subAction = window.location.hash.split("$")[1];
        }
        else{
            currentPage = window.location.hash;
        }


        if(lastPage !== currentPage && socketPromise.isPromiseInProgress() === false || lastAction !== subAction && socketPromise.isPromiseInProgress() === false){
                var currentCall = currentPage.replace("#","");
                for(var i = 0; i < routes.length; i++){
                        if(routes[i].getName() == currentCall){
                                //change lastPage
                                lastPage = currentPage;
                                lastAction = subAction;
                                //request new data AND dont request new data if is requested

                                //base behavior (alerts, pre render stuff
                                routes[i].behavior(subAction);
                                //render webpage

                                //state, data
                                routes[i].updateWeb(subAction, "");
                                //run the post update
                                routes[i].runPostUpdateWeb();
                        }
                }
        }
        else if(socketPromise.isPromiseInProgress() && lastPage == currentPage && lastAction == subAction){
                var waitingTemplate = new templateSocketPromise();
                //display temp page for waiting purpose
                var anchor = document.getElementById("main-text");
		var span = document.createElement("span");
                span.id = "main-text";
                var data = { data: socketPromise.whichTicketIsOpen(), };
		span.innerHTML = Mustache.render(waitingTemplate.getTemplate(), data);
		anchor.parentNode.replaceChild(span,anchor);
        }
        
        //send this value into /dev/null 
        var devNull = socketPromise.isPromiseFullfilled();
    }
}