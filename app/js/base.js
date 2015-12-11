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
            var loginFunction = function(){}
            var loginTemplate = new templateLogin().getBaseTemplate();
            loginRoute.createRoute("login",loginFunction,loginTemplate);
            this.router.addRoute(loginRoute);
            
            var welcomeRoute = new Route();
            var welcomeFunction = function(){};
            var welcomeTemplate = new templateWelcome().getBaseTemplate();
            welcomeRoute.createRoute("welcome",welcomeFunction,welcomeTemplate);
            this.router.addRoute(welcomeRoute);
            

            //socket
            this.router.linkSocket(this.socket);
		
		
	}
	
}