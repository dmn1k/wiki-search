import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSearchComponentComponent } from './wiki-search-component.component';

describe('WikiSearchComponentComponent', () => {
  let component: WikiSearchComponentComponent;
  let fixture: ComponentFixture<WikiSearchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiSearchComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
