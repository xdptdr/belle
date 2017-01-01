import React from 'react';
import ReactDOM from 'react-dom';
import { style } from 'xdrcl';
import { config } from 'xdrcl';
import { extend } from 'underscore';
import ButtonPlayground from './components/ButtonPlayground';

// TODO create a button to switch between those stylings for testing purposes
if (true) { // eslint-disable-line no-constant-condition
  config.button.preventFocusStyleForTouchAndClick = false;
  style.button.focusStyle = {
    boxShadow: '0 0 0 3px rgba(140, 224, 255, 0.6)',
    outline: 0,
  };
  style.button.primaryFocusStyle = {
    boxShadow: '0 0 0 3px rgba(140, 224, 255, 0.6)',
    outline: 0,
  };

} else {
  style.button.style = {
    boxSizing: 'border-box',
    borderRadius: 2,
    cursor: 'pointer',
    padding: '8px 12px 6px 12px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    background: 'red',
    border: '1px solid #EFEFEF',
    borderBottomColor: '#D0D0D0',
    color: 'brown',
    verticalAlign: 'bottom',
    lineHeight: '26px',
  };
}

// export for http://fb.me/react-devtools
window.React = React;

const App = () => (
  <div style={{ margin: '0 auto', width: 300 }}>
    <h1>XDRCL Playground</h1>
    <ButtonPlayground />
  </div>
);

ReactDOM.render(<App />, document.getElementById('react'));
