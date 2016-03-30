///<reference path="Scripts/qunit-1.10.d.ts"/>
///<reference path="app.ts"/>
QUnit.module("app.ts tests");
test('doSomething()', function () {
    var result = doSomething(0, 1, 2);
    var expected = 3;
    // Assert
    equal(result, expected, "they should match");
    equal(doSomething(2, 4, 6), 12, "Test 1: 2+4+6 should be 12");
    equal(doSomething(1, 5, 7), 13, "Test 2: 1+5+7 should be 13");
    equal(doSomething(4, 8, 9), 21, "Test 3: 4+8+9 should be 21");
    equal(doSomething(-1, 2, 4), 5, "Test 4: -1+2+4 should be 5");
    // intentionally wrong
    equal(doSomething(1, 4, 5), 0, "Test 5: intentionally wrong");
});
QUnit.test('doSomethingElseTest()', function () {
    equal(doSomethingElse(), '9', "doSomething(2, 3, 4); should be 9");
});
//# sourceMappingURL=test.js.map