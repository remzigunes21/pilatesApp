/* eslint-disable quotes */
import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import TabBar from './app/components/BottomTabBar';

import SearchScreen from './app/screens/SearchScreen';
import DetailScreen from './app/screens/DetailScreen';
import HomeScreen from './app/screens/HomeScreen';
import {HrpHeader} from './app/components';
import ProfileScreen from './app/screens/ProfileScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import {Colors} from './app/theme';

//demo screens /////

const SearchStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator();

const MainTabs = createBottomTabNavigator();
const AuthStack = createStackNavigator();

const RootStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Detail">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          headerShown: true,
        })}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailScreen}
        options={({route, navigation}) => ({
          title: route.params?.title || '',
          headerStyle: {
            backgroundColor: Colors.FACEBOOK,
            shadowColor: 'transparent',
          },

          headerLeft: () => (
            <HrpHeader
              onBack={() => navigation.navigate('Home')}
              iconName="angle-left"
              iconSize={24}
              iconColor={Colors.WHITE}
              iconType="Fontisto"
            />
          ),

          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <HrpHeader
                onBack={() => navigation.navigate('Home')}
                iconName="angle-left"
                iconSize={24}
                iconColor={Colors.WHITE}
                iconType="Fontisto"
              />
              <HrpHeader
                onBack={() => navigation.navigate('Home')}
                iconName="heart-circle-outline"
                iconSize={32}
                iconColor={Colors.WHITE}
                iconType="MaterialCommunityIcons"
              />
            </View>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
}

function SearchStackNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </SearchStack.Navigator>
  );
}
function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator mode="modal">
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          headerShown: true,
        })}
      />
    </ProfileStack.Navigator>
  );
}

function SettingsStackNavigator() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={() => ({
          headerShown: true,
        })}
      />
    </SettingStack.Navigator>
  );
}

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

function MainTabsNavigator() {
  return (
    <MainTabs.Navigator
      initialRouteName="Home"
      tabBar={(props) => <TabBar {...props} />}>
      <MainTabs.Screen name="Home" component={HomeStackNavigator} />
      <MainTabs.Screen name="Search" component={SearchStackNavigator} />
      <MainTabs.Screen name="Profile" component={ProfileStackNavigator} />
      <MainTabs.Screen name="Settings" component={SettingsStackNavigator} />
    </MainTabs.Navigator>
  );
}

//demo screens /////

const Navigation = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <>
      <RootStack.Navigator mode="card" headerMode="none">
        {isLogin ? (
          <RootStack.Screen name="Main" component={MainTabsNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthStackNavigator} />
        )}
      </RootStack.Navigator>
    </>
  );
};

export default Navigation;
