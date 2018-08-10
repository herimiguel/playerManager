import { Component, OnInit } from '@angular/core';
import { PlayerService } from "../player.service";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players = [];

  constructor(private _playerService: PlayerService) { };

  getPlayers(){
    this._playerService.readPlayers().then(players => this.players = players).catch(err => console.log(err));
  }

  ngOnInit() {
    this.getPlayers()  
  }

  sendDestroy(id){
    this._playerService.destroyPlayer(id).then(response => this.getPlayers()).catch(err => console.log(err));
  }
}