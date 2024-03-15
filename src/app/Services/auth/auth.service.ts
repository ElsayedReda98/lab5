import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Models/user';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IUser } from '../../interfaces/iuser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private HttpClient: HttpClient) {}

  signUp(user:IUser): Observable<IUser> {
    return this.HttpClient.post<IUser>(`${environment.BASEURL}/users`, user);
  }
  signIn(user: IUser): Observable<IUser> {
    return this.HttpClient.get<IUser[]>(
      `${environment.BASEURL}/users?userName=${user.userName}&password=${user.password}`
    ).pipe(map((response) => {
      if(response.length){
        return response[0];
      }else
        throw new Error('invalid username or password')
    })
    );
  }
}
