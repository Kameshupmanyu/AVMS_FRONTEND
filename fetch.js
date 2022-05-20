import React, { Component, useState } from 'react'
import { View, Text,TouchableOpacity,Button } from 'react-native'

function Fetch({route,navigation}) {
   
      return (
         <View>
           
            <Button
            title="Press Me"
            onPress={()=>{fetchexample()}}/>
         </View>
      )
}
export default Fetch;