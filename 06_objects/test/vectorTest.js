TestCase("VectorTest", {
    "test should return a new vector from addition": function () {
        var vector = new Vector(1, 2);
        var otherVector = new Vector(3, 3);
        var plusVector = new Vector(4, 5);
        var minusVector = new Vector(-2, -1);

        assertEquals(plusVector.a, vector.plus(otherVector).a);
        assertEquals(plusVector.b, vector.plus(otherVector).b);

        assertEquals(minusVector.a, vector.minus(otherVector).a);
        assertEquals(minusVector.b, vector.minus(otherVector).b);
    }
});
