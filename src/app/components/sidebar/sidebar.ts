import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {InputComponent} from '../UI/input/input';
import {OutlinedInputComponent} from '../UI/outlined-input/outlined-input';
import {RoundCheckboxComponent} from '../UI/round-checkbox/round-checkbox';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  imports: [InputComponent, OutlinedInputComponent, RoundCheckboxComponent, FormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  isOpen = signal(false);
  searchValue = signal('');
  authorValue = signal('');
  isParticipant = signal(false);
  strictSearch = signal(false);
  inHeaders = signal(false);
  onlyTags = signal(false);
  onlyRequests = signal(false);
  onlyContacts = signal(false);

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }
}