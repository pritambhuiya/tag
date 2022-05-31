const { Tag } = require('../src/tag.js');

const assert = require('assert');

describe('Tag', () => {
  it('Should return true if objects are equal', () => {
    const actual = new Tag({ tag: 'body', content: 'hello' });
    const anotherTag = new Tag({ tag: 'body', content: 'hello' });
    assert.ok(actual.equals(anotherTag));
  });

  it('Should return false if objects are not equal', () => {
    const actual = new Tag({ tag: 'body', content: 'hello' });
    const anotherTag = new Tag({ tag: 'body', content: 'h' });
    assert.ok(actual.equals(anotherTag) === false);
  });

  it('Should return false if objects is not an instance', () => {
    const actual = new Tag({ tag: 'body', content: 'hello' });
    assert.equal(actual.equals({ tag: 'body', content: 'hello' }), false);
  });
});
