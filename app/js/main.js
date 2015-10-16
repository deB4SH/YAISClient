/*
var connection = new WebSocket('ws://127.0.0.1:60000');
connection.onopen = function(){
      connection.send("PING");
}
*/

var baseutils = new Base();

var router = new Router();
router.createRouter("history");
baseutils.createBase(router);
baseutils.setup();

router.navigate("about");

window.setInterval(router.listen(),1000);