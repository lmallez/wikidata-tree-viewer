import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCharacterComponent } from './main-character.component';

describe('MainCharacterComponent', () => {
  let component: MainCharacterComponent;
  let fixture: ComponentFixture<MainCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
