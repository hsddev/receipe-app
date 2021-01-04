import React, {forwardRef} from 'react';
import style from './Recipe.css';

const Recipe = (props) => {

return (
    <div className="recipe">
        <h1>{props.title}</h1>
        <ol>
            {props.ingredients.map(ingredient => ( <li>{ingredient.text}</li>))}
        </ol>
        <p>{props.calories}</p>
        <img className="image" src={props.image} alt =""/>
    </div>
);

};


export default Recipe;


