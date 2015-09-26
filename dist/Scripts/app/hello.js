var app;
(function (app) {
    function hello() {
        var source = Rx.Observable.create(function (observer) {
            setTimeout(function () {
                console.log("timeout hit");
                observer.onNext(42);
                observer.onCompleted();
            }, 1000);
            console.log("started");
        });
        var go = function (x) { console.log(x); };
        var error = function (err) { console.error(err); };
        var done = function () { console.log("done."); };
        var sub = source.subscribe(go, error, done);
        setTimeout(function () {
        }, 500);
    }
    hello();
})(app || (app = {}));
