function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++) {
        current = combine(current, array[i]);
        // current = 0 + 1
        // current = 1 + 2
        // current = 3 + 3
        // current = 6 + 4
    }
    return current;
}

reduce([1, 2, 3, 4], function (a, b) {
    return a + b;
}, 0);