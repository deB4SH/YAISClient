
function socketPromise(){
    
    /**
     * private fields and functions
     */
    var openIDList = new Array();
    var closedIDList = new Array();
    
    
    /**
     * public fields and functions
     */
    
    this.clearList = function(){
        openIDList = new Array();
        closedIDList = new Array();
    }
    
    this.addNewOpenID = function(handleID){
        openIDList.push(handleID);
    }
    
    this.isPromiseInProgress = function(){
        if(openIDList.length > 0){
            return true;
        }
        else{
            return false;
        }
    }
    
    this.isPromiseFullfilled = function(){
        var checkCounter = 0;
        for(var i=0; i < openIDList.length; i++){
            for(var j=0; j < closedIDList.length; j++){
                if(closedIDList[j] == openIDList[i]){
                    checkCounter = checkCounter + 1;
                }
            }
        }
        
        if(checkCounter == openIDList.length){
            return true;
            clearList();
        }
        else{
            return false;
        }
    }
    
}