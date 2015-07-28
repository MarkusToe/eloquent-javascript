function flatten(arraysArray) {
    var flattened = arraysArray.reduce(function(a, b) {
        return a.concat(b);
    });
    return flattened;
}