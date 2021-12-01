// IMPORT MODULES under test here:
import { 
    getSecondItem,
    myFunction,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected);
});


test(`This function should take an array and return the second item in the array`, (expect) => {
    const expected1 = 2;
    const actual1 = getSecondItem([1, 2, 3]);
    expect.deepEqual(actual1, expected1);

    const expected2 = 30;
    const actual2 =
})

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

