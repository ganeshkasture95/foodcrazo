
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import React, { useState } from 'react'
import { View } from 'react-native'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <View className='gap-10 bg-white flex-1 h-full rounded-lg p-5 mt-5'>
      <CustomInput
        placeholder='Enter Your Full Name'
        value={name}
        onChangeText={setName}
        label='Full Name'
        keyboardType='default'
      />

      <CustomInput
        placeholder='Enter Your Email'
        value={email}
        onChangeText={setEmail}
        label='Email'
        keyboardType='email-address'
      />

      <CustomInput
        placeholder='Enter Your Password'
        value={password}
        onChangeText={setPassword}
        label='Password'
        secureTextEntry={true}
      />

      <CustomInput
        placeholder='Confirm Your Password'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        label='Confirm Password'
        secureTextEntry={true}
      />

      <CustomButton title='Sign Up' />
    </View>
  )
}

export default SignUp