import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/components/Button.js';
import Welcome from './Welcome';
import ContextMenuDemo from './ContextMenuDemo';
import './story.css';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
.add('Notes', () => (
    <div>
		Notes about buttons
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
  .add('right click => contextMenu', () => (
    <ContextMenuDemo />
  )
);
