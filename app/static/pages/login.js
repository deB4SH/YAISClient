
function templateLogin(){
    
    var baseTemplate = "HOME>LOGIN\n\
                        \n\
                        <button onclick='myFunction()'>Login me</button> \n\
                        ";
    
    this.getBaseTemplate = function(){
        return baseTemplate;
    }
}