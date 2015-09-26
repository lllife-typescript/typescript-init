var app;
(function (app) {
    function hello() {
        var source = Rx.Observable.create(function (observer) {
            setTimeout(function () {
                observer.onNext(42);
                observer.onCompleted();
            }, 1000);
        });
        var go = function (x) { console.log(x); };
        var error = function (err) { console.error(err); };
        var done = function () { console.log("done."); };
        var sub = source.subscribe(go, error, done);
    }
    function click() {
        var button = document.getElementById("button");
        var source = Rx.Observable.fromEvent(button, "click");
        source.forEach(function () {
            console.log("click");
        });
    }
    hello();
    click();
})(app || (app = {}));
