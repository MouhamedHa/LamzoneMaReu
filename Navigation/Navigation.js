import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Image,StyleSheet } from 'react-native'

import Home from '../Components/Home'
import MeetingList from '../Components/MeetingList'
import AddMeeting from '../Components/AddMeeting'
import MeetingDetails from '../Components/MeetingDetails'

const MeetingStackNavigator = createStackNavigator({
    Home: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  MeetingList: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: MeetingList,
    navigationOptions: {
      title: 'Liste réunions'
    }
  },
  AddMeeting: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: AddMeeting,
    navigationOptions: {
      title: 'Ajouter réunions'
    }
    },
    MeetingDetails: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
      screen: MeetingDetails,
      navigationOptions: {
        title: 'Détails de la réunion'
      }
  }
})

export default createAppContainer(MeetingStackNavigator)