// Import a library to help craete a component

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
// A component is a javascript function which returns
// Some amount of JSX 
const App = () => (
    //This is JSX which looks like html
    <Header />
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
