import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarTreeNodeComponent } from './menubar-tree-node.component';

describe('MenubarTreeNodeComponent', () => {
  let component: MenubarTreeNodeComponent;
  let fixture: ComponentFixture<MenubarTreeNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarTreeNodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenubarTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
