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
    function range() {
        var source = Rx.Observable.range(1, 5);
        var sub = source.subscribe(function (x) {
            console.log(x);
        });
    }
    function timer() {
        var source = Rx.Observable.timer(500, 100).timestamp();
        var sub = source.subscribe(function (x) {
            console.log(x.timestamp);
        });
    }
    function array() {
        var array = [1, 2, 3, 4, 5];
        var source = Rx.Observable.from(array);
        source.subscribe(function (x) {
            console.log(x);
        });
    }
    function dom() {
        var result = document.getElementById("dom");
        var source = Rx.Observable.fromEvent(document, "mousemove");
        var sub = source.subscribe(function (x) {
            result.innerHTML = x.clientX + ", " + x.clientY;
        });
    }
    dom();
})(app || (app = {}));
