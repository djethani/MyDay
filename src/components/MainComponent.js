import React, { Component } from 'react';
import Home from './HomeComponent';
import Guide from './GuideComponent';
import Entry from './EntryComponent';
import Stats from './StatsComponent';
import General from './GeneralComponent';
import Weather from './WeatherComponent';
import Health from './HealthKit'
import SurveyCompletedScreen from '../screens/SurveyCompletedScreen';
import SurveyScreen from '../screens/SurveyScreen';
import TherapistComponent from '../screens/TherapistComponent'
import DailyTags from '../screens/DailyTags'
import { StyleSheet, ImageBackground, Button, View, Text } from 'react-native';
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';


const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />     
    })
});

const GuideNavigator = createStackNavigator({
    Guide: { screen: Guide }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

const TagsNavigator = createStackNavigator({
    DailyTags: { screen: DailyTags }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

const TherapistNavigator = createStackNavigator({
    Guide: { screen: TherapistComponent }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

const WeatherNavigator = createStackNavigator({
  Stats: { screen: Weather }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff",
    headerLeft: <Icon name="menu" size={24}
      color= 'white'
      onPress={ () => navigation.toggleDrawer() } />  
  })
});

const EntryNavigator = createStackNavigator({
    Entry: { screen: Entry }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

const FitNavigator = createStackNavigator({
  Fit: { screen: Health }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff",
    headerLeft: <Icon name="menu" size={24}
      color= 'white'
      onPress={ () => navigation.toggleDrawer() } />  
  })
});

const StatsNavigator = createStackNavigator({
    Stats: { screen: Stats }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

const stackNav = createStackNavigator({
    Survey: {
        screen: SurveyScreen
    },
    SurveyCompleted: {
        screen: SurveyCompletedScreen
    },
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

const GeneralNavigator = createStackNavigator({
  General: { screen: General }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff",
    headerLeft: <Icon name="menu" size={24}
      color= 'white'
      onPress={ () => navigation.toggleDrawer() } />  
  })
});

export default MainNavigator = createDrawerNavigator({
    // Start: 
    // { screen: StartNavigator},
      Survey: 
        { screen: stackNav,
          navigationOptions: {
            title: 'Survey',
            drawerLabel: 'Survey',
            drawerIcon: ({ tintColor, focused }) => (
              <Icon
                name='clipboard'
                type='font-awesome'            
                size={24}
                color={tintColor}
              />
            ),
          },
        },
      General: 
      { screen: GeneralNavigator,
        navigationOptions: {
          title: 'General Info',
          drawerLabel: 'General Info',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='address-card'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
        }, 
      },
    Entry: 
      { screen: EntryNavigator,
        navigationOptions: {
          title: 'Add',
          drawerLabel: 'Add',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='plus'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
        }, 
      },
    Weather: 
    { screen: WeatherNavigator,
      navigationOptions: {
        title: 'Weather',
        drawerLabel: 'Weather',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='sun-o'
            type='font-awesome'            
            size={24}
            color={tintColor}
          />
        ),
      }, 
    },
    Fit: 
    { screen: FitNavigator,
      navigationOptions: {
        title: 'Fit',
        drawerLabel: 'Fit',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='fire'
            type='font-awesome'            
            size={24}
            color={tintColor}
          />
        ),
      }, 
    },
    DailyTags: 
    { screen: TagsNavigator,
      navigationOptions: {
        title: 'Daily Tags',
        drawerLabel: 'Daily Tags',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='tags'
            type='font-awesome'            
            size={24}
            color={tintColor}
          />
        ),
      }, 
    },
    Home: 
      { screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='home'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
        }
      },
    Guide: 
      { screen: GuideNavigator,
        navigationOptions: {
          title: 'Guide',
          drawerLabel: 'Guide',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='book'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
        }, 
      },
    TherapistComponent: 
      { screen: TherapistNavigator,
        navigationOptions: {
          title: 'Find Therapists',
          drawerLabel: 'Find Therapists',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='user-md'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
        }, 
      },
    Stats: 
      { screen: StatsNavigator,
        navigationOptions: {
          title: 'Report',
          drawerLabel: 'Report',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='archive'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
        }, 
      }
}, {
  drawerBackgroundColor: '#D1C4E9'
});