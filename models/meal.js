class Meal {
    constructor(id,categoryIds,title,affordability,complexity,imageUrl,duration,ingredients,steps,isGlutenFree,isVegan,isVegetarian,isLactoseFree){
 this.id=id;
 this.categoryIds = categoryIds;
 this.title  =title;
this.affordability = affordability;
this.imageUrl = imageUrl;
this.complexity = complexity ; 
this.isGlutenFree = isGlutenFree ; 
this.steps = steps ; 
this.isLactoseFree = isLactoseFree ; 
this.duration = duration ;
this.ingredients = ingredients ; 
this.isVegan = isVegan;
this.isVegetarian = isVegetarian
    }
}

export default Meal