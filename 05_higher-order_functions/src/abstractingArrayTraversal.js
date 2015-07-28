function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

var numbers = [1, 2, 3, 4, 5, 6], sum = 0;

forEach(numbers, function (number) {
    sum += number;
});

console.log(sum);