import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROOT_SHELL_ACTIVATED_ROUTE_TOKEN } from '../../injection-tokens';

@Component({
  selector: 'app-deposit-details',
  templateUrl: './deposit-details.component.html',
  styleUrls: ['./deposit-details.component.scss']
})
export class DepositDetailsComponent {

  constructor(private readonly router: Router,
              @Inject(ROOT_SHELL_ACTIVATED_ROUTE_TOKEN) public readonly shellActivatedRoute: ActivatedRoute,) {
  }

  async showMeNotifications() {
    await this.router.navigate([{ outlets: { sidebar: 'notifications' } }], { relativeTo: this.shellActivatedRoute });
  }

}
