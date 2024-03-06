import { Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

/**
 * @title Autosize sidenav
 */
@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrl: 'sidebar.component.scss',
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, MatToolbarModule],
})
export class SidebarComponent {
  showFiller = false;
}

