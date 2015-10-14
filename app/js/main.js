/*
var connection = new WebSocket('ws://127.0.0.1:60000');
connection.onopen = function(){
      connection.send("PING");
}
*/



var router = new Router();
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
