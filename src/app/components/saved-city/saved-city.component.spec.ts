import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCityComponent } from './saved-city.component';

describe('SavedCityComponent', () => {
  let component: SavedCityComponent;
  let fixture: ComponentFixture<SavedCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedCityComponent]
    });
    fixture = TestBed.createComponent(SavedCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
