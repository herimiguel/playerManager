import { Component, OnInit } from '@angular/core';
import { Player } from "../player";
import { PlayerService } from "../player.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player = new Player();
  
  constructor(private _playerService: PlayerService, private _router: Router) { };

  sendPlayer(){
    this._playerService.createPlayer(this.player).then(response => console.log (response)).catch(err => console.log(err));
    this.player = new Player();
    this._router.navigateByUrl('/players/list')
  }

  ngOnInit() {
  }

}