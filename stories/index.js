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
  .add('all buttons look the same on all browsers', () => (
    <div>
		<Button type="button" onClick={action('clicked')} value="Button" />
		<Button type="input" onClick={action('clicked')} value="Button" />
		<Button type="submit" onClick={action('clicked')} value="Button" />
		<Button type="div" onClick={action('clicked')} value="Button" />
		<Button type="span" onClick={action('clicked')} value="Button" />
	</div>
  )
);

storiesOf('ContextMenu', module)
  .add('right click => contextMenu', () => (
    <ContextMenuDemo />
  )
);
