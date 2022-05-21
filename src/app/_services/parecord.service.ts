
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
      return this.http.get<PARecord[]>(`http://localhost:3030/parecord/myprogress`);
  }

  add(parecord) {
    return this.http.post(`http://localhost:3030/parecord/addparecord`, parecord);

  }

  getRanking(){
    return this.http.get<Ranking[]>(`http://localhost:3030/parecord/getranking`);
  }

  delete(date: string) {
    return this.http.delete(`http://localhost:3030/parecord/${date}`);

  }



}
