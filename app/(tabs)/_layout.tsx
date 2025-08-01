import { Redirect, Tabs } from 'expo-router'
import React from 'react'

const TabsLayout= () => {

  const isAuthenticated = false

  if(!isAuthenticated) return <Redirect href="/sign-in"/>

  return (
  <Tabs screenOptions={{ headerShown:false}}>
    
  </Tabs>
  )
}

export default TabsLayout