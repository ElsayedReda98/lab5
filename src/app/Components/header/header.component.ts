import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products/products.service';
import { RouterLink, RouterModule } from '@angular/router';
import { Uservm } from '../../viewmodels/uservm';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  Routes = [
    { path: 'home', title: 'Home' },
    { path: 'about', title: 'About' },
    { path: 'contact', title: 'Contact' },
    { path: 'profile', title: 'Profile' },
    { path: 'cart', title: 'Cart' },
    { path: 'login', title: 'Login' },
    { path: 'signup', title: 'SignUp' },
    { path: 'subjects', title: 'Subjects' },
    { path: 'products/add', title: 'Add Product' },
    { path: 'categories', title: 'Categories' },
  ];

  user!: Uservm | null;

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.getCurrentUser()
      .subscribe(u => {
        this.user = u;
      })
  }

  logOut() {
    this.userService.remove();
  }
}
