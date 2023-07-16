import { Component, OnInit } from '@angular/core';
import { AlbumService } from './services/album.service';
import { Album } from './models/album.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AlbumService]
})
export class AppComponent implements OnInit {
  title = 'album';
  albums: Album[] = [];
  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.albumService
      .getAlbums()
      .then((albums) => {
        this.albums = albums;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
