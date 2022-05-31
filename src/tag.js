class Tag {
  constructor({ tag, content, attributes }) {
    this.tag = tag;
    this.content = content;
    this.attributes = attributes;
  }

  equals(anotherTag) {
    return anotherTag instanceof Tag &&
      this.tag === anotherTag.tag &&
      this.content === anotherTag.content &&
      this.attributes === anotherTag.attributes;
  }

  toHtml() {
    const content = this.content || '';
    const attributes = this.attributes ? ' ' + this.attributes : '';

    return `<${this.tag}${attributes}>${content}</${this.tag}>`;
  }
}

const generatePage = () => {
  const linkTag = '<link rel="stylesheet" href="styles.css">';

  const head = new Tag({ tag: 'head', content: linkTag });
  const headTag = head.toHtml();

  const body = new Tag({ tag: 'body', content: '' });
  const bodyTag = body.toHtml();

  const html = new Tag({ tag: 'html', content: headTag + bodyTag });
  return html.toHtml();
};

exports.Tag = Tag;
exports.generatePage = generatePage;
