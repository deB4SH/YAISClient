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
		
		var aboutTemplate = "Single origin crema acerbic, skinny lungo froth beans french press fair trade that. Wings aftertaste ristretto milk whipped single shot, turkish dripper acerbic frappuccino black. Fair trade qui crema, skinny extraction extra wings extra café au lait pumpkin spice. Filter rich and dripper milk half and half aged. Aftertaste mug french press dark, a and froth dark black mocha.Skinny cream, sweet blue mountain steamed to go foam ristretto. Frappuccino plunger pot foam ristretto spoon cappuccino robusta. Americano, medium brewed a, caffeine kopi-luwak espresso robust grounds. Cinnamon medium froth, bar to go eu turkish steamed aftertaste kopi-luwak. Flavour foam grounds dripper flavour acerbic steamed viennese.";
		
		routeAbout.createRoute("about",aboutFunc,aboutTemplate);
		
		this.router.addRoute(routeAbout);
		this.router.addRoute(routeCheck);
		
		//socket
		this.socket.createSocket(new WebSocket('ws://127.0.0.1:60000'));
		this.router.linkSocket(this.socket);
		
		
	}
	
}