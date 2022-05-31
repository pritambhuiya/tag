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

describe('generateTag', () => {
  it('Should generate a tag with content', () => {
    const head = new Tag({ tag: 'head', content: 'content' });
    assert.strictEqual(head.generateTag(), '<head>content</head>');
  });

  it('Should generate a tag without content', () => {
    const head = new Tag({ tag: 'head', content: '' });
    assert.strictEqual(head.generateTag(), '<head></head>');
  });
});

describe('getContent', () => {
  it('Should return the content if content is given', () => {
    const head = new Tag({ tag: 'head', content: 'content' });
    assert.strictEqual(head.getContent(), 'content');
  });

  it('Should generate a tag without content', () => {
    const head = new Tag({ tag: 'head' });
    assert.strictEqual(head.getContent(), '');
  });
});