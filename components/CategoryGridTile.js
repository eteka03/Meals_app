import React from 'react'

import {Platform,TouchableNativeFeedback,TouchableOpacity,StyleSheet,View,Text} from 'react-native'

const CategoryGridTile = props => {

    let Touchable = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21){
        Touchable = TouchableNativeFeedback
    }
    return(
        <View style={styles.gridItem}>

        
        <Touchable style={{flex:1}} onPress={props.onSelect}>
    <View style={{...styles.container,...{backgroundColor:props.color}}}>
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
        </Touchable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderRadius:15,
        overflow:"hidden",
        elevation:5
    
    },
    title:{
        fontFamily:'open-sansBold',
        fontSize:22,
        textAlign:"right"
    },
    container:{
        flex:1,
        borderRadius:15,
        shadowColor:'black',
        shadowOffset:{width:0 , height: 2},
        elevation: 3  ,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    }
})

export default CategoryGridTile