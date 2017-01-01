import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Column from './Column';

export default React.createClass({

  propTypes: {
    route: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
    location: PropTypes.object,
  },

  childContextTypes: {
    viewport: PropTypes.any,
  },

  getInitialState() {
    return {
      viewport: this._getRetrieveViewport(),
    };
  },

  getChildContext() {
    return {
      viewport: this._getRetrieveViewport(),
    };
  },

  componentWillMount() {
    window.addEventListener('resize', this._triggerResizeMixinCallback);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this._triggerResizeMixinCallback);
  },

  _getRetrieveViewport() {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    };
  },

  _triggerResizeMixinCallback() {
    this.setState({
      viewport: this._getRetrieveViewport(),
    });
  },

  _renderHomeHeader() {
    return (
      <header style={{ background: 'linear-gradient(145deg, #0A202D, #258AB2)', width: '100%', marginBottom: 40 }}>
        <Column
          smallScreenStyle={{ width: '100%', padding: '0 20px' }}
          mediumScreenStyle={{ margin: '0 auto', width: 910, paddingLeft: 160, paddingRight: 110 }}
        >
          <Link to="/">
            <h1 style={{ fontSize: 80,
                         margin: 0,
                         paddingTop: 80,
                         color: '#FFF',
                         fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
                         position: 'relative',
                       }}
            >
              <div style={{ borderRadius: 100,
                            width: 100,
                            height: 100,
                            border: '4px solid #fff',
                            paddingLeft: 18,
                            display: 'block',
                            float: 'left',
                            marginRight: 12, }}
              >
                <img
                  src="images/xdrcl_logo.png"
                  style={{ width: 62, height: 88 }}
                />
              </div>
              <span style={{ marginTop: -6,
                             display: 'block',
                             float: 'left', }}
              >
                XDRCL
              </span>
            </h1>
          </Link>
          <p style={{ fontSize: 22, marginTop: 0, paddingTop: 20, color: '#FEFEFE', clear: 'both' }}>
            Configurable React Components with great UX
          </p>
        </Column>
      </header>
    );
  },

  _renderDefaultHeader() {
    return (
      <header style={{ background: 'linear-gradient(150deg, #0A202D, rgb(1, 95, 130))', width: '100%', marginBottom: 40 }}>
        <Column
          smallScreenStyle={{ width: '100%', padding: '0 20px' }}
          mediumScreenStyle={{ margin: '0 auto', width: 910, paddingRight: 110 }}
        >
          <Link style={{ display: 'inline' }} to="/">
            <h1 style={{ fontSize: 24, margin: 0, padding: '10px 0', color: '#FFF', fontFamily: '"Trebuchet MS", Helvetica, sans-serif' }}>
              <div style={{ borderRadius: 26,
                            width: 26,
                            height: 26,
                            border: '2px solid #fff',
                            paddingLeft: 5,
                            display: 'block',
                            float: 'left',
                            marginRight: 6,
                            marginTop: 6, }}
              >
                <img
                  src="images/xdrcl_logo.png"
                  style={{ height: 19, top: -7, position: 'relative' }}
                />
              </div>
              XDRCL
            </h1>
          </Link>
        </Column>
      </header>
    );
  },

  render() {
    const cardContentStyle = (this.state.viewport.width <= 480) ? { padding: 20 } : {};

    return (<div style={{ background: '#F7F7F7' }}>

      { this.props.location.pathname === '/' ? this._renderHomeHeader() : this._renderDefaultHeader() }

      <Column
        smallScreenStyle={{ width: '100%' }}
        mediumScreenStyle={{ margin: '0 auto', width: 910, paddingRight: 110 }}
      >

        <Column
          smallScreenStyle={{ width: '100%', padding: '0 40px' }}
          mediumScreenStyle={{ float: 'left', width: 160 }}
          className="navigation"
        >
          <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: 0 }}>
            <li>
              <Link style={{ display: 'block', padding: '3px 0' }} to="/getting-started">Getting Started</Link>
            </li>
          </ul>
          <span style={{ color: '#738088' }} >Components</span>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li>
              <Link style={{ display: 'block', padding: '3px 0' }} to="/component/button">Button</Link>
            </li>
          </ul>
          <span style={{ color: '#738088' }} >Guides</span>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li>
              <Link style={{ display: 'block', padding: '3px 0' }} to="/guide/introducing-xdrcl">Introducing XDRCL</Link>
            </li>
          </ul>
          <span style={{ color: '#738088' }} >General</span>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li>
              <Link style={{ display: 'block', padding: '3px 0' }} to="/configuration">Configuration / Styling</Link>
            </li>
            <li>
              <Link style={{ display: 'block', padding: '3px 0' }} to="/philosophy">Philosophy</Link>
            </li>

            <li>
              <Link style={{ display: 'block', padding: '3px 0' }} to="/about">About</Link>
            </li>
            <li>
              <a style={{ display: 'block', padding: '3px 0' }} href="https://github.com/xdptdr/xdrcl" target="_blank">Code on Github</a>
            </li>
            <li>
              <a style={{ display: 'block', padding: '3px 0' }} href="https://github.com/xdptdr/xdrcl/issues" target="_blank">Report an Issue</a>
            </li>
          </ul>
        </Column>

        <Column
          smallScreenStyle={{ width: '96%', margin: '0 auto' }}
          mediumScreenStyle={{ float: 'left', width: 640 }}
        >
          <div style={ cardContentStyle }>
            { this.props.children }
          </div>
        </Column>
        <div style={{ clear: 'left' }}></div>
      </Column>
    </div>);
  },
});
