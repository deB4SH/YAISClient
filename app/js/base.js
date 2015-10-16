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
	
	/**
	 * create the baseutils and get the router reference to manage all routes
	 */
	this.createBase = function(router){
		this.router = router;
	}
	
	/**
	 * create all default application routes
	 * also creates the basic functions to change the page content
	 */
	this.setup = function(){
		var routeCheck = new Route();
		var checkFunc = function(){
      		alert("check");
		}
		routeCheck.createRoute("check",checkFunc);

		var routeAbout = new Route();
		var aboutFunc = function(){
			alert("about");
		}
		routeAbout.createRoute("about",aboutFunc);
		
		this.router.addRoute(routeAbout);
		this.router.addRoute(routeCheck);
	}
	
}