/**
 * storage for all functions needed in the application and anchors
 */

/**
 *======================================================================Template
 */
function btnRoot_start(){
    router.navigate("welcome");
}
document.getElementById("btnRootStart").onclick = btnRoot_start;

function btnRoot_room(){
    router.navigate("room");
}
document.getElementById("btnRootRoom").onclick = btnRoot_room;

function btnRoot_login(){
    router.navigate("login");
}
document.getElementById("btnRootLogin").onclick = btnRoot_login;

function btnRoot_register(){
    router.navigate("register");
}
document.getElementById("btnRootRegister").onclick = btnRoot_register;

function btnRoom_all(){
    instanceHandler.manageDataRquest("room","all");
    room_AllRoom();
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


/**
 *==========================================================================USER
 */

