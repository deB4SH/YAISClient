/**
 * Core functions
 */
var baseutils = new Base();
var config = new Config();
var sStorage = new SStorage();
var lStorage = new LStorage();
var user = new mdlUser();

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
 * Testing (del for release)
 */
var testUC= new userCreation(socket, messageType, messageSubType);
var testAllRoomData = new getAllRoomData(socket, messageType, messageSubType, messageActionType);

socket.init("ws://" + config.getwsAdress() + ":" + config.getwsPort(), messageParser);
//socket.sendMessage("testing 723");	
//socket.sendMessage(message.buildRequest());
	
//testUC.createTestUser();
//testAllRoomData.getAllRoomData();
	
router.createRouter("history");
instanceHandler.linkSocket(socket);
instanceHandler.linkSocketPromise(socketPromise);
router.linkInstanceHandler(instanceHandler);
router.linkSocketPromise(socketPromise)
messageParser.linkInstanceHandler(instanceHandler);
baseutils.createBase(router, socket);
baseutils.setup();

router.navigate("");
router.navigate("welcome");
router.loadCurrent();

user.initAnon();
user.linkSocket(socket);



var cronRouterListen = window.setInterval(router.listen,1000);
var httpBackgroundWorker = window.setInterval(socket.backgroundWorker, 1000);
var netMessageParser = window.setInterval(messageParser.parseMessages, 500);
var netSocketPromise = null;