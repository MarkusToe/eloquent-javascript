function reverseArray(arr) {
    var reversedArray = [];
    var arrLength = arr.length;

    for (var i = 0; i < arrLength; i++) {
        reversedArray.push(arr.pop());
    }
    return reversedArray;
}
