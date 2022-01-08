import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvvomponentComponent } from './vvvomponent.component';

describe('VvvomponentComponent', () => {
  let component: VvvomponentComponent;
  let fixture: ComponentFixture<VvvomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvvomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvvomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
