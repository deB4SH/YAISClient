function MessageParser(){
    
    var messagePool = new Array();
    
    this.addMessage = function(message){
        messagePool.push(message);
    }
    
    /**
     * cron task to work throgh messages in pool
     * @returns {undefined}
     */
    this.parseMessages = function(){
        if(messagePool.length > 0){
            
            var current = JSON.parse(messagePool.pop());
            console.log(current);
            
        }
    }
    
    
}