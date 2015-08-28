TestCase("ElectronicLifeTest", {
    "test should return a value from a vector": function () {
        var grid = new Grid(5, 5);
        assertEquals(undefined, grid.get(new Vector(1, 1)));
        grid.set(new Vector(1, 1), "X")
        assertEquals("X", grid.get(new Vector(1, 1)));
    }
});
