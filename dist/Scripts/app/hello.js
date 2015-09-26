var app;
(function (app) {
    var Hello = (function () {
        function Hello() {
        }
        return Hello;
    })();
    app.Hello = Hello;
    function test() {
        var $input = $("#input");
        var $result = $("#result");
        var keyups = Rx.Observable.fromEvent($input, "keyup");
    }
    test();
})(app || (app = {}));
