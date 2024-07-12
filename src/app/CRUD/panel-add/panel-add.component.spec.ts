import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAddComponent } from './panel-add.component';

describe('PanelAddComponent', () => {
  let component: PanelAddComponent;
  let fixture: ComponentFixture<PanelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
