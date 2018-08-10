import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Player } from './player';

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }

  createPlayer(player){
    return this._http.post('/api/create', player).map(data => data.json()).toPromise();
  }

  readPlayers(){
    return this._http.get('/api/read').map(data => data.json()).toPromise();
  }

  updatePlayer(playerInfo){
    return this._http.post(`/api/update/${playerInfo.id}`, playerInfo).map(data => data.json()).toPromise();
  }

  destroyPlayer(id){
    return this._http.delete(`/api/destroy/${id}`).map(data => data.json()).toPromise();
  }
}