import React from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {NavigationContext} from '@react-navigation/native';

import HrpIcon from '../HrpIcon';
import {Colors} from '../../theme';

function BottomTabBar({state, descriptors, navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          //demo tab-bar///
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={label}
              style={styles.itemContainer}>
              {label === 'Home' && (
                <HrpIcon
                  name="home"
                  color={isFocused ? Colors.PRIMARY : Colors.DARK}
                  size={24}
                  type="Entypo"
                />
              )}
              {label === 'Search' && (
                <HrpIcon
                  name="search"
                  color={isFocused ? Colors.PRIMARY : Colors.DARK}
                  size={24}
                  type="Fontisto"
                />
              )}

              {label === 'Profile' && (
                <>
                  <HrpIcon
                    name="account-circle-outline"
                    color={isFocused ? Colors.PRIMARY : Colors.DARK}
                    size={24}
                    type="MaterialCommunityIcons"
                  />
                </>
              )}
              {label === 'Settings' && (
                <>
                  <HrpIcon
                    name="settings"
                    color={isFocused ? Colors.PRIMARY : Colors.DARK}
                    size={24}
                    type="Feather"
                  />
                </>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.GREY_LIGHTEST,
  },
  itemContainer: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 18,
    paddingRight: 18,
  },
  activeItemContainer: {
    backgroundColor: Colors.GREY_LIGHTEST,
  },
  activeTitle: {
    color: 'red',
  },
  badgeContainer: {
    position: 'absolute',
    right: 16,
    top: 2,
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    zIndex: 99,
  },
  badgeContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
