function range(start, end) {
    var arr = [];
    for (var i = start; i <= end; i ++) {
        arr.push(i);
    }
    return arr;
}

function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}