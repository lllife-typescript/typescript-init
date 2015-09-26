
module app {
    export class Hello {
    }

    function test() {
        var $input = $("#input")
        var $result = $("#result")

        var keyups = Rx.Observable.fromEvent($input, "keyup");

    }
    test();
}
