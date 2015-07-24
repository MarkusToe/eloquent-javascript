TestCase("DeepComparisonTest",
    {
        "test should true when values are equal or object properties are equal": function () {
            assertTrue(deepEqual(2, 2));
            assertTrue(deepEqual("Hallo", "Hallo"));
            assertFalse(deepEqual(2, 3));
            assertFalse(deepEqual("Hallo", "Hall"));
            assertTrue(deepEqual({value: 2}, {value: 2}));
        }
    }
);