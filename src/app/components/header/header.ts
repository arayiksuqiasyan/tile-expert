import {ChangeDetectionStrategy, Component, signal, viewChild} from '@angular/core';
import {HeaderSearch} from '../header-search/header-search';
import {Sidebar} from '../sidebar/sidebar';
import {NAV_ITEMS} from '../../utils/constants';

@Component({
  selector: 'app-header',
  imports: [HeaderSearch, Sidebar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  sidebar = viewChild<Sidebar>('sidebar');
  navItems = signal(NAV_ITEMS);
  notificationCount = signal(32);

  toggleSidebar(): void {
    this.sidebar()?.open();
  }
}