/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';
import axios from 'axios';
import { ReturnDTO } from '../models/returnDTO.model';
import { environment } from 'src/environments/config';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  public async getAlbums(): Promise<Album[]> {
    const returnDTO = await this.WebRequestAlbumAPI();

    if (returnDTO.wasSuccess && Array.isArray(returnDTO.returnObj.response)) {
      const albumsData: any[] = returnDTO.returnObj.response;
      const albums: Album[] = albumsData.map((albumData) => ({
        id: albumData.id_album,
        nm_album: albumData.nm_album,
        dt_album: albumData.dt_album,
        thumbnail_image: albumData.thumbnail_image,
        qt_photos: albumData.qt_photos,
        url_album: albumData.url_album
      }));
      albums.sort((a, b) => b.id - a.id);
      return albums;
    } else {
      return [];
    }
  }

  private async WebRequestAlbumAPI(): Promise<ReturnDTO> {
    const responseAPI = new ReturnDTO();
    const apiUrl = environment.apiUrl;
    try {
      const result = await axios.get(apiUrl);

      if (result && result.data && result.data.response) {
        responseAPI.returnObj = result.data;
        responseAPI.wasSuccess = true;
      }
    } catch (error) {
      responseAPI.wasSuccess = false;
      responseAPI.errorObj = error;
    }

    return responseAPI;
  }
}
