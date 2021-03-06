import React from 'react';

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if(this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div className="story">
        <h1>Welcome to XDRCL</h1>
        <p>
          XDRCL is a React component library.
        </p>
        <p>
          There are many React component libraries out there, such as:
        </p>
		<ul>
			<li><a href="http://nikgraf.github.io/belle/">Belle</a></li>
			<li><a href="http://react-toolbox.com/">React Toolbox</a></li>
			<li><a href="http://elemental-ui.com/">Elemental UI</a></li>
			<li><a href="http://reactdesktop.js.org/demo/">React Desktop</a></li>
			<li><a href="http://jxnblk.com/rebass/">Rebass</a></li>
			<li><a href="https://react-bootstrap.github.io/components.html">Bootstrap</a></li>
			<li><a href="http://www.material-ui.com/#/">Material UI</a></li>
			<li><a href="http://jquense.github.io/react-widgets/docs/">React Widgets</a></li>
			<li><a href="https://www.muicss.com/docs/v1/example-layouts/responsive-side-menu">MUI</a></li>
		</ul>
        <p>
          If you are able to use any of these, you should have no problem using XDRCL.
        </p>
        <p>
          XDRCL and these libraries are especially suited for applications created with <code>create-react-app</code>.
        </p>
        <p>
          The current status of XDRCL is very experimental. You are free to try it and comment with <a href="https://github.com/xdptdr/xdrcl/issues">issues on GitHub</a>. But please keep in mind that I mainly created this library for experimenting with complex components in React with cross cutting concerns. For eample, context menus should be created at a different level in the DOM hierarchy than the components that trigger the tooltip.
        </p>
		<p>
			Most component libraries I came accross address poorly these kind of issues. An exhaustive set of components will start to be built only when these and other issues have been resolved.
		</p>
      </div>
    );
  }
}
