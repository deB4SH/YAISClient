/*
	RouterIO
	inspired by 
	http://krasimirtsonev.com/blog/article/A-modern-JavaScript-router-in-100-lines-history-api-pushState-hash-url
*/

function OldRouter(){
	this.currentPage = "";
	this.routes = [];
	this.mode = null;
	this.root = "/";	
	this.interval = null;

	
	this.config = function(options){
		this.mode = options && options.mode && options.mode == 'history' 
                    && !!(history.pushState) ? 'history' : 'hash';
        this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';
        return this;
	}
	
	this.addRoute = function(re, handler){
		if(typeof re == "function"){
			handler = re;
			re = "";
		}
		this.routes.push({re: re, handler: handler});
	}
		
	this.remove = function(handle){
		for(var i = 0, r; i < this.routes.length, r = this.routes[i]; i++){
			if(r.handler === param || r.re.toString() === param.toString()){
				this.routes.splice(i,1);
			}
		}
	}
	
	this.flush = function(){
		this.routes = [];
		this.mode = null;
		this.root = "/";
	}
	
	this.check = function(handle){
		var frag = handle || this.getFragment();
		for(var i=0; i < this.routes.length; i++){
			var match = frag.match(this.routes[i].re);
			if(match){
				match.shift();
				this.routes[i].handler.apply({},match);
				return this;
			}
		}
		return this;
	}
	
	this.listen = function(){
		var self = this;
		console.log(self);
		var current = self.getFragment();
		var fn = function(){
			if(current!= self.getFragment()){
				current = self.getFragment();
				self.check(current);
			}
		}
	}
	
	this.navigate = function(path){
		path = path ? path : "";
		if(this.mode === "history"){
			history.pushState({},document.title,this.root + this.clearSlashes(path));
			this.currentPage = path;
		}
		else{
			window.location.href.match(/#(.*)$/);
            window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
		}
		return this;
	}
	
	this.clearSlashes = function(path){
		return path.toString().replace(/\/$/, "").replace(/^\//,"");
	}
	
	this.getFragment = function(){
		var frag = "";
		if(this.mod === "history"){
			frag = this.clearSlashes(decodeURI(location.pathname + location.search));
			frag = frag.replace(/\?(.*)$/,"");
			frag = this.root != "/" ? frag.replace(this.root, "") : frag;
		}
		else{
			var match = window.location.href.match(/#(.*)$/);
			frag = match ? match[1] : "";
		}
		return this.clearSlashes(frag);
	}
	
	this.getCurrentPage = function(){
		return this.currentPage;	
	}
}