import { Component } from '@angular/core';

@Component({
  selector: 'lib-menubar-tree',
  standalone: true,
  imports: [],
  templateUrl: './menubar-tree.component.html',
  styleUrl: './menubar-tree.component.css'
})
export class MenubarTreeComponent implements OnInit {
  menuType: string = 'default';
  mobileQuery: MediaQueryList;
  isLoggedIn: boolean;
  private _mobileQueryListener: () => void;
  //initialData: string[] = [];
  constructor(private route: Router, public menuItems: MenuItemsPos, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private tokenService: TokenService) {

    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.isLoggedIn = true;

    //this.initialData = this.menuItems.rootLevelNodes.slice();
    this.route.events.subscribe((val: any) => {

      if (val.url) {
        if (val.url.includes('pos')) {
          //alert(this.menuType);
          this.menuType = 'pos';
          console.warn('zzz:' + this.menuType);
        }
        else if (val.url.includes('kupa')) {
          //alert(this.menuType);
          this.menuType = 'pos';
          console.warn('zzz:' + this.menuType);
        }
        else {
          this.menuType = 'default';
          console.warn('kkk:' + this.menuType);
        }
      }
      else {

      }
    });

  }
  ngOnInit(): void {

  }
}
