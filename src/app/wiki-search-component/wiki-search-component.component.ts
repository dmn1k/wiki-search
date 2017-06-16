import { Component, OnInit } from '@angular/core';
import {WikiSearchService} from './wiki-search.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import {SearchResult} from './search-result';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search-component.component.html',
  styleUrls: ['./wiki-search-component.component.scss'],
  providers: [WikiSearchService]
})
export class WikiSearchComponentComponent implements OnInit {
  private searchTermStream = new Subject<string>();

  items: Observable<SearchResult[]>;

  constructor(private searchService: WikiSearchService) { }

  ngOnInit() {
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((input: string) => this.searchService.search(input));
  }

  search(input: string) {
    this.searchTermStream.next(input);
  }
}
