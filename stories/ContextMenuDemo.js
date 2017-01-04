import React from 'react';
import ContextMenu, { ContextMenuSupport } from '../src/components/ContextMenu.js';
import { action } from '@kadira/storybook';

export class Demo1 extends React.Component {
  state = {
	showContextMenu:false
  };
  onContextMenu = (e) => {
    e.preventDefault();
	let {x,y} = ContextMenuSupport.computeXY(e);
	this.setState({showContextMenu:true, contextMenuX:x, contextMenuY:y});
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

export class Demo2 extends React.Component {
  state = {
	showContextMenu:false
  };
  onContextMenu = (e) => {
    e.preventDefault();
	let {x,y} = ContextMenuSupport.computeXY(e);
	this.setState({showContextMenu:true, contextMenuX:x, contextMenuY:y});
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
	return <div style={{background:'yellow', padding:'25px'}}><div style={{position:'relative', background:'white'}}>
		<div style={{display:'inline-block', border:'solid 1px black', cursor:'default'}} onContextMenu={this.onContextMenu}>Right click me</div>
		{contextMenu}
	</div></div>;
  }
}

export class Demo3 extends React.Component {
  state = {
	showContextMenu:false,
	level:0
  };
  onContextMenu = (e) => {
    e.preventDefault();
	let {x,y} = ContextMenuSupport.computeXY(e);
	this.setState({showContextMenu:true, contextMenuX:x, contextMenuY:y});
  }
  onContextMenuClose = (e) => {
	e.preventDefault();
	this.setState({showContextMenu:false});
  }
  render() {
	let { showContextMenu, contextMenuX, contextMenuY, level } = this.state;
	let contextMenu = null;
	if(showContextMenu) {
		contextMenu = <ContextMenu onClose={this.onContextMenuClose} x={contextMenuX} y={contextMenuY}>
			This is a very long context menu
		</ContextMenu>
	}
	return <div style={{background:'white', width:'100%', height:'1000px',position:'relative'}}>
		<p>This is level 0</p>
		<div style={{background:'#EEEEEE',width:'90%',margin:'0px auto',height:'300px',overflow:'auto'}}>
			<div style={{background:'#EEEEEE',width:'120%',height:'120%',position:'relative'}}>
				<p>And here is level 1</p>
				<div style={{background:'#DDDDDD',width:'90%',margin:'0px auto',height:'300px',overflow:'auto'}}>
					<div style={{background:'#DDDDDD',width:'120%',height:'120%',position:'relative'}}>
						<p style={{paddingLeft:'35px'}}>And this is level 2. Right click any red squares.</p>
						<div style={{width:'30px',height:'30px',background:'red',position:'absolute',top:'0px',left:'0px'}} onContextMenu={this.onContextMenu}/>
						<div style={{width:'30px',height:'30px',background:'red',position:'absolute',bottom:'0px',left:'0px'}} onContextMenu={this.onContextMenu}/>
						<div style={{width:'30px',height:'30px',background:'red',position:'absolute',top:'0px',right:'0px'}} onContextMenu={this.onContextMenu}/>
						<div style={{width:'30px',height:'30px',background:'red',position:'absolute',bottom:'0px',right:'0px'}} onContextMenu={this.onContextMenu}/>
						{Number(level)===2?contextMenu:null}
					</div>
				</div>
				{Number(level)===1?contextMenu:null}
			</div>
		</div>
		{Number(level)===0?contextMenu:null}
		{showContextMenu?null:<p>Context menu should appear at level: <input type="number" value={level} min="0" max="2" onChange={(e)=>{this.setState({level:e.target.value});}} /></p>}		
	</div>;
  }
}

export default { Demo1, Demo2, Demo3 }