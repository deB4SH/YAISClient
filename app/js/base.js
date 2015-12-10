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
            //create Router
            var routeCheck = new Route();
            var checkFunc = function(){
                alert("check");
            }
            var checkTemplate = "Single o";
            routeCheck.createRoute("check",checkFunc,checkTemplate);

            var routeAbout = new Route();
            var aboutFunc = function(){
                    alert("running");
            }

            var aboutTemplate = "Single origin";

            routeAbout.createRoute("about",aboutFunc,aboutTemplate);

            this.router.addRoute(routeAbout);
            this.router.addRoute(routeCheck);

            //socket
            this.router.linkSocket(this.socket);
		
		
	}
	
}