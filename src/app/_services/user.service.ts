import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {User} from '../_models/user';




@Injectable({ providedIn: 'root' })
export class UserService {


  constructor(private http: HttpClient) { }

  getAll() {
     return this.http.get<User[]>(`http://fitnesstracking2.herokuapp.com/user/allusers`);
  }



  register(user: User) {
    return this.http.post(`http://fitnesstracking2.herokuapp.com/user/register`, user);
  }
  setGoal(calories: number, minutes: number){
    const values = {
      calories,
      minutes
    }
    return this.http.post(`http://fitnesstracking2.herokuapp.com/user/setgoals`, values);
  }

  getGoal(res: User){
    return this.http.get<User>(`http://fitnesstracking2.herokuapp.com/user/getgoals/${res}`);
  }
}
