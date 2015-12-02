/**
 * app/js/sstorage.js
 * - simple wrapper for sessionStorage and extensions
 */
function SStorage(){
	
	this.createItem = function(key,value,timed){
		sessionStorage.setItem(key,value);
		if(timed){
			sessionStorage.setItem("timed-"+key,Date.getTime());
		}
		else{
			sessionStorage.setItem("timed-"+key,"false");
		}
	}
	
	this.getItem = function(key){
		return sessionStorage.getItem(key);
	}
	
	this.updateItem = function(key, value, timed){
		if(value === this.getItem(key)){
			Console.log("INFO-LS: item equals ls - check timestampt next");
			if(this.getItem("timed-"+key) != "false"){
				sessionStorage.setItem("timed-"+key,Date.getTime());
			}
		}
		else{
			this.removeItem(key);
			this.createItem(key,value,timed);
		}
	}
	
	this.removeItem = function(key){
		sessionStorage.removeItem(key);
	}
}