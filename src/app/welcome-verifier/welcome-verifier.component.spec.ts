import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeVerifierComponent } from './welcome-verifier.component';

describe('WelcomeVerifierComponent', () => {
  let component: WelcomeVerifierComponent;
  let fixture: ComponentFixture<WelcomeVerifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeVerifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
