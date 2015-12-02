var baseutils = new Base();
var router = new Router();
var socket = new Socket();
var config = new Config();
var messageType = new MessageType();
var message = new Message(messageType.getUserCode(),"001","hello there");

socket.init("ws://" + config.getwsAdress() + ":" + config.getwsPort());
//socket.sendMessage("testing 723");	
socket.sendMessage(message);
	
router.createRouter("history");
baseutils.createBase(router, socket);
baseutils.setup();

router.navigate("about");

window.setInterval(router.listen,1000);
window.setInterval(socket.backgroundWorker, 1000);