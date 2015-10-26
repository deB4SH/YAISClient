/*

}
*/

var baseutils = new Base();

var router = new Router();
var socket = new Socket();

router.createRouter("history");
baseutils.createBase(router,socket);
baseutils.setup();

router.navigate("about");

window.setInterval(router.listen(),1000);