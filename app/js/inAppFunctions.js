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

function btnRoot_cabinet(){
    router.navigate("cabinet");
}
document.getElementById("btnRootCabinet").onclick = btnRoot_cabinet;


function btnRoom_all(){
    instanceHandler.manageDataRquest("room","all");
    room_AllRoom();
}

function btnCabinet_all(){
    instanceHandler.manageDataRquest("cabinet","all");
    cabinet_AllCabinet();
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

function cabinet_NewCabinet(){
    router.navigate("cabinet$new");
}

function cabinet_AllCabinet(){
    router.navigate("cabinet$all");
}

function cabinet_RemCabinet(){
    router.navigate("cabinet$remove");
}


/**
 *==========================================================================USER
 */

