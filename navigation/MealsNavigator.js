import React from 'react'
import  {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/FavoritesScreens'
import {Ionicons} from '@expo/vector-icons'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {Platform,Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FilterScreen  from '../screens/FilterScreen'



const defaultStackNavOptions  =  {
    headerStyle:{
        backgroundColor: Colors.primary
    },
    headerTitleStyle:{
        fontFamily:'open-sansBold'
    },

    headerTintColor:'white'
};




const MealsNavigator =  createStackNavigator({
    Categories: CategoriesScreen,
    CategoriesMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    });




   const FavNavigator =  createStackNavigator({
        Favorites:FavoritesScreen,
        MealDetail:MealDetailScreen
    },{
        defaultNavigationOptions:defaultStackNavOptions
    })



const tabScreenConfig = {
    Meals:{screen:MealsNavigator, navigationOptions:{
        tabBarIcon: tabinfo => {
            return <Ionicons name='ios-restaurant' size={25} color={tabinfo.tintColor}/>
        },
        tabBarColor:Colors.primary,
        tabBarLabel: Platform.OS === "android" ? <Text style={{fontFamily:'open-sansBold'}}>Meals</Text> : <Text>Meals</Text>
    }},
    Favorites:{screen:FavNavigator , navigationOptions: {  tabBarIcon: tabinfo => {
       return <Ionicons name='ios-star' size={25} color={tabinfo.tintColor}/>
   },
   tabBarColor:Colors.secondary,
   tabBarLabel: Platform.OS === "android" ? <Text style={{fontFamily:'open-sansBold'}}>Favorites</Text> : <Text>Favorites</Text>
}}
   };





const MealsFavTabNavigator = Platform.OS === 'android'
?createMaterialBottomTabNavigator(tabScreenConfig,{
    activeColor:'white',
    shifting:true
})
: createBottomTabNavigator(
{
    tabScreenConfig,
    tabBarOptions:{
        activeTintColor:Colors.secondary
    }
});




const  FiltersNavigator= createStackNavigator(
    {
    Filters:FilterScreen
},
  {
    defaultNavigationOptions: defaultStackNavOptions
});





const MainNavigator = createDrawerNavigator(
    {
      MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
          drawerLabel: 'Meals'
          
        }
      },
      Filters: FiltersNavigator
    },
    {
      contentOptions: {
        activeTintColor: Colors.secondary,
       labelStyle:{
        fontFamily:'open-sansBold'
       }
      }
    }
  );
  

export default createAppContainer(MainNavigator);