TestCase("BeanCountingTest", {
    "test should return number of upper case Bs in string": function() {
        assertEquals(2, countBs("aBcB"));
    },
    "test should return number of characters given as parameter": function () {
        assertEquals(1, countChar("aBacd", "c"));
    }
});