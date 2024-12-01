import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPlayboardComponent } from './canvas-playboard.component';

describe('CanvasPlayboardComponent', () => {
  let component: CanvasPlayboardComponent;
  let fixture: ComponentFixture<CanvasPlayboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasPlayboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanvasPlayboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
