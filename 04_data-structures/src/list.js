function arrayToList(arr) {
    var prevListElement = {};

    for (var i = arr.length-1; i >= 0; i--) {
        var listElement = {
            value: arr[i],
            rest: null
        };

        if ("value" in prevListElement) {
            listElement.rest = prevListElement;
        }

        prevListElement = listElement;
    }

    return prevListElement;
}

function listToArray(list) {
    var arr = [];

    do {
        arr.push(list.value);
        list = list.rest;
    } while (list != null);

    return arr;
}

function prepend(element, list) {
    element.rest = list;
    return element;
}

function nth(list, pos) {
    for (var i = 0; i < pos-1; i++) {
        list = list.rest;
    }
    return list;
}

function nthRecursive(list, pos) {
    if (pos = 0) {
        return list;
    } else {
        return nth(list.rest, pos - 1);
    }
}