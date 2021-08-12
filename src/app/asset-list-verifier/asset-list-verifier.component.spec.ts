import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetListVerifierComponent } from './asset-list-verifier.component';

describe('AssetListVerifierComponent', () => {
  let component: AssetListVerifierComponent;
  let fixture: ComponentFixture<AssetListVerifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetListVerifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetListVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
