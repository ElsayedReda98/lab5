import { Injectable } from '@angular/core';
import { Uservm } from '../../viewmodels/uservm';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: BehaviorSubject<Uservm | null>
  constructor() {
    this.currentUser = new BehaviorSubject<Uservm | null>(this.get());
  }

  getCurrentUser() {
    // alert("current user: " + this.currentUser);
    return this.currentUser;

  }

  getCurrentValue() {
    // alert("current value: " + this.currentUser.value);
    return this.currentUser.value;
  }

  get(): Uservm | null {
    let user = localStorage.getItem('user')
    if (user) {
      // alert("user " + user);
      return JSON.parse(user)
    }
    else
      return null;
  }

  save(user: Uservm) {
    localStorage.setItem('user', JSON.stringify(user))
    this.currentUser.next(user)
  }

  remove() {
    localStorage.removeItem('user');
    this.currentUser.next(null);
  }
}
