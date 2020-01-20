import React from 'react';


const Recipe = ({title, calories,imgurl})=> 
     { 
        return (
            <div>
                <h2>{title}</h2>
                 <p>{calories}</p>
                <img src={imgurl} alt="imagename-name"/>
            </div>
          );
    }

 
export default Recipe;