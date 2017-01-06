import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/components/Button.js';
import Welcome from './Welcome';
import ContextMenuDemo from './ContextMenuDemo';
import './story.css';

storiesOf('Welcome', module)
  .add('to XDRCL', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
.add('Notes', () => (
    <div className="story">
		<h1>Notes about buttons</h1>
		<p>The different ways of rendering buttons include:</p>
		<ul>
		  <li>Classical buttons, such as <code>button</code> and <code>input</code> whose types are <code>button</code>, <code>submit</code> or <code>reset</code></li>
		  <li>Using generic <code>span</code> or <code>div</code></li>
		  <li>Using links <code>a</code></li>
		</ul>
		<p>A designer does not care about which type of buttons is used, but a developer will want to have the choice between any of them.</p>
		<p>All of these choices should render and behave similarly</p>
		<p>XDRCL Buttons accept a <code>able</code> attributes, whose values can be <code>true</code>, <code>&apos;en</code> or <code>&apos;enabled&apos;</code> for enabled buttons, and <code>false</code>, <code>&apos;dis&apos;</code> or <code>&apos;disabled&apos;</code> for disabled buttons.</p>
		<p>The <code>disabled</code> tag is also supported</p>
		<p>Traditional button do not respond to clicks when disabled. XDRCL buttons react to clicks in both enabled or disabled states, and send the button state along with the event. XDRCL buttons using the traditional <code>disabled</code> attribute do not react to clicks when disabled.</p>
		<p>Some buttons can render HTML fragments, while other can't. Both <code>value</code> or children are supported for those buttons that can. The other buttons only look at the <code>value</code> attribute.</p>
		<p>If an <code>href</code> attribute is provided, all types of button behave as a link, even the <code>submit</code> and <code>reset</code> button, for consistency.</p>
	</div>
)).add('all buttons look the same on all browsers, and react to click with true', () => (
    <div>
		<Button type="button" onClick={action('clicked')} value="Button" />
		<Button type="input" onClick={action('clicked')} value="Button" />
		<Button type="submit" onClick={action('clicked')} value="Button" />
		<Button type="div" onClick={action('clicked')} value="Button" />
		<Button type="span" onClick={action('clicked')} value="Button" />
	</div>
)).add('disabled buttons look the same on all browsers, react to click with false, and are not focusable', () => (
<div>
		<Button type="button" abled="dis" onClick={action('clicked')} value="Button" />
		<Button type="input" abled="dis" onClick={action('clicked')} value="Button" />
		<Button type="submit" abled="dis" onClick={action('clicked')} value="Button" />
		<Button type="div" abled="dis" onClick={action('clicked')} value="Button" />
		<Button type="span" abled="dis" onClick={action('clicked')} value="Button" />
	</div>
)).add('classically disabled buttons look the same on all browsers and do not react to click', () => (
<div>
		<Button type="button" disabled="disabled" onClick={action('clicked')} value="Button" />
		<Button type="input" disabled="disabled" onClick={action('clicked')} value="Button" />
		<Button type="submit" disabled="disabled" onClick={action('clicked')} value="Button" />
		<Button type="div" disabled="disabled" onClick={action('clicked')} value="Button" />
		<Button type="span" disabled="disabled" onClick={action('clicked')} value="Button" />
	</div>
));

storiesOf('ContextMenu', module)
.add('Declarations', () => (
	<div className="story">
		<h1>Declarations</h1>
		<p>I declare that React will be useless until there it provides the possibilities for creating context menus.</p>
		<p>I declare that, in the current state of things, React fails to provide these possibilities.</p>
		<p>This is way current React component libraries are restricted to what is akin to improved CSS/HTML templates.</p>
		<p>These stories, in the current state, have their requirements working, but these have a price. Everything in the demos has to be aware of the context menu component.</p>
		<p>I put anybody to the challenge of creating a reusable context menu "component" in React that would usable maybe like this:</p>
		<p style={{textAlign:'center'}}><code>&lt;AnElement ref=&quot;element&quot;&gt;&lt;ContextMenu&gt;A Context Menu&lt;/ContextMenu&gt;&lt;/AnElement&gt;</code></p>
	</div>
)).add('right click => contextMenu', () => (
	<ContextMenuDemo.Demo1 />
)).add('context menu is relative to the closest relatively positionned element', () => (
    <ContextMenuDemo.Demo2 />
))
.add('with multiple scroll, context menu can be instantiated at various level depending on where the overflow clipping should occur', () => (
    <ContextMenuDemo.Demo3 />
)).add('clicking outside a context menu should close it', () => (
    <div className="story">Nothing here yet</div>
)).add('context menu may have to be created in a third party component', () => (
    <ContextMenuDemo.Demo4 />
)).add('context menu should reposition itself if going off the edges', () => (
    <div>Coming</div>
)).add('Real life example', () => (
    <ContextMenuDemo.RealLife />
));
