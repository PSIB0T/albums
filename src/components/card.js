import React from 'react';

import { View } from 'react-native';

const Card = (props) => {
    const { containerStyle } = styles;
    
    // To get the children passed from parent component, use props.children
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15
    }
};

export default Card;
