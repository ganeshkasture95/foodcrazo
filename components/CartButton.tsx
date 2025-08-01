import { images } from '@/constants'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const CartButton = () => {

    const totalIteems = 10
  return (
    <TouchableOpacity className='cart-btn' onPress={()=>{}}>
        <Image source={images.bag} className='size-5' resizeMode='contain'/>
        {
            totalIteems > 0 && (
                <View className='cart-badge'>
                    <Text className='small-bold text-white'>
                        {totalIteems}
                    </Text>

                </View>

            )
        }


    </TouchableOpacity>
  )
}

export default CartButton