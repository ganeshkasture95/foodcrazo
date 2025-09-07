import { Tabs } from 'expo-router';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const TabsLayout = () => {



  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='index' options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name='home' color={color} size={size} />
        )
      }} />
      <Tabs.Screen name='cart' options={{tabBarIcon:({color, size})=>(
      <MaterialIcons name='shopping-cart' color={color} size={size} />
      )}} />
      
      <Tabs.Screen name='profile' options={{tabBarIcon:({color, size})=>(
        <MaterialIcons name='person' color={color} size={size} />
      )}} />



    </Tabs>
  )
}

export default TabsLayout