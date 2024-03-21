import { Component } from '@angular/core';

@Component({
  selector: 'lib-menubar-tree-node',
  standalone: true,
  imports: [],
  templateUrl: './menubar-tree-node.component.html',
  styleUrl: './menubar-tree-node.component.css'
})
export class MenubarTreeNodeComponent implements OnInit {
  @Input() data: MenuPos[] | undefined;
  @Input() trigger: MenuPos | undefined;
  @Input() isRootNode = false;
  @Input() root: MenuPos | undefined;
  @Input() level: number = 0;
  @Input() level_tree: string = "0";

  constructor(public menuItems: MenuItems, private router: Router) {

  }

  getData(node: MenuPos) {
    //if (!this.dataLoaded) {
    //  this.isLoading = true;
    //  (this.database.getChildren(node)).subscribe((d) => {
    //    this.data = d?.slice() || [];
    //    this.isLoading = false;
    //    this.dataLoaded = true;
    //  });
    //}
    //this.data =  this.database.getChildren(node)?.slice() || [];
    this.data = node.children;
  }

  clickMenuItem(menuItem: MenuPos) {
    console.log(menuItem.name);
    console.log(this.router.url);
    console.log(this.router.url.split('?')[0]);
    this.router.navigateByUrl((this.router.url.split('?')[0] + "?Mode=" + menuItem.state)).then(() => {
      window.location.reload();
    });

    //this.selectedMenu = menuItem.menuLinkText;
  }

  isExpandable(node: MenuPos | undefined) {
    if (node != undefined) {
      if (node.children != undefined)
        return true;
      else
        return false;
    }
    else {
      return false;
    }
    //return this.database.isExpandable(node);
  }
  ngOnInit(): void {

  }


}
