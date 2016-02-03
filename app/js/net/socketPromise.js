
function socketPromise(){
    
    /**
     * private fields and functions
     */
    var openIDList = new Array();
    var closedIDList = new Array();
    var fulfillmentFunction = function(){};
    
    
    /**
     * public fields and functions
     */
    
    this.setfulfillmentFunction = function(handleFunction){
        fulfillmentFunction = handleFunction;
    }
    
    this.clearList = function(){
        openIDList = new Array();
        //closedIDList = new Array();
    }
    
    this.addNewOpenID = function(handleID){
        openIDList.push(handleID);
    }
    
    this.addReceivedID = function(handleID){
        closedIDList.push(handleID);
    }
    
    this.isPromiseInProgress = function(){
        if(openIDList.length > 0){
            return true;
        }
        else{
            return false;
        }
    }
    
    /**
     * Checks if the promise is fulfilled
     * @returns {Boolean}
     */
    this.isPromiseFullfilled = function(){
        if(openIDList.length > 0){
            var checkCounter = 0;
            for(var i=0; i < openIDList.length; i++){
                for(var j=0; j < closedIDList.length; j++){
                    if(closedIDList[j] == openIDList[i]){
                        checkCounter = checkCounter + 1;
                    }
                }
            }
            if(checkCounter == openIDList.length){
                this.clearList();
                fulfillmentFunction();
                return true;
            }
            else{
                return false;
            }
        }
        return true;
    }
    
    this.whichTicketIsOpen = function(){
        var openTicketList = new Array();
        for(var i=0; i < openIDList.length; i++){
            var boolIsIn = false;
            for(var j=0; j < closedIDList.length; j++){
                if(openIDList[i] == closedIDList[j]){
                    boolIsIn = true;
                }
            }
            if(!boolIsIn){
                openTicketList.push(openIDList[i]);
            }
        }
        return openTicketList;
    }
    
}