import React from 'react';
import styles  from './recipe.module.css';


const Recipe = ({title, calories,imgurl, ingredients})=> 
     { 
        return (
            
            <div className={styles.recipe} >
               
                <h2 > {title}</h2>
                 <p>Calories :
                     {calories}</p>
                     <img style={{'borderRadius':'6px'}} src={imgurl} alt="imagename-name"  />
                 <h2>Ingredient for this recipe.</h2>
                 <ul>{ingredients.map(ingredient=>(
                     <li> {ingredient.text}</li>
                 ))}

                 </ul>
               
            </div>
          );
    }

 

  
export default Recipe;