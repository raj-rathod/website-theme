import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingShootComponent } from './wedding-shoot.component';

describe('WeddingShootComponent', () => {
  let component: WeddingShootComponent;
  let fixture: ComponentFixture<WeddingShootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingShootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingShootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
