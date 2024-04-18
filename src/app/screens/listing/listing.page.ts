import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodServies } from 'src/app/services/food.services';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

  categories: Category[] = [];
  foods: Food[]=[];


  constructor(private foodServices: FoodServies) { 
    this.categories.push(
      {
        id:1,
        label:"All",
        image:"assets/images/icons/all.png",
        active:true,

      }
    );

      this.categories.push(
        {
          id:2,
          label:"All",
          image:"assets/images/icons/all.png",
          active:false,
  
        }
      );

        this.categories.push(
          {
            id:3,
            label:"All",
            image:"assets/images/icons/all.png",
            active:false,
    
          }
        );
     
    this.categories.push(
      {
        id:4,
        label:"All",
        image:"assets/images/icons/all.png",
        active:false,

      }
    );
    
  }
  
  ngOnInit(){
    this.foods = this.foodServices.getFoods();

  }
    
  }
    
  

