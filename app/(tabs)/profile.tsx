import React from 'react'
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import '../global.css'

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Header */}
        <View className="flex-row justify-end px-5 pt-2">
          <TouchableOpacity className="p-2">
            <Text className="text-2xl">⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Picture & Basic Info */}
        <View className="items-center px-5 pb-8">
          <View className="profile-avatar">
            <Image
              source={{ uri: 'https://via.placeholder.com/120' }}
              className="size-full rounded-full"
              resizeMode="cover"
            />
            <TouchableOpacity className="profile-edit">
              <Text className="text-sm">📷</Text>
            </TouchableOpacity>
          </View>

          <Text className="h3-bold text-dark-100 mt-4 mb-1">John Doe</Text>
          <Text className="paragraph-medium text-gray-500 mb-3">@johndoe</Text>
          <Text className="base-regular text-dark-100 text-center leading-6 px-5">
            Mobile developer passionate about React Native and creating amazing user experiences.
            Always learning something new! 🚀
          </Text>
        </View>

        {/* Stats */}
        <View className="flex-row justify-around py-5 mx-5 border-t border-b border-gray-200">
          <View className="items-center">
            <Text className="h3-bold text-dark-100">1.2K</Text>
            <Text className="body-medium text-gray-500 mt-1">Posts</Text>
          </View>
          <View className="items-center">
            <Text className="h3-bold text-dark-100">15.8K</Text>
            <Text className="body-medium text-gray-500 mt-1">Followers</Text>
          </View>
          <View className="items-center">
            <Text className="h3-bold text-dark-100">892</Text>
            <Text className="body-medium text-gray-500 mt-1">Following</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row px-5 py-5 gap-3">
          <TouchableOpacity className="flex-1 bg-primary py-3 rounded-full items-center">
            <Text className="base-semibold text-white">Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-white py-3 rounded-full items-center border border-primary">
            <Text className="base-semibold text-primary">Share Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Additional Options */}
        <View className="px-5 pt-2 pb-8">
          <TouchableOpacity className="profile-field">
            <View className="profile-field__icon">
              <Text className="text-lg">📊</Text>
            </View>
            <Text className="base-regular text-dark-100 flex-1">Analytics</Text>
            <Text className="text-xl text-gray-500">›</Text>
          </TouchableOpacity>

          <TouchableOpacity className="profile-field">
            <View className="profile-field__icon">
              <Text className="text-lg">🔒</Text>
            </View>
            <Text className="base-regular text-dark-100 flex-1">Privacy Settings</Text>
            <Text className="text-xl text-gray-500">›</Text>
          </TouchableOpacity>

          <TouchableOpacity className="profile-field">
            <View className="profile-field__icon">
              <Text className="text-lg">🎨</Text>
            </View>
            <Text className="base-regular text-dark-100 flex-1">Theme</Text>
            <Text className="text-xl text-gray-500">›</Text>
          </TouchableOpacity>

          <TouchableOpacity className="profile-field">
            <View className="profile-field__icon">
              <Text className="text-lg">❓</Text>
            </View>
            <Text className="base-regular text-dark-100 flex-1">Help & Support</Text>
            <Text className="text-xl text-gray-500">›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile