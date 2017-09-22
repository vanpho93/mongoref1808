const assert = require('assert');
const add = require('../src/add');

describe('Test file add.js', () => {
    it('Can add natural number', () => {
        assert(add(5, 5) === 10);
    });
});
