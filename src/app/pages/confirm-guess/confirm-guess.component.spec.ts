import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmGuessComponent } from './confirm-guess.component';

describe('ConfirmGuessComponent', () => {
  let component: ConfirmGuessComponent;
  let fixture: ComponentFixture<ConfirmGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmGuessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
