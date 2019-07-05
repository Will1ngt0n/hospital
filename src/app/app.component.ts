import { Component } from '@angular/core';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital';
  
  List = [
    {ComponentName: "Admin", path: "/admin"},
    {ComponentName: "Patient", path: "/patients"}, /** Add actual value */
    {ComponentName: "Doctor", path: "/doctor"}
  ]
}
