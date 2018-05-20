import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //vai-se transformar o objeto que vem pelas props num array
    let transformedIngredients = Object.keys(props.ingredients).map(igKey =>{
        return [...Array(props.ingredients[igKey])].map((_, i) =>{
            // console.log(igKey);
            // console.log(i);
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        });
    })
        .reduce((arr, el) =>{
            return arr.concat(el)
        }, []); //tranforma um array em algo diferente

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;