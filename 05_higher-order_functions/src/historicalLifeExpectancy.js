var lifeExpectancyPerCentury = {};
var ancestry = JSON.parse(ANCESTRY_FILE);
var byName = {};

ancestry.forEach(function (person) {
    byName[person.name] = person;
});

ancestry.forEach(function (person) {
    var century = Math.ceil(person.died / 100);
    if (century in lifeExpectancyPerCentury) {
        lifeExpectancyPerCentury[century].push(person.died - person.born);
    } else {
        lifeExpectancyPerCentury[century] = [person.died - person.born];
    }
});

function average(array) {
    function plus(a, b) {return a + b;}
    return array.reduce(plus) / array.length;
}

for (var century in lifeExpectancyPerCentury) {
    console.log("Avg. life expectancy in " + century + " was: " + average(lifeExpectancyPerCentury[century]));
}

function groupBy(array, f) {
    var obj = {};
    for (var i = 0; i < array.length; i++) {
        var group = f(array[i]);
        if (group in obj)
            obj[group].push(array[i]);
        else
            obj[group] = [array[i]];
    }
    return obj;
}

function centuryDied(person) {
    return Math.ceil(person.died / 100);
}

var lifeExpectancy = groupBy(ancestry, centuryDied);
for (var century in lifeExpectancy) {
    var avgAges = lifeExpectancy[century].map(function (person) {
        return person.died - person.born;
    });
    console.log("Avg. Life Expectancy in " + century + " was: " + average(avgAges));
}
