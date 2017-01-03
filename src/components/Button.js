import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import './Button.css'

export default class Button extends Component {

  static displayName = 'Button';

  render() {
	let {type = 'button', className} = this.props;
	let component = null;
	let classNameR = 'xdrcl-button xdrcl-button-'+type;
	if(className) {
		classNameR += ' ' + className;
	}
	switch(type) {
		case 'input':
			component = <input className={classNameR} type="button" value={ this.props.value } />
			break;
		case 'submit':
			component = <input className={classNameR} type="submit" value={ this.props.value } />
			break;
		case 'button':
			component = <button className={classNameR}>{this.props.value}</button>;
			break;
		case 'div':
			component = <div className={classNameR} tabIndex="0" style={{display:'inline-block'}} >{this.props.value}</div>;
			break;
		case 'span':
			component = <span className={classNameR} tabIndex="0">{this.props.value}</span>;
			break;
	}
    return component;
  }
}

