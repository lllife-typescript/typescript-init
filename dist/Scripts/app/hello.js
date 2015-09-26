var app;
(function (app) {
    var Hello = (function () {
        function Hello() {
        }
        return Hello;
    })();
    app.Hello = Hello;
})(app || (app = {}));
