
module app {

    function hello() {
        var source = Rx.Observable.create( observer => {
            setTimeout( () => {
                console.log("timeout hit");
                observer.onNext(42);
                observer.onCompleted();
            }, 1000);

            console.log("started");
        });

        var go = (x) => { console.log(x); }
        var error = (err) => { console.error(err); }
        var done = () => { console.log("done.")}

        var sub = source.subscribe(go, error, done);

        setTimeout(() => {
            //sub.dispose();
        }, 500);
    }

    hello();
}
