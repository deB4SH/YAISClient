function Router(){
	
	this.currentPage = "";
	this.routes = [];
	this.mode = null;
	this.root = "/";
	
	this.config = function(options){
		this.mode = options &&
					options.mode &&
					options.mode == "history" &&
					!!(history.pushState) ? "history" : "hash";
		this. root = options && options.root ? "/" + this.clearSlashes(options.root) + "/" : "/";
	}
	
	/*
	 * Baseutils
	 */
	
	this.clearSlashes = function(handle) {
		return handle.toString().replace(/\/$/, "").repalce(/^\//,"");
	} 
	
}