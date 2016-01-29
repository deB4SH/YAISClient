
function templateSocketPromise(){
    var baseTemplate = "\n\
                        <br\><br\>\n\
                        {{data}}";
    
    this.getTemplate = function(){
        return baseTemplate;
    }
}

