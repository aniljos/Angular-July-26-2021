import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetStoreComponent } from './gadget-store.component';

describe('GadgetStoreComponent', () => {
  let component: GadgetStoreComponent;
  let fixture: ComponentFixture<GadgetStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GadgetStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
