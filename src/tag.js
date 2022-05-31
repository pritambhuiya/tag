class Tag {
  constructor({ tag, content, attributes = '' }) {
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

  generateTag() {
    return `<${this.tag}${this.attributes}>${this.content}</${this.tag}>`;
  }
}

exports.Tag = Tag;
