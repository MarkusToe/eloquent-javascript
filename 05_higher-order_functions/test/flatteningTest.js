TestCase("FlatteningTest", {
    "test should return a single array from more input arrays": function () {
        assertEquals([0, 1, 2, 3, 4, 5], flatten([[0, 1], [2, 3], [4, 5]]));
    }
})