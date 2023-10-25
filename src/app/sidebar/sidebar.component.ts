import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit  {
  ngAfterViewInit() {
    feather.replace();
  }
}
