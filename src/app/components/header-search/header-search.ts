import {ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, signal} from '@angular/core';
import {InputComponent} from '../UI/input/input';
import {OutlinedInputComponent} from '../UI/outlined-input/outlined-input';
import {CheckboxComponent} from '../UI/checkbox/checkbox';
import {FormsModule} from '@angular/forms';
import {HeaderSearchDropdownListItem, HISTORY_ITEMS} from '../../utils/constants';

@Component({
  selector: 'app-header-search',
  imports: [InputComponent, OutlinedInputComponent, CheckboxComponent, FormsModule],
  templateUrl: './header-search.html',
  styleUrl: './header-search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSearch {
  private el = inject(ElementRef);

  isOpen = signal(false);
  isDropdownOpen = signal(false);
  searchValue = signal('');
  authorValue = signal('');
  isParticipant = signal(false);
  strictSearch = signal(false);
  inHeaders = signal(false);
  onlyTags = signal(false);
  onlyRequests = signal(false);
  onlyContacts = signal(false);

  historyItems = signal<HeaderSearchDropdownListItem[]>(HISTORY_ITEMS);

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen() && !this.el.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
    this.isDropdownOpen.set(false);
  }

  onInputFocused(focused: boolean): void {
    if (focused) {
      this.isDropdownOpen.set(true);
    }
  }
}
