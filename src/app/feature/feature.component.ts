import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styles: [
    `
      main {
        background-color: lightgrey;
        padding: 1rem;
      }
    `,
  ],
})
export class FeatureComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  helloFromService = '';
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.use(this.translateService.getDefaultLang());
    this.helloFromService = this.translateService.instant('MFE1.HELLO.MESSAGE');
  }

  onOpenMfe(){
    let params = { 'isOpen': true };
    const navigationExtras: NavigationExtras = {
      state: params
    };
    this.router.navigate(['/', { outlets: { mfe2: 'mfe2' } }], { relativeTo: this.route.parent, queryParams: params });
    // this.router.navigate(['/', { outlets: { mfe2: 'mfe2' } }], { relativeTo: this.route.parent, ...navigationExtras });
  }
}
