/**
 * Core functions
 */
var baseutils = new Base();
var config = new Config();
var sStorage = new SStorage();
var lStorage = new LStorage();

/**
 * Web functions
 */
var router = new Router();

/**
 * Socketing and Messages
 */
var socketPromise = new socketPromise();
var socket = new Socket();
var messageType = new MessageType();
var messageSubType = new MessageSubType();
var messageActionType = new MessageActionType();
var messageParser = new MessageParser();

/**
 * Instancing and Data
 */
var instanceHandler = new InstanceHandler();

/**
 * Template Basic calls
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


/**
 * Testing (del for release)
 */
var testUC= new userCreation(socket, messageType, messageSubType);
var testAllRoomData = new getAllRoomData(socket, messageType, messageSubType, messageActionType);

socket.init("ws://" + config.getwsAdress() + ":" + config.getwsPort(), messageParser);
//socket.sendMessage("testing 723");	
//socket.sendMessage(message.buildRequest());
	
//testUC.createTestUser();
testAllRoomData.getAllRoomData();
	
router.createRouter("history");
instanceHandler.linkSocket(socket);
router.linkInstanceHandler(instanceHandler);
router.linkSocketPromise(socketPromise)
messageParser.linkInstanceHandler(instanceHandler);
baseutils.createBase(router, socket);
baseutils.setup();

router.navigate("");
router.navigate("welcome");
router.loadCurrent();

window.setInterval(router.listen,1000);
window.setInterval(socket.backgroundWorker, 1000);
window.setInterval(messageParser.parseMessages, 500);