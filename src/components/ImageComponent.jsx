import React, { Component } from 'react';

class ImageComponent extends Component {
  render() {
    const {src, alt, width, height,} = this.props;
    return (
      <img src={this.props.src} alt={this.props.alt} />
    );
  }
}

export default ImageComponent;