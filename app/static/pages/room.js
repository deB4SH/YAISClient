
function templateRoom(){
    var baseTemplate = "\n\
                        <button type='button' id='btnRoomNew'>New Room</button> \n\
                        <button type='button' id='btnRoomAll'>Display all Rooms</button> \n\
                        <button type='button' id='btnRoomRem'>Remove Room</button>\n\
                        <br\><br\>\n\
                        {{data}}";
    
    this.getTemplate = function(){
        return baseTemplate;
    }
}

function room_NewRoom(){
    router.navigate("room$new");
}

function room_AllRoom(){
    router.navigate("room$all");
}

function room_RemRoom(){
    router.navigate("room$remove");
}
