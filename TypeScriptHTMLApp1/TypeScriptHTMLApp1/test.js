///<reference path="Scripts/qunit-1.10.d.ts"/>
///<reference path="app.ts"/>
QUnit.module("app.ts tests");
test('doSomething()', function () {
    var result = doSomething(0, 1, 2);
    var expected = 3;
    // Assert
    equal(result, expected, "they should match");
    equal(doSomething(2, 4, 6), 12, "they should match");
    equal(doSomething(1, 5, 7), 13, "they should match");
    equal(doSomething(4, 8, 9), 21, "they should match");
    equal(doSomething(-1, 2, 4), 5, "they should match");
    // intentionally wrong
    equal(doSomething(1, 4, 5), 0, "intentionally wrong");
});
QUnit.test('doSomethingElseTest()', function () {
    equal(doSomethingElse(), '91', "they should match");
});
//# sourceMappingURL=test.js.map