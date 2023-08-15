import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROOT_SHELL_ACTIVATED_ROUTE_TOKEN } from '../../injection-tokens';

@Component({
             selector: 'app-finances',
             templateUrl: './finances.component.html',
             styleUrls: ['./finances.component.scss']
           })
export class FinancesComponent {

  constructor(private readonly router: Router,
              @Inject(ROOT_SHELL_ACTIVATED_ROUTE_TOKEN) public readonly shellActivatedRoute: ActivatedRoute,) {
  }

  async showMeLatestNews() {
    await this.router.navigate([{ outlets: { sidebar: 'notifications' } }], { relativeTo: this.shellActivatedRoute });
  }
}
