import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Characterlist } from './characterlist';

describe('Characterlist', () => {
  let component: Characterlist;
  let fixture: ComponentFixture<Characterlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Characterlist],
      providers: [provideRouter([]), provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(Characterlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
