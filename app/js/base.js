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
            var loginAquireData = function(){};
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
            var registerPostUpdate = function () { };
            registerRoute.createRoute("register",registerFunction,registerTemplate,registerPostUpdate,function(){});
            this.router.addRoute(registerRoute);
            
            var roomRoute = new Route();
            var roomFunction = function(){ };
            var roomTemplate = new templateRoom();
            var roomPostUpdate = function(){
                 document.getElementById("btnRoomNew").onclick = room_NewRoom;
                 document.getElementById("btnRoomAll").onclick = btnRoom_all;
                 document.getElementById("btnRoomRem").onclick = room_RemRoom;
            };
            var roomAquireData = function(){};
            roomRoute.createRoute("room",roomFunction,roomTemplate,roomPostUpdate,roomAquireData);
            this.router.addRoute(roomRoute);

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
                
            };
            errorRoute.createRoute("error",errorFunction,errorTemplate,errorPostUpdate,errorAquireData);
            this.router.addRoute(errorRoute);


            //socket
            this.router.linkSocket(this.socket);
		
		
	}
	
}