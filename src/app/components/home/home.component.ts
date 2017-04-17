import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchStr: string;
  constructor(private SS: SpotifyService) { }

  ngOnInit() {
  }
  searchMusic(){
    this.SS.searchMusic(this.searchStr)
      .subscribe(res => {
        console.log(res.artists.items);
      });
  }

}
