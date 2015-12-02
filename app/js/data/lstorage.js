/**
 * app/js/lstorage.js
 * - simple wrapper for localstorage and extensions
 */
function LStorage(){
	
	this.createItem = function(key,value,timed){
		localStorage.setItem(key,value);
		if(timed){
			localStorage.setItem("timed-"+key,Date.getTime());
		}
		else{
			localStorage.setItem("timed-"+key,"false");
		}
	}
	
	this.getItem = function(key){
		return localStorage.getItem(key);
	}
	
	this.updateItem = function(key, value, timed){
		if(value === this.getItem(key)){
			Console.log("INFO-LS: item equals ls - check timestampt next");
			if(this.getItem("timed-"+key) != "false"){
				localStorage.setItem("timed-"+key,Date.getTime());
			}
		}
		else{
			this.removeItem(key);
			this.createItem(key,value,timed);
		}
	}
	
	this.removeItem = function(key){
		localStorage.removeItem(key);
	}
}