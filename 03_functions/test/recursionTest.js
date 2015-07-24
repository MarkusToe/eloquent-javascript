TestCase("RecursionTest", {
    "test should return a boolean dependent on evennes of number": function() {
        assertTrue(isEven(50));
        assertFalse(isEven(51));
        assertFalse(isEven(-1));
    }
});