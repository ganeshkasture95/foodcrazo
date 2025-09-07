import { images } from '@/constants'
import { Redirect, Slot } from 'expo-router'
import React from 'react'
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'


const AuthLayout = () => {

  const isAuthenticated = false

  if (!isAuthenticated) return <Redirect href="/(tabs)" />


  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

      <ScrollView className="bg-white h-full" keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }}>

        <View className='w-full relative' style={{ height: Dimensions.get("screen").height / 2.25 }}>
          <ImageBackground style={{ width: '100%', height: "100%" }} source={images.loginGraphic} className="size-full rounded-b-lg" resizeMode='stretch' />
          <Image source={images.logo} className='self-center size-48 absolute -bottom-16 ' />
        </View>

        <Slot />
      </ScrollView>
    </KeyboardAvoidingView>

  )
}

export default AuthLayout