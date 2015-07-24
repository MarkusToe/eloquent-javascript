function countBs(string) {
    var counter = 0;

    for (var i = 0, l = string.length; i < l; i++) {
        if (string.charAt(i) == "B") counter++;
    }

    return counter;
}

function countChar(string, char) {
    var counter = 0;

    for (var i = 0, l = string.length; i < l; i++) {
        if (string.charAt(i) == char) counter++;
    }

    return counter;
}