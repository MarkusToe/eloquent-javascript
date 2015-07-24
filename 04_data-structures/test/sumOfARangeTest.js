TestCase("SumOfARangeTest", {
    "test should return an array with a range of numbers": function () {
        assertEquals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], range(1, 10));
        assertEquals(55, sum(range(1, 10)));
    }
});