var baseutils = new Base();
var router = new Router();
var socket = new Socket();
var config = new Config();
socket.init("ws://" + config.getwsAdress() + ":" + config.getwsPort());
socket.sendMessage("testing 123");
socket.sendMessage("testing 423");
socket.sendMessage("testing 523");
socket.sendMessage("testing 623");
socket.sendMessage("testing 723");	

	
router.createRouter("history");
baseutils.createBase(router, socket);
baseutils.setup();

router.navigate("about");

window.setInterval(router.listen,1000);
window.setInterval(socket.backgroundWorker, 1000);