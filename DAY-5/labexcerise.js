function gettinginfo(callback) {
    // ...

    // Call the callback
    callback('Albert', 'Software developer', 'caifornia');
}

function info(a, b, c) {
    // I'm the callback
    alert(a + " " + b + " " + c);
}

gettinginfo(info);