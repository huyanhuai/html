self.onmessage = function(ev) {
    for (var i = 0; i < 100; i++) {
        self.postMessage(ev.data + i + 'stark');
    }
}