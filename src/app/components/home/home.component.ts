import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchStr: string;
  searchResult: Artist[];
  constructor(private SS: SpotifyService) { }

  ngOnInit() {
  }
  searchMusic(){
    this.SS.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchResult = res.artists.items;
      });
  }

}
