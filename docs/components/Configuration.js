import React, { Component } from 'react';
import { Button, Card } from 'xdrcl';
import Code from './Code';
import ThemeSwitch from '../theme/ThemeSwitch';

const extendButtonStyleExample = `var _ = require('underscore');
var xdrcl = require('xdrcl');

xdrcl.style.button.style = _.extend(xdrcl.style.button.style, {
  color: '#FFF',
  background: '#444',
  border: '1px solid #444',
  borderBottomColor: '#000'
});

// extending hoverStyle works as well
xdrcl.style.button.hoverStyle = _.extend(xdrcl.style.button.hoverStyle, {
  color: '#FFF',
  background: '#666',
  border: '1px solid #666',
  borderBottomColor: '#555'
});
`;

const styleStructure = `style = {
  button: {
    style: { … },
    hoverStyle: { … },
    focusStyle: { … },
    activeStyle: { … },
    disabledStyle: { … },
    disabledHoveredStyle: { … },
    primaryStyle: { … },
    primaryHoverStyle: { … },
    primaryFocusStyle: { … },
    primaryActiveStyle: { … },
    pirmaryDisabledStyle: { … },
    pirmaryDisabledHoveredStyle: { … }
  }
}
`;

const configStructure = `config = {
  button: {
    preventFocusStyleForTouchAndClick: true/false
  }
`;

export default class Configuration extends Component {

  render() {
    return (<div>
      <h2 style={{ marginTop: 0, marginBottom: 40 }}>Configuration</h2>

      <p>
        XDRCL provides you with the ability to modify the default appearance of
        it's components and even some of the behaviour.
      </p>

      <h3>Styles</h3>

      <p>
        With this example you overwrite the hover style of default XDRCL button.
      </p>

      <Code value={ overwriteCardStyleExample } style={{ marginTop: 40 }} />

      <p style={{ marginTop: 40 }}>
        In case you only want to change a couple parameters you easily can do it
        by leveraging e.g. ES6 Object.assign() or Underscores' extend.
        This is possible because all styles are simply plain JavaScript objects.
        Of course you also can overwrite the hoverStyle as well.
      </p>

      <Code value={ extendButtonStyleExample } style={{ marginTop: 40 }} />

      <Button
        style={{ color: '#FFF',
                 background: '#444',
                 border: '1px solid #444',
                 borderBottomColor: '#000', }}
        hoverStyle={{ color: '#FFF',
                      background: '#666',
                      border: '1px solid #666',
                      borderBottomColor: '#555', }}
      >
        Follow
      </Button>

      <h4>Themes</h4>

      This global configuration enables to create custom XDRCL component themes. For demonstration
      we enabled to switch between 3 different themes.

      <ThemeSwitch />

      <h4>Structure</h4>

      <p>
        The following example shows the structure of xdrcl.style.
      </p>

      <Code value={ styleStructure } style={{ marginTop: 40 }} />

      <h3>Behaviour</h3>

      <h4>Button</h4>

      <p>
        Focus styles are helpful to identify which element is currently
        in focus when tabbing through the elements e.g. a user wants to
        switch to the next input element. Yet it feels somewhat distracting
        when clicking on the Button. That's why XDRCL by default prevents
        the focus style being applied in case the Button is focused on
        by a touch or click event. This default behaviour can be deactivated by
        setting `preventFocusStyleForTouchAndClick` to false.
      </p>

      <h4>Structure</h4>

      <p>
        The following example shows the structure of xdrcl.config.
      </p>

      <Code value={ configStructure } style={{ marginTop: 40 }} />

    </div>);
  }
}
