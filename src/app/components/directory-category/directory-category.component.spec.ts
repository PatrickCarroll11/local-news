import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryCategoryComponent } from './directory-category.component';

describe('DirectoryCategoryComponent', () => {
  let component: DirectoryCategoryComponent;
  let fixture: ComponentFixture<DirectoryCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectoryCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectoryCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
