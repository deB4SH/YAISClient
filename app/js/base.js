/**
 * app/js/base.js
 * -Class for runtime creation
 * -- creates basic routes 
 * -- creates websocket
 * -- connects websocket
 * -- boot the application
 */
function Base(){
	this.router = null;
	this.socket = null;
	
	/**
	 * create the baseutils and get the router reference to manage all routes
	 */
	this.createBase = function(router, socket){
		this.router = router;
		this.socket = socket;
	}
	
	/**
	 * create all default application routes
	 * also creates the basic functions to change the page content
	 */
	this.setup = function(){
            
            console.log("[DEBUG]:creating Router and setting up routes");
            
            var loginRoute = new Route();
            var loginFunction = function(){};
            var loginTemplate = new templateLogin();
            var loginPostUpdate = function(){};
            var loginAquireData = function(){
                if(window.location.hash.indexOf("$")){
                    subAction = window.location.hash.split("$")[1];
                    if(subAction == "success"){
                        var data = { data: instanceHandler.getUser().getUsername(), };
                        return data;
                    }
                }
                return "";
            };
            loginRoute.createRoute("login",loginFunction,loginTemplate,loginPostUpdate,loginAquireData);
            this.router.addRoute(loginRoute);
            
            var welcomeRoute = new Route();
            var welcomeFunction = function(){};
            var welcomeTemplate = new templateWelcome();
            var welcomePostUpdate = function(){};
            var welcomeAquireData = function(){};
            welcomeRoute.createRoute("welcome",welcomeFunction,welcomeTemplate,welcomePostUpdate,welcomeAquireData);
            this.router.addRoute(welcomeRoute);
            
            var registerRoute = new Route();
            var registerFunction = function (){ };
            var registerTemplate = new templateRegister();
            var registerPostUpdate = function () {};
            var registerAquireData = function(){
                if(window.location.hash.indexOf("$")){
                    subAction = window.location.hash.split("$")[1];
                    if(subAction == "success"){
                        var data = { data: instanceHandler.getUser().getUsername(), };
                        return data;
                    }
                }
                return "";
            }
            registerRoute.createRoute("register",registerFunction,registerTemplate,registerPostUpdate,registerAquireData);
            this.router.addRoute(registerRoute);
            
            var roomRoute = new Route();
            var roomFunction = function(){ };
            var roomTemplate = new templateRoom();
            var roomPostUpdate = function(){
                 document.getElementById("btnRoomNew").onclick = room_NewRoom;
                 document.getElementById("btnRoomAll").onclick = btnRoom_all;
                 document.getElementById("btnRoomRem").onclick = room_RemRoom;
                 
                 if(window.location.hash.indexOf("$")){
                    subAction = window.location.hash.split("$")[1];
                    if(subAction == "all"){
                        //get all template data for rooms
                        var roomList = instanceHandler.getAllRoom();
                        var modelTemplate = new templateModelRoom();
                        var anchor = document.getElementById("roomAnchor");                        
                        for(var i = 0; i < roomList.length; i++){
                            var span = document.createElement("span");
                            var oData = { roomID: roomList[i].getID(), roomLocation: roomList[i].getLocation(), }
                            span.id = "room-content-"+i;
                            span.innerHTML = Mustache.render(modelTemplate.getTemplate("list"), oData);
                            anchor.parentNode.appendChild(span);
                        }       
                    }
                }
            };
            var roomAquireData = function(){
                if(window.location.hash.indexOf("$")){
                    subAction = window.location.hash.split("$")[1];
                    if(subAction == "all"){
                       
                    }
                }
                return "";
            };
            roomRoute.createRoute("room",roomFunction,roomTemplate,roomPostUpdate,roomAquireData);
            this.router.addRoute(roomRoute);

            var cabinetRoute = new Route();
            var cabinetFunction = function(){ };
            var cabinetTemplate = new templateCabinet();
            var cabinetPostUpdate = function(){
                 document.getElementById("btnCabinetNew").onclick = cabinet_NewCabinet;
                 document.getElementById("btnCabinetAll").onclick = btnCabinet_all;
                 document.getElementById("btnCabinetRem").onclick = cabinet_RemCabinet;
                 
                 if(window.location.hash.indexOf("$")){
                    subAction = window.location.hash.split("$")[1];
                    if(subAction == "all"){
                        //get all template data for rooms
                        var cabinetList = instanceHandler.getAllCabinet();
                        var modelTemplate = new templateModelCabinet();
                        var anchor = document.getElementById("cabinetAnchor");                        
                        for(var i = 0; i < cabinetList.length; i++){
                            var span = document.createElement("span");
                            var oData = { cabinetID: cabinetList[i].getID(), cabinetIDLetter: cabinetList[i].getCabinetLetter() ,cabinetRoomID: cabinetList[i].getCabinetRoomID(), cabinetRowCount: cabinetList[i].getCabinetRowCount(), }
                            span.id = "cabinet-content-"+i;
                            span.innerHTML = Mustache.render(modelTemplate.getTemplate("list"), oData);
                            anchor.parentNode.appendChild(span);
                        }       
                    }
                }
            };
            var cabinetAquireData = function(){
                if(window.location.hash.indexOf("$")){
                    subAction = window.location.hash.split("$")[1];
                    if(subAction == "all"){
                       
                    }
                }
                return "";
            };
            cabinetRoute.createRoute("cabinet",cabinetFunction,cabinetTemplate,cabinetPostUpdate,cabinetAquireData);
            this.router.addRoute(cabinetRoute);

            var loginRoute = new Route();
            var loginFunction = function(){ };
            var loginTemplate = new templateLogin();
            var loginPostUpdate = function(){ };
            var loginAquireData = function(){};
            loginRoute.createRoute("login",loginFunction,loginTemplate,loginPostUpdate,loginAquireData);
            this.router.addRoute(loginRoute);

            var errorRoute = new Route();
            var errorFunction = function (){ };
            var errorTemplate = new templateERROR();
            var errorPostUpdate = function () { };
            var errorAquireData = function(){
                var data = {data: instanceHandler.getLatestErrorMessage(),};
                return data;
            };
            errorRoute.createRoute("error",errorFunction,errorTemplate,errorPostUpdate,errorAquireData);
            this.router.addRoute(errorRoute);


            //socket
            this.router.linkSocket(this.socket);
		
		
	}
	
}