import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import MealList from '../components/MealList'
import {MEALS} from '../data/dummy-data';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import {useSelector} from 'react-redux'

const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals )

    if (favMeals.length ===  0  ){
        return <View style ={styles.content}>
            <Text>No favorites Meals</Text>
        </View>
    }
   
    return(
   <MealList listData={favMeals} navigation={props.navigation}/>
    )
}

FavoritesScreen.navigationOptions = navData => {

    return({
    headerTitle:'Favorites',
    headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='menu' iconName='ios-menu' onPress={()=>{
            navData.navigation.toggleDrawer()
        }}/> 
    </HeaderButtons>
    }
    )
}

const styles =  StyleSheet.create({

content:{
    flex:1 ,
justifyContent:"center",
alignItems:"center"
},
screen:{
    flex:1 ,
    justifyContent:"center",
    alignItems:'center'
}
})

export default FavoritesScreen