
module app {

    function hello() {
        var source = Rx.Observable.create( observer => {
            setTimeout( () => {
                observer.onNext(42);
                observer.onCompleted();
            }, 1000);
        });

        var go = (x) => { console.log(x); }
        var error = (err) => { console.error(err); }
        var done = () => { console.log("done.")}
        var sub = source.subscribe(go, error, done);
    }

    function click() {
        var button = document.getElementById("button");
        var source = Rx.Observable.fromEvent(button, "click");
        source.forEach(() => {
            console.log("click");
        });
    }

    hello();
    click();
}
