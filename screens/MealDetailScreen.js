import React,{useEffect,useCallback} from 'react';
import {StyleSheet,View,Text,ScrollView,Image} from 'react-native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton  from "../components/HeaderButton";
import DefaultText from '../components/DefaultText'
import {useSelector,useDispatch} from 'react-redux'
import {toggleFavorite} from '../store/actions/meals'

const ListItem = props => {
    return <View style={styles.ListItem}>
        <Text>{props.children}</Text>
    </View>
}

const MealDetailScreen = props => {

const availableMeals = useSelector(state => state.meals.meals)

    const mealId = props.navigation.getParam('mealId');
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === meal.id))
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
   
   const dispatch = useDispatch();

   const toggleFavoriteHandler = useCallback(
       () => {
           
       dispatch(toggleFavorite(selectedMeal.id))
       },
       [dispatch,mealId],
   ) 
   


   useEffect(() => {
      props.navigation.setParams({toggleFav: toggleFavoriteHandler})
   }, [toggleFavoriteHandler])


   useEffect(()=>{
       props.navigation.setParams({isFav: favoriteMeals})
   },[favoriteMeals])
   
    return(
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>

            <View style={styles.details}>
            <DefaultText>{selectedMeal.duration} m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()} </DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()} </DefaultText>
            </View>

            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
            )
            )}
            
            <Text style={styles.title}>steps</Text>
            {selectedMeal.steps.map(step => (
            <ListItem key={step}>{step}</ListItem>
            )
            )}
        
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions   = navigationData => {
    
  //const mealId =navigationData.navigation.getParam('mealId');
    
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    const mealTitle =navigationData.navigation.getParam('mealTitle');
    const isFavorite = navigationData.navigation.getParam('isFav')
    
    return{
        headerTitle:mealTitle,
        headerRight:(<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName={isFavorite ?'ios-star':'ios-star-outline'} onPress={toggleFavorite}/>
            
            
        </HeaderButtons>)
    }
}

const styles =  StyleSheet.create({
image:{
    width:'100%',
    height:200
},
details:{
    flexDirection:"row",
    padding:15,
    justifyContent:"space-around"
},
title:{
    fontFamily:'open-sansBold',
    fontSize:22,
    textAlign:'center'
},
ListItem:{
    marginVertical:10,
    marginHorizontal:20,
    borderColor:'#ccc',
    borderWidth:1,
    padding:10
}
})

export default MealDetailScreen