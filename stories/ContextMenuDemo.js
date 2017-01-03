import React from 'react';
import ContextMenu from '../src/components/ContextMenu.js';
import { action } from '@kadira/storybook';

export default class ContextMenuDemo extends React.Component {
  state = {
	showContextMenu:false
  };
  onContextMenu = (e) => {
    e.preventDefault();
	this.setState({showContextMenu:true, contextMenuX:e.clientX, contextMenuY:e.clientY});
  }
  onContextMenuClose = (e) => {
	e.preventDefault();
	this.setState({showContextMenu:false});
  }

  render() {
	
	let { showContextMenu, contextMenuX, contextMenuY } = this.state;
	let contextMenu = null;
	if(showContextMenu) {
		contextMenu = <ContextMenu onClose={this.onContextMenuClose} x={contextMenuX} y={contextMenuY} />;
	}
	return <div style={{position:'relative'}}>
		<div style={{display:'inline-block', border:'solid 1px black', cursor:'default'}} onContextMenu={this.onContextMenu}>Right click me</div>
		{contextMenu}
	</div>;
  }
}
