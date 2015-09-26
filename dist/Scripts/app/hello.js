var app;
(function (app) {
    function searchWikipedia(term) {
        return $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                action: "opensearch",
                format: "json",
                search: term
            }
        }).promise();
    }
    function test() {
        var input = $("#input");
        var result = $("#result");
        var keyups = Rx.Observable.fromEvent(input, "keyup")
            .map(function (e) { return e.target.value; })
            .filter(function (text) { return text.length > 2; });
        var throttled = keyups.throttle(500);
        var distint = throttled.distinctUntilChanged();
        var suggestion = distint.flatMapLatest(searchWikipedia);
        suggestion.subscribe(function (data) {
            var res = data[1];
            result.empty();
        });
    }
    test();
})(app || (app = {}));
