/*
var connection = new WebSocket('ws://127.0.0.1:60000');
connection.onopen = function(){
      connection.send("PING");
}
*/

var routeCheck = new Route();
var checkFunc = function(){
      alert("check");
}
routeCheck.createRoute("check",checkFunc);

var routeAbout = new Route();
var aboutFunc = function(){
      alert("about");
}
routeAbout.createRoute("about",aboutFunc);

var router = new Router();
router.createRouter("history");
router.addRoute(routeAbout);
router.addRoute(routeCheck);

router.navigate("about");

window.setInterval(router.listen(),1000);



/*
router.config({mode: "history"});
window.setInterval(router.listen(),1000);
router.navigate();

router.addRoute(/about/,function(){
     alert("about");
});
router.addRoute(function(){
      alert("default");
});

router.listen();


router.navigate("/about");
*/