import {Component, OnInit} from '@angular/core';
import {PostDetails} from '../interfaces/interface';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: PostDetails[] = [];
  filteredList: PostDetails[] = [];
  categories = ['Appetizers - Vegetarians','Appetizers - Non Vegetarians','Breakfast Recipes','Baked Goodies','Breads Recipes','Kids Delights','Street Food Recipes','Dry Sidedish - Non Vegetarian','Dry Sidedish - Vegetarian','Indian Breads','Festival Sweets','Homemade Goodies'];
  searchCategory;
  showMessage = false;

  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.getAllPosts().subscribe(res => {
      this.posts = res;
    }, error => {
      console.log(error);
    });
  }

  filterByCategory(category): any {
    this.searchCategory = category;
    const filteredList = [];
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i]['category'] === category) {
        filteredList.push(this.posts[i]);
      }
    }
    this.filteredList = filteredList;
    if (this.filteredList.length === 0) {
      this.showMessage = true;
      setTimeout(time => {
        this.showMessage = false;
      }, 5000);
    }
  }

}
