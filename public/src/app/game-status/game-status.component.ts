import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit {
  game_num = null
  players = []
  subscription: Subscription;

  constructor(private _route: ActivatedRoute, private _playerService: PlayerService) { }

  getPlayers(){
    this._playerService.readPlayers().then(players => this.players = players).catch(err => console.log(err));
  }

  ngOnInit() {
    this.subscription = this._route.paramMap.switchMap(params => {
      return params.get('game_num')
  }).subscribe(game_num => this.game_num = game_num);
    this.getPlayers();
  }

  changeStatus(event){
    this._playerService.updatePlayer(event).then(player => this.getPlayers()).catch(err => console.log(err));
  }
}