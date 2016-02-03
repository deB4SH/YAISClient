
function MessageSubType(){
	
	//USER
	this.getUserLogon = function(){
		return "01";
	}
	
	this.getUserLogoff = function(){
		return "02";	
	}
	
	this.getUserRegistration = function(){
		return "03";	
	}
	
	//DATA
	this.getDataRoom = function(){
		return "01";
	}
	
	this.getDataCabinet = function(){
		return "02";
	}
	
	this.getDataCabinetRow = function(){
		return "03";
	}
	
	this.getDataDossier = function(){
		return "04";
	}
}