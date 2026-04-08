import { ComponentFixture, TestBed } from '@angular/core/testing';
import { convertToParamMap, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Characterdetails } from './characterdetails';

describe('Characterdetails', () => {
  let component: Characterdetails;
  let fixture: ComponentFixture<Characterdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Characterdetails],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 'test-id' })
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Characterdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
