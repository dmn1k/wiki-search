export class SearchResult {

  constructor(private _title: string, private _url: string) {
  }

  get title(): string {
    return this._title;
  }

  get url(): string {
    return this._url;
  }
}
