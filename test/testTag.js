const { Tag, generatePage } = require('../src/tag.js');

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

describe('toHtml', () => {
  it('Should generate a tag with content', () => {
    const head = new Tag({ tag: 'head', content: 'content' });
    assert.strictEqual(head.toHtml(), '<head>content</head>');
  });

  it('Should generate a tag with attributes', () => {
    const head = new Tag({ tag: 'head', attributes: 'class="ok"' });
    assert.strictEqual(head.toHtml(), '<head class="ok"></head>');
  });

  it('Should generate a tag with contents, attributes', () => {
    const head = new Tag(
      { tag: 'head', content: 'hi', attributes: 'class="ok"' });
    assert.strictEqual(head.toHtml(), '<head class="ok">hi</head>');
  });

  it('Should generate a tag without content & attributes', () => {
    const head = new Tag({ tag: 'head', content: '' });
    assert.strictEqual(head.toHtml(), '<head></head>');
  });
});

describe('generatePage', () => {
  it('Should generate page with given contents', () => {
    const expected = '<html><head><link rel="stylesheet"' +
      ' href="styles.css"></head><body></body></html>';
    assert.strictEqual(generatePage(), expected);
  });
});
