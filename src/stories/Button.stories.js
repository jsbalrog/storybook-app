import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';
import { arrowFunctionExpression } from '@babel/types';

storiesOf('Button', module)
  .add('with primary', () => <Button label="Primary Button" />)
  .add('with outline', () => <Button 
    label="Outline Button" 
    onClick={action('click outline button')}
    style={{ background: 'transparent', 
    border: '3px solid #fecd43' }} 
  />)
  .add('with rounded corners', () => <Button 
    label="Rounded Button" 
    onClick={action('click rounded corner button')}
    style={{ borderRadius: '15px' }} 
  />)