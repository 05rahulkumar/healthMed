import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      name: 'Product 1',
      color: 'Blue',
      price: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      discount: 10,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Product 2',
      color: 'Red',
      price: 60,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      discount: 15,
      image: 'https://via.placeholder.com/300'
    },
    // Add more products as needed
  ];
}


