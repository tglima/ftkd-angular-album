export class Album {
  public id: number;
  public nm_album: string;
  public dt_album: string;
  public thumbnail_image: string;
  public qt_photos: number;
  public url_album: string;

  constructor(
    id: number,
    nm_album: string,
    dt_album: string,
    thumbnail_image: string,
    qt_photos: number,
    url_album: string
  ) {
    this.id = id;
    this.nm_album = nm_album;
    this.dt_album = dt_album;
    this.thumbnail_image = thumbnail_image;
    this.qt_photos = qt_photos;
    this.url_album = url_album;
  }
}
