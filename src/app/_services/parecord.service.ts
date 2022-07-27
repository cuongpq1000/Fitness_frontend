
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {AuthService} from './auth.service';
import {PARecord} from '../_models/PARecord';
import { EditComponent } from '../edit/edit.component';
import { Ranking } from '../_models/Ranking';




@Injectable({ providedIn: 'root' })
export class PArecordService {
  constructor(private http: HttpClient, private auth: AuthService, private edit: EditComponent) { }

  getMyProgress() {
      return this.http.get<PARecord[]>(`http://fitnesstracking2.herokuapp.com/parecord/myprogress`);
  }

  add(parecord) {
    return this.http.post(`http://fitnesstracking2.herokuapp.com/parecord/addparecord`, parecord);

  }

  getRanking(){
    return this.http.get<Ranking[]>(`http://fitnesstracking2.herokuapp.com/parecord/getranking`);
  }

  delete(date: string) {
    return this.http.delete(`http://fitnesstracking2.herokuapp.com/parecord/${date}`);

  }



}
