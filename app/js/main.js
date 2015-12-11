/**
 * Core functions
 */
var baseutils = new Base();
var config = new Config();

/**
 * Web functions
 */
var router = new Router();

/**
 * Socketing and Messages
 */
var socket = new Socket();
var messageType = new MessageType();
var messageSubType = new MessageSubType();
var messageActionType = new MessageActionType();
var messageParser = new MessageParser();

/**
 * Testing (del for release)
 */
var testUC= new userCreation(socket, messageType, messageSubType);
var testAllRoomData = new getAllRoomData(socket, messageType, messageSubType, messageActionType);

socket.init("ws://" + config.getwsAdress() + ":" + config.getwsPort(), messageParser);
//socket.sendMessage("testing 723");	
//socket.sendMessage(message.buildRequest());
	
testUC.createTestUser();
testAllRoomData.getAllRoomData();
	
router.createRouter("history");
baseutils.createBase(router, socket);
baseutils.setup();

router.navigate("");
router.navigate("welcome");

window.setInterval(router.listen,1000);
window.setInterval(socket.backgroundWorker, 1000);
window.setInterval(messageParser.parseMessages, 500);