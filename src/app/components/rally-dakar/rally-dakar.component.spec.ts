import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RallyDakarComponent } from './rally-dakar.component';

describe('RallyDakarComponent', () => {
  let component: RallyDakarComponent;
  let fixture: ComponentFixture<RallyDakarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RallyDakarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RallyDakarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
