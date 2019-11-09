import React from 'react'

import {StyleSheet,View,FlatList} from 'react-native'

import MealItem from '../components/MealItem';

import {useSelector} from 'react-redux'

const MealList  = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const renderMealItem = itemData => {
        isFavorite = favoriteMeals.some(meal => meal.id ===itemData.item.id )
        return (<MealItem 
             title={itemData.item.title}
              image={itemData.item.imageUrl} 
              complexity={itemData.item.complexity} 
              affordability={itemData.item.affordability}
              duration={itemData.item.duration}
               onSelectMeal ={()=> {
                   props.navigation.navigate({routeName:'MealDetail',params:{mealId:itemData.item.id,mealTitle:itemData.item.title,isFav:isFavorite}})
               }} 
            
               />)
    }

    return(
        <View style={styles.list}>
        <FlatList style={{width:'100%'}} data={props.listData} keyExtractor={(item,index)=>item.id} renderItem={renderMealItem} />
        </View>
    )
}

const styles =  StyleSheet.create({
    list:{
        flex:1 ,
        margin:10,
        justifyContent:"center",
        alignItems:'center'
    }
    })

export default MealList