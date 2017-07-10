// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
// View is used to wrap elements around content
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
        
    );
};
// Define styles 
// Uses camel cases instead of dashed cases
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the compoennt available to other parts of the app
export default Header;
