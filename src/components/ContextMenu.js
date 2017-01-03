import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import './ContextMenu.css'

export default class ContextMenu extends Component {

  static displayName = 'ContextMenu';

  render() {
	let {x, y} = this.props;
    return <div style={{cursor:'pointer',position:'absolute', top:y, left:x, background:'white', zIndex:1, border:'1px solid #DDDDDD', padding:'2px'}} onClick={this.props.onClose}>ContextMenu</div>;
  }
}

