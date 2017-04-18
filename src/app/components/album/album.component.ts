import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../../Album';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(private SS: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id']).subscribe((id) => {
        this.SS.get_Album(id).subscribe(album =>  {
          this.album = album;
        })
      })
  }

}
