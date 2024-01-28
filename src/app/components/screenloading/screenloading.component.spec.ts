import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenloadingComponent } from './screenloading.component';

describe('ScreenloadingComponent', () => {
  let component: ScreenloadingComponent;
  let fixture: ComponentFixture<ScreenloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenloadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
