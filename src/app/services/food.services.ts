import { Injectable } from "@angular/core";
import { Food } from "../models/food.model";



@Injectable({
    providedIn: 'root',

})
export class FoodServies{
   getFoods(): Food[]{
    return[
        {
            id:1,
            title: 'Tradicional',
            price: 10,
            image:  'assets/images/food.png',
            description: 'Arroz, Feijão e Carne'
        },
        {
            id:2,
            title: 'Tradicional',
            price: 10,
            image:  'assets/images/food.png',
            description: 'Arroz, Feijão e Carne'
        },
        {
            id:3,
            title: 'Tradicional',
            price: 10,
            image:  'assets/images/food.png',
            description: 'Arroz, Feijão e Carne'
        },
        {
            id:4,
            title: 'Tradicional',
            price: 10,
            image:  'assets/images/food.png',
            description: 'Arroz, Feijão e Carne'
        },
        {
            id:5,
            title: 'Tradicional',
            price: 10,
            image:  'assets/images/food.png',
            description: 'Arroz, Feijão e Carne'
        },
        {
            id:6,
            title: 'Tradicional',
            price: 10,
            image:  'assets/images/food.png',
            description: 'Arroz, Feijão e Carne'
        },
    ];
   }

   getFood(id:number):Food | undefined{
   
    return this.getFoods().find((food)=>food.id===id);
   } 
}