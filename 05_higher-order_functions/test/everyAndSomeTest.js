TestCase("EveryAndSomeTest", {
    "test should return true when some element matches": function () {
        assertTrue(every([1, 2, 3], greaterThanZero));
        assertFalse(every([0, 2, 3], greaterThanZero));

        assertTrue(some([0, -1, 3], greaterThanZero));
        assertFalse(some([0, -1, -3], greaterThanZero));
    }
});