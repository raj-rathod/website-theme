import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCatgoryComponent } from './service-catgory.component';

describe('ServiceCatgoryComponent', () => {
  let component: ServiceCatgoryComponent;
  let fixture: ComponentFixture<ServiceCatgoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCatgoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCatgoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
