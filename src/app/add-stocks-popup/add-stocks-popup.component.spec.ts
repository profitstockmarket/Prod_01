import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStocksPopupComponent } from './add-stocks-popup.component';

describe('AddStocksPopupComponent', () => {
  let component: AddStocksPopupComponent;
  let fixture: ComponentFixture<AddStocksPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStocksPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStocksPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
