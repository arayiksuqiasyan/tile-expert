import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CheckboxComponent} from '../checkbox/checkbox';

@Component({
  selector: 'app-round-checkbox',
  templateUrl: './round-checkbox.html',
  styleUrl: './round-checkbox.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RoundCheckboxComponent),
      multi: true,
    },
  ],
})
export class RoundCheckboxComponent extends CheckboxComponent {}