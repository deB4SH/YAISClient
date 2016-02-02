
function templateSocketPromise(){
    var baseTemplate = "WAITING\n\
                        <br\><br\>\n\
                        Sorry for the waiting time, but we need to wait for the following packages.<br /><br />\n\
                        {{data}}";
    
    this.getTemplate = function(){
        return baseTemplate;
    }
}

