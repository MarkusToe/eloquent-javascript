TestCase("MinimumTest", {
    "test should return minimum": function() {
        assertEquals(1, minimum(1,2));
        assertEquals(30, minimum(30,40));
        assertEquals(20, minimum(30,20));
    }
});