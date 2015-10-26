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
	this.createBase = function(router,socket){
		this.router = router;
		this.socket = socket;
	}
	
	/**
	 * create all default application routes
	 * also creates the basic functions to change the page content
	 */
	this.setup = function(){
		//create Router
		var routeCheck = new Route();
		var checkFunc = function(){
      		alert("check");
		}
		routeCheck.createRoute("check",checkFunc);

		var routeAbout = new Route();
		var aboutFunc = function(){
			
		}
		routeAbout.createRoute("about",aboutFunc);
		
		this.router.addRoute(routeAbout);
		this.router.addRoute(routeCheck);
		
		this.socket.createSocket(new WebSocket('ws://127.0.0.1:60000'));
	}
	
}