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
            loginRoute.createRoute("login",loginFunction,loginTemplate,loginPostUpdate);
            this.router.addRoute(loginRoute);
            
            var welcomeRoute = new Route();
            var welcomeFunction = function(){};
            var welcomeTemplate = new templateWelcome();
            var welcomePostUpdate = function(){};
            welcomeRoute.createRoute("welcome",welcomeFunction,welcomeTemplate,welcomePostUpdate);
            this.router.addRoute(welcomeRoute);
            
            
            var roomRoute = new Route();
            var roomFunction = function(){ };
            var roomTemplate = new templateRoom();
            var roomPostUpdate = function(){
                 document.getElementById("btnRoomNew").onclick = room_NewRoom;
                 document.getElementById("btnRoomAll").onclick = room_AllRoom;
                 document.getElementById("btnRoomRem").onclick = room_RemRoom;
            };
            roomRoute.createRoute("room",roomFunction,roomTemplate,roomPostUpdate);
            this.router.addRoute(roomRoute);

            var loginRoute = new Route();
            var loginFunction = function(){ };
            var loginTemplate = new templateLogin();
            var loginPostUpdate = function(){ };
            loginRoute.createRoute("login",loginFunction,loginTemplate,loginPostUpdate);
            this.router.addRoute(loginRoute);


            //socket
            this.router.linkSocket(this.socket);
		
		
	}
	
}