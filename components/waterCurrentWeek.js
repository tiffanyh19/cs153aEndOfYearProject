import React,{useState} from 'react';
import {View, Button, Text} from 'react-native';

const App = () => {    
    const [mondayWater,setMondayWater] = useState(0)
    const [tuesdayWater,setTuesdayWater] = useState(0)
    const [wednesdayWater,setWednesdayWater] = useState(0)
    const [thursdayWater,setThursdayWater] = useState(0)
    const [fridayWater,setFridayWater] = useState(0)
    const [saturdayWater,setSaturdayWater] = useState(0)
    const [sundayWater,setSundayWater] = useState(0)
    return (
      <View>
            <Text style = {{fontSize: 40}}>
                Water Intake Throughout the Week (in ounces)
            </Text>
            <Text style = {{fontSize: 20}}>
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}} >
                <Button
                    title= {"Monday: " + mondayWater + " oz"}
                    onPress = {() => {setMondayWater(mondayWater + 1)}}
                />
                <Button
                    title={"Tuesday: " + tuesdayWater + " oz"}
                    onPress = {() => {setTuesdayWater(tuesdayWater + 1)}}
                />
                <Button
                    title={"Wednesday:" + wednesdayWater+ " oz"}
                    onPress = {() => {setWednesdayWater(wednesdayWater + 1)}}
                />
                <Button
                    title= {"Thursday: " + thursdayWater + " oz"}
                    onPress = {() => {setThursdayWater(thursdayWater + 1)}}
                />
                <Button
                    title={"Friday: " + fridayWater + " oz"}
                    onPress = {() => {setFridayWater(fridayWater + 1)}}
                />
                <Button
                    title={"Saturday: " + saturdayWater + " oz"}
                    onPress = {() => {setSaturdayWater(saturdayWater + 1)}}
                />

                <Button
                    title={"Sunday: " + sundayWater + " oz"}
                    onPress = {() => {setSundayWater(sundayWater + 1)}}
                />                
              
            </View>
            
      </View>
    )
  }


export default App;
