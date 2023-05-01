import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoltServicesComponent } from './bolt-services.component';

describe('BoltServicesComponent', () => {
  let component: BoltServicesComponent;
  let fixture: ComponentFixture<BoltServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoltServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoltServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
