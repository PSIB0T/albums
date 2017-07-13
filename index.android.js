// Import a library to help craete a component

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumlist';

// Create a component
// A component is a javascript function which returns
// Some amount of JSX 
// The following is a functional component
const App = () => (
    //This is JSX which looks like html
    //Pass props to make components reusable
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
    
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
