import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import './Button.css'

export default class Button extends Component {

	static displayName = 'Button';
	handleClick = (e) => {
		if(this.props.disabled) {
			return;
		}
		var { onClick } = this.props;
		if(onClick) {
			onClick(e, this.getAbled());
		}
	}
	getAbled = () => {
		let { abled } = this.props;
		if(abled===false || abled === 'disabled' || abled === 'dis') {
			return false;
		}
		if(this.props.disabled) {
			return false;
		}
		return true;
	}
	render() {
		let {type = 'button', value, className, disabled} = this.props;
		let component = null;
		let classNameR = 'xdrcl-button xdrcl-button-'+type;
		let tabIndex = 0;
		let abled = this.getAbled();
		if(abled) {
			classNameR += ' enabled';
		} else {
			classNameR += ' disabled';
			tabIndex=-1;
		}
		if(className) {
			classNameR += ' ' + className;
		}
		switch(type) {
			case 'input':
				component = <input className={classNameR} tabIndex={tabIndex} type="button" value={ value } onClick={this.handleClick} disabled={disabled} />
				break;
			case 'submit':
				component = <input className={classNameR} tabIndex={tabIndex}  type="submit" value={ value } onClick={this.handleClick} disabled={disabled} />
				break;
			case 'button':
				component = <button className={classNameR} tabIndex={tabIndex}  onClick={this.handleClick}  disabled={disabled} >{value}</button>;
				break;
			case 'div':
				component = <div className={classNameR} tabIndex={tabIndex} style={{display:'inline-block'}} onClick={this.handleClick} >{value}</div>;
				break;
			case 'span':
				component = <span className={classNameR} tabIndex={tabIndex} onClick={this.handleClick}>{value}</span>;
				break;
		}
		return component;
	}
}

