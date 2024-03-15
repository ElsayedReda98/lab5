import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from '../../interfaces/iuser';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
 templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  user: IUser = {userName: '', password: ''}
  constructor(private authService: AuthService, private snackBar: MatSnackBar) {
  }
  onSubmit(signUpForm: any) {
    this.authService.signUp(signUpForm.value).subscribe((data) => {
      console.log(data)
       this.snackBar.open('User has been created successfully', 'OKAY')
    })
  }
}
