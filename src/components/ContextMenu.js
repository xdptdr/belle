import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import './ContextMenu.css'

export const ContextMenuSupport = {
	computeXY : (e, n = e.target.parentNode) => {
		let deltaX = 0;
		let deltaY = 0;
		while(n !== null && n.parentNode !== n && n.nodeName !== '#document') {
			deltaX -= n.scrollLeft;
			deltaY -= n.scrollTop;
			if(n.style.overflow==='auto') {
				deltaX += n.offsetLeft;
				deltaY += n.offsetTop;
			}
			n = n.parentNode;
		}
		return {x:e.clientX-deltaX, y:e.clientY-deltaY};
	}
}

export default class ContextMenu extends Component {

  static displayName = 'ContextMenu';

  render() {
	let {x, y} = this.props;
    return <div
		style={{
			cursor:'pointer',
			position:'absolute',
			top:y,
			left:x,
			background:'white',
			zIndex:1,
			border:'1px solid #DDDDDD',
			padding:'2px'
		}}
		onClick={this.props.onClose}
	>{this.props.children}</div>;
  }
}

