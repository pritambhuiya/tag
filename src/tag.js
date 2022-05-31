class Tag {
  constructor({ tag, content, attributes = '' }) {
    this.tag = tag;
    this.content = content;
    this.attributes = attributes;
  }

}

exports.Tag = Tag;
