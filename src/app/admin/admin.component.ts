import { Component } from '@angular/core';
import { createForm } from './admin.form';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  public readonly form = createForm();

}
