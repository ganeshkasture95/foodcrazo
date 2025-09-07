import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import React, { useState } from 'react'
import { View } from 'react-native'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View className='gap-10 bg-white flex-1 h-full rounded-lg p-5 mt-5'>
      <CustomInput
        placeholder='Enter Your email'
        value={email}
        onChangeText={setEmail}
        label='Email'
        keyboardType='email-address'
      />

      <CustomInput
        placeholder='Enter your Password'
        value={password}
        onChangeText={setPassword}
        label='Password'
        secureTextEntry={true}
      />

      <CustomButton title='Sign In' />
    </View>
  )
}

export default SignIn