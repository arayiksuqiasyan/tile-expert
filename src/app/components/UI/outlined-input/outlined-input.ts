import {ChangeDetectionStrategy, Component, forwardRef, input, signal} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {InputComponent} from '../input/input';

@Component({
  selector: 'app-outlined-input',
  imports: [InputComponent, FormsModule],
  templateUrl: './outlined-input.html',
  styleUrl: './outlined-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OutlinedInputComponent),
      multi: true,
    },
  ],
})
export class OutlinedInputComponent implements ControlValueAccessor {
  label = input<string>('');
  placeholder = input<string>('');

  value = signal('');
  disabled = signal(false);

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  onValueChange(val: string): void {
    this.value.set(val);
    this.onChange(val);
    this.onTouched();
  }

  writeValue(value: string): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}