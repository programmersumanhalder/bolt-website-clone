import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesForPeopleComponent } from './cities-for-people.component';

describe('CitiesForPeopleComponent', () => {
  let component: CitiesForPeopleComponent;
  let fixture: ComponentFixture<CitiesForPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesForPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesForPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
