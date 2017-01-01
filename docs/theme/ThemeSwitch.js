import React, { PropTypes } from 'react';
import { Button } from 'xdrcl';

export default React.createClass({

  contextTypes: {
    location: PropTypes.object,
  },

  _onSwitchTheme(name) {
    window.location.hash = `${this.context.location.pathname}\?theme=${name}`;
    window.location.reload();
  },

  render() {
    // TODO
    const currentTheme = undefined;

    return (
      <div>
        <p>
          You choose between one of the themes below
        </p>

        <div>
          <Button
            onClick={ () => this._onSwitchTheme('xdrcl') }
            primary
            disabled={ currentTheme === 'xdrcl' || currentTheme === undefined }
          >
            XDRCL
          </Button>
          <Button
            onClick={ () => this._onSwitchTheme('bootstrap') }
            style={{ marginLeft: 10 }}
            primary
            disabled={ currentTheme === 'bootstrap' }
          >
            Bootstrap
          </Button>
          <Button
            onClick={ () => this._onSwitchTheme('xdrcl-with-default-focus') }
            style={{ marginLeft: 10 }}
            primary
            disabled={ currentTheme === 'xdrcl-with-default-focus' }
          >
            XDRCL with default focus behaviour
          </Button>
        </div>
      </div>
    );
  },
});
