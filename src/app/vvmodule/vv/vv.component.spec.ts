import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VVComponent } from './vv.component';

describe('VvvomponentComponent', () => {
  let component: VVComponent;
  let fixture: ComponentFixture<VVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
