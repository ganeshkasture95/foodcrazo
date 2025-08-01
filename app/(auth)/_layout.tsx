import { images } from '@/constants'
import { Slot } from 'expo-router'
import React from 'react'
import { Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const AuthLayout = () => {
  return (
    <SafeAreaView>
        <Image source={images.loginGraphic} className='h-96 w-full'/>
        <Slot/>
    </SafeAreaView>
  )
}

export default AuthLayout