import React, { Component } from 'react';
import Code from './Code';

const installCommand = 'npm install xdrcl';

const usageExampleHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
</head>
<body>
  <div id="react-root"></div>
  <!--
    You can use browserify, webpack or similar tools
    to compile & combine your JSX code
  -->
  <script src="bundle.js"></script>
</body>
</html>
`;

var xdrcl = require('xdrcl');

export default class GettingStarted extends Component {

  render() {
    return (<div>
      <h2 style={{ marginTop: 0, marginBottom: 40 }}>Getting Started</h2>

      <p>
        XDRCL is available as <a href="http://npmjs.org">npm</a> package. Once you have npm you can install XDRCL in your project folder with:
      </p>

      <Code value={ installCommand } style={{ marginTop: 40 }} />

      <h3>Import & use XDRCL Components</h3>

      <p>
        We recommend you to get started with <a href="https://facebook.github.io/react/">React</a> first. Once you have a simple application setup you can import any XDRCL component and use it right away. <b>No stylesheets, font or any other prerequisite needed.</b>
      </p>

      <Code value={ usageExampleHtml } style={{ marginTop: 40 }} />


    </div>);
  }
}
