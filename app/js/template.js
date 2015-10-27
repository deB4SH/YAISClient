
function Template(){
	
	this.baseTemplate = "";
	
	this.createBaseTemplate = function(baseTemplate){
		this.baseTemplate = baseTemplate;
	}
	
	this.getBaseTemplate = function(){
		return this.baseTemplate;
	}
	
	/**
	 * gets a templatedata (single set)
	 * replace data in baseTemplate with key and value from set
	 */
	this.getOutput = function(handleData){
		if(handleData instanceof Array){
			for(var i = 0; i < handleData.length; i++){
				var template = this.baseTemplate;
				template.replace("{" + handleData[i].getKey() + "}", handleData[i].getData());
			}
		}
		else{
			Console.log("ERROR-Template: something went wrong with the array here")
		}
		
	}
}