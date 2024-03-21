import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarTreeComponent } from './menubar-tree.component';

describe('MenubarTreeComponent', () => {
  let component: MenubarTreeComponent;
  let fixture: ComponentFixture<MenubarTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenubarTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
