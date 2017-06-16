import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {SearchResult} from './search-result';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/toArray';

@Injectable()
export class WikiSearchService {
  private readonly WIKI_SEARCH_URL = 'http://en.wikipedia.org/w/api.php';

  constructor(private jsonp: Jsonp) { }


  search(input: string): Observable<SearchResult[]> {
    const params = new URLSearchParams();
    params.set('search', input);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(this.WIKI_SEARCH_URL, {search: params})
      .flatMap(r => <string[]> r.json()[1])
      .map(r => new SearchResult(r, `http://en.wikipedia.org/wiki/${encodeURI(r)}`))
      .toArray();
  }
}
