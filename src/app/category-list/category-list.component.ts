import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import * as seedRandom from 'seedrandom';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  readonly numberOfCategories = 12;

  code: string | null = null;
  categories: string[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.code = this.route.snapshot.paramMap.get('code');
    this.loadCategories();
  }

  getRandomItemsFromArray<T>(array: T[], count: number, seed: string): T[] {
    const indices: number[] = [];
    let i = 0;

    while (indices.length < count) {
      const index = Math.floor(seedRandom(seed + i)() * array.length);
      if (!indices.includes(index)) {
        indices.push(index);
      }
      i += 1;
    }

    return indices.map(index => array[index]);
  }


  loadCategories(): void {
    this.http.get(`assets/categories.csv`, { responseType: 'text' }).subscribe(data => {
      const date = new Date();
      const seed = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${this.code}`;

      const allCategories = data.split('\n').filter(each => each);

      this.categories = this.getRandomItemsFromArray(allCategories, this.numberOfCategories, seed);
    });
  }

}
