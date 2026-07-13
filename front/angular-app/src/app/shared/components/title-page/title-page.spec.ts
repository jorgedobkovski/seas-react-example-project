import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePage } from './title-page';

describe('TitlePage', () => {
  let component: TitlePage;
  let fixture: ComponentFixture<TitlePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitlePage],
    }).compileComponents();

    fixture = TestBed.createComponent(TitlePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
