import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'teste';

  toggleSidebar () {
    $('#sidebar').toggleClass('active');
    $('#sidebarCollapse').toggleClass('active');
  }
}
