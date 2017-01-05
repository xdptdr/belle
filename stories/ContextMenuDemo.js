import React from 'react';
import ReactDOM from 'react-dom';
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
		contextMenu = <ContextMenu onClose={this.onContextMenuClose} x={contextMenuX} y={contextMenuY} >Context menu</ContextMenu>;
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
		contextMenu = <ContextMenu onClose={this.onContextMenuClose} x={contextMenuX} y={contextMenuY} >Context menu</ContextMenu>;
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
	let target = ReactDOM.findDOMNode(this.refs["level"+this.state.level]);
	let {x,y} = ContextMenuSupport.computeXY(e, target);
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
			<div style={{display:'inline-block',whiteSpace:'nowrap'}}>This is a very long context menu</div>
		</ContextMenu>
	}
	return <div style={{background:'white', width:'100%', height:'1000px',position:'relative'}} ref="level0">
		<p>This is level 0</p>
		<div style={{background:'#EEEEEE',width:'90%',margin:'0px auto',height:'300px',overflow:'auto'}}>
			<div style={{background:'#EEEEEE',width:'120%',height:'120%',position:'relative'}} ref="level1">
				<p>And here is level 1</p>
				<div style={{background:'#DDDDDD',width:'90%',margin:'0px auto',height:'300px',overflow:'auto'}}>
					<div style={{background:'#DDDDDD',width:'120%',height:'120%',position:'relative'}} ref="level2">
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

export class Demo4ThirdParty extends React.Component {
	render() {
		return <div style={{background:'#EEEEEE',width:'90%',margin:'0px auto',height:'300px',overflow:'auto'}}>
			<div style={{background:'#EEEEEE',width:'120%',height:'120%',position:'relative'}}>
				{this.props.children}
			</div>
		</div>;
	}
}

export class Demo4 extends React.Component {
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
		<p>This is level 0. We have control of this level.</p>
		<Demo4ThirdParty>
			<p>And here is level 1, in a third party component.  We d not have control of this level.</p>
			<div style={{background:'#DDDDDD',width:'90%',margin:'0px auto',height:'300px',overflow:'auto'}}>
				<div style={{background:'#DDDDDD',width:'120%',height:'120%',position:'relative'}}>
					<p style={{paddingLeft:'35px'}}>And this is level 2. Right click any red squares. We have control of this level.</p>
					<div style={{width:'30px',height:'30px',background:'red',position:'absolute',top:'0px',left:'0px'}} onContextMenu={this.onContextMenu}/>
					<div style={{width:'30px',height:'30px',background:'red',position:'absolute',bottom:'0px',left:'0px'}} onContextMenu={this.onContextMenu}/>
					<div style={{width:'30px',height:'30px',background:'red',position:'absolute',top:'0px',right:'0px'}} onContextMenu={this.onContextMenu}/>
					<div style={{width:'30px',height:'30px',background:'red',position:'absolute',bottom:'0px',right:'0px'}} onContextMenu={this.onContextMenu}/>
					{Number(level)===2?contextMenu:null}
				</div>
			</div>
			{/*Number(level)===1?contextMenu:null*/}
		</Demo4ThirdParty>
		{Number(level)===0?contextMenu:null}
		{showContextMenu?null:<p>Context menu should appear at level: <input type="number" value={level} min="0" max="2" onChange={(e)=>{this.setState({level:e.target.value});}} /></p>}		
	</div>;
  }
}

export default { Demo1, Demo2, Demo3, Demo4 }