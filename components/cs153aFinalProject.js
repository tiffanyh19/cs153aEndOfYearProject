import * as React from 'react';
import {Button,Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import waterPastWeek from './waterPastWeek';
import waterCurrentWeek from './waterCurrentWeek';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
     <View>
            <Button
                title="Past Week"
                onPress={() =>
                navigation.navigate('waterPastWeek') 
                }
            />
            <Button
                title="Current Week"
                onPress={() =>
                navigation.navigate('waterCurrentWeek') 
                }
            />
      </View>
    );
  };
  const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome to my final project'}}
        />
        <Stack.Screen name="Past Week" component={waterPastWeek}/>
        <Stack.Screen name="Current Week" component={waterCurrentWeek} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
