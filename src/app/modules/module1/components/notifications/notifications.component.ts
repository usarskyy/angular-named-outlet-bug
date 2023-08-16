import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROOT_SHELL_ACTIVATED_ROUTE_TOKEN } from '../../injection-tokens';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  constructor(private readonly router: Router,
              public readonly activatedRoute: ActivatedRoute,
              @Inject(ROOT_SHELL_ACTIVATED_ROUTE_TOKEN) public readonly shellActivatedRoute: ActivatedRoute) {
  }

  async close0() {
    await this.router.navigate([{ outlets: { sidebar: null } }]);
  }

  async close1() {
    await this.router.navigate([{ outlets: { sidebar: null } }], { relativeTo: this.activatedRoute });
  }

  async close1v2() {
    await this.router.navigate([{ outlets: { sidebar: null } }], { relativeTo: this.activatedRoute.parent });
  }

  async close2() {
    await this.router.navigate([{ outlets: { sidebar: null } }], { relativeTo: this.shellActivatedRoute });
  }

  async close3() {
    await this.router.navigate([{ outlets: { sidebar: null } }], { relativeTo: this.shellActivatedRoute.parent });
  }
}
