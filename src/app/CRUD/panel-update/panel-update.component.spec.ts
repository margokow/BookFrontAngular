import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelUpdateComponent } from './panel-update.component';

describe('PanelUpdateComponent', () => {
  let component: PanelUpdateComponent;
  let fixture: ComponentFixture<PanelUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
