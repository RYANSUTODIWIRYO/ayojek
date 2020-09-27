import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Home, Promo, Chat} from '../../screen';

const Tab = createMaterialTopTabNavigator();

class HomeTopTab extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          showIcon: true,
          indicatorStyle: {
            height: '70%',
            marginBottom: 8,
            borderRadius: 20,
            backgroundColor: '#006c0c',
          },
          tabStyle: {
            flexDirection: 'row',
          },
          style: {
            backgroundColor: '#00aa13',
          },
        }}>
        <Tab.Screen
          name="Promo"
          component={Promo}
          options={{
            tabBarIcon: () => <IconBottom image={images.promoImage} />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <IconBottom image={images.homeImage} />,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: () => <IconBottom image={images.chatImage} />,
          }}
        />
      </Tab.Navigator>
    );
  }
}

const IconBottom = (props) => {
  return (
    <View>
      <Image
        source={props.image}
        style={{width: 20, height: 20, tintColor: 'white'}}
      />
    </View>
  );
};

const images = {
  homeImage: require('../../asset/image/home.png'),
  promoImage: require('../../asset/image/promo.png'),
  chatImage: require('../../asset/image/chat.png'),
};

export default HomeTopTab;
