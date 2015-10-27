
function TemplateData(){
	
	this.key = [];
	this.data = [];
	
	this.addTemeplateData = function(key,data){
		this.key.push(key);
		this.data.push(data);
	}
	
	this.getKey = function(){
		return this.key;
	}
	
	this.getData = function(){
		return this.data;
	}
	
	
}