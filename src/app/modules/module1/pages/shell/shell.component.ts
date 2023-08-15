import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ROOT_SHELL_ACTIVATED_ROUTE_TOKEN } from '../../injection-tokens';

@Component({
             selector: 'app-shell',
             templateUrl: './shell.component.html',
             styleUrls: ['./shell.component.scss'],
             providers: [
               {
                 provide: ROOT_SHELL_ACTIVATED_ROUTE_TOKEN,
                 useExisting: ActivatedRoute,
               },
             ],
           })
export class ShellComponent {
  // responsible for initialization, etc
}
