import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlH1Component } from './html-h1.component';

describe('HtmlH1Component', () => {
  let component: HtmlH1Component;
  let fixture: ComponentFixture<HtmlH1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlH1Component]
    });
    fixture = TestBed.createComponent(HtmlH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
