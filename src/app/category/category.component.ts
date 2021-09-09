import { Component, OnInit } from '@angular/core';
import { Category } from './category';

import { CategoryService } from '../services/category.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService
  ) {}
  title = 'Kategori Listesi';
  categories: Category[] = [];

  //categories: Category[] = [
  //  { id: 1, name: 'Elektronik' },
  //  { id: 2, name: 'Bilgisayar' },
  //  { id: 3, name: 'İletişim' },
  //  { id: 4, name: 'Müzik' },
  //];
  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
