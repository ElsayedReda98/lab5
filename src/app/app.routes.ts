import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CartComponent } from './Components/cart/cart.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { logOutGuard } from './Guards/logout/log-out.guard';
import { loginGuard } from './Guards/login/login.guard';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { DeleteProductComponent } from './Components/delete-product/delete-product.component';
import { CategoriesComponent } from './Components/categories/categories.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'product/:id', component: ProductDetailsComponent, title: 'Product' },
  { path: 'profile', component: ProfileComponent, title: 'Profile', canActivate: [logOutGuard] },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'login', component: LoginComponent, title: 'login', canActivate: [loginGuard] },
  { path: 'signup', component: SignUpComponent, title: 'SignUp' },
  { path: 'subjects', component: SubjectsComponent, title: 'subjects' },
  { path: 'products/add', component: AddProductComponent, title: 'Add Product' },
  { path: 'product/edit/:id', component: EditProductComponent, title: 'Edit Product' },
  { path: 'product/delete/:id', component: DeleteProductComponent, title: 'Delete Product' },
  { path: 'categories', component: CategoriesComponent, title: 'Categories' },
  { path: '**', component: NotfoundComponent },
];