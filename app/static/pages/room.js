
function templateRoom(){
    var baseTemplate = "\n\
                        <button type='button' id='btnRoomNew'>New Room</button> \n\
                        <button type='button' id='btnRoomAll'>Display all Rooms</button> \n\
                        <button type='button' id='btnRoomRem'>Remove Room</button>\n\
                        <br\><br\>\n\
                        {{data}}";
    
    var roomNewTemplate = " \n\
                        <button type='button' id='btnRoomNew'>New Room</button> \n\
                        <button type='button' id='btnRoomAll'>Display all Rooms</button> \n\
                        <button type='button' id='btnRoomRem'>Remove Room</button>\n\
                        <br\><br\> \n\
                        Please enter the following informations. <br/>\n\
                        \n\
                        Location: <input type='text' name='location' id='inputLocation'><br /> \n\
                        <br />\n\
                        <input type='submit' id='inputNewRoomSubmit' value='Submit' onClick='instanceHandler.sendNewRoom()'>\n\
                        ";
    
    var roomSuccessNew =    "<button type='button' id='btnRoomNew'>New Room</button> \n\
                            <button type='button' id='btnRoomAll'>Display all Rooms</button> \n\
                            <button type='button' id='btnRoomRem'>Remove Room</button>\n\ <br/>\n\
                            \n\
                            Room successfully created: {{data}}\n\
                            ";
    
    var roomListTemplate = " \n\
                        <button type='button' id='btnRoomNew'>New Room</button> \n\
                        <button type='button' id='btnRoomAll'>Display all Rooms</button> \n\
                        <button type='button' id='btnRoomRem'>Remove Room</button>\n\
                        <br\><br\> \n\
                        Following Rooms are in the Database <br/> <br />\n\
                        \n\
                        \n\
                        <div class='col-md-12'>\
                        <div class='col-md-2'>\n\
                            ID\n\
                        </div>\n\
                        <div class='col-md-10'>\n\
                            Location\n\
                        </div>\n\
                        </div>\n\
                        <div id='roomAnchor'></div>\n\
                        ";
    
    var roomRemoveTemplate = " \n\
                        <button type='button' id='btnRoomNew'>New Room</button> \n\
                        <button type='button' id='btnRoomAll'>Display all Rooms</button> \n\
                        <button type='button' id='btnRoomRem'>Remove Room</button>\n\
                        <br\><br\> \n\
                        Please enter the following informations. <br/>\n\
                        \n\
                        ID: <input type='text' name='id' id='inputID'><br /> \n\
                        <br />\n\
                        <input type='submit' id='inputNewRoomSubmit' value='Submit' onClick='instanceHandler.sendRemoveRoom()'>\n\
                        ";
    
    var roomSuccessRemove = "<button type='button' id='btnRoomNew'>New Room</button> \n\
                            <button type='button' id='btnRoomAll'>Display all Rooms</button> \n\
                            <button type='button' id='btnRoomRem'>Remove Room</button>\n\ <br/>\n\
                            \n\
                            Room successfully removed: {{data}}\n\
                            ";
    
    this.getTemplate = function(handleReq){
        if(handleReq == "new"){
            return roomNewTemplate;
        }
        if(handleReq == "newSuccess"){
            return roomSuccessNew;
        }
        if(handleReq == "all"){
            return roomListTemplate;
        }
        if(handleReq == "remSuccess"){
            return roomSuccessRemove;
        }
        if(handleReq == "remove"){
            return roomRemoveTemplate;
        }
        else{
            return baseTemplate;
        }
    }
}