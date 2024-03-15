import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { AuthService } from '../../Services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../Services/user/user.service';
import { IUser } from '../../interfaces/iuser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private authService: AuthService
  , private snackbar:MatSnackBar
  , private userService: UserService) {
  }
  user :IUser = {userName: '', password:''};
  onSubmit(loginForm: any) {
    this.authService.signIn(loginForm.value).subscribe({
     next:(data) => {
      //  console.log(data);
       this.userService.save(data)
       this.snackbar.open('user has been logged in successfully', 'OKAY')
     },
     error:(err) => {
      this.snackbar.open(err, 'OKAY');
     }
    });
  }
}
