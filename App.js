import React from 'react';
import {View,Text} from 'react-native';

import KeyPad from './components/cs153aFinalProject';

const App = () => {
    return (
        <View style={{flex:1}}>
            <Text style={{textAlign:'center',fontSize:40}}>cs153aFinalProject</Text>
            <KeyPad/>
        </View>

    )
}
export default App
