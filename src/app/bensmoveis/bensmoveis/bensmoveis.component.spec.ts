import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BensmoveisComponent } from './bensmoveis.component';

describe('BensmoveisComponent', () => {
  let component: BensmoveisComponent;
  let fixture: ComponentFixture<BensmoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BensmoveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BensmoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
