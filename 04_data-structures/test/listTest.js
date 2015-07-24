TestCase("ListTest",
    {
        "test should return list data structure from array": function () {
            assertEquals({value: 1, rest: {value: 2, rest: {value:3, rest: null}}}, arrayToList([1, 2, 3]));
            assertEquals([1, 2, 3], listToArray({value: 1, rest: {value: 2, rest: {value:3, rest: null}}}));
            assertEquals(
                {value: 3, rest: {value: 1, rest: {value:2, rest: null}}},
                prepend({value: 3, rest: null}, {value: 1, rest: {value: 2, rest: null}})
            );
            assertEquals(
                {value: 2, rest: {value: 3, rest: null}},
                nth({value: 1, rest: {value: 2, rest: {value:3, rest: null}}}, 2)
            );
            assertEquals(
                {value: 2, rest: {value: 3, rest: null}},
                nthRecursive({value: 1, rest: {value: 2, rest: {value:3, rest: null}}}, 2)
            );
        }
    }
);