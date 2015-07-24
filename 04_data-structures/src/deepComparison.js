function deepEqual(a, b) {

    console.log(typeof a);
    console.log(typeof b);

    return (a == b);
    if (typeof a == "object" && typeof b == "object") {
        var objectsEqual = false;

        for (var prop in a) {
            console.log("Prop " + prop + " in a: " + a.prop);
            console.log("Prop " + prop + " in b: " + b.prop);

            if (a[prop] == b[prop]) {
                objectsEqual = true;
            } else {
                objectsEqual = false;
            }
        }

        return objectsEqual;
    }
}