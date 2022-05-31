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
    const attributes = this.attributes || '';

    return `<${this.tag}${attributes}>${content}</${this.tag}>`;
  }

}

exports.Tag = Tag;
