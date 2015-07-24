function deepEqual(a, b) {
    if (typeof a === "object" && typeof b === "object" && a !== null && b !== null) {
        var objectsEqual = false;

        for (var prop in a) {
            if (a[prop] == b[prop]) {
                objectsEqual = true;
            } else {
                objectsEqual = false;
            }
        }

        return objectsEqual;
    }

    return (a == b);
}